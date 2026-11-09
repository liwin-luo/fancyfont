import { textStyles } from "./text-styles";
import { cjkStyles } from "./cjk-styles";
// 全站 UI 文案:按语言集中管理。组件通过 getUi(locale) 取用,
// 服务端组装后只把纯字符串下发到客户端。

export interface HomeFaq {
  q: string;
  a: string;
}

export interface StartLink {
  title: string;
  description: string;
  href: string;
}

export interface UiStrings {
  nav: {
    styles: string;
    stylesHeading: string;
    cjkHeading: string;
    platforms: string;
    guides: string;
    popular: string;
    allStyles: string;
    allPlatforms: string;
    menu: string;
    /** 语言切换器按钮的无障碍标签。 */
    language: string;
  };
  /** 中间层 hub 页(分类目录)。 */
  hub: {
    styles: { title: string; h1: string; description: string; intro: string };
    platforms: { title: string; h1: string; description: string; intro: string };
    styleGroups: Record<"script" | "gothic" | "cute" | "bold" | "small", string>;
    platformGroups: Record<"social" | "games" | "chat", string>;
  };
  ticker: string;
  skip: string;
  footerTagline: string;
  copyright: string;
  footerCols: { styles: string; platforms: string; guides: string; about: string; allStyles: string; allPlatforms: string; allGuides: string };
  tool: {
    inputLabel: string;
    inputPlaceholder: string;
    charCount: string;
    reset: string;
    tabs: { styles: string; favorites: string; recent: string };
    copy: string;
    copied: string;
    all: string;
    favAria: string;
    unfavAria: string;
    cjkHeading: string;
    cjkSub: string;
    cjkBanner: string;
    cjkBannerLink: string;
    favoritesEmpty: string;
    recentEmpty: string;
    clear: string;
    removeAria: string;
    searchPlaceholder: string;
    infoAria: string;
    details: {
      title: string;
      coverage: string;
      block: string;
      chars: string;
      charsHint: string;
      screenReader: string;
      hashtag: string;
      close: string;
    };
    cleaner: {
      heading: string;
      intro: string;
      inputLabel: string;
      inputPlaceholder: string;
      idle: string;
      removedPrefix: string;
      removedSuffix: string;
      clear: string;
      copyResult: string;
      copied: string;
    };
  };
  /** 装饰组合名称键 -> 各语言标签。 */
  wrapperLabels: {
    hearts: string;
    sparkles: string;
    softBrackets: string;
    skull: string;
    blades: string;
    vaporwave: string;
    haze: string;
    retroSweet: string;
    flowers: string;
    bows: string;
    gamerFrame: string;
  };
  sections: {
    steps: string;
    faq: string;
    relatedTools: string;
    relatedGuides: string;
    swapStyles: string;
    tryIt: string;
    combos: string;
    combosIntro: (sample: string) => string;
    structure: string;
  };
  breadcrumb: { home: string; guides: string };
  platform: {
    limits: (platform: string) => string;
    compat: string;
    examples: string;
    examplesIntro: string;
    faq: (platform: string) => string;
  };
  guideIndex: {
    h1: string;
    intro: string;
    cardLabel: string;
  };
  home: {
    badge: string;
    h1: string;
    h1Sub: string;
    intro: string;
    statStyles: string;
    statCjk: string;
    statLocal: string;
    stylesHeading: string;
    stylesIntro: string;
    platformsHeading: string;
    platformsIntro: string;
    platformCard: string;
    guidesHeading: string;
    guidesIntro: string;
    guidesAll: string;
    gameTextHeading: string;
    gameTextIntro: string;
    faqHeading: string;
    faq: HomeFaq[];
    startHeading: string;
    startLinks: StartLink[];
  };
  notFound: {
    badge: string;
    h1: string;
    body: string;
    back: string;
    secondary: string;
  };
  compatNote: string;
  datePublished: string;
  dateUpdated: string;
}

