import type { Metadata } from "next";
import { Geist, Geist_Mono, Ms_Madi, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/web/theme-provide";

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

export const metadata: Metadata = {
  title: "Aether UI",
  description: "Upgrade boring UIs with Aether UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${MsMadi.variable} ${InstrumentSerif.variable} antialiased`}
      >
        <ThemeProvider attribute="class">
          <div className="bg-zinc-950 text-slate-100">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}

// TODO: we have to add something related to mdx lee talked about.
