// Homepage copy per locale.

import type { Locale, PageMeta } from "../i18n";
import { serpTitle } from "../serp-title";

export interface HomeContent {
  meta: PageMeta;
  hero: {
    pre: string;
    accent: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    instantPreview: string;
    convertLink: string;
  };
  toolsSection: {
    h2: string;
    sub: string;
    cards: { icon: string; title: string; description: string; cta: string }[];
  };
  popularStyles: { h2: string; seeAll: string };
  popularSymbols: { h2: string; browse: string };
  directory: { h2: string; sub: string };
  how: { h2: string; steps: { title: string; body: string }[] };
  compat: string;
  what: { h2: string; body: string };
  faqHeading: string;
  faq: { q: string; a: string }[];
}

export const homeContent: Record<Locale, HomeContent> = {
  en: {
    meta: {
      title: serpTitle("Fancy Text", "en", "Names & Symbols"),
      description:
        "Free fancy text generator with 30 Unicode styles, gaming nicknames, and symbols like hearts, stars, and wings. Copy and paste into a bio, chat, or profile — no sign-up, no font to install.",
    },
    hero: {
      pre: "Generate and Copy ",
      accent: "Fancy Text",
      sub: "Style A–Z, decorate a name you already have, or copy one symbol. Accented letters, Chinese, and emoji stay as typed.",
      ctaPrimary: "Try Fancy Text",
      ctaSecondary: "Make a Gaming Name",
      instantPreview: "Instant preview",
      convertLink: "Convert your own text →",
    },
    toolsSection: {
      h2: "Three jobs",
      sub: "Each card is a different job. Pick the one that matches what you are pasting.",
      cards: [
        {
          icon: "✦",
          title: "Fancy Text Generator",
          description:
            "For a bio or a chat line. Turns A–Z into a Unicode style. Anything outside Latin letters stays as typed.",
          cta: "Generate text",
        },
        {
          icon: "♛",
          title: "Gaming Name Maker",
          description:
            "For a name you already use. Adds a frame or a letter style, and does not invent a new name. Decorations count toward length limits.",
          cta: "Create a name",
        },
        {
          icon: "#",
          title: "Symbols & Decorators",
          description:
            "When you only need one symbol, such as a heart or a star. It does not restyle the letters of a word.",
          cta: "Explore symbols",
        },
      ],
    },
    popularStyles: {
      h2: "Popular text styles",
      seeAll: "See all 30 styles in the Fancy Text Generator →",
    },
    popularSymbols: { h2: "Popular symbols", browse: "Browse and copy all symbols →" },
    directory: {
      h2: "All generators",
      sub: "Every tool has its own page with a dedicated converter, examples and honest compatibility notes.",
    },
    how: {
      h2: "How it works",
      steps: [
        { title: "1. Type your text", body: "A name, a word, or a short phrase — whatever you want to decorate." },
        { title: "2. Pick a style", body: "Preview every result instantly and choose the vibe that fits you." },
        { title: "3. Copy & paste", body: "One tap copies the result. Paste it into your game, bio, or chat." },
      ],
    },
    compat:
      "These styles use Unicode characters, not installed font files. Display and availability may vary by device, app, game, and platform rules. Please test your result where you plan to use it.",
    what: {
      h2: "What FancyFont is",
      body: "FancyFont is a free tool at fancyfont.tools that turns A–Z letters into stylish Unicode text, decorates gaming nicknames, and offers symbols you can copy. These are characters, and the site does not install font files. Everything runs in your browser, so the text you type is not uploaded. Paste the result into a game, bio, or chat, then check that it displays the way you want.",
    },
    faqHeading: "Frequently asked questions",
    faq: [
      {
        q: "Is FancyFont free?",
        a: "Yes. Every tool on FancyFont is free to use and there is no sign-up. Type, preview, and copy as much as you like.",
      },
      {
        q: "Are these real fonts?",
        a: "No. The results are Unicode characters that look like different fonts. That is exactly why you can copy and paste them into apps that only accept plain text.",
      },
      {
        q: "Will styled text work on Instagram, TikTok, or Discord?",
        a: "Usernames usually keep plain letters. Styled text belongs in a display name, bio, or message. Instagram, TikTok, and Discord each have a page for that platform's fields. Paste it in the app and check.",
      },
      {
        q: "Does FancyFont store what I type?",
        a: "No. Conversions and nickname combinations are generated in your browser. Your text is never sent to or stored on our servers.",
      },
    ],
  },
  es: {
    meta: {
      title: serpTitle("Letras bonitas", "es", "nombres y símbolos"),
      description:
        "Generador gratis de letras bonitas: 30 estilos Unicode, nombres gamer y símbolos (corazones, estrellas, alas). Copia y pega en tu bio, chat o perfil, sin registro ni instalar fuentes.",
    },
    hero: {
      pre: "Genera y copia ",
      accent: "letras bonitas",
      sub: "Dale estilo a A–Z, decora un nombre que ya tienes, o copia un símbolo. Las tildes, el chino y los emoji se quedan igual.",
      ctaPrimary: "Probar letras bonitas",
      ctaSecondary: "Crear un nombre gamer",
      instantPreview: "Vista previa",
      convertLink: "Convertir tu propio texto →",
    },
    toolsSection: {
      h2: "Tres trabajos",
      sub: "Cada tarjeta es un trabajo distinto. Elige el que coincide con lo que vas a pegar.",
      cards: [
        {
          icon: "✦",
          title: "Generador de letras bonitas",
          description:
            "Para una bio o un chat. Convierte A–Z en un estilo Unicode. Lo que no sea letra latina se queda igual.",
          cta: "Generar texto",
        },
        {
          icon: "♛",
          title: "Creador de nombres gamer",
          description:
            "Para un nombre que ya usas. Añade un marco o un estilo, y no inventa otro nombre. La decoración cuenta en el límite de caracteres.",
          cta: "Crear un nombre",
        },
        {
          icon: "#",
          title: "Símbolos y decoración",
          description:
            "Cuando solo necesitas un símbolo, como un corazón o una estrella. No cambia las letras de una palabra.",
          cta: "Explorar símbolos",
        },
      ],
    },
    popularStyles: {
      h2: "Estilos de texto populares",
      seeAll: "Ver los 30 estilos en el Generador de letras bonitas →",
    },
    popularSymbols: { h2: "Símbolos populares", browse: "Ver y copiar todos los símbolos →" },
    directory: {
      h2: "Todos los generadores",
      sub: "Cada herramienta tiene su propia página con conversor dedicado, ejemplos y notas honestas de compatibilidad.",
    },
    how: {
      h2: "Cómo funciona",
      steps: [
        { title: "1. Escribe tu texto", body: "Un nombre, una palabra o una frase corta — lo que quieras decorar." },
        { title: "2. Elige un estilo", body: "Previsualiza todos los resultados al instante y quédate con el que va contigo." },
        { title: "3. Copia y pega", body: "Un toque copia el resultado. Pégalo en tu juego, bio o chat." },
      ],
    },
    compat:
      "Estos estilos usan caracteres Unicode, no archivos de fuentes instaladas. La visualización y disponibilidad varían según el dispositivo, la app, el juego y las reglas de cada plataforma. Prueba tu resultado donde lo vayas a usar.",
    what: {
      h2: "Qué es FancyFont",
      body: "FancyFont es una herramienta gratuita en fancyfont.tools que convierte letras A–Z en texto Unicode con estilo, decora nombres para juegos y ofrece símbolos para copiar. Son caracteres, y el sitio no instala archivos de fuente. Todo ocurre en tu navegador, así que el texto que escribes no se sube. Pégalo en un juego, una bio o un chat y comprueba que se vea como quieres.",
    },
    faqHeading: "Preguntas frecuentes",
    faq: [
      {
        q: "¿FancyFont es gratis?",
        a: "Sí. Todas las herramientas de FancyFont son gratis y no piden registro. Escribe, previsualiza y copia todo lo que quieras.",
      },
      {
        q: "¿Estas letras son fuentes de verdad?",
        a: "No. Los resultados son caracteres Unicode que parecen fuentes distintas. Justo por eso puedes pegarlos en apps que solo aceptan texto plano.",
      },
      {
        q: "¿El texto con estilo funciona en Instagram, TikTok o Discord?",
        a: "El usuario suele quedarse en letras normales. El texto con estilo va en el nombre visible, la bio o el mensaje. Instagram, TikTok y Discord tienen cada uno su página con los campos de esa plataforma. Pégalo en la app y compruébalo.",
      },
      {
        q: "¿FancyFont guarda lo que escribo?",
        a: "No. Las conversiones y combinaciones de apodos se generan en tu navegador. Tu texto nunca se envía ni se guarda en nuestros servidores.",
      },
    ],
  },
  "pt-br": {
    meta: {
      title: serpTitle("Letras bonitas", "pt-br", "nomes e símbolos"),
      description:
        "Gerador grátis de letras bonitas: 30 estilos Unicode, nomes de jogo e símbolos (corações, estrelas, asas). Copie e cole na bio, no chat ou no perfil, sem cadastro e sem instalar fontes.",
    },
    hero: {
      pre: "Gere e copie ",
      accent: "letras bonitas",
      sub: "Estilize A–Z, decore um nome que você já tem, ou copie um símbolo. Acentos, chinês e emoji ficam como você digitou.",
      ctaPrimary: "Testar letras bonitas",
      ctaSecondary: "Criar um nome de jogo",
      instantPreview: "Prévia instantânea",
      convertLink: "Converter o seu texto →",
    },
    toolsSection: {
      h2: "Três tarefas",
      sub: "Cada cartão é uma tarefa diferente. Escolha a que combina com o que você vai colar.",
      cards: [
        {
          icon: "✦",
          title: "Gerador de letras bonitas",
          description:
            "Para uma bio ou um chat. Transforma A–Z em um estilo Unicode. O que não for letra latina fica igual.",
          cta: "Gerar texto",
        },
        {
          icon: "♛",
          title: "Criador de nomes de jogo",
          description:
            "Para um nome que você já usa. Acrescenta uma moldura ou um estilo, e não inventa outro nome. A decoração entra no limite de caracteres.",
          cta: "Criar um nome",
        },
        {
          icon: "#",
          title: "Símbolos e decoração",
          description:
            "Quando você só precisa de um símbolo, como um coração ou uma estrela. Não muda as letras de uma palavra.",
          cta: "Explorar símbolos",
        },
      ],
    },
    popularStyles: {
      h2: "Estilos de texto populares",
      seeAll: "Ver os 30 estilos no Gerador de letras bonitas →",
    },
    popularSymbols: { h2: "Símbolos populares", browse: "Ver e copiar todos os símbolos →" },
    directory: {
      h2: "Todos os geradores",
      sub: "Cada ferramenta tem sua própria página com conversor dedicado, exemplos e notas honestas de compatibilidade.",
    },
    how: {
      h2: "Como funciona",
      steps: [
        { title: "1. Digite seu texto", body: "Um nome, uma palavra ou uma frase curta — o que você quiser decorar." },
        { title: "2. Escolha um estilo", body: "Veja a prévia de todos os resultados na hora e fique com a vibe que é a sua cara." },
        { title: "3. Copie e cole", body: "Um toque copia o resultado. Cole no seu jogo, bio ou chat." },
      ],
    },
    compat:
      "Estes estilos usam caracteres Unicode, não arquivos de fontes instaladas. A exibição e a disponibilidade variam conforme o aparelho, o app, o jogo e as regras da plataforma. Teste seu resultado onde você for usar.",
    what: {
      h2: "O que é o FancyFont",
      body: "FancyFont é uma ferramenta gratuita em fancyfont.tools que transforma letras de A a Z em texto Unicode estilizado, decora nomes de jogos e oferece símbolos para copiar. São caracteres, e o site não instala arquivos de fonte. Tudo roda no seu navegador, então o texto que você digita não é enviado. Cole o resultado no jogo, na bio ou no chat e confira se a aparência ficou como você queria.",
    },
    faqHeading: "Perguntas frequentes",
    faq: [
      {
        q: "O FancyFont é grátis?",
        a: "Sim. Todas as ferramentas do FancyFont são grátis e não pedem cadastro. Digite, veja a prévia e copie à vontade.",
      },
      {
        q: "Essas letras são fontes de verdade?",
        a: "Não. Os resultados são caracteres Unicode que parecem fontes diferentes. É justamente por isso que dá para colar em apps que só aceitam texto simples.",
      },
      {
        q: "O texto estilizado funciona no Instagram, TikTok ou Discord?",
        a: "O usuário costuma ficar em letras comuns. O texto estilizado vai no nome visível, na bio ou na mensagem. Instagram, TikTok e Discord têm cada um uma página com os campos daquela plataforma. Cole no app e confira.",
      },
      {
        q: "O FancyFont guarda o que eu digito?",
        a: "Não. As conversões e combinações de apelidos são geradas no seu navegador. Seu texto nunca é enviado nem guardado nos nossos servidores.",
      },
    ],
  },
  "zh-cn": {
    meta: {
      title: serpTitle("花体字生成器", "zh-cn", "昵称与符号"),
      description:
        "免费花体字生成器：30 种 Unicode 样式、游戏昵称，以及爱心、星星、翅膀等符号。浏览器里预览，复制粘贴到简介、聊天或昵称，无需注册，也不安装字体。",
    },
    hero: {
      pre: "生成并复制",
      accent: "个性文字",
      sub: "给 A–Z 换样式、装饰一个已有的名字，或复制一个符号。声调字母、中文和 emoji 保持原样。",
      ctaPrimary: "试试个性字体",
      ctaSecondary: "生成游戏昵称",
      instantPreview: "即时预览",
      convertLink: "转换你自己的文字 →",
    },
    toolsSection: {
      h2: "三件不同的事",
      sub: "每张卡是一件不同的事。按你要粘贴的内容来选。",
      cards: [
        {
          icon: "✦",
          title: "个性字体生成器",
          description: "给简介或聊天里的一句字换样式。只转换 A–Z，拉丁字母以外的字符保持原样。",
          cta: "生成文字",
        },
        {
          icon: "♛",
          title: "游戏昵称生成器",
          description: "装饰你已经在用的名字，加上边框或字母样式，不会另起一个名字。装饰会计入字数。",
          cta: "起个名字",
        },
        {
          icon: "#",
          title: "特殊符号大全",
          description: "只需要一个符号时用，比如爱心或星星。这一页不改单词里的字母。",
          cta: "浏览符号",
        },
      ],
    },
    popularStyles: {
      h2: "热门文字样式",
      seeAll: "在个性字体生成器中查看全部 30 种样式 →",
    },
    popularSymbols: { h2: "热门符号", browse: "浏览并复制全部符号 →" },
    directory: {
      h2: "全部生成器",
      sub: "每个工具都有独立页面：专属转换器、示例和诚实的兼容性说明。",
    },
    how: {
      h2: "使用流程",
      steps: [
        { title: "1. 输入你的文字", body: "一个名字、一个单词或一句话——任何你想装饰的内容。" },
        { title: "2. 挑选样式", body: "即时预览所有结果，选中最符合你气质的那一款。" },
        { title: "3. 复制粘贴", body: "一下复制结果，粘贴到游戏、简介或聊天里。" },
      ],
    },
    compat:
      "这些效果使用 Unicode 字符，而非已安装的字体文件。显示效果和可用性可能因设备、应用、游戏及平台规则而异，请在实际使用位置测试。",
    what: {
      h2: "FancyFont 是什么",
      body: "FancyFont 是 fancyfont.tools 上的免费工具，把 A–Z 字母转成有风格的 Unicode 文字，装饰游戏昵称，并提供可复制的符号。这些是字符，网站不会安装字体文件。转换在浏览器里完成，你输入的文字不会上传。把结果粘贴到游戏、简介或聊天里，再确认显示效果符合预期。",
    },
    faqHeading: "常见问题",
    faq: [
      {
        q: "FancyFont 是免费的吗？",
        a: "是。所有工具免费使用，无需注册。想写多少写多少，随时预览和复制。",
      },
      {
        q: "这些是真正的字体文件吗？",
        a: "不是。这些结果是看起来像不同字体的 Unicode 字符——这正是它们能被复制粘贴到只接受纯文本的应用里的原因。",
      },
      {
        q: "带样式的文字在 Instagram、TikTok 或 Discord 上能用吗？",
        a: "用户名通常只能用普通字母。带样式的文字放在显示名、简介或消息里。Instagram、TikTok 和 Discord 各有一页说明那个平台的字段。贴到应用里再看一眼。",
      },
      {
        q: "FancyFont 会保存我输入的内容吗？",
        a: "不会。转换和昵称组合全部在你的浏览器中完成。你的文字永远不会被发送或存储在我们的服务器上。",
      },
    ],
  },
  id: {
    meta: {
      title: serpTitle("Huruf keren", "id", "nama & simbol"),
      description:
        "Generator huruf keren gratis: 30 gaya Unicode, nama game, dan simbol seperti hati, bintang, dan sayap. Salin tempel ke bio, chat, atau profil — tanpa daftar, tanpa memasang font.",
    },
    hero: {
      pre: "Buat dan salin ",
      accent: "teks keren",
      sub: "Gayakan A–Z, hias nama yang sudah kamu punya, atau salin satu simbol. Huruf beraksen, Cina, dan emoji tetap seperti aslinya.",
      ctaPrimary: "Coba huruf keren",
      ctaSecondary: "Buat nama game",
      instantPreview: "Pratinjau instan",
      convertLink: "Konversi teksmu sendiri →",
    },
    toolsSection: {
      h2: "Tiga pekerjaan",
      sub: "Setiap kartu adalah pekerjaan berbeda. Pilih yang sesuai dengan yang akan kamu tempel.",
      cards: [
        {
          icon: "✦",
          title: "Generator huruf keren",
          description:
            "Untuk bio atau chat. Mengubah A–Z menjadi gaya Unicode. Selain huruf Latin tetap seperti aslinya.",
          cta: "Buat teks",
        },
        {
          icon: "♛",
          title: "Pembuat nama game",
          description:
            "Untuk nama yang sudah kamu pakai. Menambah bingkai atau gaya huruf, dan tidak mengarang nama baru. Dekorasi dihitung dalam batas karakter.",
          cta: "Bikin nama",
        },
        {
          icon: "#",
          title: "Simbol & dekorasi",
          description:
            "Saat kamu hanya butuh satu simbol, seperti hati atau bintang. Halaman ini tidak mengubah huruf dalam sebuah kata.",
          cta: "Jelajahi simbol",
        },
      ],
    },
    popularStyles: {
      h2: "Gaya teks populer",
      seeAll: "Lihat semua 30 gaya di Generator Huruf Keren →",
    },
    popularSymbols: { h2: "Simbol populer", browse: "Lihat dan salin semua simbol →" },
    directory: {
      h2: "Semua generator",
      sub: "Setiap alat punya halaman sendiri dengan konverter khusus, contoh, dan catatan kompatibilitas yang jujur.",
    },
    how: {
      h2: "Cara kerja",
      steps: [
        { title: "1. Ketik teksmu", body: "Sebuah nama, kata, atau frasa pendek — apa pun yang ingin kamu hias." },
        { title: "2. Pilih gaya", body: "Lihat pratinjau semua hasil seketika dan pilih vibe yang paling kamu." },
        { title: "3. Salin & tempel", body: "Sekali ketuk menyalin hasilnya. Tempel ke game, bio, atau chat." },
      ],
    },
    compat:
      "Gaya-gaya ini menggunakan karakter Unicode, bukan file font yang terpasang. Tampilan dan ketersediaan bisa berbeda tergantung perangkat, aplikasi, game, dan aturan platform. Uji hasilnya di tempat kamu akan memakainya.",
    what: {
      h2: "Apa itu FancyFont",
      body: "FancyFont adalah alat gratis di fancyfont.tools yang mengubah huruf A–Z menjadi teks Unicode bergaya, menghias nama game, dan menyediakan simbol untuk disalin. Ini karakter, dan situs ini tidak memasang berkas font. Semuanya berjalan di browser, jadi teks yang kamu ketik tidak diunggah. Tempel hasilnya ke game, bio, atau chat, lalu pastikan tampilannya sesuai.",
    },
    faqHeading: "Pertanyaan umum",
    faq: [
      {
        q: "Apakah FancyFont gratis?",
        a: "Ya. Semua alat di FancyFont gratis dan tanpa pendaftaran. Ketik, pratinjau, dan salin sepuasnya.",
      },
      {
        q: "Apakah ini font sungguhan?",
        a: "Bukan. Hasilnya adalah karakter Unicode yang terlihat seperti font berbeda. Justru itu sebabnya bisa ditempel ke aplikasi yang hanya menerima teks biasa.",
      },
      {
        q: "Apakah teks bergaya berfungsi di Instagram, TikTok, atau Discord?",
        a: "Username biasanya tetap huruf biasa. Teks bergaya masuk ke nama tampilan, bio, atau pesan. Instagram, TikTok, dan Discord masing-masing punya halaman untuk kolom platform itu. Tempel di aplikasi dan periksa.",
      },
      {
        q: "Apakah FancyFont menyimpan yang saya ketik?",
        a: "Tidak. Konversi dan kombinasi nama dibuat di browsermu. Teks kamu tidak pernah dikirim atau disimpan di server kami.",
      },
    ],
  },
};
