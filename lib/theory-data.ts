export interface SlideData {
  id: string;
  title: string;
  topics: {
    title: string;
    content: string;
    code?: string;
    table?: { headers: string[]; rows: string[][] };
  }[];
}

export const slides: SlideData[] = [
  {
    id: '1',
    title: 'Computer System Components',
    topics: [
      {
        title: 'Что такое компьютер?',
        content: 'Это быстрая электронная машина, которая принимает цифровой ввод, обрабатывает его по внутренним инструкциям (программам) и выдает результат.',
      },
      {
        title: 'Основные части',
        content: 'CPU (процессор), Memory (память), I/O (ввод-вывод) и Interconnects (шины/сети).',
        table: {
          headers: ['Компонент', 'Функция'],
          rows: [
            ['CPU', 'Исполняет инструкции (Datapath + Control)'],
            ['Memory', 'Хранит код и данные'],
            ['I/O Subsystem', 'Связь с внешним миром (диск, сеть)'],
            ['Buses', 'Магистрали для передачи адресов и данных'],
          ]
        }
      }
    ]
  },
  {
    id: '2',
    title: 'Memory Hierarchy',
    topics: [
      {
        title: 'Иерархия памяти',
        content: 'Чем ближе к процессору, тем быстрее, меньше и дороже. Данные копируются между уровнями блоками.',
        table: {
          headers: ['Уровень', 'Тип', 'Размер', 'Скорость'],
          rows: [
            ['L0', 'Registers', 'сотни байт', '0.5 ns'],
            ['L1-L2', 'SRAM Cache', 'КБ - МБ', '1-10 ns'],
            ['L3', 'SRAM Shared', 'МБ', '10-30 ns'],
            ['Main Memory', 'DRAM', 'ГБ', '50-100 ns'],
            ['Local Disk', 'SSD/HDD', 'ТБ', 'мс / мкс'],
          ]
        }
      },
      {
        title: 'Volatile vs Non-Volatile',
        content: 'Volatile (SRAM, DRAM) теряет данные при выключении. Non-volatile (Flash, ROM, Disk) сохраняет.',
      }
    ]
  },
  {
    id: '3',
    title: 'Programmer\'s View & ISA',
    topics: [
      {
        title: 'Абстракции',
        content: 'Программист высокого уровня (C, Python) не видит регистры. Программист Assembly работает напрямую с ISA (Instruction Set Architecture).',
      },
      {
        title: 'ISA — это контракт',
        content: 'ISA определяет: типы данных, набор инструкций (MOV, ADD...), регистры и модель памяти. Это "алфавит" процессора.',
      }
    ]
  },
  {
    id: '4',
    title: 'Binary & Hex Fundamentals',
    topics: [
      {
        title: 'Почему бинарный?',
        content: 'Электрические сигналы проще делить на 2 уровня (High/Low), чем на 10. Это защищает от шума и помех. Биты — атомы информации.',
      },
      {
        title: 'Hexadecimal (Base-16)',
        content: 'Компактная запись битов. 1 символ Hex = 4 бита (nibble). Обозначается префиксом 0x.',
        code: '0xA = 1010 (binary)\n0xFF = 255 (decimal)\n0x10 = 16 (decimal)',
      }
    ]
  },
  {
    id: '5',
    title: 'Data Sizes & Endianness',
    topics: [
      {
        title: 'Размеры в x86-64',
        content: 'Byte (8b), Word (16b), Double Word (32b), Quad Word (64b).',
        table: {
          headers: ['C type', 'x86 Name', 'Bytes'],
          rows: [
            ['char', 'Byte', '1'],
            ['short', 'Word', '2'],
            ['int / float', 'Double Word', '4'],
            ['long / double', 'Quad Word', '8'],
            ['pointer', 'Quad Word', '8'],
          ]
        }
      },
      {
        title: 'Little-Endian',
        content: 'x86-64 использует Little-Endian: младший байт числа хранится по меньшему адресу (задом наперед для человека).',
        code: 'Value: 0x12345678\nMemory: [0x78][0x56][0x34][0x12]',
      }
    ]
  },
  {
    id: '6',
    title: 'Floating Point (IEEE 754)',
    topics: [
      {
        title: 'Fixed vs Floating',
        content: 'Fixed-point имеет фиксированное положение точки, что ограничивает диапазон. Floating-point позволяет точке "плавать", используя экспоненту.',
      },
      {
        title: 'Формат IEEE 754',
        content: 'Число = (-1)^S * M * 2^E. Состоит из Sign (знак), Exponent (экспонента с байасом) и Fraction (мантисса).',
        table: {
          headers: ['Precision', 'Bits', 'Sign', 'Exp', 'Frac', 'Bias'],
          rows: [
            ['Single (float)', '32', '1', '8', '23', '127'],
            ['Double (double)', '64', '1', '11', '52', '1023'],
          ]
        }
      }
    ]
  },
  {
    id: '7',
    title: 'FP Special Values & Rounding',
    topics: [
      {
        title: 'Специальные значения',
        content: 'Zero (all 0s), Infinity (Exp all 1s, Frac 0), NaN (Exp all 1s, Frac non-zero).',
      },
      {
        title: 'Rounding Modes',
        content: 'Default: Round-to-even (Banker\'s rounding). Помогает избежать статистического смещения при накоплении ошибок.',
        code: '1.5 -> 2\n2.5 -> 2\n(Округляем к ближайшему четному, если посередине)',
      }
    ]
  },
  {
    id: '8',
    title: 'Integer & 2\'s Complement',
    topics: [
      {
        title: 'Two\'s Complement',
        content: 'Стандарт для знаковых чисел. Инвертируем биты и прибавляем 1. Самый старший бит имеет вес -2^(w-1).',
        code: 'Value 5 (8-bit): 0000 0101\nInvert: 1111 1010\nAdd 1: 1111 1011 (This is -5)',
      },
      {
        title: 'Диапазон (8-bit)',
        content: 'Unsigned: 0 to 255. Signed: -128 to 127. Отрицательных чисел на одно больше из-за нуля.',
      }
    ]
  },
  {
    id: '9',
    title: 'Arithmetic & Overflow',
    topics: [
      {
        title: 'Unsigned Overflow',
        content: 'Происходит, когда результат сложения >= 2^W. В C результат просто урезается (modulo 2^W).',
      },
      {
        title: 'Signed Overflow',
        content: 'Происходит, когда (Pos+Pos=Neg) или (Neg+Neg=Pos). Знак результата становится неверным из-за переноса в знаковый бит.',
      }
    ]
  },
  {
    id: '10',
    title: 'Shifts & Strength Reduction',
    topics: [
      {
        title: 'Сдвиги',
        content: 'SHL/SAL (влево) — умножение на 2^k. SHR (логический вправо) — для unsigned. SAR (арифметический вправо) — сохраняет знак для signed.',
      },
      {
        title: 'Округление при делении',
        content: 'Обычный сдвиг вправо для отрицательных чисел округляет "вниз" (к -inf). В C деление округляет к нулю. Для коррекции добавляется байас.',
        code: 'Formula: (x + (1<<k) - 1) >> k',
      }
    ]
  },
  {
    id: '11',
    title: 'Special Arithmetic',
    topics: [
      {
        title: 'Умножение imulq',
        content: 'Одна форма (2 операнда) урезает до 64 бит. Вторая (1 операнд) выдает 128 бит в %rdx:%rax.',
      },
      {
        title: 'Деление idivq',
        content: 'Делит %rdx:%rax на операнд. rax = частное, rdx = остаток. Требует cqto перед вызовом для знаковых.',
      }
    ]
  },
  {
    id: '12',
    title: 'Control Structures',
    topics: [
      {
        title: 'Condition Codes',
        content: 'ZF (Zero), SF (Sign), CF (Carry), OF (Overflow). Сетятся после add, sub, and, xor... НЕ сетятся после lea и mov.',
      },
      {
        title: 'CMP vs TEST',
        content: 'CMP = вычитание (только флаги). TEST = логическое И (только флаги).',
      }
    ]
  },
  {
    id: '13',
    title: 'Loops & Switch',
    topics: [
      {
        title: 'Реализация циклов',
        content: 'do-while (проверка в конце), while (jump-to-middle или guarded-do). for — это синтаксический сахар над while.',
      },
      {
        title: 'Jump Tables',
        content: 'Используются для switch с плотными значениями. Прыжок по индексу в массиве адресов. O(1) время работы.',
      }
    ]
  },
  {
    id: '14',
    title: 'Procedures & Stack',
    topics: [
      {
        title: 'ABI & Registers',
        content: 'Аргументы: rdi, rsi, rdx, rcx, r8, r9. Возврат: rax. Выравнивание стека 16 байт перед call.',
      },
      {
        title: 'Caller vs Callee',
        content: 'Caller-saved (rax, rcx, rdx...): "используй на свой страх и риск". Callee-saved (rbx, rbp, r12-r15): "верни как было".',
      }
    ]
  },
  {
    id: '15',
    title: 'Linking',
    topics: [
      {
        title: 'ELF Секции',
        content: '.text (код), .data (init), .bss (uninit/zero), .rodata (const/strings).',
      },
      {
        title: 'Symbol Resolution',
        content: 'Strong (functions, data with init) vs Weak (uninit data). Strong+Strong = Error. Strong+Weak = Strong wins.',
      }
    ]
  },
  {
    id: '16',
    title: 'ECF & Processes',
    topics: [
      {
        title: 'fork()',
        content: 'Создает копию процесса. Возвращает 0 в ребенке, PID в родителе.',
      },
      {
        title: 'Zombies & Orphans',
        content: 'Zombie: завершился, но не пожат (waitpid). Orphan: родитель умер, усыновляется процессом init (PID 1).',
      }
    ]
  }
];
