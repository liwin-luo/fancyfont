// Localized UI strings. The UiStrings interface requires every key for
// every locale, so a missing translation is a type error at build time.

import type { Locale } from "./i18n";
import type { StyleCategory, TextStyleId } from "./text-styles";
import type { VibeStyleId } from "./nickname";

export interface UiStrings {
  languageLabel: string;
  /** Shown when the page locale differs from the browser language. `{name}` is the language name. */
  localeSuggest: { message: string; action: string };
  nav: { fancy: string; gaming: string; symbols: string; home: string };
  tools: {
    fancy: string;
    gaming: string;
    symbols: string;
    blank: string;
    privacy: string;
    terms: string;
    about: string;
    contact: string;
    mcp: string;
    tagline: string;
    copyright: string;
    /** Footer byline: who publishes the site, and the last content revision date. */
    publishedBy: string;
    lastUpdated: string;
    letterGenerators: string;
    lookGenerators: string;
    forPlatforms: string;
    site: string;
    /** Suffix for platform footer links, e.g. "Instagram fonts" / "Roblox names". */
    fontsWord: string;
    namesWord: string;
    usesLetters: (style: string) => string;
    coverage: {
      letters: string;
      lettersDigits: string;
      partial: string;
      all: string;
    };
  };
  common: {
    yourText: string;
    clear: string;
    reset: string;
    charactersInfo: string;
    filterStyles: string;
    searchStyles: string;
    all: string;
    favorites: string;
    noFavorites: string;
    noStylesMatch: (query: string) => string;
    typeToSee: (count: number) => string;
    partialBadge: string;
    copy: string;
    copied: string;
    copyStyle: (name: string) => string;
    saveStyle: (name: string) => string;
    removeStyle: (name: string) => string;
    downloadPng: (name: string) => string;
    savedAsPng: string;
    pngFailed: string;
    shareToX: (name: string) => string;
    shareToThreads: (name: string) => string;
    shareToBluesky: (name: string) => string;
    shareToWhatsapp: (name: string) => string;
    shareToTelegram: (name: string) => string;
    shareMore: string;
    copiedOpening: (dest: string) => string;
    transparentBg: string;
    previewSize: string;
    copyAllFavorites: string;
    copiedToClipboard: string;
    copyFailed: string;
    browserOnly: string;
    stylePageInputLabel: string;
    typeToConvert: string;
  };
  symbols: {
    searchLabel: string;
    searchPlaceholder: string;
    countInfo: (count: number, category: string | null, query: string) => string;
    inCategory: (category: string) => string;
    forQuery: (query: string) => string;
    batchHint: string;
    recent: string;
    copySymbol: (label: string) => string;
    removeRecent: (label: string) => string;
    addToBatch: (label: string) => string;
    removeFromBatch: (label: string) => string;
    batchSelected: (count: number) => string;
    copyAll: string;
    batchClear: string;
    copiedBatch: (count: number) => string;
    batchFailed: string;
    noMatch: (query: string) => string;
    combosHeading: string;
    combosHint: string;
    copyCombo: (label: string) => string;
  };
  gaming: {
    yourName: string;
    namePlaceholder: string;
    lengthInfo: string;
    styleGroup: string;
    buildYourOwn: string;
    buildHint: (name: string) => string;
    decoration: string;
    letterStyle: string;
    noDecoration: string;
    decoOption: (left: string, right: string) => string;
    normalLetters: string;
    comboSaved: string;
    saveCombo: string;
    myCombos: string;
    applyCombo: string;
    removeCombo: string;
    copyCombo: string;
    copyAllSaved: string;
    savedNames: string;
    copySaved: (name: string) => string;
    removeSaved: (name: string) => string;
    saveName: (name: string) => string;
    removeName: (name: string) => string;
    emptyName: string;
    loadMore: string;
    generateNew: string;
  };
  styleNames: Record<TextStyleId, string>;
  styleCategoryNames: Record<StyleCategory, string>;
  vibeNames: Record<VibeStyleId, string>;
  symbolCats: Record<string, string>;
  platformTool: {
    stylesFit: (platform: string) => string;
    presetsHeading: (platform: string) => string;
    presetsWrap: string;
    openToPaste: (platform: string) => string;
  };
  platformPreview: {
    heading: (platform: string) => string;
    preview: string;
    close: string;
    previous: string;
    next: string;
    note: string;
    over: string;
    posts: string;
    followers: string;
    following: string;
    likes: string;
    follow: string;
    message: string;
    addFriend: string;
    friends: string;
    subscribers: string;
    subscribe: string;
  };
  symbolCatNotes: { invisible: string; blankLink: string };
  sections: {
    howToUse: string;
    examples: string;
    faq: string;
    related: string;
    whereShines: string;
    onPlatforms: string;
    howWorks: (topic: string) => string;
    openFull: string;
    exploreAll: string;
    browseSymbols: string;
    browseFancy: string;
    lookUses: (style: string) => string;
  };
  compat: { lead: string; body: string };
  stylePageSteps: [string, string, string];
}

const styleNamesEn: Record<TextStyleId, string> = {
  script: "Cursive",
  boldScript: "Bold Cursive",
  fraktur: "Gothic",
  boldFraktur: "Bold Gothic",
  bold: "Bold",
  italic: "Italic",
  boldItalic: "Bold Italic",
  sansBold: "Bold Sans",
  sansItalic: "Sans Italic",
  doubleStruck: "Outline",
  monospace: "Monospace",
  smallCaps: "Small Caps",
  superscript: "Tiny (Superscript)",
  subscript: "Subscript",
  bubble: "Bubble",
  circled: "Circled",
  parenthesized: "Parenthesized",
  squared: "Squared",
  fullwidth: "Full Width",
  upsideDown: "Upside Down",
  strike: "Strikethrough",
  underline: "Underline",
  doubleUnderline: "Double Underline",
  slash: "Slashed",
  boldStrike: "Bold Strikethrough",
  boldUnderline: "Bold Underline",
  italicUnderline: "Italic Underline",
  zalgoLight: "Glitch Light",
  zalgoMedium: "Glitch Medium",
  zalgoHeavy: "Glitch Heavy",
};

