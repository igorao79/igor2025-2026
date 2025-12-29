"use client";

import Link from "next/link";
import { BsBriefcase } from "react-icons/bs";

export default function Jobs() {
  // Данные для графика должностей
  const jobTimeline = [
    {
      position: "AI Верстальщик",
      startDate: "16 июня",
      endDate: "29 сентября",
      startMonth: 0, // Июнь (индекс 0)
      endMonth: 2.5,   // Август (индекс 2) - заканчивается до сентября
      color: "bg-green-500",
      hoverColor: "hover:bg-green-400"
    },
    {
      position: "Разработчик Telegram бота",
      startDate: "30 сентября",
      endDate: "25 декабря",
      startMonth: 3, // Сентябрь (индекс 3) - начинается с сентября
      endMonth: 6,   // Декабрь (индекс 6)
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-400"
    }
  ];

  const months = ["Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"];


  return (
    <div className="min-h-screen bg-black bg-opacity-20">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 px-2 sm:px-4">
          <Link href="/" className="text-orange-400 hover:text-orange-300 mb-4 inline-block">
            ← Назад к итогам
          </Link>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4 drop-shadow-lg flex items-center justify-center gap-2 sm:gap-3 leading-tight">
            <BsBriefcase size={32} className="sm:w-10 sm:h-10 text-orange-400" />
            <span>
              <span className="block sm:inline">Профессиональный</span>
              <span className="block sm:inline sm:ml-1">опыт</span>
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white drop-shadow-lg px-2">
            <span className="block sm:inline">Временная шкала моей</span>
            <span className="block sm:inline sm:ml-1">карьеры в 2025 году</span>
          </p>
        </div>

        {/* Job Timeline Chart */}
        <div className="bg-transparent border border-white border-opacity-30 backdrop-blur-sm rounded-2xl p-6 mb-12">
          <h2 className="text-2xl font-bold text-white text-center mb-8 drop-shadow-lg">
            Временная шкала должностей в 2025 году
          </h2>

          {/* Timeline */}
          <div className="relative">
            {/* Month labels */}
            <div className="flex justify-between mb-4 px-4">
              {months.map((month, index) => (
                <div key={index} className="text-xs text-white font-medium text-center flex-1">
                  {month}
                </div>
              ))}
            </div>

            {/* Timeline bars */}
            <div className="space-y-6">
              {jobTimeline.map((job, jobIndex) => (
                <div key={jobIndex} className="relative">
                  {/* Job title */}
                  <div className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                    <div className={`w-4 h-4 sm:w-3 sm:h-3 rounded-full ${job.color}`}></div>
                    {job.position}
                  </div>

                  {/* Timeline bar */}
                  <div className="relative h-8 bg-gray-700 bg-opacity-30 rounded-full overflow-hidden">
                    {/* Active period */}
                    <div
                      className={`absolute top-0 h-full ${job.color} ${job.hoverColor} rounded-full transition-all duration-300 cursor-pointer flex items-center justify-center text-xs font-medium text-white`}
                      style={{
                        left: `${(job.startMonth * 100) / 6}%`,
                        width: `${((job.endMonth - job.startMonth + 1) * 100) / 7}%`
                      }}
                      title={`${job.startDate} - ${job.endDate}`}
                    >
                      <span className="hidden sm:inline">{job.startDate} - {job.endDate}</span>
                      <span className="sm:hidden text-xs">
                        {job.startMonth === 0 ? '16 июн - 29 сен' : '30 сен - 25 дек'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 mt-6">
            {jobTimeline.map((job, index) => (
              <div key={index} className="flex items-center gap-2 justify-center sm:justify-start">
                <div className={`w-4 h-4 sm:w-3 sm:h-3 rounded-full ${job.color}`}></div>
                <span className="text-sm text-white text-center sm:text-left">{job.position}</span>
              </div>
            ))}
          </div>
        </div>


      </div>
    </div>
  );
}