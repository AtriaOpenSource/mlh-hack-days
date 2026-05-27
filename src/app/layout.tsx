import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HACK DAYS by ASoC",
  description:
    "An 8-hour MLH Hack Day designed for builders, creators, and innovators. Executed jointly by AWS Student Builder Group and OSCode Atria Chapter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-bg text-ink bg-grid bg-grid-pattern selection:bg-accent selection:text-white font-sans`}
      >
        <LenisProvider>
          {/* Grid Fade Overlay */}
          <div className="fixed inset-0 w-screen h-screen pointer-events-none z-[-1] bg-[radial-gradient(ellipse_at_center,transparent_0%,#faf9f6_80%)]"></div>

          {/* Structural Crosshairs */}
          <div className="crosshair ch-tl"></div>
          <div className="crosshair ch-br"></div>

          <Header />
          <main className="max-w-[1440px] mx-auto px-6 pt-16 min-h-screen">
            {children}
          </main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