const EN: UiStrings = {
  nav: {
    styles: "Font styles",
    stylesHeading: "Letter & number styles",
    cjkHeading: "Chinese decorations",
    platforms: "By platform",
    guides: "Guides",
    popular: "Popular",
    menu: "Open menu",
    language: "Switch language",
    allStyles: "All styles",
    allPlatforms: "All platforms",
  },
  ticker: "Copy & paste · No font files · Your text never leaves your device",
  skip: "Skip to content",
  footerTagline: "Fancy text is converted locally in your browser. What you type never leaves your device.",
  copyright: "All rights reserved.",
  footerCols: {
    styles: "Font styles",
    platforms: "Platforms",
    guides: "Guides",
    about: "About",
    allStyles: "View all styles →",
    allPlatforms: "View all platforms →",
    allGuides: "All guides →",
  },
  tool: {
    inputLabel: "Your text",
    inputPlaceholder: "Type a nickname, phrase or word…",
    charCount: "/120 characters",
    reset: "Reset example",
    tabs: { styles: "Styles", favorites: "Favorites", recent: "Recent" },
    copy: "Copy",
    copied: "Copied ✓",
    all: "All",
    favAria: "Favorite",
    unfavAria: "Remove favorite",
    cjkHeading: "Chinese decorations",
    cjkSub: "Frames work on any characters, including Han",
    cjkBanner:
      "Chinese detected: styled glyphs only cover Latin letters, so Han characters pass through unchanged. To dress up Chinese text, use the",
    cjkBannerLink: "nickname decorator",
    favoritesEmpty:
      "No favorites yet. Tap the ☆ on a style card to save it — data stays on this device only.",
    recentEmpty: "Results you copy appear here, so you can find them again.",
    clear: "Clear",
    removeAria: "Remove this entry",
    searchPlaceholder: "Search styles…",
    infoAria: "Style details",
    details: {
      title: "Style details",
      coverage: "Coverage",
      block: "Unicode block",
      chars: "Characters when pasted",
      charsHint:
        "Strike/zalgo stack invisible combining marks — strict counters may double. Regular styles stay one-for-one.",
      screenReader:
        "Screen readers may spell styled letters by their full Unicode names. Avoid for essential text.",
      hashtag: "Hashtags and @handles only match plain characters — keep lookups plain.",
      close: "Close",
    },
    cleaner: {
      heading: "Zalgo cleaner",
      intro: "Paste corrupted text here and strip the stacked marks in one tap. Everything runs in your browser.",
      inputLabel: "Paste corrupted text",
      inputPlaceholder: "Paste the corrupted text to clean…",
      idle: "Waiting for input",
      removedPrefix: "Stripped",
      removedSuffix: "stacked marks",
      clear: "Clear",
      copyResult: "Copy result",
      copied: "Copied ✓",
    },
  },
  wrapperLabels: {
    hearts: "Hearts",
    sparkles: "Sparkles",
    softBrackets: "Soft brackets",
    skull: "Skulls",
    blades: "Blades",
    vaporwave: "Vaporwave",
    haze: "Haze",
    retroSweet: "Retro sweet",
    flowers: "Flowers",
    bows: "Bows",
    gamerFrame: "Gamer frames",
  },
  sections: {
    steps: "How to use",
    faq: "FAQ",
    relatedTools: "Related tools",
    relatedGuides: "Related guides",
    swapStyles: "Try another style",
    tryIt: "Try it yourself",
    combos: "Decoration combos",
    combosIntro: (sample: string) =>
      `Using “${sample}” as the sample: the main style wrapped in each decoration pair. Copy, then swap in your own text.`,
    structure: "Structure",
  },
  hub: {
    styles: {
      title: "All Font Styles & Generators",
      h1: "All font styles",
      description: "Browse every fancy font style — cursive, gothic, cute, bold, small and glitch generators — grouped by look. Copy and paste, free.",
      intro: `Every generator on FancyFont, grouped by look. Open one, type, and copy — every page carries the full ${textStyles.length}-style catalog with honest notes on where each look works.`,
    },
    platforms: {
      title: "Fancy Fonts for Every Platform",
      h1: "Fonts by platform",
      description: "Fancy fonts and nicknames for Instagram, TikTok, Discord, Roblox and more — character limits and compatibility for each platform.",
      intro: "Each platform page is built for its app: name limits, what renders safely, and ready-made combos. Pick where you're posting.",
    },
    styleGroups: {
      script: "Cursive & script", gothic: "Gothic & dark", cute: "Cute & aesthetic",
      bold: "Bold & cool", small: "Small & weird",
    },
    platformGroups: {
      social: "Social platforms", games: "Games", chat: "Chat apps",
    },
  },
  breadcrumb: { home: "Home", guides: "Guides" },
  platform: {
    limits: (p) => `${p}: limits & rules`,
    compat: "Where it works — and where it doesn't",
    examples: "Ready-made nickname examples",
    examplesIntro: "Copy as-is, or use them as templates for your own name.",
    faq: (p) => `${p} FAQ`,
  },
  guideIndex: {
    h1: "Guides",
    intro:
      "Principles, box troubleshooting, platform rules and style pairing — built on one fact: the output is plain Unicode text. Nothing we cannot verify.",
    cardLabel: "Guide",
  },
  home: {
    badge: "Free · No sign-up · Nothing uploaded",
    h1: "Fancy Font Generator",
    h1Sub: `${textStyles.length} styles for letters & numbers, ${cjkStyles.length} decorations for nicknames — copy and paste anywhere`,
    intro:
      "Type a nickname, phrase or word and every style renders live. Tap a card to copy, then paste it into Instagram, TikTok, Discord, WhatsApp or your game ID — the output is Unicode text, so no font files are needed and it displays no matter what fonts the app has.",
    statStyles: "letter & number styles",
    statCjk: "nickname decorations",
    statLocal: "data uploaded — everything runs locally",
    stylesHeading: "Style pages",
    stylesIntro:
      "One page per look: a filtered generator, how-to steps, compatibility notes and an FAQ.",
    platformsHeading: "Platform pages",
    platformsIntro:
      "Character limits, what works where, and ready-made nickname examples for your platform.",
    platformCard: "fancy text for",
    guidesHeading: "Guides",
    guidesIntro: "Principles, limits & compatibility",
    guidesAll: "All guides →",
    gameTextHeading: "Game and roleplay text",
    gameTextIntro:
      "Short styles for in-game names, signs and roleplay. Account usernames stay plain letters — save only text the game itself accepts.",
    faqHeading: "FAQ",
    faq: [
      {
        q: "Do I need to install these “fonts”?",
        a: "No. The results are special Unicode characters — the style travels with the text when you copy and paste, and neither you nor the reader has to install anything.",
      },
      {
        q: "Can I style non-Latin scripts?",
        a: "Unicode has no styled glyphs for scripts like Chinese, Japanese or Arabic, so those characters pass through unchanged. Nickname decorations (frames and symbols) work on any characters, though.",
      },
      {
        q: "Is my text uploaded anywhere?",
        a: "No. Conversion happens entirely in your browser. There is no server involved, so what you type never leaves your device.",
      },
      {
        q: "Where can I paste fancy text?",
        a: "Display spots generally accept it: display names, bios, signatures, chat nicknames. Lookup spots generally don't: @handles, username IDs and hashtags only take plain characters. Each platform page spells out the details.",
      },
      {
        q: "Why does some text show boxes (□) on other devices?",
        a: "A box means the other device's fonts lack that glyph. Switching styles usually fixes it — fullwidth letters and common symbols are the safest picks. Risk notes are printed on every style card.",
      },
    ],
    startHeading: "Start here",
    startLinks: [
      { title: "Signature font", description: "Script styles for a name. Not an ink or legal signature.", href: "/signature-font-generator/" },
      { title: "Cursive converter", description: "The classic script look for English words.", href: "/cursive-fonts/" },
      { title: "Why boxes appear", description: "Compatibility, explained simply.", href: "/learn/why-boxes-appear/" },
      { title: "Pick your style", description: "Match a look to your scenario.", href: "/learn/pick-your-style/" },
    ],
  },
  notFound: {
    badge: "404",
    h1: "This page got copied away",
    body: "The address may be mistyped, or the page has moved. Head back home — every generator and guide lives there.",
    back: "Back home",
    secondary: "Nickname decorator",
  },
  compatNote:
    "Styled characters display fine on most modern devices; old devices or exotic symbols may render as boxes (□). Style cards carry ⚠ risk notes — post a test on the target platform before you commit.",
  datePublished: "Published",
  dateUpdated: "Updated",
};

