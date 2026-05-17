'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, CheckCircle2, Circle } from 'lucide-react';
import Link from 'next/link';

const schedule = [
  { time: '00:00 - 04:00', title: 'Basis & Arithmetic (Slide 11-12)', status: 'todo' },
  { time: '04:00 - 08:00', title: 'Control Flow & Loops (Slide 13)', status: 'todo' },
  { time: '08:00 - 12:00', title: 'Procedures & Stack (Slide 14)', status: 'todo' },
  { time: '12:00 - 15:00', title: 'Linking (Slide 15)', status: 'todo' },
  { time: '15:00 - 18:00', title: 'Processes & ECF (Slide 16)', status: 'todo' },
  { time: '18:00 - 21:00', title: 'MCQ Intensive (50+ items)', status: 'todo' },
  { time: '21:00 - 24:00', title: 'Mock Exam & Review', status: 'todo' },
];

export default function PlanPage() {
  return (
    <div className="min-h-screen bg-ios-bg text-black pb-20">
      <nav className="sticky top-0 z-50 ios-glass border-b border-black/5 px-6 py-4 flex items-center gap-4">
        <Link href="/" className="hover:opacity-70 transition-opacity"><ArrowLeft size={24} /></Link>
        <h1 className="font-bold text-xl tracking-tight">24h Study Plan</h1>
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-12 space-y-12">
        <header className="space-y-4">
          <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center text-white">
            <Clock size={24} />
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-black">Твой путь к A+</h2>
          <p className="text-gray-500 text-lg">Расписание по блокам. Не отключайся.</p>
        </header>

        <div className="space-y-4">
          {schedule.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="ios-card p-6 flex items-start gap-6 group hover:bg-gray-50"
            >
              <div className="text-ios-blue mt-1">
                <Circle size={24} className="group-hover:hidden" />
                <CheckCircle2 size={24} className="hidden group-hover:block" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{item.time}</div>
                <div className="text-xl font-bold tracking-tight text-black">{item.title}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="ios-card bg-ios-orange/10 p-8 border-ios-orange/20 text-black">
          <h3 className="text-xl font-bold mb-4 text-ios-orange">Советы по выживанию</h3>
          <ul className="space-y-3 font-medium text-gray-600">
            <li className="flex gap-2">🚀 Пропускай теорию, если уже знаешь — иди сразу к Playground.</li>
            <li className="flex gap-2">🥤 Пей воду, не только кофе.</li>
            <li className="flex gap-2">🧠 После каждого блока решай 5 MCQ.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
