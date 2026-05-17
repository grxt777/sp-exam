'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'motion/react';
import { Languages } from 'lucide-react';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex bg-gray-100 p-1 rounded-full w-fit">
      <button
        onClick={() => setLanguage('ru')}
        className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
          language === 'ru' ? 'bg-white text-black shadow-sm' : 'text-gray-400 hover:text-gray-600'
        }`}
      >
        RU
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
          language === 'en' ? 'bg-white text-black shadow-sm' : 'text-gray-400 hover:text-gray-600'
        }`}
      >
        EN
      </button>
    </div>
  );
}

export function LanguageToggleMini() {
  const { language, setLanguage } = useLanguage();
  
  return (
    <button 
      onClick={() => setLanguage(language === 'ru' ? 'en' : 'ru')}
      className="flex items-center gap-2 px-3 py-2 ios-glass rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/50 transition-colors"
    >
      <Languages size={14} />
      {language}
    </button>
  );
}