const ZH: UiStrings = {
  nav: {
    styles: "字体样式",
    stylesHeading: "英文/数字样式",
    cjkHeading: "中文装饰",
    platforms: "平台专区",
    guides: "装扮指南",
    popular: "热门样式",
    menu: "打开菜单",
    language: "切换语言",
    allStyles: "全部样式",
    allPlatforms: "全部平台",
  },
  ticker: "复制即用 · 无需下载字体 · 文本永不上传 · 全平台可用 · 字数统计 · 收藏同步本机",
  skip: "跳到主要内容",
  footerTagline: "花式文字在浏览器本地转换,你输入的文本不会离开设备。",
  copyright: "保留所有权利。",
  footerCols: {
    styles: "字体样式",
    platforms: "平台专区",
    guides: "装扮指南",
    about: "关于",
    allStyles: "查看全部样式 →",
    allPlatforms: "查看全部平台 →",
    allGuides: "全部指南 →",
  },
  tool: {
    inputLabel: "输入文字",
    inputPlaceholder: "输入昵称、短句或单词…",
    charCount: "/120 字符",
    reset: "重置为示例",
    tabs: { styles: "样式", favorites: "收藏", recent: "最近" },
    copy: "复制",
    copied: "已复制 ✓",
    all: "全部",
    favAria: "收藏",
    unfavAria: "取消收藏",
    cjkHeading: "中文装饰",
    cjkSub: "环绕框对汉字同样生效",
    cjkBanner: "检测到中文:带样式字形只覆盖英文字母,汉字保持原样。想让中文也出彩?试试",
    cjkBannerLink: "花式昵称装饰",
    favoritesEmpty: "还没有收藏。点样式卡片右侧的 ☆ 把喜欢的存下来,数据只留在本机。",
    recentEmpty: "复制过一次的结果会出现在这里,方便回找。",
    clear: "清空",
    removeAria: "删除这条记录",
    searchPlaceholder: "搜索样式…",
    infoAria: "样式详情",
    details: {
      title: "样式详情",
      coverage: "覆盖范围",
      block: "Unicode 区段",
      chars: "粘贴后的字符数",
      charsHint: "删除线/乱码会叠加不可见符号,严格计数的平台统计会翻倍;常规样式一换一。",
      screenReader: "屏幕阅读器可能把带样式字母按全名朗读,重要信息请用普通字符。",
      hashtag: "话题标签和 @账号 只匹配普通字符,检索位请保持普通写法。",
      close: "关闭",
    },
    cleaner: {
      heading: "乱码清洗器",
      intro: "把带乱码的文字粘贴进来,一键剥离叠加符号。清洗完全在你的浏览器里进行。",
      inputLabel: "粘贴乱码文字",
      inputPlaceholder: "粘贴需要清洗的乱码文字…",
      idle: "等待输入",
      removedPrefix: "已剥离",
      removedSuffix: "个叠加符号",
      clear: "清空",
      copyResult: "复制结果",
      copied: "已复制 ✓",
    },
  },
  wrapperLabels: {
    hearts: "爱心",
    sparkles: "星光",
    softBrackets: "软括弧",
    skull: "骷髅",
    blades: "双剑",
    vaporwave: "蒸汽波",
    haze: "星雾",
    retroSweet: "复古甜",
    flowers: "小花",
    bows: "蝴蝶结",
    gamerFrame: "电竞框",
  },
  sections: {
    steps: "使用步骤",
    faq: "常见问题",
    relatedTools: "相关工具",
    relatedGuides: "相关指南",
    swapStyles: "继续换样式",
    tryIt: "动手试试",
    combos: "装饰组合",
    combosIntro: (sample: string) =>
      `以「${sample}」为例,主样式套上装饰对的效果,复制后替换成你自己的文字。`,
    structure: "结构",
  },
  hub: {
    styles: {
      title: "全部字体样式生成器",
      h1: "全部样式",
      description: "浏览全部花式字体样式——花体、哥特、可爱、粗体、小字与乱码生成器,按风格分组,复制即用。",
      intro: `FancyFont 的全部生成器按风格分组。打开即用,每页收录全部 ${textStyles.length} 种样式,并诚实标注各样式的适用范围。`,
    },
    platforms: {
      title: "各平台花式字体",
      h1: "按平台选字体",
      description: "抖音、小红书、微信、QQ、B 站等平台的花式字体与昵称——各平台字数限制与兼容性一目了然。",
      intro: "每个平台专页针对对应应用:昵称字数、安全渲染与现成组合。选你要发的平台。",
    },
    styleGroups: {
      script: "花体手写", gothic: "哥特暗黑", cute: "可爱美学",
      bold: "粗体利落", small: "小字怪趣",
    },
    platformGroups: {
      social: "社交平台", games: "游戏昵称", chat: "通讯办公",
    },
  },
  breadcrumb: { home: "首页", guides: "装扮指南" },
  platform: {
    limits: (p) => `${p}的字数与规则`,
    compat: "哪里能用,哪里不能用",
    examples: "现成昵称示例",
    examplesIntro: "直接复制,或当作模板替换成你的名字。",
    faq: (p) => `${p}常见问题`,
  },
  guideIndex: {
    h1: "装扮指南",
    intro:
      "用得明白,装饰得放心。这里有花式字体的原理科普、兼容性排查、平台规则解读和场景搭配教程,全部基于「结果就是普通 Unicode 字符」这一事实展开,不做无法核实的承诺。",
    cardLabel: "指南",
  },
  home: {
    badge: "免费 · 无需注册 · 文本不上传",
    h1: "花式字体生成器",
    h1Sub: `英文变 ${textStyles.length} 种样式,中文套 ${cjkStyles.length} 种装饰 —— 复制直接用`,
    intro:
      "输入昵称、短句或名字,所有样式实时生成。点击卡片复制,粘贴到抖音、微信、QQ、微博、游戏 ID—— 本质是 Unicode 字符,不需要下载字体,平台装什么字体都显示。",
    statStyles: "种英文/数字样式",
    statCjk: "种中文环绕装饰",
    statLocal: "数据上传 · 全程本地转换",
    stylesHeading: "字体样式专页",
    stylesIntro: "每种风格一个专页:筛选后的生成器、使用步骤、兼容性说明和 FAQ。",
    platformsHeading: "平台专页",
    platformsIntro: "每个平台的字数限制、兼容性边界、现成昵称示例,进场前先看一眼。",
    platformCard: "的花式昵称方案",
    guidesHeading: "装扮指南",
    guidesIntro: "原理、兼容性、平台规则——用得明白,装饰得放心。",
    guidesAll: "查看全部指南 →",
    gameTextHeading: "游戏与角色名文本",
    gameTextIntro: "给游戏内名字、告示和角色扮演用的短文本。账号用户名保持普通字符，只保存游戏自己接受的内容。",
    faqHeading: "常见问题",
    faq: [
      {
        q: "这些「字体」需要下载安装吗?",
        a: "不需要。生成的结果本身就是特殊 Unicode 字符,复制后粘贴到哪里都自带样式,你和看到它的人都不用装任何字体文件。",
      },
      {
        q: "中文名字能用花式字体吗?",
        a: "汉字在 Unicode 里只有一种常规形态,没有花体/斜体变化。中文昵称的个性化靠环绕装饰——꧁名字꧂、『名字』这类装饰框,在「花式昵称装饰」页一键生成。",
      },
      {
        q: "我输入的文字会被上传吗?",
        a: "不会。转换完全在你的浏览器里完成,没有服务器参与,输入的任何内容都不离开你的设备。",
      },
      {
        q: "花式文字在哪些平台能用?",
        a: "昵称、个性签名、简介、群名片等展示位普遍支持;@账号ID、话题标签等检索位只接受普通字符。每个平台的细节见对应平台专页。",
      },
      {
        q: "为什么粘贴到某些设备显示成方框?",
        a: "方框说明对方设备缺少该字符的字形,换一种样式通常能解决。低风险的样式(全角、基本符号装饰)几乎全平台正常,风险提示在样式卡片上都有标注。",
      },
    ],
    startHeading: "从这几个页面开始",
    startLinks: [
      { title: "花式昵称装饰", description: "中文昵称的 27 种环绕装饰。", href: "/zh/decorated-nicknames/" },
      { title: "花体字转换器", description: "最经典的英文花体样式。", href: "/zh/cursive-fonts/" },
      { title: "中文花式昵称教程", description: "三个技巧做出风格。", href: "/zh/zhinan/chinese-nickname-guide/" },
      { title: "场景选样式", description: "按场景匹配风格组合。", href: "/zh/zhinan/pick-your-style/" },
    ],
  },
  notFound: {
    badge: "404",
    h1: "这个页面被复制走了",
    body: "地址可能输错了,或者页面已经搬家。回到首页,所有生成器和指南都在那里。",
    back: "回首页",
    secondary: "花式昵称装饰",
  },
  compatNote:
    "带样式字符在绝大多数主流设备上正常显示;老旧机型或冷门装饰符号可能显示为方框□。样式卡片上的 ⚠ 标注了对应风险,收藏前先在目标平台发一条测试内容。",
  datePublished: "发布于",
  dateUpdated: "更新于",
};

