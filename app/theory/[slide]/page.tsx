'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { slides } from '@/lib/theory-data';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowLeft,
  Book,
  Code,
  Table as TableIcon
} from 'lucide-react';
import Link from 'next/link';

export default function TheoryPage() {
  const params = useParams();
  const router = useRouter();
  const slideId = params.slide as string;
  const slideIndex = slides.findIndex(s => s.id === slideId);
  const slide = slides[slideIndex];

  if (!slide) {
    return <div>Slide not found</div>;
  }

  const nextSlide = slides[slideIndex + 1];
  const prevSlide = slides[slideIndex - 1];

  return (
    <div className="min-h-screen bg-ios-bg text-black pb-20">
      {/* Top Nav */}
      <nav className="sticky top-0 z-50 ios-glass border-b border-black/5 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
          <ArrowLeft size={20} />
          <span className="font-semibold hidden sm:inline tracking-tight">Dashboard</span>
        </Link>
        <div className="text-center font-bold tracking-tight">Slide {slideId}</div>
        <div className="w-20" /> {/* Spacer */}
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-12 space-y-16">
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="w-12 h-12 bg-ios-blue rounded-2xl flex items-center justify-center text-white">
            <Book size={24} />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">{slide.title}</h1>
        </motion.header>

        <section className="space-y-12">
          {slide.topics.map((topic, idx) => (
            <motion.div 
              key={topic.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * idx }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold border-l-4 border-ios-blue pl-4 tracking-tight">{topic.title}</h2>
              <p className="text-gray-600 leading-relaxed text-lg">{topic.content}</p>
              
              {topic.code && (
                <div className="ios-card bg-black p-6 rounded-2xl overflow-x-auto shadow-sm border border-black/5">
                  <div className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-bold tracking-widest mb-4">
                    <Code size={14} /> Assembly x86-64
                  </div>
                  <pre className="text-ios-green font-mono text-sm leading-relaxed whitespace-pre-wrap">
                    <code>{topic.code}</code>
                  </pre>
                </div>
              )}

              {topic.table && (
                <div className="ios-card overflow-hidden">
                  <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-black/5">
                      <tr>
                        {topic.table.headers.map(h => (
                          <th key={h} className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-black/5">
                      {topic.table.rows.map((row, ridx) => (
                        <tr key={ridx} className="hover:bg-gray-50 transition-colors">
                          {row.map((cell, cidx) => (
                            <td key={cidx} className="px-6 py-4 font-medium">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </motion.div>
          ))}
        </section>

        {/* Navigation */}
        <div className="pt-12 flex items-center justify-between gap-4">
          {prevSlide ? (
            <Link 
              href={`/theory/${prevSlide.id}`} 
              className="ios-button-secondary flex items-center gap-2 flex-1 justify-center py-4"
            >
              <ChevronLeft size={20} />
              <div className="text-left">
                <div className="text-[10px] uppercase opacity-40 font-bold">Назад</div>
                <div className="font-semibold truncate max-w-[120px] tracking-tight">{prevSlide.title}</div>
              </div>
            </Link>
          ) : <div className="flex-1" />}

          {nextSlide ? (
            <Link 
              href={`/theory/${nextSlide.id}`} 
              className="ios-button-primary flex items-center gap-2 flex-1 justify-center py-4"
            >
              <div className="text-right">
                <div className="text-[10px] uppercase opacity-60 font-bold">Далее</div>
                <div className="font-semibold truncate max-w-[120px] tracking-tight">{nextSlide.title}</div>
              </div>
              <ChevronRight size={20} />
            </Link>
          ) : (
            <Link 
              href="/quiz" 
              className="ios-button-primary bg-ios-green flex items-center gap-2 flex-1 justify-center py-4"
            >
              <div className="text-right">
                <div className="text-[10px] uppercase opacity-80 font-bold">Конец теории</div>
                <div className="font-semibold tracking-tight">К Тестам</div>
              </div>
              <ChevronRight size={20} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
