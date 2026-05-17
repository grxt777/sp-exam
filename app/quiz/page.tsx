'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { quizQuestions, Question } from '@/lib/quiz-data';
import { 
  CheckCircle2, 
  XCircle, 
  ArrowLeft, 
  RefreshCcw, 
  Filter,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import Link from 'next/link';
import confetti from 'canvas-confetti';

export default function QuizPage() {
  const [filter, setFilter] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);

  const filteredQuestions = useMemo(() => {
    return filter === 'all' 
      ? quizQuestions 
      : quizQuestions.filter(q => q.slideId === filter);
  }, [filter]);

  const currentQuestion = filteredQuestions[currentIndex];

  const handleOptionSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
  };

  const checkAnswer = () => {
    if (selectedOption === null) return;
    
    const correct = selectedOption === currentQuestion.correct;
    if (correct) {
      setScore(s => s + 1);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#34C759', '#007AFF']
      });
    }
    
    setIsAnswered(true);
    setTotalAnswered(t => t + 1);
  };

  const nextQuestion = () => {
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex(i => i + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    }
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setTotalAnswered(0);
  };

  return (
    <div className="min-h-screen bg-ios-bg text-black pb-24">
      {/* Top Nav */}
      <nav className="sticky top-0 z-50 ios-glass border-b border-black/5 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
          <ArrowLeft size={20} />
          <span className="font-semibold hidden sm:inline tracking-tight">Dashboard</span>
        </Link>
        <div className="text-center">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Score</div>
          <div className="font-bold tabular-nums tracking-tight">{score} / {totalAnswered}</div>
        </div>
        <div className="w-20 hidden sm:block" />
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          {['all', '11', '12', '13', '14', '15', '16'].map(id => (
            <button
              key={id}
              onClick={() => {
                setFilter(id);
                setCurrentIndex(0);
                setIsAnswered(false);
                setSelectedOption(null);
              }}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                filter === id 
                ? 'bg-black text-white' 
                : 'bg-ios-card text-gray-400 hover:bg-gray-200'
              }`}
            >
              {id === 'all' ? 'Все темы' : `Slide ${id}`}
            </button>
          ))}
        </div>

        {currentQuestion ? (
          <div className="space-y-8">
            {/* Progress Bar */}
            <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
              <motion.div 
                initial={false}
                animate={{ width: `${((currentIndex + 1) / filteredQuestions.length) * 100}%` }}
                className="h-full bg-ios-blue"
              />
            </div>

            {/* Question Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <div className="text-ios-blue font-bold text-xs uppercase tracking-widest">
                    Вопрос {currentIndex + 1} из {filteredQuestions.length}
                  </div>
                  <h1 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight">
                    {currentQuestion.question}
                  </h1>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {currentQuestion.options.map((opt, idx) => {
                    let state = 'default';
                    if (isAnswered) {
                      if (idx === currentQuestion.correct) state = 'correct';
                      else if (idx === selectedOption) state = 'wrong';
                    } else if (idx === selectedOption) {
                      state = 'selected';
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleOptionSelect(idx)}
                        className={`ios-card p-5 text-left transition-all duration-200 flex items-center justify-between group active:scale-[0.99] ${
                          state === 'correct' ? 'bg-ios-green/10 border-ios-green text-ios-green' :
                          state === 'wrong' ? 'bg-ios-red/10 border-ios-red text-ios-red' :
                          state === 'selected' ? 'bg-black text-white ring-2 ring-black' :
                          'hover:bg-gray-50'
                        }`}
                      >
                        <span className="font-medium text-lg">{opt}</span>
                        {state === 'correct' && <CheckCircle2 size={24} />}
                        {state === 'wrong' && <XCircle size={24} />}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Explanation & Action */}
            <div className="pt-8">
              {!isAnswered ? (
                <button
                  disabled={selectedOption === null}
                  onClick={checkAnswer}
                  className="ios-button-primary w-full py-5 text-xl font-bold disabled:opacity-30 transition-opacity"
                >
                  Проверить ответ
                </button>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className="ios-card bg-gray-50 p-6 border-none shadow-none">
                    <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-2">Объяснение</h4>
                    <p className="text-gray-600 leading-relaxed font-medium">
                      {currentQuestion.explanation}
                    </p>
                  </div>
                  
                  <div className="flex gap-3">
                    <button
                      onClick={resetQuiz}
                      className="ios-button-secondary aspect-square p-4 flex items-center justify-center"
                    >
                      <RefreshCcw size={24} />
                    </button>
                    <button
                      onClick={nextQuestion}
                      className="ios-button-primary flex-1 text-xl font-bold flex items-center justify-center gap-2"
                    >
                      Следующий вопрос <ChevronRight size={24} />
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        ) : (
          <div className="text-center py-20 space-y-4">
            <h2 className="text-2xl font-bold">Нет вопросов в этой категории</h2>
            <button onClick={() => setFilter('all')} className="ios-button-primary">Сбросить фильтр</button>
          </div>
        )}
      </div>
    </div>
  );
}
