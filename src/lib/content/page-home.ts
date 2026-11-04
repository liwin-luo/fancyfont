// Homepage copy per locale.

import type { Locale, PageMeta } from "../i18n";
import { siteName } from "../site";

export interface HomeContent {
  meta: PageMeta;
  hero: {
    /** Main H1 line. */
    pre: string;
    /** Second H1 line, rendered in the brand color. */
    accent: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    /** Link under the hero converter rows into the full generator. */
    convertLink: string;
  };
  toolsSection: {
    h2: string;
    sub: string;
    cards: { icon: string; title: string; description: string; cta: string }[];
  };
  popularTools: { h2: string };
  popularStyles: { h2: string; seeAll: string };
  useCases: { h2: string; sub: string; social: string; gaming: string; roleplay: string };
  directory: { h2: string; sub: string };
  how: { h2: string; steps: { title: string; body: string }[] };
  compat: string;
  faqHeading: string;
  faq: { q: string; a: string }[];
}

export const homeContent: Record<Locale, HomeContent> = {
  en: {
    meta: {
      title: `Fancy Font Generator — Stylish Text, Names & Symbols | ${siteName}`,
      description:
        "Type in the converter on this page and copy 30 Unicode styles, decorated gaming names, and symbols like hearts, stars, and wings. Free, no sign-up, no font to install.",
    },
    hero: {
      pre: "Fancy Font Generator",
      accent: "Stylish Text, Names & Symbols",
      sub: "Type below to turn plain letters into stylish Unicode text, decorate a gaming name, or grab a symbol — three tools on one site. Accented letters, Chinese, and emoji stay as typed.",
      ctaPrimary: "Try Fancy Text",
      ctaSecondary: "Make a Gaming Name",
      convertLink: "Open the full generator →",
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
    popularTools: { h2: "Popular tools" },
    popularStyles: {
      h2: "Popular text styles",
      seeAll: "See all 30 styles in the Fancy Text Generator →",
    },
    useCases: {
      h2: "Use it on your platform",
      sub: "Each platform page fits the tool to that platform's fields — display name, bio, or player name.",
      social: "Social",
      gaming: "Gaming",
      roleplay: "Roleplay",
    },
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
      title: `Generador de letras bonitas — Texto con estilo, nombres y símbolos | ${siteName}`,
      description:
        "Escribe en el conversor de esta página y copia 30 estilos Unicode, nombres gamer decorados y símbolos como corazones, estrellas y alas. Gratis, sin registro ni instalar fuentes.",
    },
    hero: {
      pre: "Generador de letras bonitas",
      accent: "Texto con estilo, nombres y símbolos",
      sub: "Escribe abajo para convertir tus letras en texto Unicode con estilo, decorar un nombre gamer o tomar un símbolo — tres herramientas en un sitio. Las tildes, el chino y los emoji se quedan igual.",
      ctaPrimary: "Probar letras bonitas",
      ctaSecondary: "Crear un nombre gamer",
      convertLink: "Abrir el generador completo →",
    },
    toolsSection: {
      h2: "Tres tareas",
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
    popularTools: { h2: "Herramientas populares" },
    popularStyles: {
      h2: "Estilos de texto populares",
      seeAll: "Ver los 30 estilos en el Generador de letras bonitas →",
    },
    useCases: {
      h2: "Úsalo en tu plataforma",
      sub: "Cada página de plataforma adapta la herramienta a sus campos: nombre visible, bio o nombre de jugador.",
      social: "Redes sociales",
      gaming: "Juegos",
      roleplay: "Rol",
    },
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
      title: `Gerador de letras bonitas — Texto estiloso, nomes e símbolos | ${siteName}`,
      description:
        "Digite no conversor desta página e copie 30 estilos Unicode, nomes de jogo decorados e símbolos como corações, estrelas e asas. Grátis, sem cadastro e sem instalar fontes.",
    },
    hero: {
      pre: "Gerador de letras bonitas",
      accent: "Texto estiloso, nomes e símbolos",
      sub: "Digite abaixo para transformar letras comuns em texto Unicode estiloso, decorar um nome de jogo ou pegar um símbolo — três ferramentas em um site. Acentos, chinês e emoji ficam como você digitou.",
      ctaPrimary: "Testar letras bonitas",
      ctaSecondary: "Criar um nome de jogo",
      convertLink: "Abrir o gerador completo →",
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
    popularTools: { h2: "Ferramentas populares" },
    popularStyles: {
      h2: "Estilos de texto populares",
      seeAll: "Ver os 30 estilos no Gerador de letras bonitas →",
    },
    useCases: {
      h2: "Use na sua plataforma",
      sub: "Cada página de plataforma adapta a ferramenta aos campos dela: nome de exibição, bio ou nome de jogador.",
      social: "Redes sociais",
      gaming: "Jogos",
      roleplay: "Roleplay",
    },
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
        a: "O usuário costuma ficar em letras comuns. O texto estilizado vai no nome de exibição, na bio ou na mensagem. Instagram, TikTok e Discord têm cada um uma página com os campos daquela plataforma. Cole no app e confira.",
      },
      {
        q: "O FancyFont guarda o que eu digito?",
        a: "Não. As conversões e combinações de apelidos são geradas no seu navegador. Seu texto nunca é enviado nem guardado nos nossos servidores.",
      },
    ],
  },
  "zh-cn": {
    meta: {
      title: `花体字生成器 — 个性文字、昵称与符号 | ${siteName}`,
      description:
        "在页面上的转换器里输入，直接复制 30 种 Unicode 样式、装饰好的游戏昵称，以及爱心、星星、翅膀等符号。免费、无需注册、不安装字体。",
    },
    hero: {
      pre: "花体字生成器",
      accent: "个性文字 · 昵称 · 特殊符号",
      sub: "在下方输入，把普通字母变成有风格的 Unicode 文字，装饰游戏昵称，或挑一个符号——一个站点上的三件事。声调字母、中文和 emoji 保持原样。",
      ctaPrimary: "试试个性字体",
      ctaSecondary: "生成游戏昵称",
      convertLink: "打开完整生成器 →",
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
    popularTools: { h2: "热门工具" },
    popularStyles: {
      h2: "热门文字样式",
      seeAll: "在个性字体生成器中查看全部 30 种样式 →",
    },
    useCases: {
      h2: "按你的平台使用",
      sub: "每个平台页都会把工具适配到那个平台的字段：显示名、简介或玩家名。",
      social: "社交平台",
      gaming: "游戏",
      roleplay: "角色扮演类",
    },
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
      title: `Generator Huruf Keren — Teks bergaya, nama, & simbol | ${siteName}`,
      description:
        "Ketik di konverter halaman ini dan salin 30 gaya Unicode, nama game yang dihias, serta simbol seperti hati, bintang, dan sayap. Gratis, tanpa daftar, tanpa memasang font.",
    },
    hero: {
      pre: "Generator Huruf Keren",
      accent: "Teks bergaya, nama, & simbol",
      sub: "Ketik di bawah untuk mengubah huruf biasa menjadi teks Unicode bergaya, menghias nama game, atau mengambil satu simbol — tiga alat di satu situs. Huruf beraksen, Cina, dan emoji tetap seperti aslinya.",
      ctaPrimary: "Coba huruf keren",
      ctaSecondary: "Buat nama game",
      convertLink: "Buka generator lengkap →",
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
    popularTools: { h2: "Alat populer" },
    popularStyles: {
      h2: "Gaya teks populer",
      seeAll: "Lihat semua 30 gaya di Generator Huruf Keren →",
    },
    useCases: {
      h2: "Pakai di platformmu",
      sub: "Setiap halaman platform menyesuaikan alat dengan kolom platform itu: nama tampilan, bio, atau nama pemain.",
      social: "Sosial",
      gaming: "Game",
      roleplay: "Roleplay",
    },
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
