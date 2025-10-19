import {
  AlarmClockCheck,
  Bath,
  Droplets,
  Flame,
  Gauge,
  LifeBuoy,
  ShieldAlert,
  ShowerHead,
  Waves,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  emergency: AlarmClockCheck,
  drain: Waves,
  leak: Droplets,
  waterHeater: Flame,
  sumpPump: Gauge,
  fixtures: ShowerHead,
  maintenance: Wrench,
  support: LifeBuoy,
  bathroom: Bath,
  flood: ShieldAlert,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] || Wrench;
}

