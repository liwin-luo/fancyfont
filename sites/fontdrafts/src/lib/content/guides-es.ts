// Spanish guides: 4 condensed guides for the Spanish audience.
// Platform limits use "aprox." wording; the platform's own counter rules.
// relatedTools hrefs carry the /es/ prefix and only link es-available pages.

import type { GuideDef } from "../guides";

export const guidesEs: GuideDef[] = [
  {
    locale: "es",
    slug: "what-are-unicode-fonts",
    navName: "¿Qué son las fuentes Unicode?",
    h1: "¿Qué son las fuentes Unicode? El principio en palabras simples",
    title: "¿Qué son las fuentes Unicode? El texto con estilo explicado",
    description:
      "Las fuentes fancy no son archivos de fuente: son caracteres Unicode con estilo. El principio, dónde funcionan, dónde fallan y qué las hace diferentes.",
    published: "2026-11-07",
    updated: "2026-11-07",
    intro: [
      "Cada «fuente bonita» que has visto — 𝓱𝓮𝓵𝓵𝓸, ꧁ace꧂ — no es una fuente para nada. Son caracteres ordinarios de la tabla Unicode, exactamente iguales que las letras de esta frase: texto, no formato.",
      "Cuando interiorizas ese único hecho, la mayoría de los misterios se resuelven solos: por qué el estilo sobrevive al pegado, por qué algunos dispositivos muestran cuadros, por qué la búsqueda no encuentra nombres estilizados y por qué los @usuarios los rechazan.",
    ],
    sections: [
      {
        heading: "Un segundo alfabeto dentro de la tabla de caracteres",
        paragraphs: [
          "Unicode es el catálogo global que le da un número a cada carácter de cada sistema de escritura. Cerca de 2001 agregó un set completo de letras latinas estilizadas para la composición matemática: negrita, itálica, cursiva, contorno y gótica recibieron su A–Z y su a–z, y después llegaron las decoraciones burbuja, circulares y cuadradas.",
          "Esas letras se hicieron para las fórmulas, pero como parecen otra tipografía, se tomaron prestadas para el texto personal. Un generador hace exactamente una cosa: cambiar cada letra ordinaria por el carácter estilizado de la misma posición. El texto es idéntico; solo cambian los glifos.",
        ],
      },
      {
        heading: "Por qué el estilo sobrevive a cada pegado",
        paragraphs: [
          "La negrita de un procesador de textos es una marca de formato: desaparece cuando el destino no la admite. Una letra estilizada del [generador de negrita](/es/bold-fonts/) simplemente ES negrita: el grosor es propiedad del carácter, no del entorno. Todo lugar que acepta el texto acepta el estilo.",
          "También explica el conteo: una letra estilizada sigue siendo un carácter (excepto tachado y zalgo, donde las marcas combinantes invisibles también se cuentan).",
        ],
      },
      {
        heading: "Dónde están los límites",
        bullets: [
          "Cobertura limitada: los glifos estilizados existen solo para letras latinas y dígitos. Los demás alfabetos no tienen segunda forma: los apodos en chino usan marcos decorativos en su lugar.",
          "Búsqueda que no coincide: los caracteres estilizados no son letras planas; la búsqueda textual, las @menciones y los hashtags pueden fallar.",
          "La visualización depende de las fuentes: un dispositivo sin el glifo muestra un cuadro — mira la guía de cuadros.",
          "Costo de accesibilidad: los lectores de pantalla pueden deletrear el nombre completo de cada carácter. Nunca lo uses para información esencial.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Quien lee necesita instalar algo?",
        a: "Nada de instalar, pero su biblioteca de fuentes debe contener los glifos. Los sistemas principales cubren los estilos populares; los símbolos exóticos son de donde salen los cuadros.",
      },
      {
        q: "¿Los otros alfabetos tendrán formas estilizadas algún día?",
        a: "Unicode podría agregarlas, pero para los alfabetos enormes el trabajo nunca llegó. Los marcos y las decoraciones son la ruta práctica: combínalos con los generadores de esta página.",
      },
    ],
    relatedTools: [
      { href: "/es/cursive-fonts/", title: "Generador de cursiva", description: "Prueba tú mismo el reemplazo de caracteres." },
      { href: "/es/bold-fonts/", title: "Generador de negrita", description: "El ejemplo más claro de letras que ya nacen en negrita." },
      { href: "/es/cool-font-generator/", title: "Cool", description: "Ábrelo y pruébalo mientras lees." },
    ],
    appearOn: ["cursive-fonts", "bold-fonts", "fancy-numbers", "upside-down-text", "italic-text-generator", "tiny-text-generator", "cool-font-generator", "elegant-font-generator"],
  },
  {
    locale: "es",
    slug: "why-boxes-appear",
    navName: "Por qué salen cuadros",
    h1: "Por qué el texto con estilo se ve con cuadros (□) en algunos dispositivos",
    title: "¿Por qué salen cuadros (□) y cómo arreglarlo?",
    description:
      "Los cuadros (□) significan que al receptor le falta el glifo: la copia no falló. El mecanismo, los estilos de riesgo y cómo arreglarlo.",
    published: "2026-11-07",
    updated: "2026-11-07",
    intro: [
      "En tu pantalla se ve bien y llega como una fila de cuadros □ en un celular viejo: el fallo clásico del texto con estilo. Los cuadros no son corrupción y no se perdió nada al copiar: al otro dispositivo simplemente le falta el dibujo de ese carácter.",
      "Esta guía cubre el mecanismo, qué estilos son riesgosos, cuáles son casi a prueba de todo y el orden de recuperación.",
    ],
    sections: [
      {
        heading: "Glifo faltante, no datos faltantes",
        paragraphs: [
          "Para mostrar un carácter, la biblioteca de fuentes del dispositivo necesita un dibujo para él. Unicode cataloga decenas de miles de caracteres y ningún dispositivo trae dibujos de todos. El carácter llegó intacto: el dispositivo no puede pintarlo, así que dibuja un cuadro de relleno que dice «aquí hay un carácter que no sé dibujar».",
          "Por eso los cuadros son siempre un problema del lado de quien recibe: tú lo ves bien y ellos ven cuadros — tus fuentes lo cubren, las de ellos no.",
        ],
      },
      {
        heading: "Estilos de alto riesgo contra estilos seguros",
        bullets: [
          "Adornos de alfabetos exóticos: ꧁ ꧇ ᨳ vienen del javanés y el lontara — gran energía gamer, alta tasa de cuadros en dispositivos viejos.",
          "Caracteres con presentación emoji: 🅱 ⚜ se fuerzan a emoji de colores en algunas plataformas, no lo que diseñaste.",
          "Marcas combinantes densas: el zalgo apila docenas de marcas; los renderizadores viejos se atragantan.",
          "Elecciones de bajo riesgo: letras fullwidth (un básico CJK), dígitos circulares ① y símbolos básicos ♡ ★ ✿ — cobertura casi universal.",
        ],
      },
      {
        heading: "El orden de recuperación",
        paragraphs: [
          "Primero cambia el estilo: cada intención tiene un gemelo más seguro (꧁꧂ → 『』, 🅱 → la 𝗕 del [generador de negrita](/es/bold-fonts/)). Después cambia el símbolo: adornos exóticos → básicos ♡ ★. Al final, acepta el límite: en un dispositivo de diez años cualquier cosa con estilo puede fallar, así que deja los mensajes importantes planos.",
          "El seguro más barato: mira tu propio post en un segundo dispositivo antes de decidirte.",
        ],
      },
    ],
    faq: [
      {
        q: "¿La otra persona puede copiar bien el texto con cuadros?",
        a: "Sí: el cuadro es solo un marcador visual; los datos están intactos. Reenviado a un dispositivo con mejores fuentes, se ve perfecto.",
      },
      {
        q: "¿Existe un estilo que se vea en todas partes?",
        a: "Las letras fullwidth, los dígitos circulares y los símbolos básicos se acercan, pero nada es 100%. Elige con expectativas de «funciona en casi todo».",
      },
    ],
    relatedTools: [
      { href: "/es/zalgo-text/", title: "Limpiador zalgo", description: "Quita las marcas apiladas del texto roto." },
      { href: "/es/cute-fonts/", title: "Letras tiernas", description: "Adornos con nota de compatibilidad en cada tarjeta." },
      { href: "/es/dark-font-generator/", title: "Oscura", description: "Ábrelo y pruébalo mientras lees." },
    ],
    appearOn: ["zalgo-text", "cute-fonts", "crazy-font-generator", "dark-font-generator", "bubble-fonts"],
  },
  {
    locale: "es",
    slug: "name-length-limits",
    navName: "Límites de longitud",
    h1: "Límites de caracteres para nombres, plataforma por plataforma",
    title: "Límites de caracteres por plataforma: TikTok, IG y más",
    description:
      "Límites de nick y bio en Instagram, TikTok, Discord, WhatsApp, Roblox y Free Fire: cómo cuentan los caracteres y qué hacer en el límite.",
    published: "2026-11-07",
    updated: "2026-11-07",
    intro: [
      "Los caracteres con estilo no agregan largo visible (una letra se cambia por un carácter), pero los marcos decorativos sí: de 1 a 2 símbolos por lado. Las plataformas justas necesitan planes de decoración que quepan en la cuota.",
      "La tabla de abajo reúne los valores comunes. Las reglas cambian con el tiempo, los números son «aproximados» y el contador en vivo del campo de texto es siempre el juez final.",
    ],
    sections: [
      {
        heading: "La referencia rápida",
        table: {
          head: ["Plataforma", "Límite del nombre (aprox.)", "Consejo de decoración"],
          rows: [
            ["Instagram", "Nombre 30 / Bio 150", "Nombre para el estilo, Bio para una línea plana que te encuentren"],
            ["TikTok", "Unos 24 (Bio ~80)", "Los marcos de un solo símbolo ✧ ⋆ dejan espacio para el texto"],
            ["Discord", "Unos 32 (nombre visible)", "Espacio para marcos dobles ꧁༺༻꧂"],
            ["WhatsApp", "Unos 25 (Info ~139)", "Los marcos finos ━ ✧ caben en el campo corto"],
            ["Roblox", "3–20 nombre visible", "Validación estricta — los glifos planos pasan más seguido"],
            ["Free Fire", "Aprox. 6–12", "Nombres cortos + ꧁꧂ calzan justo; cuenta antes de pegar"],
            ["Shooters en general", "Unos 5–16", "IDs de dos letras + ꧁꧂ quedan perfectos; cuenta primero"],
            ["Telegram", "Unos 64", "El más generoso: todo cabe"],
          ],
        },
      },
      {
        heading: "Dos trampas del conteo",
        bullets: [
          "Las marcas combinantes cuentan: tachado y zalgo agregan de 1 a 4 símbolos invisibles por carácter visible — los contadores se duplican y los campos estrictos se desbordan.",
          "El conteo fullwidth varía: la mayoría de las plataformas cuenta uno por letra, algunas cuentan el ancho visible como dos — mira el contador después de pegar.",
        ],
      },
      {
        heading: "Cuando te pasas del límite",
        paragraphs: [
          "Acorta el texto, no la decoración: el marco es el corazón del estilo. Un ꧁estrella de luz꧂ que no cabe se convierte en ꧁estrella꧂, que le gana por mucho a bajar a texto plano.",
          "¿Quieres el mismo nombre en todas las plataformas? Diseña para el juego más estricto que juegues (piensa en [Free Fire](/es/free-fire-name-generator/), con unos 6–12 caracteres) y los demás se adaptan solos.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Dónde están los números oficiales?",
        a: "El centro de ayuda de cada plataforma los documenta. Esta tabla son valores «aproximados» mantenidos por la comunidad: el contador del campo de texto nunca miente.",
      },
      {
        q: "¿Por qué mi conteo difiere del de un amigo?",
        a: "El conteo de marcas combinantes difiere: algunas plataformas cuentan cada marca, otras las fusionan en clústeres de grafemas. Confía en el contador donde pegues.",
      },
    ],
    relatedTools: [
      { href: "/es/fancy-numbers/", title: "Números especiales", description: "Decoraciones numeradas que ocupan poco." },
      { href: "/es/whatsapp-fonts/", title: "Fuentes de WhatsApp", description: "El campo más corto: prueba el espacio real." },
      { href: "/es/fortnite-name-generator/", title: "Fortnite", description: "Ábrelo y pruébalo mientras lees." },
    ],
    appearOn: ["instagram-fonts", "tiktok-fonts", "discord-fonts", "whatsapp-fonts", "free-fire-name-generator", "fortnite-name-generator", "facebook-fonts", "youtube-fonts", "adopt-me-fonts", "fancy-numbers"],
  },
  {
    locale: "es",
    slug: "account-safety",
    navName: "Riesgos de baneo",
    h1: "¿Te pueden banear por un nombre con estilo? Las reglas reales",
    title: "¿Baneo por nombres con estilo? Las reglas de cada plataforma",
    description:
      "Los nombres con estilo son texto ordinario: no provocan baneos. Dónde trazan la línea las plataformas: listas blancas, búsqueda que no coincide y suplantación.",
    published: "2026-11-07",
    updated: "2026-11-07",
    intro: [
      "«¿Un nombre con estilo me puede costar el baneo?» es la pregunta más repetida. Respuesta: los caracteres con estilo son texto ordinario sin código dentro; ninguna plataforma te banea por los caracteres en sí.",
      "Las restricciones reales se agrupan en tres tipos: listas blancas de caracteres (algunos juegos), búsqueda que no coincide (la búsqueda falla) y suplantación (texto con estilo fingiendo ser oficial). Solo la última es un riesgo de baneo de verdad.",
    ],
    sections: [
      {
        heading: "Las tres formas de las reglas de plataforma",
        bullets: [
          "Abiertas: Discord, WhatsApp, Telegram y la mayoría de las bios aceptan caracteres con estilo; los chequeos miran el contenido, no el estilo del glifo.",
          "Validación por lista blanca: algunos juegos solo permiten un set conocido de caracteres — «caracteres no válidos» significa un guardado rechazado, no un baneo.",
          "Sensibles al contexto: el nombre en sí es legal, pero estilizarlo para suplantar al staff o esquivar filtros se trata como la infracción que es.",
        ],
      },
      {
        heading: "Las tres cosas que sí valen la preocupación",
        paragraphs: [
          "Suplantación: estilizar «Soporte oficial» para parecer una cuenta verificada es una infracción clara — el motivo del baneo es la suplantación, no los glifos.",
          "Evasión: escribir insultos o anuncios en caracteres con estilo para colarse por los filtros se castiga como evasión de filtros.",
          "Contextos de estafa: caracteres con estilo en datos de pago o códigos de verificación — jamás lo hagas, y enséñale a tu familia a no confiar en «avisos oficiales» escritos en texto con estilo.",
        ],
      },
      {
        heading: "La lista de chequeo del uso seguro",
        bullets: [
          "Apodos, bios, firmas: decora con libertad — eso es expresión de identidad.",
          "Información crítica (contactos, IDs, montos): siempre en caracteres planos.",
          "Error de «caracteres no válidos»: cambia de caracteres o de plataforma; no busques cómo esquivarlo.",
          "Después de un cambio de nombre, publica una prueba: confirma que la visualización y la búsqueda siguen funcionando.",
        ],
      },
    ],
    faq: [
      {
        q: "Alguien dijo que un apodo con estilo le bajó el alcance, ¿es real?",
        a: "La limitación apunta al contenido y la conducta, no a la forma de los glifos. La coincidencia de tiempos es fácil de culpar al nombre nuevo; revisa el post que sí fue limitado.",
      },
      {
        q: "¿Los caracteres con estilo interfieren con los chequeos de seguridad de la cuenta?",
        a: "No: la seguridad se ata a la verificación por teléfono, correo o documento. Los nombres visibles son solo para mostrar y nunca entran en los flujos de seguridad.",
      },
    ],
    relatedTools: [
      { href: "/es/free-fire-name-generator/", title: "Nombres de Free Fire", description: "Estilos amigables con la lista blanca." },
      { href: "/es/bold-fonts/", title: "Generador de negrita", description: "El estilo completo más seguro para empezar." },
      { href: "/es/cod-name-generator/", title: "COD", description: "Ábrelo y pruébalo mientras lees." },
    ],
    appearOn: ["tiktok-fonts", "free-fire-name-generator", "cod-name-generator", "berry-avenue-fonts", "bold-fonts"],
  },
];
