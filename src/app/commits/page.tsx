"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { BsGraphUp } from "react-icons/bs";

interface CommitData {
  total: number;
  year: number;
  breakdown: { month: string; commits: number }[];
  technologies: string[];
}

export default function Commits() {
  const [commitData, setCommitData] = useState<CommitData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const response = await fetch('/api/commits');
        if (!response.ok) {
          throw new Error('Failed to fetch commits');
        }
        const data = await response.json();
        setCommitData({
          ...data,
          technologies: [
            "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
            "Python", "SQL", "Git", "Docker", "AWS", "Supabase", "Vite", "Tailwind", "Go"
          ]
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
        // Fallback to default data
        setCommitData({
          total: 1362,
          year: 2025,
          breakdown: [
            { month: "Январь", commits: 10 },
            { month: "Февраль", commits: 60 },
            { month: "Март", commits: 95 },
            { month: "Апрель", commits: 59 },
            { month: "Май", commits: 146 },
            { month: "Июнь", commits: 59 },
            { month: "Июль", commits: 53 },
            { month: "Август", commits: 69 },
            { month: "Сентябрь", commits: 273 },
            { month: "Октябрь", commits: 62 },
            { month: "Ноябрь", commits: 137 },
            { month: "Декабрь", commits: 259 }
          ],
          technologies: [
            "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
            "Python", "SQL", "Git", "Docker", "AWS", "Supabase", "Vite", "Tailwind", "Go"
          ]
        });
      } finally {
        setLoading(false);
      }
    };

    fetchCommits();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black bg-opacity-20 flex items-center justify-center">
        <div className="text-white text-xl">Загрузка данных о коммитах...</div>
      </div>
    );
  }

  if (error || !commitData) {
    return (
      <div className="min-h-screen bg-black bg-opacity-20 flex items-center justify-center">
        <div className="text-red-400 text-xl">
          Ошибка загрузки: {error || 'Не удалось загрузить данные'}
        </div>
      </div>
    );
  }

  const maxCommits = Math.max(...commitData.breakdown.map(m => m.commits));

  return (
    <div className="min-h-screen bg-black bg-opacity-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="text-blue-400 hover:text-blue-300 mb-4 inline-block">
            ← Назад к итогам
          </Link>
          <h1 className="text-3xl font-bold text-white mb-2 drop-shadow-lg flex items-center justify-center gap-3">
            <BsGraphUp size={32} className="text-blue-400" />
            Мои коммиты в 2025 году
          </h1>
        </div>

        {/* Chart */}
        <div className="bg-transparent border border-white border-opacity-30 backdrop-blur-sm rounded-2xl p-6 mb-8">
          <div className="text-center mb-6">
            <div className="text-4xl font-bold text-white mb-2">{commitData.total} коммитов</div>
            <div className="text-xl text-blue-300">за год активной разработки</div>
          </div>
          <h2 className="text-2xl font-bold text-white text-center mb-6">График коммитов по месяцам</h2>
          <div className="flex items-end justify-center gap-2 h-64">
            {commitData.breakdown.map((month, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <div
                  className="bg-blue-500 rounded-t w-8 transition-all duration-500 hover:bg-blue-400"
                  style={{
                    height: `${(month.commits / maxCommits) * 180}px`,
                    minHeight: '4px'
                  }}
                ></div>
                <div className="text-xs text-white font-medium text-center">
                  {month.month.slice(0, 3)}
                </div>
                <div className="text-xs text-blue-300 font-bold">{month.commits}</div>
              </div>
            ))}
          </div>
        </div>


        {/* Technologies */}
        <div className="mt-8 text-center">
          <h3 className="text-lg font-semibold text-white mb-4">Использованные технологии</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {commitData.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-transparent text-white rounded-full border border-white border-opacity-30 backdrop-blur-sm text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
