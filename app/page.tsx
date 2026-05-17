'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, 
  Gamepad2, 
  Trophy, 
  Clock, 
  ChevronRight, 
  Cpu, 
  FileText,
  Zap,
  Layers
} from 'lucide-react';
import Link from 'next/link';

const menuItems = [
  {
    title: 'Теория (Slides)',
    desc: 'Учи Slide 11–16 простыми словами',
    icon: BookOpen,
    href: '/theory/11',
    color: 'ios-blue',
  },
  {
    title: 'MCQ Тренажёр',
    desc: '50+ вопросов Section A с разбором',
    icon: Trophy,
    href: '/quiz',
    color: 'ios-green',
  },
  {
    title: 'Playground',
    desc: 'Визуализация Assembly и стека',
    icon: Cpu,
    href: '/playground',
    color: 'ios-orange',
  },
  {
    title: 'Mock Exam',
    desc: 'Полная имитация финала (A+B+C)',
    icon: Gamepad2,
    href: '/mock-exam',
    color: 'ios-red',
  },
  {
    title: '24h План',
    desc: 'Расписание "с нуля до 100"',
    icon: Clock,
    href: '/plan',
    color: 'black',
  },
  {
    title: 'Визуализации',
    desc: 'fork() tree, ELF, Stack frames',
    icon: Layers,
    href: '/visuals',
    color: 'ios-orange',
  },
  {
    title: 'Шпаргалки',
    desc: 'Syscall table, регистры, ABI',
    icon: FileText,
    href: '/cheat-sheet',
    color: 'gray-500',
  }
];

export default function Home() {
  return (
    <main className="min-h-screen p-6 md:p-12 mb-20 bg-ios-bg">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <header className="space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-ios-blue font-semibold uppercase tracking-wider text-xs"
          >
            <Zap size={14} className="fill-current" />
            Exam Prep SOC2040
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            System Programming <br />
            За 24 часа.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg"
          >
            Минималистичный гид по x86-64, Linking и Процессам. <br />
            Всё, что нужно для финала в одном месте.
          </motion.p>
        </header>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 text-black">
          {menuItems.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + idx * 0.05 }}
              id={`nav-card-${idx}`}
            >
              <Link href={item.href} className="group block h-full">
                <div className="ios-card h-full p-6 transition-all duration-300 group-hover:scale-[1.02] group-hover:bg-gray-50 active:scale-95 flex flex-col justify-between">
                  <div>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-colors bg-${item.color}/10 group-hover:bg-${item.color}/20 text-${item.color}`}>
                      <item.icon size={24} />
                    </div>
                    <h2 className="text-xl font-bold mb-1 tracking-tight">{item.title}</h2>
                    <p className="text-gray-500 font-normal leading-snug">{item.desc}</p>
                  </div>
                  <div className="mt-6 flex items-center text-xs font-bold text-gray-400 group-hover:text-black transition-colors uppercase tracking-widest">
                    Перейти <ChevronRight size={14} className="ml-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Quick Progress */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="ios-card bg-black text-white p-8 text-black"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1">
              <h3 className="text-2xl font-bold tracking-tight text-white">Твой прогресс</h3>
              <p className="text-white/60">До экзамена осталось совсем мало времени.</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">0%</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Охват тем</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">0/50</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">MCQ решено</div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
