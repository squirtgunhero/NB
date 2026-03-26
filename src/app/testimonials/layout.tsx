import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Testimonials",
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
