import type { Metadata } from "next";
import { HudsonPageClient } from "./hudson-client";

export const metadata: Metadata = {
  title: "Meet Hudson",
};

export default function HudsonPage() {
  return <HudsonPageClient />;
}
