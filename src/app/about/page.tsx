import type { Metadata } from "next";
import { AboutPageClient } from "./about-client";

export const metadata: Metadata = {
  title: "About Nicole Beauchamp",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
