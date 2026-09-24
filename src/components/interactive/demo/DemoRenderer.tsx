"use client";

import dynamic from "next/dynamic";
import type { DemoKey } from "./demoConfig";

function Placeholder() {
  return <div className="aspect-[4/3] w-full animate-pulse rounded-2xl bg-[#eef2f6]" />;
}

// Each demo is its own chunk, so a page only loads the demos it actually shows.
const demos: Record<DemoKey, React.ComponentType> = {
  raffstore: dynamic(() => import("./RaffstoreDemo").then((module) => module.RaffstoreDemo), { loading: Placeholder }),
  rollladen: dynamic(() => import("./RollladenDemo").then((module) => module.RollladenDemo), { loading: Placeholder }),
  markise: dynamic(() => import("./MarkiseDemo").then((module) => module.MarkiseDemo), { loading: Placeholder }),
  insektenschutz: dynamic(() => import("./InsektenschutzDemo").then((module) => module.InsektenschutzDemo), { loading: Placeholder }),
  plissee: dynamic(() => import("./PlisseeDemo").then((module) => module.PlisseeDemo), { loading: Placeholder }),
  sonnenschirm: dynamic(() => import("./SonnenschirmDemo").then((module) => module.SonnenschirmDemo), { loading: Placeholder }),
  smarthome: dynamic(() => import("./SmartHomeDemo").then((module) => module.SmartHomeDemo), { loading: Placeholder }),
};

export function DemoRenderer({ demo }: { demo: DemoKey }) {
  const Demo = demos[demo];
  return <Demo />;
}
