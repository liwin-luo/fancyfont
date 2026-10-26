// Spanish copy for the dedicated style generator pages.

import type { StylePageCopy } from "./style-pages-en";

export const stylePagesEs: Record<string, StylePageCopy> = {
  "cursive-text-generator": {
    navName: "Cursiva",
    h1: "Generador de letras cursivas",
    description:
      "Convierte tu texto en letras cursivas Unicode al instante. Dos grosores, vista previa en vivo y copia para tu bio, tu nombre o tus chats.",
    intro:
      "Convierte tu texto en letras cursivas con caracteres Unicode — sin instalar fuentes y sin registrarte. Escribe abajo, elige el grosor y copia.",
    howItWorks:
      "El texto cursivo usa los rangos Unicode Mathematical Script y Bold Script. Cada letra se cambia por un carácter similar dibujado con trazos manuscritos conectados: por eso el estilo sobrevive al copiar y pegar, algo que una fuente de verdad no puede hacer.",
    coverageNote:
      "Los dos estilos cursivos convierten la A–Z y la a–z. Unicode no tiene dígitos cursivos, así que los números quedan igual, y las letras con tilde, los emoji y otros alfabetos se mantienen sin cambios.",
    bestFor: [
      "Bios de Instagram y nombres visibles con un toque manuscrito y suave",
      "Perfiles de belleza, bodas y lifestyle",
      "Frases cortas donde una letra cursiva caería perfecta",
    ],
    sampleInputs: ["Tu Nombre", "Dulce Tea", "fyL"],
    platformTip:
      "Las letras cursivas funcionan en casi todas las bios y nombres de Instagram, TikTok y Discord. Algunos juegos las rechazan porque sus fuentes solo cubren el alfabeto básico — prueba antes de decidirte.",
    faq: [
      {
        q: "¿El texto cursivo es una fuente de verdad?",
        a: "No. Son caracteres Unicode que parecen escritura a mano. Justo por eso puedes pegarlos en apps que solo aceptan texto plano.",
      },
      {
        q: "¿Por qué veo cuadritos en algunos dispositivos?",
        a: "Ese dispositivo no tiene fuente para esos caracteres. Pasa sobre todo en Android antiguos. Usa la cursiva negrita o prueba otro estilo si a tu audiencia le pasa.",
      },
      {
        q: "¿Puedo usar cursiva en mi usuario de Instagram?",
        a: "No — el usuario de Instagram solo acepta letras, números, puntos y guiones bajos. La cursiva va en tu nombre visible y en tu bio.",
      },
    ],
  },
  "gothic-text-generator": {
    navName: "Gótica",
    h1: "Generador de letras góticas",
    description:
      "Crea texto gótico blackletter con cualquier palabra. Dos grosores, vista previa en vivo y copia en un toque para nombres, bios y clanes.",
    intro:
      "Escribe lo que quieras y conviértelo en letra gótica — el estilo antiguo de los logos de metal, los tags de clan y las bios oscuras. Copia en un clic.",
    howItWorks:
      "El texto gótico usa los rangos Unicode Mathematical Fraktur. El fraktur es un estilo alemán histórico, y Unicode incluye un alfabeto completo similar — con formas especiales para C, H, I, R y Z.",
    coverageNote:
      "Los dos estilos góticos solo convierten la A–Z y la a–z. Números, tildes y emoji quedan tal cual, porque Unicode no tiene dígitos fraktur.",
    bestFor: [
      "Nombres gamer y tags de clan con estética metal u oscura",
      "Bios de Halloween y eventos",
      "Marcas de perfil con aire de banda",
    ],
    sampleInputs: ["Sombra", "Noche", "Cuervo"],
    platformTip:
      "Los caracteres blackletter funcionan bien en móviles modernos, pero algunos equipos viejos muestran cuadritos. Prueba en la app que vayas a usar — sobre todo en juegos.",
    faq: [
      {
        q: "¿En qué se diferencian los dos estilos góticos?",
        a: "El primero es fraktur clásico, de trazo fino; el segundo es el grosor negrito, más legible en tamaños pequeños.",
      },
      {
        q: "¿Por qué algunas letras se ven diferentes?",
        a: "Letras como C, H, I, R y Z vienen de tipografías blackletter históricas en vez del rango matemático, así que su forma varía un poco. Es parte del estilo.",
      },
      {
        q: "¿Funciona en nombres de Roblox o Fortnite?",
        a: "Ambos juegos restringen el conjunto de caracteres, y a muchos jugadores les rechazan las letras góticas. Prueba primero en la vista previa de cambio de nombre o usa combinaciones con el nombre sin tocar.",
      },
    ],
  },
  "bold-text-generator": {
    navName: "Negrita",
    h1: "Generador de letras en negrita",
    description:
      "Pon tu texto en negrita donde solo se acepta texto plano. Grosor serif, sans e itálico — vista previa y copia en segundos.",
    intro:
      "Negrita de verdad que sobrevive al copiar y pegar — en estados de WhatsApp, posts de X, apodos de Discord y cualquier lugar sin botón de formato.",
    howItWorks:
      "Los estilos en negrita usan tres rangos Unicode: Mathematical Bold para el peso serif clásico, Mathematical Sans-Serif Bold para un look más limpio y Mathematical Bold Italic para más énfasis. Cada letra es un carácter propio, así que el grosor viaja con el texto.",
    coverageNote:
      "Las negritas serif y sans convierten letras y dígitos. La negrita itálica solo cubre letras — Unicode no tiene dígitos en negrita itálica — y todo lo que no sea A–Z, a–z o 0–9 queda igual.",
    bestFor: [
      "Destacar una o dos palabras en bios y captions",
      "Anuncios donde no hay opciones de formato",
      "Tags de juego fuertes y legibles",
    ],
    sampleInputs: ["Última hora", "Rebaja 50%", "GOAT"],
    platformTip:
      "La negrita Unicode funciona casi donde funciona el texto plano. En apps con formato real, como los mensajes de Discord, prefiere la negrita nativa — se ve más consistente.",
    faq: [
      {
        q: "¿Por qué no usar simplemente el botón de negrita?",
        a: "Muchos sitios — captions de Instagram, bios de TikTok, la mayoría de juegos — no tienen formato. Los caracteres Unicode en negrita son la única forma de conseguirlo ahí.",
      },
      {
        q: "¿Las letras en negrita afectan a los lectores de pantalla?",
        a: "Algunos las leten letra por letra o las deletrean raro. Para párrafos largos es mejor el formato nativo; para un nombre o una palabra, no hay problema.",
      },
      {
        q: "¿Hay números en negrita?",
        a: "Sí — en los estilos serif y sans. La negrita itálica no tiene dígitos, así que los números quedan sin cambios en ese estilo.",
      },
    ],
  },
  "italic-text-generator": {
    navName: "Itálica",
    h1: "Generador de letras itálicas",
    description:
      "Escribe texto itálico que puedes pegar en cualquier parte. Itálica serif clásica y sans limpia, con vista previa al instante.",
    intro:
      "Texto elegante e inclinado para pegar en bios, captions y chats — donde las apps olvidaron ponerte un botón de itálica.",
    howItWorks:
      "El estilo clásico usa el rango Unicode Mathematical Italic, incluida la histórica ℎ para la letra h. La variante sans itálica viene del rango Mathematical Sans-Serif Italic, con un ángulo más moderno y limpio.",
    coverageNote:
      "Los dos estilos itálicos solo convierten letras — Unicode no define dígitos itálicos. Números, puntuación, emoji y otros alfabetos quedan tal cual.",
    bestFor: [
      "Capturas poéticas y bios de lectores",
      "Destacar títulos y frases en otros idiomas",
      "Un acento suave dentro de bios sencillas",
    ],
    sampleInputs: ["érase una vez", "modo: relax", "parte 2"],
    platformTip:
      "La itálica Unicode es segura en bios, nombres y mensajes de las grandes plataformas. Evita párrafos largos — a algunos lectores de pantalla les cuestan las letras matemáticas y el texto inclinado cansa más.",
    faq: [
      {
        q: "¿Por qué no cambiaron mis números?",
        a: "Unicode no tiene dígitos itálicos — solo letras. Tus números quedan en el estilo normal, que suele combinarse bien con letras itálicas.",
      },
      {
        q: "¿Qué itálica elijo?",
        a: "La serif suena clásica y literaria; la sans se ve más limpia en tamaños pequeños. Ambas se copian igual, así que pruébalas con tu texto.",
      },
      {
        q: "¿Puedo poner toda mi bio de Instagram en itálica?",
        a: "Puedes, pero no lo recomendamos: bloques largos de caracteres matemáticos se leen raro con lectores de pantalla y cansan la vista. Mejor itálica en una palabra o una línea.",
      },
    ],
  },
  "bubble-letters-generator": {
    navName: "Burbuja",
    h1: "Generador de letras burbuja",
    description:
      "Mete tus letras en burbujas rellenas, aros finos o cuadros. Letras Unicode juguetonas con vista previa y copia en un toque.",
    intro:
      "Envuelve cada letra en su propia burbuja. Tres sabores — burbujas rellenas, aros finos y cuadros gruesos — todos copiables como texto plano.",
    howItWorks:
      "El texto burbuja usa los bloques Unicode Enclosed Alphanumerics y Enclosed Alphanumeric Supplement: círculos rellenos para el look burbuja, formas circulares finas para algo más ligero y cuadros negativos para la versión cuadrada. Cada carácter encerrado es un único punto de código Unicode.",
    coverageNote:
      "Los estilos burbuja y encerrado cubren letras y dígitos, con un carácter especial para el cero. El estilo cuadrado solo tiene letras y a menudo se muestra como emoji a color en móviles — divertido, pero pruébalo primero.",
    bestFor: [
      "Nombres juguetones y bromas internas con amigos",
      "Invitaciones de cumpleaños y posts casuales",
      "Resaltar letras o números sueltos en la bio",
    ],
    sampleInputs: ["Burbujas", "Fiesta 2026", "ABC"],
    platformTip:
      "Los caracteres encerrados funcionan muy bien en móviles, que es donde más se usan. La excepción es el cuadrado — muchos dispositivos lo muestran como emoji, así que revisa cómo queda donde lo vayas a pegar.",
    faq: [
      {
        q: "¿Qué diferencia hay entre burbuja y encerrado?",
        a: "Las letras burbuja van en círculos negros rellenos; las encerradas, en aros finos. Burbuja llama más la atención; encerrado es más discreto.",
      },
      {
        q: "¿Por qué el cero se ve diferente?",
        a: "Unicode codifica el cero distinto a los otros dígitos y le da su propio carácter. Los estilos burbuja y encerrado lo incluyen — solo el estilo entre paréntesis se lo salta.",
      },
      {
        q: "¿Puedo usar letras burbuja en un juego?",
        a: "Algunos juegos aceptan caracteres encerrados, otros no. Copia una combinación del Generador de nombres que deje tu base sin tocar, para tener siempre un plan B.",
      },
    ],
  },
  "small-caps-generator": {
    navName: "Versalitas",
    h1: "Generador de versalitas (small caps)",
    description:
      "Escribe en versalitas — un look discreto y premium para bios, nombres visibles y captions. Convierte y copia al instante.",
    intro:
      "Las versalitas convierten tu texto en mini mayúsculas — el look discreto y premium de las bios limpias y los perfiles aesthetic. Escribe, convierte, copia.",
    howItWorks:
      "Las versalitas usan las extensiones fonéticas de Unicode y las Small Form Variants: un set de mini mayúsculas que los tipógrafos usan en notación académica. Las letras sin forma de versalita — como la x minúscula — quedan igual, y por eso el estilo se lee natural.",
    coverageNote:
      "Las versalitas convierten la A–Z y la a–z. Dígitos y puntuación no cambian. Un detalle: la x minúscula no tiene forma de versalita en todo Unicode, así que sigue en minúscula.",
    bestFor: [
      "Bios minimalistas y nombres visibles aesthetic",
      "Títulos de sección y etiquetas en posts",
      "Un look premium y discreto para frases cortas",
    ],
    sampleInputs: ["aesthetic", "Capítulo uno", "modo"],
    platformTip:
      "Las versalitas están entre los caracteres con estilo más seguros — se ven en casi cualquier dispositivo y casi todo las acepta, incluida la mayoría de los juegos.",
    faq: [
      {
        q: "¿Por qué la x sigue igual?",
        a: "Unicode nunca definió una versalita X, así que no hay con qué cambiarla. Los generadores que sí la convierten usan otro carácter que puede no verse en todos los dispositivos.",
      },
      {
        q: "¿Versalitas es lo mismo que minúsculas?",
        a: "No — son formas de mayúscula a tamaño reducido, con trazos distintos a las minúsculas. Copia una de cada y compara.",
      },
      {
        q: "¿Funcionan las versalitas en juegos?",
        a: "Normalmente sí — es uno de los estilos más aceptados. Los juegos estrictos pueden rechazarlas igual, así que mira primero en la pantalla de cambio de nombre.",
      },
    ],
  },
  "strikethrough-text-generator": {
    navName: "Tachado",
    h1: "Generador de texto tachado",
    description:
      "Tacha texto con una línea, una barra o negrita tachada. Copia el resultado donde quieras que funcione el texto plano.",
    intro:
      "Tacha cualquier texto — para bromas, bajadas de precio, ironía y correcciones. Tres sabores de tachado, todos pegables en apps sin botón de formato.",
    howItWorks:
      "El tachado no cambia las letras — añade una marca combinable después de cada carácter. Tu texto original sigue intacto debajo, y por eso funciona igual con letras, números, emoji y hasta caracteres chinos.",
    coverageNote:
      "Como el estilo añade marcas en vez de reemplazar caracteres, funciona con cualquier entrada. El precio: algunos lectores de pantalla leen el texto de debajo con normalidad, y ciertas apps espacian las marcas de forma desigual.",
    bestFor: [
      "Correcciones graciosas y bromas con autoconciencia en bios y chats",
      "Precios tachados en posts de ofertas",
      "Ediciones y rectificaciones en grupos",
    ],
    sampleInputs: ["mala idea", "antes $99", "nada, olvídalo"],
    platformTip:
      "El tachado se ve en la mayoría de apps modernas. En Discord existe el markdown de texto (~~así~~) para mensajes — el tachado Unicode es para bios, apodos y todo lo que no acepta markdown.",
    faq: [
      {
        q: "¿Por qué mi texto tachado se ve desparejo?",
        a: "Cada app dibuja las marcas combinables con sus propias fuentes y algunas las alinean mal. Si la línea se ve rota, la negrita tachada suele alinearse mejor porque las letras son más anchas.",
      },
      {
        q: "¿Puedo tachar emoji?",
        a: "Sí — la marca se añade después del emoji y la línea lo cruza. El resultado varía un poco por plataforma porque cada una dibuja los emoji a su manera.",
      },
      {
        q: "¿El texto original sigue ahí debajo?",
        a: "Sí. El tachado es puramente visual — los caracteres no cambian, así que copiar, buscar y los lectores de pantalla siguen viendo el texto base.",
      },
    ],
  },
  "glitch-text-generator": {
    navName: "Glitch",
    h1: "Generador de letras glitch (zalgo)",
    description:
      "Corrompe tu texto con marcas malditas — tres intensidades de glitch, de sutil a zalgo total. Copia en un toque.",
    intro:
      "Llena tu texto de marcas reptaestilos. Elige el nivel de corrupción — de apenas raro a zalgo total — y pega el caos donde quieras.",
    howItWorks:
      "El texto zalgo apila marcas combinables de Unicode encima y debajo de cada carácter. Este generador elige las marcas con un proceso determinista y sembrado — la misma entrada produce siempre el mismo glitch, así que la vista previa es exactamente lo que copias.",
    coverageNote:
      "El glitch funciona con cualquier carácter — letras, números, emoji — porque no reemplaza nada. Las intensidades altas apilan muchas marcas por letra, y de ahí viene el look de película de terror.",
    bestFor: [
      "Nombres malditos y perfiles de terror",
      "Memes y caos en grupos de chat",
      "Bios de temporada de sustos y Halloween",
    ],
    sampleInputs: ["ayuda", "no mires", "hola"],
    platformTip:
      "El glitch es el estilo más exigente que puedes pegar. Algunas apps limitan la cantidad de marcas, las recortan o las dibujan en línea recta — prueba siempre antes de cambiar algo importante.",
    faq: [
      {
        q: "¿Qué es zalgo?",
        a: "Una leyenda de internet nacida de un cómic de 2004: texto corrompido con diacríticos apilados hasta parecer poseído. El nombre se quedó como el del estilo.",
      },
      {
        q: "¿Por qué mi glitch se ve suave en algunas apps?",
        a: "Las apps limitan o normalizan las marcas combinables para que el texto se pueda dibujar. Nada está roto — la app está protegiendo su diseño.",
      },
      {
        q: "¿El texto glitch es malo para lectores de pantalla?",
        a: "Sí — las marcas apiladas se leen como decenas de diacríticos o se saltan. Resérvalo para nombres y bromas, nunca para información importante.",
      },
    ],
  },
  "upside-down-text-generator": {
    navName: "Al revés",
    h1: "Generador de letras al revés",
    description:
      "Voltea tu texto con letras Unicode invertidas y puntuación al revés. Escribe, mira el giro, copia y confunde a todos.",
    intro:
      "Voltéalo. Este generador reescribe tu texto con letras boca abajo e invierte el orden, para que la línea completa se lea girada 180°.",
    howItWorks:
      "Cada carácter se cambia por un similar rotado — la a se vuelve ɐ, la b se vuelve q — y el resultado se invierte para que la última letra quede primero. La puntuación también gira: el signo de exclamación se vuelve ¡ y el de pregunta ¿.",
    coverageNote:
      "Letras y dígitos se convierten bien; algunas mayúsculas raras como la K y la Q no tienen buena forma rotada y quedan igual. Todo lo que el mapa no pueda voltear — incluidos los emoji — pasa sin cambios.",
    bestFor: [
      "Adivinanzas en la bio y captions de 'lee si puedes'",
      "Bromas en respuestas de grupos",
      "Nombres que obligan a ladear la cabeza",
    ],
    sampleInputs: ["hola", "gírame", "wow"],
    platformTip:
      "El texto volteado funciona bien en bios y mensajes. Ojo: los lectores de pantalla leerán el texto invertido literalmente — mantenlo corto y juguetón.",
    faq: [
      {
        q: "¿Realmente rota, o sustituye letras?",
        a: "Sustituye: Unicode tiene formas invertidas dedicadas como ɐ y ǝ. Esa sustitución es la razón por la que el texto sobrevive al copiar y pegar.",
      },
      {
        q: "¿Por qué mi texto sale al revés?",
        a: "El texto rotado se lee visualmente de derecha a izquierda, así que invertir el orden hace que se lea bien cuando la página está boca abajo.",
      },
      {
        q: "¿Puedo voltear emoji?",
        a: "No — los emoji no tienen formas rotadas, así que pasan sin cambios y quedan derecho.",
      },
    ],
  },
  "tiny-text-generator": {
    navName: "Pequeñas",
    h1: "Generador de letras pequeñas",
    description:
      "Encoge tu texto con superíndices y subíndices Unicode. Dos estilos tiny, vista previa al instante y copia donde quieras.",
    intro:
      "Encoge tus palabras a tamaño susurro. El superíndice flota tu texto sobre la línea; el subíndice lo hunde debajo. Ambos se copian como texto plano.",
    howItWorks:
      "El texto tiny usa letras modificadoras en superíndice y subíndice de Unicode — los mismos caracteres con los que se arman notas al pie y fórmulas químicas. Cada uno es un similar compacto a una fracción del tamaño normal.",
    coverageNote:
      "Es el estilo más parcial del sitio: los superíndices minúsculos cubren casi todas las letras menos la q, y los subíndices se saltan b, c, d, f, g, q, w, y y z. Lo que no tenga forma tiny — incluida la mayoría de mayúsculas — queda normal, así que los resultados mixtos son lo normal.",
    bestFor: [
      "Notas al pie en bios ('ella/ella', créditos mini)",
      "Química y mates al revés en cuentas de estudio",
      "Comentarios discretos al lado de texto más llamativo",
    ],
    sampleInputs: ["susurro", "H2O", "nota:"],
    platformTip:
      "El texto tiny se ve bien en bios y mensajes, pero los huecos donde falta una letra pueden notarse. Si te molesta, las versalitas dan una sensación similar con cobertura completa.",
    faq: [
      {
        q: "¿Por qué unas letras son grandes y otras pequeñas?",
        a: "Unicode no tiene forma de superíndice o subíndice para todas las letras. Las que faltan quedan en tamaño normal — es el precio conocido del estilo.",
      },
      {
        q: "¿Puedo escribir números tiny?",
        a: "Sí — los dígitos en superíndice y subíndice están completos, del ⁰ al ⁹ y del ₀ al ₉. Por eso el H₂O sale perfecto.",
      },
      {
        q: "¿Se lee bien el texto tiny?",
        a: "En tamaño de bio, casi. Es ideal para una o dos palabras, no para frases — y nunca para información que deba ser accesible.",
      },
    ],
  },
  "aesthetic-text-generator": {
    navName: "Aesthetic",
    h1: "Generador de letras aesthetic",
    description:
      "Convierte tu texto en letras anchas vaporwave — espaciado ａｅｓｔｈｅｔｉｃ para bios, captions y perfiles lo-fi. Copia en un toque.",
    intro:
      "ａｅｓｔｈｅｔｉｃ. Este generador ensancha cada letra a su forma full-width — el ritmo lento y espaciado del vaporwave que definió toda una estética.",
    howItWorks:
      "Los caracteres full-width vienen de codificaciones antiguas donde el texto CJK y el latino compartían cuadrículas de ancho fijo, así que las letras latinas tenían su propia caja ancha. Los espacios también se ensanchan — cada uno se vuelve un espacio ideográfico completo — y de ahí sale el ritmo flotante.",
    coverageNote:
      "El estilo full-width cubre letras, dígitos y espacios, así que frases completas se convierten limpias. La puntuación queda en su forma normal, y los emoji y otros alfabetos no se afectan.",
    bestFor: [
      "Perfiles vaporwave, lo-fi y retro",
      "Bios de una palabra, lentas y espaciadas",
      "Posts con onda retro-tech y años 80/90",
    ],
    sampleInputs: ["aesthetic", "v a p o r", "sueño 1997"],
    platformTip:
      "El texto full-width se dibuja donde se dibuja el texto CJK — o sea, en casi todo. Eso sí: es ancho, revisa que las frases largas quepan en tu bio sin saltos raros.",
    faq: [
      {
        q: "¿Por qué se llama texto vaporwave?",
        a: "El estilo se volvió la firma visual de la cultura musical vaporwave — letras anchas, espaciado lento, vibra retrofuturista. El nombre técnico es texto full-width.",
      },
      {
        q: "¿El espaciado ancho también se copia?",
        a: "Sí — el espacio ancho es un carácter real (el espacio ideográfico), así que el ritmo aireado sobrevive al pegar. También significa que el texto ocupa más sitio en los límites de caracteres.",
      },
      {
        q: "¿Cuenta como más caracteres en mi bio?",
        a: "Cada carácter full-width cuenta como uno, igual que una letra normal — pero los espacios anchos también cuentan, así que una frase usa más de tu límite.",
      },
    ],
  },
};
