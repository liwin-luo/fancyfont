// ES landing copy migrated from the old site (platform-pages-more.ts, es
// block; depth from cod-extra.ts and berry-avenue-extra.ts). Six platform
// pages: facebook-fonts, youtube-fonts, adopt-me-fonts, berry-avenue-fonts,
// cod-name-generator, fortnite-name-generator.
// Limits use "unos" wording carried over from the old copy — the platform's
// own counter is always the source of truth.

import type { PlatformPageCopy } from "../platform-pages";

export const platformPagesMigrationEs: Record<string, { es: PlatformPageCopy }> = {
  "facebook-fonts": {
    es: {
      navName: "Facebook",
      h1: "Generador de fuentes para Facebook",
      title: "Fuentes para Facebook – Nombre e intro con estilo",
      description:
        "Fuentes para Facebook: nombre e intro con estilo, caracteres Unicode de verdad con vista previa y copia con un toque. El nombre cabe en ~50 caracteres.",
      platform: "Facebook",
      intro: [
        "Facebook no tiene selector de fuentes, pero el nombre del perfil y la intro corta son texto plano — así que los estilos Unicode como 𝐂𝐚𝐦𝐢𝐥𝐚 𝐕𝐞𝐠𝐚 o ✧ ᴀᴜʀᴏʀᴀ ✧ se ven directo en tu perfil. Escribe abajo, mira la vista previa y toca para copiar.",
        "El límite está en el usuario: solo letras, números y puntos, y Facebook además espera que el nombre parezca un nombre de verdad — puede rechazar o revertir caracteres raros. Pon el estilo en el nombre y en la intro, y deja el usuario plano.",
      ],
      limits: [
        { label: "Nombre", value: "Unos 50 caracteres — los caracteres con estilo pueden contar como más de uno" },
        { label: "Intro", value: "Unos 101 caracteres en la intro corta" },
        { label: "Usuario", value: "Solo letras, números y puntos — sin caracteres con estilo" },
        { label: "Conteo", value: "Algunos contadores tratan una letra con estilo como varios — haz caso al contador de Facebook" },
      ],
      compat: [
        "Nombre e intro: el texto con estilo normalmente se guarda y se ve en la web y en la app",
        "Facebook puede rechazar o revertir un nombre que no parezca un nombre — revisa siempre el perfil guardado",
        "El usuario y los @handles de páginas se quedan planos — las fuentes nunca aplican ahí",
        "Posts, comentarios y Messenger muestran los estilos Unicode como texto ordinario; los glifos raros pueden salir en cuadros en dispositivos viejos",
      ],
      examples: ["𝐂𝐚𝐦𝐢𝐥𝐚 𝐕𝐞𝐠𝐚", "𝓢𝓸𝓯𝓲𝓪", "ᴅɪᴇɢᴏ ᴍᴏʀᴀ", "✧ ᴀᴜʀᴏʀᴀ ✧", "𝔻𝕚𝕖𝕘𝕠 𝕊𝕠𝕝", "☾ 𝐧𝐨𝐜𝐭𝐮𝐫𝐧𝐚 ☽", "𝓜𝓲𝓪 ✿"],
      steps: [
        "Estiliza tu nombre o tu intro aquí y copia la versión que te guste.",
        "Abre Facebook → Editar perfil → pega en Nombre o en la Intro corta.",
        "Guarda y abre tu perfil como lo ve un visitante — confirma que cada carácter se dibujó.",
        "Si Facebook revierte el nombre, deja la línea con estilo en la intro y el nombre plano.",
      ],
      faq: [
        {
          q: "¿Puedo usar fuentes en mi nombre de Facebook?",
          a: "Puedes pegar Unicode en el nombre del perfil y en la intro. Facebook puede rechazarlo o devolverlo — espera nombres que parezcan nombres de verdad. El usuario no admite fuentes para nada.",
        },
        {
          q: "¿Cuánto mide la intro de Facebook?",
          a: "La intro corta mide unos 101 caracteres y el nombre del perfil unos 50. Una línea con estilo cabe; un adorno largo más una frase, a menudo no.",
        },
        {
          q: "¿Me pueden bloquear o restablecer la cuenta por un nombre con estilo?",
          a: "Los caracteres con estilo son solo texto, no una infracción por sí mismos. El riesgo realista es menor: Facebook puede negarse a guardar o revertir el nombre a una versión plana. Nada de lo que pegues aquí suspende tu cuenta.",
        },
        {
          q: "¿Los caracteres con estilo gastan más de mi límite de 50/101?",
          a: "Pueden. Muchas letras con estilo viven fuera del alfabeto básico, y algunos contadores de Facebook las tratan como más de un carácter. Déjate unos caracteres de margen y haz caso al contador de Facebook antes que a cualquier estimación.",
        },
        {
          q: "¿Cómo copio y pego, y por qué se ve distinto en mi teléfono?",
          a: "Toca una fila para copiarla y mantén pulsado el campo de Facebook para pegar. Si el estilo se ve raro en tu teléfono, al dispositivo le falta el glifo — elige un alfabeto más llano como negrita o versalitas, que se ven en casi todo.",
        },
        {
          q: "¿Es una herramienta oficial de Facebook?",
          a: "No. FancyFont es independiente. Facebook y sus marcas pertenecen a Meta. Esta página solo convierte los caracteres en tu navegador.",
        },
      ],
    },
  },

  "youtube-fonts": {
    es: {
      navName: "YouTube",
      h1: "Generador de fuentes para YouTube",
      title: "Fuentes para YouTube – Nombre y descripción del canal",
      description:
        "Fuentes para YouTube: estiliza el nombre y la descripción de tu canal aquí, mira la vista previa, copia y pega en YouTube Studio. El @usuario se queda plano.",
      platform: "YouTube",
      intro: [
        "YouTube no tiene selector de fuentes, pero el nombre del canal y la descripción son texto plano — los estilos Unicode como 𝐆𝐚𝐦𝐢𝐧𝐠 𝐜𝐨𝐧 𝐌𝐚𝐱 o ★ Fábrica de Píxeles ★ se ven en tu página de canal. Escribe abajo y toca para copiar.",
        "El límite está en el @usuario: letras minúsculas, dígitos, guiones bajos y puntos, solo planos — un @usuario con estilo no se resuelve en búsquedas ni menciones. Pon el estilo en el nombre del canal y en la descripción.",
      ],
      limits: [
        { label: "Nombre del canal", value: "Unos 100 caracteres — el campo que se llena primero" },
        { label: "@usuario", value: "Unos 30 caracteres, en minúsculas planas: letras/dígitos/guiones bajos/puntos" },
        { label: "Descripción", value: "Unos 1.000 caracteres — un nombre con estilo más una frase normal cabe de sobra" },
        { label: "Conteo", value: "Algunos contadores tratan una letra con estilo como varios — haz caso al contador de YouTube" },
      ],
      compat: [
        "Nombre del canal: el texto con estilo normalmente se guarda; confírmalo en la página pública después de publicar",
        "@usuario: solo plano, siempre — las fuentes rompen menciones y coincidencias de búsqueda",
        "Descripción y Acerca de: el texto con estilo funciona, pero deja palabras clave y enlaces en caracteres planos para que la búsqueda los lea",
        "Comentarios: los estilos Unicode se muestran; algunos dispositivos dibujan cuadros para glifos raros",
      ],
      examples: ["𝐆𝐚𝐦𝐢𝐧𝐠 𝐜𝐨𝐧 𝐌𝐚𝐱", "𝓒𝓸𝓬𝓲𝓷𝓪 𝓒𝓻𝓮𝓪𝓽𝓲𝓿𝓪", "★ Fábrica de Píxeles ★", "ᴠʟᴏɢꜱ ᴅɪᴀʀɪᴏꜱ", "𝕂𝕚𝕥 𝔼𝕤𝕡𝕒𝕔𝕚𝕒𝕝", "ミ★ noches lo-fi 彡★", "𝘋𝘪𝘢𝘳𝘪𝘰 𝘌𝘹𝘱𝘳𝘦𝘴𝘴"],
      steps: [
        "Estiliza el nombre del canal aquí y copia tu favorito.",
        "Abre YouTube Studio → Personalización → Información básica → pega en Nombre del canal (y en la Descripción si quieres).",
        "Publica, abre tu página de canal pública y confirma que cada carácter se dibujó.",
        "Deja el @usuario intacto — es plano por diseño y nunca acepta estilos.",
      ],
      faq: [
        {
          q: "¿Mi @usuario de YouTube puede llevar una fuente?",
          a: "No. El @usuario es un nombre plano en minúsculas: letras, dígitos, guiones bajos y puntos. Pon el estilo en el nombre del canal y en la descripción, que son campos aparte.",
        },
        {
          q: "¿Dónde pego un nombre de canal con estilo?",
          a: "Cópialo aquí, abre YouTube Studio → Personalización → Información básica, pégalo en el nombre del canal y publica. Revisa la página pública del canal después de guardar.",
        },
        {
          q: "¿Un nombre de canal con estilo perjudica mi canal en la búsqueda?",
          a: "Un poco, sí. La búsqueda coincide con texto, y un nombre totalmente con estilo es más difícil de igualar textualmente. Un patrón seguro: nombre con estilo para el look, y tu nombre de canal plano una vez en la descripción para que la búsqueda lo lea.",
        },
        {
          q: "¿Cuánto pueden medir el nombre y la descripción?",
          a: "Planea con unos 100 caracteres para el nombre y unos 1.000 para la descripción. Las letras con estilo pueden contar como más de uno en algunos contadores, así que deja margen y haz caso al contador de YouTube.",
        },
        {
          q: "¿Por qué mi nombre con estilo sale en cuadritos en algunos dispositivos?",
          a: "El dispositivo de quien mira no tiene el glifo para ese carácter. Los alfabetos comunes — negrita, versalitas, fullwidth — se ven en casi todo; las pilas de símbolos exóticos son las que se vuelven cuadros.",
        },
        {
          q: "¿Es una herramienta oficial de YouTube?",
          a: "No. FancyFont es independiente. YouTube y sus marcas pertenecen a Google. Esta página solo convierte los caracteres en tu navegador.",
        },
      ],
    },
  },

  "adopt-me-fonts": {
    es: {
      navName: "Adopt Me",
      h1: "Fuentes para Adopt Me",
      title: "Fuentes para Adopt Me que caben – Nombres visibles de Roblox",
      description:
        "Fuentes para Adopt Me que caben en tu nombre visible de Roblox: corazones preppy y lazos tiernos cerca del límite de ~20. Vista previa, copia y pega.",
      platform: "Adopt Me!",
      intro: [
        "Adopt Me muestra tu nombre de Roblox sobre tu avatar — el usuario se queda en letras, dígitos y un guion bajo, y el nombre visible que ven los demás jugadores ronda los 20 caracteres. Filas como 🤍 ᴍɪʟᴀ 🤍 y ♡ ᴄɪᴇʟᴏ ♡ son el look preppy, recortadas para que quepan. Escribe abajo y toca para copiar.",
        "Roblox filtra los nombres visibles y todavía puede rechazar un símbolo, y los cambios de nombre son limitados — unos una vez cada 7 días. Así que decide aquí: mira la vista previa, mantén el nombre dentro del límite y prueba el pegado en la pantalla de Roblox antes de confirmar.",
      ],
      limits: [
        { label: "Nombre visible", value: "Unos 20 caracteres (Roblox anunció 3–20) — cada corazón cuenta" },
        { label: "@usuario", value: "3–20 caracteres, letras/dígitos/un guion bajo — solo plano" },
        { label: "Cambios de nombre", value: "Unos una vez cada 7 días según la ayuda de Roblox — no gastes uno sin revisar" },
        { label: "Conteo", value: "Algunos contadores tratan una letra con estilo como varios — haz caso al campo de Roblox" },
      ],
      compat: [
        "Nombre visible: los estilos de glifo completo como versalitas y script son los que más pasan el filtro de Roblox",
        "Los lazos apilados y los símbolos raros se rechazan primero — Roblox puede devolver el nombre a tu usuario",
        "@usuario: nunca acepta estilos, ni en Adopt Me ni en ningún lado de Roblox",
        "Chat: el texto con estilo funciona, pero el filtro de Roblox puede convertir palabras bloqueadas en #### — manda el respaldo plano",
      ],
      examples: ["🤍 ᴍɪʟᴀ 🤍", "♥ ʟᴜɴᴀ", "♡ ᴄɪᴇʟᴏ ♡", "୨୧ ᴄᴏɴᴇᴊᴏ", "☆ ᴅᴜʟᴄᴇ ☆", "𝒫𝓇𝒾𝓃𝒸ℯ𝓈𝒶", "🤍 ᴘʀɪɴᴄᴇꜱᴀ 🤍"],
      steps: [
        "Prepara el nombre visible aquí — mantenlo cerca de los 20 caracteres, cada corazón incluido.",
        "Abre Roblox → Configuración → Información de la cuenta → Nombre visible (Adopt Me usa tu nombre de Roblox).",
        "Pega, mira la vista previa de Roblox y guarda solo cuando acepte el nombre.",
        "Si lo rechaza, cambia al siguiente candidato en vez de retocar símbolos — los cambios son de unos una vez cada 7 días.",
      ],
      faq: [
        {
          q: "¿Mi usuario de Adopt Me puede usar estas fuentes?",
          a: "No. El usuario es el nombre de acceso de Roblox: letras, dígitos y un guion bajo. Pon el estilo en el nombre visible — el campo que ven los demás jugadores sobre tu avatar.",
        },
        {
          q: "¿Por qué rechazaron mi nombre fancy de Adopt Me?",
          a: "Roblox filtra los nombres visibles, y los lazos apilados y los símbolos raros fallan primero. Prueba las filas de un solo corazón o las versalitas planas, y revisa la vista previa del juego antes de guardar.",
        },
        {
          q: "¿Un nombre con estilo puede costarme el baneo?",
          a: "No — los caracteres son texto ordinario, no trucos ni exploits. El riesgo realista es que Roblox se niegue a guardar o devuelva el nombre a tu usuario. Suplantar al staff o esconder palabras prohibidas es una infracción aparte y de verdad.",
        },
        {
          q: "¿Cuánto puede medir un nombre visible de Adopt Me?",
          a: "Unos 20 caracteres, y el anuncio de Roblox pone el rango en 3–20. Corazones, lazos y letras con estilo cuentan todos, así que un nombre corto más una sola marca cabe más a menudo que un marco completo.",
        },
        {
          q: "¿Por qué mi nombre con estilo se ve distinto en mi teléfono?",
          a: "A tu dispositivo le falta el glifo para ese carácter y dibuja un cuadro. Las versalitas y la negrita se ven en casi todo; el lazo pequeño (୨୧) es el culpable de costumbre. Revisa el nombre en el dispositivo donde realmente juegas.",
        },
        {
          q: "¿Cómo copio y pego el nombre en Adopt Me?",
          a: "Toca una fila para copiarla. Abre Roblox → Configuración → Información de la cuenta → Nombre visible, pega y lee la vista previa de Roblox antes de guardar. Adopt Me recoge el nombre automáticamente — no hay campo de nombre dentro del juego.",
        },
      ],
    },
  },

  "berry-avenue-fonts": {
    es: {
      navName: "Berry Avenue",
      h1: "Fuentes para Berry Avenue: nombres, bio y emojis para copiar",
      title: "Fuentes Berry Avenue: copia y pega nombres, bio y emojis",
      description:
        "Fuentes Berry Avenue para copiar y pegar: lazos coquette, versalitas y emojis para tu nombre visible de Roblox. Unos 20 caracteres; el @usuario queda plano.",
      platform: "Berry Avenue",
      intro: [
        "Las fuentes de Berry Avenue son letras y símbolos Unicode que copias y pegas en tu nombre visible de Roblox — el nombre que Berry Avenue muestra sobre tu personaje. El nombre visible cabe en unos 20 caracteres, lazos y emojis incluidos, y filas como 𝜗𝜚 𝓢𝓸𝓯𝓲 𝜗𝜚 vienen medidas para caber. El @usuario queda plano: Roblox solo permite letras, dígitos y un guion bajo normal ahí.",
        "Son caracteres Unicode que pegas, no una fuente que instalas — así que el filtro de Roblox y los glifos de tu dispositivo deciden el look final. Mantén el nombre visible dentro del límite, guarda solo cuando la pantalla de Roblox lo acepte, y reserva las líneas largas para el chat o un letrero.",
      ],
      limits: [
        { label: "Nombre visible", value: "Unos 20 caracteres (Roblox anunció 3–20) — lazos y corazones cuentan" },
        { label: "@usuario", value: "Letras/dígitos/un guion bajo planos — las fuentes no van ahí" },
        { label: "Cambios de nombre", value: "Unos una vez cada 7 días según la ayuda de Roblox" },
        { label: "Chat y letreros", value: "Berry Avenue no publica un límite para esos campos — pruébalo en tu dispositivo" },
      ],
      compat: [
        "Nombre visible: los alfabetos de versalitas y script aguantan mejor; el lazo pequeño (୨୧) puede dibujarse como un cuadro en algunos dispositivos",
        "Las líneas de chat y los letreros de la casa pueden ser más largos que el nombre de encima — comprueba que se dibujen en tu dispositivo primero",
        "@usuario: solo plano, siempre — los demás jugadores te siguen encontrando por ese handle",
        "El filtro de chat de Roblox puede convertir palabras con estilo en #### — guarda un respaldo en texto plano para lo importante",
      ],
      examples: ["𝜗𝜚 𝓢𝓸𝓯𝓲 𝜗𝜚", "🎀 𝓛𝓾𝓷𝓪", "𐙚 𝓡𝓸𝓼𝓪 𐙚", "♡ 𝓥𝓪𝓵𝓮", "ᴊᴀᴅᴇ ᴠᴀʟʟᴇ", "꒰ 𝓝𝓲𝓬𝓸𝓵𝓮 ꒱", "𐙚 𝓒𝓪𝓶𝓲𝓵𝓪"],
      copyGroups: [
        {
          heading: "Ejemplos de nombres y bio para Berry Avenue",
          note: "Cada fila cabe en el nombre visible de ~20 caracteres — toca para copiar. El lazo ୨୧ y la estrella 𐙚 son los símbolos que más suelen dibujarse como cuadro (□) en algunos dispositivos; los corazones ♡, los destellos ✧ y los emojis como 🎀 se ven en casi todos los teléfonos modernos. Los mismos caracteres sirven en cualquier campo que acepte texto pegado, así que bios y líneas de rol más largas pueden reutilizar estas filas.",
          groups: [
            {
              label: "Coquette y tierno",
              items: ["𝜗𝜚 𝓢𝓸𝓯𝓲 𝜗𝜚", "𐙚 𝓡𝓸𝓼𝓪 𐙚", "♡ 𝓥𝓪𝓵𝓮 ♡", "𝜗𝜚 𝓛𝓾𝓷𝓪 𝜗𝜚"],
            },
            {
              label: "Preppy",
              items: ["✧ ᴍɪʟᴀ ✧", "ᴊᴀᴅᴇ ᴠᴀʟʟᴇ", "♡ ᴄʟᴀɪʀᴇ ♡", "ᴘʀᴇᴘᴘʏ ᴄʟᴜʙ"],
            },
            {
              label: "Rol familiar: mamá, papá y bebé",
              items: ["ᴍᴀᴍᴀ́ ♡ ʟɪʟʏ", "ᴘᴀᴘᴀ́ ★ ᴊᴀᴄᴋ", "𝓑𝓮𝓫𝓮 𝓥𝓲𝓸𝓵𝓮𝓽", "𐙚 ʙᴇʙᴇ ᴍɪᴀ 𐙚"],
            },
            {
              label: "Combos estéticos con emojis",
              items: ["🎀 𝓛𝓾𝓷𝓪 🎀", "✿ 𝒻𝓁𝑜𝓇 ✿", "☾ 𝓂𝑜𝑜𝓃 ☽", "✧ 𝓈𝓉𝒶𝓇𝓈 ✧"],
            },
          ],
        },
      ],
      fieldTable: {
        heading: "Dónde van las fuentes de Berry Avenue — campo por campo",
        columns: ["Campo", "¿Fuentes?", "Notas"],
        rows: [
          ["Nombre visible", "Sí", "Pega caracteres Unicode. Unos 20 caracteres (Roblox anunció 3–20) — lazos, corazones y emojis cuentan en el límite."],
          ["@usuario", "No — solo plano", "Letras, dígitos y un guion bajo. Los demás jugadores te siguen encontrando por ese handle."],
          ["Chat", "Sí, con filtro", "Berry Avenue no publica un límite. El filtro de Roblox puede convertir palabras con estilo en #### — guarda un respaldo en texto plano."],
          ["Letrero de la casa", "Sí", "Tampoco hay límite publicado. Comprueba que las líneas largas se dibujen en tu dispositivo antes de decorar."],
        ],
      },
      steps: [
        "Escribe tu nombre y copia una fila que se quede cerca de los 20 caracteres.",
        "Abre Roblox → Configuración → Información de la cuenta → Nombre visible (Berry Avenue muestra tu nombre de Roblox).",
        "Pega, deja que la pantalla de Roblox valide el nombre y guarda.",
        "Las líneas largas de rol van al chat o a un letrero de la casa — después de verlas dibujarse en tu dispositivo.",
      ],
      faq: [
        {
          q: "¿Qué fuentes sirven para Berry Avenue?",
          a: "Empieza con un nombre visible de unos 20 caracteres. Las filas calladas de versalitas no añaden símbolos. Suma un lazo solo si la pantalla de nombre de Roblox todavía lo acepta. Son caracteres Unicode para pegar, no un archivo de fuente para instalar.",
        },
        {
          q: "¿Las fuentes de Berry Avenue van en el usuario?",
          a: "No. Roblox trata el nombre visible y el @usuario como campos distintos: el nombre visible es el que ven los demás sobre tu personaje; el @usuario es el nombre para entrar. Las letras con estilo van solo en el nombre visible, y una línea de rol más larga pertenece al chat.",
        },
        {
          q: "¿Por qué Roblox rechazó mi nombre de Berry Avenue?",
          a: "Los nombres visibles pasan por filtros, y un nombre que rompe las reglas puede volver a ser tu usuario. Quita los símbolos raros, deja el nombre dentro del 3–20 anunciado, no pongas datos personales y guarda solo cuando la pantalla de Roblox lo acepte.",
        },
        {
          q: "¿Por qué las fuentes de Berry Avenue salen como cuadros vacíos?",
          a: "Una letra con estilo es un carácter Unicode, y un dispositivo sin glifo para ella dibuja un cuadro (□). Esta página no instala una fuente: tu teléfono o computadora decide qué puede dibujar. Copia la fila de versalitas plana y revisa el nombre en el dispositivo donde juegas.",
        },
        {
          q: "¿Cómo copio y pego mi nombre de Berry Avenue?",
          a: "Toca una fila para copiarla, abre Roblox → Configuración → Información de la cuenta → Nombre visible, y pega. Berry Avenue recoge el nombre desde Roblox — no hay un campo de nombre dentro del juego que buscar.",
        },
        {
          q: "¿Esto es un generador de fuentes de Berry Avenue?",
          a: "Prepara un nombre visible para copiar, y no es una herramienta oficial de Berry Avenue ni de Roblox. Nada aquí garantiza que el juego acepte los caracteres — la pantalla de Roblox es la revisión final.",
        },
        {
          q: "¿Puedo usar las fuentes de Berry Avenue en mi bio?",
          a: "Sí — cualquier campo que acepte texto pegado admite los mismos caracteres, incluidas bios y líneas de rol más largas. Solo el nombre visible (~20 caracteres) y el @usuario (plano) tienen reglas declaradas; para el resto no hay límite publicado de Berry Avenue, así que pega y comprueba que se dibuje en tu dispositivo.",
        },
      ],
    },
  },

  "cod-name-generator": {
    es: {
      navName: "COD",
      h1: "Generador de nombres para COD",
      title: "Generador de nombres para COD – Call of Duty",
      description:
        "Nombres con estilo para Call of Duty: el nombre cabe en unos 16 caracteres y la etiqueta de clan queda corta y plana. Vista previa, copia y prueba en el juego.",
      platform: "Call of Duty",
      intro: [
        "Los nombres de jugador de Call of Duty rondan los 16 caracteres en muchos títulos, incluidos Warzone y Mobile — un solo campo que se ve en cada lobby y en el kill feed. Filas como ꧁𝐕𝐄𝐍𝐎𝐌꧂ y 「ᴘʀᴇᴅᴀᴛᴏʀ」 vienen medidas para caber. Escribe abajo, mira la vista previa y copia.",
        "La etiqueta de clan es otro campo de unos 2–4 caracteres, así que un nombre decorado no va ahí — deja la etiqueta corta y plana. Y como los cambios de nombre pueden costar, lee el nombre en la vista previa del juego antes de confirmar nada.",
      ],
      limits: [
        { label: "Nombre de jugador", value: "Unos 16 caracteres en muchos títulos — el tope cambia según el juego" },
        { label: "Etiqueta de clan", value: "Unos 2–4 caracteres, texto plano — un nombre con estilo no cabe" },
        { label: "Costo de cambio", value: "Mobile: 500 COD Points cada 3 días · títulos con Activision ID: tokens de cambio (1 cada 6 meses, se acumulan 2)" },
        { label: "Conteo", value: "Algunos contadores tratan una letra con estilo como varios — haz caso al campo del juego" },
      ],
      compat: [
        "Nombre de jugador: negrita, versalitas y marcos comunes (꧁꧂ 「」) suelen pasar; las marcas apiladas pesadas fallan primero",
        "Etiqueta de clan: solo texto plano — nunca pegues el nombre con marco en la etiqueta",
        "Un nombre que falle el filtro del Activision ID se puede reemplazar con anon más dígitos (p. ej. anon123456789012)",
        "El kill feed y las listas de lobby muestran los caracteres en crudo — confirma que cada glifo se dibuja antes de pagar un cambio de nombre",
      ],
      examples: ["꧁𝐕𝐄𝐍𝐎𝐌꧂", "★彡𝐒𝐍𝐈𝐏𝐄𝐑彡★", "༺𝐅𝐀𝐍𝐓𝐀𝐒𝐌𝐀༻", "「ᴘʀᴇᴅᴀᴛᴏʀ」", "𝕿𝖔𝖝𝖎𝖈", "⚡𝐒𝐨𝐦𝐛𝐫𝐚", "♛𝐑𝐄𝐘♛", "𝗩𝗮𝗺𝗽𝗶𝗿𝗼"],
      steps: [
        "Prepara el nombre de jugador aquí y mantenlo cerca de los 16 caracteres.",
        "Abre la pantalla de cambio de nombre del juego — Mobile: Perfil de jugador → Editar; títulos con Activision ID: flujo de token de cambio.",
        "Pega el nombre y léelo en la vista previa del juego antes de confirmar.",
        "Deja la etiqueta de clan corta y plana — 2–4 caracteres, sin estilo.",
      ],
      faq: [
        {
          q: "¿La etiqueta de clan de COD admite estas fuentes?",
          a: "No. La etiqueta mide solo unos 2–4 caracteres — una estimación para planear, no un tope oficial — y acepta texto plano. Déjala corta y pon el estilo en el nombre de jugador.",
        },
        {
          q: "¿Cuánto mide un nombre de Call of Duty?",
          a: "Planea con unos 16 caracteres. Warzone, Mobile y los títulos antiguos no coinciden, así que el campo del juego es el límite real — los artículos de cambio de nombre de Activision no fijan un tope.",
        },
        {
          q: "¿Un nombre con estilo puede costarme el baneo?",
          a: "No — los caracteres son texto, no trucos. Los riesgos realistas son prácticos: el filtro se niega a guardar, o un nombre que falle el filtro del Activision ID se reemplaza con anon seguido de dígitos. Suplantar al staff o los insultos es una infracción aparte.",
        },
        {
          q: "¿Cuánto cuesta cambiar el nombre en COD?",
          a: "Call of Duty: Mobile: 500 COD Points, una vez cada tres días, con una Tarjeta de cambio de nombre. Títulos con Activision ID como Warzone: tokens de cambio — recibes uno cada seis meses y puedes guardar dos como máximo. Un cambio forzado por caracteres inválidos puede devolver el token; uno por Código de conducta, no.",
        },
        {
          q: "¿Por qué mi nombre con estilo sale en cuadritos en mi teléfono?",
          a: "A tu teléfono le falta el glifo para ese carácter. La negrita y las versalitas se ven en casi todo; las pilas de símbolos exóticos son las que se dibujan como cuadros. Pega y lee el nombre en el juego antes de gastar un cambio.",
        },
        {
          q: "¿Es una herramienta oficial de Call of Duty?",
          a: "No. FancyFont es independiente y no está afiliado a Activision. Esta página prepara un nombre y convierte los caracteres en tu navegador — nada se sube.",
        },
      ],
    },
  },

  "fortnite-name-generator": {
    es: {
      navName: "Fortnite",
      h1: "Generador de nombres para Fortnite",
      title: "Generador de nombres de Fortnite – nombres con estilo",
      description:
        "Nombres con estilo para Fortnite: marcos y estilos Unicode que caben en unos 16 caracteres. Vista previa, copia y guarda desde tu cuenta de Epic.",
      platform: "Fortnite",
      intro: [
        "Fortnite muestra tu nombre visible de Epic en cada lobby, kill feed y repetición — un solo campo, normalmente de unos 16 caracteres. Filas como ★彡𝐕𝐈𝐂𝐓𝐎𝐑彡★ y ༺𝐓𝐨𝐫𝐦𝐞𝐧𝐭𝐚༻ vienen medidas para caber. Escribe abajo, mira la vista previa y copia.",
        "El nombre es de la cuenta: lo cambias desde los ajustes de tu cuenta de Epic, y el filtro de Epic decide qué caracteres sobreviven. Los alfabetos de glifo completo como la negrita y las versalitas aguantan mejor que los adornos apilados — marca dos candidatos aquí antes de decidirte.",
      ],
      limits: [
        { label: "Nombre visible", value: "Unos 16 caracteres — el campo del juego es el juez final" },
        { label: "Cambios de nombre", value: "Se cambia desde los ajustes de tu cuenta de Epic; con límite de frecuencia de Epic" },
        { label: "ID de cuenta de Epic", value: "Un número — se queda plano, sin estilo" },
        { label: "Conteo", value: "Algunos contadores tratan una letra con estilo como varios — haz caso al campo de Epic" },
      ],
      compat: [
        "Nombre visible: los alfabetos de glifo completo (negrita, versalitas) sobreviven al filtro de Epic más a menudo que los adornos apilados",
        "Si el lobby muestra cuadros, el filtro de Epic recortó o rechazó el estilo — elige uno más llano",
        "El cambio sigue a tu cuenta: el nuevo nombre aparece en todas las plataformas donde entres",
        "Las listas de partido y el kill feed muestran Unicode en crudo — los dispositivos viejos pueden echar de menos glifos raros",
      ],
      examples: ["★彡𝐕𝐈𝐂𝐓𝐎𝐑彡★", "꧁𝐂𝐚𝐳𝐚𝐝𝐨𝐫𝐚꧂", "༺𝐓𝐨𝐫𝐦𝐞𝐧𝐭𝐚༻", "⚡ɢᴀʟᴀxɪᴀ", "「𝐑𝐚𝐩𝐭𝐨𝐫」", "𝕱𝖚𝖊𝖌𝖔", "♛𝐑𝐞𝐲 𝐝𝐞𝐥 𝐋𝐨𝐨𝐭♛", "彡𝐧𝐨𝐬𝐜𝐨𝐩𝐞彡"],
      steps: [
        "Prepara el nombre visible aquí y marca dos candidatos.",
        "Abre los ajustes de tu cuenta de Epic en la web → General → Nombre visible (o Cuenta desde los ajustes del juego).",
        "Pega el primer candidato, guarda y revisa el lobby y el kill feed.",
        "Si salen cuadros o recortan el nombre, usa el respaldo más llano en vez de pelear con el filtro.",
      ],
      faq: [
        {
          q: "¿Cuánto puede medir un nombre de Fortnite?",
          a: "Planea con unos 16 caracteres. La vista previa cuenta los caracteres y avisa antes de copiar; el campo del juego es el juez final.",
        },
        {
          q: "¿Cómo cambio mi nombre de Fortnite?",
          a: "Desde los ajustes de tu cuenta de Epic en la web, o la sección de cuenta dentro del juego. El nombre visible es de la cuenta, así que el cambio te sigue en todas las plataformas donde juegues.",
        },
        {
          q: "¿Puedo poner símbolos en mi nombre de Fortnite?",
          a: "Los caracteres Unicode con estilo normalmente se guardan, pero el filtro de Epic puede recortarlos o rechazarlos. Los alfabetos más llanos — negrita, versalitas — sobreviven más que los adornos pesados.",
        },
        {
          q: "¿Un nombre con estilo puede costarme el baneo?",
          a: "No — los caracteres con estilo son texto ordinario, y un guardado fallido es solo un guardado fallido. Los baneos apuntan a conductas y a nombres ofensivos o que suplantan identidad, no al alfabeto en que los escribiste.",
        },
        {
          q: "¿Cómo copio y pego el nombre, y por qué se ve distinto en mi teléfono?",
          a: "Toca una fila para copiarla, pégala en el campo de Nombre visible de Epic y guarda. Si se ve mal en tu teléfono pero bien en PC, al teléfono le falta el glifo — elige versalitas o negrita, que se ven en casi todo.",
        },
        {
          q: "¿Es una herramienta oficial de Fortnite?",
          a: "No. FancyFont es independiente y no está afiliado a Epic Games ni a Fortnite. Esta página prepara el nombre en tu navegador; la pantalla de ajustes de Epic hace el cambio.",
        },
      ],
    },
  },
};
