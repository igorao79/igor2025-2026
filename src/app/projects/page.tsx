"use client";

import Link from "next/link";
import { BsRocket } from "react-icons/bs";
import CircularGallery from "@/components/CircularGallery";

export default function Projects() {
  const projectItems = [
    {
      image: "/images/project/p-1.webp",
      text: "Portfolio"
    },
    {
      image: "/images/project/p-2.webp",
      text: "SoulCycle"
    },
    {
      image: "/images/project/p-3.webp",
      text: "Позвони.мне"
    },
    {
      image: "/images/project/p-4.webp",
      text: "Звоночек"
    },
    {
      image: "/images/project/p-5.webp",
      text: "СырАрт"
    },
    {
      image: "/images/project/p-6.webp",
      text: "Зоопарк"
    },
    {
      image: "/images/project/p-7.webp",
      text: "Chessaryao"
    }
  ];

  return (
    <div className="min-h-screen bg-black bg-opacity-20">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <Link href="/" className="text-purple-400 hover:text-purple-300 mb-4 inline-block">
            ← Назад к итогам
          </Link>
          <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg flex items-center justify-center gap-3">
            <BsRocket size={40} className="text-purple-400" />
            Мои проекты
          </h1>
          <p className="text-xl text-white drop-shadow-lg mb-8">
            Серьезные проекты, над которыми я работал в 2025-2026 году
          </p>

          {/* Gallery */}
          <div className="h-[500px] w-full">
            <CircularGallery
              items={projectItems}
              bend={1}
              textColor="#ffffff"
              borderRadius={0.05}
              font="bold 40px Figtree"
              scrollEase={0.02}
            />
          </div>
        </div>
      </div>
    </div>
  );
}