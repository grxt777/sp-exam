'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, GitFork, Boxes, Layers } from 'lucide-react';
import Link from 'next/link';

export default function VisualsPage() {
  const [forkDepth, setForkDepth] = useState(1);
  const totalProcesses = Math.pow(2, forkDepth);

  const renderForkTree = (depth: number, id: string = '1'): React.ReactNode => {
    if (depth === 0) return null;
    return (
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold shadow-lg mb-4">
          P{id}
        </div>
        {depth > 1 && (
          <div className="flex gap-8 relative">
            <div className="absolute top-[-1rem] left-1/2 w-px h-4 bg-gray-300 -translate-x-1/2" />
            {renderForkTree(depth - 1, id + 'c')}
            {renderForkTree(depth - 1, id + 'p')}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-ios-bg text-black pb-20">
      <nav className="sticky top-0 z-50 ios-glass border-b border-black/5 px-6 py-4 flex items-center gap-4">
        <Link href="/"><ArrowLeft /></Link>
        <h1 className="font-bold text-xl tracking-tight">Interactive Visuals</h1>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        {/* Fork Tree */}
        <section className="space-y-8">
          <header className="space-y-2">
            <div className="flex items-center gap-2 text-ios-blue text-xs font-bold uppercase tracking-widest">
              <GitFork size={16} /> Process Management
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-black">fork() Tree Visualizer</h2>
            <p className="text-gray-500 font-medium leading-relaxed max-w-xl text-black">
              Каждый вызов `fork()` удваивает количество процессов. <br />
              Уровней вызовов: <strong>{forkDepth}</strong>. Итого процессов: <strong>{totalProcesses}</strong>.
            </p>
          </header>

          <div className="ios-card p-12 bg-white flex flex-col items-center space-y-12 min-h-[400px]">
            <div className="overflow-x-auto w-full flex justify-center py-8">
              {renderForkTree(forkDepth)}
            </div>
            
            <div className="flex gap-2 bg-ios-card p-2 rounded-2xl">
              {[1, 2, 3, 4].map(d => (
                <button
                  key={d}
                  onClick={() => setForkDepth(d)}
                  className={`px-6 py-2 rounded-xl font-bold transition-all ${
                    forkDepth === d ? 'bg-black text-white' : 'hover:bg-gray-200 text-gray-400'
                  }`}
                >
                  {d} fork()
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ELF Sections */}
        <section className="space-y-8">
          <header className="space-y-2">
            <div className="flex items-center gap-2 text-ios-green text-xs font-bold uppercase tracking-widest">
              <Layers size={16} /> Linking & Loading
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-black">ELF Binary Structure</h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-black">
            <div className="space-y-2">
              {[
                { name: 'ELF Header', color: 'bg-gray-800' },
                { name: '.text (Code)', color: 'bg-ios-blue' },
                { name: '.rodata (Read-only)', color: 'bg-ios-blue/60' },
                { name: '.data (Initialized)', color: 'bg-ios-orange' },
                { name: '.bss (Uninitialized)', color: 'bg-ios-orange/40' },
                { name: '.symtab (Symbols)', color: 'bg-gray-400' },
                { name: 'Section Header Table', color: 'bg-gray-800' },
              ].map(sec => (
                <motion.div
                  key={sec.name}
                  whileHover={{ scale: 1.02 }}
                  className={`${sec.color} text-white p-4 rounded-xl font-bold text-center border-b-4 border-black/20 shadow-sm`}
                >
                  {sec.name}
                </motion.div>
              ))}
            </div>
            <div className="ios-card bg-gray-50 p-8 flex flex-col justify-center">
              <h3 className="font-bold text-lg mb-4 text-black uppercase tracking-tight">Подсказка</h3>
              <ul className="space-y-4 text-gray-600 font-medium">
                <li className="flex gap-3"><div className="w-2 h-2 rounded-full bg-ios-blue mt-2" /> <strong>.text:</strong> Инструкции процессора.</li>
                <li className="flex gap-3"><div className="w-2 h-2 rounded-full bg-ios-orange mt-2" /> <strong>.data / .bss:</strong> Глобальные переменные.</li>
                <li className="flex gap-3"><div className="w-2 h-2 rounded-full bg-gray-400 mt-2" /> <strong>.symtab:</strong> Имена функций и переменных для линковщика.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
