'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, AlertCircle, CheckCircle2, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function MockExamPage() {
  const [timeLeft, setTimeLeft] = useState(3600); // 60 minutes
  const [isStarted, setIsStarted] = useState(false);
  const [section, setSection] = useState<'A' | 'B' | 'C'>('A');

  useEffect(() => {
    if (!isStarted || timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
    return () => clearInterval(timer);
  }, [isStarted, timeLeft]);

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!isStarted) {
    return (
      <div className="min-h-screen bg-ios-bg flex items-center justify-center p-6">
        <div className="max-w-md w-full space-y-8 text-center text-black">
          <div className="w-20 h-20 bg-ios-red rounded-[2rem] flex items-center justify-center text-white mx-auto shadow-2xl shadow-ios-red/20">
            <Clock size={40} />
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">Final Mock Exam</h1>
            <p className="text-gray-500 font-medium leading-relaxed">
              60 минут. 3 секции. <br />
              Имитация реального экзамена SOC2040.
            </p>
          </div>
          <div className="ios-card p-6 bg-gray-50 text-left space-y-4">
            <div className="flex gap-3 text-sm font-semibold">
              <AlertCircle size={18} className="text-ios-orange" />
              <span>После запуска таймер нельзя остановить.</span>
            </div>
            <ul className="text-xs space-y-2 text-gray-500 font-bold uppercase tracking-wider">
              <li>Section A: 10 MCQ</li>
              <li>Section B: 5 Open Questions</li>
              <li>Section C: Assembly Task</li>
            </ul>
          </div>
          <button 
            onClick={() => setIsStarted(true)}
            className="ios-button-primary w-full py-5 text-xl font-bold bg-ios-red"
          >
            Начать экзамен
          </button>
          <Link href="/" className="block text-sm font-bold text-gray-400 uppercase tracking-widest hover:text-black transition-colors">
            Вернуться назад
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ios-bg text-black pb-20">
      <nav className="sticky top-0 z-50 ios-glass border-b border-black/5 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={() => { if(confirm('Выйти из экзамена?')) setIsStarted(false) }}><ArrowLeft /></button>
          <span className="font-bold tracking-tight">Section {section}</span>
        </div>
        <div className={`flex items-center gap-2 font-mono font-bold px-4 py-2 rounded-full ${timeLeft < 300 ? 'bg-ios-red/10 text-ios-red' : 'bg-black text-white'}`}>
          <Clock size={16} />
          {formatTime(timeLeft)}
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-12 space-y-12">
        <header className="flex gap-2">
          {['A', 'B', 'C'].map(s => (
            <button
              key={s}
              onClick={() => setSection(s as any)}
              className={`flex-1 py-3 rounded-2xl font-bold transition-all ${
                section === s ? 'bg-black text-white' : 'bg-ios-card text-gray-400'
              }`}
            >
              Section {s}
            </button>
          ))}
        </header>

        <section className="space-y-8">
          {section === 'A' && (
            <div className="space-y-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="ios-card p-8 space-y-6 text-black">
                  <h3 className="text-xl font-bold leading-tight">Q{i}. Какой-то очень сложный вопрос про выравнивание стека и ABI?</h3>
                  <div className="grid gap-3">
                    {['Variant A', 'Variant B', 'Variant C', 'Variant D'].map(v => (
                      <label key={v} className="flex items-center gap-4 p-4 rounded-xl border border-black/5 hover:bg-gray-50 cursor-pointer transition-colors active:scale-[0.98]">
                        <input type="radio" name={`q${i}`} className="w-5 h-5 accent-black" />
                        <span className="font-medium">{v}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {section === 'B' && (
            <div className="space-y-6">
              <div className="ios-card p-8 space-y-4">
                <h3 className="text-xl font-bold leading-tight">B1. Расшифруйте что произойдет после movl $0xFFFFFFFF, %eax для регистра %rax.</h3>
                <textarea className="w-full h-32 p-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-black font-medium" placeholder="Твой ответ..." />
              </div>
            </div>
          )}

          {section === 'C' && (
            <div className="space-y-6">
              <div className="ios-card p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-bold leading-tight mb-2 uppercase tracking-tight">Programming Task</h3>
                  <p className="text-gray-500 font-medium">Напишите функцию на ассемблере, которая находит максимум в массиве.</p>
                </div>
                <div className="bg-black p-6 rounded-2xl">
                  <textarea className="w-full h-64 bg-transparent text-ios-green font-mono text-sm resize-none focus:outline-none" defaultValue={`.globl find_max
find_max:
  # Напиши код здесь
  ret`} />
                </div>
              </div>
            </div>
          )}
        </section>

        <button className="ios-button-primary w-full py-5 text-xl font-bold flex items-center justify-center gap-2">
          Завершить и проверить <CheckCircle2 />
        </button>
      </div>
    </div>
  );
}
