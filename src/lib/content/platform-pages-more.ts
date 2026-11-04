// Copy for the platforms added after the first four.
// Limits are the usual field sizes. Each app can count differently and can reject a name.

import type { Locale } from "../i18n";
import type { PlatformPageCopy } from "./platform-pages-en";

export const morePlatformCopy: Record<Locale, Record<string, PlatformPageCopy>> = {
  en: {
    "pubg-name-generator": {
      navName: "PUBG",
      h1: "PUBG Name Generator",
      title: "PUBG Name Generator – Stylish Player Names",
      description:
        "Stylish Unicode names for PUBG. Preview the name on a lobby card, copy it, and check the length before you paste it into the game.",
      intro:
        "PUBG has no font picker. A player name is one short field, usually around 16 characters, and some modes are shorter. Generate a name, preview it, and paste it into the game's own name screen.",
      defaultText: "PUBG",
      presets: [
        { label: "Squad tag", left: "「", right: "」", transform: "bold" },
        { label: "Wide", left: "", right: "", transform: "fullwidth" },
        { label: "Mark", left: "☠︎ ", right: "", transform: "smallCaps" },
        { label: "Bubble", left: "", right: "", transform: "bubble" },
      ],
      guidance: [
        {
          label: "Player name",
          body: "Usually around 16 characters. Wide fonts and long decorations overflow fast. The preview flags a name that is over that usual length.",
        },
        {
          label: "Shorter modes",
          body: "Some PUBG Mobile flows accept fewer characters than the PC name. If the game trims or rejects the name, shorten it and try again.",
        },
        {
          label: "What stays plain",
          body: "Your player ID is a number. Style the name other players see, then paste it in the game and check that every character actually draws.",
        },
        {
          label: "BGMI",
          body: "BGMI — Battlegrounds Mobile India — is PUBG Mobile's Indian build and keeps the same name field. Plan for the same about 16 characters. Nothing here is tested against BGMI specifically, so let the game have the final word.",
        },
      ],
      compatNote:
        "PUBG applies its own filters and can change them. A styled name can turn into boxes or be rejected. Generate, copy, and test it in the game before you rely on it. FancyFont is not affiliated with PUBG.",
      faq: [
        {
          q: "How long can a PUBG name be?",
          a: "Plan for around 16 characters. Some modes, including parts of PUBG Mobile, are shorter. The preview counts code points and warns when a name is over 16.",
        },
        {
          q: "Will a stylish name show for other players?",
          a: "Only if their game build has the glyph and the name passes the filter. Paste it in PUBG and look at it in the lobby. If you see a box, pick a plainer style.",
        },
        {
          q: "Is this an official PUBG tool?",
          a: "No. FancyFont is independent. PUBG and its marks belong to their owners. This page only helps you draft a name.",
        },
      ],
    },
    "free-fire-name-generator": {
      navName: "Free Fire",
      h1: "Free Fire Name Generator",
      title: "Free Fire Name Generator – Short Stylish Nicknames",
      description:
        "Short Unicode nicknames for Free Fire. The name field is about 12 characters — preview it, copy it, and test it in the game.",
      intro:
        "Free Fire nicknames are very short, usually around 12 characters. A long decoration will not fit. Keep the base name short, preview it, and paste it into the game's name field.",
      defaultText: "Fire",
      presets: [
        { label: "Bolt", left: "⚡", right: "", transform: "bold" },
        { label: "Star", left: "★", right: "", transform: "smallCaps" },
        { label: "Brackets", left: "「", right: "」", transform: "bold" },
        { label: "Bubble", left: "", right: "", transform: "bubble" },
      ],
      guidance: [
        {
          label: "Nickname",
          body: "Around 12 characters. That is the whole name, including symbols. One mark plus a short word fits more often than a frame on both sides.",
        },
        {
          label: "Player ID",
          body: "The numeric ID cannot be styled. Only the nickname is a text field, and the game still filters it.",
        },
        {
          label: "If it is rejected",
          body: "Drop the decoration first. A plain short name that the game accepts is more useful than a styled one it cuts off.",
        },
      ],
      compatNote:
        "Free Fire sets the nickname length and the character filter, and both can change. Nothing here guarantees the game will accept a decorated name. FancyFont is not affiliated with Free Fire.",
      faq: [
        {
          q: "Why is my Free Fire name cut off?",
          a: "The nickname is about 12 characters. Wide Unicode letters count too. Shorten the word or remove a symbol, then preview again.",
        },
        {
          q: "Can I style my Free Fire ID?",
          a: "No. The ID is a number. Style the nickname, copy it, and paste it in the game's name field.",
        },
        {
          q: "Is this an official Free Fire tool?",
          a: "No. FancyFont is independent and is not affiliated with Garena or Free Fire.",
        },
      ],
    },
    "facebook-fonts": {
      navName: "Facebook",
      h1: "Facebook Fonts Generator",
      title: "Facebook Fonts Generator – Stylish Name & Intro",
      description:
        "Unicode fonts for a Facebook name and intro. The username stays plain. Preview the profile, then paste and check it on Facebook.",
      intro:
        "Facebook has no font picker. The name is about 50 characters and the short intro about 101. The username is letters, numbers, and periods only. Style the name and intro, and leave the username plain.",
      defaultText: "Facebook",
      presets: [
        { label: "Clean bold", left: "", right: "", transform: "bold" },
        { label: "Soft script", left: "", right: "", transform: "script" },
        { label: "Small caps", left: "", right: "", transform: "smallCaps" },
        { label: "Wide", left: "", right: "", transform: "fullwidth" },
      ],
      guidance: [
        {
          label: "Name",
          body: "Around 50 characters. Facebook also expects a name that looks like a name, and it can reset unusual characters. Paste and look at the saved profile.",
        },
        {
          label: "Intro",
          body: "The short intro is around 101 characters. A styled line fits. A long decoration plus a sentence often does not.",
        },
        {
          label: "Username",
          body: "Letters, numbers, and periods. No spaces and no Unicode fonts. Put the style in the name and intro.",
        },
      ],
      compatNote:
        "These are Unicode characters, not a Facebook feature. Facebook can reject or replace characters that do not look like a name. Generate, paste, and check the saved profile. FancyFont is not affiliated with Meta.",
      faq: [
        {
          q: "Can I use fonts in my Facebook name?",
          a: "You can paste Unicode into the name and intro. Facebook may refuse it or change it back. The username cannot take fonts at all.",
        },
        {
          q: "How long is the Facebook intro?",
          a: "The short intro is about 101 characters. The preview warns when the text is over the usual name or intro length.",
        },
        {
          q: "Is this an official Facebook tool?",
          a: "No. FancyFont is independent. Facebook and its marks belong to Meta.",
        },
      ],
    },
    "cod-name-generator": {
      navName: "COD",
      h1: "COD Name Generator",
      title: "COD Name Generator – Call of Duty Player Names",
      description:
        "Stylish player names for Call of Duty. The name is short, and the clan tag is shorter. Preview the name, then test it in the game.",
      intro:
        "Call of Duty player names are usually around 16 characters, and the limit varies by title. The clan tag is a separate field of about 4 characters, so a decorated name does not belong there.",
      defaultText: "COD",
      presets: [
        { label: "Tag", left: "「", right: "」", transform: "bold" },
        { label: "Wide", left: "", right: "", transform: "fullwidth" },
        { label: "Mark", left: "★ ", right: "", transform: "smallCaps" },
        { label: "Bubble", left: "", right: "", transform: "bubble" },
      ],
      guidance: [
        {
          label: "Player name",
          body: "Around 16 characters in many Call of Duty titles, including Warzone and Mobile. The exact cap depends on the game you are in.",
        },
        {
          label: "Clan tag",
          body: "About 2–4 characters. Do not paste a long fancy name into the clan tag. Use a short plain tag, and put the style on the player name.",
        },
        {
          label: "Filters",
          body: "The game can reject symbols or show them as boxes. Paste the name in the game's own screen and read it back before you keep it.",
        },
      ],
      compatNote:
        "Call of Duty sets its own name and clan-tag limits, and they differ by title. A styled name can be rejected. FancyFont is not affiliated with Activision or Call of Duty.",
      faq: [
        {
          q: "Can my COD clan tag use these fonts?",
          a: "The clan tag is only a few characters, about 4. That figure is a planning estimate, not an official cap. A styled name will not fit. Keep the tag short and plain, and style the player name.",
        },
        {
          q: "How long is a Call of Duty name?",
          a: "Plan for around 16 characters. Warzone, Mobile, and older titles are not identical, so the game's own field is the real limit. Activision's rename articles do not state a hard cap of 16.",
        },
        {
          q: "Is this an official Call of Duty tool?",
          a: "No. FancyFont is independent and is not affiliated with Activision.",
        },
      ],
    },
    "youtube-fonts": {
      navName: "YouTube",
      h1: "YouTube Fonts Generator",
      title: "YouTube Fonts Generator – Channel Name & Description",
      description:
        "Unicode fonts for a YouTube channel name and description. The @handle stays plain. Preview the channel, then paste and check it in YouTube Studio.",
      intro:
        "YouTube has no font picker. The channel name is around 100 characters. The @handle is letters, numbers, underscores, and periods, up to about 30, and it displays in lowercase. The description is much longer, around 1,000 characters.",
      defaultText: "YouTube",
      presets: [
        { label: "Bold name", left: "", right: "", transform: "bold" },
        { label: "Script", left: "", right: "", transform: "boldScript" },
        { label: "Small caps", left: "", right: "", transform: "smallCaps" },
        { label: "Wide", left: "", right: "", transform: "fullwidth" },
      ],
      guidance: [
        {
          label: "Channel name",
          body: "Around 100 characters. This is the styled line people see on the channel. Paste it in YouTube Studio and confirm it saved.",
        },
        {
          label: "Handle",
          body: "The @handle is plain text: letters, numbers, underscores, and periods, about 30 characters, shown in lowercase. Fonts do not belong there.",
        },
        {
          label: "Description",
          body: "Around 1,000 characters. A styled name plus a normal sentence fits easily. The channel name is the field that runs out first.",
        },
      ],
      compatNote:
        "These are Unicode characters, not a YouTube feature. YouTube's font decides whether a character displays, and Studio can reject a name. FancyFont is not affiliated with YouTube or Google.",
      faq: [
        {
          q: "Can my YouTube handle use a fancy font?",
          a: "No. The @handle is a plain lowercase username. Put the style in the channel name and the description.",
        },
        {
          q: "Where do I paste a styled channel name?",
          a: "Copy it here, open YouTube Studio, edit the channel, and paste into the channel name. Check the public channel page after you save.",
        },
        {
          q: "Is this an official YouTube tool?",
          a: "No. FancyFont is independent. YouTube and its marks belong to Google.",
        },
      ],
    },
    "adopt-me-fonts": {
      navName: "Adopt Me",
      h1: "Adopt Me Fonts",
      title: "Adopt Me Fonts That Work – Roblox Display Names",
      description:
        "Short Adopt Me name fonts for your Roblox display name. About 20 characters, a plain username, and a preview before you change it.",
      intro:
        "Adopt Me uses your Roblox name. The username stays plain letters, digits, and one underscore. The display name other players see is about 20 characters, and Roblox can still reject a symbol. These rows are the preppy and cute looks, cut short enough to try.",
      defaultText: "Mila",
      presets: [
        { label: "Preppy", left: "🤍 ", right: " 🤍", transform: "smallCaps" },
        { label: "One heart", left: "♥ ", right: "", transform: "smallCaps" },
        { label: "Cute", left: "♡ ", right: " ♡", transform: "bubble" },
        { label: "Bow", left: "୨୧ ", right: "", transform: "bubble" },
      ],
      guidance: [
        {
          label: "Display name",
          body: "About 20 characters, including every heart. This is the name above your avatar in Adopt Me. The preview flags anything past 20. A short small-caps name with one heart fits more often than a bow on both sides.",
        },
        {
          label: "Username",
          body: "Letters, digits, and a single underscore, 3–20 characters. No fonts and no spaces. The preview keeps this handle plain while the display name carries the style.",
        },
        {
          label: "What actually gets through",
          body: "Roblox filters display names and can change the rules. A styled name can turn into boxes or be rejected. Paste it on Roblox's name screen and read that preview before you confirm. Display-name changes are limited, so do not spend one on a name you have not checked.",
        },
      ],
      compatNote:
        "Adopt Me is a Roblox experience. These are Unicode characters, not an Adopt Me or Roblox feature. Nothing here guarantees the name will be accepted. FancyFont is not affiliated with Roblox or Adopt Me.",
      faq: [
        {
          q: "Can my Adopt Me username use these fonts?",
          a: "No. The username is the Roblox login name: letters, digits, and one underscore. Put the style in the display name.",
        },
        {
          q: "Why did my fancy Adopt Me name get rejected?",
          a: "Roblox filters the display name. Stacked bows and rare symbols fail first. Try the single-heart row, or the plain small-caps row, and check the game's own preview.",
        },
        {
          q: "Is this an official Adopt Me tool?",
          a: "No. FancyFont is independent. Adopt Me and Roblox belong to their owners. This page only drafts a name that fits the usual display-name length.",
        },
      ],
    },
    "berry-avenue-fonts": {
      navName: "Berry Avenue",
      h1: "Berry Avenue Fonts Generator",
      title: "Berry Avenue Fonts — Free Copy & Paste (~20 Chars)",
      description:
        "Free Berry Avenue fonts: type a Roblox display name, preview it on a card and a sign, then copy styles near ~20 characters. Not for the @username.",
      intro:
        "Berry Avenue shows your Roblox display name over your character. That field is about 20 characters, and the username stays plain. The card on this page is a fitting sketch, not the font inside the game.",
      pinnedPreview: {
        heading: "Live display-name preview",
        displayName: "Display name",
        username: "Username",
        sign: "Sign",
        showing: "Showing the {label} row. Copy another row below if you want a different look.",
        counter: "{count} / ~{max} characters",
        over: "Over the approximate display-name length.",
        usernameNote: "The @username stays plain letters, digits, and one underscore. These fonts are not for that field.",
        signNote: "A yard sign or a chat line can run longer. This page does not store a published limit for those fields.",
        approxNote:
          "The ~20 figure is approximate and was not tested inside Berry Avenue on this site. The count is visible characters (graphemes).",
      },
      defaultText: "Blair",
      presets: [
        { label: "Ribbon", left: "𝜗𝜚 ", right: " 𝜗𝜚", transform: "boldScript" },
        { label: "Bow", left: "🎀 ", right: "", transform: "boldScript" },
        { label: "Coquette", left: "𐙚 ", right: " 𐙚", transform: "boldScript" },
        { label: "Quiet", left: "", right: "", transform: "smallCaps" },
      ],
      guidance: [
        {
          label: "Display name",
          body: "About 20 characters. This is the overhead name in Berry Avenue. Hearts, bows, and script letters all count. The preview flags anything past 20.",
        },
        {
          label: "Username",
          body: "Letters, digits, and a single underscore. Players still find you by this plain handle. Fonts do not go here.",
        },
        {
          label: "Chat lines",
          body: "A roleplay intro in chat can be longer than the overhead name. Keep the display name to one short row, and put a longer line in chat only after you see it draw on your device. The small bow can show as a box; the ribbon emoji is the fallback.",
        },
      ],
      compatNote:
        "Berry Avenue runs on Roblox. These are Unicode characters, not a game feature, and Roblox can reject them. FancyFont is not affiliated with Roblox or Berry Avenue.",
      faq: [
        {
          q: "What fonts work for Berry Avenue?",
          a: "Start with a display name of about 20 characters. The quiet small-caps row adds no extra symbols. Add one bow only if Roblox's own name screen still accepts it. These are Unicode characters you paste, not a font file you install.",
        },
        {
          q: "Are Berry Avenue fonts for the username?",
          a: "Cause: Roblox's Help article treats the display name and the username as different fields. The display name is what other players see. The @username is the login name. Fix: put styled letters on the display name only. On this page the username fitting rule is plain letters, digits, and one underscore. A longer roleplay line belongs in chat.",
        },
        {
          q: "Why did Roblox reject my Berry Avenue name?",
          a: "Cause: that Help article says display names are filtered, and a name that breaks the rules can be reset to your username. Roblox's text filtering page also covers text other players can see, including a phone number on a sign. Fix: drop rare symbols, keep the display name inside the announced 3–20, leave out personal details, and save only after Roblox's own screen accepts it.",
        },
        {
          q: "Is this a Berry Avenue font generator?",
          a: "It drafts a display name you can copy. It is not an official Berry Avenue or Roblox tool, and nothing here guarantees the game will accept the characters.",
        },
      ],
    },
    "fortnite-name-generator": {
      navName: "Fortnite",
      h1: "Fortnite Name Generator",
      title: "Fortnite Name Generator – Stylish Display Names",
      description:
        "Stylish Unicode names for Fortnite. Preview the display name, copy it, and check the length before you save it to your Epic account.",
      intro:
        "Fortnite shows your Epic display name in every lobby, kill feed and replay — one field, usually around 16 characters. Generate a decorated name, preview it, and save it from your Epic account settings.",
      defaultText: "Victory",
      presets: [
        { label: "Star wrap", left: "★ ", right: " ★", transform: "sansBold" },
        { label: "Brackets", left: "「", right: "」", transform: "bold" },
        { label: "Storm mark", left: "⚡ ", right: "", transform: "smallCaps" },
        { label: "Dark frame", left: "༺", right: "༻", transform: "fraktur" },
      ],
      guidance: [
        {
          label: "Display name",
          body: "One field shown everywhere you play, usually around 16 characters. The preview counts code points and flags a name that goes over.",
        },
        {
          label: "It follows your Epic account",
          body: "The display name is account-level: change it from your Epic account settings and the new name appears on every platform you log in from.",
        },
        {
          label: "Symbols and the filter",
          body: "Epic's filter decides which characters survive. One-character alphabets like bold and small caps hold up better than stacked-mark decorations — if the lobby shows boxes, pick a plainer style.",
        },
        {
          label: "What stays plain",
          body: "Your Epic account ID is a number. Style the display name only, then check it in the lobby so every character actually draws.",
        },
      ],
      compatNote:
        "Fortnite and Epic Games set their own name rules and can change them. Nothing here guarantees a decorated name will be accepted — generate, copy, and check it in the game. FancyFont is not affiliated with Epic Games or Fortnite.",
      faq: [
        {
          q: "How long can a Fortnite name be?",
          a: "Plan for around 16 characters. The preview counts code points and warns before you copy; the in-game field is the final judge.",
        },
        {
          q: "How do I change my Fortnite name?",
          a: "From your Epic account settings on the web, or the account section in the game. The display name is account-level, so the change follows you on every platform you play.",
        },
        {
          q: "Can I put symbols in my Fortnite name?",
          a: "Styled Unicode characters usually save, but Epic's filter can trim or reject them. Plainer alphabets — bold, small caps — survive more often than heavy decorations.",
        },
        {
          q: "Is this an official Fortnite tool?",
          a: "No. FancyFont is independent and is not affiliated with Epic Games or Fortnite.",
        },
      ],
    },
  },
  es: {
    "pubg-name-generator": {
      navName: "PUBG",
      h1: "Generador de nombres para PUBG",
      title: "Generador de nombres para PUBG – Nombres con estilo",
      description:
        "Nombres Unicode para PUBG. Mira el nombre en una ficha de lobby, cópialo y revisa la longitud antes de pegarlo en el juego.",
      intro:
        "PUBG no tiene selector de fuentes. El nombre es un campo corto, normalmente unos 16 caracteres, y algunos modos aceptan menos. Genera el nombre, míralo en la vista previa y pégalo en la pantalla del juego.",
      defaultText: "PUBG",
      presets: [
        { label: "Escuadra", left: "「", right: "」", transform: "bold" },
        { label: "Ancho", left: "", right: "", transform: "fullwidth" },
        { label: "Marca", left: "☠︎ ", right: "", transform: "smallCaps" },
        { label: "Burbuja", left: "", right: "", transform: "bubble" },
      ],
      guidance: [
        {
          label: "Nombre",
          body: "Suele rondar los 16 caracteres. Las fuentes anchas y los adornos largos se pasan enseguida. La vista previa avisa si te pasas de esa longitud habitual.",
        },
        {
          label: "Modos más cortos",
          body: "Algunos flujos de PUBG Mobile aceptan menos caracteres que el nombre de PC. Si el juego recorta o rechaza el nombre, acórtalo y prueba otra vez.",
        },
        {
          label: "Lo que queda plano",
          body: "El ID de jugador es un número. Dale estilo al nombre que ven los demás y comprueba en el juego que cada carácter se dibuja.",
        },
        {
          label: "BGMI",
          body: "BGMI — Battlegrounds Mobile India — es la versión india de PUBG Mobile y usa el mismo campo de nombre. Cuenta con unos 16 caracteres, igual que en PUBG. Nada aquí está probado específicamente en BGMI: deja que el juego decida.",
        },
      ],
      compatNote:
        "PUBG aplica sus propios filtros y puede cambiarlos. Un nombre con estilo puede volverse cuadros o ser rechazado. Pruébalo en el juego. FancyFont no está afiliado a PUBG.",
      faq: [
        {
          q: "¿Cuánto puede medir un nombre de PUBG?",
          a: "Cuenta con unos 16 caracteres. Algunos modos, incluido parte de PUBG Mobile, son más cortos. La vista previa cuenta puntos de código y avisa al pasar de 16.",
        },
        {
          q: "¿Los demás jugadores verán el nombre con estilo?",
          a: "Solo si su versión del juego tiene el glifo y el nombre pasa el filtro. Pégalo y míralo en el lobby. Si ves un cuadro, elige un estilo más simple.",
        },
        {
          q: "¿Es una herramienta oficial de PUBG?",
          a: "No. FancyFont es independiente. PUBG y sus marcas pertenecen a sus dueños.",
        },
      ],
    },
    "free-fire-name-generator": {
      navName: "Free Fire",
      h1: "Generador de nombres para Free Fire",
      title: "Generador de nombres para Free Fire – Apodos cortos",
      description:
        "Apodos Unicode cortos para Free Fire. El campo mide unos 12 caracteres: míralo, cópialo y pruébalo en el juego.",
      intro:
        "Los apodos de Free Fire son muy cortos, normalmente unos 12 caracteres. Un adorno largo no cabe. Deja el nombre base corto, míralo en la vista previa y pégalo en el juego.",
      defaultText: "Fire",
      presets: [
        { label: "Rayo", left: "⚡", right: "", transform: "bold" },
        { label: "Estrella", left: "★", right: "", transform: "smallCaps" },
        { label: "Corchetes", left: "「", right: "」", transform: "bold" },
        { label: "Burbuja", left: "", right: "", transform: "bubble" },
      ],
      guidance: [
        {
          label: "Apodo",
          body: "Unas 12 caracteres. Eso incluye los símbolos. Una marca más una palabra corta cabe mejor que un marco a los dos lados.",
        },
        {
          label: "ID de jugador",
          body: "El ID numérico no admite estilo. Solo el apodo es texto, y el juego igual lo filtra.",
        },
        {
          label: "Si lo rechaza",
          body: "Quita primero el adorno. Un nombre corto y plano que el juego acepte sirve más que uno con estilo que el juego recorta.",
        },
      ],
      compatNote:
        "Free Fire fija la longitud y el filtro, y ambos pueden cambiar. Nada aquí garantiza que el juego acepte un nombre decorado. FancyFont no está afiliado a Free Fire.",
      faq: [
        {
          q: "¿Por qué se corta mi nombre de Free Fire?",
          a: "El apodo mide unos 12 caracteres. Las letras Unicode anchas también cuentan. Acorta la palabra o quita un símbolo y vuelve a mirar la vista previa.",
        },
        {
          q: "¿Puedo darle estilo a mi ID de Free Fire?",
          a: "No. El ID es un número. Dale estilo al apodo, cópialo y pégalo en el campo de nombre del juego.",
        },
        {
          q: "¿Es una herramienta oficial de Free Fire?",
          a: "No. FancyFont es independiente y no está afiliado a Garena ni a Free Fire.",
        },
      ],
    },
    "facebook-fonts": {
      navName: "Facebook",
      h1: "Generador de fuentes para Facebook",
      title: "Fuentes para Facebook – Nombre e intro con estilo",
      description:
        "Fuentes Unicode para el nombre y la intro de Facebook. El usuario se queda en texto plano. Mira el perfil y compruébalo en Facebook.",
      intro:
        "Facebook no tiene selector de fuentes. El nombre ronda los 50 caracteres y la intro corta unos 101. El usuario solo admite letras, números y puntos. Dale estilo al nombre y a la intro, y deja el usuario plano.",
      defaultText: "Facebook",
      presets: [
        { label: "Negrita", left: "", right: "", transform: "bold" },
        { label: "Cursiva", left: "", right: "", transform: "script" },
        { label: "Versalitas", left: "", right: "", transform: "smallCaps" },
        { label: "Ancho", left: "", right: "", transform: "fullwidth" },
      ],
      guidance: [
        {
          label: "Nombre",
          body: "Unos 50 caracteres. Facebook también espera un nombre que parezca un nombre, y puede revertir caracteres raros. Pega y mira el perfil guardado.",
        },
        {
          label: "Intro",
          body: "La intro corta mide unos 101 caracteres. Una línea con estilo cabe. Un adorno largo más una frase, a menudo no.",
        },
        {
          label: "Usuario",
          body: "Letras, números y puntos. Sin espacios y sin fuentes Unicode. El estilo va en el nombre y en la intro.",
        },
      ],
      compatNote:
        "Son caracteres Unicode, no una función de Facebook. Facebook puede rechazar o cambiar caracteres que no parezcan un nombre. FancyFont no está afiliado a Meta.",
      faq: [
        {
          q: "¿Puedo usar fuentes en mi nombre de Facebook?",
          a: "Puedes pegar Unicode en el nombre y en la intro. Facebook puede rechazarlo o devolverlo. El usuario no admite fuentes.",
        },
        {
          q: "¿Cuánto mide la intro de Facebook?",
          a: "La intro corta mide unos 101 caracteres. La vista previa avisa si el texto supera la longitud habitual del nombre o de la intro.",
        },
        {
          q: "¿Es una herramienta oficial de Facebook?",
          a: "No. FancyFont es independiente. Facebook y sus marcas pertenecen a Meta.",
        },
      ],
    },
    "cod-name-generator": {
      navName: "COD",
      h1: "Generador de nombres para COD",
      title: "Generador de nombres para COD – Call of Duty",
      description:
        "Nombres con estilo para Call of Duty. El nombre es corto y la etiqueta de clan es más corta. Míralo y pruébalo en el juego.",
      intro:
        "Los nombres de Call of Duty suelen rondar los 16 caracteres, y el límite cambia según el título. La etiqueta de clan es otro campo de unos 4 caracteres: un nombre decorado no va ahí.",
      defaultText: "COD",
      presets: [
        { label: "Etiqueta", left: "「", right: "」", transform: "bold" },
        { label: "Ancho", left: "", right: "", transform: "fullwidth" },
        { label: "Marca", left: "★ ", right: "", transform: "smallCaps" },
        { label: "Burbuja", left: "", right: "", transform: "bubble" },
      ],
      guidance: [
        {
          label: "Nombre",
          body: "Unos 16 caracteres en muchos títulos de Call of Duty, incluidos Warzone y Mobile. El tope exacto depende del juego.",
        },
        {
          label: "Etiqueta de clan",
          body: "Unos 2–4 caracteres. No pegues un nombre largo con estilo en la etiqueta. Usa una etiqueta corta y plana, y el estilo en el nombre.",
        },
        {
          label: "Filtros",
          body: "El juego puede rechazar símbolos o mostrarlos como cuadros. Pega el nombre en la pantalla del juego y léelo antes de quedártelo.",
        },
      ],
      compatNote:
        "Call of Duty fija sus propios límites de nombre y de etiqueta, y cambian según el título. Un nombre con estilo puede ser rechazado. FancyFont no está afiliado a Activision.",
      faq: [
        {
          q: "¿La etiqueta de clan de COD admite estas fuentes?",
          a: "La etiqueta mide solo unos 4 caracteres. Esa cifra es una estimación para planear, no un tope oficial. Un nombre con estilo no cabe. Déjala corta y plana, y dale estilo al nombre.",
        },
        {
          q: "¿Cuánto mide un nombre de Call of Duty?",
          a: "Cuenta con unos 16 caracteres. Warzone, Mobile y los títulos antiguos no coinciden, así que el campo del juego es el límite real. Los artículos de cambio de nombre de Activision no fijan un tope oficial de 16.",
        },
        {
          q: "¿Es una herramienta oficial de Call of Duty?",
          a: "No. FancyFont es independiente y no está afiliado a Activision.",
        },
      ],
    },
    "youtube-fonts": {
      navName: "YouTube",
      h1: "Generador de fuentes para YouTube",
      title: "Fuentes para YouTube – Nombre y descripción del canal",
      description:
        "Fuentes Unicode para el nombre y la descripción de un canal de YouTube. El @usuario se queda plano. Míralo y compruébalo en YouTube Studio.",
      intro:
        "YouTube no tiene selector de fuentes. El nombre del canal ronda los 100 caracteres. El @usuario admite letras, números, guiones bajos y puntos, unos 30, y se muestra en minúsculas. La descripción es mucho más larga, unos 1.000 caracteres.",
      defaultText: "YouTube",
      presets: [
        { label: "Negrita", left: "", right: "", transform: "bold" },
        { label: "Cursiva", left: "", right: "", transform: "boldScript" },
        { label: "Versalitas", left: "", right: "", transform: "smallCaps" },
        { label: "Ancho", left: "", right: "", transform: "fullwidth" },
      ],
      guidance: [
        {
          label: "Nombre del canal",
          body: "Unos 100 caracteres. Es la línea con estilo que se ve en el canal. Pégala en YouTube Studio y confirma que se guardó.",
        },
        {
          label: "Usuario",
          body: "El @usuario es texto plano: letras, números, guiones bajos y puntos, unos 30 caracteres, en minúsculas. Las fuentes no van ahí.",
        },
        {
          label: "Descripción",
          body: "Unos 1.000 caracteres. Un nombre con estilo más una frase normal cabe de sobra. El nombre del canal es el campo que se llena antes.",
        },
      ],
      compatNote:
        "Son caracteres Unicode, no una función de YouTube. La fuente de YouTube decide si un carácter se ve, y Studio puede rechazar un nombre. FancyFont no está afiliado a YouTube ni a Google.",
      faq: [
        {
          q: "¿Mi usuario de YouTube puede llevar una fuente?",
          a: "No. El @usuario es un nombre plano en minúsculas. El estilo va en el nombre del canal y en la descripción.",
        },
        {
          q: "¿Dónde pego un nombre de canal con estilo?",
          a: "Cópialo aquí, abre YouTube Studio, edita el canal y pégalo en el nombre. Revisa la página pública después de guardar.",
        },
        {
          q: "¿Es una herramienta oficial de YouTube?",
          a: "No. FancyFont es independiente. YouTube y sus marcas pertenecen a Google.",
        },
      ],
    },
    "adopt-me-fonts": {
      navName: "Adopt Me",
      h1: "Fuentes para Adopt Me",
      title: "Fuentes para Adopt Me que caben – Nombres visibles de Roblox",
      description:
        "Fuentes cortas para tu nombre visible de Adopt Me en Roblox. Unos 20 caracteres, usuario plano y una vista previa antes de cambiarlo.",
      intro:
        "Adopt Me usa tu nombre de Roblox. El usuario se queda en letras, dígitos y un guion bajo. El nombre visible que ven los demás ronda los 20 caracteres, y Roblox todavía puede rechazar un símbolo. Estas filas son los estilos preppy y tierno, ajustados para que quepan.",
      defaultText: "Mila",
      presets: [
        { label: "Preppy", left: "🤍 ", right: " 🤍", transform: "smallCaps" },
        { label: "Un corazón", left: "♥ ", right: "", transform: "smallCaps" },
        { label: "Tierna", left: "♡ ", right: " ♡", transform: "bubble" },
        { label: "Lazo", left: "୨୧ ", right: "", transform: "bubble" },
      ],
      guidance: [
        {
          label: "Nombre visible",
          body: "Unos 20 caracteres, corazón incluido. Es el nombre sobre tu avatar en Adopt Me. La vista previa avisa cuando pasa de 20. Un nombre corto en versalitas con un corazón cabe más a menudo que un lazo a cada lado.",
        },
        {
          label: "Usuario",
          body: "Letras, dígitos y un solo guion bajo, de 3 a 20 caracteres. Sin fuentes y sin espacios. La vista previa deja este usuario plano y pone el estilo en el nombre visible.",
        },
        {
          label: "Lo que de verdad pasa",
          body: "Roblox filtra los nombres visibles y puede cambiar las reglas. Un nombre con estilo puede volverse cuadros o ser rechazado. Pégalo en la pantalla de nombre de Roblox y lee esa vista previa antes de confirmar. Los cambios de nombre visible son limitados, así que no gastes uno en un nombre que no hayas revisado.",
        },
      ],
      compatNote:
        "Adopt Me es una experiencia de Roblox. Estos son caracteres Unicode, no una función de Adopt Me ni de Roblox. Nada aquí garantiza que el nombre sea aceptado. FancyFont no está afiliado a Roblox ni a Adopt Me.",
      faq: [
        {
          q: "¿Mi usuario de Adopt Me puede usar estas fuentes?",
          a: "No. El usuario es el nombre de acceso de Roblox: letras, dígitos y un guion bajo. El estilo va en el nombre visible.",
        },
        {
          q: "¿Por qué rechazaron mi nombre fancy de Adopt Me?",
          a: "Roblox filtra el nombre visible. Los lazos apilados y los símbolos raros fallan primero. Prueba la fila de un solo corazón, o las versalitas sin adorno, y revisa la vista previa del juego.",
        },
        {
          q: "¿Es una herramienta oficial de Adopt Me?",
          a: "No. FancyFont es independiente. Adopt Me y Roblox pertenecen a sus dueños. Esta página solo prepara un nombre que cabe en la longitud habitual del nombre visible.",
        },
      ],
    },
    "berry-avenue-fonts": {
      navName: "Berry Avenue",
      h1: "Generador de fuentes para Berry Avenue",
      title: "Fuentes para Berry Avenue — copia y pega el nombre (~20)",
      description:
        "Fuentes gratis para Berry Avenue: escribe el nombre visible de Roblox, míralo en la ficha y en el letrero, y copia estilos cerca de ~20 caracteres. No es para el @usuario.",
      intro:
        "Berry Avenue muestra tu nombre visible de Roblox sobre el personaje. Ese campo ronda los 20 caracteres, y el usuario se queda plano. La ficha de esta página es un boceto, no la fuente de dentro del juego.",
      pinnedPreview: {
        heading: "Vista previa del nombre visible",
        displayName: "Nombre visible",
        username: "Usuario",
        sign: "Letrero",
        showing: "Ves la fila {label}. Copia otra fila de abajo si quieres otro look.",
        counter: "{count} / ~{max} caracteres",
        over: "Pasa la longitud aproximada del nombre visible.",
        usernameNote: "El @usuario se queda en letras, dígitos y un guion bajo. Estas fuentes no van en ese campo.",
        signNote: "Un letrero o una frase de chat puede ser más largo. Esta página no guarda un límite publicado para esos campos.",
        approxNote:
          "El ~20 es aproximado y no se midió dentro de Berry Avenue en este sitio. La cuenta es de caracteres visibles (grafemas).",
      },
      defaultText: "Blair",
      presets: [
        { label: "Cinta", left: "𝜗𝜚 ", right: " 𝜗𝜚", transform: "boldScript" },
        { label: "Lazo", left: "🎀 ", right: "", transform: "boldScript" },
        { label: "Coquette", left: "𐙚 ", right: " 𐙚", transform: "boldScript" },
        { label: "Quieto", left: "", right: "", transform: "smallCaps" },
      ],
      guidance: [
        {
          label: "Nombre visible",
          body: "Unos 20 caracteres. Es el nombre sobre la cabeza en Berry Avenue. Corazones, lazos y letras script cuentan. La vista previa avisa cuando pasa de 20.",
        },
        {
          label: "Usuario",
          body: "Letras, dígitos y un solo guion bajo. Los demás te encuentran por este usuario plano. Las fuentes no van aquí.",
        },
        {
          label: "Frases de chat",
          body: "Una presentación de rol en el chat puede ser más larga que el nombre de encima. Deja el nombre visible en una fila corta, y pon la frase larga en el chat solo después de ver que se dibuja en tu dispositivo. El lazo pequeño puede salir como un cuadro; el emoji de cinta es el recambio.",
        },
      ],
      compatNote:
        "Berry Avenue corre en Roblox. Estos son caracteres Unicode, no una función del juego, y Roblox puede rechazarlos. FancyFont no está afiliado a Roblox ni a Berry Avenue.",
      faq: [
        {
          q: "¿Qué fuentes sirven para Berry Avenue?",
          a: "Empieza con un nombre visible de unos 20 caracteres. La fila quieta de versalitas no añade símbolos. Suma un lazo solo si la pantalla de nombre de Roblox todavía lo acepta. Son caracteres Unicode para pegar, no un archivo de fuente.",
        },
        {
          q: "¿Las fuentes de Berry Avenue van en el usuario?",
          a: "Causa: el artículo de ayuda de Roblox trata el nombre visible y el usuario como campos distintos. El nombre visible es el que ven los demás. El @usuario es el nombre para entrar. Arreglo: pon las letras con estilo solo en el nombre visible. En esta página la regla de ajuste del usuario es letras, dígitos y un guion bajo. Una frase de rol más larga va al chat.",
        },
        {
          q: "¿Por qué Roblox rechazó mi nombre de Berry Avenue?",
          a: "Causa: ese artículo de ayuda dice que los nombres visibles se filtran, y un nombre que rompe las reglas puede volver a ser tu usuario. La página de filtrado de texto de Roblox cubre el texto que otros jugadores ven, incluido un teléfono en un letrero. Arreglo: quita los símbolos raros, deja el nombre visible dentro del 3–20 anunciado, no pongas datos personales, y guarda solo cuando la pantalla de Roblox lo acepte.",
        },
        {
          q: "¿Esto es un generador de fuentes para Berry Avenue?",
          a: "Prepara un nombre visible para copiar. No es una herramienta oficial de Berry Avenue ni de Roblox, y nada aquí garantiza que el juego acepte los caracteres.",
        },
      ],
    },
    "fortnite-name-generator": {
      navName: "Fortnite",
      h1: "Generador de nombres para Fortnite",
      title: "Generador de nombres de Fortnite – nombres con estilo",
      description:
        "Nombres Unicode con estilo para Fortnite. Previsualiza el nombre, cópialo y revisa la longitud antes de guardarlo en tu cuenta de Epic.",
      intro:
        "Fortnite muestra tu nombre de Epic en cada lobby, marcador y repetición: un solo campo, normalmente unos 16 caracteres. Genera un nombre decorado, previsualízalo y guárdalo desde los ajustes de tu cuenta de Epic.",
      defaultText: "Victory",
      presets: [
        { label: "Estrellas", left: "★ ", right: " ★", transform: "sansBold" },
        { label: "Corchetes", left: "「", right: "」", transform: "bold" },
        { label: "Marca tormenta", left: "⚡ ", right: "", transform: "smallCaps" },
        { label: "Marco oscuro", left: "༺", right: "༻", transform: "fraktur" },
      ],
      guidance: [
        {
          label: "Nombre visible",
          body: "Un campo que se ve en todo lo que juegas, normalmente unos 16 caracteres. La vista previa cuenta puntos de código y avisa si te pasas.",
        },
        {
          label: "Sigue tu cuenta de Epic",
          body: "El nombre visible es de la cuenta: cámbialo en los ajustes de Epic y el nuevo nombre aparece en todas las plataformas donde entres.",
        },
        {
          label: "Símbolos y el filtro",
          body: "El filtro de Epic decide qué caracteres sobreviven. Los alfabetos de un carácter por letra, como la negrita y las versalitas, aguantan mejor que los adornos con marcas apiladas — si el lobby muestra cuadros, elige un estilo más llano.",
        },
        {
          label: "Lo que queda plano",
          body: "El ID de tu cuenta de Epic es un número. Da estilo solo al nombre visible y compruébalo en el lobby para que cada carácter se dibuje.",
        },
      ],
      compatNote:
        "Fortnite y Epic Games establecen sus propias reglas de nombre y pueden cambiarlas. Nada aquí garantiza que un nombre decorado se acepte — genera, copia y compruébalo en el juego. FancyFont no está afiliado a Epic Games ni a Fortnite.",
      faq: [
        {
          q: "¿Cuánto puede medir un nombre de Fortnite?",
          a: "Cuenta con unos 16 caracteres. La vista previa cuenta puntos de código y avisa antes de copiar; el campo del juego es el juez final.",
        },
        {
          q: "¿Cómo cambio mi nombre de Fortnite?",
          a: "Desde los ajustes de tu cuenta de Epic en la web, o la sección de cuenta en el juego. El nombre visible es de la cuenta, así que el cambio te sigue en todas las plataformas.",
        },
        {
          q: "¿Puedo poner símbolos en mi nombre de Fortnite?",
          a: "Los caracteres Unicode con estilo normalmente se guardan, pero el filtro de Epic puede recortarlos o rechazarlos. Los alfabetos más llanos — negrita, versalitas — sobreviven más que los adornos pesados.",
        },
        {
          q: "¿Es una herramienta oficial de Fortnite?",
          a: "No. FancyFont es independiente y no está afiliado a Epic Games ni a Fortnite.",
        },
      ],
    },
  },
  "pt-br": {
    "pubg-name-generator": {
      navName: "PUBG",
      h1: "Gerador de nomes para PUBG",
      title: "Gerador de nomes para PUBG – Nomes com estilo",
      description:
        "Nomes Unicode para PUBG. Veja o nome num card de lobby, copie e confira o tamanho antes de colar no jogo.",
      intro:
        "O PUBG não tem seletor de fontes. O nome é um campo curto, em geral cerca de 16 caracteres, e alguns modos aceitam menos. Gere o nome, veja a prévia e cole na tela do jogo.",
      defaultText: "PUBG",
      presets: [
        { label: "Esquadrão", left: "「", right: "」", transform: "bold" },
        { label: "Largo", left: "", right: "", transform: "fullwidth" },
        { label: "Marca", left: "☠︎ ", right: "", transform: "smallCaps" },
        { label: "Bolha", left: "", right: "", transform: "bubble" },
      ],
      guidance: [
        {
          label: "Nome",
          body: "Em geral cerca de 16 caracteres. Fontes largas e enfeites longos estouram rápido. A prévia avisa quando passa desse tamanho usual.",
        },
        {
          label: "Modos mais curtos",
          body: "Alguns fluxos do PUBG Mobile aceitam menos caracteres que o nome no PC. Se o jogo cortar ou recusar, encurte e tente de novo.",
        },
        {
          label: "O que fica simples",
          body: "O ID do jogador é um número. Estilize o nome que os outros veem e confira no jogo se cada caractere aparece.",
        },
        {
          label: "BGMI",
          body: "O BGMI — Battlegrounds Mobile India — é a versão indiana do PUBG Mobile e usa o mesmo campo de nome. Conte com uns 16 caracteres, como no PUBG Mobile. Nada aqui foi testado especificamente no BGMI: deixe o jogo ter a palavra final.",
        },
      ],
      compatNote:
        "O PUBG aplica os próprios filtros e pode mudá-los. Um nome estilizado pode virar quadrados ou ser recusado. Teste no jogo. O FancyFont não é afiliado ao PUBG.",
      faq: [
        {
          q: "Qual o tamanho de um nome no PUBG?",
          a: "Conte com cerca de 16 caracteres. Alguns modos, inclusive partes do PUBG Mobile, são mais curtos. A prévia conta pontos de código e avisa acima de 16.",
        },
        {
          q: "Os outros jogadores vão ver o estilo?",
          a: "Só se a versão do jogo deles tiver o glifo e o nome passar no filtro. Cole e olhe no lobby. Se aparecer um quadrado, escolha um estilo mais simples.",
        },
        {
          q: "Esta é uma ferramenta oficial do PUBG?",
          a: "Não. O FancyFont é independente. PUBG e as marcas pertencem aos seus donos.",
        },
      ],
    },
    "free-fire-name-generator": {
      navName: "Free Fire",
      h1: "Gerador de nomes para Free Fire",
      title: "Gerador de nomes para Free Fire – Apelidos curtos",
      description:
        "Apelidos Unicode curtos para Free Fire. O campo tem cerca de 12 caracteres: veja a prévia, copie e teste no jogo.",
      intro:
        "Os apelidos do Free Fire são bem curtos, em geral cerca de 12 caracteres. Um enfeite longo não cabe. Deixe o nome base curto, veja a prévia e cole no jogo.",
      defaultText: "Fire",
      presets: [
        { label: "Raio", left: "⚡", right: "", transform: "bold" },
        { label: "Estrela", left: "★", right: "", transform: "smallCaps" },
        { label: "Colchetes", left: "「", right: "」", transform: "bold" },
        { label: "Bolha", left: "", right: "", transform: "bubble" },
      ],
      guidance: [
        {
          label: "Apelido",
          body: "Cerca de 12 caracteres. Isso inclui os símbolos. Uma marca mais uma palavra curta cabe melhor do que uma moldura dos dois lados.",
        },
        {
          label: "ID do jogador",
          body: "O ID numérico não aceita estilo. Só o apelido é texto, e o jogo ainda filtra.",
        },
        {
          label: "Se for recusado",
          body: "Tire o enfeite primeiro. Um nome curto e simples que o jogo aceite vale mais do que um estilizado que ele corta.",
        },
      ],
      compatNote:
        "O Free Fire define o tamanho e o filtro, e os dois podem mudar. Nada aqui garante que o jogo aceite um nome decorado. O FancyFont não é afiliado ao Free Fire.",
      faq: [
        {
          q: "Por que meu nome do Free Fire foi cortado?",
          a: "O apelido tem cerca de 12 caracteres. Letras Unicode largas também contam. Encurte a palavra ou tire um símbolo e veja a prévia de novo.",
        },
        {
          q: "Dá para estilizar meu ID do Free Fire?",
          a: "Não. O ID é um número. Estilize o apelido, copie e cole no campo de nome do jogo.",
        },
        {
          q: "Esta é uma ferramenta oficial do Free Fire?",
          a: "Não. O FancyFont é independente e não é afiliado à Garena nem ao Free Fire.",
        },
      ],
    },
    "facebook-fonts": {
      navName: "Facebook",
      h1: "Gerador de fontes para Facebook",
      title: "Fontes para Facebook – Nome e intro com estilo",
      description:
        "Fontes Unicode para o nome e a intro do Facebook. O usuário continua simples. Veja o perfil e confira no Facebook.",
      intro:
        "O Facebook não tem seletor de fontes. O nome fica em torno de 50 caracteres e a intro curta em torno de 101. O usuário aceita só letras, números e pontos. Estilize o nome e a intro, e deixe o usuário simples.",
      defaultText: "Facebook",
      presets: [
        { label: "Negrito", left: "", right: "", transform: "bold" },
        { label: "Script", left: "", right: "", transform: "script" },
        { label: "Versalete", left: "", right: "", transform: "smallCaps" },
        { label: "Largo", left: "", right: "", transform: "fullwidth" },
      ],
      guidance: [
        {
          label: "Nome",
          body: "Cerca de 50 caracteres. O Facebook também espera um nome que pareça um nome, e pode desfazer caracteres incomuns. Cole e olhe o perfil salvo.",
        },
        {
          label: "Intro",
          body: "A intro curta tem cerca de 101 caracteres. Uma linha com estilo cabe. Um enfeite longo mais uma frase, muitas vezes não.",
        },
        {
          label: "Usuário",
          body: "Letras, números e pontos. Sem espaços e sem fontes Unicode. O estilo fica no nome e na intro.",
        },
      ],
      compatNote:
        "São caracteres Unicode, não um recurso do Facebook. O Facebook pode recusar ou trocar caracteres que não pareçam um nome. O FancyFont não é afiliado à Meta.",
      faq: [
        {
          q: "Posso usar fontes no meu nome do Facebook?",
          a: "Você pode colar Unicode no nome e na intro. O Facebook pode recusar ou reverter. O usuário não aceita fontes.",
        },
        {
          q: "Qual o tamanho da intro do Facebook?",
          a: "A intro curta tem cerca de 101 caracteres. A prévia avisa quando o texto passa do tamanho usual do nome ou da intro.",
        },
        {
          q: "Esta é uma ferramenta oficial do Facebook?",
          a: "Não. O FancyFont é independente. Facebook e as marcas pertencem à Meta.",
        },
      ],
    },
    "cod-name-generator": {
      navName: "COD",
      h1: "Gerador de nomes para Call of Duty",
      title: "Nomes para Call of Duty — copie o nome e a tag do clã",
      description:
        "Crie um nome no COD e a tag do clã para Call of Duty, com contador e prévia no cartão. Os estilos são Unicode. Teste no jogo antes de salvar.",
      intro:
        "Nomes para Call of Duty ficam, em geral, em torno de 16 caracteres, e o teto muda conforme o título. A tag do clã é outro campo, cerca de 2 a 4 caracteres: um nome decorado no COD não entra ali.",
      defaultText: "COD",
      presets: [
        { label: "Tag", left: "「", right: "」", transform: "bold" },
        { label: "Largo", left: "", right: "", transform: "fullwidth" },
        { label: "Marca", left: "★ ", right: "", transform: "smallCaps" },
        { label: "Bolha", left: "", right: "", transform: "bubble" },
      ],
      guidance: [
        {
          label: "Nome",
          body: "Cerca de 16 caracteres em muitos títulos de Call of Duty, incluindo Warzone e Mobile. O teto exato depende do jogo.",
        },
        {
          label: "Tag do clã",
          body: "Cerca de 2–4 caracteres. Não cole um nome longo com estilo na tag. Use uma tag curta e simples, e o estilo no nome.",
        },
        {
          label: "Filtros",
          body: "O jogo pode recusar símbolos ou mostrá-los como quadrados. Cole o nome na tela do jogo e leia de volta antes de ficar com ele.",
        },
      ],
      compatNote:
        "Call of Duty define os próprios limites de nome e de tag, e eles mudam por título. Um nome estilizado pode ser recusado. O FancyFont não é afiliado à Activision.",
      faq: [
        {
          q: "Como faço um nome no COD que caiba?",
          a: "Conte com cerca de 16 caracteres no nome do jogador. Warzone, Mobile e os títulos antigos não usam o mesmo teto, então o campo do jogo é o limite de verdade. Os artigos da Activision sobre troca de nome não fixam um teto oficial de 16. O número daqui é aproximado e não foi medido neste site.",
        },
        {
          q: "Nomes para Call of Duty cabem na tag do clã?",
          a: "Não. A tag fica em torno de 2 a 4 caracteres e costuma aceitar só texto simples. Essa faixa é uma estimativa para planejar, não um teto oficial. Deixe a tag curta e ponha o estilo no nome.",
        },
        {
          q: "O gerador de nomes do COD Mobile encolhe o nome?",
          a: "Mobile também usa um nome curto, mas o teto não é o mesmo de Warzone. Trate os 16 caracteres como uma estimativa, não como teto oficial, e confira no jogo antes de salvar. O FancyFont não é afiliado à Activision.",
        },
      ],
    },
    "youtube-fonts": {
      navName: "YouTube",
      h1: "Gerador de fontes para YouTube",
      title: "Fontes para YouTube – Nome e descrição do canal",
      description:
        "Fontes Unicode para o nome e a descrição de um canal do YouTube. O @usuário continua simples. Veja a prévia e confira no YouTube Studio.",
      intro:
        "O YouTube não tem seletor de fontes. O nome do canal fica em torno de 100 caracteres. O @usuário aceita letras, números, sublinhados e pontos, cerca de 30, e aparece em minúsculas. A descrição é bem mais longa, cerca de 1.000 caracteres.",
      defaultText: "YouTube",
      presets: [
        { label: "Negrito", left: "", right: "", transform: "bold" },
        { label: "Script", left: "", right: "", transform: "boldScript" },
        { label: "Versalete", left: "", right: "", transform: "smallCaps" },
        { label: "Largo", left: "", right: "", transform: "fullwidth" },
      ],
      guidance: [
        {
          label: "Nome do canal",
          body: "Cerca de 100 caracteres. É a linha com estilo que as pessoas veem no canal. Cole no YouTube Studio e confirme que salvou.",
        },
        {
          label: "Usuário",
          body: "O @usuário é texto simples: letras, números, sublinhados e pontos, cerca de 30 caracteres, em minúsculas. Fontes não entram ali.",
        },
        {
          label: "Descrição",
          body: "Cerca de 1.000 caracteres. Um nome com estilo mais uma frase normal cabe fácil. O nome do canal é o campo que acaba primeiro.",
        },
      ],
      compatNote:
        "São caracteres Unicode, não um recurso do YouTube. A fonte do YouTube decide se um caractere aparece, e o Studio pode recusar um nome. O FancyFont não é afiliado ao YouTube nem ao Google.",
      faq: [
        {
          q: "Meu usuário do YouTube pode usar uma fonte?",
          a: "Não. O @usuário é um nome simples em minúsculas. O estilo fica no nome do canal e na descrição.",
        },
        {
          q: "Onde colo um nome de canal com estilo?",
          a: "Copie aqui, abra o YouTube Studio, edite o canal e cole no nome. Confira a página pública depois de salvar.",
        },
        {
          q: "Esta é uma ferramenta oficial do YouTube?",
          a: "Não. O FancyFont é independente. YouTube e as marcas pertencem ao Google.",
        },
      ],
    },
    "adopt-me-fonts": {
      navName: "Adopt Me",
      h1: "Fontes para Adopt Me",
      title: "Fontes para Adopt Me que cabem – Nomes de exibição do Roblox",
      description:
        "Fontes curtas para o nome de exibição do Adopt Me no Roblox. Cerca de 20 caracteres, usuário comum e uma prévia antes de trocar.",
      intro:
        "O Adopt Me usa seu nome do Roblox. O usuário fica em letras, dígitos e um sublinhado. O nome de exibição que os outros veem fica em torno de 20 caracteres, e o Roblox ainda pode rejeitar um símbolo. Estas linhas são os visuais preppy e fofo, encurtados o bastante para caber.",
      defaultText: "Mila",
      presets: [
        { label: "Preppy", left: "🤍 ", right: " 🤍", transform: "smallCaps" },
        { label: "Um coração", left: "♥ ", right: "", transform: "smallCaps" },
        { label: "Fofa", left: "♡ ", right: " ♡", transform: "bubble" },
        { label: "Laço", left: "୨୧ ", right: "", transform: "bubble" },
      ],
      guidance: [
        {
          label: "Nome de exibição",
          body: "Cerca de 20 caracteres, coração incluído. É o nome acima do avatar no Adopt Me. A prévia avisa quando passa de 20. Um nome curto em versaletes com um coração cabe mais vezes do que um laço dos dois lados.",
        },
        {
          label: "Usuário",
          body: "Letras, dígitos e um único sublinhado, de 3 a 20 caracteres. Sem fontes e sem espaços. A prévia deixa esse usuário comum e põe o estilo no nome de exibição.",
        },
        {
          label: "O que realmente passa",
          body: "O Roblox filtra nomes de exibição e pode mudar as regras. Um nome estilizado pode virar quadrados ou ser rejeitado. Cole na tela de nome do Roblox e leia aquela prévia antes de confirmar. Trocas de nome de exibição são limitadas, então não gaste uma num nome que você não conferiu.",
        },
      ],
      compatNote:
        "Adopt Me é uma experiência do Roblox. Estes são caracteres Unicode, não um recurso do Adopt Me nem do Roblox. Nada aqui garante que o nome será aceito. O FancyFont não é afiliado ao Roblox nem ao Adopt Me.",
      faq: [
        {
          q: "Meu usuário do Adopt Me pode usar essas fontes?",
          a: "Não. O usuário é o nome de login do Roblox: letras, dígitos e um sublinhado. O estilo vai no nome de exibição.",
        },
        {
          q: "Por que meu nome fancy do Adopt Me foi rejeitado?",
          a: "O Roblox filtra o nome de exibição. Laços empilhados e símbolos raros falham primeiro. Tente a linha de um coração só, ou os versaletes sem enfeite, e confira a prévia do jogo.",
        },
        {
          q: "Esta é uma ferramenta oficial do Adopt Me?",
          a: "Não. O FancyFont é independente. Adopt Me e Roblox pertencem aos seus donos. Esta página só rascunha um nome que cabe no tamanho usual do nome de exibição.",
        },
      ],
    },
    "berry-avenue-fonts": {
      navName: "Berry Avenue",
      h1: "Gerador de fontes para Berry Avenue",
      title: "Fontes para Berry Avenue — copie grátis (~20 caracteres)",
      description:
        "Fontes grátis para Berry Avenue: digite o nome de exibição do Roblox, veja numa ficha e numa placa, e copie estilos perto de ~20 caracteres. Não é para o @usuário.",
      intro:
        "O Berry Avenue mostra seu nome de exibição do Roblox sobre o personagem. Esse campo fica em torno de 20 caracteres, e o usuário continua comum. A ficha desta página é um esboço, não a fonte de dentro do jogo.",
      pinnedPreview: {
        heading: "Prévia do nome de exibição",
        displayName: "Nome de exibição",
        username: "Usuário",
        sign: "Placa",
        showing: "Você está vendo a linha {label}. Copie outra linha abaixo se quiser outro visual.",
        counter: "{count} / ~{max} caracteres",
        over: "Passou do tamanho aproximado do nome de exibição.",
        usernameNote: "O @usuário fica em letras, dígitos e um sublinhado. Essas fontes não entram nesse campo.",
        signNote: "Uma placa ou uma fala no chat pode ser mais longa. Esta página não guarda um limite publicado para esses campos.",
        approxNote:
          "O ~20 é aproximado e não foi medido dentro do Berry Avenue neste site. A conta é de caracteres visíveis (grafemas).",
      },
      defaultText: "Blair",
      presets: [
        { label: "Fita", left: "𝜗𝜚 ", right: " 𝜗𝜚", transform: "boldScript" },
        { label: "Laço", left: "🎀 ", right: "", transform: "boldScript" },
        { label: "Coquette", left: "𐙚 ", right: " 𐙚", transform: "boldScript" },
        { label: "Quieto", left: "", right: "", transform: "smallCaps" },
      ],
      guidance: [
        {
          label: "Nome de exibição",
          body: "Cerca de 20 caracteres. É o nome acima da cabeça no Berry Avenue. Corações, laços e letras script contam. A prévia avisa quando passa de 20.",
        },
        {
          label: "Usuário",
          body: "Letras, dígitos e um único sublinhado. As outras pessoas ainda te acham por esse usuário comum. Fontes não entram aqui.",
        },
        {
          label: "Frases do chat",
          body: "Uma apresentação de RP no chat pode ser mais longa do que o nome acima da cabeça. Deixe o nome de exibição em uma linha curta, e ponha a frase longa no chat só depois de ver como ela aparece no seu aparelho. O laço pequeno pode aparecer como um quadrado; o emoji de fita é o reserva.",
        },
      ],
      compatNote:
        "Berry Avenue roda no Roblox. Estes são caracteres Unicode, não um recurso do jogo, e o Roblox pode rejeitá-los. O FancyFont não é afiliado ao Roblox nem ao Berry Avenue.",
      faq: [
        {
          q: "Quais fontes servem para Berry Avenue?",
          a: "Comece com um nome de exibição de cerca de 20 caracteres. A linha quieta de versaletes não acrescenta símbolos. Some um laço só se a tela de nome do próprio Roblox ainda aceitar. São caracteres Unicode para colar, não um arquivo de fonte.",
        },
        {
          q: "Fontes de Berry Avenue entram no usuário?",
          a: "Causa: o artigo de ajuda da Roblox trata o nome de exibição e o usuário como campos diferentes. O nome de exibição é o que os outros veem. O @usuário é o nome de login. Correção: ponha as letras estilizadas só no nome de exibição. Nesta página a regra de encaixe do usuário é letras, dígitos e um sublinhado. Uma fala de RP mais longa fica no chat.",
        },
        {
          q: "Por que o Roblox rejeitou meu nome de Berry Avenue?",
          a: "Causa: esse artigo de ajuda diz que os nomes de exibição são filtrados, e um nome que fere as regras pode voltar a ser o seu usuário. A página de filtragem de texto da Roblox cobre o texto que outros jogadores veem, inclusive um telefone numa placa. Correção: tire os símbolos raros, deixe o nome de exibição dentro dos 3–20 informados pela Roblox, não coloque dados pessoais, e salve só depois que a tela da Roblox aceitar.",
        },
        {
          q: "Isto é um gerador de fontes para Berry Avenue?",
          a: "Ele rascunha um nome de exibição para copiar. Não é uma ferramenta oficial do Berry Avenue nem do Roblox, e nada aqui garante que o jogo aceite os caracteres.",
        },
      ],
    },
    "fortnite-name-generator": {
      navName: "Fortnite",
      h1: "Gerador de nomes para Fortnite",
      title: "Gerador de nomes de Fortnite – nomes com estilo",
      description:
        "Nomes Unicode estilosos para Fortnite. Veja a prévia do nome, copie e confira o tamanho antes de salvar na sua conta Epic.",
      intro:
        "O Fortnite mostra seu nome de exibição da Epic em todos os lobbies, telas de abate e replays — um campo, geralmente cerca de 16 caracteres. Gere um nome decorado, veja a prévia e salve nas configurações da sua conta Epic.",
      defaultText: "Victory",
      presets: [
        { label: "Estrelas", left: "★ ", right: " ★", transform: "sansBold" },
        { label: "Colchetes", left: "「", right: "」", transform: "bold" },
        { label: "Marca tempestade", left: "⚡ ", right: "", transform: "smallCaps" },
        { label: "Moldura sombria", left: "༺", right: "༻", transform: "fraktur" },
      ],
      guidance: [
        {
          label: "Nome de exibição",
          body: "Um campo que aparece em tudo o que você joga, geralmente cerca de 16 caracteres. A prévia conta pontos de código e avisa quando passa.",
        },
        {
          label: "Segue sua conta Epic",
          body: "O nome de exibição é da conta: mude nas configurações da Epic e o novo nome aparece em todas as plataformas em que você entra.",
        },
        {
          label: "Símbolos e o filtro",
          body: "O filtro da Epic decide quais caracteres sobrevivem. Alfabetos de um caractere por letra, como negrito e versaletes, aguentam mais que enfeites com marcas empilhadas — se o lobby mostra quadrados, escolha um estilo mais simples.",
        },
        {
          label: "O que fica simples",
          body: "O ID da sua conta Epic é um número. Estilize só o nome de exibição e confira no lobby se cada caractere aparece.",
        },
      ],
      compatNote:
        "Fortnite e a Epic Games definem as próprias regras de nome e podem mudá-las. Nada aqui garante que um nome decorado seja aceito — gere, copie e confira no jogo. O FancyFont não é afiliado à Epic Games nem ao Fortnite.",
      faq: [
        {
          q: "Qual o tamanho de um nome no Fortnite?",
          a: "Conte com cerca de 16 caracteres. A prévia conta pontos de código e avisa antes de copiar; o campo do jogo é o juiz final.",
        },
        {
          q: "Como mudo meu nome no Fortnite?",
          a: "Pelas configurações da sua conta Epic no site, ou na seção de conta no jogo. O nome de exibição é da conta, então a mudança te segue em todas as plataformas.",
        },
        {
          q: "Posso colocar símbolos no meu nome do Fortnite?",
          a: "Caracteres Unicode estilizados geralmente são salvos, mas o filtro da Epic pode cortar ou recusar. Alfabetos mais simples — negrito, versaletes — sobrevivem mais que enfeites pesados.",
        },
        {
          q: "Isso é uma ferramenta oficial do Fortnite?",
          a: "Não. O FancyFont é independente e não é afiliado à Epic Games nem ao Fortnite.",
        },
      ],
    },
  },
  "zh-cn": {
    "pubg-name-generator": {
      navName: "PUBG",
      h1: "PUBG 名字生成器",
      title: "PUBG 名字生成器 – 有样式的玩家名",
      description: "给 PUBG 用的 Unicode 名字。先在大厅卡片里看一遍，再复制，粘贴进游戏前先看长度。",
      intro:
        "PUBG 没有字体选择器。玩家名是一个短字段，通常大约 16 个字符，有的模式更短。生成名字，打开预览，再粘贴到游戏自己的改名界面。",
      defaultText: "PUBG",
      presets: [
        { label: "小队框", left: "「", right: "」", transform: "bold" },
        { label: "宽体", left: "", right: "", transform: "fullwidth" },
        { label: "标记", left: "☠︎ ", right: "", transform: "smallCaps" },
        { label: "气泡", left: "", right: "", transform: "bubble" },
      ],
      guidance: [
        {
          label: "玩家名",
          body: "通常大约 16 个字符。宽字体和长装饰很快就会超。预览会标出超过这个常见长度的名字。",
        },
        {
          label: "更短的模式",
          body: "部分 PUBG Mobile 流程比 PC 名字更短。如果游戏截断或拒绝，把名字改短再试。",
        },
        {
          label: "保持原样的部分",
          body: "玩家 ID 是数字。只给别人看见的名字加样式，然后在游戏里确认每个字符都能画出来。",
        },
        {
          label: "BGMI",
          body: "BGMI（Battlegrounds Mobile India）是 PUBG Mobile 的印度版本，用的是同一个名字字段。同样按约 16 个字符来规划。本站未针对 BGMI 专门实测，以游戏内为准。",
        },
      ],
      compatNote:
        "PUBG 有自己的过滤规则，而且会改。有样式的名字可能变成方框，也可能被拒绝。先在游戏里试过再拿去用。FancyFont 与 PUBG 没有隶属关系。",
      faq: [
        {
          q: "PUBG 名字可以多长？",
          a: "按大约 16 个字符来准备。有的模式，包括 PUBG Mobile 的一部分，更短。超长提示按码位计算，超过 16 会给出提示。",
        },
        {
          q: "其他玩家能看到这个样式吗？",
          a: "只有对方的游戏版本有这个字形，而且名字通过过滤，才会显示。贴进大厅看一眼。如果是方框，换一个更普通的样式。",
        },
        {
          q: "这是 PUBG 官方工具吗？",
          a: "不是。FancyFont 是独立工具。PUBG 及其标识属于各自的权利人。",
        },
      ],
    },
    "free-fire-name-generator": {
      navName: "Free Fire",
      h1: "Free Fire 名字生成器",
      title: "Free Fire 名字生成器 – 短昵称",
      description: "给 Free Fire 用的短 Unicode 昵称。名字栏大约 12 个字符。先预览，再复制，到游戏里试一次。",
      intro:
        "Free Fire 的昵称很短，通常大约 12 个字符。长装饰放不下。名字本身留短，看过预览，再粘贴到游戏的名字栏。",
      defaultText: "Fire",
      presets: [
        { label: "闪电", left: "⚡", right: "", transform: "bold" },
        { label: "星星", left: "★", right: "", transform: "smallCaps" },
        { label: "括号", left: "「", right: "」", transform: "bold" },
        { label: "气泡", left: "", right: "", transform: "bubble" },
      ],
      guidance: [
        {
          label: "昵称",
          body: "大约 12 个字符，符号也算在里面。一个标记加一个短词，比两边都加框更容易放下。",
        },
        {
          label: "玩家 ID",
          body: "数字 ID 不能加样式。只有昵称是文字，而且游戏仍会过滤。",
        },
        {
          label: "如果被拒绝",
          body: "先去掉装饰。一个游戏肯收的短名字，比一个被截断的花样名字有用。",
        },
      ],
      compatNote:
        "Free Fire 规定昵称长度和字符过滤，两者都会变。这里不保证游戏会接受装饰过的名字。FancyFont 与 Free Fire 没有隶属关系。",
      faq: [
        {
          q: "为什么我的 Free Fire 名字被截断了？",
          a: "昵称大约 12 个字符。宽的 Unicode 字母也算。把词缩短，或去掉一个符号，再看一次预览。",
        },
        {
          q: "能给 Free Fire 的 ID 加样式吗？",
          a: "不能。ID 是数字。给昵称加样式，复制后粘贴到游戏的名字栏。",
        },
        {
          q: "这是 Free Fire 官方工具吗？",
          a: "不是。FancyFont 是独立工具，与 Garena 和 Free Fire 没有隶属关系。",
        },
      ],
    },
    "facebook-fonts": {
      navName: "Facebook",
      h1: "Facebook 字体生成器",
      title: "Facebook 字体生成器 – 名字和简介",
      description: "给 Facebook 名字和简介用的 Unicode 字体。用户名保持普通文字。先预览资料页，再贴到 Facebook 里检查。",
      intro:
        "Facebook 没有字体选择器。名字大约 50 个字符，短简介大约 101 个字符。用户名只能是字母、数字和句点。样式放在名字和简介里，用户名保持原样。",
      defaultText: "Facebook",
      presets: [
        { label: "粗体", left: "", right: "", transform: "bold" },
        { label: "手写", left: "", right: "", transform: "script" },
        { label: "小型大写", left: "", right: "", transform: "smallCaps" },
        { label: "宽体", left: "", right: "", transform: "fullwidth" },
      ],
      guidance: [
        {
          label: "名字",
          body: "大约 50 个字符。Facebook 还希望名字看起来像名字，不寻常的字符可能被改回去。粘贴后看一眼保存下来的资料页。",
        },
        {
          label: "简介",
          body: "短简介大约 101 个字符。一行有样式的字放得下。长装饰再加一句话，常常放不下。",
        },
        {
          label: "用户名",
          body: "字母、数字和句点。不能有空格，也不能用 Unicode 字体。样式放在名字和简介。",
        },
      ],
      compatNote:
        "这些是 Unicode 字符，不是 Facebook 的功能。不像名字的字符可能被拒绝或替换。生成后粘贴，再看保存结果。FancyFont 与 Meta 没有隶属关系。",
      faq: [
        {
          q: "Facebook 名字能用这些字体吗？",
          a: "名字和简介可以粘贴 Unicode。Facebook 可能拒绝，也可能改回去。用户名完全不能用字体。",
        },
        {
          q: "Facebook 简介有多长？",
          a: "短简介大约 101 个字符。文字超过名字或简介的常见长度时，预览会提示。",
        },
        {
          q: "这是 Facebook 官方工具吗？",
          a: "不是。FancyFont 是独立工具。Facebook 及其标识属于 Meta。",
        },
      ],
    },
    "cod-name-generator": {
      navName: "COD",
      h1: "COD 名字生成器",
      title: "COD 名字生成器 – 使命召唤玩家名",
      description: "给使命召唤用的有样式的玩家名。名字很短，战队标签更短。先预览，再在游戏里试。",
      intro:
        "使命召唤的玩家名通常大约 16 个字符，不同作品上限不一样。战队标签是另外一个大约 4 个字符的字段，长的花样名字不要贴到那里。",
      defaultText: "COD",
      presets: [
        { label: "标签", left: "「", right: "」", transform: "bold" },
        { label: "宽体", left: "", right: "", transform: "fullwidth" },
        { label: "标记", left: "★ ", right: "", transform: "smallCaps" },
        { label: "气泡", left: "", right: "", transform: "bubble" },
      ],
      guidance: [
        {
          label: "玩家名",
          body: "很多使命召唤作品大约 16 个字符，包括 Warzone 和 Mobile。真正的上限取决于你在玩的那一作。",
        },
        {
          label: "战队标签",
          body: "大约 2 到 4 个字符。不要把长的花样名字贴进战队标签。标签保持短而普通，样式放在玩家名上。",
        },
        {
          label: "过滤",
          body: "游戏可能拒绝符号，也可能把它们显示成方框。在游戏自己的界面里贴一次，读回来再决定要不要留。",
        },
      ],
      compatNote:
        "使命召唤自己规定名字和战队标签的长度，而且各作不同。有样式的名字可能被拒绝。FancyFont 与 Activision 没有隶属关系。",
      faq: [
        {
          q: "COD 战队标签能用这些字体吗？",
          a: "战队标签只有大约 4 个字符。这个数字是规划时的估计，不是核实过的官方上限。有样式的长名字放不下。标签保持短而普通，样式放在玩家名上。",
        },
        {
          q: "使命召唤的名字有多长？",
          a: "按大约 16 个字符来准备。Warzone、Mobile 和旧作并不一样，游戏自己的输入框才是真正的上限。Activision 的改名文章没有写死 16 这个硬上限。",
        },
        {
          q: "这是使命召唤官方工具吗？",
          a: "不是。FancyFont 是独立工具，与 Activision 没有隶属关系。",
        },
      ],
    },
    "youtube-fonts": {
      navName: "YouTube",
      h1: "YouTube 字体生成器",
      title: "YouTube 字体生成器 – 频道名和简介",
      description: "给 YouTube 频道名和简介用的 Unicode 字体。@账号保持普通文字。先预览频道，再在 YouTube Studio 里粘贴检查。",
      intro:
        "YouTube 没有字体选择器。频道名大约 100 个字符。@账号是字母、数字、下划线和句点，大约 30 个字符，显示为小写。简介长得多，大约 1000 个字符。",
      defaultText: "YouTube",
      presets: [
        { label: "粗体", left: "", right: "", transform: "bold" },
        { label: "手写", left: "", right: "", transform: "boldScript" },
        { label: "小型大写", left: "", right: "", transform: "smallCaps" },
        { label: "宽体", left: "", right: "", transform: "fullwidth" },
      ],
      guidance: [
        {
          label: "频道名",
          body: "大约 100 个字符。这是别人在频道上看到的那一行。贴进 YouTube Studio，确认已经保存。",
        },
        {
          label: "账号",
          body: "@账号是普通文字：字母、数字、下划线和句点，大约 30 个字符，显示为小写。字体不要放在这里。",
        },
        {
          label: "简介",
          body: "大约 1000 个字符。一个有样式的名字加一句普通的话很容易放下。先碰到上限的是频道名。",
        },
      ],
      compatNote:
        "这些是 Unicode 字符，不是 YouTube 的功能。能不能显示取决于 YouTube 的字体，Studio 也可能拒绝一个名字。FancyFont 与 YouTube 和 Google 没有隶属关系。",
      faq: [
        {
          q: "YouTube 账号能用花样字体吗？",
          a: "不能。@账号是小写的普通用户名。样式放在频道名和简介里。",
        },
        {
          q: "有样式的频道名贴到哪里？",
          a: "在这里复制，打开 YouTube Studio，编辑频道，贴进频道名。保存后再看一眼公开的频道页。",
        },
        {
          q: "这是 YouTube 官方工具吗？",
          a: "不是。FancyFont 是独立工具。YouTube 及其标识属于 Google。",
        },
      ],
    },
    "adopt-me-fonts": {
      navName: "Adopt Me",
      h1: "Adopt Me 字体",
      title: "能放进 Adopt Me 的字体 – Roblox 显示名",
      description:
        "给 Adopt Me 用的短名字字体，贴在 Roblox 显示名上。大约 20 个字符，用户名保持普通字母，改名之前先看预览。",
      intro:
        "Adopt Me 用的是你的 Roblox 名字。用户名只能是字母、数字和一个下划线。别人看到的显示名大约 20 个字符，Roblox 仍可能拒绝某个符号。下面是 preppy 和可爱两种样子，并且缩短到可以直接试用。",
      defaultText: "Mila",
      presets: [
        { label: "Preppy", left: "🤍 ", right: " 🤍", transform: "smallCaps" },
        { label: "一颗心", left: "♥ ", right: "", transform: "smallCaps" },
        { label: "可爱", left: "♡ ", right: " ♡", transform: "bubble" },
        { label: "蝴蝶结", left: "୨୧ ", right: "", transform: "bubble" },
      ],
      guidance: [
        {
          label: "显示名",
          body: "大约 20 个字符，爱心也算。这是 Adopt Me 里头像上方的名字。预览超过 20 会提示。短的小型大写加一颗心，比两侧都加蝴蝶结更容易放下。",
        },
        {
          label: "用户名",
          body: "字母、数字和一个下划线，3 到 20 个字符。不能用花字，也不能有空格。预览里用户名保持普通字符，花字只放在显示名。",
        },
        {
          label: "真正能通过的",
          body: "Roblox 会过滤显示名，规则也会变。花字可能变成方块，或直接被拒绝。先贴到 Roblox 自己的改名页，看它的预览，再确认。显示名不能频繁改，没看过的名字不要拿去用掉一次机会。中文通常过不了这个过滤。",
        },
      ],
      compatNote:
        "Adopt Me 是 Roblox 里的体验。这些是 Unicode 字符，不是 Adopt Me 或 Roblox 的功能。这里不保证名字会被接受。FancyFont 与 Roblox 和 Adopt Me 没有隶属关系。",
      faq: [
        {
          q: "Adopt Me 的用户名能用这些字体吗？",
          a: "不能。用户名是 Roblox 的登录名：字母、数字和一个下划线。花字放进显示名。",
        },
        {
          q: "为什么我的 Adopt Me 花字名字被拒绝了？",
          a: "Roblox 会过滤显示名。叠在一起的蝴蝶结和生僻符号最先失败。试一试只有一颗心的那一行，或没有装饰的小型大写，并看游戏自己的预览。",
        },
        {
          q: "这是 Adopt Me 官方工具吗？",
          a: "不是。FancyFont 是独立工具。Adopt Me 和 Roblox 属于各自的权利人。这一页只帮你起草一个符合常见显示名长度的名字。",
        },
      ],
    },
    "berry-avenue-fonts": {
      navName: "Berry Avenue",
      h1: "Berry Avenue 字体生成器",
      title: "Berry Avenue 字体生成器 — 约 20 字显示名可复制",
      description:
        "在资料卡和牌子上预览 Berry Avenue 的 Roblox 显示名，复制大约 20 个字符以内的样式。这是给头顶名字用的，不是用户名。本站没有在游戏里实测这个上限。",
      intro:
        "Berry Avenue 在角色头顶显示 Roblox 显示名。这个框大约 20 个字符，用户名保持普通字母。这一页的资料卡只是示意，不是游戏里的字体。",
      pinnedPreview: {
        heading: "显示名实时预览",
        displayName: "显示名",
        username: "用户名",
        sign: "牌子",
        showing: "现在看的是「{label}」这一行。想要别的样子，复制下面另一行。",
        counter: "{count} / 约 {max} 个字符",
        over: "超过了显示名的大约长度。",
        usernameNote: "用户名只留字母、数字和一个下划线。这些字体不放在这个字段。",
        signNote: "牌子或聊天句子可以更长。这一页没有这两处的公开字数上限。",
        approxNote: "约 20 是估计值，本站没有在 Berry Avenue 里实测。计数按可见字符（字素）。",
      },
      defaultText: "Blair",
      presets: [
        { label: "丝带", left: "𝜗𝜚 ", right: " 𝜗𝜚", transform: "boldScript" },
        { label: "蝴蝶结", left: "🎀 ", right: "", transform: "boldScript" },
        { label: "Coquette", left: "𐙚 ", right: " 𐙚", transform: "boldScript" },
        { label: "安静", left: "", right: "", transform: "smallCaps" },
      ],
      guidance: [
        {
          label: "显示名",
          body: "大约 20 个字符。这是 Berry Avenue 里头顶的名字。爱心、蝴蝶结和花体字母都要算进去。预览超过 20 会提示。",
        },
        {
          label: "用户名",
          body: "字母、数字和一个下划线。别人仍然用这个普通用户名找到你。花字不要放在这里。",
        },
        {
          label: "聊天句子",
          body: "聊天里的角色介绍可以比头顶名字更长。显示名保持一行短的，长句子先在你自己的设备上看它画得出来，再贴进聊天。小蝴蝶结可能变成方块，丝带 emoji 是退路。中文原样保留，但显示名过滤通常不收中文。",
        },
      ],
      compatNote:
        "Berry Avenue 运行在 Roblox 上。这些是 Unicode 字符，不是游戏功能，Roblox 可以拒绝它们。FancyFont 与 Roblox 和 Berry Avenue 没有隶属关系。",
      faq: [
        {
          q: "哪些字体适合 Berry Avenue？",
          a: "先从大约 20 个字符的显示名开始。安静的小型大写那一行不加符号。只有 Roblox 自己的改名页还接受时，再加一个蝴蝶结。这些是用来粘贴的 Unicode 字符，不是要安装的字体文件。",
        },
        {
          q: "Berry Avenue 字体是给用户名用的吗？",
          a: "不能。原因：Roblox 的帮助文章把显示名和用户名分成两个字段。显示名是别人看到的名字。@用户名是登录名。处理：花体只放在显示名上。这一页给用户名的适配规则是字母、数字和一个下划线。更长的角色扮演句子放在聊天里。",
        },
        {
          q: "为什么 Roblox 拒绝了我的 Berry Avenue 名字？",
          a: "原因：同一篇帮助文章写明显示名会被过滤，违反规则的名字可能被改回用户名。Roblox 的文字过滤页面也覆盖别人能看见的文字，包括牌子上的电话号码。处理：去掉生僻符号，把显示名保持在官方公布的 3–20 个字符以内，不要写个人信息，等 Roblox 自己的页面接受了再保存。",
        },
        {
          q: "这是 Berry Avenue 字体生成器吗？",
          a: "它帮你起草一个可以复制的显示名。不是 Berry Avenue 或 Roblox 的官方工具，也不保证游戏会收下这些字符。",
        },
      ],
    },
    "fortnite-name-generator": {
      navName: "Fortnite",
      h1: "Fortnite 名字生成器",
      title: "Fortnite 名字生成器 – 花体显示名",
      description:
        "给 Fortnite 用的 Unicode 花体名字。预览显示名、复制，并在保存到 Epic 账号前确认长度。",
      intro:
        "Fortnite 在每个大厅、击杀播报和回放里显示你的 Epic 显示名——只有一个字段，通常约 16 个字符。生成一个带装饰的名字，预览后到 Epic 账号设置里保存。",
      defaultText: "Victory",
      presets: [
        { label: "星环", left: "★ ", right: " ★", transform: "sansBold" },
        { label: "方括号", left: "「", right: "」", transform: "bold" },
        { label: "风暴标", left: "⚡ ", right: "", transform: "smallCaps" },
        { label: "暗黑框", left: "༺", right: "༻", transform: "fraktur" },
      ],
      guidance: [
        {
          label: "显示名",
          body: "你在所有对局里被看到的那个字段，通常约 16 个字符。超长提示按码点计算，超过长度会标出。",
        },
        {
          label: "跟着 Epic 账号走",
          body: "显示名是账号级的：在 Epic 账号设置里修改，新名字会出现在你登录的每个平台。",
        },
        {
          label: "符号与过滤器",
          body: "哪些字符能活下来由 Epic 的过滤器决定。粗体、小型大写这类单个字符一一对应的字母表，比叠加符号的装饰更稳——大厅里看到方块就换更朴素的样式。",
        },
        {
          label: "保持原样的部分",
          body: "你的 Epic 账号 ID 是数字。只给显示名加样式，然后到大厅确认每个字符都能画出来。",
        },
      ],
      compatNote:
        "Fortnite 和 Epic Games 自定名字规则且会改动。这里不保证带装饰的名字会被接受——生成、复制、到游戏里确认。FancyFont 与 Epic Games 和 Fortnite 没有隶属关系。",
      faq: [
        {
          q: "Fortnite 名字能多长？",
          a: "按约 16 个字符规划。超长提示按码点计算，并在复制前警告；游戏内字段才是最终裁判。",
        },
        {
          q: "怎么改 Fortnite 名字？",
          a: "在网页端的 Epic 账号设置，或游戏内的账号分区修改。显示名是账号级的，改动会跟着你到每个平台。",
        },
        {
          q: "Fortnite 名字里能用符号吗？",
          a: "带样式的 Unicode 字符通常能保存，但 Epic 的过滤器可能裁掉或拒绝。朴素的字母表——粗体、小型大写——比厚重的装饰存活率高。",
        },
        {
          q: "这是官方 Fortnite 工具吗？",
          a: "不是。FancyFont 独立运营，与 Epic Games 和 Fortnite 没有隶属关系。",
        },
      ],
    },
  },
  id: {
    "pubg-name-generator": {
      navName: "PUBG",
      h1: "Generator nama PUBG",
      title: "Generator nama PUBG – Nama pemain bergaya",
      description:
        "Nama Unicode untuk PUBG. Lihat namanya di kartu lobi, salin, dan cek panjangnya sebelum menempel di game.",
      intro:
        "PUBG tidak punya pemilih font. Nama pemain adalah satu kolom pendek, biasanya sekitar 16 karakter, dan beberapa mode lebih pendek. Buat nama, lihat pratinjau, lalu tempel di layar nama milik game.",
      defaultText: "PUBG",
      presets: [
        { label: "Skuad", left: "「", right: "」", transform: "bold" },
        { label: "Lebar", left: "", right: "", transform: "fullwidth" },
        { label: "Tanda", left: "☠︎ ", right: "", transform: "smallCaps" },
        { label: "Gelembung", left: "", right: "", transform: "bubble" },
      ],
      guidance: [
        {
          label: "Nama pemain",
          body: "Biasanya sekitar 16 karakter. Font lebar dan hiasan panjang cepat melampaui batas. Pratinjau menandai nama yang melewati panjang yang biasa.",
        },
        {
          label: "Mode yang lebih pendek",
          body: "Sebagian alur PUBG Mobile menerima lebih sedikit karakter daripada nama di PC. Jika game memotong atau menolak, perpendek lalu coba lagi.",
        },
        {
          label: "Yang tetap biasa",
          body: "ID pemain adalah angka. Beri gaya pada nama yang dilihat pemain lain, lalu cek di game bahwa setiap karakter benar-benar tergambar.",
        },
        {
          label: "BGMI",
          body: "BGMI — Battlegrounds Mobile India — adalah versi India dari PUBG Mobile dan memakai kolom nama yang sama. Tetap rencanakan sekitar 16 karakter. Tidak ada yang diuji khusus untuk BGMI di sini — biarkan gamenya yang memutuskan.",
        },
      ],
      compatNote:
        "PUBG memakai filternya sendiri dan bisa mengubahnya. Nama bergaya bisa jadi kotak atau ditolak. Uji di game sebelum kamu mengandalkannya. FancyFont tidak berafiliasi dengan PUBG.",
      faq: [
        {
          q: "Berapa panjang nama PUBG?",
          a: "Siapkan sekitar 16 karakter. Beberapa mode, termasuk bagian PUBG Mobile, lebih pendek. Pratinjau menghitung code point dan memperingatkan di atas 16.",
        },
        {
          q: "Apakah pemain lain melihat gayanya?",
          a: "Hanya jika build game mereka punya glyph itu dan namanya lolos filter. Tempel dan lihat di lobi. Jika yang muncul kotak, pilih gaya yang lebih sederhana.",
        },
        {
          q: "Apakah ini alat resmi PUBG?",
          a: "Bukan. FancyFont berdiri sendiri. PUBG dan mereknya milik pemiliknya.",
        },
      ],
    },
    "free-fire-name-generator": {
      navName: "Free Fire",
      h1: "Generator nama Free Fire",
      title: "Generator nama Free Fire – Nama panggilan pendek",
      description:
        "Nama panggilan Unicode pendek untuk Free Fire. Kolom nama sekitar 12 karakter. Lihat pratinjau, salin, dan uji di game.",
      intro:
        "Nama panggilan Free Fire sangat pendek, biasanya sekitar 12 karakter. Hiasan panjang tidak muat. Biarkan nama dasarnya pendek, lihat pratinjau, lalu tempel di kolom nama game.",
      defaultText: "Fire",
      presets: [
        { label: "Petir", left: "⚡", right: "", transform: "bold" },
        { label: "Bintang", left: "★", right: "", transform: "smallCaps" },
        { label: "Kurung", left: "「", right: "」", transform: "bold" },
        { label: "Gelembung", left: "", right: "", transform: "bubble" },
      ],
      guidance: [
        {
          label: "Nama panggilan",
          body: "Sekitar 12 karakter. Simbol ikut dihitung. Satu tanda plus kata pendek lebih sering muat daripada bingkai di kedua sisi.",
        },
        {
          label: "ID pemain",
          body: "ID angka tidak bisa diberi gaya. Hanya nama panggilan yang berupa teks, dan game tetap menyaringnya.",
        },
        {
          label: "Jika ditolak",
          body: "Lepas hiasannya dulu. Nama pendek biasa yang diterima game lebih berguna daripada nama bergaya yang terpotong.",
        },
      ],
      compatNote:
        "Free Fire yang menentukan panjang dan filter karakter, dan keduanya bisa berubah. Tidak ada jaminan game akan menerima nama berhias. FancyFont tidak berafiliasi dengan Free Fire.",
      faq: [
        {
          q: "Mengapa nama Free Fire saya terpotong?",
          a: "Nama panggilan sekitar 12 karakter. Huruf Unicode yang lebar juga dihitung. Perpendek katanya atau hapus satu simbol, lalu lihat pratinjau lagi.",
        },
        {
          q: "Bisakah ID Free Fire diberi gaya?",
          a: "Tidak. ID adalah angka. Beri gaya pada nama panggilan, salin, dan tempel di kolom nama game.",
        },
        {
          q: "Apakah ini alat resmi Free Fire?",
          a: "Bukan. FancyFont berdiri sendiri dan tidak berafiliasi dengan Garena atau Free Fire.",
        },
      ],
    },
    "facebook-fonts": {
      navName: "Facebook",
      h1: "Generator font Facebook",
      title: "Font Facebook – Nama dan intro bergaya",
      description:
        "Font Unicode untuk nama dan intro Facebook. Username tetap teks biasa. Lihat profilnya, lalu tempel dan cek di Facebook.",
      intro:
        "Facebook tidak punya pemilih font. Nama sekitar 50 karakter dan intro pendek sekitar 101. Username hanya huruf, angka, dan titik. Beri gaya pada nama dan intro, dan biarkan username biasa.",
      defaultText: "Facebook",
      presets: [
        { label: "Tebal", left: "", right: "", transform: "bold" },
        { label: "Skrip", left: "", right: "", transform: "script" },
        { label: "Kapital kecil", left: "", right: "", transform: "smallCaps" },
        { label: "Lebar", left: "", right: "", transform: "fullwidth" },
      ],
      guidance: [
        {
          label: "Nama",
          body: "Sekitar 50 karakter. Facebook juga mengharapkan nama yang terlihat seperti nama, dan bisa mengembalikan karakter yang tidak biasa. Tempel lalu lihat profil yang tersimpan.",
        },
        {
          label: "Intro",
          body: "Intro pendek sekitar 101 karakter. Satu baris bergaya muat. Hiasan panjang plus kalimat sering tidak muat.",
        },
        {
          label: "Username",
          body: "Huruf, angka, dan titik. Tanpa spasi dan tanpa font Unicode. Gayanya ada di nama dan intro.",
        },
      ],
      compatNote:
        "Ini karakter Unicode, bukan fitur Facebook. Facebook bisa menolak atau mengganti karakter yang tidak terlihat seperti nama. FancyFont tidak berafiliasi dengan Meta.",
      faq: [
        {
          q: "Bisakah nama Facebook saya memakai font?",
          a: "Kamu bisa menempel Unicode di nama dan intro. Facebook bisa menolak atau mengembalikannya. Username sama sekali tidak bisa memakai font.",
        },
        {
          q: "Berapa panjang intro Facebook?",
          a: "Intro pendek sekitar 101 karakter. Pratinjau memperingatkan saat teks melewati panjang nama atau intro yang biasa.",
        },
        {
          q: "Apakah ini alat resmi Facebook?",
          a: "Bukan. FancyFont berdiri sendiri. Facebook dan mereknya milik Meta.",
        },
      ],
    },
    "cod-name-generator": {
      navName: "COD",
      h1: "Generator nama COD",
      title: "Generator nama COD – Nama pemain Call of Duty",
      description:
        "Nama pemain bergaya untuk Call of Duty. Namanya pendek, dan tag klan lebih pendek. Lihat pratinjau, lalu uji di game.",
      intro:
        "Nama pemain Call of Duty biasanya sekitar 16 karakter, dan batasnya beda tiap judul. Tag klan adalah kolom terpisah sekitar 4 karakter, jadi nama berhias tidak masuk ke sana.",
      defaultText: "COD",
      presets: [
        { label: "Tag", left: "「", right: "」", transform: "bold" },
        { label: "Lebar", left: "", right: "", transform: "fullwidth" },
        { label: "Tanda", left: "★ ", right: "", transform: "smallCaps" },
        { label: "Gelembung", left: "", right: "", transform: "bubble" },
      ],
      guidance: [
        {
          label: "Nama pemain",
          body: "Sekitar 16 karakter di banyak judul Call of Duty, termasuk Warzone dan Mobile. Batas pastinya tergantung game yang kamu mainkan.",
        },
        {
          label: "Tag klan",
          body: "Sekitar 2–4 karakter. Jangan tempel nama panjang bergaya ke tag klan. Pakai tag pendek yang biasa, dan taruh gaya di nama pemain.",
        },
        {
          label: "Filter",
          body: "Game bisa menolak simbol atau menampilkannya sebagai kotak. Tempel namanya di layar milik game dan baca kembali sebelum kamu menyimpannya.",
        },
      ],
      compatNote:
        "Call of Duty yang menentukan batas nama dan tag klan, dan batas itu beda tiap judul. Nama bergaya bisa ditolak. FancyFont tidak berafiliasi dengan Activision.",
      faq: [
        {
          q: "Bisakah tag klan COD memakai font ini?",
          a: "Tag klan hanya beberapa karakter, sekitar 4. Angka itu perkiraan untuk merencanakan, bukan batas resmi. Nama bergaya tidak muat. Biarkan tag pendek dan biasa, lalu beri gaya pada nama pemain.",
        },
        {
          q: "Berapa panjang nama Call of Duty?",
          a: "Siapkan sekitar 16 karakter. Warzone, Mobile, dan judul lama tidak sama, jadi kolom di game itulah batas yang sebenarnya. Artikel ganti nama Activision tidak menetapkan batas resmi 16.",
        },
        {
          q: "Apakah ini alat resmi Call of Duty?",
          a: "Bukan. FancyFont berdiri sendiri dan tidak berafiliasi dengan Activision.",
        },
      ],
    },
    "youtube-fonts": {
      navName: "YouTube",
      h1: "Generator font YouTube",
      title: "Font YouTube – Nama kanal dan deskripsi",
      description:
        "Font Unicode untuk nama kanal dan deskripsi YouTube. @handle tetap teks biasa. Lihat pratinjau kanal, lalu tempel dan cek di YouTube Studio.",
      intro:
        "YouTube tidak punya pemilih font. Nama kanal sekitar 100 karakter. @handle berupa huruf, angka, garis bawah, dan titik, sampai sekitar 30, dan tampil dalam huruf kecil. Deskripsi jauh lebih panjang, sekitar 1.000 karakter.",
      defaultText: "YouTube",
      presets: [
        { label: "Tebal", left: "", right: "", transform: "bold" },
        { label: "Skrip", left: "", right: "", transform: "boldScript" },
        { label: "Kapital kecil", left: "", right: "", transform: "smallCaps" },
        { label: "Lebar", left: "", right: "", transform: "fullwidth" },
      ],
      guidance: [
        {
          label: "Nama kanal",
          body: "Sekitar 100 karakter. Inilah baris bergaya yang orang lihat di kanal. Tempel di YouTube Studio dan pastikan tersimpan.",
        },
        {
          label: "Handle",
          body: "@handle adalah teks biasa: huruf, angka, garis bawah, dan titik, sekitar 30 karakter, ditampilkan dalam huruf kecil. Font tidak masuk ke sana.",
        },
        {
          label: "Deskripsi",
          body: "Sekitar 1.000 karakter. Nama bergaya plus kalimat biasa mudah muat. Kolom yang habis lebih dulu adalah nama kanal.",
        },
      ],
      compatNote:
        "Ini karakter Unicode, bukan fitur YouTube. Font YouTube yang memutuskan apakah sebuah karakter tampil, dan Studio bisa menolak sebuah nama. FancyFont tidak berafiliasi dengan YouTube atau Google.",
      faq: [
        {
          q: "Bisakah handle YouTube saya memakai font?",
          a: "Tidak. @handle adalah username biasa dalam huruf kecil. Gayanya ada di nama kanal dan deskripsi.",
        },
        {
          q: "Di mana saya menempel nama kanal bergaya?",
          a: "Salin di sini, buka YouTube Studio, edit kanal, dan tempel ke nama kanal. Cek halaman kanal publik setelah disimpan.",
        },
        {
          q: "Apakah ini alat resmi YouTube?",
          a: "Bukan. FancyFont berdiri sendiri. YouTube dan mereknya milik Google.",
        },
      ],
    },
    "adopt-me-fonts": {
      navName: "Adopt Me",
      h1: "Font Adopt Me",
      title: "Font Adopt Me yang muat – Nama tampilan Roblox",
      description:
        "Font nama pendek untuk nama tampilan Adopt Me di Roblox. Sekitar 20 karakter, username biasa, dan pratinjau sebelum menggantinya.",
      intro:
        "Adopt Me memakai nama Roblox-mu. Username tetap huruf, angka, dan satu garis bawah. Nama tampilan yang dilihat pemain lain sekitar 20 karakter, dan Roblox masih bisa menolak sebuah simbol. Baris ini adalah tampilan preppy dan imut, dipotong supaya bisa dicoba.",
      defaultText: "Mila",
      presets: [
        { label: "Preppy", left: "🤍 ", right: " 🤍", transform: "smallCaps" },
        { label: "Satu hati", left: "♥ ", right: "", transform: "smallCaps" },
        { label: "Imut", left: "♡ ", right: " ♡", transform: "bubble" },
        { label: "Pita", left: "୨୧ ", right: "", transform: "bubble" },
      ],
      guidance: [
        {
          label: "Nama tampilan",
          body: "Sekitar 20 karakter, hati ikut dihitung. Ini nama di atas avatar di Adopt Me. Pratinjau memberi tanda jika lewat 20. Nama small caps yang pendek dengan satu hati lebih sering muat daripada pita di kedua sisi.",
        },
        {
          label: "Username",
          body: "Huruf, angka, dan satu garis bawah, 3–20 karakter. Tanpa font dan tanpa spasi. Pratinjau membiarkan username ini biasa, sementara nama tampilan yang membawa gaya.",
        },
        {
          label: "Yang benar-benar lolos",
          body: "Roblox memfilter nama tampilan dan bisa mengubah aturannya. Nama bergaya bisa jadi kotak atau ditolak. Tempel di layar nama Roblox dan baca pratinjau itu sebelum kamu mengonfirmasi. Pergantian nama tampilan terbatas, jadi jangan pakai satu kesempatan untuk nama yang belum kamu cek.",
        },
      ],
      compatNote:
        "Adopt Me adalah pengalaman di Roblox. Ini karakter Unicode, bukan fitur Adopt Me atau Roblox. Tidak ada jaminan nama akan diterima. FancyFont tidak berafiliasi dengan Roblox atau Adopt Me.",
      faq: [
        {
          q: "Bisakah username Adopt Me saya memakai font ini?",
          a: "Tidak. Username adalah nama login Roblox: huruf, angka, dan satu garis bawah. Gayanya ada di nama tampilan.",
        },
        {
          q: "Kenapa nama fancy Adopt Me saya ditolak?",
          a: "Roblox memfilter nama tampilan. Pita yang ditumpuk dan simbol langka gagal lebih dulu. Coba baris satu hati, atau small caps polos, lalu cek pratinjau game.",
        },
        {
          q: "Apakah ini alat resmi Adopt Me?",
          a: "Bukan. FancyFont berdiri sendiri. Adopt Me dan Roblox milik pemiliknya. Halaman ini hanya merancang nama yang muat pada panjang nama tampilan yang biasa.",
        },
      ],
    },
    "berry-avenue-fonts": {
      navName: "Berry Avenue",
      h1: "Generator font Berry Avenue",
      title: "Font Berry Avenue — salin nama tampilan ~20 karakter",
      description:
        "Ketik nama tampilan Berry Avenue, lihat di kartu Roblox dan di papan, lalu salin gaya di sekitar ~20 karakter. Bukan untuk username.",
      intro:
        "Berry Avenue menampilkan nama tampilan Roblox di atas karakter. Kolom itu sekitar 20 karakter, dan username tetap biasa. Kartu di halaman ini hanya sketsa, bukan font di dalam game.",
      pinnedPreview: {
        heading: "Pratinjau nama tampilan",
        displayName: "Nama tampilan",
        username: "Username",
        sign: "Papan",
        showing: "Yang tampil adalah baris {label}. Salin baris lain di bawah kalau kamu mau tampilan berbeda.",
        counter: "{count} / ~{max} karakter",
        over: "Melebihi panjang kira-kira untuk nama tampilan.",
        usernameNote: "Username tetap huruf, angka, dan satu garis bawah. Font ini bukan untuk kolom itu.",
        signNote: "Tulisan di papan atau chat bisa lebih panjang. Halaman ini tidak menyimpan batas yang dipublikasikan untuk kolom itu.",
        approxNote:
          "Angka ~20 bersifat kira-kira dan tidak diuji di dalam Berry Avenue di situs ini. Hitungan adalah karakter yang terlihat (grafem).",
      },
      defaultText: "Blair",
      presets: [
        { label: "Pita", left: "𝜗𝜚 ", right: " 𝜗𝜚", transform: "boldScript" },
        { label: "Simpul", left: "🎀 ", right: "", transform: "boldScript" },
        { label: "Coquette", left: "𐙚 ", right: " 𐙚", transform: "boldScript" },
        { label: "Tenang", left: "", right: "", transform: "smallCaps" },
      ],
      guidance: [
        {
          label: "Nama tampilan",
          body: "Sekitar 20 karakter. Ini nama di atas kepala di Berry Avenue. Hati, pita, dan huruf script semuanya dihitung. Pratinjau memberi tanda jika lewat 20.",
        },
        {
          label: "Username",
          body: "Huruf, angka, dan satu garis bawah. Pemain lain tetap menemukanmu lewat username biasa ini. Font tidak masuk ke sini.",
        },
        {
          label: "Kalimat chat",
          body: "Perkenalan roleplay di chat bisa lebih panjang daripada nama di atas kepala. Biarkan nama tampilan satu baris pendek, dan taruh kalimat panjang di chat hanya setelah kamu melihatnya tergambar di perangkatmu. Pita kecil bisa tampil sebagai kotak; emoji pita adalah cadangannya.",
        },
      ],
      compatNote:
        "Berry Avenue berjalan di Roblox. Ini karakter Unicode, bukan fitur game, dan Roblox bisa menolaknya. FancyFont tidak berafiliasi dengan Roblox atau Berry Avenue.",
      faq: [
        {
          q: "Font apa yang cocok untuk Berry Avenue?",
          a: "Mulai dengan nama tampilan sekitar 20 karakter. Baris small caps yang tenang tidak menambah simbol. Tambahkan satu pita hanya jika layar nama Roblox masih menerimanya. Ini karakter Unicode untuk ditempel, bukan berkas font.",
        },
        {
          q: "Apakah font Berry Avenue untuk username?",
          a: "Penyebab: artikel bantuan Roblox memperlakukan nama tampilan dan username sebagai kolom yang berbeda. Nama tampilan adalah yang dilihat pemain lain. @username adalah nama masuk. Perbaikan: taruh huruf bergaya hanya di nama tampilan. Di halaman ini aturan kecocokan username adalah huruf, angka, dan satu garis bawah. Kalimat roleplay yang lebih panjang ada di chat.",
        },
        {
          q: "Kenapa Roblox menolak nama Berry Avenue saya?",
          a: "Penyebab: artikel bantuan yang sama menulis bahwa nama tampilan difilter, dan nama yang melanggar aturan bisa dikembalikan menjadi username. Halaman pemfilteran teks Roblox juga mencakup teks yang pemain lain lihat, termasuk nomor telepon di papan. Perbaikan: buang simbol langka, jaga nama tampilan di dalam 3–20 yang diumumkan, jangan taruh data pribadi, dan simpan hanya setelah layar Roblox menerimanya.",
        },
        {
          q: "Apakah ini generator font Berry Avenue?",
          a: "Halaman ini merancang nama tampilan untuk disalin. Bukan alat resmi Berry Avenue atau Roblox, dan tidak menjamin game akan menerima karakternya.",
        },
      ],
    },
    "fortnite-name-generator": {
      navName: "Fortnite",
      h1: "Generator Nama Fortnite",
      title: "Generator Nama Fortnite – nama tampilan keren",
      description:
        "Nama Unicode keren untuk Fortnite. Pratinjau nama tampilan, salin, dan cek panjangnya sebelum menyimpannya ke akun Epic.",
      intro:
        "Fortnite menampilkan nama tampilan Epic-mu di setiap lobby, kill feed, dan replay — satu kolom, biasanya sekitar 16 karakter. Buat nama berhias, lihat pratinjaunya, lalu simpan dari pengaturan akun Epic.",
      defaultText: "Victory",
      presets: [
        { label: "Bintang", left: "★ ", right: " ★", transform: "sansBold" },
        { label: "Kurung", left: "「", right: "」", transform: "bold" },
        { label: "Tanda badai", left: "⚡ ", right: "", transform: "smallCaps" },
        { label: "Bingkai gelap", left: "༺", right: "༻", transform: "fraktur" },
      ],
      guidance: [
        {
          label: "Nama tampilan",
          body: "Satu kolom yang terlihat di semua pertandingan, biasanya sekitar 16 karakter. Pratinjau menghitung titik kode dan menandai nama yang lebih panjang.",
        },
        {
          label: "Mengikuti akun Epic",
          body: "Nama tampilan ada di level akun: ubah dari pengaturan akun Epic dan nama baru muncul di semua platform tempatmu masuk.",
        },
        {
          label: "Simbol dan filternya",
          body: "Filter Epic menentukan karakter mana yang bertahan. Alfabet satu-karakter seperti bold dan small caps lebih kuat daripada hiasan bertanda menumpuk — kalau lobby memperlihatkan kotak, pilih gaya yang lebih polos.",
        },
        {
          label: "Yang tetap biasa",
          body: "ID akun Epic-mu adalah angka. Beri gaya hanya pada nama tampilan, lalu cek di lobby agar setiap karakter benar-benar tergambar.",
        },
      ],
      compatNote:
        "Fortnite dan Epic Games menetapkan aturan nama sendiri dan bisa mengubahnya. Tidak ada di sini yang menjamin nama berhias diterima — buat, salin, dan cek di game. FancyFont tidak berafiliasi dengan Epic Games atau Fortnite.",
      faq: [
        {
          q: "Seberapa panjang nama Fortnite?",
          a: "Rencanakan sekitar 16 karakter. Pratinjau menghitung titik kode dan memperingatkan sebelum kamu menyalin; kolom di game adalah hakim terakhir.",
        },
        {
          q: "Bagaimana mengganti nama Fortnite?",
          a: "Dari pengaturan akun Epic di web, atau bagian akun di dalam game. Nama tampilan ada di level akun, jadi perubahan mengikutimu di semua platform.",
        },
        {
          q: "Bolehkah memakai simbol di nama Fortnite?",
          a: "Karakter Unicode bergaya biasanya tersimpan, tetapi filter Epic bisa memotong atau menolaknya. Alfabet yang lebih polos — bold, small caps — lebih sering bertahan daripada hiasan berat.",
        },
        {
          q: "Apakah ini alat resmi Fortnite?",
          a: "Bukan. FancyFont berdiri sendiri dan tidak berafiliasi dengan Epic Games atau Fortnite.",
        },
      ],
    },
  },
};
