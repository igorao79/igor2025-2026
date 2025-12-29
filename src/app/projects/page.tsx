"use client";

import Link from "next/link";
import { useState, useCallback } from "react";
import { BsRocket, BsX } from "react-icons/bs";
import { Card, CardHeader } from "@heroui/react";
import Image from "next/image";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const handleProjectClick = useCallback((index: number) => {
    setSelectedProject(index);
  }, []);

  const handleModalClose = () => {
    setSelectedProject(null);
  };

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
      text: "Зоопарк."
    },
    {
      image: "/images/project/p-7.webp",
      text: "Chessaryao"
    }
  ];

  const projectDetails = [
    {
      name: "Portfolio",
      description: "Персональный сайт-портфолио с современным дизайном и анимациями. Создан с использованием Next.js, TypeScript и Tailwind CSS.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      features: ["Адаптивный дизайн", "Pixel Snow анимация", "HeroUI галерея", "SEO оптимизация"],
      github: "https://github.com/username/portfolio",
      demo: "https://portfolio-demo.vercel.app"
    },
    {
      name: "SoulCycle",
      description: "Сайт для книги SoulCycle",
      technologies: ["React", "SCSS", "JavaScript", "Supabase", "Cloudinary"],
      features: ["База данных", "Облачное хранение", "Современный дизайн", "Интерактивность"],
      github: "https://github.com/igorao79/soulcycle",
      demo: "https://igorao79.github.io/soulcycle/"
    },
    {
      name: "Позвони.мне",
      description: "Позвони.мне",
      technologies: ["Next.js", "Tailwind", "Typescript", "WebRTC", "Zustand", "Supabase"],
      features: ["Realtime обновления", "Управление состоянием", "Современный интерфейс", "WebRTC интеграция"],
      github: "",
      demo: "https://pozvonimne.vercel.app/"
    },
    {
      name: "Звоночек",
      description: "Звоночек",
      technologies: ["Next.js", "Tailwind", "Typescript", "WebRTC", "Zustand", "Supabase"],
      features: ["Realtime обновления", "Управление состоянием", "Современный интерфейс", "WebRTC интеграция"],
      github: "https://github.com/igorao79/zvonochek",
      demo: "https://zvonochek.vercel.app/"
    },
    {
      name: "СырАрт",
      description: "Сайт для сыроварни",
      technologies: ["Next.js", "SCSS", "Typescript", "3dGLB", "lottie"],
      features: ["Современный дизайн", "3D элементы", "Анимации", "SEO оптимизация"],
      github: "https://github.com/igorao79/template1",
      demo: "https://igorao79.github.io/template1/"
    },
    {
      name: "Зоопарк.",
      description: "Сайт для зоопарка",
      technologies: ["Next.js", "SCSS", "Typescript", "Tailwind", "lottie"],
      features: ["Адаптивный дизайн", "Интерактивные элементы", "Образовательный контент", "Современный UI"],
      github: "https://github.com/igorao79/template2",
      demo: "https://igorao79.github.io/template2/"
    },
    {
      name: "Chessaryao",
      description: "Многопользовательская игра в шахматы",
      technologies: ["Next.js", "Tailwind", "Typescript", "Appwrite"],
      features: ["Многопользовательские игры", "Realtime обновления", "База данных", "Современный интерфейс"],
      github: "https://github.com/igorao79/chessgame",
      demo: "https://chessgame-delta-five.vercel.app/"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="container mx-auto px-4 py-4">
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

          {/* Projects Grid */}
          <div className="max-w-[1400px] mx-auto gap-2 grid grid-cols-12 grid-rows-3 px-8 justify-center">
            {projectItems.map((project, index) => {
              // Определяем размеры и стиль для каждой карточки
              const getCardClasses = (index: number) => {
                if (index === 3) return "col-span-12 sm:col-span-5"; // Большая карточка
                if (index === 4) return "col-span-12 sm:col-span-7"; // Очень большая карточка
                if (index === 5) return "col-span-12 sm:col-span-6"; // Средняя карточка
                if (index === 6) return "col-span-12 sm:col-span-6"; // Средняя карточка
                return "col-span-12 sm:col-span-4"; // Стандартные карточки
              };

              return (
                <Card
                  key={index}
                  className={`h-[300px] ${getCardClasses(index)} cursor-pointer hover:scale-105 transition-transform duration-300`}
                  isPressable
                  onPress={() => handleProjectClick(index)}
                >
                  <CardHeader className="absolute z-10 top-1 flex-col items-start">
                    <p className={`text-tiny uppercase font-bold ${index === 4 ? 'text-black/60' : 'text-white/60'}`}>
                      {projectDetails[index].technologies[0]}
                    </p>
                    <h4 className={`font-medium text-large ${index === 4 ? 'text-black' : 'text-white'}`}>
                      {project.text}
                    </h4>
                  </CardHeader>

                  <div className="relative w-full h-full">
                    <Image
                      fill
                      alt={project.text}
                      className="z-0 w-full h-full object-cover"
                      src={project.image}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </Card>
              );
            })}
          </div>
            </div>
          </div>

          {/* Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50" onClick={handleModalClose}>
          <div className="bg-black/95 border border-white/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto backdrop-blur-sm" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-white">
                  {projectDetails[selectedProject].name}
                </h2>
                <button
                  onClick={handleModalClose}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <BsX size={24} />
                </button>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {projectDetails[selectedProject].description}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Технологии</h3>
                <div className="flex flex-wrap gap-2">
                  {projectDetails[selectedProject].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-900 bg-opacity-50 text-blue-200 border border-blue-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Особенности</h3>
                <ul className="space-y-2">
                  {projectDetails[selectedProject].features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-4 border-t border-gray-700">
                <a
                  href={projectDetails[selectedProject].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors text-center font-medium border border-gray-600"
                >
                  GitHub
                </a>
                <a
                  href={projectDetails[selectedProject].demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-center font-medium"
                >
                  Демо
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* GitHub Link */}
      <div className="text-center mt-12 pb-8">
        <p className="text-white text-lg font-medium">
          Больше моих проектов на моем{' '}
          <a
            href="https://github.com/igorao79"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300 underline decoration-2 underline-offset-4 cursor-pointer"
          >
            гитхабе
          </a>
        </p>
      </div>
    </div>
  );
}