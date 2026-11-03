// Blank-space tool copy. Sentences describe this page's controls only.
// Platform acceptance is not stated here: the shared compat note covers testing.

import type { Locale, PageMeta } from "../i18n";
import { siteName } from "../site";
import type { BlankKindId } from "../blank-space";

export interface BlankSpaceContent {
  meta: PageMeta;
  h1: string;
  intro: (styles: number) => string;
  blankLabel: string;
  blanks: Record<BlankKindId, { name: string; note: string }>;
  copyGroupLabel: string;
  copyLabel: (count: number) => string;
  previewCaption: (code: string) => string;
  spaceNote: string;
  fancyHeading: string;
  nameLabel: string;
  namePlaceholder: string;
  gapLabel: string;
  gapNote: string;
  countLabel: (count: number) => string;
  howHeading: string;
  steps: string[];
  aboutHeading: string;
  about: (styles: number) => string[];
  faqHeading: string;
  faq: { q: string; a: string }[];
  related: { path: string; title: string; description: string }[];
}

// Every locale's head already contains the copy-paste keyword, so the title
// is head | brand — no phrase after the dash.
function title(head: string, _locale: Locale): string {
  return `${head} | ${siteName}`;
}

export const blankSpaceContent: Record<Locale, BlankSpaceContent> = {
  en: {
    meta: {
      title: title("Blank Space Copy and Paste", "en"),
      description:
        "Copy a Hangul filler (U+3164), Braille blank (U+2800), or ideographic space (U+3000): one, a line of 20, or a block of 100. Set 0–5 of that blank between fancy Unicode letters.",
    },
    h1: "Blank Space Copy and Paste",
    intro: (styles) =>
      `Pick one blank character and copy it, or place that same blank between letters in any of the ${styles} fancy styles. No sign-up.`,
    blankLabel: "Blank character",
    blanks: {
      hangul: { name: "Hangul filler", note: "U+3164. One character wide, and it draws blank." },
      braille: { name: "Braille blank", note: "U+2800. Also one character wide. Some fonts draw it narrower." },
      ideo: { name: "Ideographic space", note: "U+3000. A fullwidth space, so the gap is wider." },
    },
    copyGroupLabel: "Copy this blank",
    copyLabel: (count) =>
      count === 1 ? "Copy 1" : count === 20 ? "Copy a line (20)" : "Copy a block (100)",
    previewCaption: (code) => `The box holds 20 ${code} characters. The buttons copy 1, 20, or 100.`,
    spaceNote:
      "A keyboard space is U+0020. Chats trim it, and web pages collapse a run of them. These three keep their width.",
    fancyHeading: "Blank between fancy letters",
    nameLabel: "Your name",
    namePlaceholder: "Luna",
    gapLabel: "Blanks between letters",
    gapNote:
      "0 leaves the fancy text unchanged, including spaces you typed. 1–5 removes those spaces and uses the selected blank for every gap.",
    countLabel: (count) => `${count} characters`,
    howHeading: "How to use it",
    steps: [
      "Choose Hangul filler, Braille blank, or ideographic space.",
      "Copy 1, 20, or 100 of that character.",
      "To space out fancy letters, type a name, set the gap from 0 to 5, and copy a style. The count includes the blanks.",
    ],
    aboutHeading: "What gets copied",
    about: (styles) => [
      "Hangul filler is U+3164, Braille blank is U+2800, and ideographic space is U+3000. Each one takes a character position. Hangul filler and Braille blank draw nothing; ideographic space is a wide space.",
      `Fancy letters are the same ${styles} Unicode styles as the fancy text generator. The style is applied first. The blank is then inserted between grapheme clusters, so a strikethrough or glitch mark stays on its letter.`,
      "With the gap at 0, the line matches that style and keeps the spaces you typed. Above 0, those spaces are removed and the selected blank is used for every gap.",
      "People also use these blanks to send a message that looks empty in chat apps. Whether a given app accepts a particular blank is up to that app and is not tested here — copy one and send it to yourself in that app first.",
    ],
    faqHeading: "FAQ",
    faq: [
      {
        q: "Why does the box look empty?",
        a: "These characters draw blank. The border shows where the 20-character line is. The buttons copy the real character, either 1, 20, or 100 of them.",
      },
      {
        q: "What does the number on each style mean?",
        a: "It counts Unicode code points. Bold Luna with 3 blanks between the letters is 13. A strikethrough or glitch mark is its own character, so those rows are longer.",
      },
      {
        q: "Where are zero-width characters?",
        a: "They stay in the invisible category of the symbol library. This page does not insert them: repeating a zero-width character still takes no space, and between letters it can change how marks or emoji display.",
      },
      {
        q: "Can I send a blank message with these?",
        a: "People use them for that in chat apps. Whether WhatsApp, Messenger or any other app accepts a particular blank is up to that app and is not tested here — copy the blank and send it to yourself in that app first.",
      },
    ],
    related: [
      {
        path: "/fancy-text-generator/",
        title: "Fancy Text Generator",
        description: "All 30 styles with no blank inserted, plus favorites and PNG export.",
      },
      {
        path: "/symbols/",
        title: "Symbols",
        description: "Hearts, stars, and the invisible category, including zero-width characters.",
      },
    ],
  },
  es: {
    meta: {
      title: title("Espacio en blanco para copiar y pegar", "es"),
      description:
        "Copia un relleno hangul (U+3164), un espacio braille (U+2800) o un espacio ideográfico (U+3000): uno, una línea de 20 o un bloque de 100. Pon de 0 a 5 de ese blanco entre letras Unicode.",
    },
    h1: "Espacio en blanco para copiar y pegar",
    intro: (styles) =>
      `Elige un carácter en blanco y cópialo, o colócalo entre las letras de cualquiera de los ${styles} estilos. Sin registro.`,
    blankLabel: "Carácter en blanco",
    blanks: {
      hangul: { name: "Relleno hangul", note: "U+3164. Ocupa un carácter y se dibuja en blanco." },
      braille: { name: "Espacio braille", note: "U+2800. También ocupa un carácter. Algunas fuentes lo dibujan más estrecho." },
      ideo: { name: "Espacio ideográfico", note: "U+3000. Un espacio de ancho completo, así que el hueco es más ancho." },
    },
    copyGroupLabel: "Copiar este blanco",
    copyLabel: (count) =>
      count === 1 ? "Copiar 1" : count === 20 ? "Copiar una línea (20)" : "Copiar un bloque (100)",
    previewCaption: (code) => `La caja contiene 20 caracteres ${code}. Los botones copian 1, 20 o 100.`,
    spaceNote:
      "La barra espaciadora escribe U+0020. Los chats lo recortan y las páginas web juntan varios en uno. Estos tres conservan su ancho.",
    fancyHeading: "Blanco entre letras con estilo",
    nameLabel: "Tu nombre",
    namePlaceholder: "Luna",
    gapLabel: "Blancos entre letras",
    gapNote:
      "0 deja el texto con estilo igual, incluidos los espacios que escribiste. 1–5 quita esos espacios y usa el blanco elegido en cada hueco.",
    countLabel: (count) => `${count} caracteres`,
    howHeading: "Cómo usarlo",
    steps: [
      "Elige relleno hangul, espacio braille o espacio ideográfico.",
      "Copia 1, 20 o 100 de ese carácter.",
      "Para separar letras con estilo, escribe un nombre, pon el hueco de 0 a 5 y copia un estilo. La cuenta incluye los blancos.",
    ],
    aboutHeading: "Qué se copia",
    about: (styles) => [
      "El relleno hangul es U+3164, el espacio braille es U+2800 y el espacio ideográfico es U+3000. Cada uno ocupa una posición. El hangul y el braille no dibujan nada; el ideográfico es un espacio ancho.",
      `Las letras usan los mismos ${styles} estilos Unicode que el generador de letras bonitas. Primero se aplica el estilo. Después se inserta el blanco entre grupos de grafemas, así que un tachado o un glitch se queda en su letra.`,
      "Con el hueco en 0, la línea coincide con ese estilo y conserva los espacios que escribiste. Por encima de 0, esos espacios se quitan y cada hueco usa el blanco elegido.",
      "Estos blancos también sirven para enviar un mensaje que parece vacío en apps de chat. Que una app acepte o no un blanco concreto depende de la app y no está probado aquí: copia uno y envíatelo primero a ti.",
    ],
    faqHeading: "Preguntas frecuentes",
    faq: [
      {
        q: "¿Por qué la caja se ve vacía?",
        a: "Estos caracteres se dibujan en blanco. El borde marca la línea de 20. Los botones copian el carácter real: 1, 20 o 100.",
      },
      {
        q: "¿Qué significa el número de cada estilo?",
        a: "Cuenta puntos de código Unicode. Luna en negrita con 3 blancos entre letras son 13. Un tachado o un glitch cuenta como carácter propio, así que esas filas son más largas.",
      },
      {
        q: "¿Dónde están los caracteres de ancho cero?",
        a: "Siguen en la categoría invisible de la biblioteca de símbolos. Esta página no los inserta: repetir un carácter de ancho cero sigue sin ocupar espacio, y entre letras puede cambiar marcas o emojis.",
      },
      {
        q: "¿Puedo enviar un mensaje en blanco con estos caracteres?",
        a: "La gente los usa para eso en apps de chat. Que WhatsApp, Messenger o cualquier otra app acepte un blanco concreto depende de la app y no está probado aquí: copia el blanco y envíatelo primero en esa app.",
      },
    ],
    related: [
      {
        path: "/fancy-text-generator/",
        title: "Generador de letras bonitas",
        description: "Los 30 estilos sin blanco insertado, con favoritos y exportación a PNG.",
      },
      {
        path: "/symbols/",
        title: "Símbolos",
        description: "Corazones, estrellas y la categoría invisible, incluidos los de ancho cero.",
      },
    ],
  },
  "pt-br": {
    meta: {
      title: title("Espaço em branco para copiar e colar", "pt-br"),
      description:
        "Copie um preenchimento hangul (U+3164), um espaço braille (U+2800) ou um espaço ideográfico (U+3000): um, uma linha de 20 ou um bloco de 100. Coloque de 0 a 5 desse espaço entre letras Unicode.",
    },
    h1: "Espaço em branco para copiar e colar",
    intro: (styles) =>
      `Escolha um caractere em branco e copie, ou coloque esse mesmo branco entre as letras de qualquer um dos ${styles} estilos. Sem cadastro.`,
    blankLabel: "Caractere em branco",
    blanks: {
      hangul: { name: "Preenchimento hangul", note: "U+3164. Ocupa um caractere e é desenhado em branco." },
      braille: { name: "Espaço braille", note: "U+2800. Também ocupa um caractere. Algumas fontes desenham mais estreito." },
      ideo: { name: "Espaço ideográfico", note: "U+3000. Um espaço de largura cheia, então o vão fica maior." },
    },
    copyGroupLabel: "Copiar este branco",
    copyLabel: (count) =>
      count === 1 ? "Copiar 1" : count === 20 ? "Copiar uma linha (20)" : "Copiar um bloco (100)",
    previewCaption: (code) => `A caixa tem 20 caracteres ${code}. Os botões copiam 1, 20 ou 100.`,
    spaceNote:
      "A barra de espaço escreve U+0020. Os chats cortam esse caractere, e as páginas juntam vários em um. Estes três mantêm a largura.",
    fancyHeading: "Branco entre letras estilizadas",
    nameLabel: "Seu nome",
    namePlaceholder: "Luna",
    gapLabel: "Brancos entre letras",
    gapNote:
      "0 deixa o texto estilizado igual, inclusive os espaços que você digitou. 1–5 remove esses espaços e usa o branco escolhido em cada vão.",
    countLabel: (count) => `${count} caracteres`,
    howHeading: "Como usar",
    steps: [
      "Escolha preenchimento hangul, espaço braille ou espaço ideográfico.",
      "Copie 1, 20 ou 100 desse caractere.",
      "Para espaçar letras estilizadas, digite um nome, defina o vão de 0 a 5 e copie um estilo. A contagem inclui os brancos.",
    ],
    aboutHeading: "O que é copiado",
    about: (styles) => [
      "O preenchimento hangul é U+3164, o espaço braille é U+2800 e o espaço ideográfico é U+3000. Cada um ocupa uma posição. Hangul e braille não desenham nada; o ideográfico é um espaço largo.",
      `As letras usam os mesmos ${styles} estilos Unicode do gerador de letras bonitas. O estilo é aplicado primeiro. O branco entra depois, entre grupos de grafemas, então um riscado ou um glitch fica na letra.`,
      "Com o vão em 0, a linha coincide com esse estilo e mantém os espaços digitados. Acima de 0, esses espaços saem e cada vão usa o branco escolhido.",
      "Esses brancos também servem para enviar uma mensagem que parece vazia em apps de conversa. Se um app aceita ou não um branco específico depende do app e não foi testado aqui: copie um e envie primeiro para você.",
    ],
    faqHeading: "Perguntas frequentes",
    faq: [
      {
        q: "Por que a caixa parece vazia?",
        a: "Esses caracteres são desenhados em branco. A borda marca a linha de 20. Os botões copiam o caractere real: 1, 20 ou 100.",
      },
      {
        q: "O que significa o número em cada estilo?",
        a: "Conta pontos de código Unicode. Luna em negrito com 3 brancos entre as letras dá 13. Um riscado ou um glitch conta como caractere próprio, então essas linhas ficam mais longas.",
      },
      {
        q: "Onde ficam os caracteres de largura zero?",
        a: "Continuam na categoria invisível da biblioteca de símbolos. Esta página não os insere: repetir um caractere de largura zero continua sem ocupar espaço, e entre letras pode mudar marcas ou emoji.",
      },
      {
        q: "Posso enviar uma mensagem em branco com esses caracteres?",
        a: "As pessoas usam para isso em apps de conversa. Se o WhatsApp, o Messenger ou outro app aceita um branco específico depende do app e não foi testado aqui: copie o branco e envie primeiro para você nesse app.",
      },
    ],
    related: [
      {
        path: "/fancy-text-generator/",
        title: "Gerador de letras bonitas",
        description: "Os 30 estilos sem branco inserido, com favoritos e exportação em PNG.",
      },
      {
        path: "/symbols/",
        title: "Símbolos",
        description: "Corações, estrelas e a categoria invisível, inclusive os de largura zero.",
      },
    ],
  },
  "zh-cn": {
    meta: {
      title: title("空白复制粘贴", "zh-cn"),
      description:
        "复制韩文填充符（U+3164）、盲文空位（U+2800）或表意空格（U+3000）：1 个、一行 20 个或一段 100 个。也可以把同一种空白以 0–5 个夹进花体字母之间。",
    },
    h1: "空白复制粘贴",
    intro: (styles) =>
      `选一种空白字符复制，或把同一种空白夹进 ${styles} 种花体字母之间。无需注册。`,
    blankLabel: "空白字符",
    blanks: {
      hangul: { name: "韩文填充符", note: "U+3164。占一个字宽，画出来是空的。" },
      braille: { name: "盲文空位", note: "U+2800。也占一个字宽。有的字体把它画得更窄。" },
      ideo: { name: "表意空格", note: "U+3000。全角空格，间隙更宽。" },
    },
    copyGroupLabel: "复制这段空白",
    copyLabel: (count) => (count === 1 ? "复制 1 个" : count === 20 ? "复制一行（20）" : "复制一段（100）"),
    previewCaption: (code) => `框里是 20 个 ${code}。按钮分别复制 1 个、20 个或 100 个。`,
    spaceNote: "键盘空格是 U+0020。聊天软件会裁掉它，网页会把一串空格折成一个。这三种会保住字宽。",
    fancyHeading: "空白夹进花体",
    nameLabel: "你的名字",
    namePlaceholder: "Luna",
    gapLabel: "字母之间的空白数",
    gapNote: "0 表示花体与现在一致，你打的空格也保留。1–5 会去掉这些空格，每个间隙都用所选空白。",
    countLabel: (count) => `${count} 个字符`,
    howHeading: "使用方法",
    steps: [
      "选择韩文填充符、盲文空位或表意空格。",
      "复制 1 个、20 个或 100 个该字符。",
      "要把花体字母隔开，输入名字，把间隙设为 0–5，再复制一种样式。字符数把空白算进去。",
    ],
    aboutHeading: "复制出去的是什么",
    about: (styles) => [
      "韩文填充符是 U+3164，盲文空位是 U+2800，表意空格是 U+3000。三个都占一个字符位置。前两个画出来是空的，表意空格是一个宽空格。",
      `花体字母用的是个性字体生成器里的 ${styles} 种 Unicode 样式。先转换样式，再把空白插在字形簇之间，所以删除线或故障记号留在字母上。`,
      "间隙为 0 时，这一行与该样式一致，并保留你打的空格。大于 0 时，这些空格会被去掉，每个间隙都用所选空白。",
      "也有人用这些空白在聊天应用里发送看起来是空的消息。某个应用是否接受某一种空白，由该应用决定，本站未实测——先复制一个发给自己试试。",
    ],
    faqHeading: "常见问题",
    faq: [
      {
        q: "为什么框看起来是空的？",
        a: "这些字符画出来就是空的。边框标出那一行 20 个字符的位置。按钮复制的是真字符，个数是 1、20 或 100。",
      },
      {
        q: "每种样式旁边的数字是什么？",
        a: "这是结果里的 Unicode 码位数。粗体 Luna 每个间隙 3 个空白，一共 13 个。删除线或故障记号各自再算一个字符，所以那几行更长。",
      },
      {
        q: "零宽字符在哪里？",
        a: "在符号库的隐形字符分类里。这一页不插入它们：零宽字符重复多少次都不占宽度，夹在字母之间还可能改变记号或表情的显示。",
      },
      {
        q: "能用这些字符发空白消息吗？",
        a: "有人这么用。但 WhatsApp、Messenger 或其他应用是否接受某一种空白，由应用决定，本站未实测——复制空白后先在那个应用里发给自己试试。",
      },
    ],
    related: [
      {
        path: "/fancy-text-generator/",
        title: "个性字体生成器",
        description: "30 种样式，不插入空白，可以收藏并导出 PNG。",
      },
      {
        path: "/symbols/",
        title: "特殊符号",
        description: "爱心、星星，以及包含零宽字符的隐形分类。",
      },
    ],
  },
  id: {
    meta: {
      title: title("Spasi kosong copy paste", "id"),
      description:
        "Salin pengisi Hangul (U+3164), spasi Braille (U+2800), atau spasi ideografis (U+3000): satu, sebaris 20, atau satu blok 100. Sisipkan 0–5 spasi yang sama di antara huruf Unicode.",
    },
    h1: "Spasi kosong copy paste",
    intro: (styles) =>
      `Pilih satu karakter kosong dan salin, atau selipkan spasi yang sama di antara huruf pada ${styles} gaya. Tanpa daftar.`,
    blankLabel: "Karakter kosong",
    blanks: {
      hangul: { name: "Pengisi Hangul", note: "U+3164. Selebar satu karakter, dan tampil kosong." },
      braille: { name: "Spasi Braille", note: "U+2800. Juga selebar satu karakter. Beberapa font menggambarnya lebih sempit." },
      ideo: { name: "Spasi ideografis", note: "U+3000. Spasi lebar penuh, jadi jaraknya lebih lebar." },
    },
    copyGroupLabel: "Salin spasi ini",
    copyLabel: (count) =>
      count === 1 ? "Salin 1" : count === 20 ? "Salin sebaris (20)" : "Salin satu blok (100)",
    previewCaption: (code) => `Kotak ini berisi 20 karakter ${code}. Tombol menyalin 1, 20, atau 100.`,
    spaceNote:
      "Spasi keyboard adalah U+0020. Aplikasi chat memotongnya, dan halaman web menggabungkan deretan spasi menjadi satu. Ketiga karakter ini mempertahankan lebarnya.",
    fancyHeading: "Spasi di antara huruf keren",
    nameLabel: "Namamu",
    namePlaceholder: "Luna",
    gapLabel: "Jumlah spasi antar huruf",
    gapNote:
      "0 membiarkan teks keren apa adanya, termasuk spasi yang kamu ketik. 1–5 menghapus spasi itu dan memakai spasi yang dipilih di setiap celah.",
    countLabel: (count) => `${count} karakter`,
    howHeading: "Cara pakai",
    steps: [
      "Pilih pengisi Hangul, spasi Braille, atau spasi ideografis.",
      "Salin 1, 20, atau 100 karakter itu.",
      "Untuk merenggangkan huruf keren, ketik nama, atur celah dari 0 sampai 5, lalu salin satu gaya. Hitungan mencakup spasinya.",
    ],
    aboutHeading: "Yang tersalin",
    about: (styles) => [
      "Pengisi Hangul adalah U+3164, spasi Braille adalah U+2800, dan spasi ideografis adalah U+3000. Masing-masing memakai satu posisi karakter. Hangul dan Braille tidak menggambar apa-apa; spasi ideografis adalah spasi lebar.",
      `Huruf memakai ${styles} gaya Unicode yang sama dengan generator huruf keren. Gaya diterapkan dulu. Spasi disisipkan setelahnya, di antara gugus grafem, jadi coretan atau glitch tetap menempel pada hurufnya.`,
      "Saat celah 0, barisnya sama dengan gaya itu dan spasi yang kamu ketik tetap ada. Di atas 0, spasi itu dihapus dan setiap celah memakai spasi yang dipilih.",
      "Blank ini juga dipakai untuk mengirim pesan yang terlihat kosong di aplikasi chat. Apakah sebuah aplikasi menerima blank tertentu tergantung aplikasinya dan belum diuji di sini — salin satu dan kirim ke dirimu sendiri dulu.",
    ],
    faqHeading: "Pertanyaan umum",
    faq: [
      {
        q: "Mengapa kotaknya terlihat kosong?",
        a: "Karakter ini memang digambar kosong. Garis tepi menandai baris 20 karakter. Tombol menyalin karakter aslinya: 1, 20, atau 100.",
      },
      {
        q: "Apa arti angka di tiap gaya?",
        a: "Itu jumlah titik kode Unicode. Luna tebal dengan 3 spasi di antara huruf menjadi 13. Coretan atau glitch dihitung sebagai karakter sendiri, jadi baris itu lebih panjang.",
      },
      {
        q: "Di mana karakter lebar nol?",
        a: "Tetap di kategori tak terlihat pada pustaka simbol. Halaman ini tidak menyisipkannya: mengulang karakter lebar nol tetap tidak memakan tempat, dan di antara huruf bisa mengubah tanda atau emoji.",
      },
      {
        q: "Bisakah mengirim pesan kosong dengan karakter ini?",
        a: "Banyak yang memakainya untuk itu di aplikasi chat. Apakah WhatsApp, Messenger, atau aplikasi lain menerima blank tertentu tergantung aplikasinya dan belum diuji di sini — salin blanknya dan kirim ke dirimu sendiri dulu di aplikasi itu.",
      },
    ],
    related: [
      {
        path: "/fancy-text-generator/",
        title: "Generator Huruf Keren",
        description: "30 gaya tanpa spasi sisipan, plus favorit dan ekspor PNG.",
      },
      {
        path: "/symbols/",
        title: "Simbol",
        description: "Hati, bintang, dan kategori tak terlihat, termasuk karakter lebar nol.",
      },
    ],
  },
};
