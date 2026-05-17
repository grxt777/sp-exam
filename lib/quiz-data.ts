export interface Question {
  id: number;
  slideId: string;
  question: { ru: string; en: string };
  options: { ru: string[]; en: string[] };
  correct: number;
  explanation: { ru: string; en: string };
}

export const quizQuestions: Question[] = [
  // Slide 1: Introduction to Computer System
  {
    id: 1, slideId: '1', 
    question: { ru: 'Из каких двух основных частей состоит процессор (CPU)?', en: 'What are the two main parts of a CPU?' },
    options: {
      ru: ['ALU и RAM', 'Datapath и Control Unit', 'I/O и Buses', 'Registers и SSD'],
      en: ['ALU and RAM', 'Datapath and Control Unit', 'I/O and Buses', 'Registers and SSD']
    }, 
    correct: 1,
    explanation: {
      ru: 'Согласно Slide 11 (Intro), CPU состоит из Datapath (исполнение) и Control (управление).',
      en: 'According to Slide 11 (Intro), the CPU consists of the Datapath (execution) and the Control Unit (management).'
    },
  },
  {
    id: 2, slideId: '1', 
    question: { ru: 'Какова основная функция системной шины (Bus)?', en: 'What is the primary function of a System Bus?' },
    options: {
      ru: ['Хранение данных', 'Связь между CPU, памятью и I/O', 'Охлаждение процессора', 'Выполнение инструкций'],
      en: ['Data storage', 'Communication between CPU, memory, and I/O', 'Cooling the processor', 'Executing instructions']
    }, 
    correct: 1,
    explanation: {
      ru: 'Шины — это коммуникационные пути, соединяющие основные компоненты системы.',
      en: 'Buses are communication pathways that connect the major components of the system.'
    },
  },
  {
    id: 3, slideId: '2', 
    question: { ru: 'Какой из этих компонентов ОС отвечает за то, какой процесс получит доступ к процессору и на какое время?', en: 'Which OS component decides which process gets CPU access and for how long?' },
    options: {
      ru: ['Memory Management', 'Processor Management (Scheduling)', 'Device Management', 'File Management'],
      en: ['Memory Management', 'Processor Management (Scheduling)', 'Device Management', 'File Management']
    }, 
    correct: 1,
    explanation: {
      ru: 'Процессорный менеджмент (планировщик) распределяет время CPU между процессами (Slide 7 в Intro_OS).',
      en: 'Processor management (the scheduler) allocates CPU time among processes (Slide 7 in Intro_OS).'
    },
  },
  {
    id: 4, slideId: '2', 
    question: { ru: 'Что такое Device Driver?', en: 'What is a Device Driver?' },
    options: {
      ru: ['Тип оперативной памяти', 'Ядро системы', 'Специальное ПО, выступающее транслятором между ОС и "железом"', 'Часть файловой системы'],
      en: ['A type of RAM', 'The OS kernel', 'Special software acting as a translator between OS and hardware', 'A part of the file system']
    }, 
    correct: 2,
    explanation: {
      ru: 'Драйвер устройства переводит команды ОС в команды, понятные конкретному оборудованию.',
      en: 'A device driver translates OS commands into commands understood by a specific hardware piece.'
    },
  },
  {
    id: 5, slideId: '3', 
    question: { ru: 'Что такое системный вызов (System Call)?', en: 'What is a System Call?' },
    options: {
      ru: ['Ошибка программы', 'Запрос программы к ядру ОС на выполнение действия', 'Тип прерывания от мышки', 'Команда компилятора'],
      en: ['A program error', 'A request from a program to the OS kernel to perform an action', 'A mouse interrupt type', 'A compiler command']
    }, 
    correct: 1,
    explanation: {
      ru: 'Syscall — это мост между пользовательским кодом и ядром ОС.',
      en: 'A syscall is the bridge between user code and the OS kernel.'
    },
  },
  {
    id: 6, slideId: '3', 
    question: { ru: 'Какое утверждение о процессах верно?', en: 'Which statement about processes is true?' },
    options: {
      ru: ['Процесс — это то же самое, что и программа на диске', 'Процесс — это запущенный экземпляр программы в памяти', 'Один процесс может использовать только одно ядро', 'Процессы не могут создавать другие процессы'],
      en: ['A process is the same as a program on disk', 'A process is a running instance of a program in memory', 'One process can only use one core', 'Processes cannot create other processes']
    }, 
    correct: 1,
    explanation: {
      ru: 'Программа — это файл на диске, а процесс — "живой" объект в памяти (Slide 3 в ECF_Processes).',
      en: 'A program is a disk file, while a process is a "live" object in memory (Slide 3 in ECF_Processes).'
    },
  },
  {
    id: 7, slideId: '4', 
    question: { ru: 'Что обеспечивает абстракция Virtual Memory для каждого процесса?', en: 'What does the Virtual Memory abstraction provide for each process?' },
    options: {
      ru: ['Прямой доступ к диску', 'Иллюзию наличия собственного непрерывного адресного пространства', 'Увеличение скорости CPU', 'Автоматический бэкап данных'],
      en: ['Direct disk access', 'The illusion of having its own continuous address space', 'Increased CPU speed', 'Automatic data backup']
    }, 
    correct: 1,
    explanation: {
      ru: 'Виртуальная память заставляет процесс верить, что у него есть своя личная память от 0x0 до 0xFFF... (Slide 4 ECF_Processes).',
      en: 'Virtual memory makes a process believe it has its own private memory from 0x0 to 0xFFF... (Slide 4 ECF_Processes).'
    },
  },
  {
    id: 8, slideId: '5', 
    question: { ru: 'В каком состоянии находится процесс, который готов к выполнению, но ждет своей очереди от планировщика?', en: 'In which state is a process that is ready to run but waiting for its turn from the scheduler?' },
    options: {
      ru: ['New', 'Running', 'Ready', 'Waiting'],
      en: ['New', 'Running', 'Ready', 'Waiting']
    }, 
    correct: 2,
    explanation: {
      ru: 'Ready — процесс в очереди на выполнение (Slide 5 ECF_Processes).',
      en: 'Ready — the process is in the queue for execution (Slide 5 ECF_Processes).'
    },
  },
  {
    id: 9, slideId: '6', 
    question: { ru: 'Что возвращает функция getppid()?', en: 'What does the getppid() function return?' },
    options: {
      ru: ['PID текущего процесса', 'PID родительского процесса', 'Номер ядра CPU', 'Ничего'],
      en: ['Current process PID', 'Parent process PID', 'CPU core number', 'Nothing']
    }, 
    correct: 1,
    explanation: {
      ru: 'getppid (get Parent PID) возвращает ID родителя.',
      en: 'getppid (get Parent PID) returns the ID of the parent.'
    },
  },
  {
    id: 10, slideId: '7', 
    question: { ru: 'Какой из этих ресурсов НЕ копируется при вызове fork()?', en: 'Which of these resources is NOT copied during a fork() call?' },
    options: {
      ru: ['Стек', 'Глобальные переменные', 'PID текущего процесса (он меняется)', 'Файловые дескрипторы'],
      en: ['Stack', 'Global variables', 'Current PID (it changes)', 'File descriptors']
    }, 
    correct: 2,
    explanation: {
      ru: 'При fork ребенок получает копию всего, но у него свой уникальный новый PID.',
      en: 'During fork, the child gets a copy of everything, but it has its own unique new PID.'
    },
  },
  {
    id: 11, slideId: '7', 
    question: { ru: 'Что возвращает fork() в РОДИТЕЛЬСКОМ процессе в случае успеха?', en: 'What does fork() return in the PARENT process on success?' },
    options: {
      ru: ['0', 'PID ребенка', '-1', 'Ничего'],
      en: ['0', 'Child PID', '-1', 'Nothing']
    }, 
    correct: 1,
    explanation: {
      ru: 'Родитель получает PID созданного ребенка, а ребенок получает 0 (Slide 7 ECF_Processes).',
      en: 'The parent receives the PID of the created child, while the child receives 0 (Slide 7 ECF_Processes).'
    },
  },
  {
    id: 12, slideId: '9', 
    question: { ru: 'Сколько раз напечатается "hello", если выполнить 3 вызова fork() подряд перед printf?', en: 'How many times will "hello" be printed if you call fork() 3 times before a printf?' },
    options: {
      ru: ['3', '6', '8', '9'],
      en: ['3', '6', '8', '9']
    }, 
    correct: 2,
    explanation: {
      ru: 'n вызовов fork создают 2^n процессов. 2^3 = 8 (Slide 9 ECF_Processes).',
      en: 'n fork calls create 2^n processes. 2^3 = 8 (Slide 9 ECF_Processes).'
    },
  },
  {
    id: 13, slideId: '11', 
    question: { ru: 'Куда сохраняется результат 128-битного произведения при использовании имал (imulq операнд)?', en: 'Where is the result of a 128-bit product stored when using imulq with one operand?' },
    options: {
      ru: ['%rax:%rbx', '%rdx:%rax', '%rsi:%rdi', '%rdx:%rbx'],
      en: ['%rax:%rbx', '%rdx:%rax', '%rsi:%rdi', '%rdx:%rbx']
    }, 
    correct: 1,
    explanation: {
      ru: 'Результат идет в пару RDX (старшие 64 бита) и RAX (младшие 64 бита).',
      en: 'The result goes into the RDX (high 64 bits) and RAX (low 64 bits) pair.'
    },
  },
  {
    id: 14, slideId: '11', 
    question: { ru: 'Какая инструкция расширяет знак из %eax в %edx для 32-битного деления?', en: 'Which instruction sign-extends %eax into %edx for 32-bit division?' },
    options: {
      ru: ['cqto', 'cltd', 'movl', 'xorl'],
      en: ['cqto', 'cltd', 'movl', 'xorl']
    }, 
    correct: 1,
    explanation: {
      ru: 'cltd (Convert Long to Double-long) используется для 32-битных регистров. cqto — для 64-битных (Slide 2/3 Special_Arith).',
      en: 'cltd (Convert Long to Double-long) is used for 32-bit registers. cqto is used for 64-bit (Slide 2/3 Special_Arith).'
    },
  },
  {
    id: 15, slideId: '11', 
    question: { ru: 'Для чего нужна инструкция adcq?', en: 'What is the purpose of the adcq instruction?' },
    options: {
      ru: ['Обычное сложение', 'Сложение с учетом флага переноса (Carry Flag)', 'Сравнение чисел', 'Вычитание'],
      en: ['Normal addition', 'Addition including the Carry Flag', 'Comparing numbers', 'Subtraction']
    }, 
    correct: 1,
    explanation: {
      ru: 'ADC (Add with Carry) используется для сложения чисел больше 64 бит.',
      en: 'ADC (Add with Carry) is used for adding numbers larger than 64 bits.'
    },
  },
  {
    id: 16, slideId: '12', 
    question: { ru: 'Набор команд x86-64 относится к какой архитектуре?', en: 'The x86-64 instruction set belongs to which architecture?' },
    options: {
      ru: ['RISC', 'CISC', 'ARM', 'VLIW'],
      en: ['RISC', 'CISC', 'ARM', 'VLIW']
    }, 
    correct: 1,
    explanation: {
      ru: 'x86 — это классическая CISC архитектура (Complex Instruction Set Computer) с переменной длиной команд.',
      en: 'x86 is a classic CISC (Complex Instruction Set Computer) architecture with variable-length instructions.'
    },
  },
  {
    id: 17, slideId: '12', 
    question: { ru: 'Инструкция cmpq %rsi, %rdi устанавливает флаги на основе чего?', en: 'The cmpq %rsi, %rdi instruction sets flags based on what?' },
    options: {
      ru: ['rdi + rsi', 'rdi - rsi', 'rdi & rsi', 'rsi - rdi'],
      en: ['rdi + rsi', 'rdi - rsi', 'rdi & rsi', 'rsi - rdi']
    }, 
    correct: 1,
    explanation: {
      ru: 'cmpq b, a вычисляет a - b (Slide 6 Control_Struct).',
      en: 'cmpq b, a calculates a - b (Slide 6 Control_Struct).'
    },
  },
  {
    id: 18, slideId: '12', 
    question: { ru: 'Какой флаг устанавливается в 1, если результат операции равен 0?', en: 'Which flag is set to 1 if the operation result is 0?' },
    options: {
      ru: ['SF', 'CF', 'OF', 'ZF'],
      en: ['SF', 'CF', 'OF', 'ZF']
    }, 
    correct: 3,
    explanation: {
      ru: 'ZF (Zero Flag) = 1 если результат 0.',
      en: 'ZF (Zero Flag) = 1 if the result is 0.'
    },
  },
  {
    id: 19, slideId: '12', 
    question: { ru: 'Каков номер системного вызова write в Linux x86-64?', en: 'What is the system call number for write in Linux x86-64?' },
    options: {
      ru: ['0', '1', '2', '60'],
      en: ['0', '1', '2', '60']
    }, 
    correct: 1,
    explanation: {
      ru: '0 — read, 1 — write, 60 — exit (Slide 16 Control_Struct).',
      en: '0 — read, 1 — write, 60 — exit (Slide 16 Control_Struct).'
    },
  },
  {
    id: 20, slideId: '12', 
    question: { ru: 'Что делает инструкция movzbq %al, %rax?', en: 'What does the movzbq %al, %rax instruction do?' },
    options: {
      ru: ['Копирует %al в %rax без изменений', 'Заполняет %rax нулями, кроме младшего байта', 'Копирует %rax в %al', 'Знаково расширяет %al'],
      en: ['Copy %al to %rax unchanged', 'Fill %rax with zeros except for the low byte', 'Copy %rax to %al', 'Sign-extend %al']
    }, 
    correct: 1,
    explanation: {
      ru: 'Zero-extend: копирует байт в младшую часть и обнуляет старшие 7 байт.',
      en: 'Zero-extend: copies a byte to the low part and zeroes out the upper 7 bytes.'
    },
  },
  {
    id: 21, slideId: '13', 
    question: { ru: 'Преимущество Jump Tables перед набором if-else при реализации switch?', en: 'Advantage of Jump Tables over if-else for switch implementation?' },
    options: {
      ru: ['Меньше памяти', 'Выполнение за O(1) независимо от количества case', 'Лучшая читаемость кода', 'Поддержка дробных чисел'],
      en: ['Less memory', 'Execution in O(1) regardless of number of cases', 'Better readability', 'Support for floating point']
    }, 
    correct: 1,
    explanation: {
      ru: 'Прыжок в таблицу — это одна операция независимо от числа веток (Slide 44 Branches).',
      en: 'A jump table is a single operation regardless of the number of branches (Slide 44 Branches).'
    },
  },
  {
    id: 22, slideId: '13', 
    question: { ru: 'Что такое "Fall through" в контексте switch / ассемблера?', en: 'What is "Fall through" in switch/assembly context?' },
    options: {
      ru: ['Ошибка сегментации', 'Отсутствие jmp в конце блока кода case, из-за чего выполнение переходит в следующий case', 'Выход из программы', 'Прыжок на метку default'],
      en: ['Segmentation fault', 'Missing jmp at the end of a case block, causing execution to proceed to the next case', 'Exiting the program', 'Jumping to the default label']
    }, 
    correct: 1,
    explanation: {
      ru: 'Если нет break (или jmp в ASM), процессор просто идет к следующей инструкции другого кейса.',
      en: 'If there is no break (or jmp in ASM), the processor just proceeds to the next instruction of another case.'
    },
  },
  {
    id: 23, slideId: '13', 
    question: { ru: 'Какая стратегия компиляции `while` цикла используется по умолчанию в GCC без оптимизаций (-O0)?', en: 'Default GCC strategy for translating `while` loops without optimizations (-O0)?' },
    options: {
      ru: ['Guarded-do', 'Jump-to-middle', 'Loop unrolling', 'Recursion'],
      en: ['Guarded-do', 'Jump-to-middle', 'Loop unrolling', 'Recursion']
    }, 
    correct: 1,
    explanation: {
      ru: 'Jump-to-middle: сначала безусловный прыжок к тесту в конце, потом условный прыжок в начало (Slide 30 Branches).',
      en: 'Jump-to-middle: first an unconditional jump to the test at the end, then a conditional jump to the start (Slide 30 Branches).'
    },
  },
  {
    id: 24, slideId: '14', 
    question: { ru: 'В каком регистре возвращается целое число из функции по соглашению System V ABI?', en: 'Which register returns an integer from a function in System V ABI?' },
    options: {
      ru: ['%rbx', '%rdi', '%rax', '%rdx'],
      en: ['%rbx', '%rdi', '%rax', '%rdx']
    }, 
    correct: 2,
    explanation: {
      ru: '%rax — стандартный регистр для возвращаемого значения.',
      en: '%rax is the standard register for return values.'
    },
  },
  {
    id: 25, slideId: '14', 
    question: { ru: 'Сколько аргументов передается через регистры в x86-64 Linux?', en: 'How many arguments are passed via registers in x86-64 Linux?' },
    options: {
      ru: ['4', '6', '8', 'Все на стеке'],
      en: ['4', '6', '8', 'All on stack']
    }, 
    correct: 1,
    explanation: {
      ru: 'Первые 6 аргументов: RDI, RSI, RDX, RCX, R8, R9.',
      en: 'The first 6 arguments: RDI, RSI, RDX, RCX, R8, R9.'
    },
  },
  {
    id: 26, slideId: '14', 
    question: { ru: 'Если функция использует регистр %r12, что она ДОЛЖНА сделать?', en: 'If a function uses the %r12 register, what MUST it do?' },
    options: {
      ru: ['Ничего, это caller-saved', 'Сохранить его на стеке в начале и восстановить в конце (callee-saved)', 'Обнулить его', 'Использовать его только для float'],
      en: ['Nothing, it is caller-saved', 'Save it on stack at the start and restore at the end (callee-saved)', 'Zero it out', 'Use it only for float']
    }, 
    correct: 1,
    explanation: {
      ru: '%r12 относится к callee-saved (Slide 45 Procedures).',
      en: '%r12 belongs to callee-saved (Slide 45 Procedures).'
    },
  },
  {
    id: 27, slideId: '14', 
    question: { ru: 'Стек в x86-64 растет:', en: 'The stack in x86-64 grows:' },
    options: {
      ru: ['Вверх (к большим адресам)', 'Вниз (к меньшим адресам)', 'Не растет', 'Зависит от компилятора'],
      en: ['Up (towards higher addresses)', 'Down (towards lower addresses)', 'Does not grow', 'Depends on compiler']
    }, 
    correct: 1,
    explanation: {
      ru: 'Инструкция push уменьшает %rsp (Slide 19 Processes).',
      en: 'The push instruction decrements %rsp (Slide 19 Processes).'
    },
  },
  {
    id: 28, slideId: '14', 
    question: { ru: 'Для чего используется регистр %rbp в процедурах?', en: 'What is the %rbp register used for in procedures?' },
    options: {
      ru: ['Счетчик цикла', 'Frame Pointer (базовый указатель фрейма)', 'Возврат значения', 'Первый аргумент'],
      en: ['Loop counter', 'Frame Pointer (base pointer)', 'Return value', 'First argument']
    }, 
    correct: 1,
    explanation: {
      ru: 'Хотя он опционален сегодня, традиционно он указывает на начало текущего фрейма.',
      en: 'Though optional today, it traditionally points to the start of the current frame.'
    },
  },
  {
    id: 29, slideId: '15', 
    question: { ru: 'Что делает статический линковщик (Static Linker)?', en: 'What does a Static Linker do?' },
    options: {
      ru: ['Компилирует C в ASM', 'Объединяет объектные файлы в исполняемый файл', 'Запускает программу', 'Выделяет память во время работы'],
      en: ['Compiles C to ASM', 'Combines object files into an executable file', 'Runs the program', 'Allocates memory during runtime']
    }, 
    correct: 1,
    explanation: {
      ru: 'Линковщик (ld) "сшивает" .o файлы в один бинарник (Slide 10 Linking).',
      en: 'The linker (ld) "sews" .o files into a single binary (Slide 10 Linking).'
    },
  },
  {
    id: 30, slideId: '15', 
    question: { ru: 'Какая секция объектного файла содержит информацию для патчинга адресов?', en: 'Which section of an object file contains information for patching addresses?' },
    options: {
      ru: ['.symtab', '.rel.text', '.rodata', '.bss'],
      en: ['.symtab', '.rel.text', '.rodata', '.bss']
    }, 
    correct: 1,
    explanation: {
      ru: 'Секции .rel.* хранят записи релокации — инструкции линковщику, что нужно заменить на реальные адреса.',
      en: '.rel.* sections store relocation records — instructions for the linker on what needs to be replaced with real addresses.'
    },
  },
  {
    id: 31, slideId: '15', 
    question: { ru: 'Разница между сильным (Strong) и слабым (Weak) символом?', en: 'Difference between a Strong and a Weak symbol?' },
    options: {
      ru: ['Сильный — это функция, слабый — переменная', 'Сильный — инициализированный, слабый — неинициализированный', 'Сильный — в .text, слабый — в .data', 'Нет разницы'],
      en: ['Strong is a function, Weak is a variable', 'Strong is initialized, Weak is uninitialized', 'Strong is in .text, Weak is in .data', 'No difference']
    }, 
    correct: 1,
    explanation: {
      ru: 'Функции и переменные с начальным значением — Strong. Прототипы и переменные без значения — Weak (Slide 15 Linking).',
      en: 'Functions and variables with an initial value are Strong. Prototypes and variables without a value are Weak (Slide 15 Linking).'
    },
  },
  {
    id: 32, slideId: '15', 
    question: { ru: 'ELF — это расшифровывается как:', en: 'ELF stands for:' },
    options: {
      ru: ['Extended Link File', 'Executable and Linkable Format', 'Electronic Linux File', 'Easy Logic Format'],
      en: ['Extended Link File', 'Executable and Linkable Format', 'Electronic Linux File', 'Easy Logic Format']
    }, 
    correct: 1,
    explanation: {
      ru: 'Стандартный формат бинарных файлов в Linux (Slide 15 Linking).',
      en: 'Standard format for binary files in Linux (Slide 15 Linking).'
    },
  },
  {
    id: 33, slideId: '16', 
    question: { ru: 'Что такое зомби-процесс (Zombie)?', en: 'What is a Zombie process?' },
    options: {
      ru: ['Процесс, который нельзя убить', 'Процесс, который завершился, но родитель еще не вызвал wait/waitpid', 'Процесс без ресурсов', 'Фоновый процесс'],
      en: ['An unkillable process', 'A finished process where the parent hasn\'t called wait/waitpid yet', 'A process without resources', 'A background process']
    }, 
    correct: 1,
    explanation: {
      ru: 'Zombie занимает запись в таблице процессов ОС, хранит код завершения для родителя (Slide 13 ECF).',
      en: 'A Zombie occupies an entry in the OS process table, holding the exit code for the parent (Slide 13 ECF).'
    },
  },
  {
    id: 34, slideId: '16', 
    question: { ru: 'Что такое "пожинание" (Reaping) процесса?', en: 'What is process "Reaping"?' },
    options: {
      ru: ['Запуск процесса', 'Очистка ресурсов завершенного процесса через wait/waitpid', 'Приостановка процесса', 'Удаление файла с диска'],
      en: ['Starting a process', 'Cleaning resources of a finished process via wait/waitpid', 'Pausing a process', 'Deleting a file from disk']
    }, 
    correct: 1,
    explanation: {
      ru: 'Reaping удаляет зомби и освобождает его PID (Slide 13 ECF).',
      en: 'Reaping removes zombies and frees their PID (Slide 13 ECF).'
    },
  },
  {
    id: 35, slideId: '16', 
    question: { ru: 'Если родитель умер раньше ребенка, ребенок становится:', en: 'If the parent dies before the child, the child becomes:' },
    options: {
      ru: ['Зомби', 'Сиротой (Orphan) и усыновляется процессом init', 'Терминированным', 'Главным процессом'],
      en: ['A zombie', 'An orphan adopted by the init process', 'Terminated', 'The main process']
    }, 
    correct: 1,
    explanation: {
      ru: 'Сирот усыновляет процесс с PID 1 (init или systemd) и автоматически "пожинает" их (Slide 13 ECF).',
      en: 'Orphans are adopted by the process with PID 1 (init or systemd) and automatically reaped (Slide 13 ECF).'
    },
  },
  {
    id: 36, slideId: '5', 
    question: { ru: 'Что такое "Endianness"?', en: 'What is "Endianness"?' },
    options: {
      ru: ['Тип процессора', 'Порядок байтов при хранении многобайтовых данных в памяти', 'Скорость памяти', 'Размер бита'],
      en: ['A CPU type', 'The order of bytes when storing multi-byte data in memory', 'Memory speed', 'Bit size']
    }, 
    correct: 1,
    explanation: {
      ru: 'Определяет, какой байт (старший или младший) идет первым.',
      en: 'Determines which byte (Most or Least Significant) comes first.'
    },
  },
  {
    id: 37, slideId: '8', 
    question: { ru: 'Вес самого старшего бита в знаковом 4-битном числе (Two\'s Complement)?', en: 'Weight of the MSB in a signed 4-bit Two\'s Complement number?' },
    options: {
      ru: ['8', '7', '-8', '-7'],
      en: ['8', '7', '-8', '-7']
    }, 
    correct: 2,
    explanation: {
      ru: 'В Two\'s Complement старший бит имеет вес -2^(w-1). Для 4-х бит это -2^3 = -8.',
      en: 'In Two\'s Complement, the MSB has weight -2^(w-1). For 4 bits, it is -2^3 = -8.'
    },
  },
  {
    id: 38, slideId: '4', 
    question: { ru: 'Почему в x86-64 используются 64-битные адреса?', en: 'Why does x86-64 use 64-bit addresses?' },
    options: {
      ru: ['Чтобы процессор грелся меньше', 'Чтобы адресовать до 16 эксабайт памяти', 'Потому что так красивее', 'Зависит от монитора'],
      en: ['To keep CPU cooler', 'To address up to 16 exabytes of memory', 'Because it looks better', 'Depends on monitor']
    }, 
    correct: 1,
    explanation: {
      ru: '64 бита позволяют выйти за лимит в 4ГБ (2^32).',
      en: '64 bits allow bypassing the 4GB (2^32) limit.'
    },
  },
  {
    id: 39, slideId: '11', 
    question: { ru: 'Результат idivq хранится в каких регистрах?', en: 'Where is the result of idivq stored?' },
    options: {
      ru: ['rax = частное, rdx = остаток', 'rdx = частное, rax = остаток', 'rax = результат, flags = остаток', 'Все на стеке'],
      en: ['rax = quotient, rdx = remainder', 'rdx = quotient, rax = remainder', 'rax = result, flags = remainder', 'All on stack']
    }, 
    correct: 0,
    explanation: {
      ru: 'Частное в RAX, остаток в RDX.',
      en: 'Quotient in RAX, remainder in RDX.'
    },
  },
  {
    id: 40, slideId: '9', 
    question: { ru: 'Что происходит при беззнаковом переполнении (Unsigned Overflow) в C?', en: 'What happens in Unsigned Overflow in C?' },
    options: {
      ru: ['Программа падает', 'Выбрасывается исключение', 'Результат вычисляется по модулю 2^w', 'Значение обнуляется'],
      en: ['Program crashes', 'Exception is thrown', 'Result is calculated modulo 2^w', 'Value becomes zero']
    }, 
    correct: 2,
    explanation: {
      ru: 'В C/C++ арифметика беззнаковых чисел гарантированно выполняется по модулю.',
      en: 'In C/C++, unsigned arithmetic is guaranteed to wrap around (modulo).'
    },
  },
  {
    id: 41, slideId: '12', 
    question: { ru: 'Прыжок `jg` (Jump Greater) используется для каких чисел?', en: 'When is `jg` (Jump Greater) used?' },
    options: {
      ru: ['Беззнаковых', 'Знаковых', 'Для любых', 'Только для float'],
      en: ['Unsigned', 'Signed', 'Any', 'Only float']
    }, 
    correct: 1,
    explanation: {
      ru: 'jg/jl/jge/jle — знаковые условия. ja/jb — беззнаковые (Above/Below).',
      en: 'jg/jl/jge/jle are signed conditions. ja/jb are unsigned (Above/Below).'
    },
  },
  {
    id: 42, slideId: '14', 
    question: { ru: 'Какая инструкция используется для выхода из функции?', en: 'Which instruction is used to return from a function?' },
    options: {
      ru: ['jmp back', 'exit', 'ret', 'pop rip'],
      en: ['jmp back', 'exit', 'ret', 'pop rip']
    }, 
    correct: 2,
    explanation: {
      ru: 'ret выталкивает адрес возврата со стека в %rip.',
      en: 'ret pops the return address from the stack into %rip.'
    },
  },
  {
    id: 43, slideId: '14', 
    question: { ru: 'Что делает инструкция pushq %rax?', en: 'What does `pushq %rax` do?' },
    options: {
      ru: ['RSP = RSP + 8; M[RSP] = RAX', 'RSP = RSP - 8; M[RSP] = RAX', 'M[RSP] = RAX; RSP = RSP + 8', 'Копирует RAX в RBX'],
      en: ['RSP = RSP + 8; M[RSP] = RAX', 'RSP = RSP - 8; M[RSP] = RAX', 'M[RSP] = RAX; RSP = RSP + 8', 'Copy RAX to RBX']
    }, 
    correct: 1,
    explanation: {
      ru: 'Сначала уменьшается указатель стека, потом пишутся данные.',
      en: 'First the stack pointer is decremented, then data is written.'
    },
  },
  {
    id: 44, slideId: '15', 
    question: { ru: 'Где хранятся строковые константы (напр. "Hello world") в ELF?', en: 'Where are string constants (e.g. "Hello world") stored in ELF?' },
    options: {
      ru: ['.text', '.data', '.bss', '.rodata'],
      en: ['.text', '.data', '.bss', '.rodata']
    }, 
    correct: 3,
    explanation: {
      ru: '.rodata = Read Only Data.',
      en: '.rodata = Read Only Data.'
    },
  },
  {
    id: 45, slideId: '16', 
    question: { ru: 'Какой сигнал посылается процессу для его немедленной остановки (не убить, а пауза)?', en: 'Which signal is sent to a process for immediate stop (pause, not kill)?' },
    options: {
      ru: ['SIGKILL', 'SIGTERM', 'SIGSTOP', 'SIGCONT'],
      en: ['SIGKILL', 'SIGTERM', 'SIGSTOP', 'SIGCONT']
    }, 
    correct: 2,
    explanation: {
      ru: 'SIGSTOP ставит на паузу, SIGCONT продолжает.',
      en: 'SIGSTOP pauses the process, SIGCONT continues it.'
    },
  },
  {
    id: 46, slideId: '6', 
    question: { ru: 'IEEE 754: Как представить 0.0?', en: 'IEEE 754: How to represent 0.0?' },
    options: {
      ru: ['Все биты 1', 'Экспонента и мантисса — нули', 'Мантисса 1, экспонента 0', 'Только знак 1'],
      en: ['All bits 1', 'Exponent and mantissa are zeros', 'Mantissa 1, exponent 0', 'Only sign 1']
    }, 
    correct: 1,
    explanation: {
      ru: 'Ноль представлен нулевой экспонентой и мантиссой (знак может быть 0 или 1).',
      en: 'Zero is represented by zero exponent and zero mantissa (sign can be 0 or 1).'
    },
  },
  {
    id: 47, slideId: '13', 
    question: { ru: 'В `switch(x)` при `case` значениях 10, 20, 30 будет ли создан Jump Table?', en: 'Will `switch(x)` with case values 10, 20, 30 create a Jump Table?' },
    options: {
      ru: ['Да, всегда', 'Нет, так как значения разреженные (sparse)', 'Только если есть default', 'Зависит от архитектуры'],
      en: ['Yes, always', 'No, as values are sparse', 'Only if there is a default', 'Depends on architecture']
    }, 
    correct: 1,
    explanation: {
      ru: 'Компилятор использует бинарный поиск или цепочку if для разреженных значений.',
      en: 'The compiler uses binary search or a chain of ifs for sparse values.'
    },
  },
  {
    id: 48, slideId: '3', 
    question: { ru: 'Что такое ISA в контексте CPU?', en: 'What is ISA in CPU context?' },
    options: {
      ru: ['International Silver Academy', 'Instruction Set Architecture', 'Inline Stack Array', 'Internal System Area'],
      en: ['International Silver Academy', 'Instruction Set Architecture', 'Inline Stack Array', 'Internal System Area']
    }, 
    correct: 1,
    explanation: {
      ru: 'Набор команд, понятных процессору.',
      en: 'The set of instructions understood by the processor.'
    },
  },
  {
    id: 49, slideId: '11', 
    question: { ru: 'Чему равно -1 в Two\'s Complement?', en: 'What is -1 in Two\'s Complement?' },
    options: {
      ru: ['100...01', '000...00', '111...11', '011...11'],
      en: ['100...01', '000...00', '111...11', '011...11']
    }, 
    correct: 2,
    explanation: {
      ru: 'Все единицы в машинном представлении - это -1.',
      en: 'All ones in machine representation is -1.'
    },
  },
  {
    id: 50, slideId: '14', 
    question: { ru: 'Сколько байт занимает адрес возврата на стеке в x86-64?', en: 'How many bytes does a return address occupy on the stack in x86-64?' },
    options: {
      ru: ['4', '8', '16', 'Зависит от функции'],
      en: ['4', '8', '16', 'Depends on function']
    }, 
    correct: 1,
    explanation: {
      ru: 'Адреса в 64-бит системе занимают 8 байт.',
      en: 'Addresses in a 64-bit system occupy 8 bytes.'
    },
  }
];
