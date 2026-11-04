// Fancy Text Generator page copy per locale.

import type { Locale, PageMeta } from "../i18n";
import { serpTitle } from "../serp-title";
import type { TextStyleId } from "../text-styles";

export interface FancyExample {
  label: string;
  input: string;
  styleId: TextStyleId;
  left?: string;
  right?: string;
}

export interface FancyContent {
  meta: PageMeta;
  h1: string;
  intro: string;
  howHeading: string;
  steps: string[];
  examplesHeading: string;
  examples: FancyExample[];
  aboutHeading: string;
  about: string[];
  dedicatedHeading: string;
  dedicatedSub: string;
  faqHeading: string;
  faq: { q: string; a: string }[];
  related: { path: string; title: string; description: string }[];
  fullGenerator: string;
}

export const fancyContent: Record<Locale, FancyContent> = {
  en: {
    meta: {
      title: serpTitle("Fancy Text Generator", "en", "Live Preview"),
      description:
        "Live font generator for cursive, gothic, bold, bubble, and 30 Unicode styles. The preview updates as you type. Copy and paste into bios, names, and chats.",
    },
    h1: "Fancy Text Generator",
    intro:
      "A live font generator for plain text. Type anything and the styles update as you type — cursive, gothic, bold, bubble and more. Copy, then paste into a bio, profile, or chat.",
    howHeading: "How to use it",
    steps: [
      "Type or paste your text into the box above — results update as you type.",
      "Scroll or filter the list and find the style you like.",
      "Hit Copy and paste the result anywhere you want.",
    ],
    examplesHeading: "Examples",
    examples: [
      { label: "Instagram bio", input: "Your Name", styleId: "script", left: "✦ ", right: " ✦" },
      { label: "Game tag", input: "Alex", styleId: "fraktur", left: "꧁༒", right: "༒꧂" },
      { label: "Discord nickname", input: "river", styleId: "smallCaps", right: " ✧" },
      { label: "Aesthetic caption", input: "soft launch", styleId: "fullwidth" },
    ],
    aboutHeading: "How does this work?",
    about: [
      "This tool maps your letters to lookalike characters from other parts of the Unicode standard — mathematical bold, script, fraktur, enclosed alphanumerics and more. The result is real text, not formatting, so you can paste it almost anywhere plain text is accepted: Instagram and TikTok bios, Discord names, messages, and many games.",
      "Every style covers a different range. Styles marked “partial” skip characters that Unicode has no styled form for, and accented letters, emoji and other scripts always stay as you typed them. Bold cursive keeps every letter in one alphabet; lighter cursive swaps e, g, and o for a different cut.",
    ],
    dedicatedHeading: "Dedicated style generators",
    dedicatedSub:
      "Want just one look? Each style has its own page with a focused converter and style-specific tips.",
    faqHeading: "FAQ",
    faq: [
      {
        q: "Is this a font?",
        a: "No. The results are Unicode characters that happen to look like a styled font. That is what makes them copyable — the styling travels with the text when you paste it, which regular fonts cannot do.",
      },
      {
        q: "Why do some characters show as boxes or question marks?",
        a: "That means the app or device you pasted into is missing a font for those characters. The text itself is correct — try a different style, or test where you plan to use it before committing.",
      },
      {
        q: "Which characters can be converted?",
        a: "English letters A–Z convert in every style, and digits convert in most styles. Anything else — accented letters, Chinese, emoji — is kept as it is so nothing gets lost.",
      },
      {
        q: "Why did part of my text stay the same?",
        a: "Not every character has a styled Unicode equivalent. Characters without one are passed through unchanged instead of breaking the whole conversion.",
      },
    ],
    related: [
      {
        path: "/gaming-name-generator/",
        title: "Gaming Name Generator",
        description: "Decorate a nickname with symbols, borders and styles.",
      },
      {
        path: "/symbols/",
        title: "Symbols & Decorators",
        description: "Find hearts, stars, wings and more to copy in one click.",
      },
    ],
    fullGenerator: "Open the full Fancy Text Generator →",
  },
  es: {
    meta: {
      title: serpTitle("Generador de letras bonitas", "es", "30 estilos"),
      description:
        "Convierte tu texto en cursiva, gótica, negrita, burbuja y 30 estilos Unicode. Copia y pega el resultado en tu bio, nombre o chat. Gratis, sin instalar fuentes.",
    },
    h1: "Generador de letras bonitas",
    intro:
      "Escribe cualquier texto y conviértelo al instante en letras Unicode con estilo — cursiva, gótica, negrita, burbuja y más. Copia y pega en tu bio, perfil o chat.",
    howHeading: "Cómo usarlo",
    steps: [
      "Escribe o pega tu texto en el cuadro de arriba — los resultados se actualizan mientras escribes.",
      "Recorre o filtra la lista y encuentra el estilo que te guste.",
      "Toca Copiar y pega el resultado donde quieras.",
    ],
    examplesHeading: "Ejemplos",
    examples: [
      { label: "Bio de Instagram", input: "Tu Nombre", styleId: "script", left: "✦ ", right: " ✦" },
      { label: "Tag de juego", input: "Alex", styleId: "fraktur", left: "꧁༒", right: "༒꧂" },
      { label: "Apodo de Discord", input: "río", styleId: "smallCaps", right: " ✧" },
      { label: "Caption aesthetic", input: "modo avión", styleId: "fullwidth" },
    ],
    aboutHeading: "¿Cómo funciona?",
    about: [
      "Esta herramienta cambia tus letras por caracteres similares de otras partes del estándar Unicode — negrita matemática, script, fraktur, caracteres encerrados y más. El resultado es texto de verdad, no formato, así que puedes pegarlo en casi cualquier sitio que acepte texto plano: bios de Instagram y TikTok, nombres de Discord, mensajes y muchos juegos.",
      "Cada estilo cubre un rango distinto. Los estilos marcados como “parcial” se saltan los caracteres que no tienen forma en Unicode, y las letras con tilde, los emoji y otros alfabetos siempre quedan como los escribiste. La cursiva negrita mantiene cada letra en un solo alfabeto; la cursiva fina cambia e, g y o por otro trazo.",
    ],
    dedicatedHeading: "Generadores por estilo",
    dedicatedSub:
      "¿Quieres un solo look? Cada estilo tiene su propia página con conversor dedicado y consejos específicos.",
    faqHeading: "Preguntas frecuentes",
    faq: [
      {
        q: "¿Esto es una fuente?",
        a: "No. Los resultados son caracteres Unicode que parecen una fuente con estilo. Eso es lo que los hace copiables — el estilo viaja con el texto al pegar, algo que las fuentes normales no pueden hacer.",
      },
      {
        q: "¿Por qué algunos caracteres se ven como cuadritos o signos?",
        a: "Significa que la app o el dispositivo donde pegaste no tiene fuente para esos caracteres. El texto está bien — prueba otro estilo o prueba antes en donde lo vayas a usar.",
      },
      {
        q: "¿Qué caracteres se pueden convertir?",
        a: "Las letras A–Z se convierten en todos los estilos, y los dígitos en la mayoría. Todo lo demás — tildes, chino, emoji — se queda tal cual para que no se pierda nada.",
      },
      {
        q: "¿Por qué parte de mi texto quedó igual?",
        a: "No todos los caracteres tienen equivalente con estilo en Unicode. Los que no lo tienen pasan sin cambios en vez de romper toda la conversión.",
      },
    ],
    related: [
      {
        path: "/gaming-name-generator/",
        title: "Generador de nombres para juegos",
        description: "Decora un apodo con símbolos, marcos y estilos.",
      },
      {
        path: "/symbols/",
        title: "Símbolos y decoración",
        description: "Encuentra corazones, estrellas, alas y más para copiar en un toque.",
      },
    ],
    fullGenerator: "Abrir el generador completo →",
  },
  "pt-br": {
    meta: {
      title: serpTitle("Gerador de letras bonitas", "pt-br", "30 estilos"),
      description:
        "Transforme seu texto em cursiva, gótica, negrito, bolha e 30 estilos Unicode. Copie e cole na bio, no nome ou no chat. Grátis, sem instalar fontes.",
    },
    h1: "Gerador de letras bonitas",
    intro:
      "Digite qualquer texto e transforme na hora em letras Unicode estilosas — cursiva, gótica, negrito, bolha e mais. Copie e cole na sua bio, perfil ou chat.",
    howHeading: "Como usar",
    steps: [
      "Digite ou cole seu texto na caixa acima — os resultados atualizam enquanto você digita.",
      "Navegue ou filtre a lista e ache o estilo que você gostar.",
      "Toque em Copiar e cole o resultado onde quiser.",
    ],
    examplesHeading: "Exemplos",
    examples: [
      { label: "Bio do Instagram", input: "Seu Nome", styleId: "script", left: "✦ ", right: " ✦" },
      { label: "Tag de jogo", input: "Alex", styleId: "fraktur", left: "꧁༒", right: "༒꧂" },
      { label: "Apelido do Discord", input: "rio", styleId: "smallCaps", right: " ✧" },
      { label: "Legenda aesthetic", input: "modo avião", styleId: "fullwidth" },
    ],
    aboutHeading: "Como funciona?",
    about: [
      "Esta ferramenta troca suas letras por caracteres parecidos de outras partes do padrão Unicode — negrito matemático, script, fraktur, caracteres delimitados e mais. O resultado é texto de verdade, não formatação, então dá para colar em quase qualquer lugar que aceita texto simples: bios do Instagram e TikTok, nomes do Discord, mensagens e muitos jogos.",
      "Cada estilo cobre uma faixa diferente. Os estilos marcados como “parcial” pulam os caracteres sem forma no Unicode, e letras com acento, emoji e outros alfabetos sempre ficam como você digitou. A cursiva em negrito mantém cada letra num só alfabeto; a cursiva fina troca e, g e o por outro traço.",
    ],
    dedicatedHeading: "Geradores por estilo",
    dedicatedSub:
      "Só quer um visual? Cada estilo tem a própria página com conversor dedicado e dicas específicas.",
    faqHeading: "Perguntas frequentes",
    faq: [
      {
        q: "Isso é uma fonte?",
        a: "Não. Os resultados são caracteres Unicode que parecem uma fonte estilizada. É isso que os torna copiáveis — o estilo viaja com o texto quando você cola, coisa que fontes normais não fazem.",
      },
      {
        q: "Por que alguns caracteres viram quadradinhos ou interrogações?",
        a: "Significa que o app ou aparelho onde você colou não tem fonte para esses caracteres. O texto está certo — tente outro estilo ou teste antes onde você for usar.",
      },
      {
        q: "Quais caracteres podem ser convertidos?",
        a: "As letras A–Z convertem em todos os estilos, e os dígitos na maioria. Todo o resto — acentos, chinês, emoji — fica como está para nada se perder.",
      },
      {
        q: "Por que uma parte do meu texto ficou igual?",
        a: "Nem todo caractere tem equivalente estilizado no Unicode. Os que não têm passam sem mudança em vez de quebrar a conversão inteira.",
      },
    ],
    related: [
      {
        path: "/gaming-name-generator/",
        title: "Gerador de nomes para jogos",
        description: "Decore um apelido com símbolos, molduras e estilos.",
      },
      {
        path: "/symbols/",
        title: "Símbolos e decoração",
        description: "Encontre corações, estrelas, asas e mais para copiar em um toque.",
      },
    ],
    fullGenerator: "Abrir o gerador completo →",
  },
  "zh-cn": {
    meta: {
      title: serpTitle("个性字体生成器", "zh-cn", "30种样式"),
      description:
        "把文字转成花体、哥特、粗体、气泡字等 30 种 Unicode 样式。即时预览，复制粘贴到简介、昵称或聊天，无需安装字体。",
    },
    h1: "个性字体生成器",
    intro:
      "输入任何英文文字，立即变成有个性的 Unicode 字体——花体、哥特、粗体、圆圈字等。点击复制，粘贴到你的简介、资料或聊天里。",
    howHeading: "使用方法",
    steps: [
      "在上方输入或粘贴文字——结果随输入实时更新。",
      "滚动或筛选列表，找到喜欢的样式。",
      "点击复制，把结果粘贴到任何地方。",
    ],
    examplesHeading: "示例",
    examples: [
      { label: "Instagram 简介", input: "Luna", styleId: "script", left: "✦ ", right: " ✦" },
      { label: "游戏标签", input: "Alex", styleId: "fraktur", left: "꧁༒", right: "༒꧂" },
      { label: "Discord 昵称", input: "river", styleId: "smallCaps", right: " ✧" },
      { label: "Aesthetic 文案", input: "soft launch", styleId: "fullwidth" },
    ],
    aboutHeading: "这是什么原理？",
    about: [
      "这个工具把你的字母映射到 Unicode 标准其他区域的形近字符——数学粗体、花体、哥特体、带圈字符等等。结果是真实的文字而非格式，所以几乎可以粘贴到任何接受纯文本的地方：Instagram 和 TikTok 简介、Discord 昵称、消息，以及很多游戏。",
      "每种样式覆盖的范围不同。标有“部分支持”的样式会跳过 Unicode 中没有对应形态的字符；带声调的字母、emoji 和中文等其他文字永远保持原样。粗花体的每个字母都在同一套里；细花体的 e、g、o 会换成另一套字形。",
    ],
    dedicatedHeading: "按风格专页",
    dedicatedSub: "只想要一种效果？每种风格都有独立页面，提供专注的转换器和针对性技巧。",
    faqHeading: "常见问题",
    faq: [
      {
        q: "这是一种字体文件吗？",
        a: "不是。这些结果是恰好看起来像某种字体的 Unicode 字符。这正是它们可复制的原因——样式跟着文字走，普通字体做不到这一点。",
      },
      {
        q: "为什么有些字符显示为方块或问号？",
        a: "说明你粘贴到的应用或设备缺少对应字体。文字本身没有问题——换个样式，或先在你打算使用的地方测试。",
      },
      {
        q: "哪些字符能被转换？",
        a: "英文字母 A–Z 在所有样式中都能转换，数字在大多数样式中也能转换。其他内容——带声调的字母、中文、emoji——一律保留原样，绝不丢失。",
      },
      {
        q: "为什么我的部分文字没有变化？",
        a: "不是每个字符都有带样式的 Unicode 等价物。没有的字符原样保留，以保证整段转换不失败。",
      },
    ],
    related: [
      {
        path: "/gaming-name-generator/",
        title: "游戏昵称生成器",
        description: "用符号、边框和样式装饰一个昵称。",
      },
      {
        path: "/symbols/",
        title: "特殊符号大全",
        description: "找到爱心、星星、翅膀等符号，一键复制。",
      },
    ],
    fullGenerator: "打开完整的个性字体生成器 →",
  },
  id: {
    meta: {
      title: serpTitle("Generator Huruf Keren", "id", "30 gaya"),
      description:
        "Ubah teks jadi cursive, gothic, tebal, gelembung, dan 30 gaya Unicode. Salin tempel ke bio, nama, atau chat. Gratis di browser, tanpa memasang font.",
    },
    h1: "Generator Huruf Keren",
    intro:
      "Ketik teks apa pun dan ubah seketika menjadi huruf Unicode keren — cursive, gothic, tebal, lingkaran, dan lainnya. Salin, lalu tempel ke bio, profil, atau chat.",
    howHeading: "Cara pakai",
    steps: [
      "Ketik atau tempel teksmu di kotak atas — hasilnya berubah saat kamu mengetik.",
      "Gulir atau saring daftarnya dan temukan gaya yang kamu suka.",
      "Ketuk Salin dan tempel hasilnya ke mana pun kamu mau.",
    ],
    examplesHeading: "Contoh",
    examples: [
      { label: "Bio Instagram", input: "Nama Kamu", styleId: "script", left: "✦ ", right: " ✦" },
      { label: "Tag game", input: "Alex", styleId: "fraktur", left: "꧁༒", right: "༒꧂" },
      { label: "Nama Discord", input: "river", styleId: "smallCaps", right: " ✧" },
      { label: "Caption aesthetic", input: "soft launch", styleId: "fullwidth" },
    ],
    aboutHeading: "Bagaimana ini bekerja?",
    about: [
      "Alat ini memetakan hurufmu ke karakter kemiripan dari bagian lain standar Unicode — tebal matematis, script, fraktur, karakter berlingkar, dan lainnya. Hasilnya teks sungguhan, bukan format, jadi bisa ditempel hampir di mana pun teks biasa diterima: bio Instagram dan TikTok, nama Discord, pesan, dan banyak game.",
      "Setiap gaya mencakup rentang berbeda. Gaya berlabel “sebagian” melewatkan karakter yang tidak punya bentuk di Unicode, dan huruf beraksen, emoji, serta aksara lain selalu tetap seperti yang kamu ketik. Cursive tebal menahan setiap huruf dalam satu alfabet; cursive tipis menukar e, g, dan o dengan potongan lain.",
    ],
    dedicatedHeading: "Generator per gaya",
    dedicatedSub: "Hanya ingin satu tampilan? Setiap gaya punya halaman sendiri dengan konverter khusus dan tips spesifik.",
    faqHeading: "FAQ",
    faq: [
      {
        q: "Apakah ini sebuah font?",
        a: "Bukan. Hasilnya adalah karakter Unicode yang kebetulan tampak seperti font bergaya. Itulah yang membuatnya bisa disalin — gayanya ikut pindah saat teks ditempel, hal yang tak bisa dilakukan font biasa.",
      },
      {
        q: "Kenapa beberapa karakter tampil sebagai kotak atau tanda tanya?",
        a: "Itu berarti aplikasi atau perangkat tempat kamu menempel tidak punya font untuk karakter tersebut. Teksnya benar — coba gaya lain, atau uji dulu di tempat kamu akan memakainya.",
      },
      {
        q: "Karakter apa saja yang bisa dikonversi?",
        a: "Huruf A–Z terkonversi di semua gaya, dan angka di sebagian besar gaya. Selain itu — huruf beraksen, Mandarin, emoji — tetap apa adanya agar tidak ada yang hilang.",
      },
      {
        q: "Kenapa sebagian teksku tidak berubah?",
        a: "Tidak setiap karakter punya padanan bergaya di Unicode. Karakter tanpa padanan dibiarkan apa adanya supaya seluruh konversi tidak gagal.",
      },
    ],
    related: [
      {
        path: "/gaming-name-generator/",
        title: "Generator Nama Game",
        description: "Hias nama dengan simbol, bingkai, dan gaya.",
      },
      {
        path: "/symbols/",
        title: "Simbol & Dekorasi",
        description: "Temukan hati, bintang, sayap, dan lainnya untuk disalin sekali ketuk.",
      },
    ],
    fullGenerator: "Buka Generator Huruf Keren lengkap →",
  },
};
