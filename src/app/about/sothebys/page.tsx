import type { Metadata } from "next";
import { SothebysPageClient } from "./sothebys-client";

export const metadata: Metadata = {
  title: "Sotheby's International Realty",
};

export default function SothebysPage() {
  return <SothebysPageClient />;
}
