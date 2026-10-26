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
          a: "The clan tag is only a few characters, about 4. A styled name will not fit. Keep the tag short and plain, and style the player name.",
        },
        {
          q: "How long is a Call of Duty name?",
          a: "Plan for around 16 characters. Warzone, Mobile, and older titles are not identical, so the game's own field is the real limit.",
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
  },
  es: {
    "pubg-name-generator": {
      navName: "PUBG",
      h1: "Generador de nombres para PUBG",
      title: "Generador de nombres para PUBG – Nombres con estilo",
      description:
        "Nombres Unicode para PUBG. Mira el nombre en una ficha de lobby, cópialo y revisa la longitud antes de pegarlo en el juego.",
      intro:
        "PUBG no tiene selector de fuentes. El nombre es un campo corto, normalmente unas 16 caracteres, y algunos modos aceptan menos. Genera el nombre, míralo en la vista previa y pégalo en la pantalla del juego.",
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
      ],
      compatNote:
        "PUBG aplica sus propios filtros y puede cambiarlos. Un nombre con estilo puede volverse cuadros o ser rechazado. Pruébalo en el juego. FancyFont no está afiliado a PUBG.",
      faq: [
        {
          q: "¿Cuánto puede medir un nombre de PUBG?",
          a: "Cuenta con unas 16 caracteres. Algunos modos, incluido parte de PUBG Mobile, son más cortos. La vista previa cuenta puntos de código y avisa al pasar de 16.",
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
        "Apodos Unicode cortos para Free Fire. El campo mide unas 12 caracteres: míralo, cópialo y pruébalo en el juego.",
      intro:
        "Los apodos de Free Fire son muy cortos, normalmente unas 12 caracteres. Un adorno largo no cabe. Deja el nombre base corto, míralo en la vista previa y pégalo en el juego.",
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
          body: "Quita primero el adorno. Un nombre corto y plano que el juego acepte sirve más que uno con estilo que recorta.",
        },
      ],
      compatNote:
        "Free Fire fija la longitud y el filtro, y ambos pueden cambiar. Nada aquí garantiza que el juego acepte un nombre decorado. FancyFont no está afiliado a Free Fire.",
      faq: [
        {
          q: "¿Por qué se corta mi nombre de Free Fire?",
          a: "El apodo mide unas 12 caracteres. Las letras Unicode anchas también cuentan. Acorta la palabra o quita un símbolo y vuelve a mirar la vista previa.",
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
          a: "La etiqueta mide solo unos 4 caracteres. Un nombre con estilo no cabe. Déjala corta y plana, y dale estilo al nombre.",
        },
        {
          q: "¿Cuánto mide un nombre de Call of Duty?",
          a: "Cuenta con unas 16 caracteres. Warzone, Mobile y los títulos antiguos no coinciden, así que el campo del juego es el límite real.",
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
      h1: "Gerador de nomes para COD",
      title: "Gerador de nomes para COD – Call of Duty",
      description:
        "Nomes com estilo para Call of Duty. O nome é curto e a tag do clã é mais curta. Veja a prévia e teste no jogo.",
      intro:
        "Os nomes de Call of Duty ficam em geral em torno de 16 caracteres, e o limite muda conforme o título. A tag do clã é outro campo de cerca de 4 caracteres: um nome decorado não entra ali.",
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
          q: "A tag de clã do COD aceita essas fontes?",
          a: "A tag tem só uns 4 caracteres. Um nome com estilo não cabe. Deixe a tag curta e simples, e estilize o nome do jogador.",
        },
        {
          q: "Qual o tamanho de um nome de Call of Duty?",
          a: "Conte com cerca de 16 caracteres. Warzone, Mobile e títulos antigos não são iguais, então o campo do jogo é o limite real.",
        },
        {
          q: "Esta é uma ferramenta oficial de Call of Duty?",
          a: "Não. O FancyFont é independente e não é afiliado à Activision.",
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
      ],
      compatNote:
        "PUBG 有自己的过滤规则，而且会改。有样式的名字可能变成方框，也可能被拒绝。先在游戏里试过再拿去用。FancyFont 与 PUBG 没有隶属关系。",
      faq: [
        {
          q: "PUBG 名字可以多长？",
          a: "按大约 16 个字符来准备。有的模式，包括 PUBG Mobile 的一部分，更短。预览按码位计数，超过 16 会提示。",
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
          body: "数字 ID 不能加样式。只有昵称是文字，游戏仍然会过滤。",
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
          a: "战队标签只有大约 4 个字符。有样式的长名字放不下。标签保持短而普通，样式放在玩家名上。",
        },
        {
          q: "使命召唤的名字有多长？",
          a: "按大约 16 个字符来准备。Warzone、Mobile 和旧作并不一样，游戏自己的输入框才是真正的上限。",
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
          body: "大约 1000 个字符。一个有样式的名字加一句普通的话很容易放下。先用完的是频道名。",
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
          a: "Tag klan hanya beberapa karakter, sekitar 4. Nama bergaya tidak muat. Biarkan tag pendek dan biasa, lalu beri gaya pada nama pemain.",
        },
        {
          q: "Berapa panjang nama Call of Duty?",
          a: "Siapkan sekitar 16 karakter. Warzone, Mobile, dan judul lama tidak sama, jadi kolom di game itulah batas yang sebenarnya.",
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
  },
};
