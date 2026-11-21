import {
  IconAward,
  IconBolt,
  IconCheck,
  IconClock,
  IconCompass,
  IconCrank,
  IconDiamond,
  IconHome,
  IconScale,
  IconShield,
  IconUsers,
} from "@/components/icons/UiIcons";
import type { HighlightIcon } from "@/types";

/** Icons that content data can pick by name (intro tiles, numbered cards). */
export const HIGHLIGHT_ICONS: Record<HighlightIcon, typeof IconCheck> = {
  scale: IconScale,
  award: IconAward,
  shield: IconShield,
  diamond: IconDiamond,
  clock: IconClock,
  bolt: IconBolt,
  compass: IconCompass,
  crank: IconCrank,
  users: IconUsers,
  home: IconHome,
};
