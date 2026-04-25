import type { Metadata } from "next";
import { Fraunces, Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  axes: ["opsz"],
  display: "swap",
});

const jbm = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbm",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mira · an AI meal concierge for Swiggy",
  description:
    "One conversation that plans your week across Swiggy Food, Instamart, and Dineout. Built on Swiggy's MCP platform.",
  metadataBase: new URL("https://mira.yrevash.com"),
  openGraph: {
    title: "Mira · an AI meal concierge for Swiggy",
    description:
      "One conversation that plans your week across Swiggy Food, Instamart, and Dineout.",
    type: "website",
    url: "https://mira.yrevash.com",
    siteName: "Mira",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mira · an AI meal concierge for Swiggy",
    description:
      "One conversation that plans your week across Food, Instamart, and Dineout.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${newsreader.variable} ${jbm.variable}`}>
      <body>{children}</body>
    </html>
  );
}
