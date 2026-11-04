// Symbols page and Privacy page copy per locale.

import type { Locale, PageMeta } from "../i18n";

export interface SymbolsContent {
  meta: PageMeta;
  h1: string;
  intro: (count: number, categories: number) => string;
  howHeading: string;
  steps: string[];
  aboutHeading: string;
  about: (count: number, categories: number) => string[];
  faqHeading: string;
  faq: { q: string; a: string }[];
  related: { path: string; title: string; description: string }[];
}

export const symbolsContent: Record<Locale, SymbolsContent> = {
  en: {
    meta: {
      title: "Symbols Copy and Paste – Hearts, Stars, Wings & More",
      description:
        "Copy and paste hearts, stars, wings, crowns, arrows, and other Unicode symbols for names, bios, and messages. Click a symbol to copy it. Free, no sign-up.",
    },
    h1: "Symbols to Copy and Paste",
    intro: (count) =>
      `Browse ${count} text symbols — hearts, stars, arrows, crowns, wings and more. Search by name, click any symbol to copy it, and paste it into your name, bio, or message. No sign-up needed.`,
    howHeading: "How to use it",
    steps: [
      "Search by name — like “star” or “crown” — or browse a category.",
      "Click a symbol to copy it instantly.",
      "Paste it into your name, bio, or message.",
    ],
    aboutHeading: "About the collection",
    about: (count, categories) => [
      `Every symbol here is a standard Unicode character, so it copies as plain text and travels with your message. The collection spans ${categories} categories: hearts, stars, arrows, crowns, flowers, wings & bows, brackets, lines & borders, faces, music & vibes, and more.`,
      "The decorative combos are ready-made pairs of symbols and lines — handy as dividers in bios or around a nickname you have already styled. This page does not restyle letters. To change A–Z, use the fancy text generator.",
    ],
    faqHeading: "FAQ",
    faq: [
      {
        q: "How do I copy a symbol?",
        a: "Click or tap the symbol once — you will see a short “copied” confirmation. Then paste it wherever you need it.",
      },
      {
        q: "Why does the symbol look different after pasting?",
        a: "Every app draws symbols with its own fonts, so the same character can look slightly different — bolder, thinner, or colorful — depending on where you paste it. The character itself stays the same.",
      },
      {
        q: "Can I use these symbols in my username or bio?",
        a: "Most bios, display names and messages accept them freely. Usernames are usually more restricted — many platforms only allow letters, digits and underscores there. Test in the app before you commit.",
      },
    ],
    related: [
      {
        path: "/gaming-name-generator/",
        title: "Gaming Name Generator",
        description: "Combine your name with symbols and styles in one tap.",
      },
      {
        path: "/fancy-text-generator/",
        title: "Fancy Text Generator",
        description: "Turn plain text into 30 stylish Unicode styles.",
      },
      {
        path: "/blank-space/",
        title: "Blank Space",
        description:
          "Copy a run of Hangul filler, Braille blank, or ideographic space, or place that blank between fancy letters.",
      },
    ],
  },
  es: {
    meta: {
      title: "Símbolos para copiar y pegar – corazones, estrellas y más",
      description:
        "Copia y pega corazones, estrellas, alas, coronas, flechas y otros símbolos Unicode para nombres, bios y mensajes. Un clic copia. Gratis, sin registro.",
    },
    h1: "Símbolos para copiar y pegar",
    intro: (count) =>
      `${count} símbolos de texto — corazones, estrellas, flechas, coronas, alas y más. Busca por nombre, toca cualquier símbolo para copiarlo y pégalo en tu nombre, bio o mensaje. Sin registro.`,
    howHeading: "Cómo usarlo",
    steps: [
      "Busca por nombre — como “estrella” o “corona” — o explora una categoría.",
      "Toca un símbolo para copiarlo al instante.",
      "Pégalo en tu nombre, bio o mensaje.",
    ],
    aboutHeading: "Sobre la colección",
    about: (count, categories) => [
      `Cada símbolo es un carácter Unicode estándar, así que se copia como texto plano y viaja con tu mensaje. La colección abarca ${categories} categorías: corazones, estrellas, flechas, coronas, flores, alas y lazos, corchetes, líneas y bordes, caras, música y vibra, y más.`,
      "Las combinaciones decorativas son pares de símbolos y líneas listos para usar — útiles como divisores en bios o alrededor de un apodo que ya tengas con estilo. Esta página no cambia las letras. Para convertir A–Z, usa el generador de letras bonitas.",
    ],
    faqHeading: "Preguntas frecuentes",
    faq: [
      {
        q: "¿Cómo copio un símbolo?",
        a: "Toca el símbolo una vez — verás una confirmación de “copiado”. Luego pégalo donde lo necesites.",
      },
      {
        q: "¿Por qué el símbolo se ve diferente después de pegar?",
        a: "Cada app dibuja los símbolos con sus propias fuentes, así que el mismo carácter puede verse un poco distinto — más grueso, más fino o a color — según dónde lo pegues. El carácter en sí no cambia.",
      },
      {
        q: "¿Puedo usar estos símbolos en mi usuario o bio?",
        a: "La mayoría de bios, nombres y mensajes los aceptan sin problema. Los usuarios suelen ser más estrictos — muchas plataformas solo permiten letras, números y guiones bajos ahí. Prueba en la app antes de decidirte.",
      },
    ],
    related: [
      {
        path: "/gaming-name-generator/",
        title: "Generador de nombres para juegos",
        description: "Combina tu nombre con símbolos y estilos en un toque.",
      },
      {
        path: "/fancy-text-generator/",
        title: "Generador de letras bonitas",
        description: "Convierte texto normal en 30 estilos Unicode.",
      },
      {
        path: "/blank-space/",
        title: "Espacio en blanco",
        description:
          "Copia una tanda de relleno hangul, espacio braille o espacio ideográfico, o colócalo entre letras con estilo.",
      },
    ],
  },
  "pt-br": {
    meta: {
      title: "Símbolos para copiar e colar – corações, estrelas e mais",
      description:
        "Copie e cole corações, estrelas, asas, coroas, setas e outros símbolos Unicode para nomes, bios e mensagens. Um clique copia. Grátis, sem cadastro.",
    },
    h1: "Símbolos para copiar e colar",
    intro: (count) =>
      `${count} símbolos de texto — corações, estrelas, setas, coroas, asas e mais. Busque pelo nome, toque em qualquer símbolo para copiar e cole no seu nome, bio ou mensagem. Sem cadastro.`,
    howHeading: "Como usar",
    steps: [
      "Busque pelo nome — como “estrela” ou “coroa” — ou navegue por uma categoria.",
      "Toque em um símbolo para copiar na hora.",
      "Cole no seu nome, bio ou mensagem.",
    ],
    aboutHeading: "Sobre a coleção",
    about: (count, categories) => [
      `Cada símbolo aqui é um caractere Unicode padrão, então copia como texto simples e viaja com a sua mensagem. A coleção cobre ${categories} categorias: corações, estrelas, setas, coroas, flores, asas e laços, colchetes, linhas e bordas, carinhas, música e vibe, e mais.`,
      "As combinações decorativas são pares prontos de símbolos e linhas — úteis como divisores na bio ou ao redor de um apelido que você já estilizou. Esta página não muda as letras. Para converter A–Z, use o gerador de letras bonitas.",
    ],
    faqHeading: "Perguntas frequentes",
    faq: [
      {
        q: "Como copio um símbolo?",
        a: "Toque no símbolo uma vez — você verá uma confirmação rápida de “copiado”. Depois cole onde precisar.",
      },
      {
        q: "Por que o símbolo fica diferente depois de colar?",
        a: "Cada app desenha símbolos com as próprias fontes, então o mesmo caractere pode ficar um pouco diferente — mais grosso, mais fino ou colorido — dependendo de onde você cola. O caractere em si não muda.",
      },
      {
        q: "Posso usar esses símbolos no meu usuário ou bio?",
        a: "A maioria das bios, nomes e mensagens aceita tranquilo. Usuários costumam ser mais restritos — muitas plataformas só permitem letras, números e underline ali. Teste no app antes de decidir.",
      },
    ],
    related: [
      {
        path: "/gaming-name-generator/",
        title: "Gerador de nomes para jogos",
        description: "Combine seu nome com símbolos e estilos em um toque.",
      },
      {
        path: "/fancy-text-generator/",
        title: "Gerador de letras bonitas",
        description: "Transforme texto simples em 30 estilos Unicode.",
      },
      {
        path: "/blank-space/",
        title: "Espaço em branco",
        description:
          "Copie uma sequência de preenchimento hangul, espaço braille ou espaço ideográfico, ou coloque esse espaço entre letras estilizadas.",
      },
    ],
  },
  "zh-cn": {
    meta: {
      title: "特殊符号复制粘贴 – 爱心、星星、翅膀等",
      description:
        "浏览并一键复制爱心、星星、翅膀、皇冠等特殊符号，用在游戏昵称、个人资料、简介和消息里。可以按名称搜索，点一下就复制，无需注册。",
    },
    h1: "特殊符号复制粘贴",
    intro: (count, categories) =>
      `浏览 ${count} 个特殊符号——爱心、星星、箭头、皇冠、翅膀等，覆盖 ${categories} 个分类。按名称搜索，点击任意符号即可复制，粘贴到名字、简介或消息里。无需注册。`,
    howHeading: "使用方法",
    steps: [
      "按名称搜索——比如“星星”“皇冠”——或浏览分类。",
      "点击符号立即复制。",
      "粘贴到你的名字、简介或消息里。",
    ],
    aboutHeading: "关于符号库",
    about: (count, categories) => [
      `这里每个符号都是标准 Unicode 字符，按纯文本复制并随消息一起走。符号库覆盖 ${categories} 个分类：爱心、星星、箭头、皇冠、花朵、翅膀与蝴蝶结、括号、线条与边框、表情、音乐与氛围、对勾与叉、数学、希腊字母、货币、数字与罗马、圆点与符号。`,
      "装饰组合是现成的符号与线条搭配——适合做简介分隔线，或围在你已加好样式的昵称周围。这一页不改字母。要转换 A–Z，用个性字体生成器。",
    ],
    faqHeading: "常见问题",
    faq: [
      {
        q: "怎么复制符号？",
        a: "点击或轻触符号一次——会看到简短的“已复制”提示。然后粘贴到需要的地方。",
      },
      {
        q: "为什么符号粘贴后变样了？",
        a: "每个应用用自带字体绘制符号，同一个字符在不同地方可能显得粗细、颜色不同。字符本身没有变。",
      },
      {
        q: "能把符号用在用户名或简介里吗？",
        a: "大多数简介、显示名和消息都接受它们。用户名通常限制更严——很多平台只允许字母、数字和下划线。先在应用里测试再决定。",
      },
    ],
    related: [
      {
        path: "/gaming-name-generator/",
        title: "游戏昵称生成器",
        description: "一键把你的名字与符号和样式组合。",
      },
      {
        path: "/fancy-text-generator/",
        title: "个性字体生成器",
        description: "把普通文字转换成 30 种个性 Unicode 样式。",
      },
      {
        path: "/blank-space/",
        title: "空白复制",
        description: "复制一串韩文填充符、盲文空位或表意空格，或把这种空白夹进花体字母。",
      },
    ],
  },
  id: {
    meta: {
      title: "Simbol copy paste – hati, bintang, sayap & lainnya",
      description:
        "Salin tempel hati, bintang, sayap, mahkota, panah, dan simbol Unicode lain untuk nama, bio, dan pesan. Sekali klik menyalin. Gratis, tanpa daftar.",
    },
    h1: "Simbol untuk Disalin & Ditempel",
    intro: (count, categories) =>
      `Jelajahi ${count} simbol teks — hati, bintang, panah, mahkota, sayap, dan lainnya dalam ${categories} kategori. Cari berdasarkan nama, ketuk simbol untuk menyalin, lalu tempel ke nama, bio, atau pesanmu. Tanpa daftar.`,
    howHeading: "Cara pakai",
    steps: [
      "Cari berdasarkan nama — seperti “bintang” atau “mahkota” — atau jelajahi kategori.",
      "Ketuk simbol untuk menyalinnya seketika.",
      "Tempel ke nama, bio, atau pesanmu.",
    ],
    aboutHeading: "Tentang koleksinya",
    about: (count, categories) => [
      `Setiap simbol di sini adalah karakter Unicode standar, jadi tersalin sebagai teks biasa dan ikut bersama pesanmu. Koleksinya mencakup ${categories} kategori: hati, bintang, panah, mahkota, bunga, sayap & pita, kurung, garis & border, wajah, musik & vibe, dan lainnya.`,
      "Kombinasi dekoratif adalah pasangan simbol dan garis siap pakai — praktis sebagai pembatas bio atau pengeliling nama yang sudah kamu gayakan. Halaman ini tidak mengubah huruf. Untuk mengubah A–Z, pakai generator huruf keren.",
    ],
    faqHeading: "FAQ",
    faq: [
      {
        q: "Bagaimana cara menyalin simbol?",
        a: "Ketuk simbolnya sekali — kamu akan melihat konfirmasi singkat “tersalin”. Lalu tempel di tempat yang kamu butuhkan.",
      },
      {
        q: "Kenapa simbolnya tampak berbeda setelah ditempel?",
        a: "Setiap app menggambar simbol dengan fontnya sendiri, jadi karakter yang sama bisa tampak sedikit berbeda — lebih tebal, lebih tipis, atau berwarna — tergantung tempatnya. Karakternya sendiri tidak berubah.",
      },
      {
        q: "Bolehkah simbol ini dipakai di username atau bio?",
        a: "Sebagian besar bio, nama tampilan, dan pesan menerimanya bebas. Username biasanya lebih ketat — banyak platform hanya mengizinkan huruf, angka, dan underscore di sana. Uji di aplikasinya sebelum memutuskan.",
      },
    ],
    related: [
      {
        path: "/gaming-name-generator/",
        title: "Generator Nama Game",
        description: "Gabungkan namamu dengan simbol dan gaya dalam satu ketukan.",
      },
      {
        path: "/fancy-text-generator/",
        title: "Generator Huruf Keren",
        description: "Ubah teks biasa menjadi 30 gaya Unicode keren.",
      },
      {
        path: "/blank-space/",
        title: "Spasi kosong",
        description:
          "Salin deretan pengisi Hangul, spasi Braille, atau spasi ideografis, atau selipkan spasi itu di antara huruf keren.",
      },
    ],
  },
};

