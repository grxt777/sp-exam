'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, CheckCircle2, Circle } from 'lucide-react';
import Link from 'next/link';

const schedule = [
  { time: '00:00 - 04:00', title: 'Bits & Data (Slides 1-5)', desc: 'Hex, Endianness, Binary', status: 'todo' },
  { time: '04:00 - 08:00', title: 'Floating Point (Slides 6-7)', desc: 'IEEE 754, Normalization, Rounding', status: 'todo' },
  { time: '08:00 - 11:00', title: 'Integer Arithmetic (Slides 8-11)', desc: '2\'s complement, overflow, imul/idiv', status: 'todo' },
  { time: '11:00 - 14:00', title: 'Assembly Control (Slides 12-13)', desc: 'Jumps, Loops, Jump Tables', status: 'todo' },
  { time: '14:00 - 17:00', title: 'ABI & Stack (Slide 14)', desc: 'Recursive functions, Registry conventions', status: 'todo' },
  { time: '17:00 - 20:00', title: 'Linking & ECF (Slides 15-16)', desc: 'ELF, fork(), waitpid(), zombie', status: 'todo' },
  { time: '20:00 - 24:00', title: 'Final MCQ Marathon & Mock', desc: '50+ Review Questions', status: 'todo' },
];

export default function PlanPage() {
  return (
    <div className="min-h-screen bg-ios-bg text-black pb-20">
      <nav className="sticky top-0 z-50 ios-glass border-b border-black/5 px-6 py-4 flex items-center gap-4">
        <Link href="/" className="hover:opacity-70 transition-opacity"><ArrowLeft size={24} /></Link>
        <h1 className="font-bold text-xl tracking-tight">24-Hour Survival Plan</h1>
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-12 space-y-12">
        <header className="space-y-4 text-center sm:text-left">
          <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center text-white mx-auto sm:mx-0">
            <Clock size={24} />
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-black">С нуля до A+</h2>
          <p className="text-gray-500 text-lg font-medium">Следуй этому расписанию, чтобы успеть всё.</p>
        </header>

        <div className="space-y-4">
          {schedule.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="ios-card p-6 flex items-start gap-6 group hover:bg-gray-50 transition-colors"
            >
              <div className="text-ios-blue mt-1">
                <Circle size={24} className="group-hover:hidden" />
                <CheckCircle2 size={24} className="hidden group-hover:block" />
              </div>
              <div className="space-y-1">
                <div className="text-[10px] font-bold text-ios-blue uppercase tracking-widest">{item.time}</div>
                <div className="text-xl font-bold tracking-tight text-black">{item.title}</div>
                <p className="text-sm text-gray-500 font-medium">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="ios-card bg-black text-white p-8 border-none shadow-2xl">
          <h3 className="text-xl font-bold mb-4 text-ios-green">Финальный чек-лист</h3>
          <ul className="space-y-4 font-medium text-white/70">
            <li className="flex gap-3 items-center"><div className="w-2 h-2 rounded-full bg-ios-green"/> Знаешь порядок RDI, RSI, RDX, RCX?</li>
            <li className="flex gap-3 items-center"><div className="w-2 h-2 rounded-full bg-ios-green"/> Понимаешь, что movl обнуляет верх rax?</li>
            <li className="flex gap-3 items-center"><div className="w-2 h-2 rounded-full bg-ios-green"/> Можешь нарисовать fork-дерево для n=3?</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
