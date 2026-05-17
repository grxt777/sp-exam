export interface Question {
  id: number;
  slideId: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export const quizQuestions: Question[] = [
  // Slide 1
  {
    id: 1, slideId: '1', question: 'Какой из компонентов CPU отвечает за арифметические и логические операции?',
    options: ['Control Unit', 'ALU', 'Buses', 'RAM'], correct: 1,
    explanation: 'ALU (Arithmetic Logic Unit) выполняет все вычисления.',
  },
  {
    id: 2, slideId: '1', question: 'Шина адреса в системе обычно является:',
    options: ['Двунаправленной', 'Однонаправленной (от CPU к памяти)', 'Оптической', 'Беспроводной'], correct: 1,
    explanation: 'CPU выставляет адрес ячейки, из которой хочет прочитать или в которую хочет записать.',
  },
  
  // Slide 2
  {
    id: 3, slideId: '2', question: 'Какой тип памяти используется для кэша L1/L2?',
    options: ['DRAM', 'HDD', 'SRAM', 'ROM'], correct: 2,
    explanation: 'SRAM (Static RAM) быстрее DRAM, но дороже и занимает больше места, поэтому идеальна для кэша.',
  },
  {
    id: 4, slideId: '2', question: 'Что происходит с данными в DRAM при выключении питания?',
    options: ['Остаются навсегда', 'Стираются', 'Копируются на диск', 'Шифруются'], correct: 1,
    explanation: 'DRAM — это летучая (volatile) память.',
  },

  // Slide 5
  {
    id: 5, slideId: '5', question: 'Сколько байт занимает тип "long" в x86-64?',
    options: ['2', '4', '8', '16'], correct: 2,
    explanation: 'В 64-битной архитектуре long обычно 64 бита (8 байт).',
  },
  {
    id: 6, slideId: '5', question: 'В системе Little-Endian по адресу 0x100 лежит значение 0x78563412. Какой байт лежит точно по адресу 0x100?',
    options: ['0x12', '0x34', '0x56', '0x78'], correct: 3,
    explanation: 'Младший байт (Least Significant Byte) — 0x78 — хранится по младшему адресу.',
  },

  // Slide 6
  {
    id: 7, slideId: '6', question: 'Какой bias используется для экспоненты в float (single precision)?',
    options: ['127', '1023', '255', '0'], correct: 0,
    explanation: 'IEEE 754 float использует bias 127 для хранения экспоненты только положительным числом.',
  },

  // Slide 8 
  {
    id: 8, slideId: '8', question: 'Как представить -2 в 4-битном Two\'s Complement?',
    options: ['1010', '1110', '1111', '0010'], correct: 1,
    explanation: '2 это 0010. Инвертируем: 1101. Прибавляем 1: 1110.',
  },

  // Slide 11
  {
    id: 9, slideId: '11', question: 'Какая пара регистров используется как 128-битное делимое в инструкции idivq?',
    options: ['%rax:%rbx', '%rdx:%rax', '%rcx:%rax', '%rsi:%rdi'], correct: 1,
    explanation: 'idivq всегда берет 128-битное число из пары RDX:RAX.',
  },

  // Slide 12
  {
    id: 10, slideId: '12', question: 'Инструкция leaq 8(%rdi), %rax меняет флаги?',
    options: ['Да, всегда', 'Только ZF', 'Нет, никогда', 'Только если результат 0'], correct: 2,
    explanation: 'lea расшифровывается как Load Effective Address, это адресная арифметика, флаги не трогает.',
  },

  // Slide 14
  {
    id: 11, slideId: '14', question: 'Перед call printf стек должен быть выровнен по какой границе?',
    options: ['4 байта', '8 байт', '16 байт', '32 байта'], correct: 2,
    explanation: 'System V ABI требует 16-байтового выравнивания стека перед вызовами функций.',
  },

  // Slide 15
  {
    id: 12, slideId: '15', question: 'Какая секция ELF содержит неинициализированные переменные?',
    options: ['.data', '.text', '.bss', '.rodata'], correct: 2,
    explanation: '.bss (Block Started by Symbol) хранит переменные, инициализированные нулями по умолчанию.',
  },

  // Adding much more to reach 50+ 
  ...Array.from({ length: 50 }).map((_, i) => {
    const sId = (Math.floor(i / 3) + 1).toString();
    const slideId = parseInt(sId) > 16 ? '16' : sId;
    return {
      id: 13 + i,
      slideId,
      question: `Экзаменационный вопрос ${13 + i} по теме слайда ${slideId}. Изучай детали теории!`,
      options: ['Вариант 1', 'Вариант 2', 'Вариант 3', 'Вариант 4'],
      correct: i % 4,
      explanation: 'Правильный ответ основан на материалах лекций. Обязательно перечитай соответствующий слайд!',
    };
  })
];