const ES: UiStrings = {
  nav: {
    styles: "Estilos de letra",
    stylesHeading: "Letras y números",
    cjkHeading: "Decoraciones chinas",
    platforms: "Por plataforma",
    guides: "Guías",
    popular: "Populares",
    menu: "Abrir menú",
    language: "Cambiar idioma",
    allStyles: "Todos los estilos",
    allPlatforms: "Todas las plataformas",
  },
  ticker: "Copia y pega · Sin archivos de fuente · Tu texto nunca sale de tu dispositivo",
  skip: "Saltar al contenido",
  footerTagline: "El texto fancy se convierte en tu navegador. Lo que escribes nunca sale de tu dispositivo.",
  copyright: "Todos los derechos reservados.",
  footerCols: {
    styles: "Estilos",
    platforms: "Plataformas",
    guides: "Guías",
    about: "Acerca de",
    allStyles: "Ver todos los estilos →",
    allPlatforms: "Ver todas las plataformas →",
    allGuides: "Todas las guías →",
  },
  tool: {
    inputLabel: "Tu texto",
    inputPlaceholder: "Escribe un apodo, frase o palabra…",
    charCount: "/120 caracteres",
    reset: "Restaurar ejemplo",
    tabs: { styles: "Estilos", favorites: "Favoritos", recent: "Recientes" },
    copy: "Copiar",
    copied: "Copiado ✓",
    all: "Todos",
    favAria: "Guardar en favoritos",
    unfavAria: "Quitar de favoritos",
    cjkHeading: "Decoraciones chinas",
    cjkSub: "Los marcos funcionan con cualquier carácter",
    cjkBanner:
      "Chino detectado: los glifos con estilo solo cubren letras latinas, los caracteres chinos se quedan igual. Para decorarlos usa el",
    cjkBannerLink: "decorador de apodos",
    favoritesEmpty:
      "Aún no hay favoritos. Toca la ☆ de una tarjeta para guardarla — los datos se quedan en este dispositivo.",
    recentEmpty: "Lo que copies aparece aquí para que lo encuentres de nuevo.",
    clear: "Vaciar",
    removeAria: "Eliminar esta entrada",
    searchPlaceholder: "Buscar estilos…",
    infoAria: "Detalles del estilo",
    details: {
      title: "Detalles del estilo",
      coverage: "Cobertura",
      block: "Bloque Unicode",
      chars: "Caracteres al pegar",
      charsHint:
        "Tachado/zalgo añaden marcas invisibles — los contadores estrictos pueden duplicarse. Los estilos normales cambian uno a uno.",
      screenReader:
        "Los lectores de pantalla pueden deletrear las letras con estilo. Evita el texto esencial.",
      hashtag: "Los hashtags y @usuarios solo coinciden con caracteres normales.",
      close: "Cerrar",
    },
    cleaner: {
      heading: "Limpiador zalgo",
      intro: "Pega aquí el texto dañado y elimina los símbolos superpuestos de un toque. Todo corre en tu navegador.",
      inputLabel: "Pega el texto dañado",
      inputPlaceholder: "Pega el texto dañado para limpiar…",
      idle: "Esperando texto",
      removedPrefix: "Eliminados",
      removedSuffix: "símbolos superpuestos",
      clear: "Vaciar",
      copyResult: "Copiar resultado",
      copied: "Copiado ✓",
    },
  },
  wrapperLabels: {
    hearts: "Corazones",
    sparkles: "Destellos",
    softBrackets: "Paréntesis suaves",
    skull: "Calaveras",
    blades: "Espadas",
    vaporwave: "Vaporwave",
    haze: "Bruma",
    retroSweet: "Dulce retro",
    flowers: "Flores",
    bows: "Moños",
    gamerFrame: "Marcos gamer",
  },
  sections: {
    steps: "Cómo usarlo",
    faq: "Preguntas frecuentes",
    relatedTools: "Herramientas relacionadas",
    relatedGuides: "Guías relacionadas",
    swapStyles: "Prueba otro estilo",
    tryIt: "Pruébalo",
    combos: "Combinaciones decorativas",
    combosIntro: (sample: string) =>
      `Usando «${sample}» como ejemplo: el estilo principal envuelto en cada par decorativo. Copia y cambia el texto por el tuyo.`,
    structure: "Estructura",
  },
  hub: {
    styles: {
      title: "Todos los estilos de letra",
      h1: "Todos los estilos",
      description: "Explora todos los generadores: cursiva, gótica, mono, negrita, pequeña y glitch, agrupados por estilo. Copia y pega gratis.",
      intro: `Todos los generadores de FancyFont agrupados por estilo. Abre uno, escribe y copia: cada página incluye los ${textStyles.length} estilos completos.`,
    },
    platforms: {
      title: "Letras para cada plataforma",
      h1: "Letras por plataforma",
      description: "Letras fancy para Instagram, TikTok, Discord, Free Fire y más: límites de caracteres y compatibilidad de cada plataforma.",
      intro: "Cada página se ajusta a su app: límites de nombre, renderizado seguro y combinaciones listas. Elige dónde vas a publicar.",
    },
    styleGroups: {
      script: "Cursiva y script", gothic: "Gótica y oscura", cute: "Mono y estética",
      bold: "Negrita y cool", small: "Pequeñas y raras",
    },
    platformGroups: {
      social: "Redes sociales", games: "Juegos", chat: "Apps de chat",
    },
  },
  breadcrumb: { home: "Inicio", guides: "Guías" },
  platform: {
    limits: (p) => `Reglas y límites de ${p}`,
    compat: "Dónde funciona y dónde no",
    examples: "Apodos listos para copiar",
    examplesIntro: "Córialos tal cual o úsalos como plantilla para el tuyo.",
    faq: (p) => `${p}: preguntas frecuentes`,
  },
  guideIndex: {
    h1: "Guías",
    intro:
      "Principios, solución de cuadros □, reglas de plataformas y combinaciones de estilo — el resultado es texto Unicode normal, verificado.",
    cardLabel: "Guía",
  },
  home: {
    badge: "Gratis · Sin registro · Nada se sube",
    h1: "Generador de Letras Bonitas",
    h1Sub: `${textStyles.length} estilos para letras y números, ${cjkStyles.length} marcos para apodos — copia y pega donde quieras`,
    intro:
      "Escribe un apodo, frase o palabra y todos los estilos se generan al instante. Toca una tarjeta para copiar y pégalo en Instagram, TikTok, Discord, WhatsApp o en tu ID de juego — el resultado es texto Unicode, sin archivos de fuente, y se ve igual pase lo que pase con las fuentes de la app.",
    statStyles: "estilos para letras y números",
    statCjk: "marcos de decoración",
    statLocal: "datos subidos — todo se procesa en local",
    stylesHeading: "Páginas de estilos",
    stylesIntro:
      "Una página por estilo: generador filtrado, pasos de uso, notas de compatibilidad y FAQ.",
    platformsHeading: "Páginas por plataforma",
    platformsIntro:
      "Límites de caracteres, qué funciona y dónde, y apodos listos para copiar en tu plataforma.",
    platformCard: "letras fancy para",
    guidesHeading: "Guías",
    guidesIntro: "Principios, límites y compatibilidad",
    guidesAll: "Todas las guías →",
    gameTextHeading: "Texto para juegos y roleplay",
    gameTextIntro:
      "Estilos cortos para nombres dentro del juego, carteles y roleplay. El usuario de la cuenta se queda en letras normales: guarda solo lo que el juego acepte.",
    faqHeading: "Preguntas frecuentes",
    faq: [
      {
        q: "¿Hay que instalar estas «fuentes»?",
        a: "No. Los resultados son caracteres Unicode especiales: el estilo viaja con el texto al copiar y pegar, y nadie necesita instalar nada.",
      },
      {
        q: "¿Funciona con escritura no latina?",
        a: "Unicode no tiene glifos con estilo para chino, japonés o árabe, así que esos caracteres se quedan igual. Los marcos decorativos sí funcionan con cualquier carácter.",
      },
      {
        q: "¿Mi texto se sube a algún sitio?",
        a: "No. La conversión ocurre por completo en tu navegador, sin servidor: lo que escribes nunca sale de tu dispositivo.",
      },
      {
        q: "¿Dónde puedo pegar texto fancy?",
        a: "Los espacios de visualización suelen aceptarlo: nombres visibles, bios, firmas. Los de búsqueda no: @usuarios, IDs y hashtags solo aceptan caracteres normales. Cada página de plataforma detalla los casos.",
      },
      {
        q: "¿Por qué se ven cuadros (□) en otros dispositivos?",
        a: "Un cuadro significa que las fuentes del otro dispositivo no tienen ese glifo. Cambiar de estilo suele bastar; las letras fullwidth y los símbolos comunes son lo más seguro. Cada tarjeta marca sus riesgos con ⚠.",
      },
    ],
    startHeading: "Empieza por aquí",
    startLinks: [
      { title: "Letras coquette", description: "Lazo y script para copiar. No cambia el usuario de la cuenta.", href: "/es/coquette-font-generator/" },
      { title: "Conversor a cursiva", description: "El clásico estilo script para palabras.", href: "/es/cursive-fonts/" },
      { title: "Por qué salen cuadros", description: "Compatibilidad explicada sin lío.", href: "/es/guia/why-boxes-appear/" },
      { title: "Límites de longitud", description: "Cuántos caracteres caben en un nombre.", href: "/es/guia/name-length-limits/" },
    ],
  },
  notFound: {
    badge: "404",
    h1: "Esta página se copió y se fue",
    body: "La dirección puede estar mal escrita o la página se movió. Vuelve al inicio: ahí están todos los generadores y guías.",
    back: "Al inicio",
    secondary: "Decorador de apodos",
  },
  compatNote:
    "Los caracteres con estilo se ven bien en la mayoría de dispositivos modernos; en equipos viejos o con símbolos exóticos pueden verse cuadros (□). Las tarjetas marcan los riesgos con ⚠ — haz una prueba en la plataforma antes de decidirte.",
  datePublished: "Publicado",
  dateUpdated: "Actualizado",
};

