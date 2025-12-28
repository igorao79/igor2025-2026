"use client";

import Link from "next/link";
import { BsBook, BsAward, BsCheckCircle, BsEye } from "react-icons/bs";

export default function Courses() {

  return (
    <div className="min-h-screen bg-black bg-opacity-20">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <Link href="/" className="text-green-400 hover:text-green-300 mb-4 inline-block">
            ← Назад к итогам
          </Link>
          <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg flex items-center justify-center gap-3">
            <BsBook size={40} className="text-green-400" />
            Пройденные курсы
          </h1>
        </div>



        {/* Certificates */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white text-center mb-8 drop-shadow-lg">
            Сертификаты
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-transparent border border-white border-opacity-30 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <BsAward size={24} className="text-yellow-400" />
                <h3 className="text-xl font-bold text-white">Сертификат по JavaScript</h3>
              </div>
              <p className="text-blue-300 mb-4">Основы JavaScript, ES6+, асинхронное программирование</p>
              <a
                href="https://learn.javascript.ru/courses/jsbasic-20250203/samptv59/ru/certificate.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
              >
                <BsEye size={16} />
                Посмотреть сертификат
              </a>
            </div>
            <div className="bg-transparent border border-white border-opacity-30 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <BsAward size={24} className="text-yellow-400" />
                <h3 className="text-xl font-bold text-white">Сертификат по React</h3>
              </div>
              <p className="text-blue-300 mb-4">React, компоненты, хуки, state management</p>
              <a
                href="https://learn.javascript.ru/courses/react-20250512/samptv59/ru/certificate.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
              >
                <BsEye size={16} />
                Посмотреть сертификат
              </a>
            </div>
          </div>

          {/* Gosuslugi Skills */}
          <div className="mt-8 bg-transparent border border-white border-opacity-30 backdrop-blur-sm rounded-2xl p-6">
            <div className="text-center mb-4">
              <div className="flex items-center justify-center gap-3 mb-2">
                <BsCheckCircle size={24} className="text-green-400" />
                <h3 className="text-xl font-bold text-white">Подтвержденные навыки на ГосУслугах</h3>
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-blue-300 mb-3">
                <BsCheckCircle size={16} className="text-green-400" />
                <span>CSS (продвинутый уровень)</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-blue-300">
                <BsCheckCircle size={16} className="text-green-400" />
                <span>Git (продвинутый уровень)</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}