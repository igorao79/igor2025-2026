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
  title: "Итоги программирования 2025-2026 | Игорь",
  description: "Мои достижения в программировании за 2025-2026 год: 1362 коммита, 2 курса, портфолио, 3 серьезных проекта",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen`}
      >
        <PixelSnow
          style={{
            zIndex: -1
          }}
          color="#ffffff"
          density={0.1}
          brightness={0.6}
          speed={0.5}
        />
        {children}
      </body>
    </html>
  );
}