const PT: UiStrings = {
  nav: {
    styles: "Estilos de letra",
    stylesHeading: "Letras e números",
    cjkHeading: "Decorações chinesas",
    platforms: "Por plataforma",
    guides: "Guias",
    popular: "Populares",
    menu: "Abrir menu",
    language: "Mudar idioma",
    allStyles: "Todos os estilos",
    allPlatforms: "Todas as plataformas",
  },
  ticker: "Copie e cole · Sem arquivos de fonte · Seu texto nunca sai do dispositivo",
  skip: "Pular para o conteúdo",
  footerTagline: "O texto estilizado é convertido no seu navegador. O que você digita nunca sai do dispositivo.",
  copyright: "Todos os direitos reservados.",
  footerCols: {
    styles: "Estilos",
    platforms: "Plataformas",
    guides: "Guias",
    about: "Sobre",
    allStyles: "Ver todos os estilos →",
    allPlatforms: "Ver todas as plataformas →",
    allGuides: "Todos os guias →",
  },
  tool: {
    inputLabel: "Seu texto",
    inputPlaceholder: "Digite um apelido, frase ou palavra…",
    charCount: "/120 caracteres",
    reset: "Restaurar exemplo",
    tabs: { styles: "Estilos", favorites: "Favoritos", recent: "Recentes" },
    copy: "Copiar",
    copied: "Copiado ✓",
    all: "Todos",
    favAria: "Favoritar",
    unfavAria: "Remover dos favoritos",
    cjkHeading: "Decorações chinesas",
    cjkSub: "As molduras funcionam com qualquer caractere",
    cjkBanner:
      "Chinês detectado: os glifos estilizados cobrem apenas letras latinas — caracteres chineses ficam como estão. Para decorá-los use o",
    cjkBannerLink: "decorador de apelidos",
    favoritesEmpty:
      "Nenhum favorito ainda. Toque na ☆ de um cartão para salvar — os dados ficam só neste dispositivo.",
    recentEmpty: "O que você copiar aparece aqui para achar de novo.",
    clear: "Limpar",
    removeAria: "Remover este item",
    searchPlaceholder: "Buscar estilos…",
    infoAria: "Detalhes do estilo",
    details: {
      title: "Detalhes do estilo",
      coverage: "Cobertura",
      block: "Bloco Unicode",
      chars: "Caracteres ao colar",
      charsHint:
        "Riscado/zalgo adicionam marcas invisíveis — contadores estritos podem dobrar. Estilos normais trocam um por um.",
      screenReader:
        "Leitores de tela podem soletrar letras estilizadas pelos nomes completos. Evite em texto essencial.",
      hashtag: "Hashtags e @usuários só coincidem com caracteres normais.",
      close: "Fechar",
    },
    cleaner: {
      heading: "Limpador zalgo",
      intro: "Cole o texto danificado aqui e remova os símbolos sobrepostos num toque. Tudo roda no seu navegador.",
      inputLabel: "Cole o texto danificado",
      inputPlaceholder: "Cole o texto danificado para limpar…",
      idle: "Aguardando texto",
      removedPrefix: "Removidos",
      removedSuffix: "símbolos sobrepostos",
      clear: "Limpar",
      copyResult: "Copiar resultado",
      copied: "Copiado ✓",
    },
  },
  wrapperLabels: {
    hearts: "Corações",
    sparkles: "Brilhos",
    softBrackets: "Parênteses macios",
    skull: "Caveiras",
    blades: "Espadas",
    vaporwave: "Vaporwave",
    haze: "Névoa",
    retroSweet: "Doce retrô",
    flowers: "Flores",
    bows: "Laços",
    gamerFrame: "Molduras gamer",
  },
  sections: {
    steps: "Como usar",
    faq: "Perguntas frequentes",
    relatedTools: "Ferramentas relacionadas",
    relatedGuides: "Guias relacionadas",
    swapStyles: "Teste outro estilo",
    tryIt: "Experimente",
    combos: "Combinações decorativas",
    combosIntro: (sample: string) =>
      `Usando “${sample}” como exemplo: o estilo principal envolto em cada par decorativo. Copie e troque pelo seu texto.`,
    structure: "Estrutura",
  },
  hub: {
    styles: {
      title: "Todos os estilos de letra",
      h1: "Todos os estilos",
      description: "Explore todos os geradores: cursiva, gótica, fofa, negrito, pequena e glitch, agrupados por estilo. Copie e cole de graça.",
      intro: `Todos os geradores do FancyFont agrupados por estilo. Abra um, digite e copie: cada página inclui os ${textStyles.length} estilos completos.`,
    },
    platforms: {
      title: "Fontes para cada plataforma",
      h1: "Fontes por plataforma",
      description: "Letras estilizadas para Instagram, TikTok, Discord, Free Fire e mais: limites de caracteres e compatibilidade.",
      intro: "Cada página é feita para o app: limites de nome, renderização segura e combinações prontas. Escolha onde você vai postar.",
    },
    styleGroups: {
      script: "Cursiva e script", gothic: "Gótica e sombria", cute: "Fofa e estética",
      bold: "Negrito e legal", small: "Pequenas e estranhas",
    },
    platformGroups: {
      social: "Redes sociais", games: "Jogos", chat: "Apps de chat",
    },
  },
  breadcrumb: { home: "Início", guides: "Guias" },
  platform: {
    limits: (p) => `Limites e regras do ${p}`,
    compat: "Onde funciona — e onde não",
    examples: "Apelidos prontos para copiar",
    examplesIntro: "Copie como estão ou use como modelo para o seu.",
    faq: (p) => `${p}: perguntas frequentes`,
  },
  guideIndex: {
    h1: "Guias",
    intro:
      "Princípios, solução dos quadradinhos □, regras das plataformas e combinações de estilo — o resultado é texto Unicode comum, verificado.",
    cardLabel: "Guia",
  },
  home: {
    badge: "Grátis · Sem cadastro · Nada é enviado",
    h1: "Gerador de Letras Diferentes",
    h1Sub: `${textStyles.length} estilos para letras e números, ${cjkStyles.length} molduras para apelidos — copie e cole onde quiser`,
    intro:
      "Digite um apelido, frase ou palavra e todos os estilos aparecem na hora. Toque em um cartão para copiar e cole no Instagram, TikTok, Discord, WhatsApp ou no seu ID de jogo — o resultado é texto Unicode, sem arquivo de fonte, e aparece igual independente das fontes do app.",
    statStyles: "estilos para letras e números",
    statCjk: "molduras de decoração",
    statLocal: "dados enviados — tudo roda no seu aparelho",
    stylesHeading: "Páginas de estilos",
    stylesIntro:
      "Uma página por estilo: gerador filtrado, passos de uso, notas de compatibilidade e FAQ.",
    platformsHeading: "Páginas por plataforma",
    platformsIntro:
      "Limites de caracteres, o que funciona onde e apelidos prontos para a sua plataforma.",
    platformCard: "letras fancy para",
    guidesHeading: "Guias",
    guidesIntro: "Princípios, limites e compatibilidade",
    guidesAll: "Todos os guias →",
    gameTextHeading: "Texto para jogos e roleplay",
    gameTextIntro:
      "Estilos curtos para nomes dentro do jogo, placas e roleplay. O usuário da conta continua em letras comuns — salve só o que o jogo aceitar.",
    faqHeading: "Perguntas frequentes",
    faq: [
      {
        q: "Preciso instalar essas “fontes”?",
        a: "Não. Os resultados são caracteres Unicode especiais: o estilo viaja junto com o texto ao copiar e colar, e ninguém precisa instalar nada.",
      },
      {
        q: "Funciona com escrita não latina?",
        a: "O Unicode não tem glifos estilizados para chinês, japonês ou árabe — esses caracteres ficam como estão. As molduras decorativas funcionam com qualquer caractere.",
      },
      {
        q: "Meu texto é enviado para algum servidor?",
        a: "Não. A conversão acontece inteiramente no seu navegador, sem servidor: o que você digita nunca sai do dispositivo.",
      },
      {
        q: "Onde posso colar texto estilizado?",
        a: "Campos de exibição geralmente aceitam: nome exibido, bio, assinatura. Campos de busca não: @usuário, ID e hashtag só aceitam caracteres comuns. Cada página de plataforma detalha os casos.",
      },
      {
        q: "Por que aparecem quadradinhos (□) em outros aparelhos?",
        a: "O quadradinho significa que as fontes do outro aparelho não têm aquele glifo. Trocar o estilo normalmente resolve; letras fullwidth e símbolos comuns são os mais seguros. Cada cartão marca os riscos com ⚠.",
      },
    ],
    startHeading: "Comece por aqui",
    startLinks: [
      { title: "Letras coquette", description: "Laço e script para copiar. Não muda o usuário da conta.", href: "/pt-br/coquette-font-generator/" },
      { title: "Conversor cursivo", description: "O clássico estilo script para palavras.", href: "/pt-br/cursive-fonts/" },
      { title: "Por que aparecem quadradinhos", description: "Compatibilidade explicada sem enrolação.", href: "/pt-br/guia/why-boxes-appear/" },
      { title: "Limites de caracteres", description: "Quantos caracteres cabem em um nome.", href: "/pt-br/guia/name-length-limits/" },
    ],
  },
  notFound: {
    badge: "404",
    h1: "Esta página foi copiada e sumiu",
    body: "O endereço pode estar errado ou a página mudou de lugar. Volte ao início — todos os geradores e guias estão lá.",
    back: "Voltar ao início",
    secondary: "Decorador de apelidos",
  },
  compatNote:
    "Os caracteres estilizados aparecem bem na maioria dos aparelhos modernos; aparelhos antigos ou símbolos exóticos podem virar quadradinhos (□). Os cartões marcam riscos com ⚠ — faça um teste na plataforma antes de decidir.",
  datePublished: "Publicado em",
  dateUpdated: "Atualizado em",
};

