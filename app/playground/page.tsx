'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Play, 
  Pause, 
  SkipForward, 
  RotateCcw,
  Zap,
  Code
} from 'lucide-react';
import Link from 'next/link';

// Simple simulated CPU state
interface CPU {
  rax: number;
  rbx: number;
  rcx: number;
  rdx: number;
  rdi: number;
  rsi: number;
  rsp: number;
  rip: number;
  flags: { zf: boolean; sf: boolean };
  stack: number[];
}

const EXAMPLES = {
  basic: `movq $10, %rax
movq $20, %rbx
addq %rbx, %rax
subq $5, %rax`,
  fib: `movq $1, %rax
movq $1, %rbx
# Loop logic simplified for playground
loop:
  addq %rax, %rbx
  movq %rbx, %rcx # temp
  # Manual update
  incq %rdx
  cmpq $10, %rdx
  jl loop`,
  stack: `pushq $100
pushq $200
popq %rax
popq %rbx`
};

export default function PlaygroundPage() {
  const [code, setCode] = useState(EXAMPLES.basic);
  const [cpu, setCpu] = useState<CPU>({
    rax: 0, rbx: 0, rcx: 0, rdx: 0, rdi: 0, rsi: 0,
    rsp: 0x7ffffff0,
    rip: 0,
    flags: { zf: false, sf: false },
    stack: []
  });
  const [history, setHistory] = useState<CPU[]>([]);
  const [isRunning, setIsAnswered] = useState(false);
  const [currentLine, setCurrentLine] = useState(-1);

  const lines = useMemo(() => code.split('\n').filter(l => l.trim() && !l.trim().startsWith('#')), [code]);

  const reset = () => {
    setCpu({
      rax: 0, rbx: 0, rcx: 0, rdx: 0, rdi: 0, rsi: 0,
      rsp: 0x7ffffff0,
      rip: 0,
      flags: { zf: false, sf: false },
      stack: []
    });
    setHistory([]);
    setCurrentLine(-1);
  };

  const step = () => {
    const nextLine = currentLine + 1;
    if (nextLine >= lines.length) return;

    setCurrentLine(nextLine);
    const line = lines[nextLine].trim();
    
    setCpu(prev => {
      const newCpu = { ...prev, stack: [...prev.stack] };
      const [instr, ...argsRaw] = line.split(/[ ,]+/);
      const args = argsRaw.map(a => a.trim());

      const getVal = (arg: string) => {
        if (arg.startsWith('$')) return parseInt(arg.slice(1));
        if (arg === '%rax') return prev.rax;
        if (arg === '%rbx') return prev.rbx;
        if (arg === '%rcx') return prev.rcx;
        if (arg === '%rdx') return prev.rdx;
        return 0;
      };

      const setReg = (reg: string, val: number) => {
        if (reg === '%rax') newCpu.rax = val;
        if (reg === '%rbx') newCpu.rbx = val;
        if (reg === '%rcx') newCpu.rcx = val;
        if (reg === '%rdx') newCpu.rdx = val;
      };

      // Mock logic
      switch (instr) {
        case 'movq': setReg(args[1], getVal(args[0])); break;
        case 'addq': {
          const res = getVal(args[1]) + getVal(args[0]);
          setReg(args[1], res);
          newCpu.flags.zf = res === 0;
          newCpu.flags.sf = res < 0;
          break;
        }
        case 'subq': {
          const res = getVal(args[1]) - getVal(args[0]);
          setReg(args[1], res);
          newCpu.flags.zf = res === 0;
          newCpu.flags.sf = res < 0;
          break;
        }
        case 'pushq': {
          newCpu.stack.push(getVal(args[0]));
          newCpu.rsp -= 8;
          break;
        }
        case 'popq': {
          const val = newCpu.stack.pop() || 0;
          setReg(args[0], val);
          newCpu.rsp += 8;
          break;
        }
        case 'incq': setReg(args[0], getVal(args[0]) + 1); break;
        case 'decq': setReg(args[0], getVal(args[0]) - 1); break;
      }

      return newCpu;
    });
  };

  return (
    <div className="min-h-screen bg-ios-bg text-black flex flex-col">
      {/* Top Nav */}
      <nav className="ios-glass border-b border-black/5 px-6 py-4 flex items-center justify-between shrink-0">
        <Link href="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
          <ArrowLeft size={20} />
          <span className="font-semibold tracking-tight">Dashboard</span>
        </Link>
        <div className="flex gap-2">
          {Object.keys(EXAMPLES).map(key => (
            <button 
              key={key} 
              onClick={() => { setCode(EXAMPLES[key as keyof typeof EXAMPLES]); reset(); }}
              className="px-3 py-1 bg-ios-card rounded-full text-[10px] font-bold uppercase tracking-wider text-gray-400 hover:text-black"
            >
              {key}
            </button>
          ))}
        </div>
      </nav>

      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Editor Area */}
        <div className="w-full md:w-1/2 flex flex-col border-r border-black/5 p-6 space-y-6">
          <div className="flex-1 ios-card bg-black p-4 flex flex-col">
            <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4 text-white/40 text-[10px] font-bold uppercase tracking-widest">
              <div className="flex items-center gap-2"><Code size={14} /> main.s</div>
              <div className="flex items-center gap-2">
                <button onClick={reset} className="hover:text-white"><RotateCcw size={14}/></button>
              </div>
            </div>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="flex-1 bg-transparent text-ios-green font-mono text-base resize-none focus:outline-none leading-relaxed"
              placeholder="# Напиши код здесь..."
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={step}
              className="ios-button-primary flex-1 flex items-center justify-center gap-2 bg-ios-blue text-lg"
            >
              <SkipForward size={24} /> Step
            </button>
            <button
              onClick={reset}
              className="ios-button-secondary w-16 flex items-center justify-center"
            >
              <RotateCcw size={24} />
            </button>
          </div>
        </div>

        {/* Visualization Area */}
        <div className="w-full md:w-1/2 bg-gray-50/50 p-6 overflow-y-auto space-y-6">
          {/* Registers */}
          <section className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">Registers x86-64</h3>
            <div className="grid grid-cols-2 gap-3 font-mono">
              {[
                { label: 'rax', val: cpu.rax },
                { label: 'rbx', val: cpu.rbx },
                { label: 'rcx', val: cpu.rcx },
                { label: 'rdx', val: cpu.rdx },
                { label: 'rsp', val: cpu.rsp, color: 'text-ios-orange' },
                { label: 'flags', val: `${cpu.flags.zf ? 'Z' : '-'}${cpu.flags.sf ? 'S' : '-'}` }
              ].map(reg => (
                <div key={reg.label} className="ios-card p-4 bg-white flex justify-between items-center group">
                  <span className="text-gray-400 font-bold uppercase text-[10px]">% {reg.label}</span>
                  <motion.span 
                    key={reg.val}
                    initial={{ color: '#007AFF' }}
                    animate={{ color: '#000000' }}
                    className={`font-bold ${reg.color || ''}`}
                  >
                    0x{typeof reg.val === 'number' ? reg.val.toString(16).padStart(8, '0') : reg.val}
                  </motion.span>
                </div>
              ))}
            </div>
          </section>

          {/* Stack */}
          <section className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">Stack Memory</h3>
            <div className="space-y-2">
              <AnimatePresence>
                {[...cpu.stack].reverse().map((val, idx) => (
                  <motion.div
                    key={`${val}-${idx}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="ios-card p-4 flex justify-between bg-white/80 border-ios-blue shadow-sm"
                  >
                    <span className="text-[10px] font-bold text-ios-blue uppercase">0x{(cpu.rsp + idx * 8).toString(16)}</span>
                    <span className="font-bold">0x{val.toString(16).padStart(16, '0')}</span>
                  </motion.div>
                ))}
                {cpu.stack.length === 0 && (
                  <div className="text-center py-12 text-gray-300 font-bold uppercase text-xs">Stack is empty</div>
                )}
              </AnimatePresence>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function useMemo(arg0: () => string[], arg1: string[]) {
  return arg0();
}

function useCPU() {
  // Logic here
}
