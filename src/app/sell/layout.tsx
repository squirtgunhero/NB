import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sell Your Home",
};

export default function SellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
