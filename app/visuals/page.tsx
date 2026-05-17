'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, GitFork, Layers, Cpu, Box } from 'lucide-react';
import Link from 'next/link';

export default function VisualsPage() {
  const [forkDepth, setForkDepth] = useState(1);
  const [activeTab, setActiveTab] = useState<'fork' | 'elf' | 'stack'>('fork');
  const totalProcesses = Math.pow(2, forkDepth);

  const renderForkTree = (depth: number, id: string = '1'): React.ReactNode => {
    if (depth === 0) return null;
    return (
      <div className="flex flex-col items-center">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold shadow-lg mb-4 text-[10px]"
        >
          PID:{id}
        </motion.div>
        {depth > 1 && (
          <div className="flex gap-4 relative">
            <div className="absolute top-[-1rem] left-1/2 w-px h-4 bg-gray-200 -translate-x-1/2" />
            {renderForkTree(depth - 1, id + 'c')}
            {renderForkTree(depth - 1, id + 'p')}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-ios-bg text-black pb-24">
      <nav className="sticky top-0 z-50 ios-glass border-b border-black/5 px-6 py-4 flex items-center gap-4">
        <Link href="/" className="hover:opacity-70 transition-opacity"><ArrowLeft size={20}/></Link>
        <h1 className="font-bold text-xl tracking-tight">Interactive Visualizations</h1>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        <header className="flex bg-ios-card p-1 rounded-2xl border border-black/5 overflow-x-auto no-scrollbar">
          {[
            { id: 'fork', icon: GitFork, label: 'fork() Tree' },
            { id: 'elf', icon: Box, label: 'ELF Sections' },
            { id: 'stack', icon: Layers, label: 'Stack Frame' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all text-xs tracking-widest uppercase whitespace-nowrap ${
                activeTab === tab.id ? 'bg-white text-black shadow-sm' : 'text-gray-400'
              }`}
            >
              <tab.icon size={14} /> {tab.label}
            </button>
          ))}
        </header>

        <section className="min-h-[500px]">
          {activeTab === 'fork' && (
            <motion.div initial={{opacity:0}} animate={{opacity:1}} className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Трассировка fork()</h2>
                <p className="text-gray-500 font-medium leading-relaxed">
                  Каждый вызов создает точную копию процесса. <br />
                  Количество процессов растет экспоненциально: 2<sup>n</sup>.
                </p>
              </div>

              <div className="ios-card p-8 bg-white flex flex-col items-center justify-center min-h-[400px]">
                <div className="mb-12 overflow-x-auto w-full flex justify-center py-4">
                  {renderForkTree(forkDepth)}
                </div>
                
                <div className="space-y-4 w-full">
                  <div className="flex justify-between text-xs font-bold text-gray-400 uppercase tracking-widest">
                    <span>Уровень вложенности: {forkDepth}</span>
                    <span>Итого процессов: {totalProcesses}</span>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {[1, 2, 3, 4, 5].map(d => (
                      <button
                        key={d}
                        onClick={() => setForkDepth(d)}
                        className={`flex-1 py-3 rounded-xl font-bold transition-all ${
                          forkDepth === d ? 'bg-black text-white' : 'bg-ios-card text-gray-400 hover:text-black'
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'elf' && (
            <motion.div initial={{opacity:0}} animate={{opacity:1}} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                {[
                  { name: 'ELF Header', desc: 'Магическое число, ISA, Entry point', color: 'bg-gray-800' },
                  { name: '.text', desc: 'Машинный код (ReadOnly)', color: 'bg-ios-blue' },
                  { name: '.rodata', desc: 'Строки и константы (ReadOnly)', color: 'bg-ios-blue/60' },
                  { name: '.data', desc: 'Init глобальные переменные', color: 'bg-ios-orange' },
                  { name: '.bss', desc: 'Uninit переменные (размер в файле 0)', color: 'bg-ios-orange/40' },
                  { name: '.symtab', desc: 'Таблица символов (LD/Debugger)', color: 'bg-gray-400' },
                  { name: 'Section Table', desc: 'Оффсеты других секций', color: 'bg-gray-800' },
                ].map(sec => (
                  <div key={sec.name} className="group relative">
                    <div className={`${sec.color} text-white p-4 rounded-xl font-bold text-center border-b-4 border-black/20 shadow-sm transition-transform active:scale-95 cursor-help`}>
                      {sec.name}
                    </div>
                    <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 w-48 bg-black text-white p-2 rounded-lg text-[10px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                      {sec.desc}
                    </div>
                  </div>
                ))}
              </div>
              <div className="ios-card bg-black p-8 text-white flex flex-col justify-center">
                <Cpu className="text-ios-green mb-6" size={40} />
                <h3 className="text-2xl font-bold mb-4 tracking-tight uppercase">ELF Binary</h3>
                <p className="text-white/60 leading-relaxed font-medium">
                  Стандартный формат для бинарных файлов в Linux. 
                  Линковщик объединяет секции из разных .o файлов в одну большую структуру.
                </p>
                <div className="mt-8 pt-8 border-t border-white/10 flex gap-4">
                  <div className="flex-1">
                    <div className="text-xl font-bold">100%</div>
                    <div className="text-[9px] uppercase font-bold opacity-40">Compatibility</div>
                  </div>
                  <div className="flex-1">
                    <div className="text-xl font-bold">O(1)</div>
                    <div className="text-[9px] uppercase font-bold opacity-40">Load Time</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'stack' && (
             <div className="text-center py-20 ios-card bg-gray-50 border-none">
               <Layers size={48} className="mx-auto mb-4 text-gray-200" />
               <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Stack Visualizer Coming Soon</p>
             </div>
          )}
        </section>
      </div>
    </div>
  );
}
