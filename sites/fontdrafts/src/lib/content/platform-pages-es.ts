// Spanish platform pages: Instagram, TikTok, Discord, WhatsApp and
// Free Fire. Limits use "aprox." wording — the platform's own counter
// is always the source of truth.

import type { Locale } from "../i18n";
import type { PlatformPageCopy } from "../platform-pages";

export const platformPagesEs: Record<string, { [L in Locale]?: PlatformPageCopy }> = {
  "instagram-fonts": {
    es: {
      navName: "Fuentes de Instagram",
      h1: "Generador de fuentes para Instagram",
      title: "Generador de fuentes para Instagram — nombre 30 y bio 150",
      description:
        "Fuentes bonitas para Instagram: 𝓈𝓊𝓃𝓈ℯ𝓉, ｖａｐｏｒｗａｖｅ y más, en vivo al escribir y copia con un toque. Nombre 30 y bio 150; el @usuario queda plano.",
      platform: "Instagram",
      intro: [
        "El nombre visible y la bio de Instagram aceptan caracteres Unicode con estilo: 𝓈𝓊𝓃𝓈ℯ𝓉 y ｖａｐｏｒｗａｖｅ son clásicos de IG. Escribe abajo, mira la vista previa y toca para copiar.",
        "El límite está en tu @usuario: solo letras, dígitos, puntos y guiones bajos; los caracteres con estilo los rechazan. Deja los estilos para el nombre y la bio; usuarios y hashtags quedan planos.",
      ],
      limits: [
        { label: "Nombre visible", value: "30 caracteres, los símbolos con estilo cuentan" },
        { label: "Bio", value: "150 caracteres, admite saltos de línea y caracteres con estilo" },
        { label: "@usuario", value: "Solo letras/dígitos/puntos/guiones bajos — sin caracteres con estilo" },
      ],
      compat: [
        "Nombre visible: los estilos cursiva, fullwidth y con marco funcionan todos",
        "Bio: admite caracteres con estilo; combínalos con saltos de línea para dar formato",
        "Texto de Stories/Reels: usa el sistema de fuentes de la app — no tiene que ver con los estilos de caracteres",
        "Hashtags: los caracteres con estilo rompen la coincidencia de la etiqueta — deja los tags planos",
      ],
      examples: ["𝓈𝓊𝓃𝓈ℯ𝓉", "ｖａｐｏｒｗａｖｅ", "♡reina♡", "⋆t_r_a_v_e_l⋆", "ᴍɪʟᴋ ᴛᴇᴀ"],
      steps: [
        "Abre Instagram → Editar perfil → Nombre o Bio.",
        "Genera candidatas aquí: cursiva y fullwidth son los clásicos de IG.",
        "Pega y revisa los contadores de 30/150 caracteres.",
        "Después de guardar, búscate una vez: deja una versión plana en la bio para que te encuentren.",
      ],
      faq: [
        {
          q: "¿Nombre o usuario, en qué se diferencian?",
          a: "El @usuario es tu cuenta de acceso y tu ID de búsqueda: solo caracteres planos. El Nombre es la línea visible, 30 caracteres donde sí se permiten estilos. Las fuentes bonitas aplican solo al Nombre y a la Bio.",
        },
        {
          q: "¿El tachado funciona en la bio?",
          a: "Los caracteres se pegan bien, pero el renderizado de IG puede desalinear las marcas combinantes. Para dar formato a la bio, prefiere estilos de glifo completo como cursiva y fullwidth.",
        },
        {
          q: "¿Un nombre con estilo afecta las menciones?",
          a: "No: las @menciones coinciden con el @usuario, que no cambia por un nombre visible estilizado.",
        },
      ],
    },
  },
  "tiktok-fonts": {
    es: {
      navName: "Fuentes de TikTok",
      h1: "Generador de fuentes para TikTok",
      title: "Generador de fuentes para TikTok — apodo ~24 y bio ~80",
      description:
        "Fuentes bonitas para TikTok: ꧁marcos꧂, 𝓈𝓊𝓃𝓈ℯ𝓉 y más, en vivo al escribir y copia con un toque. Apodo de unos 24 y bio de unos 80; el @handle queda plano.",
      platform: "TikTok",
      intro: [
        "Los apodos de TikTok aceptan caracteres Unicode con estilo, y la bio recibe la mayoría también. Escribe tu apodo abajo — marcos gamer, cursiva, fullwidth — y toca para copiar.",
        "Cuidado con el límite: tu @handle solo acepta caracteres planos, y los hashtags con caracteres con estilo no coinciden. Los estilos van en el apodo y en la bio.",
      ],
      limits: [
        { label: "Apodo", value: "Unos 24 caracteres — confía en el contador de la pantalla de edición" },
        { label: "Bio", value: "Unos 80 caracteres, los símbolos con estilo cuentan" },
        { label: "@handle", value: "Solo letras/dígitos/puntos/guiones bajos — sin caracteres con estilo" },
      ],
      compat: [
        "Apodo: los caracteres con estilo funcionan; los cambios de apodo tienen límite de frecuencia",
        "Bio: la mayoría de los estilos va bien; las marcas combinantes pesadas pueden fallar en teléfonos Android antiguos",
        "Comentarios: admitidos, pero los muros de símbolos pueden contraerse",
        "Búsqueda: un apodo con estilo puede no coincidir textualmente — deja un alias plano en la bio",
      ],
      examples: ["꧁estrella꧂", "ｖａｐｏｒｗａｖｅ", "𝓈𝓊𝓃𝓈ℯ𝓉", "✧luna✧", "★彡hype彡★"],
      steps: [
        "Abre TikTok → Perfil → Editar perfil → Nombre.",
        "Genera candidatas aquí y guarda dos o tres con estrella.",
        "Pega en el campo de nombre y vigila el contador.",
        "Guarda y mira tu perfil desde otro dispositivo para revisar el renderizado.",
      ],
      faq: [
        {
          q: "¿Un apodo con estilo perjudica mi alcance?",
          a: "No: los caracteres con estilo son texto ordinario; el alcance depende del contenido. El verdadero precio es la búsqueda: un apodo estilizado puede no coincidir textualmente, así que deja una versión plana en tu bio.",
        },
        {
          q: "¿Puedo usar fuentes bonitas en las descripciones?",
          a: "Sí, las descripciones aceptan los caracteres. Pero los hashtags deben quedar planos o el tag no se resuelve.",
        },
        {
          q: "¿Por qué falló el guardado de mi nombre?",
          a: "TikTok valida los apodos con una lista de bloqueo; algunos símbolos exóticos la activan. Cambia el adorno por uno más seguro (♡ ★ 『』) y reintenta.",
        },
      ],
    },
  },
  "discord-fonts": {
    es: {
      navName: "Fuentes de Discord",
      h1: "Generador de fuentes para Discord",
      title: "Letras para Discord — nombres de unos 32 caracteres",
      description:
        "Fuentes bonitas para Discord: nombres de unos 32, apodos por servidor y mensajes de 2000. En vivo al escribir y copia con un toque; @menciones quedan planas.",
      platform: "Discord",
      intro: [
        "Los nombres visibles, los apodos por servidor y los mensajes de Discord aceptan Unicode con estilo: no hace falta Nitro, porque son caracteres, no fuentes. Escribe abajo y toca para copiar.",
        "Dónde funciona: tu nombre visible, tu apodo por servidor, tu estado y tus mensajes. Dónde no: las @menciones y los comandos slash coinciden con tu handle real, así que déjalo plano.",
      ],
      limits: [
        { label: "Nombre visible", value: "Unos 32 caracteres" },
        { label: "Apodo de servidor", value: "Unos 32 caracteres, se define por servidor" },
        { label: "Mensajes", value: "2000 caracteres — el texto con estilo cuenta normal" },
      ],
      compat: [
        "Nombre visible / apodo de servidor: caracteres con estilo totalmente admitidos",
        "Estado: los caracteres con estilo funcionan",
        "Mensajes: admitidos; las marcas combinantes pesadas pueden saltar de línea de forma rara",
        "Bots y menciones: coinciden con el handle plano — el texto con estilo no hace ping",
      ],
      examples: ["𝔡𝔞𝔯𝔨𝔦𝔤𝔥𝔱", "⚡tormenta⚡", "ᴍɪʀᴀɢᴇ", "꧁ACE꧂", "ⓜⓞⓞⓝⓒⓗⓘⓛⓓ"],
      steps: [
        "Abre Discord → Ajustes de usuario → Nombre visible (o clic derecho en un servidor → Editar apodo).",
        "Genera candidatas aquí y copia tu favorita.",
        "Pega en el campo de nombre y guarda.",
        "Prueba un mensaje y un ping: las menciones deben seguir llegando a tu handle plano.",
      ],
      faq: [
        {
          q: "¿Necesito Nitro para un nombre de Discord con estilo?",
          a: "No. Los emojis de servidor globales y otras ventajas de Nitro son otra cosa: los caracteres con estilo son solo texto y funcionan en cualquier cuenta.",
        },
        {
          q: "¿Puedo estilizar mi @mención?",
          a: "No: las menciones se resuelven contra tu handle plano. Deja el handle normal y decora el nombre visible.",
        },
        {
          q: "¿Por qué mi nombre con estilo se ve con cuadros para algunos miembros?",
          a: "A las fuentes de su sistema les faltan esos glifos. Los marcos populares (꧁꧂ ★ ♡) son más seguros que las mezclas de cursiva exóticas.",
        },
      ],
    },
  },
  "whatsapp-fonts": {
    es: {
      navName: "Fuentes de WhatsApp",
      h1: "Generador de fuentes para WhatsApp",
      title: "Generador de fuentes para WhatsApp — nombre ~25 y Info ~139",
      description:
        "Fuentes bonitas para WhatsApp: nombre de unos 25 y Info de unos 139, en vivo al escribir y copia con un toque; los mensajes conservan el estilo.",
      platform: "WhatsApp",
      intro: [
        "El nombre de perfil y la línea de Info de WhatsApp aceptan Unicode con estilo, y los mensajes conservan el estilo de punta a punta porque todo es texto plano. Escribe abajo y toca para copiar.",
        "Decora con moderación: en WhatsApp viven tu familia y tus compañeros de trabajo. Los marcos finos y las versalitas envejecen mejor que las torres gamer pesadas.",
      ],
      limits: [
        { label: "Nombre de perfil", value: "Unos 25 caracteres" },
        { label: "Info", value: "Unos 139 caracteres" },
        { label: "Mensajes", value: "Unos 65.536 caracteres — el texto con estilo cuenta normal" },
      ],
      compat: [
        "Nombre de perfil: caracteres con estilo admitidos",
        "Info: admitida, visible en tu tarjeta de contacto",
        "Mensajes: los estilos sobreviven todo el camino — los caracteres son el estilo",
        "Grupos: tu nombre se ve en cada grupo; manténlo reconocible en los grupos de trabajo",
      ],
      examples: ["★彡drifter彡★", "𝓂𝒾𝓁𝓀 𝓉𝑒𝒶", "⋆e n l i n e a⋆", "✧enfoque✧", "『modo silencio』"],
      steps: [
        "Abre WhatsApp → Ajustes → tu perfil → Nombre (o Info).",
        "Genera candidatas aquí y copia una.",
        "Pega en el campo y guarda.",
        "Pregúntale a un contacto cómo se ve: los teléfonos Android viejos son los culpables clásicos de los cuadros.",
      ],
      faq: [
        {
          q: "¿Las fuentes bonitas funcionan en los mensajes de WhatsApp?",
          a: "Sí, mejor que en la mayoría de las apps, porque el estilo vive en los propios caracteres. La sintaxis propia de WhatsApp, *negrita* _itálica_, es independiente y no cambia.",
        },
        {
          q: "¿Un nombre estilizado confunde a mis contactos?",
          a: "Puede: la gente busca contactos por nombre y uno decorado puede no coincidir. Deja tu nombre real, encontrable, en la línea de Info.",
        },
        {
          q: "¿El formato integrado de WhatsApp entra en conflicto?",
          a: "No: *negrita* y _itálica_ son sintaxis alrededor de texto ordinario; los caracteres con estilo no interfieren con ellas.",
        },
      ],
    },
  },
  "free-fire-name-generator": {
    es: {
      navName: "Nombres de Free Fire",
      h1: "Generador de nombres para Free Fire",
      title: "Generador de nombres para Free Fire — aprox. 6–12 caracteres",
      description:
        "Nombres bonitos para Free Fire: marcos ꧁꧂, negrita y contorno, en vivo al escribir y copia con un toque; el apodo admite aprox. 6–12 caracteres.",
      platform: "Free Fire",
      intro: [
        "꧁ACE꧂, ★彡sniper彡★, 𝗦𝗛𝗔𝗗𝗢𝗪 — los marcos gamer son el idioma común de los IDs de shooters. Escribe tu nombre, mira los estilos y cópialo hacia el cambio de nombre.",
        "El cambio de nombre cuesta diamantes, así que decide aquí: guarda dos o tres candidatas con estrella y gasta un solo intento en la que pase la validación.",
      ],
      limits: [
        { label: "Apodo", value: "Aprox. 6–12 caracteres según la versión" },
        { label: "Costo del cambio", value: "Cuesta diamantes u otro dinero del juego — mira la vista previa antes de gastar" },
        { label: "Validación", value: "Lista blanca según la versión; los fallos dicen «caracteres no válidos»" },
      ],
      compat: [
        "La mayoría de las versiones acepta los marcos comunes ꧁꧂ ༺༻ ★彡彡★",
        "Marcas combinantes (tachado/zalgo): rechazadas en los servidores más estrictos",
        "Cuentas de competitivo: los torneos exigen nombres planos",
        "Búsqueda de amigos: los IDs con estilo se resisten a la búsqueda exacta — comparte tu cadena de ID",
      ],
      examples: ["꧁ACE꧂", "★彡sniper彡★", "𝗦𝗛𝗔𝗗𝗢𝗪", "♛rey♛", "⚡storm⚡"],
      steps: [
        "Genera candidatas aquí y guarda las dos mejores con estrella.",
        "Abre el juego → inventario → tarjeta de cambio de nombre → escribe el nombre nuevo.",
        "Pega la primera candidata; si el filtro la rechaza, usa la de respaldo.",
        "Arma squad y pide a un compañero que revise tu nombre en la lista.",
      ],
      faq: [
        {
          q: "¿Me pueden banear por un nombre con estilo?",
          a: "No: los caracteres son texto, no trucos. Los baneos apuntan a conductas y palabras ofensivas; un fallo de validación simplemente rechaza el guardado.",
        },
        {
          q: "¿Por qué mi nombre falló con «caracteres no válidos»?",
          a: "Ese servidor valida con lista blanca y tu símbolo no está en ella. Elige un marco más común o quita adornos en los servidores más estrictos.",
        },
        {
          q: "¿Los nombres de torneo permiten estilos?",
          a: "No: los nombres registrados en competencias siguen las reglas del torneo, normalmente letras y dígitos planos. Deja los estilos para tu ID de emparejamiento.",
        },
      ],
    },
  },
};
