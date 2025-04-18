import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Ms_Madi,
  Instrument_Serif,
  Bricolage_Grotesque,
} from "next/font/google";
import "./globals.css";
import ParentProvider from "./_providers/parent-provider";
import { rootSiteConfig } from "@/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const MsMadi = Ms_Madi({
  variable: "--font-ms-madi",
  weight: "400",
  subsets: ["latin"],
});

const InstrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
});

const BricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = rootSiteConfig;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${MsMadi.variable} ${InstrumentSerif.variable} ${BricolageGrotesque.variable} antialiased`}
      >
        <ParentProvider>{children}</ParentProvider>
      </body>
    </html>
  );
}
