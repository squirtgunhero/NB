import type { Metadata } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-accent",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Nicole Beauchamp | Luxury NYC Real Estate | Sotheby's International Realty",
    template: "%s | Nicole Beauchamp",
  },
  description:
    "Nicole 'Nikki' Beauchamp — Award-winning luxury real estate advisor with Sotheby's International Realty. Nearly two decades specializing in New York City's finest properties.",
  keywords: [
    "NYC luxury real estate",
    "Manhattan real estate",
    "Sotheby's International Realty",
    "Nicole Beauchamp",
    "luxury apartments NYC",
    "New York City homes",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nicolebeauchamp.com",
    siteName: "Nicole Beauchamp | Sotheby's International Realty",
    title: "Nicole Beauchamp | Luxury NYC Real Estate",
    description:
      "Award-winning luxury real estate advisor specializing in New York City's finest properties.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@NikkiBeauchamp",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-midnight">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-champagne focus:text-midnight focus:rounded"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
