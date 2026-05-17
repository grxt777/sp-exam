export interface Question {
  id: number;
  slideId: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export const quizQuestions: Question[] = [
  // Slide 1: Introduction to Computer System
  {
    id: 1, slideId: '1', question: 'Из каких двух основных частей состоит процессор (CPU)?',
    options: ['ALU и RAM', 'Datapath и Control Unit', 'I/O и Buses', 'Registers и SSD'], correct: 1,
    explanation: 'Согласно Slide 11 (Intro), CPU состоит из Datapath (исполнение) и Control (управление).',
  },
  {
    id: 2, slideId: '1', question: 'Какова основная функция системной шины (Bus)?',
    options: ['Хранение данных', 'Связь между CPU, памятью и I/O', 'Охлаждение процессора', 'Выполнение инструкций'], correct: 1,
    explanation: 'Шины — это коммуникационные пути, соединяющие основные компоненты системы.',
  },
  {
    id: 3, slideId: '2', question: 'Какой из этих компонентов ОС отвечает за то, какой процесс получит доступ к процессору и на какое время?',
    options: ['Memory Management', 'Processor Management (Scheduling)', 'Device Management', 'File Management'], correct: 1,
    explanation: 'Процессорный менеджмент (планировщик) распределяет время CPU между процессами (Slide 7 в Intro_OS).',
  },
  {
    id: 4, slideId: '2', question: 'Что такое Device Driver?',
    options: ['Тип оперативной памяти', 'Ядро системы', 'Специальное ПО, выступающее транслятором между ОС и "железом"', 'Часть файловой системы'], correct: 2,
    explanation: 'Драйвер устройства переводит команды ОС в команды, понятные конкретному оборудованию.',
  },
  {
    id: 5, slideId: '3', question: 'Что такое системный вызов (System Call)?',
    options: ['Ошибка программы', 'Запрос программы к ядру ОС на выполнение действия', 'Тип прерывания от мышки', 'Команда компилятора'], correct: 1,
    explanation: 'Syscall — это мост между пользовательским кодом и ядром ОС.',
  },
  {
    id: 6, slideId: '3', question: 'Какое утверждение о процессах верно?',
    options: ['Процесс — это то же самое, что и программа на диске', 'Процесс — это запущенный экземпляр программы в памяти', 'Один процесс может использовать только одно ядро', 'Процессы не могут создавать другие процессы'], correct: 1,
    explanation: 'Программа — это файл на диске, а процесс — "живой" объект в памяти (Slide 3 в ECF_Processes).',
  },
  {
    id: 7, slideId: '4', question: 'Что обеспечивает абстракция Virtual Memory для каждого процесса?',
    options: ['Прямой доступ к диску', 'Иллюзию наличия собственного непрерывного адресного пространства', 'Увеличение скорости CPU', 'Автоматический бэкап данных'], correct: 1,
    explanation: 'Виртуальная память заставляет процесс верить, что у него есть своя личная память от 0x0 до 0xFFF... (Slide 4 ECF_Processes).',
  },
  {
    id: 8, slideId: '5', question: 'В каком состоянии находится процесс, который готов к выполнению, но ждет своей очереди от планировщика?',
    options: ['New', 'Running', 'Ready', 'Waiting'], correct: 2,
    explanation: 'Ready — процесс в очереди на выполнение (Slide 5 ECF_Processes).',
  },
  {
    id: 9, slideId: '6', question: 'Что возвращает функция getppid()?',
    options: ['PID текущего процесса', 'PID родительского процесса', 'Номер ядра CPU', 'Ничего'], correct: 1,
    explanation: 'getppid (get Parent PID) возвращает ID родителя.',
  },
  {
    id: 10, slideId: '7', question: 'Какой из этих ресурсов НЕ копируется при вызове fork()?',
    options: ['Стек', 'Глобальные переменные', 'PID текущего процесса (он меняется)', 'Файловые дескрипторы'], correct: 2,
    explanation: 'При fork ребенок получает копию всего, но у него свой уникальный новый PID.',
  },
  {
    id: 11, slideId: '7', question: 'Что возвращает fork() в РОДИТЕЛЬСКОМ процессе в случае успеха?',
    options: ['0', 'PID ребенка', '-1', 'Ничего'], correct: 1,
    explanation: 'Родитель получает PID созданного ребенка, а ребенок получает 0 (Slide 7 ECF_Processes).',
  },
  {
    id: 12, slideId: '9', question: 'Сколько раз напечатается "hello", если выполнить 3 вызова fork() подряд перед printf?',
    options: ['3', '6', '8', '9'], correct: 2,
    explanation: 'n вызовов fork создают 2^n процессов. 2^3 = 8 (Slide 9 ECF_Processes).',
  },
  {
    id: 13, slideId: '11', question: 'Куда сохраняется результат 128-битного произведения при использовании имал (imulq операнд)?',
    options: ['%rax:%rbx', '%rdx:%rax', '%rsi:%rdi', '%rdx:%rbx'], correct: 1,
    explanation: 'Результат идет в пару RDX (старшие 64 бита) и RAX (младшие 64 бита).',
  },
  {
    id: 14, slideId: '11', question: 'Какая инструкция расширяет знак из %eax в %edx для 32-битного деления?',
    options: ['cqto', 'cltd', 'movl', 'xorl'], correct: 1,
    explanation: 'cltd (Convert Long to Double-long) используется для 32-битных регистров. cqto — для 64-битных (Slide 2/3 Special_Arith).',
  },
  {
    id: 15, slideId: '11', question: 'Для чего нужна инструкция adcq?',
    options: ['Обычное сложение', 'Сложение с учетом флага переноса (Carry Flag)', 'Сравнение чисел', 'Вычитание'], correct: 1,
    explanation: 'ADC (Add with Carry) используется для сложения чисел больше 64 бит.',
  },
  {
    id: 16, slideId: '12', question: 'Набор команд x86-64 относится к какой архитектуре?',
    options: ['RISC', 'CISC', 'ARM', 'VLIW'], correct: 1,
    explanation: 'x86 — это классическая CISC архитектура (Complex Instruction Set Computer) с переменной длиной команд.',
  },
  {
    id: 17, slideId: '12', question: 'Инструкция cmpq %rsi, %rdi устанавливает флаги на основе чего?',
    options: ['rdi + rsi', 'rdi - rsi', 'rdi & rsi', 'rsi - rdi'], correct: 1,
    explanation: 'cmpq b, a вычисляет a - b (Slide 6 Control_Struct).',
  },
  {
    id: 18, slideId: '12', question: 'Какой флаг устанавливается в 1, если результат операции равен 0?',
    options: ['SF', 'CF', 'OF', 'ZF'], correct: 2,
    explanation: 'ZF (Zero Flag) = 1 если результат 0.',
  },
  {
    id: 19, slideId: '12', question: 'Каков номер системного вызова write в Linux x86-64?',
    options: ['0', '1', '2', '60'], correct: 1,
    explanation: '0 — read, 1 — write, 60 — exit (Slide 16 Control_Struct).',
  },
  {
    id: 20, slideId: '12', question: 'Что делает инструкция movzbq %al, %rax?',
    options: ['Копирует %al в %rax без изменений', 'Заполняет %rax нулями, кроме младшего байта', 'Копирует %rax в %al', 'Знаково расширяет %al'], correct: 1,
    explanation: 'Zero-extend: копирует байт в младшую часть и обнуляет старшие 7 байт.',
  },
  {
    id: 21, slideId: '13', question: 'Преимущество Jump Tables перед набором if-else при реализации switch?',
    options: ['Меньше памяти', 'Выполнение за O(1) независимо от количества case', 'Лучшая читаемость кода', 'Поддержка дробных чисел'], correct: 1,
    explanation: 'Прыжок в таблицу — это одна операция независимо от числа веток (Slide 44 Branches).',
  },
  {
    id: 22, slideId: '13', question: 'Что такое "Fall through" в контексте switch / ассемблера?',
    options: ['Ошибка сегментации', 'Отсутствие jmp в конце блока кода case, из-за чего выполнение переходит в следующий case', 'Выход из программы', 'Прыжок на метку default'], correct: 1,
    explanation: 'Если нет break (или jmp в ASM), процессор просто идет к следующей инструкции другого кейса.',
  },
  {
    id: 23, slideId: '13', question: 'Какая стратегия компиляции `while` цикла используется по умолчанию в GCC без оптимизаций (-O0)?',
    options: ['Guarded-do', 'Jump-to-middle', 'Loop unrolling', 'Recursion'], correct: 1,
    explanation: 'Jump-to-middle: сначала безусловный прыжок к тесту в конце, потом условный прыжок в начало (Slide 30 Branches).',
  },
  {
    id: 24, slideId: '14', question: 'В каком регистре возвращается целое число из функции по соглашению System V ABI?',
    options: ['%rbx', '%rdi', '%rax', '%rdx'], correct: 2,
    explanation: '%rax — стандартный регистр для возвращаемого значения.',
  },
  {
    id: 25, slideId: '14', question: 'Сколько аргументов передается через регистры в x86-64 Linux?',
    options: ['4', '6', '8', 'Все на стеке'], correct: 1,
    explanation: 'Первые 6 аргументов: RDI, RSI, RDX, RCX, R8, R9.',
  },
  {
    id: 26, slideId: '14', question: 'Если функция использует регистр %r12, что она ДОЛЖНА сделать?',
    options: ['Ничего, это caller-saved', 'Сохранить его на стеке в начале и восстановить в конце (callee-saved)', 'Обнулить его', 'Использовать его только для float'], correct: 1,
    explanation: '%r12 относится к callee-saved (Slide 45 Procedures).',
  },
  {
    id: 27, slideId: '14', question: 'Стек в x86-64 растет:',
    options: ['Вверх (к большим адресам)', 'Вниз (к меньшим адресам)', 'Не растет', 'Зависит от компилятора'], correct: 1,
    explanation: 'Инструкция push уменьшает %rsp (Slide 19 Processes).',
  },
  {
    id: 28, slideId: '14', question: 'Для чего используется регистр %rbp в процедурах?',
    options: ['Счетчик цикла', 'Frame Pointer (базовый указатель фрейма)', 'Возврат значения', 'Первый аргумент'], correct: 1,
    explanation: 'Хотя он опционален сегодня, традиционно он указывает на начало текущего фрейма.',
  },
  {
    id: 29, slideId: '15', question: 'Что делает статический линковщик (Static Linker)?',
    options: ['Компилирует C в ASM', 'Объединяет объектные файлы в исполняемый файл', 'Запускает программу', 'Выделяет память во время работы'], correct: 1,
    explanation: 'Линковщик (ld) "сшивает" .o файлы в один бинарник (Slide 10 Linking).',
  },
  {
    id: 30, slideId: '15', question: 'Какая секция объектного файла содержит информацию для патчинга адресов?',
    options: ['.symtab', '.rel.text', '.rodata', '.bss'], correct: 1,
    explanation: 'Секции .rel.* хранят записи релокации — инструкции линковщику, что нужно заменить на реальные адреса.',
  },
  {
    id: 31, slideId: '15', question: 'Разница между сильным (Strong) и слабым (Weak) символом?',
    options: ['Сильный — это функция, слабый — переменная', 'Сильный — инициализированный, слабый — неинициализированный', 'Сильный — в .text, слабый — в .data', 'Нет разницы'], correct: 1,
    explanation: 'Функции и переменные с начальным значением — Strong. Прототипы и переменные без значения — Weak (Slide 15 Linking).',
  },
  {
    id: 32, slideId: '15', question: 'ELF — это расшифровывается как:',
    options: ['Extended Link File', 'Executable and Linkable Format', 'Electronic Linux File', 'Easy Logic Format'], correct: 1,
    explanation: 'Стандартный формат бинарных файлов в Linux (Slide 15 Linking).',
  },
  {
    id: 33, slideId: '16', question: 'Что такое зомби-процесс (Zombie)?',
    options: ['Процесс, который нельзя убить', 'Процесс, который завершился, но родитель еще не вызвал wait/waitpid', 'Процесс без ресурсов', 'Фоновый процесс'], correct: 1,
    explanation: 'Zombie занимает запись в таблице процессов ОС, хранит код завершения для родителя (Slide 13 ECF).',
  },
  {
    id: 34, slideId: '16', question: 'Что такое "пожинание" (Reaping) процесса?',
    options: ['Запуск процесса', 'Очистка ресурсов завершенного процесса через wait/waitpid', 'Приостановка процесса', 'Удаление файла с диска'], correct: 1,
    explanation: 'Reaping удаляет зомби и освобождает его PID (Slide 13 ECF).',
  },
  {
    id: 35, slideId: '16', question: 'Если родитель умер раньше ребенка, ребенок становится:',
    options: ['Зомби', 'Сиротой (Orphan) и усыновляется процессом init', 'Терминированным', 'Главным процессом'], correct: 1,
    explanation: 'Сирот усыновляет процесс с PID 1 (init или systemd) и автоматически "пожинает" их (Slide 13 ECF).',
  },
  {
    id: 36, slideId: '5', question: 'Что такое "Endianness"?',
    options: ['Тип процессора', 'Порядок байтов при хранении многобайтовых данных в памяти', 'Скорость памяти', 'Размер бита'], correct: 1,
    explanation: 'Определяет, какой байт (старший или младший) идет первым.',
  },
  {
    id: 37, slideId: '8', question: 'Вес самого старшего бита в знаковом 4-битном числе (Two\'s Complement)?',
    options: ['8', '7', '-8', '-7'], correct: 2,
    explanation: 'В Two\'s Complement старший бит имеет вес -2^(w-1). Для 4-х бит это -2^3 = -8.',
  },
  {
    id: 38, slideId: '4', question: 'Почему в x86-64 используются 64-битные адреса?',
    options: ['Чтобы процессор грелся меньше', 'Чтобы адресовать до 16 эксабайт памяти', 'Потому что так красивее', 'Зависит от монитора'], correct: 1,
    explanation: '64 бита позволяют выйти за лимит в 4ГБ (2^32).',
  },
  {
    id: 39, slideId: '11', question: 'Результат idivq хранится в каких регистрах?',
    options: ['rax = частное, rdx = остаток', 'rdx = частное, rax = остаток', 'rax = результат, flags = остаток', 'Все на стеке'], correct: 0,
    explanation: 'Частное в RAX, остаток в RDX.',
  },
  {
    id: 40, slideId: '9', question: 'Что происходит при беззнаковом переполнении (Unsigned Overflow) в C?',
    options: ['Программа падает', 'Выбрасывается исключение', 'Результат вычисляется по модулю 2^w', 'Значение обнуляется'], correct: 2,
    explanation: 'В C/C++ арифметика беззнаковых чисел гарантированно выполняется по модулю.',
  },
  {
    id: 41, slideId: '12', question: 'Прыжок `jg` (Jump Greater) используется для каких чисел?',
    options: ['Беззнаковых', 'Знаковых', 'Для любых', 'Только для float'], correct: 1,
    explanation: 'jg/jl/jge/jle — знаковые условия. ja/jb — беззнаковые (Above/Below).',
  },
  {
    id: 42, slideId: '14', question: 'Какая инструкция используется для выхода из функции?',
    options: ['jmp back', 'exit', 'ret', 'pop rip'], correct: 2,
    explanation: 'ret выталкивает адрес возврата со стека в %rip.',
  },
  {
    id: 43, slideId: '14', question: 'Что делает инструкция pushq %rax?',
    options: ['RSP = RSP + 8; M[RSP] = RAX', 'RSP = RSP - 8; M[RSP] = RAX', 'M[RSP] = RAX; RSP = RSP + 8', 'Копирует RAX в RBX'], correct: 1,
    explanation: 'Сначала уменьшается указатель стека, потом пишутся данные.',
  },
  {
    id: 44, slideId: '15', question: 'Где хранятся строковые константы (напр. "Hello world") в ELF?',
    options: ['.text', '.data', '.bss', '.rodata'], correct: 3,
    explanation: '.rodata = Read Only Data.',
  },
  {
    id: 45, slideId: '16', question: 'Какой сигнал посылается процессу для его немедленной остановки (не убить, а пауза)?',
    options: ['SIGKILL', 'SIGTERM', 'SIGSTOP', 'SIGCONT'], correct: 2,
    explanation: 'SIGSTOP ставит на паузу, SIGCONT продолжает.',
  },
  {
    id: 46, slideId: '6', question: 'IEEE 754: Как представить 0.0?',
    options: ['Все биты 1', 'Экспонента и мантисса — нули', 'Мантисса 1, экспонента 0', 'Только знак 1'], correct: 1,
    explanation: 'Ноль представлен нулевой экспонентой и мантиссой (знак может быть 0 или 1).',
  },
  {
    id: 47, slideId: '13', question: 'В `switch(x)` при `case` значениях 10, 20, 30 будет ли создан Jump Table?',
    options: ['Да, всегда', 'Нет, так как значения разреженные (sparse)', 'Только если есть default', 'Зависит от архитектуры'], correct: 1,
    explanation: 'Компилятор использует бинарный поиск или цепочку if для разреженных значений.',
  },
  {
    id: 48, slideId: '3', question: 'Что такое ISA в контексте CPU?',
    options: ['International Silver Academy', 'Instruction Set Architecture', 'Inline Stack Array', 'Internal System Area'], correct: 1,
    explanation: 'Набор команд, понятных процессору.',
  },
  {
    id: 49, slideId: '11', question: 'Чему равно -1 в Two\'s Complement?',
    options: ['100...01', '000...00', '111...11', '011...11'], correct: 2,
    explanation: 'Все единицы в машинном представлении - это -1.',
  },
  {
    id: 50, slideId: '14', question: 'Сколько байт занимает адрес возврата на стеке в x86-64?',
    options: ['4', '8', '16', 'Зависит от функции'], correct: 1,
    explanation: 'Адреса в 64-бит системе занимают 8 байт.',
  }
];