export interface PrivacyContent {
  meta: PageMeta;
  h1: string;
  updated: string;
  sections: { h2: string; body: string }[];
}

export const privacyContent: Record<Locale, PrivacyContent> = {
  en: {
    meta: {
      title: "Privacy Policy – FancyFont",
      description:
        "What FancyFont collects (and does not collect): all tools run in your browser and your text is never sent to our servers.",
    },
    h1: "Privacy Policy",
    updated: "Last updated: November 2026",
    sections: [
      {
        h2: "Your text stays in your browser",
        body: "FancyFont converts text, generates nicknames, and serves symbols entirely in your browser. The text you type is never sent to our servers, never logged, and never stored. When you close the page, it is gone.",
      },
      {
        h2: "Information we do not collect",
        body: "We do not require an account, and we do not collect the text you type or copy. Copying a result uses your browser's clipboard directly — it never passes through us. We do not sell personal information and we do not run advertising cookies.",
      },
      {
        h2: "Standard hosting logs",
        body: "FancyFont is hosted by a third-party hosting provider. Like nearly all websites, the hosting provider processes standard request data (such as IP address, browser type, and requested URL) for security and reliability. This data is not linked to the text you type into the tools.",
      },
      {
        h2: "Children",
        body: "FancyFont is a general-audience tool and does not knowingly collect any personal information from any visitor, including children.",
      },
      {
        h2: "Usage measurement",
        body: "This site loads Vercel Analytics, a cookie-free page-view counter. It records page paths and rough visit details (such as referrer, browser type, and country) so we can see which tools are used most. It does not receive the text you type, a generated nickname, a copied symbol, or a search query, and it does not use cookies or advertising identifiers. There is no Google Analytics, Clarity, or event tracking on this site.",
      },
      {
        h2: "Changes to this policy",
        body: "If we change how data is handled, we will update this page before the change goes live.",
      },
      {
        h2: "Contact",
        body: "Questions about this policy? Email {email}.",
      },
    ],
  },
  es: {
    meta: {
      title: "Política de privacidad – FancyFont",
      description:
        "Qué recoge FancyFont (y qué no): todas las herramientas corren en tu navegador y tu texto nunca llega a nuestros servidores.",
    },
    h1: "Política de privacidad",
    updated: "Última actualización: noviembre de 2026",
    sections: [
      {
        h2: "Tu texto se queda en tu navegador",
        body: "FancyFont convierte texto, genera apodos y sirve símbolos por completo en tu navegador. El texto que escribes nunca se envía a nuestros servidores, nunca se registra ni se guarda. Al cerrar la página, desaparece.",
      },
      {
        h2: "Información que no recogemos",
        body: "No pedimos cuenta y no recogemos el contenido que escribes o copias. Copiar un resultado usa el portapapeles de tu navegador directamente — nunca pasa por nosotros. No vendemos información personal ni usamos cookies de publicidad.",
      },
      {
        h2: "Registros estándar de hosting",
        body: "FancyFont está alojado por un proveedor externo. Como casi todas las webs, el proveedor procesa datos estándar de solicitud (como dirección IP, tipo de navegador y URL pedida) por seguridad y fiabilidad. Esos datos no se vinculan con el texto que escribes en las herramientas.",
      },
      {
        h2: "Menores",
        body: "FancyFont es una herramienta para público general y no recoge a sabiendas información personal de ningún visitante, incluidos menores.",
      },
      {
        h2: "Medición de uso",
        body: "El sitio carga Vercel Analytics, un contador de visitas sin cookies. Registra las rutas de página y detalles aproximados de la visita (como el referrer, el tipo de navegador y el país) para saber qué herramientas se usan más. No recibe el texto que escribes, un apodo generado, un símbolo copiado ni una búsqueda, y no usa cookies ni identificadores publicitarios. No hay Google Analytics, Clarity ni seguimiento de eventos en este sitio.",
      },
      {
        h2: "Cambios en esta política",
        body: "Si cambiamos cómo se tratan los datos, actualizaremos esta página antes de que el cambio entre en vigor.",
      },
      {
        h2: "Contacto",
        body: "¿Dudas sobre esta política? Escribe a {email}.",
      },
    ],
  },
  "pt-br": {
    meta: {
      title: "Política de Privacidade – FancyFont",
      description:
        "O que o FancyFont coleta (e não coleta): todas as ferramentas rodam no seu navegador e seu texto nunca chega aos nossos servidores.",
    },
    h1: "Política de Privacidade",
    updated: "Última atualização: novembro de 2026",
    sections: [
      {
        h2: "Seu texto fica no seu navegador",
        body: "O FancyFont converte texto, gera apelidos e serve símbolos inteiramente no seu navegador. O texto que você digita nunca é enviado aos nossos servidores, nunca é registrado nem armazenado. Quando fecha a página, ele some.",
      },
      {
        h2: "Informação que não coletamos",
        body: "Não pedimos conta e não coletamos o conteúdo que você digita ou copia. Copiar um resultado usa a área de transferência do seu navegador direto — nunca passa por nós. Não vendemos informações pessoais e não usamos cookies de publicidade.",
      },
      {
        h2: "Registros padrão de hospedagem",
        body: "O FancyFont é hospedado por um provedor externo. Como quase todos os sites, o provedor processa dados padrão de requisição (como endereço IP, tipo de navegador e URL pedida) por segurança e confiabilidade. Esses dados não são ligados ao texto que você digita nas ferramentas.",
      },
      {
        h2: "Crianças",
        body: "O FancyFont é uma ferramenta para público geral e não coleta intencionalmente informação pessoal de nenhum visitante, incluindo crianças.",
      },
      {
        h2: "Medição de uso",
        body: "O site carrega o Vercel Analytics, um contador de visitas sem cookies. Ele registra os caminhos das páginas e detalhes aproximados da visita (como o referrer, o tipo de navegador e o país) para sabermos quais ferramentas são mais usadas. Ele não recebe o texto que você digita, um apelido gerado, um símbolo copiado nem uma busca, e não usa cookies nem identificadores de publicidade. Não há Google Analytics, Clarity nem rastreamento de eventos neste site.",
      },
      {
        h2: "Mudanças nesta política",
        body: "Se mudarmos como os dados são tratados, atualizaremos esta página antes de a mudança entrar no ar.",
      },
      {
        h2: "Contato",
        body: "Dúvidas sobre esta política? Escreva para {email}.",
      },
    ],
  },
  "zh-cn": {
    meta: {
      title: "隐私政策 – FancyFont",
      description: "FancyFont 收集什么（以及不收集什么）：所有工具都在你的浏览器中运行，你的文字永远不会发送到我们的服务器。",
    },
    h1: "隐私政策",
    updated: "最后更新：2026 年 11 月",
    sections: [
      {
        h2: "你的文字只留在你的浏览器里",
        body: "FancyFont 的文字转换、昵称生成和符号库完全在你的浏览器中运行。你输入的文字永远不会被发送到我们的服务器，不会被记录，也不会被存储。关闭页面，一切即消失。",
      },
      {
        h2: "我们不收集的信息",
        body: "我们不需要注册账号，也不收集你输入或复制的内容。复制结果直接使用你浏览器的剪贴板——不会经过我们的服务器。我们不出售个人信息，也不投放广告 Cookie。",
      },
      {
        h2: "标准的托管日志",
        body: "FancyFont 由第三方托管服务商托管。与几乎所有网站一样，托管服务商会出于安全和稳定的目的处理标准请求数据（如 IP 地址、浏览器类型和所请求的 URL）。这些数据与你在工具中输入的文字没有任何关联。",
      },
      {
        h2: "未成年人",
        body: "FancyFont 是面向大众的工具，不会有意收集任何访客的个人信息，包括未成年人。",
      },
      {
        h2: "使用情况统计",
        body: "本站加载 Vercel Analytics——一个不使用 cookie 的页面访问计数器。它记录页面路径和大致的访问信息（如来源页、浏览器类型和国家/地区），用于了解哪些工具最常被使用。它不会收到你输入的文字、生成的昵称、复制的符号或搜索词，也不使用 cookie 或广告标识符。本站没有 Google Analytics、Clarity 或任何事件埋点。",
      },
      {
        h2: "政策的变更",
        body: "如果数据处理方式有变化，会在变更上线前先更新本页面。",
      },
      {
        h2: "联系我们",
        body: "对本政策有疑问？请发邮件至 {email}。",
      },
    ],
  },
  id: {
    meta: {
      title: "Kebijakan Privasi – FancyFont",
      description:
        "Apa yang dikumpulkan (dan tidak dikumpulkan) FancyFont: semua alat berjalan di browsermu dan teksmu tidak pernah dikirim ke server kami.",
    },
    h1: "Kebijakan Privasi",
    updated: "Terakhir diperbarui: November 2026",
    sections: [
      {
        h2: "Teks kamu tetap di browsermu",
        body: "FancyFont mengonversi teks, membuat nama, dan menyajikan simbol sepenuhnya di browsermu. Teks yang kamu ketik tidak pernah dikirim ke server kami, tidak dicatat, dan tidak disimpan. Begitu halaman ditutup, semuanya hilang.",
      },
      {
        h2: "Informasi yang tidak kami kumpulkan",
        body: "Kami tidak meminta akun dan tidak mengumpulkan konten yang kamu ketik atau salin. Menyalin hasil memakai papan klip browsermu secara langsung — tidak pernah lewat kami. Kami tidak menjual informasi pribadi dan tidak memasang cookie iklan.",
      },
      {
        h2: "Log hosting standar",
        body: "FancyFont di-host oleh penyedia hosting pihak ketiga. Seperti hampir semua situs web, penyedia hosting memproses data permintaan standar (seperti alamat IP, jenis browser, dan URL yang diminta) untuk keamanan dan keandalan. Data ini tidak terkait dengan teks yang kamu ketik ke dalam alat.",
      },
      {
        h2: "Anak-anak",
        body: "FancyFont adalah alat untuk audiens umum dan tidak dengan sengaja mengumpulkan informasi pribadi dari pengunjung mana pun, termasuk anak-anak.",
      },
      {
        h2: "Pengukuran penggunaan",
        body: "Situs ini memuat Vercel Analytics, penghitung kunjungan halaman tanpa cookie. Ia mencatat jalur halaman dan detail kunjungan secara umum (seperti referrer, jenis peramban, dan negara) agar kami tahu alat mana yang paling banyak dipakai. Ia tidak menerima teks yang kamu ketik, nama yang dibuat, simbol yang disalin, atau kata yang dicari, dan tidak memakai cookie atau pengenal iklan. Tidak ada Google Analytics, Clarity, atau pelacakan peristiwa di situs ini.",
      },
      {
        h2: "Perubahan kebijakan ini",
        body: "Jika cara data ditangani berubah, halaman ini akan diperbarui sebelum perubahan itu aktif.",
      },
      {
        h2: "Kontak",
        body: "Ada pertanyaan tentang kebijakan ini? Email {email}.",
      },
    ],
  },
};
