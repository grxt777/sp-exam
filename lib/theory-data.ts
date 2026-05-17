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
    id: '11',
    title: 'Special Arithmetic Instructions',
    topics: [
      {
        title: 'Умножение (imulq)',
        content: 'В x86-64 есть две формы умножения. Обычная (2 операнда) обрезает результат до 64 бит. Полная (1 операнд) умножает %rax на источник и кладет результат в пару %rdx:%rax (128 бит).',
        code: 'imulq %rbx, %rax    # rax = rax * rbx (64-bit)\nimulq %rbx           # rdx:rax = rax * rbx (128-bit product)',
      },
      {
        title: 'Деление (idivq)',
        content: 'Деление всегда делит 128-битное число в %rdx:%rax на делитель. Перед делением знаковых чисел используй `cqto` для расширения %rax до %rdx:%rax.',
        code: 'movq $17, %rax\ncqto                 # sign-extend rax into rdx:rax\nidivq %rcx           # rax = quotient, rdx = remainder',
      },
      {
        title: 'ADC и SBB (Carry/Borrow)',
        content: 'Используются для арифметики произвольной точности (multiprecision). Складывают или вычитают с учетом флага переноса (CF).',
        code: '# Add 128-bit numbers (A=rdx:rax, B=rcx:rbx)\naddq %rbx, %rax      # add low parts\nadcq %rcx, %rdx      # add high parts + carry',
      }
    ]
  },
  {
    id: '12',
    title: 'Control Structures',
    topics: [
      {
        title: 'Condition Codes (Флаги)',
        content: 'Регистры состояния, которые меняются после команд. `ZF` (Zero), `SF` (Sign), `CF` (Carry), `OF` (Overflow).',
        table: {
          headers: ['Флаг', 'Название', 'Когда устанавливается'],
          rows: [
            ['ZF', 'Zero Flag', 'Результат равен 0'],
            ['SF', 'Sign Flag', 'Результат отрицательный'],
            ['CF', 'Carry Flag', 'Беззнаковое переполнение'],
            ['OF', 'Overflow Flag', 'Знаковое переполнение'],
          ]
        }
      },
      {
        title: 'CMP и TEST',
        content: '`cmpq src, dst` вычисляет `dst - src` (как sub), но только меняет флаги. `testq src, dst` вычисляет `dst & src` (как and).',
        code: 'cmpq %rbx, %rax    # rax - rbx, set flags\ntestq %rax, %rax   # rax & rax, check if zero',
      },
      {
        title: 'System Calls',
        content: 'Запрос к ОС. В Linux x86-64 номер syscall кладется в %rax, аргументы в %rdi, %rsi, %rdx...',
        table: {
          headers: ['rax', 'Name', 'rdi', 'rsi', 'rdx'],
          rows: [
            ['0', 'read', 'fd', 'buf', 'count'],
            ['1', 'write', 'fd', 'buf', 'count'],
            ['60', 'exit', 'status', '-', '-'],
          ]
        }
      }
    ]
  },
  {
    id: '13',
    title: 'Branches & Jump Tables',
    topics: [
      {
        title: 'Goto Code',
        content: 'Компилятор преобразует `if-else` в переходы `jX`. Запоминай инверсию: `if (a > b)` часто превращается в `cmp + jle` (прыжок если НЕ больше, чтобы пропустить тело).',
      },
      {
        title: 'Conditional Move (cmov)',
        content: 'Современная альтернатива перескокам. Вычисляет оба варианта и выбирает один на основе флагов. Быстрее, так как нет branch misprediction.',
        code: 'cmovle %rdx, %rax   # if flags say "less or equal", move rdx to rax',
      },
      {
        title: 'Jump Tables (Switch)',
        content: 'Для плотных `switch` (case 1, 2, 3...) компилятор делает массив адресов. Прыжок выполняется в O(1).',
        code: 'jmp *.L4(,%rdi,8)   # indirect jump using jump table at label .L4',
      }
    ]
  },
  {
    id: '14',
    title: 'Procedures & Stack',
    topics: [
      {
        title: 'Calling Convention (ABI)',
        content: 'Как передаем аргументы: %rdi, %rsi, %rdx, %rcx, %r8, %r9. Возврат в %rax.',
      },
      {
        title: 'Caller vs Callee Saved',
        content: 'Caller-saved (rax, rcx, rdx...): вызывающий должен сохранить сам. Callee-saved (rbx, rbp, r12-r15): функция ОБЯЗАНА восстановить их перед выходом.',
      },
      {
        title: 'Stack Alignment',
        content: 'Перед вызовом любой функции из библиотеки C (printf, scanf), `%rsp` должен быть кратен 16.',
        code: 'pushq %rbp\nmovq %rsp, %rbp\nandq $-16, %rsp # alignment check',
      }
    ]
  },
  {
    id: '15',
    title: 'Linking',
    topics: [
      {
        title: 'ELF Format',
        content: '.text (код), .data (инициализированные глобалки), .bss (неинициализированные, 0 в памяти), .rodata (константы).',
      },
      {
        title: 'Symbol Resolution',
        content: 'Сильные символы: функции, инициализированные данные. Слабые: неинициализированные. Ошибка, если два сильных с одним именем.',
      },
      {
        title: 'Static vs Dynamic',
        content: 'Static: код библиотеки вшит в .exe (Link time). Dynamic: библиотека (.so) подгружается при запуске (Load time).',
      }
    ]
  },
  {
    id: '16',
    title: 'Processes',
    topics: [
      {
        title: 'fork()',
        content: 'Создает копию процесса. Возвращает 0 в дочернем, PID ребенка в родительском. Память копируется (Copy-on-write).',
        code: 'pid_t pid = fork();\nif (pid == 0) { /* child */ }',
      },
      {
        title: 'Zombies & Reaping',
        content: 'Процесс завершился, но родитель не вызвал `waitpid()`. "Живой труп" занимает место в таблице процессов.',
      },
      {
        title: 'Waitpid',
        content: 'Используется для ожидания завершения ребенка и очистки ресурсов (reaping).',
      }
    ]
  }
];
