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
            <h1 className="text-4xl font-bold tracking-tight">Full Mock Exam</h1>
            <p className="text-gray-500 font-medium leading-relaxed">
              Полный охват слайдов 1–16. <br />
              60 минут на всё.
            </p>
          </div>
          <div className="ios-card p-6 bg-gray-50 text-left space-y-6">
            <div className="flex gap-3 text-sm font-bold text-ios-orange">
              <AlertCircle size={18} className="shrink-0" />
              <span>Таймер запустится сразу. Не закрывай вкладку.</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-white p-3 rounded-2xl border border-black/5">
                <div className="text-xl font-bold">10</div>
                <div className="text-[9px] uppercase font-bold text-gray-400">MCQ</div>
              </div>
              <div className="bg-white p-3 rounded-2xl border border-black/5">
                <div className="text-xl font-bold">5</div>
                <div className="text-[9px] uppercase font-bold text-gray-400">Open Q</div>
              </div>
              <div className="bg-white p-3 rounded-2xl border border-black/5">
                <div className="text-xl font-bold">1</div>
                <div className="text-[9px] uppercase font-bold text-gray-400">Code</div>
              </div>
            </div>
          </div>
          <button 
            onClick={() => setIsStarted(true)}
            className="ios-button-primary w-full py-5 text-xl font-bold bg-ios-red active:scale-95 shadow-xl shadow-ios-red/20"
          >
            Начать финал
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
      <nav className="sticky top-0 z-50 ios-glass border-b border-black/5 px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <button onClick={() => { if(confirm('Выйти и сбросить прогресс?')) setIsStarted(false) }} className="p-2 hover:bg-gray-100 rounded-full transition-colors"><ArrowLeft size={20}/></button>
          <span className="font-bold tracking-tight">SOC2040 Mock Exam</span>
        </div>
        <div className={`flex items-center gap-2 font-mono font-bold px-4 py-2 rounded-full ${timeLeft < 300 ? 'bg-ios-red text-white animate-pulse' : 'bg-black text-white'}`}>
          <Clock size={16} />
          {formatTime(timeLeft)}
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-12 space-y-12">
        <header className="flex bg-ios-card p-1 rounded-2xl border border-black/5">
          {['A', 'B', 'C'].map(s => (
            <button
              key={s}
              onClick={() => setSection(s as any)}
              className={`flex-1 py-3 rounded-xl font-bold transition-all text-sm tracking-widest uppercase ${
                section === s ? 'bg-white text-black shadow-sm' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              Секция {s}
            </button>
          ))}
        </header>

        <section className="space-y-8 min-h-[400px]">
          {section === 'A' && (
            <div className="space-y-6">
              {[1, 2, 3].map(i => (
                <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} key={i} className="ios-card p-8 space-y-6">
                  <div className="text-[10px] uppercase font-bold text-ios-blue tracking-widest">Question {i} / 10</div>
                  <h3 className="text-xl font-bold leading-tight tracking-tight">Какой результат выполнения команды `cmpq %rax, %rbx`?</h3>
                  <div className="grid gap-3">
                    {['rbx - rax, результат в rbx', 'rax - rbx, результат в rax', 'rbx - rax, результат сбрасывается', 'rax - rbx, результат сбрасывается'].map((v, idx) => (
                      <label key={idx} className="flex items-center gap-4 p-4 rounded-2xl border border-black/5 hover:bg-gray-50 cursor-pointer transition-all active:scale-[0.98]">
                        <input type="radio" name={`q${i}`} className="w-5 h-5 accent-black shrink-0" />
                        <span className="font-medium text-gray-700">{v}</span>
                      </label>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {section === 'B' && (
            <div className="space-y-6">
              <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} className="ios-card p-8 space-y-6">
                <div className="text-[10px] uppercase font-bold text-ios-orange tracking-widest">Open Question</div>
                <h3 className="text-xl font-bold leading-tight tracking-tight">Объясните, почему `leaq` используется как для адресной арифметики, так и для умножения на 3, 5, 9?</h3>
                <textarea className="w-full h-40 p-5 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-black font-medium leading-relaxed" placeholder="Твой ответ..." />
              </motion.div>
            </div>
          )}

          {section === 'C' && (
            <div className="space-y-6 text-black">
              <motion.div initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} className="ios-card p-8 space-y-6 text-black">
                <div>
                  <div className="text-[10px] uppercase font-bold text-ios-red tracking-widest mb-2">Final Challenge</div>
                  <h3 className="text-2xl font-bold leading-tight mb-2 tracking-tight text-black">Programming Task</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">Напишите законченный код на ассемблере x86-64, который использует системный вызов `write` для вывода "OK" и завершается.</p>
                </div>
                <div className="bg-black p-6 rounded-2xl border border-white/10 shadow-inner">
                  <textarea className="w-full h-80 bg-transparent text-ios-green font-mono text-sm resize-none focus:outline-none leading-relaxed" defaultValue={`.data
  msg: .ascii "OK"
.text
.globl _start
_start:
  # Твой код здесь
  ret`} />
                </div>
              </motion.div>
            </div>
          )}
        </section>

        <div className="pt-8 border-t border-black/5 flex gap-4">
           <button className="ios-button-secondary flex-1 py-4 text-sm uppercase tracking-widest font-bold">Сохранить черновик</button>
           <button 
             onClick={() => alert('Экзамен завершен! Разбор будет доступен после проверки.')}
             className="ios-button-primary bg-black flex-1 py-4 text-sm uppercase tracking-widest font-bold shadow-2xl"
           >
             Сдать работу
           </button>
        </div>
      </div>
    </div>
  );
}
