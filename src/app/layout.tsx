import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PixelSnow from "@/components/PixelSnow";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Итоги программирования 2025-2026 | igorao79",
  description: "Мои достижения в программировании за 2025-2026 год: 1000+ коммитов, 2 курса, портфолио, 30+ проектов",
  other: {
    "theme-color": "#000000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen bg-black`}
      >
        <PixelSnow
          style={{
            zIndex: 0,
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none'
          }}
          color="#ffffff"
          flakeSize={0.01}
          minFlakeSize={1.5}
          pixelResolution={150}
          speed={1.0}
          density={0.2}
          direction={135}
          brightness={1.2}
          variant="square"
        />
        {children}
      </body>
    </html>
  );
}
