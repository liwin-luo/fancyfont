// Gaming Name Generator page copy per locale.

import type { Locale, PageMeta } from "../i18n";

export interface GamingContent {
  meta: PageMeta;
  h1: string;
  intro: string;
  howHeading: string;
  steps: string[];
  examplesHeading: string;
  examples: string[];
  aboutHeading: string;
  about: string[];
  faqHeading: string;
  faq: { q: string; a: string }[];
  related: { path: string; title: string; description: string }[];
  /** Game-specific entrances. Cards whose slug is missing are not rendered. */
  hub?: {
    heading: string;
    intro: string;
    cards: { slug: string; title: string; description: string }[];
  };
}

export const gamingContent: Record<Locale, GamingContent> = {
  en: {
    meta: {
      title: "Gaming Name Generator – Cool Names & Symbols",
      description:
        "Type a name and decorate it with symbols, borders, and letter styles. Preview cool, dark, cute, pro, and minimal looks, then copy and paste your favorite. Free, no sign-up.",
    },
    h1: "Gaming Name Generator",
    intro:
      "Type your name and get decorated nickname ideas built from cool symbols and letter styles — for games, Discord, and social profiles. The tool decorates the name you typed and does not invent a different one. Copy the one you like or generate fresh combinations.",
    howHeading: "How to use it",
    steps: [
      "Type the name you want to decorate — results appear instantly.",
      "Pick a vibe: Cool, Dark, Cute, Pro, or Minimal.",
      "Copy a nickname you like, or hit “Generate new combinations” for more.",
    ],
    examplesHeading: "Examples",
    examples: ["꧁༒Alex༒꧂", "★ Alex ★", "『Alex』", "ツ Alex ツ"],
    aboutHeading: "How the combinations are built",
    about: [
      "Each idea combines your name with a decoration pair — prefixes and suffixes like ꧁༒, ★, 『』 or ☾ — and, in some vibes, a Unicode letter style such as cursive, gothic, or small caps. Your base name is never changed unless a style applies to it, so you keep control of the result.",
      "Keep game name-length limits in mind: decorations add characters, and many games cap names somewhere between 12 and 16 characters. Short names leave the most room for decoration.",
    ],
    faqHeading: "FAQ",
    faq: [
      {
        q: "Will these names work in my game?",
        a: "Many games accept Unicode characters in nicknames, but every game restricts its own character set — some only allow A–Z and 0–9. Test the name in a lobby, custom match, or name-change preview before spending anything on a rename.",
      },
      {
        q: "Why do I see boxes after pasting?",
        a: "Boxes (□) mean the game or device is missing a font for those characters. Try a different combination — simpler decorations like ★ or 『』 tend to display in more places than rare scripts.",
      },
      {
        q: "What is the difference between a username and a display name?",
        a: "Many games and platforms use one locked username for logging in (usually A–Z, 0–9, underscores only) and a separate display name or in-game nickname that is more flexible. Decorated names usually fit display names, not usernames.",
      },
      {
        q: "Can I use these names on Discord or Instagram?",
        a: "Yes, decorated names work well as Discord nicknames and social media display names. Platform rules change over time, so always preview the result in the app itself.",
      },
    ],
    related: [
      {
        path: "/symbols/",
        title: "Symbols & Decorators",
        description: "Browse 388 symbols to build your own look.",
      },
      {
        path: "/fancy-text-generator/",
        title: "Fancy Text Generator",
        description: "Convert any text into 30 stylish Unicode styles.",
      },
      {
        path: "/roblox-name-generator/",
        title: "Roblox Name Generator",
        description: "Roblox display name ideas plus the username rules, explained.",
      },
      {
        path: "/discord-fonts/",
        title: "Discord Fonts Generator",
        description: "Styled text for Discord nicknames and statuses.",
      },
    ],
  },
  es: {
    meta: {
      title: "Generador de nombres para juegos – nombres y símbolos",
      description:
        "Escribe un nombre y decóralo con símbolos, marcos y estilos de letra. Previsualiza looks cool, dark, cute, pro y minimal, y copia y pega tu favorito. Gratis, sin registro.",
    },
    h1: "Generador de nombres para juegos",
    intro:
      "Escribe tu nombre y recibe ideas de apodos decorados con símbolos y estilos de letra — para juegos, Discord y redes. La herramienta decora el nombre que escribiste y no inventa otro. Copia el que te guste o genera combinaciones nuevas.",
    howHeading: "Cómo usarlo",
    steps: [
      "Escribe el nombre que quieres decorar — los resultados aparecen al instante.",
      "Elige una vibra: Cool, Oscura, Tierna, Pro o Minimalista.",
      "Copia el apodo que te guste o toca “Generar nuevas combinaciones” para más.",
    ],
    examplesHeading: "Ejemplos",
    examples: ["꧁༒Alex༒꧂", "★ Alex ★", "『Alex』", "ツ Alex ツ"],
    aboutHeading: "Cómo se arman las combinaciones",
    about: [
      "Cada idea combina tu nombre con un par de decoración — prefijos y sufijos como ꧁༒, ★, 『』 o ☾ — y, en algunas vibras, un estilo de letra Unicode como cursiva, gótica o versalitas. Tu nombre base nunca cambia si no aplica un estilo, así que tú mantienes el control.",
      "Ten en cuenta los límites de largo de los juegos: la decoración suma caracteres y muchos juegos cortan los nombres entre 12 y 16 caracteres. Los nombres cortos dejan más espacio para decorar.",
    ],
    faqHeading: "Preguntas frecuentes",
    faq: [
      {
        q: "¿Estos nombres funcionan en mi juego?",
        a: "Muchos juegos aceptan caracteres Unicode en apodos, pero cada juego restringe su propio conjunto — algunos solo permiten A–Z y 0–9. Prueba el nombre en un lobby, partida personalizada o vista previa de cambio de nombre antes de gastar nada.",
      },
      {
        q: "¿Por qué veo cuadritos después de pegar?",
        a: "Los cuadritos (□) significan que al juego o dispositivo le falta una fuente para esos caracteres. Prueba otra combinación — decoraciones simples como ★ o 『』 se ven en más lugares que los alfabetos raros.",
      },
      {
        q: "¿Qué diferencia hay entre usuario y nombre visible?",
        a: "Muchos juegos y plataformas usan un usuario fijo para iniciar sesión (normalmente solo A–Z, 0–9 y guiones bajos) y un nombre visible o apodo dentro del juego, más flexible. Los nombres decorados suelen encajar en el nombre visible, no en el usuario.",
      },
      {
        q: "¿Puedo usar estos nombres en Discord o Instagram?",
        a: "Sí, los nombres decorados funcionan como apodos de Discord y nombres visibles en redes. Las reglas cambian con el tiempo, así que siempre previsualiza el resultado en la app.",
      },
    ],
    related: [
      {
        path: "/symbols/",
        title: "Símbolos y decoración",
        description: "388 símbolos para armar tu propio look.",
      },
      {
        path: "/fancy-text-generator/",
        title: "Generador de letras bonitas",
        description: "Convierte cualquier texto en 30 estilos Unicode.",
      },
      {
        path: "/roblox-name-generator/",
        title: "Generador de nombres para Roblox",
        description: "Ideas para Roblox y las reglas del usuario, explicadas.",
      },
      {
        path: "/discord-fonts/",
        title: "Fuentes para Discord",
        description: "Texto con estilo para apodos y estados de Discord.",
      },
    ],
    hub: {
      heading: "Nombres por juego",
      intro:
        "El generador de arriba decora cualquier nombre. Si buscas nombres gamer para un juego concreto, entra en su página: cada una cuenta su propio largo.",
      cards: [
        {
          slug: "cod-name-generator",
          title: "Nombres para Call of Duty",
          description: "Nombre de jugador y tag de clan, con largos distintos. Prueba el nombre en el juego.",
        },
        {
          slug: "pubg-name-generator",
          title: "Nombres para PUBG",
          description: "Un campo corto, en general unos 16 caracteres. El número es aproximado.",
        },
        {
          slug: "free-fire-name-generator",
          title: "Nombres para Free Fire",
          description: "Nombres más cortos, cerca de 12 caracteres contando los símbolos.",
        },
        {
          slug: "roblox-name-generator",
          title: "Nombres para Roblox",
          description: "El nombre visible admite estilo. El usuario se queda en letras planas.",
        },
      ],
    },
  },
  "pt-br": {
    meta: {
      title: "Gerador de nomes para jogos – nomes e símbolos",
      description:
        "Digite um nome e decore com símbolos, molduras e estilos de letra. Veja os visuais cool, dark, cute, pro e minimal, e copie e cole o favorito. Grátis, sem cadastro.",
    },
    h1: "Gerador de nomes para jogos",
    intro:
      "Digite seu nome e receba ideias de apelidos decorados com símbolos e estilos de letra — para jogos, Discord e redes sociais. A ferramenta decora o nome que você digitou e não inventa outro. Copie o que gostar ou gere combinações novas.",
    howHeading: "Como usar",
    steps: [
      "Digite o nome que quer decorar — os resultados aparecem na hora.",
      "Escolha uma vibe: Cool, Sombria, Fofo, Pro ou Minimalista.",
      "Copie o apelido que gostar ou toque em “Gerar novas combinações” para mais.",
    ],
    examplesHeading: "Exemplos",
    examples: ["꧁༒Alex༒꧂", "★ Alex ★", "『Alex』", "ツ Alex ツ"],
    aboutHeading: "Como as combinações são montadas",
    about: [
      "Cada ideia combina seu nome com um par de decoração — prefixos e sufixos como ꧁༒, ★, 『』 ou ☾ — e, em algumas vibes, um estilo de letra Unicode como cursiva, gótica ou versalete. Seu nome base nunca muda a menos que um estilo se aplique, então você mantém o controle do resultado.",
      "Fique de olho nos limites de tamanho dos jogos: a decoração soma caracteres e muitos jogos cortam nomes entre 12 e 16 caracteres. Nomes curtos deixam mais espaço para decorar.",
    ],
    faqHeading: "Perguntas frequentes",
    faq: [
      {
        q: "Esses nomes funcionam no meu jogo?",
        a: "Muitos jogos aceitam caracteres Unicode em apelidos, mas cada jogo restringe o próprio conjunto — alguns só permitem A–Z e 0–9. Teste o nome num lobby, partida personalizada ou prévia de troca de nome antes de gastar nada.",
      },
      {
        q: "Por que aparecem quadradinhos depois de colar?",
        a: "Quadradinhos (□) significam que o jogo ou aparelho não tem fonte para esses caracteres. Tente outra combinação — decorações simples como ★ ou 『』 aparecem em mais lugares que alfabetos raros.",
      },
      {
        q: "Qual a diferença entre usuário e nome de exibição?",
        a: "Muitos jogos e plataformas usam um usuário fixo para entrar (normalmente só A–Z, 0–9 e underline) e um nome de exibição ou apelido no jogo, mais flexível. Nomes decorados costumam caber no nome de exibição, não no usuário.",
      },
      {
        q: "Posso usar esses nomes no Discord ou Instagram?",
        a: "Sim, nomes decorados funcionam bem como apelidos do Discord e nomes em redes sociais. As regras mudam com o tempo, então sempre veja a prévia no próprio app.",
      },
    ],
    related: [
      {
        path: "/symbols/",
        title: "Símbolos e decoração",
        description: "388 símbolos para montar seu próprio visual.",
      },
      {
        path: "/fancy-text-generator/",
        title: "Gerador de letras bonitas",
        description: "Transforme qualquer texto em 30 estilos Unicode.",
      },
      {
        path: "/roblox-name-generator/",
        title: "Gerador de nomes para Roblox",
        description: "Ideias de nome para Roblox e as regras do usuário, explicadas.",
      },
      {
        path: "/discord-fonts/",
        title: "Fontes para Discord",
        description: "Texto com estilo para apelidos e status do Discord.",
      },
    ],
  },
  "zh-cn": {
    meta: {
      title: "游戏昵称生成器 – 酷炫名字与符号",
      description:
        "输入名字，用符号和花体字生成可复制的游戏昵称。选择风格并实时预览，再复制到游戏、Discord 或社交资料。粘贴前请先在游戏里试一次。",
    },
    h1: "游戏昵称生成器",
    intro:
      "输入你的名字，立刻获得由酷炫符号和字母样式组成的装饰昵称创意——适用于游戏、Discord 和社交资料。工具装饰的是你输入的名字，不会另起一个。复制喜欢的，或换一批新组合。",
    howHeading: "使用方法",
    steps: [
      "输入你想装饰的名字——结果即时出现。",
      "选择一种气质：酷炫、暗黑、可爱、竞技或极简。",
      "复制喜欢的昵称，或点“换一批组合”获取更多。",
    ],
    examplesHeading: "示例",
    examples: ["꧁༒Alex༒꧂", "★ Alex ★", "『Alex』", "ツ Alex ツ"],
    aboutHeading: "组合是怎么生成的",
    about: [
      "每个创意都是你的名字加一对装饰——꧁༒、★、『』、☾ 这样的前后缀——部分风格还会套用花体、哥特体、小型大写等 Unicode 字母样式。除非样式作用于名字本身，否则你的基础名不会被改动，主动权在你手里。",
      "留意游戏的昵称长度限制：装饰会增加字符数，很多游戏把名字限制在 12–16 个字符之间。短名字给装饰留的空间最大。",
    ],
    faqHeading: "常见问题",
    faq: [
      {
        q: "这些名字在我的游戏里能用吗？",
        a: "很多游戏接受昵称中的 Unicode 字符，但每个游戏限制自己的字符集——有些只允许 A–Z 和 0–9。改名前先在大厅、自定义对局或改名预览里测试，别白花一次改名机会。",
      },
      {
        q: "粘贴后为什么显示方块？",
        a: "方块（□）说明游戏或设备缺少这些字符的字体。换一个组合——★、『』这类简单装饰比生僻字符的适配面广得多。",
      },
      {
        q: "用户名和显示名有什么区别？",
        a: "很多游戏和平台用一个锁定的用户名登录（通常只允许 A–Z、0–9 和下划线），另有一个更灵活的显示名或游戏内昵称。装饰名字通常适合显示名，而不是用户名。",
      },
      {
        q: "能用在 Discord 或 Instagram 上吗？",
        a: "可以，装饰名很适合当 Discord 昵称和社交平台显示名。平台规则会变化，务必在应用内预览确认。",
      },
    ],
    related: [
      {
        path: "/symbols/",
        title: "特殊符号大全",
        description: "浏览 388 个符号，搭配你自己的风格。",
      },
      {
        path: "/fancy-text-generator/",
        title: "个性字体生成器",
        description: "把任意文字转换成 30 种个性 Unicode 样式。",
      },
      {
        path: "/roblox-name-generator/",
        title: "Roblox 名字生成器",
        description: "Roblox 显示名创意，以及用户名规则的详细说明。",
      },
      {
        path: "/discord-fonts/",
        title: "Discord 字体生成器",
        description: "Discord 昵称与状态的个性文字。",
      },
    ],
  },
  id: {
    meta: {
      title: "Generator Nama Game – nama keren & simbol",
      description:
        "Ketik nama dan hias dengan simbol, bingkai, dan gaya huruf. Pratinjau tampilan cool, dark, cute, pro, dan minimal, lalu salin tempel favoritmu. Gratis, tanpa daftar.",
    },
    h1: "Generator Nama Game",
    intro:
      "Ketik namamu dan dapatkan ide nama berhias dari simbol dan gaya huruf keren — untuk game, Discord, dan profil sosial. Alat ini menghias nama yang kamu ketik dan tidak mengarang nama lain. Salin yang kamu suka atau buat kombinasi baru.",
    howHeading: "Cara pakai",
    steps: [
      "Ketik nama yang ingin kamu hias — hasilnya muncul seketika.",
      "Pilih vibe: Keren, Gelap, Imut, Pro, atau Minimalis.",
      "Salin nama yang kamu suka, atau ketuk “Buat kombinasi baru” untuk lebih banyak.",
    ],
    examplesHeading: "Contoh",
    examples: ["꧁༒Alex༒꧂", "★ Alex ★", "『Alex』", "ツ Alex ツ"],
    aboutHeading: "Bagaimana kombinasi diracik",
    about: [
      "Setiap ide menggabungkan namamu dengan sepasang dekorasi — prefiks dan sufiks seperti ꧁༒, ★, 『』, atau ☾ — dan, di beberapa vibe, gaya huruf Unicode seperti cursive, gothic, atau kapital kecil. Nama dasarmu tidak pernah berubah kecuali gaya diterapkan padanya, jadi kendalanya tetap di tanganmu.",
      "Perhatikan batas panjang nama game: dekorasi menambah karakter, dan banyak game membatasinya di 12–16 karakter. Nama pendek menyisakan ruang terbesar untuk dekorasi.",
    ],
    faqHeading: "FAQ",
    faq: [
      {
        q: "Apakah nama-nama ini bisa dipakai di gameku?",
        a: "Banyak game menerima karakter Unicode di nama, tapi setiap game membatasi kumpulan karakternya sendiri — beberapa hanya mengizinkan A–Z dan 0–9. Uji nama di lobby, match kustom, atau pratinjau ganti nama sebelum mengeluarkan biaya apa pun.",
      },
      {
        q: "Kenapa muncul kotak setelah ditempel?",
        a: "Kotak (□) berarti game atau perangkatnya tidak punya font untuk karakter tersebut. Coba kombinasi lain — dekorasi sederhana seperti ★ atau 『』 tampil di lebih banyak tempat daripada aksara langka.",
      },
      {
        q: "Apa bedanya username dan nama tampilan?",
        a: "Banyak game dan platform memakai satu username terkunci untuk masuk (biasanya hanya A–Z, 0–9, underscore) dan nama tampilan atau nama dalam game yang lebih fleksibel. Nama berhias biasanya cocok untuk nama tampilan, bukan username.",
      },
      {
        q: "Bisakah dipakai di Discord atau Instagram?",
        a: "Bisa, nama berhias cocok sebagai nama Discord dan nama tampilan media sosial. Aturan platform berubah seiring waktu, jadi selalu pratinjau hasilnya di aplikasinya sendiri.",
      },
    ],
    related: [
      {
        path: "/symbols/",
        title: "Simbol & Dekorasi",
        description: "Jelajahi 388 simbol untuk bikin gayamu sendiri.",
      },
      {
        path: "/fancy-text-generator/",
        title: "Generator Huruf Keren",
        description: "Ubah teks apa pun menjadi 30 gaya Unicode keren.",
      },
      {
        path: "/roblox-name-generator/",
        title: "Generator Nama Roblox",
        description: "Ide nama Roblox plus penjelasan aturan usernamenya.",
      },
      {
        path: "/discord-fonts/",
        title: "Font Discord",
        description: "Teks bergaya untuk nama dan status Discord.",
      },
    ],
  },
};