export const ui: Record<Locale, UiStrings> = {
  en: {
    languageLabel: "Language",
    localeSuggest: { message: "Your system language is {name}", action: "Switch" },
    nav: { fancy: "Fancy Text", gaming: "Gaming Names", symbols: "Symbols", home: "Home" },
    tools: {
      fancy: "Fancy Text Generator",
      gaming: "Gaming Name Generator",
      symbols: "Symbols & Decorators",
      blank: "Blank Space",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      about: "About",
      contact: "Contact",
      mcp: "For AI agents",
      tagline: "Stylish names, fonts & symbols — free to use, no sign-up needed.",
      copyright:
        "All results are Unicode characters, not installed fonts. This site runs entirely in your browser.",
      publishedBy: "Published by",
      lastUpdated: "Last updated",
      letterGenerators: "Letter styles",
      lookGenerators: "Looks",
      forPlatforms: "For platforms",
      site: "Site",
      fontsWord: "fonts",
      namesWord: "names",
      usesLetters: (style) => `Uses ${style} letters`,
      coverage: {
        letters: "Letters only",
        lettersDigits: "Letters and digits",
        partial: "Some letters stay plain",
        all: "Any character",
      },
    },
    common: {
      yourText: "Your text",
      clear: "Clear",
      reset: "Reset",
      charactersInfo: "characters",
      filterStyles: "Filter styles",
      searchStyles: "Search styles — try “cursive”, “tiny”, “glitch”...",
      all: "All",
      favorites: "Favorites",
      noFavorites: "No favorites yet — tap the star on any style to pin it here.",
      noStylesMatch: (query) => `No styles match “${query}” — try another word.`,
      typeToSee: (count) => `Type something above to see it in ${count} styles.`,
      partialBadge: "partial",
      copy: "Copy",
      copied: "Copied",
      copyStyle: (name) => `Copy ${name} style`,
      saveStyle: (name) => `Save ${name} to favorites`,
      removeStyle: (name) => `Remove ${name} from favorites`,
      downloadPng: (name) => `Download ${name} style as PNG`,
      savedAsPng: "Saved as PNG",
      pngFailed: "Couldn't save the image — try copying instead",
      shareToX: (name) => `Share ${name} style on X`,
      shareToThreads: (name) => `Share ${name} style on Threads`,
      shareToBluesky: (name) => `Share ${name} style on Bluesky`,
      shareToWhatsapp: (name) => `Share ${name} style on WhatsApp`,
      shareToTelegram: (name) => `Share ${name} style on Telegram`,
      shareMore: "More ways to share",
      copiedOpening: (dest) => `Copied. Opening ${dest}…`,
      transparentBg: "Transparent background",
      previewSize: "Preview size",
      copyAllFavorites: "Copy all favorites",
      copiedToClipboard: "Copied to clipboard",
      copyFailed: "Couldn't copy — select the text and copy manually",
      browserOnly: "Conversions run in your browser — nothing is uploaded.",
      stylePageInputLabel: "Your text",
      typeToConvert: "Type something above to see it converted.",
    },
    symbols: {
      searchLabel: "Search symbols",
      searchPlaceholder: "Try “heart”, “star”, “crown”...",
      countInfo: (count, category, query) =>
        `${count} symbols${category ? ` in ${category}` : ""}${query ? ` for “${query}”` : ""} · Click a symbol to copy it, or the + to build a batch.`,
      inCategory: (category) => ` in ${category}`,
      forQuery: (query) => ` for “${query}”`,
      batchHint: "Click a symbol to copy it, or the + to build a batch.",
      recent: "Recent",
      copySymbol: (label) => `Copy ${label}`,
      removeRecent: (label) => `Remove ${label} from recent`,
      addToBatch: (label) => `Add ${label} to batch`,
      removeFromBatch: (label) => `Remove ${label} from batch`,
      batchSelected: (count) => `${count} selected`,
      copyAll: "Copy all",
      batchClear: "Clear",
      copiedBatch: (count) => `Copied ${count} symbols`,
      batchFailed: "Couldn't copy — try smaller selections",
      noMatch: (query) => `No symbols match “${query}” — try another word like heart, star or crown.`,
      combosHeading: "Decorative combos",
      combosHint: "Ready-made decorations — click one to copy the whole thing.",
      copyCombo: (label) => `Copy ${label}`,
    },
    gaming: {
      yourName: "Your name",
      namePlaceholder: "Type a name...",
      lengthInfo: "Up to 24 characters — many games limit name length.",
      styleGroup: "Nickname style",
      buildYourOwn: "Build your own",
      buildHint: (name) => `Pick decorations and a letter style for “${name}”, then copy or save the combo.`,
      decoration: "Decoration",
      letterStyle: "Letter style",
      noDecoration: "No decoration",
      decoOption: (left, right) => `${left} name ${right}`,
      normalLetters: "Normal letters",
      comboSaved: "Combo saved to this device",
      saveCombo: "Save combo",
      myCombos: "My combos",
      applyCombo: "Apply this combo to the builder",
      removeCombo: "Remove this combo",
      copyCombo: "Copy your custom combo",
      copyAllSaved: "Copy all",
      savedNames: "Saved names",
      copySaved: (name) => `Copy ${name}`,
      removeSaved: (name) => `Remove ${name} from saved names`,
      saveName: (name) => `Save ${name}`,
      removeName: (name) => `Remove ${name} from saved names`,
      emptyName: "Type a name above to see nickname ideas.",
      loadMore: "Load more",
      generateNew: "Generate new combinations",
    },
    styleNames: styleNamesEn,
    styleCategoryNames: {
      script: "Script",
      gothic: "Gothic",
      bold: "Bold & Italic",
      sans: "Sans & Mono",
      small: "Small & Tiny",
      enclosed: "Bubble & Circled",
      wide: "Wide",
      flipped: "Upside Down",
      effects: "Effects & Glitch",
    },
    vibeNames: {
      cool: "Cool",
      dark: "Dark",
      cute: "Cute",
      pro: "Pro",
      minimal: "Minimal",
    },
    symbolCats: {
      hearts: "Hearts",
      stars: "Stars",
      arrows: "Arrows",
      crowns: "Crowns",
      flowers: "Flowers",
      wings: "Wings & Bows",
      brackets: "Brackets",
      lines: "Lines & Borders",
      faces: "Faces",
      vibes: "Music & Vibes",
      checks: "Check & Cross",
      math: "Math",
      greek: "Greek",
      currency: "Currency",
      numbers: "Numbers & Roman",
      dots: "Dots & Marks",
      invisible: "Invisible",
    },
    platformTool: {
      stylesFit: (platform) => `Styles that fit ${platform}`,
      presetsHeading: (platform) => `${platform} presets`,
      presetsWrap: "Each preset wraps the text you typed above.",
      openToPaste: (platform) => `Copied — open ${platform} to paste`,
    },
    platformPreview: {
      heading: (platform) => `Preview on ${platform}`,
      preview: "Preview",
      close: "Close",
      previous: "Previous",
      next: "Next",
      note: "Drawn in your browser to match the profile layout. The real app uses its own font, so paste the text there and check it before you rely on it.",
      over: "over the usual limit",
      posts: "posts",
      followers: "followers",
      following: "following",
      likes: "likes",
      follow: "Follow",
      message: "Message",
      addFriend: "Add Friend",
      friends: "Friends",
      subscribers: "subscribers",
      subscribe: "Subscribe",
    },
    symbolCatNotes: {
      invisible:
        "These characters are invisible. They are famously used for blank game names: copy one and replace your whole name with it (some games still reject blank names — test first). The dotted circle just marks where the hidden character is.",
      blankLink:
        "Copy a run of Hangul filler, Braille blank, or ideographic space, or place that blank between fancy letters.",
    },
    sections: {
      howToUse: "How to use it",
      examples: "Examples",
      faq: "FAQ",
      related: "Related tools",
      whereShines: "Where it shines",
      onPlatforms: "Using it on platforms",
      howWorks: (topic) => `How ${topic} text works`,
      openFull: "Open the full Fancy Text Generator →",
      exploreAll: "Explore all FancyFont tools →",
      browseSymbols: "Browse 376 symbols to build your own look.",
      browseFancy: "Browse all 30 styles in one tool and copy any of them.",
      lookUses: (style) =>
        `This look uses ${style} letters. The decorations appear only on this page.`,
    },
    compat: {
      lead: "Heads up:",
      body: "These styles use Unicode characters, not installed font files. Display and availability may vary by device, app, game, and platform rules. Please test your result where you plan to use it.",
    },
    stylePageSteps: [
      "Type your text into the box above — the preview updates as you type.",
      "Copy the result with one tap, or download it as a PNG image.",
      "Paste it wherever you want the look — then check it renders the way you expect.",
    ],
  },
  es: {
    languageLabel: "Idioma",
    localeSuggest: { message: "El idioma del sistema es {name}", action: "Cambiar" },
    nav: { fancy: "Letras bonitas", gaming: "Nombres gamer", symbols: "Símbolos", home: "Inicio" },
    tools: {
      fancy: "Generador de letras bonitas",
      gaming: "Generador de nombres para juegos",
      symbols: "Símbolos y decoración",
      blank: "Espacio en blanco",
      privacy: "Política de privacidad",
      terms: "Términos de uso",
      about: "Quiénes somos",
      contact: "Contacto",
      mcp: "Para agentes de IA",
      tagline: "Nombres, letras y símbolos con estilo — gratis y sin registro.",
      copyright:
        "Todos los resultados son caracteres Unicode, no fuentes instaladas. Este sitio funciona por completo en tu navegador.",
      publishedBy: "Publicado por",
      lastUpdated: "Última actualización",
      letterGenerators: "Estilos de letra",
      lookGenerators: "Apariencias",
      forPlatforms: "Por plataforma",
      site: "Sitio",
      fontsWord: "fuentes",
      namesWord: "nombres",
      usesLetters: (style) => `Usa letras ${style}`,
      coverage: {
        letters: "Solo letras",
        lettersDigits: "Letras y números",
        partial: "Algunas letras se quedan igual",
        all: "Cualquier carácter",
      },
    },
    common: {
      yourText: "Tu texto",
      clear: "Borrar",
      reset: "Restaurar",
      charactersInfo: "caracteres",
      filterStyles: "Filtrar estilos",
      searchStyles: "Busca estilos — prueba “cursiva”, “pequeño”, “glitch”...",
      all: "Todos",
      favorites: "Favoritos",
      noFavorites: "Aún no hay favoritos — toca la estrella de cualquier estilo para fijarlo aquí.",
      noStylesMatch: (query) => `Ningún estilo coincide con “${query}” — prueba otra palabra.`,
      typeToSee: (count) => `Escribe algo arriba para verlo en ${count} estilos.`,
      partialBadge: "parcial",
      copy: "Copiar",
      copied: "Copiado",
      copyStyle: (name) => `Copiar estilo ${name}`,
      saveStyle: (name) => `Guardar ${name} en favoritos`,
      removeStyle: (name) => `Quitar ${name} de favoritos`,
      downloadPng: (name) => `Descargar estilo ${name} como PNG`,
      savedAsPng: "Imagen PNG guardada",
      pngFailed: "No se pudo guardar la imagen — prueba copiando el texto",
      shareToX: (name) => `Compartir estilo ${name} en X`,
      shareToThreads: (name) => `Compartir estilo ${name} en Threads`,
      shareToBluesky: (name) => `Compartir estilo ${name} en Bluesky`,
      shareToWhatsapp: (name) => `Compartir estilo ${name} en WhatsApp`,
      shareToTelegram: (name) => `Compartir estilo ${name} en Telegram`,
      shareMore: "Más opciones para compartir",
      copiedOpening: (dest) => `Copiado. Abriendo ${dest}…`,
      transparentBg: "Fondo transparente",
      previewSize: "Tamaño de vista previa",
      copyAllFavorites: "Copiar todos los favoritos",
      copiedToClipboard: "Copiado al portapapeles",
      copyFailed: "No se pudo copiar — selecciona el texto y cópialo a mano",
      browserOnly: "Las conversiones ocurren en tu navegador — nada se envía a ningún servidor.",
      stylePageInputLabel: "Tu texto",
      typeToConvert: "Escribe algo arriba para verlo convertido.",
    },
    symbols: {
      searchLabel: "Buscar símbolos",
      searchPlaceholder: "Prueba “corazón”, “estrella”, “corona”...",
      countInfo: (count, category, query) =>
        `${count} símbolos${category ? ` en ${category}` : ""}${query ? ` para “${query}”` : ""} · Toca un símbolo para copiarlo, o el + para armar un lote.`,
      inCategory: (category) => ` en ${category}`,
      forQuery: (query) => ` para “${query}”`,
      batchHint: "Toca un símbolo para copiarlo, o el + para armar un lote.",
      recent: "Recientes",
      copySymbol: (label) => `Copiar ${label}`,
      removeRecent: (label) => `Quitar ${label} de recientes`,
      addToBatch: (label) => `Añadir ${label} al lote`,
      removeFromBatch: (label) => `Quitar ${label} del lote`,
      batchSelected: (count) => `${count} seleccionados`,
      copyAll: "Copiar todo",
      batchClear: "Borrar",
      copiedBatch: (count) => `${count} símbolos copiados`,
      batchFailed: "No se pudo copiar — prueba con selecciones más pequeñas",
      noMatch: (query) => `Ningún símbolo coincide con “${query}” — prueba con corazón, estrella o corona.`,
      combosHeading: "Combinaciones decorativas",
      combosHint: "Decoraciones listas para usar — toca una para copiarla completa.",
      copyCombo: (label) => `Copiar ${label}`,
    },
    gaming: {
      yourName: "Tu nombre",
      namePlaceholder: "Escribe un nombre...",
      lengthInfo: "Hasta 24 caracteres — muchos juegos limitan el largo del nombre.",
      styleGroup: "Estilo del apodo",
      buildYourOwn: "Crea el tuyo",
      buildHint: (name) => `Elige decoraciones y un estilo de letra para “${name}”, y copia o guarda la combinación.`,
      decoration: "Decoración",
      letterStyle: "Estilo de letra",
      noDecoration: "Sin decoración",
      decoOption: (left, right) => `${left} nombre ${right}`,
      normalLetters: "Letras normales",
      comboSaved: "Combinación guardada en este dispositivo",
      saveCombo: "Guardar combinación",
      myCombos: "Mis combinaciones",
      applyCombo: "Aplicar esta combinación al creador",
      removeCombo: "Eliminar esta combinación",
      copyCombo: "Copiar tu combinación",
      copyAllSaved: "Copiar todos",
      savedNames: "Nombres guardados",
      copySaved: (name) => `Copiar ${name}`,
      removeSaved: (name) => `Quitar ${name} de nombres guardados`,
      saveName: (name) => `Guardar ${name}`,
      removeName: (name) => `Quitar ${name} de nombres guardados`,
      emptyName: "Escribe un nombre arriba para ver ideas de apodos.",
      loadMore: "Cargar más",
      generateNew: "Generar nuevas combinaciones",
    },
    styleNames: {
      ...styleNamesEn,
      script: "Cursiva",
      boldScript: "Cursiva negrita",
      fraktur: "Gótica",
      boldFraktur: "Gótica negrita",
      bold: "Negrita",
      italic: "Itálica",
      boldItalic: "Negrita itálica",
      sansBold: "Negrita sans",
      sansItalic: "Sans itálica",
      doubleStruck: "Contorno",
      monospace: "Monoespaciada",
      smallCaps: "Versalitas",
      superscript: "Mini (superíndice)",
      subscript: "Subíndice",
      bubble: "Burbuja",
      circled: "Encerrada",
      parenthesized: "Entre paréntesis",
      squared: "Cuadrada",
      fullwidth: "Ancha",
      upsideDown: "Al revés",
      strike: "Tachado",
      underline: "Subrayado",
      doubleUnderline: "Doble subrayado",
      slash: "Con barra",
      boldStrike: "Negrita tachada",
      boldUnderline: "Negrita subrayada",
      italicUnderline: "Itálica subrayada",
      zalgoLight: "Glitch suave",
      zalgoMedium: "Glitch medio",
      zalgoHeavy: "Glitch intenso",
    },
    styleCategoryNames: {
      script: "Cursivas",
      gothic: "Góticas",
      bold: "Negrita e itálica",
      sans: "Sans y mono",
      small: "Pequeñas",
      enclosed: "Burbuja y círculos",
      wide: "Anchas",
      flipped: "Al revés",
      effects: "Efectos y glitch",
    },
    vibeNames: {
      cool: "Cool",
      dark: "Oscura",
      cute: "Tierna",
      pro: "Pro",
      minimal: "Minimalista",
    },
    symbolCats: {
      hearts: "Corazones",
      stars: "Estrellas",
      arrows: "Flechas",
      crowns: "Coronas",
      flowers: "Flores",
      wings: "Alas y lazos",
      brackets: "Corchetes",
      lines: "Líneas y bordes",
      faces: "Caritas",
      vibes: "Música y vibra",
      checks: "Vistos y cruces",
      math: "Matemáticas",
      greek: "Griego",
      currency: "Monedas",
      numbers: "Números y romanos",
      dots: "Puntos y marcas",
      invisible: "Invisibles",
    },
    platformTool: {
      stylesFit: (platform) => `Estilos que van con ${platform}`,
      presetsHeading: (platform) => `Presets de ${platform}`,
      presetsWrap: "Cada preset envuelve el texto que escribiste arriba.",
      openToPaste: (platform) => `Copiado — abre ${platform} para pegar`,
    },
    platformPreview: {
      heading: (platform) => `Vista previa en ${platform}`,
      preview: "Vista previa",
      close: "Cerrar",
      previous: "Anterior",
      next: "Siguiente",
      note: "Se dibuja en tu navegador con la disposición del perfil. La app real usa su propia fuente: pega el texto allí y compruébalo antes de fiarte.",
      over: "supera el límite habitual",
      posts: "publicaciones",
      followers: "seguidores",
      following: "seguidos",
      likes: "me gusta",
      follow: "Seguir",
      message: "Mensaje",
      addFriend: "Agregar",
      friends: "Amigos",
      subscribers: "suscriptores",
      subscribe: "Suscribirse",
    },
    symbolCatNotes: {
      invisible:
        "Estos caracteres son invisibles. Se usan mucho para nombres vacíos en juegos: copia uno y reemplaza con él todo tu nombre (algunos juegos siguen rechazando nombres vacíos — prueba antes). El círculo punteado solo marca dónde está el carácter oculto.",
      blankLink:
        "Copia una tanda de relleno hangul, espacio braille o espacio ideográfico, o colócalo entre letras con estilo.",
    },
    sections: {
      howToUse: "Cómo usarlo",
      examples: "Ejemplos",
      faq: "Preguntas frecuentes",
      related: "Herramientas relacionadas",
      whereShines: "Dónde luce",
      onPlatforms: "Cómo usarlo en plataformas",
      howWorks: (topic) => `Cómo funciona el texto ${topic}`,
      openFull: "Abrir el generador completo →",
      exploreAll: "Explorar todas las herramientas de FancyFont →",
      browseSymbols: "376 símbolos para armar tu propio look.",
      browseFancy: "Los 30 estilos en una sola herramienta, cópialos todos.",
      lookUses: (style) =>
        `Este look usa letras ${style}. Las decoraciones solo están en esta página.`,
    },
    compat: {
      lead: "Atención:",
      body: "Estos estilos usan caracteres Unicode, no archivos de fuentes instaladas. La visualización y disponibilidad varían según el dispositivo, la app, el juego y las reglas de cada plataforma. Prueba tu resultado donde lo vayas a usar.",
    },
    stylePageSteps: [
      "Escribe tu texto en el cuadro de arriba — la vista previa se actualiza mientras escribes.",
      "Copia el resultado con un toque o descárgalo como imagen PNG.",
      "Pégalo donde quieras el look — y revisa que se vea como esperas.",
    ],
  },
  "pt-br": {
    languageLabel: "Idioma",
    localeSuggest: { message: "O idioma do sistema é {name}", action: "Mudar" },
    nav: {
      fancy: "Letras bonitas",
      gaming: "Nomes de jogo",
      symbols: "Símbolos",
      home: "Início",
    },
    tools: {
      fancy: "Gerador de letras bonitas",
      gaming: "Gerador de nomes para jogos",
      symbols: "Símbolos e decoração",
      blank: "Espaço em branco",
      privacy: "Política de Privacidade",
      terms: "Termos de uso",
      about: "Sobre",
      contact: "Contato",
      mcp: "Para agentes de IA",
      tagline: "Nomes, letras e símbolos estilosos — grátis e sem cadastro.",
      copyright:
        "Todos os resultados são caracteres Unicode, não fontes instaladas. Este site funciona inteiramente no seu navegador.",
      publishedBy: "Publicado por",
      lastUpdated: "Última atualização",
      letterGenerators: "Estilos de letra",
      lookGenerators: "Visuais",
      forPlatforms: "Por plataforma",
      site: "Site",
      fontsWord: "fontes",
      namesWord: "nomes",
      usesLetters: (style) => `Usa letras ${style}`,
      coverage: {
        letters: "Só letras",
        lettersDigits: "Letras e números",
        partial: "Algumas letras ficam iguais",
        all: "Qualquer caractere",
      },
    },
    common: {
      yourText: "Seu texto",
      clear: "Limpar",
      reset: "Restaurar",
      charactersInfo: "caracteres",
      filterStyles: "Filtrar estilos",
      searchStyles: "Busque estilos — teste “cursiva”, “pequena”, “glitch”...",
      all: "Todos",
      favorites: "Favoritos",
      noFavorites: "Nenhum favorito ainda — toque na estrela de um estilo para fixá-lo aqui.",
      noStylesMatch: (query) => `Nenhum estilo corresponde a “${query}” — tente outra palavra.`,
      typeToSee: (count) => `Digite algo acima para ver em ${count} estilos.`,
      partialBadge: "parcial",
      copy: "Copiar",
      copied: "Copiado",
      copyStyle: (name) => `Copiar estilo ${name}`,
      saveStyle: (name) => `Salvar ${name} nos favoritos`,
      removeStyle: (name) => `Remover ${name} dos favoritos`,
      downloadPng: (name) => `Baixar estilo ${name} como PNG`,
      savedAsPng: "Imagem PNG salva",
      pngFailed: "Não foi possível salvar a imagem — tente copiar o texto",
      shareToX: (name) => `Compartilhar estilo ${name} no X`,
      shareToThreads: (name) => `Compartilhar estilo ${name} no Threads`,
      shareToBluesky: (name) => `Compartilhar estilo ${name} no Bluesky`,
      shareToWhatsapp: (name) => `Compartilhar estilo ${name} no WhatsApp`,
      shareToTelegram: (name) => `Compartilhar estilo ${name} no Telegram`,
      shareMore: "Mais opções de compartilhamento",
      copiedOpening: (dest) => `Copiado. Abrindo ${dest}…`,
      transparentBg: "Fundo transparente",
      previewSize: "Tamanho da prévia",
      copyAllFavorites: "Copiar todos os favoritos",
      copiedToClipboard: "Copiado para a área de transferência",
      copyFailed: "Não foi possível copiar — selecione o texto e copie manualmente",
      browserOnly: "As conversões acontecem no seu navegador — nada é enviado a servidores.",
      stylePageInputLabel: "Seu texto",
      typeToConvert: "Digite algo acima para ver a conversão.",
    },
    symbols: {
      searchLabel: "Buscar símbolos",
      searchPlaceholder: "Teste “coração”, “estrela”, “coroa”...",
      countInfo: (count, category, query) =>
        `${count} símbolos${category ? ` em ${category}` : ""}${query ? ` para “${query}”` : ""} · Toque em um símbolo para copiar, ou no + para montar um lote.`,
      inCategory: (category) => ` em ${category}`,
      forQuery: (query) => ` para “${query}”`,
      batchHint: "Toque em um símbolo para copiar, ou no + para montar um lote.",
      recent: "Recentes",
      copySymbol: (label) => `Copiar ${label}`,
      removeRecent: (label) => `Remover ${label} dos recentes`,
      addToBatch: (label) => `Adicionar ${label} ao lote`,
      removeFromBatch: (label) => `Remover ${label} do lote`,
      batchSelected: (count) => `${count} selecionados`,
      copyAll: "Copiar tudo",
      batchClear: "Limpar",
      copiedBatch: (count) => `${count} símbolos copiados`,
      batchFailed: "Não foi possível copiar — tente seleções menores",
      noMatch: (query) => `Nenhum símbolo corresponde a “${query}” — teste coração, estrela ou coroa.`,
      combosHeading: "Combinações decorativas",
      combosHint: "Decorações prontas — toque em uma para copiar tudo.",
      copyCombo: (label) => `Copiar ${label}`,
    },
    gaming: {
      yourName: "Seu nome",
      namePlaceholder: "Digite um nome...",
      lengthInfo: "Até 24 caracteres — muitos jogos limitam o tamanho do nome.",
      styleGroup: "Estilo do apelido",
      buildYourOwn: "Crie o seu",
      buildHint: (name) => `Escolha decorações e um estilo de letra para “${name}”, e copie ou salve a combinação.`,
      decoration: "Decoração",
      letterStyle: "Estilo de letra",
      noDecoration: "Sem decoração",
      decoOption: (left, right) => `${left} nome ${right}`,
      normalLetters: "Letras normais",
      comboSaved: "Combinação salva neste dispositivo",
      saveCombo: "Salvar combinação",
      myCombos: "Minhas combinações",
      applyCombo: "Aplicar esta combinação ao criador",
      removeCombo: "Remover esta combinação",
      copyCombo: "Copiar sua combinação",
      copyAllSaved: "Copiar todos",
      savedNames: "Nomes salvos",
      copySaved: (name) => `Copiar ${name}`,
      removeSaved: (name) => `Remover ${name} dos nomes salvos`,
      saveName: (name) => `Salvar ${name}`,
      removeName: (name) => `Remover ${name} dos nomes salvos`,
      emptyName: "Digite um nome acima para ver ideias de apelidos.",
      loadMore: "Carregar mais",
      generateNew: "Gerar novas combinações",
    },
    styleNames: {
      ...styleNamesEn,
      script: "Cursiva",
      boldScript: "Cursiva negrito",
      fraktur: "Gótica",
      boldFraktur: "Gótica negrito",
      bold: "Negrito",
      italic: "Itálico",
      boldItalic: "Negrito itálico",
      sansBold: "Negrito sans",
      sansItalic: "Sans itálico",
      doubleStruck: "Contorno",
      monospace: "Monoespaçada",
      smallCaps: "Versalete",
      superscript: "Mini (sobrescrito)",
      subscript: "Subscrito",
      bubble: "Bolha",
      circled: "Circulado",
      parenthesized: "Entre parênteses",
      squared: "Quadrado",
      fullwidth: "Largo",
      upsideDown: "De cabeça para baixo",
      strike: "Riscado",
      underline: "Sublinhado",
      doubleUnderline: "Sublinhado duplo",
      slash: "Com barra",
      boldStrike: "Negrito riscado",
      boldUnderline: "Negrito sublinhado",
      italicUnderline: "Itálico sublinhado",
      zalgoLight: "Glitch leve",
      zalgoMedium: "Glitch médio",
      zalgoHeavy: "Glitch intenso",
    },
    styleCategoryNames: {
      script: "Cursivas",
      gothic: "Góticas",
      bold: "Negrito e itálico",
      sans: "Sans e mono",
      small: "Pequenas",
      enclosed: "Bolha e círculos",
      wide: "Largas",
      flipped: "De cabeça para baixo",
      effects: "Efeitos e glitch",
    },
    vibeNames: {
      cool: "Cool",
      dark: "Sombria",
      cute: "Fofo",
      pro: "Pro",
      minimal: "Minimalista",
    },
    symbolCats: {
      hearts: "Corações",
      stars: "Estrelas",
      arrows: "Setas",
      crowns: "Coroas",
      flowers: "Flores",
      wings: "Asas e laços",
      brackets: "Colchetes",
      lines: "Linhas e bordas",
      faces: "Carinhas",
      vibes: "Música e vibe",
      checks: "Vistos e cruzes",
      math: "Matemática",
      greek: "Grego",
      currency: "Moedas",
      numbers: "Números e romanos",
      dots: "Pontos e marcas",
      invisible: "Invisíveis",
    },
    platformTool: {
      stylesFit: (platform) => `Estilos que combinam com o ${platform}`,
      presetsHeading: (platform) => `Presets do ${platform}`,
      presetsWrap: "Cada preset envolve o texto que você digitou acima.",
      openToPaste: (platform) => `Copiado — abra o ${platform} para colar`,
    },
    platformPreview: {
      heading: (platform) => `Prévia no ${platform}`,
      preview: "Prévia",
      close: "Fechar",
      previous: "Anterior",
      next: "Próximo",
      note: "Desenhado no seu navegador com a disposição do perfil. O app real usa a fonte dele: cole o texto lá e confira antes de confiar.",
      over: "acima do limite usual",
      posts: "publicações",
      followers: "seguidores",
      following: "seguindo",
      likes: "curtidas",
      follow: "Seguir",
      message: "Mensagem",
      addFriend: "Adicionar",
      friends: "Amigos",
      subscribers: "inscritos",
      subscribe: "Inscrever-se",
    },
    symbolCatNotes: {
      invisible:
        "Esses caracteres são invisíveis. São famosos para nomes vazios em jogos: copie um e substitua todo o seu nome por ele (alguns jogos ainda recusam nomes vazios — teste antes). O círculo pontilhado só marca onde está o caractere oculto.",
      blankLink:
        "Copie uma sequência de preenchimento hangul, espaço braille ou espaço ideográfico, ou coloque esse espaço entre letras estilizadas.",
    },
    sections: {
      howToUse: "Como usar",
      examples: "Exemplos",
      faq: "Perguntas frequentes",
      related: "Ferramentas relacionadas",
      whereShines: "Onde brilha",
      onPlatforms: "Como usar em plataformas",
      howWorks: (topic) => `Como funciona o texto ${topic}`,
      openFull: "Abrir o gerador completo →",
      exploreAll: "Explorar todas as ferramentas do FancyFont →",
      browseSymbols: "376 símbolos para montar seu próprio visual.",
      browseFancy: "Os 30 estilos em uma ferramenta só, copie qualquer um.",
      lookUses: (style) =>
        `Este visual usa letras ${style}. As decorações só aparecem nesta página.`,
    },
    compat: {
      lead: "Atenção:",
      body: "Estes estilos usam caracteres Unicode, não arquivos de fontes instaladas. A exibição e a disponibilidade variam conforme o aparelho, o app, o jogo e as regras da plataforma. Teste seu resultado onde você for usar.",
    },
    stylePageSteps: [
      "Digite seu texto na caixa acima — a prévia atualiza enquanto você digita.",
      "Copie o resultado com um toque ou baixe como imagem PNG.",
      "Cole onde quiser o visual — e confira se ficou como esperava.",
    ],
  },
  "zh-cn": {
    languageLabel: "语言",
    localeSuggest: { message: "系统语言是{name}", action: "切换" },
    nav: { fancy: "个性字体", gaming: "游戏昵称", symbols: "特殊符号", home: "首页" },
    tools: {
      fancy: "个性字体生成器",
      gaming: "游戏昵称生成器",
      symbols: "特殊符号大全",
      blank: "空白复制",
      privacy: "隐私政策",
      terms: "使用条款",
      about: "关于本站",
      contact: "联系我们",
      mcp: "给 AI 代理",
      tagline: "个性昵称、花体字与特殊符号——免费使用，无需注册。",
      copyright:
        "所有结果均为 Unicode 字符，而非已安装的字体文件。本网站完全在你的浏览器中运行。",
      publishedBy: "发布者",
      lastUpdated: "最后更新",
      letterGenerators: "字母",
      lookGenerators: "外观",
      forPlatforms: "按平台",
      site: "本站",
      fontsWord: "字体",
      namesWord: "名字",
      usesLetters: (style) => `用的是${style}字母`,
      coverage: {
        letters: "只改字母",
        lettersDigits: "字母和数字",
        partial: "部分字母保持原样",
        all: "任何字符",
      },
    },
    common: {
      yourText: "你的文字",
      clear: "清空",
      reset: "还原",
      charactersInfo: "个字符",
      filterStyles: "筛选样式",
      searchStyles: "搜索样式——试试“花体”“上标”“乱码”...",
      all: "全部",
      favorites: "收藏",
      noFavorites: "还没有收藏——点击任意样式旁的星标即可固定在这里。",
      noStylesMatch: (query) => `没有匹配“${query}”的样式——换个词试试。`,
      typeToSee: (count) => `在上方输入文字，即可看到 ${count} 种样式效果。`,
      partialBadge: "部分支持",
      copy: "复制",
      copied: "已复制",
      copyStyle: (name) => `复制${name}样式`,
      saveStyle: (name) => `收藏${name}样式`,
      removeStyle: (name) => `取消收藏${name}样式`,
      downloadPng: (name) => `将${name}样式下载为 PNG`,
      savedAsPng: "PNG 图片已保存",
      pngFailed: "图片保存失败——请改为手动复制文字",
      shareToX: (name) => `分享${name}样式到 X`,
      shareToThreads: (name) => `分享${name}样式到 Threads`,
      shareToBluesky: (name) => `分享${name}样式到 Bluesky`,
      shareToWhatsapp: (name) => `分享${name}样式到 WhatsApp`,
      shareToTelegram: (name) => `分享${name}样式到 Telegram`,
      shareMore: "更多分享方式",
      copiedOpening: (dest) => `已复制，正在打开 ${dest}`,
      transparentBg: "透明背景",
      previewSize: "预览字号",
      copyAllFavorites: "复制全部收藏",
      copiedToClipboard: "已复制到剪贴板",
      copyFailed: "复制失败——请选中文本手动复制",
      browserOnly: "转换全部在你的浏览器中完成——不会上传任何内容。",
      stylePageInputLabel: "你的文字",
      typeToConvert: "在上方输入文字即可看到转换效果。",
    },
    symbols: {
      searchLabel: "搜索符号",
      searchPlaceholder: "试试“爱心”“星星”“皇冠”...",
      countInfo: (count, category, query) =>
        `${count} 个符号${category ? `（${category}）` : ""}${query ? `，匹配“${query}”` : ""} · 点击符号即复制，点 + 可攒一批。`,
      inCategory: (category) => `（${category}）`,
      forQuery: (query) => `，匹配“${query}”`,
      batchHint: "点击符号即复制，点 + 可攒一批。",
      recent: "最近使用",
      copySymbol: (label) => `复制${label}`,
      removeRecent: (label) => `从最近使用中移除${label}`,
      addToBatch: (label) => `将${label}加入批量`,
      removeFromBatch: (label) => `从批量中移除${label}`,
      batchSelected: (count) => `已选 ${count} 个`,
      copyAll: "全部复制",
      batchClear: "清空",
      copiedBatch: (count) => `已复制 ${count} 个符号`,
      batchFailed: "复制失败——试试减少选择数量",
      noMatch: (query) => `没有匹配“${query}”的符号——试试爱心、星星或皇冠。`,
      combosHeading: "装饰组合",
      combosHint: "现成的装饰搭配——点击即整条复制。",
      copyCombo: (label) => `复制${label}`,
    },
    gaming: {
      yourName: "你的名字",
      namePlaceholder: "输入一个名字...",
      lengthInfo: "最多 24 个字符——很多游戏会限制名字长度。",
      styleGroup: "昵称风格",
      buildYourOwn: "自定义搭配",
      buildHint: (name) => `为“${name}”选择装饰和字母样式，然后复制或保存组合。`,
      decoration: "装饰",
      letterStyle: "字母样式",
      noDecoration: "不加装饰",
      decoOption: (left, right) => `${left}名字${right}`,
      normalLetters: "普通字母",
      comboSaved: "组合已保存到本设备",
      saveCombo: "保存组合",
      myCombos: "我的组合",
      applyCombo: "将此组合应用到搭配器",
      removeCombo: "删除此组合",
      copyCombo: "复制你的自定义组合",
      copyAllSaved: "全部复制",
      savedNames: "已保存的名字",
      copySaved: (name) => `复制${name}`,
      removeSaved: (name) => `从已保存中移除${name}`,
      saveName: (name) => `保存${name}`,
      removeName: (name) => `从已保存中移除${name}`,
      emptyName: "在上方输入名字，即可看到昵称创意。",
      loadMore: "加载更多",
      generateNew: "换一批组合",
    },
    styleNames: {
      script: "花体",
      boldScript: "粗花体",
      fraktur: "哥特",
      boldFraktur: "粗哥特",
      bold: "粗体",
      italic: "斜体",
      boldItalic: "粗斜体",
      sansBold: "无衬线粗体",
      sansItalic: "无衬线斜体",
      doubleStruck: "空心体",
      monospace: "等宽",
      smallCaps: "小型大写",
      superscript: "上标小字",
      subscript: "下标小字",
      bubble: "气泡",
      circled: "圆圈字",
      parenthesized: "括号字",
      squared: "方块字",
      fullwidth: "全角",
      upsideDown: "颠倒字",
      strike: "删除线",
      underline: "下划线",
      doubleUnderline: "双下划线",
      slash: "斜线删除",
      boldStrike: "粗体删除线",
      boldUnderline: "粗体下划线",
      italicUnderline: "斜体下划线",
      zalgoLight: "轻乱码",
      zalgoMedium: "中乱码",
      zalgoHeavy: "重乱码",
    },
    styleCategoryNames: {
      script: "花体",
      gothic: "哥特",
      bold: "粗体与斜体",
      sans: "无衬线与等宽",
      small: "小型字",
      enclosed: "气泡与圈字",
      wide: "全角",
      flipped: "颠倒",
      effects: "特效与乱码",
    },
    vibeNames: {
      cool: "酷炫",
      dark: "暗黑",
      cute: "可爱",
      pro: "竞技",
      minimal: "极简",
    },
    symbolCats: {
      hearts: "爱心",
      stars: "星星",
      arrows: "箭头",
      crowns: "皇冠",
      flowers: "花朵",
      wings: "翅膀与蝴蝶结",
      brackets: "括号",
      lines: "线条与边框",
      faces: "表情",
      vibes: "音乐与氛围",
      checks: "对勾与叉",
      math: "数学",
      greek: "希腊字母",
      currency: "货币",
      numbers: "数字与罗马",
      dots: "圆点与符号",
      invisible: "隐形字符",
    },
    platformTool: {
      stylesFit: (platform) => `适合${platform}的样式`,
      presetsHeading: (platform) => `${platform}预设`,
      presetsWrap: "每个预设会包裹你在上方输入的文字。",
      openToPaste: (platform) => `已复制——打开${platform}去粘贴`,
    },
    platformPreview: {
      heading: (platform) => `在 ${platform} 上的预览`,
      preview: "预览",
      close: "关闭",
      previous: "上一个",
      next: "下一个",
      note: "按资料页的版式画在你的浏览器里。真正的应用用自己的字体，把文字粘贴过去再确认一次。",
      over: "超过常见字数",
      posts: "帖子",
      followers: "粉丝",
      following: "关注",
      likes: "赞",
      follow: "关注",
      message: "发消息",
      addFriend: "加好友",
      friends: "好友",
      subscribers: "位订阅者",
      subscribe: "订阅",
    },
    symbolCatNotes: {
      invisible:
        "这些字符本身不可见，最出名的用法是游戏空白名：复制一个，用它替换整个名字（部分游戏仍然拒绝空白名——请先测试）。虚线圆圈只是用来标记隐藏字符的位置。",
      blankLink: "要复制一串韩文填充符、盲文空位或表意空格，或把这种空白夹进花体字母，打开空白复制页。",
    },
    sections: {
      howToUse: "使用方法",
      examples: "示例",
      faq: "常见问题",
      related: "相关工具",
      whereShines: "适用场景",
      onPlatforms: "在平台上的使用",
      howWorks: (topic) => `${topic}文字的原理`,
      openFull: "打开完整的个性字体生成器 →",
      exploreAll: "探索 FancyFont 全部工具 →",
      browseSymbols: "浏览 376 个符号，搭配你自己的风格。",
      browseFancy: "30 种样式集于一处，任意复制。",
      lookUses: (style) => `这一页用的是${style}字母，装饰只出现在这一页。`,
    },
    compat: {
      lead: "注意：",
      body: "这些效果使用 Unicode 字符，而非已安装的字体文件。显示效果和可用性可能因设备、应用、游戏及平台规则而异，请在实际使用位置测试。",
    },
    stylePageSteps: [
      "在上方输入框输入你的文字——预览会随输入实时更新。",
      "点一下即可复制结果，或下载为 PNG 图片。",
      "粘贴到任何你想用它的地方——记得确认显示效果符合预期。",
    ],
  },
  id: {
    languageLabel: "Bahasa",
    localeSuggest: { message: "Bahasa sistem adalah {name}", action: "Ganti" },
    nav: { fancy: "Huruf Keren", gaming: "Nama Game", symbols: "Simbol", home: "Beranda" },
    tools: {
      fancy: "Generator Huruf Keren",
      gaming: "Generator Nama Game",
      symbols: "Simbol & Dekorasi",
      blank: "Spasi kosong",
      privacy: "Kebijakan Privasi",
      terms: "Ketentuan penggunaan",
      about: "Tentang",
      contact: "Kontak",
      mcp: "Untuk agen AI",
      tagline: "Nama, huruf, dan simbol keren — gratis tanpa daftar.",
      copyright:
        "Semua hasil adalah karakter Unicode, bukan font yang terpasang. Situs ini berjalan sepenuhnya di browser kamu.",
      publishedBy: "Diterbitkan oleh",
      lastUpdated: "Terakhir diperbarui",
      letterGenerators: "Huruf",
      lookGenerators: "Tampilan",
      forPlatforms: "Per platform",
      site: "Situs",
      fontsWord: "font",
      namesWord: "nama",
      usesLetters: (style) => `Pakai huruf ${style}`,
      coverage: {
        letters: "Huruf saja",
        lettersDigits: "Huruf dan angka",
        partial: "Sebagian huruf tetap biasa",
        all: "Karakter apa pun",
      },
    },
    common: {
      yourText: "Teks kamu",
      clear: "Hapus",
      reset: "Reset",
      charactersInfo: "karakter",
      filterStyles: "Filter gaya",
      searchStyles: "Cari gaya — coba “cursive”, “tiny”, “glitch”...",
      all: "Semua",
      favorites: "Favorit",
      noFavorites: "Belum ada favorit — ketuk bintang pada gaya untuk menyimpannya di sini.",
      noStylesMatch: (query) => `Tidak ada gaya yang cocok dengan “${query}” — coba kata lain.`,
      typeToSee: (count) => `Ketik sesuatu di atas untuk melihatnya dalam ${count} gaya.`,
      partialBadge: "sebagian",
      copy: "Salin",
      copied: "Tersalin",
      copyStyle: (name) => `Salin gaya ${name}`,
      saveStyle: (name) => `Simpan ${name} ke favorit`,
      removeStyle: (name) => `Hapus ${name} dari favorit`,
      downloadPng: (name) => `Unduh gaya ${name} sebagai PNG`,
      savedAsPng: "Tersimpan sebagai PNG",
      pngFailed: "Gagal menyimpan gambar — coba salin teksnya saja",
      shareToX: (name) => `Bagikan gaya ${name} ke X`,
      shareToThreads: (name) => `Bagikan gaya ${name} ke Threads`,
      shareToBluesky: (name) => `Bagikan gaya ${name} ke Bluesky`,
      shareToWhatsapp: (name) => `Bagikan gaya ${name} ke WhatsApp`,
      shareToTelegram: (name) => `Bagikan gaya ${name} ke Telegram`,
      shareMore: "Opsi berbagi lainnya",
      copiedOpening: (dest) => `Tersalin. Membuka ${dest}…`,
      transparentBg: "Latar transparan",
      previewSize: "Ukuran pratinjau",
      copyAllFavorites: "Salin semua favorit",
      copiedToClipboard: "Tersalin ke papan klip",
      copyFailed: "Gagal menyalin — pilih teksnya dan salin manual",
      browserOnly: "Semua konversi berjalan di browser kamu — tidak ada yang diunggah.",
      stylePageInputLabel: "Teks kamu",
      typeToConvert: "Ketik sesuatu di atas untuk melihat hasilnya.",
    },
    symbols: {
      searchLabel: "Cari simbol",
      searchPlaceholder: "Coba “hati”, “bintang”, “mahkota”...",
      countInfo: (count, category, query) =>
        `${count} simbol${category ? ` di ${category}` : ""}${query ? ` untuk “${query}”` : ""} · Ketuk simbol untuk menyalin, atau + untuk kumpulan.`,
      inCategory: (category) => ` di ${category}`,
      forQuery: (query) => ` untuk “${query}”`,
      batchHint: "Ketuk simbol untuk menyalin, atau + untuk kumpulan.",
      recent: "Baru dipakai",
      copySymbol: (label) => `Salin ${label}`,
      removeRecent: (label) => `Hapus ${label} dari terbaru`,
      addToBatch: (label) => `Tambah ${label} ke kumpulan`,
      removeFromBatch: (label) => `Keluarkan ${label} dari kumpulan`,
      batchSelected: (count) => `${count} dipilih`,
      copyAll: "Salin semua",
      batchClear: "Hapus",
      copiedBatch: (count) => `${count} simbol tersalin`,
      batchFailed: "Gagal menyalin — coba pilihan yang lebih sedikit",
      noMatch: (query) =>
        `Tidak ada simbol yang cocok dengan “${query}” — coba hati, bintang, atau mahkota.`,
      combosHeading: "Kombinasi dekorasi",
      combosHint: "Dekorasi siap pakai — ketuk untuk menyalin semuanya.",
      copyCombo: (label) => `Salin ${label}`,
    },
    gaming: {
      yourName: "Nama kamu",
      namePlaceholder: "Ketik sebuah nama...",
      lengthInfo: "Maksimal 24 karakter — banyak game membatasi panjang nama.",
      styleGroup: "Gaya nama",
      buildYourOwn: "Racik sendiri",
      buildHint: (name) =>
        `Pilih dekorasi dan gaya huruf untuk “${name}”, lalu salin atau simpan kombinasinya.`,
      decoration: "Dekorasi",
      letterStyle: "Gaya huruf",
      noDecoration: "Tanpa dekorasi",
      decoOption: (left, right) => `${left} nama ${right}`,
      normalLetters: "Huruf biasa",
      comboSaved: "Kombinasi tersimpan di perangkat ini",
      saveCombo: "Simpan kombinasi",
      myCombos: "Kombinasiku",
      applyCombo: "Terapkan kombinasi ini ke peracik",
      removeCombo: "Hapus kombinasi ini",
      copyCombo: "Salin kombinasi buatanmu",
      copyAllSaved: "Salin semua",
      savedNames: "Nama tersimpan",
      copySaved: (name) => `Salin ${name}`,
      removeSaved: (name) => `Hapus ${name} dari nama tersimpan`,
      saveName: (name) => `Simpan ${name}`,
      removeName: (name) => `Hapus ${name} dari nama tersimpan`,
      emptyName: "Ketik nama di atas untuk melihat ide nama.",
      loadMore: "Muat lebih banyak",
      generateNew: "Buat kombinasi baru",
    },
    styleNames: {
      script: "Cursive",
      boldScript: "Cursive Tebal",
      fraktur: "Gothic",
      boldFraktur: "Gothic Tebal",
      bold: "Tebal",
      italic: "Miring",
      boldItalic: "Tebal Miring",
      sansBold: "Sans Tebal",
      sansItalic: "Sans Miring",
      doubleStruck: "Kerangka",
      monospace: "Monospace",
      smallCaps: "Kapital Kecil",
      superscript: "Superskrip",
      subscript: "Subskrip",
      bubble: "Balon",
      circled: "Lingkaran",
      parenthesized: "Kurung",
      squared: "Kotak",
      fullwidth: "Lebar Penuh",
      upsideDown: "Terbalik",
      strike: "Coret",
      underline: "Garis Bawah",
      doubleUnderline: "Garis Bawah Ganda",
      slash: "Coret Miring",
      boldStrike: "Tebal Coret",
      boldUnderline: "Tebal Garis Bawah",
      italicUnderline: "Miring Garis Bawah",
      zalgoLight: "Glitch Ringan",
      zalgoMedium: "Glitch Sedang",
      zalgoHeavy: "Glitch Berat",
    },
    styleCategoryNames: {
      script: "Cursive",
      gothic: "Gothic",
      bold: "Tebal & Miring",
      sans: "Sans & Mono",
      small: "Kecil",
      enclosed: "Balon & Lingkaran",
      wide: "Lebar",
      flipped: "Terbalik",
      effects: "Efek & Glitch",
    },
    vibeNames: {
      cool: "Keren",
      dark: "Gelap",
      cute: "Imut",
      pro: "Pro",
      minimal: "Minimalis",
    },
    symbolCats: {
      hearts: "Hati",
      stars: "Bintang",
      arrows: "Panah",
      crowns: "Mahkota",
      flowers: "Bunga",
      wings: "Sayap & Pita",
      brackets: "Kurung",
      lines: "Garis & Border",
      faces: "Wajah",
      vibes: "Musik & Vibe",
      checks: "Ceklis & Silang",
      math: "Matematika",
      greek: "Yunani",
      currency: "Mata Uang",
      numbers: "Angka & Romawi",
      dots: "Titik & Tanda",
      invisible: "Tak Terlihat",
    },
    platformTool: {
      stylesFit: (platform) => `Gaya yang cocok untuk ${platform}`,
      presetsHeading: (platform) => `Preset ${platform}`,
      presetsWrap: "Setiap preset membungkus teks yang kamu ketik di atas.",
      openToPaste: (platform) => `Tersalin — buka ${platform} untuk menempel`,
    },
    platformPreview: {
      heading: (platform) => `Pratinjau di ${platform}`,
      preview: "Pratinjau",
      close: "Tutup",
      previous: "Sebelumnya",
      next: "Berikutnya",
      note: "Digambar di browser kamu dengan tata letak profil. Aplikasi aslinya memakai fontnya sendiri — tempel teksnya di sana dan cek sebelum kamu mengandalkannya.",
      over: "melebihi batas umum",
      posts: "postingan",
      followers: "pengikut",
      following: "mengikuti",
      likes: "suka",
      follow: "Ikuti",
      message: "Pesan",
      addFriend: "Tambah teman",
      friends: "Teman",
      subscribers: "subscriber",
      subscribe: "Berlangganan",
    },
    symbolCatNotes: {
      invisible:
        "Karakter ini tidak terlihat. Terkenal untuk nama kosong di game: salin satu dan ganti seluruh namamu dengannya (beberapa game tetap menolak nama kosong — uji dulu). Lingkaran titik-titik hanya penanda posisi karakter tersembunyi.",
      blankLink:
        "Salin deretan pengisi Hangul, spasi Braille, atau spasi ideografis, atau selipkan spasi itu di antara huruf keren.",
    },
    sections: {
      howToUse: "Cara pakai",
      examples: "Contoh",
      faq: "FAQ",
      related: "Alat terkait",
      whereShines: "Paling cocok untuk",
      onPlatforms: "Di platform",
      howWorks: (topic) => `Cara kerja teks ${topic}`,
      openFull: "Buka Generator Huruf Keren lengkap →",
      exploreAll: "Jelajahi semua alat FancyFont →",
      browseSymbols: "Jelajahi 376 simbol untuk bikin gayamu sendiri.",
      browseFancy: "Semua 30 gaya dalam satu alat — salin salah satunya.",
      lookUses: (style) =>
        `Tampilan ini memakai huruf ${style}. Dekorasinya hanya ada di halaman ini.`,
    },
    compat: {
      lead: "Catatan:",
      body: "Gaya-gaya ini menggunakan karakter Unicode, bukan file font yang terpasang. Tampilan dan ketersediaan bisa berbeda tergantung perangkat, aplikasi, game, dan aturan platform. Uji hasilnya di tempat kamu akan memakainya.",
    },
    stylePageSteps: [
      "Ketik teksmu di kotak atas — pratinjau berubah saat kamu mengetik.",
      "Salin hasilnya sekali ketuk, atau unduh sebagai gambar PNG.",
      "Tempel di mana pun kamu mau — lalu pastikan tampilannya sesuai harapan.",
    ],
  },
};

export function getUi(locale: Locale): UiStrings {
  return ui[locale];
}
