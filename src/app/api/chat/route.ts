import type { NextRequest } from "next/server";
import { z } from "zod";
import { buildSystemPrompt, CHAT_MODEL, getAnthropicClient } from "@/lib/anthropic";
import { fallbackAnswer } from "@/lib/chatFallback";

export const runtime = "nodejs";

const bodySchema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().trim().min(1).max(2000),
      })
    )
    .min(1)
    .max(20),
});

export async function POST(req: NextRequest) {
  let parsedBody;
  try {
    parsedBody = bodySchema.parse(await req.json());
  } catch {
    return Response.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const encoder = new TextEncoder();
  const lastQuestion = parsedBody.messages.filter((message) => message.role === "user").at(-1)?.content ?? "";

  let client;
  try {
    client = getAnthropicClient();
  } catch {
    // No API key configured: answer from the website's own FAQ and glossary instead.
    return new Response(fallbackAnswer(lastQuestion), {
      headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store", "X-Chat-Mode": "faq" },
    });
  }

  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      let sentText = false;
      try {
        const anthropicStream = client.messages.stream({
          model: CHAT_MODEL,
          max_tokens: 700,
          system: buildSystemPrompt(),
          messages: parsedBody.messages.map((message) => ({
            role: message.role,
            content: message.content,
          })),
        });

        anthropicStream.on("text", (text) => {
          sentText = true;
          controller.enqueue(encoder.encode(text));
        });

        await anthropicStream.finalMessage();
        controller.close();
      } catch (error) {
        console.error("Chat stream error", error);
        if (sentText) {
          controller.error(error);
        } else {
          // The model is unreachable - still give a helpful answer from the FAQ.
          controller.enqueue(encoder.encode(fallbackAnswer(lastQuestion)));
          controller.close();
        }
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Chat-Mode": "ai",
    },
  });
}