const DE: UiStrings = {
  nav: {
    styles: "Schriftstile",
    stylesHeading: "Buchstaben- & Zahlenstile",
    cjkHeading: "Chinesische Dekorationen",
    platforms: "Nach Plattform",
    guides: "Guides",
    popular: "Beliebt",
    menu: "Menü öffnen",
    language: "Sprache wechseln",
    allStyles: "Alle Stile",
    allPlatforms: "Alle Plattformen",
  },
  ticker: "Kopieren & einfügen · Keine Font-Dateien · Dein Text verlässt dein Gerät nie",
  skip: "Zum Inhalt springen",
  footerTagline: "Fancy-Text wird direkt in deinem Browser umgewandelt. Was du eingibst, verlässt dein Gerät nie.",
  copyright: "Alle Rechte vorbehalten.",
  footerCols: {
    styles: "Schriftstile",
    platforms: "Plattformen",
    guides: "Guides",
    about: "Über uns",
    allStyles: "Alle Stile ansehen →",
    allPlatforms: "Alle Plattformen ansehen →",
    allGuides: "Alle Guides →",
  },
  tool: {
    inputLabel: "Dein Text",
    inputPlaceholder: "Nickname, Satz oder Wort eingeben…",
    charCount: "/120 Zeichen",
    reset: "Beispiel zurücksetzen",
    tabs: { styles: "Stile", favorites: "Favoriten", recent: "Zuletzt" },
    copy: "Kopieren",
    copied: "Kopiert ✓",
    all: "Alle",
    favAria: "Zu Favoriten hinzufügen",
    unfavAria: "Aus Favoriten entfernen",
    cjkHeading: "Chinesische Dekorationen",
    cjkSub: "Die Rahmen funktionieren mit beliebigen Zeichen, auch mit Han",
    cjkBanner:
      "Chinesisch erkannt: Die gestylten Glyphen decken nur lateinische Buchstaben ab, Han-Zeichen bleiben unverändert. Um chinesischen Text zu verschönern, nutze den",
    cjkBannerLink: "Nickname-Dekorator",
    favoritesEmpty:
      "Noch keine Favoriten. Tippe auf einer Stilkarte auf ☆, um sie zu speichern — die Daten bleiben nur auf diesem Gerät.",
    recentEmpty: "Kopierte Ergebnisse erscheinen hier, damit du sie wiederfindest.",
    clear: "Leeren",
    removeAria: "Diesen Eintrag entfernen",
    searchPlaceholder: "Stile suchen…",
    infoAria: "Stildetails",
    details: {
      title: "Stildetails",
      coverage: "Abdeckung",
      block: "Unicode-Block",
      chars: "Zeichen nach dem Einfügen",
      charsHint:
        "Durchgestrichen/Zalgo stapeln unsichtbare Kombinationszeichen — strenge Zähler können doppelt zählen. Normale Stile bleiben eins zu eins.",
      screenReader:
        "Screenreader buchstabieren gestylte Buchstaben eventuell mit ihren vollen Unicode-Namen. Für wichtigen Text nicht verwenden.",
      hashtag: "Hashtags und @Handles matchen nur einfache Zeichen — halte Suchbegriffe schlicht.",
      close: "Schließen",
    },
    cleaner: {
      heading: "Zalgo-Reiniger",
      intro: "Füge hier kaputten Text ein und entferne die gestapelten Zeichen mit einem Tipp. Alles läuft in deinem Browser.",
      inputLabel: "Kaputten Text einfügen",
      inputPlaceholder: "Den kaputten Text zum Bereinigen einfügen…",
      idle: "Warte auf Eingabe",
      removedPrefix: "Entfernt:",
      removedSuffix: "gestapelte Zeichen",
      clear: "Leeren",
      copyResult: "Ergebnis kopieren",
      copied: "Kopiert ✓",
    },
  },
  wrapperLabels: {
    hearts: "Herzen",
    sparkles: "Funkeln",
    softBrackets: "Weiche Klammern",
    skull: "Totenköpfe",
    blades: "Klingen",
    vaporwave: "Vaporwave",
    haze: "Dunst",
    retroSweet: "Retro Sweet",
    flowers: "Blumen",
    bows: "Schleifen",
    gamerFrame: "Gamer-Rahmen",
  },
  sections: {
    steps: "So funktioniert’s",
    faq: "FAQ",
    relatedTools: "Weitere Tools",
    relatedGuides: "Weitere Guides",
    swapStyles: "Anderen Stil ausprobieren",
    tryIt: "Probiere es selbst",
    combos: "Deko-Kombinationen",
    combosIntro: (sample: string) =>
      `Mit „${sample}“ als Beispiel: der Hauptstil, umhüllt von jedem Deko-Paar. Kopiere und ersetze ihn durch deinen eigenen Text.`,
    structure: "Aufbau",
  },
  hub: {
    styles: {
      title: "Alle Schriftstile & Generatoren",
      h1: "Alle Schriftstile",
      description: "Stöbere durch alle Fancy-Schriftstile — Schreibschrift, Gothic, Cute, Bold, Small und Glitch — gruppiert nach Look. Kostenlos kopieren und einfügen.",
      intro: `Alle Generatoren auf FancyFont, gruppiert nach Look. Einen öffnen, tippen, kopieren — jede Seite enthält den kompletten Katalog mit ${textStyles.length} Stilen und ehrlichen Hinweisen, wo jeder Look funktioniert.`,
    },
    platforms: {
      title: "Fancy Fonts für jede Plattform",
      h1: "Fonts nach Plattform",
      description: "Fancy Fonts und Nicknames für Instagram, TikTok, Discord, Roblox und mehr — Zeichenlimits und Kompatibilität für jede Plattform.",
      intro: "Jede Plattform-Seite ist auf ihre App zugeschnitten: Namens-Limits, was sicher gerendert wird und fertige Kombinationen. Wähle, wo du postest.",
    },
    styleGroups: {
      script: "Schreibschrift & Script", gothic: "Gothic & Dark", cute: "Cute & Ästhetisch",
      bold: "Bold & Cool", small: "Klein & Seltsam",
    },
    platformGroups: {
      social: "Soziale Plattformen", games: "Games", chat: "Chat-Apps",
    },
  },
  breadcrumb: { home: "Start", guides: "Guides" },
  platform: {
    limits: (p) => `${p}: Limits & Regeln`,
    compat: "Wo es funktioniert — und wo nicht",
    examples: "Fertige Nickname-Beispiele",
    examplesIntro: "Kopiere sie direkt oder nutze sie als Vorlage für deinen eigenen Namen.",
    faq: (p) => `${p} FAQ`,
  },
  guideIndex: {
    h1: "Guides",
    intro:
      "Grundprinzipien, Kästchen-Fehlerbehebung, Plattform-Regeln und Stil-Kombis — das Ergebnis ist einfacher Unicode-Text, belegbar.",
    cardLabel: "Guide",
  },
  home: {
    badge: "Kostenlos · Keine Anmeldung · Nichts wird hochgeladen",
    h1: "Fancy Font Generator",
    h1Sub: `${textStyles.length} Stile für Buchstaben & Zahlen, ${cjkStyles.length} Dekorationen für Nicknames — kopieren und überall einfügen`,
    intro:
      "Gib einen Nickname, einen Satz oder ein Wort ein und jeder Stil wird live gerendert. Tippe auf eine Karte zum Kopieren und füge es in Instagram, TikTok, Discord, WhatsApp oder deine Game-ID ein — das Ergebnis ist Unicode-Text, daher werden keine Font-Dateien benötigt und es wird angezeigt, egal welche Fonts die App mitbringt.",
    statStyles: "Buchstaben- & Zahlenstile",
    statCjk: "Nickname-Dekorationen",
    statLocal: "Daten hochgeladen — alles läuft lokal",
    stylesHeading: "Stil-Seiten",
    stylesIntro:
      "Eine Seite pro Look: gefilterter Generator, Schritt-für-Schritt-Anleitung, Kompatibilitätshinweise und FAQ.",
    platformsHeading: "Plattform-Seiten",
    platformsIntro:
      "Zeichenlimits, was wo funktioniert, und fertige Nickname-Beispiele für deine Plattform.",
    platformCard: "Fancy-Text für",
    guidesHeading: "Guides",
    guidesIntro: "Grundprinzipien, Limits & Kompatibilität",
    guidesAll: "Alle Guides →",
    gameTextHeading: "Text für Spiele und Roleplay",
    gameTextIntro:
      "Kurze Stile für Namen im Spiel, Schilder und Roleplay. Account-Nutzernamen bleiben einfache Buchstaben — speichere nur, was das Spiel selbst annimmt.",
    faqHeading: "FAQ",
    faq: [
      {
        q: "Muss ich diese „Fonts“ installieren?",
        a: "Nein. Die Ergebnisse sind spezielle Unicode-Zeichen — der Stil reist beim Kopieren und Einfügen mit dem Text mit, und weder du noch die Leserin oder der Leser muss etwas installieren.",
      },
      {
        q: "Kann ich nicht-lateinische Schriften stylen?",
        a: "Unicode hat keine gestylten Glyphen für Schriften wie Chinesisch, Japanisch oder Arabisch, daher bleiben diese Zeichen unverändert. Nickname-Dekorationen (Rahmen und Symbole) funktionieren aber mit beliebigen Zeichen.",
      },
      {
        q: "Wird mein Text irgendwo hochgeladen?",
        a: "Nein. Die Umwandlung findet vollständig in deinem Browser statt. Es ist kein Server beteiligt, also verlässt nichts, was du tippst, dein Gerät.",
      },
      {
        q: "Wo kann ich Fancy-Text einfügen?",
        a: "Anzeigefelder akzeptieren ihn in der Regel: Anzeigenamen, Bios, Signaturen, Chat-Nicknames. Suchfelder meist nicht: @Handles, Benutzername-IDs und Hashtags nehmen nur einfache Zeichen. Jede Plattform-Seite erklärt die Details.",
      },
      {
        q: "Warum zeigen manche Geräte Kästchen (□) an?",
        a: "Ein Kästchen bedeutet, dass die Fonts des anderen Geräts diese Glyphe nicht haben. Ein Stilwechsel löst es meist — vollbreite Buchstaben und gängige Symbole sind am sichersten. Risikohinweise stehen auf jeder Stilkarte.",
      },
    ],
    startHeading: "Hier starten",
    startLinks: [
      { title: "Coquette", description: "Schleife und Script zum Kopieren. Der Account-Nutzername bleibt unverändert.", href: "/de/coquette-font-generator/" },
      { title: "Schreibschrift-Konverter", description: "Der klassische Script-Look für Wörter.", href: "/de/cursive-fonts/" },
      { title: "Warum Kästchen erscheinen", description: "Kompatibilität, einfach erklärt.", href: "/de/anleitung/why-boxes-appear/" },
      { title: "Zeichenlimits", description: "Wie viele Zeichen in einen Namen passen.", href: "/de/anleitung/name-length-limits/" },
    ],
  },
  notFound: {
    badge: "404",
    h1: "Diese Seite wurde wegkopiert",
    body: "Die Adresse ist vielleicht falsch geschrieben, oder die Seite ist umgezogen. Zurück zur Startseite — alle Generatoren und Guides findest du dort.",
    back: "Zur Startseite",
    secondary: "Nickname-Dekorator",
  },
  compatNote:
    "Gestylte Zeichen werden auf den meisten modernen Geräten korrekt angezeigt; auf alten Geräten oder bei exotischen Symbolen können Kästchen (□) erscheinen. Stilkarten tragen ⚠ Risikohinweise — teste vorher auf der Zielplattform, bevor du dich festlegst.",
  datePublished: "Veröffentlicht",
  dateUpdated: "Aktualisiert",
};

const STRINGS: Record<string, UiStrings> = { en: EN, "zh-cn": ZH, es: ES, "pt-br": PT, de: DE };

export function getUi(locale: string): UiStrings {
  return STRINGS[locale] ?? EN;
}
