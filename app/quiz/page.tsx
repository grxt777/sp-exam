'use client';

import React, { useState, useEffect } from 'react';
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
  const [shuffledQuestions, setShuffledQuestions] = useState<(Question & { shuffledOptions: string[], newCorrectIndex: number })[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userChoices, setUserChoices] = useState<Record<number, number>>({});
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const base = filter === 'all' 
      ? quizQuestions 
      : quizQuestions.filter(q => q.slideId === filter);
    
    const shuffled = [...base].sort(() => Math.random() - 0.5);
    
    const withShuffledOptions = shuffled.map(q => {
      const optionsWithMetadata = q.options.map((opt, originalIdx) => ({
        text: opt,
        isCorrect: originalIdx === q.correct
      }));
      
      const shuffledOpts = [...optionsWithMetadata].sort(() => Math.random() - 0.5);
      const newCorrectIndex = shuffledOpts.findIndex(o => o.isCorrect);
      
      return {
        ...q,
        shuffledOptions: shuffledOpts.map(o => o.text),
        newCorrectIndex
      };
    });
    
    setShuffledQuestions(withShuffledOptions);
    setCurrentIndex(0);
    setUserChoices({});
    setScore(0);
    setIsFinished(false);
  }, [filter]);

  const currentQuestion = shuffledQuestions[currentIndex];
  const isAnswered = currentIndex in userChoices;
  const selectedOption = userChoices[currentIndex] ?? null;

  const handleOptionSelect = (idx: number) => {
    if (isAnswered) return;
    setUserChoices(prev => ({ ...prev, [currentIndex]: idx }));
    
    if (idx === currentQuestion.newCorrectIndex) {
      setScore(s => s + 1);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#34C759', '#007AFF']
      });
    }
  };

  const nextQuestion = () => {
    if (currentIndex < shuffledQuestions.length - 1) {
      setCurrentIndex(i => i + 1);
    } else {
      setIsFinished(true);
    }
  };

  const prevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(i => i - 1);
    }
  };

  const resetQuiz = () => {
    setFilter(filter); // Trigger re-shuffle if needed or just re-run the effect
    // To simplify, let's just use a state to force re-shuffle
    setFilter(prev => {
      const current = prev;
      setFilter(''); // temp
      setTimeout(() => setFilter(current), 10);
      return prev;
    });
  };

  if (isFinished) {
    return (
      <div className="min-h-screen bg-ios-bg flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full ios-card p-12 text-center space-y-8 shadow-2xl"
        >
          <div className="w-24 h-24 bg-ios-green rounded-[2.5rem] flex items-center justify-center text-white mx-auto shadow-xl shadow-ios-green/20">
            <CheckCircle2 size={48} />
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">Quiz Complete!</h1>
            <p className="text-gray-500 font-medium text-lg">You scored {score} out of {shuffledQuestions.length}</p>
          </div>
          <div className="text-6xl font-black text-black tracking-tighter">
            {Math.round((score / shuffledQuestions.length) * 100)}%
          </div>
          <div className="pt-4 flex flex-col gap-3">
            <button onClick={() => setIsFinished(false)} className="ios-button-primary py-4">Review Answers</button>
            <Link href="/" className="ios-button-secondary py-4">Back to Dashboard</Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ios-bg text-black pb-24">
      {/* Top Nav */}
      <nav className="sticky top-0 z-50 ios-glass border-b border-black/5 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
          <ArrowLeft size={20} />
          <span className="font-semibold hidden sm:inline tracking-tight">Dashboard</span>
        </Link>
        <div className="text-center">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Progress</div>
          <div className="font-bold tabular-nums tracking-tight">{Object.keys(userChoices).length} / {shuffledQuestions.length}</div>
        </div>
        <div className="text-right">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Score</div>
          <div className="font-bold tabular-nums tracking-tight text-ios-green">{score}</div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="flex flex-wrap gap-2 overflow-x-auto no-scrollbar pb-2">
          {['all', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'].map(id => (
            <button
              key={id}
              onClick={() => setFilter(id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
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
                animate={{ width: `${((currentIndex + 1) / shuffledQuestions.length) * 100}%` }}
                className="h-full bg-ios-blue"
              />
            </div>

            {/* Question Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentIndex}-${filter}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="text-ios-blue font-bold text-xs uppercase tracking-widest">
                      Вопрос {currentIndex + 1} из {shuffledQuestions.length}
                    </div>
                    <div className="text-gray-400 font-bold text-[10px] uppercase tracking-widest">
                      Slide {currentQuestion.slideId}
                    </div>
                  </div>
                  <h1 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight">
                    {currentQuestion.question}
                  </h1>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {currentQuestion.shuffledOptions.map((opt, idx) => {
                    let state = 'default';
                    if (isAnswered) {
                      if (idx === currentQuestion.newCorrectIndex) state = 'correct';
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
                        <span className="font-medium text-lg leading-snug">{opt}</span>
                        {state === 'correct' && <CheckCircle2 size={24} className="shrink-0" />}
                        {state === 'wrong' && <XCircle size={24} className="shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Explanation & Action */}
            <div className="pt-4 space-y-6">
              <AnimatePresence>
                {isAnswered && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="ios-card bg-gray-50 p-6 border-none shadow-none"
                  >
                    <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-2">Объяснение</h4>
                    <p className="text-gray-600 leading-relaxed font-medium">
                      {currentQuestion.explanation}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <div className="flex items-center gap-4">
                <button
                  onClick={prevQuestion}
                  disabled={currentIndex === 0}
                  className="ios-button-secondary p-5 disabled:opacity-20 transition-opacity"
                  title="Previous"
                >
                  <ChevronLeft size={24} />
                </button>

                {currentIndex === shuffledQuestions.length - 1 && isAnswered ? (
                  <button
                    onClick={() => setIsFinished(true)}
                    className="ios-button-primary flex-1 py-5 text-xl font-bold bg-ios-green shadow-lg shadow-ios-green/20"
                  >
                    Завершить тест
                  </button>
                ) : (
                  <button
                    onClick={nextQuestion}
                    disabled={!isAnswered}
                    className="ios-button-primary flex-1 py-5 text-xl font-bold flex items-center justify-center gap-2 disabled:opacity-30"
                  >
                    {currentIndex === shuffledQuestions.length - 1 ? 'Finish' : 'Далее'} <ChevronRight size={24} />
                  </button>
                )}
              </div>
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
