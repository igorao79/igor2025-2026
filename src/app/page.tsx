"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { StatsCard } from "@/components/StatsCard";
import { BsGraphUp, BsBook, BsRocket, BsBriefcase } from "react-icons/bs";

interface CommitStats {
  total: number;
}

interface AnimatedStats {
  commits: number;
  courses: number;
  projects: number;
  jobs: number;
}


export default function Home() {
  const [showShapka, setShowShapka] = useState(false);
  const [shapkaFalling, setShapkaFalling] = useState(false);
  const [commitStats, setCommitStats] = useState<CommitStats>({ total: 1362 });
  const [animatedStats, setAnimatedStats] = useState<AnimatedStats>({
    commits: 0,
    courses: 0,
    projects: 0,
    jobs: 0
  });
  const [finalStates, setFinalStates] = useState({
    commits: false,
    courses: false,
    projects: false,
    jobs: false
  });


  // Целевые значения
  const targetStats = {
    commits: commitStats.total,
    courses: 2,
    projects: 30,
    jobs: 2
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowShapka(true);
      setTimeout(() => {
        setShapkaFalling(true);
      }, 100);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchCommitStats = async () => {
      try {
        const response = await fetch('/api/commits');
        if (response.ok) {
          const data = await response.json();
          setCommitStats({ total: data.total });
        }
      } catch (error) {
        console.error('Failed to fetch commit stats:', error);
        // Keep default value
      }
    };

    fetchCommitStats();
  }, []);

  // Анимация счетчиков (последовательная с интервалом 1 секунда)
  useEffect(() => {
    const startDelay = 4500; // Ждем завершения анимации логотипа (4.5s)

    const animateCounter = (key: keyof AnimatedStats, target: number, maxValue: number) => {
      return new Promise<void>((resolve) => {
        console.log(`Starting animation for ${key} with target ${target}`);
        const duration = 2500; // 2.5 секунды на каждый счетчик
        const steps = 50; // 50 обновлений
        const interval = duration / steps;

        let currentStep = 0;
        const timer = setInterval(() => {
          currentStep++;

          // Вычисляем прогресс (0-1)
          const progress = currentStep / steps;

          // Используем ease-out функцию для плавного замедления
          const easeOutProgress = 1 - Math.pow(1 - progress, 3);

          // Генерируем случайные числа с учетом прогресса
          const generateRandomNumber = () => {
            if (progress > 0.95) {
              // В конце анимации показываем точное значение
              return target;
            }

            // Чем ближе к концу, тем меньше разброс случайных чисел
            const randomFactor = Math.random() * (1 - easeOutProgress);

            // Случайное число в диапазоне, но с учетом прогресса
            const randomValue = Math.floor(Math.random() * maxValue * randomFactor);

            // Смешиваем случайное число с целевым значением
            const mixFactor = Math.pow(easeOutProgress, 2);
            return Math.floor(randomValue * (1 - mixFactor) + target * mixFactor);
          };

          setAnimatedStats(prev => ({
            ...prev,
            [key]: generateRandomNumber()
          }));

          if (currentStep >= steps) {
            // Финальное значение
            setAnimatedStats(prev => ({ ...prev, [key]: target }));

            // Небольшая задержка перед bounce эффектом для лучшего визуального эффекта
            setTimeout(() => {
              setFinalStates(prev => ({ ...prev, [key]: true }));


              // Сбрасываем финальное состояние через 2 секунды (совпадает с длительностью анимации)
              // Для проектов "+" остается навсегда
              if (key !== 'projects') {
                setTimeout(() => {
                  setFinalStates(prev => ({ ...prev, [key]: false }));
                }, 2000);
              }
            }, 100);

            clearInterval(timer);
            resolve();
          }
        }, interval);
      });
    };

    const startAnimations = async () => {
      // Первый счетчик (Коммиты) - сразу
      await animateCounter('commits', targetStats.commits, 9999);

      // Ждем 0.5 секунды
      await new Promise(resolve => setTimeout(resolve, 500));

      // Второй счетчик (Курсы)
      await animateCounter('courses', targetStats.courses, 999);

      // Ждем 0.5 секунды
      await new Promise(resolve => setTimeout(resolve, 500));

      // Третий счетчик (Проекты)
      await animateCounter('projects', targetStats.projects, 999);

      // Ждем 0.5 секунды
      await new Promise(resolve => setTimeout(resolve, 500));

      // Четвертый счетчик (Должности)
      await animateCounter('jobs', targetStats.jobs, 999);
    };

    const timer = setTimeout(startAnimations, startDelay);

    return () => {
      clearTimeout(timer);
    };
  }, [commitStats.total]); // Перезапускаем анимацию при изменении данных коммитов

  return (
    <div className="min-h-screen flex items-center justify-center px-2 sm:px-4">
      <div className="container mx-auto px-2 sm:px-4 py-8 sm:py-16">
        {/* Logo */}
        <div className="text-center mb-8 sm:mb-12 relative px-2 sm:px-4 pt-5 sm:pt-0">
          <div className="relative inline-block">
            <Image
              src="/images/logo.webp"
              alt="Logo"
              width={200}
              height={200}
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto rounded-full"
              priority
            />
            {showShapka && (
              <Image
                src="/images/shapka.webp"
                alt="Shapka"
                width={220}
                height={220}
                className={`absolute -top-12 sm:-top-15 left-2 sm:left-3 w-full h-full object-cover rounded-full ${
                  shapkaFalling ? 'animate-fall' : 'opacity-0'
                }`}
                priority
              />
            )}
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 px-2 sm:px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4 drop-shadow-lg leading-tight">
            <span className="block sm:inline">Итоги</span>
            <span className="block sm:inline sm:ml-2">программирования</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white mb-2 drop-shadow-lg">2025-2026 год</p>
          <div className="w-20 sm:w-24 md:w-32 h-1 bg-white mx-auto animate-expand-line"></div>
        </div>

        {/* Основная статистика */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/commits">
            <StatsCard
              number={animatedStats.commits.toString()}
              label="Коммита"
              description="в 2025 году"
              icon={<BsGraphUp size={48} />}
              isFinal={finalStates.commits}
            />
          </Link>
          <Link href="/courses">
            <StatsCard
              number={animatedStats.courses.toString()}
              label="Курса"
              description="пройдено"
              icon={<BsBook size={48} />}
              isFinal={finalStates.courses}
            />
          </Link>
          <Link href="/projects">
            <StatsCard
              number={animatedStats.projects.toString() + (finalStates.projects ? "+" : "")}
              label="Проектов"
              description="сделано"
              icon={<BsRocket size={48} />}
              isFinal={finalStates.projects}
            />
          </Link>
          <Link href="/jobs">
            <StatsCard
              number={animatedStats.jobs.toString()}
              label="Должности"
              description="в карьере"
              icon={<BsBriefcase size={48} />}
              isFinal={finalStates.jobs}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
