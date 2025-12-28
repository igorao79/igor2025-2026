"use client";

import Link from "next/link";
import { BsBriefcase, BsGeoAlt, BsCalendar, BsCash, BsRocket, BsTrophy } from "react-icons/bs";

export default function Jobs() {
  const jobs = [
    {
      position: "HTML Верстальщик",
      company: "Веб-студия 'Creative Solutions'",
      location: "Удаленно",
      period: "Январь 2025 - Август 2025",
      type: "Полная занятость",
      salary: "80,000 ₽/мес",
      responsibilities: [
        "Верстка адаптивных интерфейсов по макетам в Figma и Adobe XD",
        "Оптимизация производительности и SEO веб-сайтов",
        "Кроссбраузерная совместимость (Chrome, Firefox, Safari, Edge)",
        "Работа с CSS Grid и Flexbox для современных layout",
        "Интеграция с JavaScript для интерактивности",
        "Code review и рефакторинг существующего кода",
        "Работа с системами контроля версий (Git)",
        "Коммуникация с дизайнерами и backend-разработчиками"
      ],
      technologies: [
        "HTML5", "CSS3", "JavaScript", "SASS/SCSS", "Figma", "Adobe XD",
        "Git", "Gulp", "Webpack", "BEM methodology", "Responsive Design"
      ],
      achievements: [
        "Увеличил скорость загрузки страниц на 40% через оптимизацию",
        "Реализовал 15+ адаптивных интерфейсов для различных проектов",
        "Сократил время верстки на 30% через оптимизацию процессов",
        "Получил признание от команды за качество кода",
        "Успешно прошел 3 месяца испытательного срока"
      ],
      projects: [
        "Корпоративный сайт для IT-компании (React + CSS)",
        "Лендинг пейдж для стартапа (HTML + SASS)",
        "Админ-панель управления контентом (Vue.js + CSS)",
        "Многостраничный сайт интернет-магазина (HTML + CSS)"
      ],
      skillsDeveloped: [
        "Коммуникация с командой",
        "Управление временем",
        "Работа под дедлайн",
        "Code review",
        "Документирование кода"
      ]
    },
    {
      position: "Разработчик Telegram ботов",
      company: "IT компания 'BotMaster'",
      location: "Удаленно",
      period: "Сентябрь 2025 - настоящее время",
      type: "Полная занятость",
      salary: "120,000 ₽/мес",
      responsibilities: [
        "Разработка и поддержка Telegram ботов на Node.js",
        "Интеграция с внешними API (платежные системы, CRM, базы данных)",
        "Создание автоматизированных систем уведомлений",
        "Обработка платежей и подписок через Telegram",
        "Администрирование серверов и мониторинг производительности",
        "Оптимизация ботов для высокой нагрузки",
        "Работа с базами данных (MongoDB, PostgreSQL)",
        "Создание документации для API ботов",
        "Тестирование и отладка ботов",
        "Поддержка пользователей и решение инцидентов"
      ],
      technologies: [
        "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Redis",
        "Telegram Bot API", "Telegraf framework", "Docker", "AWS",
        "Stripe API", "Webhooks", "REST API", "GraphQL"
      ],
      achievements: [
        "Создал 8+ ботов для различных бизнес-задач",
        "Автоматизировал процессы для 500+ пользователей",
        "Реализовал систему платежей с ежемесячным оборотом 50k+ ₽",
        "Сократил время отклика ботов до 200ms",
        "Повысил удовлетворенность клиентов на 35%",
        "Внедрил систему мониторинга и алертов"
      ],
      projects: [
        "Бот для автоматизации продаж (Node.js + Stripe)",
        "Система уведомлений для интернет-магазина (Telegram + API)",
        "Бот для управления задачами команды (Node.js + MongoDB)",
        "Платежный бот с подпиской (Node.js + PostgreSQL)",
        "Бот для техподдержки (AI integration + Telegram)"
      ],
      skillsDeveloped: [
        "Архитектура масштабируемых систем",
        "Интеграция платежных систем",
        "Работа с API",
        "Оптимизация производительности",
        "Мониторинг и аналитика"
      ]
    }
  ];

  const careerStats = {
    totalJobs: 2,
    totalExperience: "1.75 года",
    totalSalary: "200,000 ₽/мес",
    totalProjects: 23,
    totalUsers: 1500,
    avgProjectTime: "2.5 недели"
  };

  return (
    <div className="min-h-screen bg-black bg-opacity-20">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <Link href="/" className="text-orange-400 hover:text-orange-300 mb-4 inline-block">
            ← Назад к итогам
          </Link>
          <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg flex items-center gap-3">
            <BsBriefcase size={40} className="text-orange-400" />
            Профессиональный опыт
          </h1>
          <p className="text-xl text-white drop-shadow-lg">
            Мои должности и достижения в карьере разработчика
          </p>
        </div>

        {/* Career Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          <div className="bg-transparent border border-white border-opacity-30 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-2xl font-bold text-white">{careerStats.totalJobs}</div>
            <div className="text-orange-300 text-sm">Должности</div>
          </div>
          <div className="bg-transparent border border-white border-opacity-30 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-2xl font-bold text-white">{careerStats.totalExperience}</div>
            <div className="text-orange-300 text-sm">Опыта</div>
          </div>
          <div className="bg-transparent border border-white border-opacity-30 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-2xl font-bold text-white">{careerStats.totalProjects}</div>
            <div className="text-orange-300 text-sm">Проектов</div>
          </div>
        </div>

        {/* Jobs */}
        <div className="space-y-12">
          {jobs.map((job, index) => (
            <div key={index} className="bg-transparent border border-white border-opacity-30 backdrop-blur-sm rounded-2xl overflow-hidden">
              {/* Job Header */}
              <div className="bg-gradient-to-r from-orange-600 to-red-600 p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-1">{job.position}</h2>
                    <div className="text-orange-100 mb-2">{job.company}</div>
                    <div className="flex items-center gap-4 text-orange-200 text-sm">
                      <span className="flex items-center gap-1"><BsGeoAlt size={14} /> {job.location}</span>
                      <span className="flex items-center gap-1"><BsCalendar size={14} /> {job.period}</span>
                      <span className="flex items-center gap-1"><BsCash size={14} /> {job.salary}</span>
                      <span className="px-2 py-1 bg-white bg-opacity-20 rounded">
                        {job.type}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Job Content */}
              <div className="p-6">
                {/* Responsibilities */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-white mb-4">Обязанности:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {job.responsibilities.map((responsibility, respIndex) => (
                      <div key={respIndex} className="flex items-start text-white">
                        <span className="text-orange-400 mr-3 mt-1">•</span>
                        <span className="text-sm leading-relaxed">{responsibility}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-white mb-4">Технологии:</h3>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-orange-600 bg-opacity-20 text-orange-300 rounded-full text-sm border border-orange-500 border-opacity-30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Projects */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-white mb-4">Ключевые проекты:</h3>
                  <div className="space-y-3">
                    {job.projects.map((project, projectIndex) => (
                      <div key={projectIndex} className="bg-white bg-opacity-5 rounded-lg p-4">
                        <div className="text-white font-medium flex items-center gap-2"><BsRocket size={14} /> {project}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-white mb-4">Достижения:</h3>
                  <div className="bg-green-900 bg-opacity-30 rounded-lg p-4">
                    <div className="space-y-2">
                      {job.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start text-green-300">
                          <BsTrophy size={14} className="text-green-400 mr-3 mt-1" />
                          <span className="text-sm leading-relaxed">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Skills Developed */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Развитые навыки:</h3>
                  <div className="flex flex-wrap gap-2">
                    {job.skillsDeveloped.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-blue-600 bg-opacity-20 text-blue-300 rounded-full text-sm border border-blue-500 border-opacity-30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}