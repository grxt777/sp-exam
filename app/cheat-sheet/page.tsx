'use client';

import React from 'react';
import { ArrowLeft, Download, Bookmark, Info } from 'lucide-react';
import Link from 'next/link';

const cheats = [
  {
    title: 'Linux Syscall Table',
    items: [
      { key: '%rax=0', val: 'read (rdi=fd, rsi=buf, rdx=count)' },
      { key: '%rax=1', val: 'write (rdi=fd, rsi=buf, rdx=count)' },
      { key: '%rax=2', val: 'open (rdi=filename, rsi=flags, rdx=mode)' },
      { key: '%rax=60', val: 'exit (rdi=status)' },
      { key: '%rax=57', val: 'fork ()' },
    ]
  },
  {
    title: 'Argument Registers (System V)',
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
      { key: 'je/jz', val: 'Equal / Zero (ZF=1)' },
      { key: 'jne/jnz', val: 'Not Equal / Not Zero (ZF=0)' },
      { key: 'jg', val: 'Greater (Signed, ZF=0 & SF=OF)' },
      { key: 'jl', val: 'Less (Signed, SF!=OF)' },
      { key: 'ja', val: 'Above (Unsigned, CF=0 & ZF=0)' },
      { key: 'jb', val: 'Below (Unsigned, CF=1)' },
    ]
  }
];

export default function CheatSheetPage() {
  return (
    <div className="min-h-screen bg-ios-bg text-black pb-20">
      <nav className="sticky top-0 z-50 ios-glass border-b border-black/5 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
          <ArrowLeft size={20} />
          <span className="font-semibold tracking-tight">Dashboard</span>
        </Link>
        <button className="ios-button-primary py-2 px-4 text-xs">
          <Download size={14} className="inline mr-1" /> PDF
        </button>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Шпаргалки (Essentials)</h1>
          <p className="text-gray-500 font-medium">Самое важное, что нужно помнить наизусть.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
          {cheats.map((group, idx) => (
            <div key={idx} className="ios-card p-6 space-y-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Bookmark size={20} className="text-ios-blue" />
                {group.title}
              </h2>
              <div className="space-y-3">
                {group.items.map((item, iidx) => (
                  <div key={iidx} className="flex justify-between items-start gap-4 border-b border-black/5 pb-2">
                    <code className="bg-gray-100 px-2 py-1 rounded text-ios-blue font-bold text-xs shrink-0">{item.key}</code>
                    <span className="text-sm font-medium text-gray-600 text-right">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="ios-card p-6 bg-black text-white space-y-4">
            <h2 className="text-xl font-bold flex items-center gap-2 text-white">
              <Info size={20} className="text-ios-green" />
              ABI Reminder
            </h2>
            <p className="text-white/60 text-sm leading-relaxed">
              <strong className="text-white uppercase tracking-widest text-[10px]">Caller-saved:</strong> rax, rcx, rdx, rsi, rdi, r8-r11. <br /><br />
              <strong className="text-white uppercase tracking-widest text-[10px]">Callee-saved:</strong> rbx, rbp, r12, r13, r14, r15. <br /><br />
              В x86-64 запись в <code className="text-ios-green">%eax</code> обнуляет старшие 32 бита <code className="text-ios-green">%rax</code>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
