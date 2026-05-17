export interface SlideData {
  id: string;
  title: { ru: string; en: string };
  topics: {
    title: { ru: string; en: string };
    content: { ru: string; en: string };
    code?: string;
    table?: { headers: string[]; rows: string[][] }; // Tables usually contain tech terms, keeping simple for now
  }[];
}

export const slides: SlideData[] = [
  {
    id: '1',
    title: { ru: 'Компоненты компьютерной системы', en: 'Computer System Components' },
    topics: [
      {
        title: { ru: 'Что такое компьютер?', en: 'What is a computer?' },
        content: { ru: 'Это быстрая электронная машина, которая принимает цифровой ввод, обрабатывает его по внутренним инструкциям (программам) и выдает результат.', en: 'It is a fast electronic machine that accepts digital input, processes it according to internal instructions (programs), and produces a result.' },
      },
      {
        title: { ru: 'Основные части', en: 'Core components' },
        content: { ru: 'CPU (процессор), Memory (память), I/O (ввод-вывод) и Interconnects (шины/сети).', en: 'CPU (processor), Memory, I/O (input-output), and Interconnects (buses/networks).' },
        table: {
          headers: ['Компонент / Component', 'Функция / Function'],
          rows: [
            ['CPU', 'Исполняет инструкции (Datapath + Control) / Executes instructions'],
            ['Memory', 'Хранит код и данные / Stores code and data'],
            ['I/O Subsystem', 'Связь с внешним миром / Link with external world'],
            ['Buses', 'Магистрали передачи данных / Data highways'],
          ]
        }
      }
    ]
  },
  {
    id: '2',
    title: { ru: 'Иерархия памяти', en: 'Memory Hierarchy' },
    topics: [
      {
        title: { ru: 'Уровни памяти', en: 'Memory Levels' },
        content: { ru: 'Чем ближе к процессору, тем быстрее, меньше и дороже. Данные копируются между уровнями блоками.', en: 'The closer to the CPU, the faster, smaller, and more expensive it is. Data is copied between levels in blocks.' },
        table: {
          headers: ['Уровень / Level', 'Тип / Type', 'Размер / Size', 'Скорость / Speed'],
          rows: [
            ['L0', 'Registers', 'B - KB', '0.5 ns'],
            ['L1-L2', 'SRAM Cache', 'KB - MB', '1-10 ns'],
            ['L3', 'SRAM Shared', 'MB', '10-30 ns'],
            ['Main Memory', 'DRAM', 'GB', '50-100 ns'],
            ['Local Disk', 'SSD/HDD', 'TB', 'ms / μs'],
          ]
        }
      },
      {
        title: { ru: 'Volatile vs Non-Volatile', en: 'Volatile vs Non-Volatile' },
        content: { ru: 'Энергозависимая память (SRAM, DRAM) теряет данные при выключении. Энергонезависимая (Flash, ROM, Disk) сохраняет.', en: 'Volatile memory (SRAM, DRAM) loses data when powered off. Non-volatile (Flash, ROM, Disk) retains it.' },
      }
    ]
  },
  {
    id: '3',
    title: { ru: 'Взгляд программиста и ISA', en: 'Programmer\'s View & ISA' },
    topics: [
      {
        title: { ru: 'Абстракции', en: 'Abstractions' },
        content: { ru: 'Программист высокого уровня не видит регистры. Программист Assembly работает напрямую с ISA (Instruction Set Architecture).', en: 'High-level programmers don\'t see registers. Assembly programmers work directly with the ISA (Instruction Set Architecture).' },
      },
      {
        title: { ru: 'ISA — это контракт', en: 'ISA is a contract' },
        content: { ru: 'ISA определяет: типы данных, набор инструкций (MOV, ADD...), регистры и модель памяти. Это "алфавит" процессора.', en: 'ISA defines data types, instruction sets (MOV, ADD...), registers, and the memory model. It is the "alphabet" of the processor.' },
      }
    ]
  },
  {
    id: '4',
    title: { ru: 'Основы Binary & Hex', en: 'Binary & Hex Fundamentals' },
    topics: [
      {
        title: { ru: 'Почему бинарный?', en: 'Why binary?' },
        content: { ru: 'Сигналы проще делить на 2 уровня (High/Low). Это защищает от шума. Биты — атомы информации.', en: 'Signals are easier to divide into 2 levels (High/Low). This protects against noise. Bits are the atoms of information.' },
      },
      {
        title: { ru: 'Hexadecimal (Base-16)', en: 'Hexadecimal (Base-16)' },
        content: { ru: 'Компактная запись битов. 1 символ Hex = 4 бита. Обозначается префиксом 0x.', en: 'Compact bit notation. 1 Hex character = 4 bits. Denoted by the 0x prefix.' },
        code: '0xA = 1010 (binary)\n0xFF = 255 (decimal)\n0x10 = 16 (decimal)',
      }
    ]
  },
  {
    id: '5',
    title: { ru: 'Размеры данных и порядок байт', en: 'Data Sizes & Endianness' },
    topics: [
      {
        title: { ru: 'Размеры в x86-64', en: 'Sizes in x86-64' },
        content: { ru: 'Byte (8b), Word (16b), Double Word (32b), Quad Word (64b).', en: 'Byte (8b), Word (16b), Double Word (32b), Quad Word (64b).' },
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
        title: { ru: 'Little-Endian', en: 'Little-Endian' },
        content: { ru: 'x86-64 использует Little-Endian: младший байт числа хранится по меньшему адресу.', en: 'x86-64 uses Little-Endian: the least significant byte is stored at the lowest address.' },
        code: 'Value: 0x12345678\nMemory: [0x78][0x56][0x34][0x12]',
      }
    ]
  },
  {
    id: '6',
    title: { ru: 'Числа с плавающей точкой', en: 'Floating Point (IEEE 754)' },
    topics: [
      {
        title: { ru: 'Fixed vs Floating', en: 'Fixed vs Floating' },
        content: { ru: 'Fixed-point имеет фиксированную точку. Floating-point позволяет точке "плавать", расширяя диапазон.', en: 'Fixed-point has a fixed dot position. Floating-point allows it to "float", extending the range.' },
      },
      {
        title: { ru: 'Формат IEEE 754', en: 'IEEE 754 Format' },
        content: { ru: 'Число = (-1)^S * M * 2^E. Состоит из Sign (знак), Exponent (экспонента) и Fraction (мантисса).', en: 'Value = (-1)^S * M * 2^E. Consists of Sign, Exponent, and Fraction.' },
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
    title: { ru: 'Спец-значения и округление FP', en: 'FP Special Values & Rounding' },
    topics: [
      {
        title: { ru: 'Специальные значения', en: 'Special values' },
        content: { ru: 'Zero (все 0), Infinity (Exp все 1, Frac 0), NaN (Exp все 1, Frac не 0).', en: 'Zero (all 0s), Infinity (Exp all 1s, Frac 0), NaN (Exp all 1s, Frac non-zero).' },
      },
      {
        title: { ru: 'Режимы округления', en: 'Rounding Modes' },
        content: { ru: 'Стандарт: Round-to-even (банковское округление). Помогает избежать статистического смещения.', en: 'Default: Round-to-even (Banker\'s rounding). Helps avoid statistical bias.' },
        code: '1.5 -> 2\n2.5 -> 2\n(To nearest even if midway)',
      }
    ]
  },
  {
    id: '8',
    title: { ru: 'Целые числа и Доп. код', en: 'Integer & 2\'s Complement' },
    topics: [
      {
        title: { ru: 'Two\'s Complement', en: 'Two\'s Complement' },
        content: { ru: 'Стандарт для знаковых чисел. Инвертируем биты и прибавляем 1. MSB имеет знаковый вес.', en: 'Standard for signed numbers. Invert bits and add 1. MSB holds the sign weight.' },
        code: 'Value 5 (8-bit): 0000 0101\nInvert: 1111 1010\nAdd 1: 1111 1011 (-5)',
      },
      {
        title: { ru: 'Диапазон (8-bit)', en: 'Range (8-bit)' },
        content: { ru: 'Unsigned: 0 to 255. Signed: -128 to 127.', en: 'Unsigned: 0 to 255. Signed: -128 to 127.' },
      }
    ]
  },
  {
    id: '9',
    title: { ru: 'Арифметика и Переполнение', en: 'Arithmetic & Overflow' },
    topics: [
      {
        title: { ru: 'Unsigned Overflow', en: 'Unsigned Overflow' },
        content: { ru: 'Происходит при выходе за 2^W. В C результат берется по модулю.', en: 'Occurs when exceeding 2^W. In C, results are taken modulo 2^W.' },
      },
      {
        title: { ru: 'Signed Overflow', en: 'Signed Overflow' },
        content: { ru: 'Происходит, когда (Pos+Pos=Neg) или (Neg+Neg=Pos). Знак становится неверным.', en: 'Occurs when (Pos+Pos=Neg) or (Neg+Neg=Pos). The sign bit becomes invalid.' },
      }
    ]
  },
  {
    id: '10',
    title: { ru: 'Сдвиги и Оптимизации', en: 'Shifts & Strength Reduction' },
    topics: [
      {
        title: { ru: 'Сдвиги', en: 'Shifts' },
        content: { ru: 'SHL (влево) — умножение на 2^k. SHR (логический) — для unsigned. SAR (арифметический) — для signed.', en: 'SHL (left) — multiply by 2^k. SHR (logical) — for unsigned. SAR (arithmetic) — for signed.' },
      },
      {
        title: { ru: 'Округление отрицательных', en: 'Rounding negative' },
        content: { ru: 'Обычный сдвиг вправо округляет к -инф. В C деление округляет к нулю. Нужен байас.', en: 'Right shift rounds towards -inf. In C, division rounds to zero. Bias is needed.' },
        code: 'Formula: (x + (1<<k) - 1) >> k',
      }
    ]
  },
  {
    id: '11',
    title: { ru: 'Специальная арифметика', en: 'Special Arithmetic' },
    topics: [
      {
        title: { ru: 'Умножение imulq', en: 'Multiplication imulq' },
        content: { ru: 'Одна форма урезает до 64 бит. Вторая выдает 128 бит в %rdx:%rax.', en: 'One form truncates to 64 bits. The other produces 128 bits in %rdx:%rax.' },
      },
      {
        title: { ru: 'Деление idivq', en: 'Division idivq' },
        content: { ru: 'Делит %rdx:%rax на операнд. rax = частное, rdx = остаток.', en: 'Divides %rdx:%rax by operand. rax = quotient, rdx = remainder.' },
      }
    ]
  },
  {
    id: '12',
    title: { ru: 'Управляющие структуры', en: 'Control Structures' },
    topics: [
      {
        title: { ru: 'Condition Codes', en: 'Condition Codes' },
        content: { ru: 'ZF (Zero), SF (Sign), CF (Carry), OF (Overflow). Сетятся после арифмет. команд.', en: 'ZF (Zero), SF (Sign), CF (Carry), OF (Overflow). Set after arithmetic ops.' },
      },
      {
        title: { ru: 'CMP vs TEST', en: 'CMP vs TEST' },
        content: { ru: 'CMP = вычитание (только флаги). TEST = логическое И (только флаги).', en: 'CMP = subtraction (flags only). TEST = logical AND (flags only).' },
      }
    ]
  },
  {
    id: '13',
    title: { ru: 'Циклы и Switch', en: 'Loops & Switch' },
    topics: [
      {
        title: { ru: 'Реализация циклов', en: 'Loop implementation' },
        content: { ru: 'while (jump-to-middle или guarded-do). for — это сахар над while.', en: 'while (jump-to-middle or guarded-do). for is syntax sugar over while.' },
      },
      {
        title: { ru: 'Jump Tables', en: 'Jump Tables' },
        content: { ru: 'Для switch с плотными значениями. Прыжок по индексу в массиве. O(1).', en: 'For switch with dense values. Index jump in address array. O(1).' },
      }
    ]
  },
  {
    id: '14',
    title: { ru: 'Процедуры и Стек', en: 'Procedures & Stack' },
    topics: [
      {
        title: { ru: 'ABI и Регистры', en: 'ABI & Registers' },
        content: { ru: 'Аргументы: rdi, rsi, rdx, rcx, r8, r9. Возврат: rax. Выравнивание 16 байт.', en: 'Args: rdi, rsi, rdx, rcx, r8, r9. Return: rax. 16-byte alignment.' },
      },
      {
        title: { ru: 'Caller vs Callee', en: 'Caller vs Callee' },
        content: { ru: 'Caller-saved (rax, rcx...): сохрани сам. Callee-saved (rbx, rbp...): верни чистым.', en: 'Caller-saved: save it yourself. Callee-saved: restore if used.' },
      }
    ]
  },
  {
    id: '15',
    title: { ru: 'Линковка', en: 'Linking' },
    topics: [
      {
        title: { ru: 'Секции ELF', en: 'ELF Sections' },
        content: { ru: '.text (код), .data (инициализ.), .bss (нули/неиниц.), .rodata (константы).', en: '.text (code), .data (init), .bss (uninit/zero), .rodata (constants).' },
      },
      {
        title: { ru: 'Разрешение символов', en: 'Symbol Resolution' },
        content: { ru: 'Сильный (функции, init) vs Слабый (uninit). Сильный побеждает.', en: 'Strong (functions, init data) vs Weak (uninit data). Strong wins.' },
      }
    ]
  },
  {
    id: '16',
    title: { ru: 'Процессы и Сигналы', en: 'ECF & Processes' },
    topics: [
      {
        title: { ru: 'fork()', en: 'fork()' },
        content: { ru: 'Создает процесс-клон. Возвращает 0 в ребенке, PID в родителе.', en: 'Creates a child process copy. Returns 0 in child, PID in parent.' },
      },
      {
        title: { ru: 'Зомби и Сироты', en: 'Zombies & Orphans' },
        content: { ru: 'Zombie: ждет waitpid. Orphan: родитель умер, усыновляется init (PID 1).', en: 'Zombie: waiting for waitpid. Orphan: parent died, adopted by init (PID 1).' },
      }
    ]
  }
];
