'use client';

import React from 'react';
import { ArrowLeft, Download, Bookmark, Info, Zap } from 'lucide-react';
import Link from 'next/link';

const cheats = [
  {
    title: 'Syscall Table (rax)',
    items: [
      { key: '0', val: 'read (rdi=fd, rsi=buf, rdx=count)' },
      { key: '1', val: 'write (rdi=fd, rsi=buf, rdx=count)' },
      { key: '2', val: 'open (rdi=fn, rsi=flags, rdx=mode)' },
      { key: '57', val: 'fork () - returns 0 in child' },
      { key: '60', val: 'exit (rdi=status)' },
    ]
  },
  {
    title: 'Argument Registers',
    items: [
      { key: '1st', val: '%rdi' },
      { key: '2nd', val: '%rsi' },
      { key: '3rd', val: '%rdx' },
      { key: '4th', val: '%rcx' },
      { key: '5th', val: '%r8' },
      { key: '6th', val: '%r9' },
    ]
  },
  {
    title: 'Condition Jumps',
    items: [
      { key: 'je', val: 'Equal (ZF=1)' },
      { key: 'jg', val: 'Greater (Signed, ZF=0 & SF=OF)' },
      { key: 'jl', val: 'Less (Signed, SF!=OF)' },
      { key: 'ja', val: 'Above (Unsigned, CF=0 & ZF=0)' },
      { key: 'jb', val: 'Below (Unsigned, CF=1)' },
    ]
  },
  {
    title: 'Data Sizes',
    items: [
      { key: 'char', val: '1 byte' },
      { key: 'short', val: '2 bytes' },
      { key: 'int/float', val: '4 bytes' },
      { key: 'long/ptr', val: '8 bytes' },
    ]
  }
];

export default function CheatSheetPage() {
  return (
    <div className="min-h-screen bg-ios-bg text-black pb-24">
      <nav className="sticky top-0 z-50 ios-glass border-b border-black/5 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
          <ArrowLeft size={20} />
          <span className="font-semibold tracking-tight">Dashboard</span>
        </Link>
        <button className="ios-button-primary py-2 px-6 flex items-center gap-2 text-xs">
          <Download size={14} /> PDF Exam Sheet
        </button>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        <header className="space-y-4">
          <div className="flex items-center gap-2 text-ios-blue text-xs font-bold uppercase tracking-widest">
            <Zap size={16} className="fill-current"/> Quick Reference
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Шпаргалки (Essentials)</h1>
          <p className="text-gray-500 font-medium text-lg">Самое важное, что нужно выучить наизусть перед входом в аудиторию.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cheats.map((group, idx) => (
            <div key={idx} className="ios-card p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-sm font-bold text-gray-400 mb-6 flex items-center gap-2 uppercase tracking-widest">
                  {group.title}
                </h2>
                <div className="space-y-4">
                  {group.items.map((item, iidx) => (
                    <div key={iidx} className="flex flex-col gap-1 border-b border-black/5 pb-3 last:border-0">
                      <code className="text-ios-blue font-bold text-base">{item.key}</code>
                      <span className="text-xs font-medium text-gray-500 leading-tight">{item.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="ios-card p-8 bg-black text-white">
            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-tight">ABI Convention</h3>
            <div className="space-y-6">
              <section className="space-y-2">
                <span className="text-xs font-bold text-ios-green uppercase tracking-widest">Caller-saved</span>
                <p className="text-white/60 font-mono text-sm">rax, rcx, rdx, rsi, rdi, r8, r9, r10, r11</p>
              </section>
              <section className="space-y-2">
                <span className="text-xs font-bold text-ios-orange uppercase tracking-widest">Callee-saved</span>
                <p className="text-white/60 font-mono text-sm">rbx, rbp, r12, r13, r14, r15</p>
              </section>
            </div>
          </div>

          <div className="ios-card p-8 border-ios-red/20 bg-ios-red/5">
            <h3 className="text-xl font-bold text-ios-red mb-4 uppercase tracking-tight">Common Traps</h3>
            <ul className="space-y-4 font-medium text-gray-700">
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-ios-red mt-2 shrink-0"/>
                <span><strong>movl</strong> обнуляет старшие 32 бита регистра. Не забывай!</span>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-ios-red mt-2 shrink-0"/>
                <span>Стек выравнивается по 16 байт <strong>ДО</strong> выполнения CALL.</span>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-ios-red mt-2 shrink-0"/>
                <span>idivq делит <strong>RDX:RAX</strong>. Не забудь cqto!</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
