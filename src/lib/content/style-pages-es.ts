// Spanish copy for the dedicated style generator pages.

import { coquetteCopyExamples } from "../coquette-examples";
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
      "Los dos estilos cursivos convierten la A–Z y la a–z. Unicode no tiene dígitos cursivos, así que los números quedan igual, y las letras con tilde, los emoji y otros alfabetos se mantienen sin cambios. La cursiva negrita es un alfabeto continuo. La cursiva fina no tiene forma matemática propia para e, g y o, así que esas tres letras usan otro trazo (ℯ ℊ ℴ).",
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
      "Generador de letras Fraktur y Old English, la gótica blackletter. Dos grosores, vista previa en vivo y copia en un toque para nombres, bios y clanes.",
    intro:
      "Escribe lo que quieras y conviértelo en Fraktur, la blackletter Old English de los logos de metal, los tags de clan y las bios oscuras. Dos grosores, copia en un clic.",
    howItWorks:
      "El texto gótico usa los rangos Unicode Mathematical Fraktur. El fraktur, que mucha gente llama Old English, es un estilo alemán histórico, y Unicode incluye un alfabeto completo similar — con formas especiales para C, H, I, R y Z.",
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
        q: "¿Fraktur, Old English o medieval es otro generador distinto del gótico?",
        a: "No. Esta página cubre todos estos nombres. Fraktur, Old English, medieval y blackletter describen el mismo alfabeto gótico, y «gótica» es como se busca ese texto. No hay un archivo de fuente aparte.",
      },
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
  "cute-font-generator": {
    navName: "Tierna",
    h1: "Generador de letras tiernas",
    description:
      "Letras tiernas para copiar y pegar: burbujas redondas con un corazón, un lazo o una flor. Gratis, en el navegador, sin instalar nada.",
    intro:
      "Escribe un nombre y obtén letras burbuja con un corazón, el lazo ୨୧ o una flor. También lo llaman kawaii o soft. Debajo hay una línea cursiva por si la quieres más quieta. El script con cinta está en la página coquette. Son caracteres que pegas, no un archivo de fuente.",
    howItWorks:
      "Las letras burbuja y las circuladas son alfanuméricos encerrados. La línea que fluye es Mathematical Script. Corazones, lazos (୨୧), flores y corchetes suaves son símbolos aparte, y solo la fila burbuja los lleva — un par cada vez, para que el nombre se lea.",
    coverageNote:
      "Burbuja y circuladas convierten A–Z, a–z y dígitos. La cursiva solo convierte letras, así que los números de esa fila quedan igual. Las tildes, los emoji y otros alfabetos pasan sin cambios. Los adornos son caracteres extra alrededor de la palabra.",
    bestFor: [
      "Nombres visibles y bios que deban sentirse suaves",
      "Un nombre corto con un solo corazón o un solo lazo",
      "Captions, no frases enteras",
    ],
    sampleInputs: ["Momo", "Suave", "Melocotón"],
    platformTip:
      "Estas letras funcionan en la mayoría de nombres visibles y bios de Instagram, TikTok y Discord. Los usuarios que solo aceptan letras planas las rechazan. Si un lazo o un corchete sale como un cuadro vacío, copia la fila del corazón.",
    faq: [
      {
        q: "¿La letra tierna es un archivo que descargo?",
        a: "No. El resultado son caracteres Unicode, y por eso se pega en apps que solo aceptan texto plano. Este sitio no ofrece archivos de fuente.",
      },
      {
        q: "¿Coquette o kawaii es otro generador?",
        a: "Kawaii se queda aquí: letras burbuja con un corazón, el lazo ୨୧ o una flor. Coquette es la otra página, letras script con un lazo de cinta.",
      },
      {
        q: "¿Puedo usarlo como usuario de Instagram?",
        a: "No. El usuario de Instagram solo acepta letras, números, puntos y guiones bajos. Pega el nombre tierno en tu nombre visible o en la bio.",
      },
    ],
  },
  "cool-font-generator": {
    navName: "Cool",
    h1: "Generador de letras cool",
    description:
      "Nombres cool para copiar y pegar: letras gruesas con un rayo, estrellas o un ala de clan. Gratis, y se queda en tu navegador.",
    intro:
      "Letras gruesas, y después un rayo, una marca de estrella o las alas de clan ꧁༒. También lo buscan como texto stylish o tag de clan. Aquí se arma un nombre decorado. La lista completa de cada alfabeto, sin símbolos, está en Letras bonitas.",
    howItWorks:
      "Las letras pesadas son Unicode Mathematical Bold. Las versalitas son la segunda fila, más quieta y sin adorno, para compararlas con la línea gruesa decorada. Estrellas, rayos y alas son símbolos que envuelven solo la fila gruesa.",
    coverageNote:
      "La negrita convierte letras y dígitos. Las versalitas convierten la mayoría de las letras y dejan unas pocas iguales cuando Unicode no tiene forma versalita. Los adornos cuentan en el límite de caracteres del nombre.",
    bestFor: [
      "Nombres de Discord y tags de juego",
      "Un nombre de clan con un solo par de alas",
      "Una palabra que deba pesar más que la cursiva",
    ],
    sampleInputs: ["Nova", "As", "Clan"],
    platformTip:
      "La negrita Unicode suele sobrevivir en Discord y en bios. Los juegos que solo aceptan ASCII plano la van a quitar. Las alas fallan primero en teléfonos viejos — si desaparecen, copia la fila del rayo.",
    faq: [
      {
        q: "¿Es lo mismo que la página de letras bonitas?",
        a: "No. Letras bonitas lista cada alfabeto y no añade adornos. Esta página solo arma el look cool: negrita más rayo, estrellas o alas de clan.",
      },
      {
        q: "¿Qué significa texto stylish aquí?",
        a: "Los mismos nombres gruesos decorados. Stylish, en esta página, son las filas del rayo, la estrella y las alas — no otro alfabeto.",
      },
      {
        q: "¿Un tag de clan cabe en un usuario de juego?",
        a: "Muchas veces el símbolo es lo que rechazan. Si las alas desaparecen en la vista previa del juego, usa la fila de negrita sin adorno.",
      },
      {
        q: "¿Las letras cool y las cool fonts son lo mismo?",
        a: "Sí: letras cool, cool fonts y texto cool describen lo mismo — letras Unicode en negrita o versalitas con estrellas, alas o corchetes. Escribe arriba, elige un look y cópialo.",
      },
    ],
  },
  "dark-font-generator": {
    navName: "Oscura",
    h1: "Generador de letras oscuras",
    description:
      "Nombres oscuros para copiar y pegar: letra gótica con una calavera, una daga o una luna. Para bios y nombres visibles, no para descargar una fuente.",
    intro:
      "Letra gótica con un símbolo oscuro — una calavera, una daga o una luna. La letra emo es esta mezcla. La página gótica es el alfabeto pelado, sin calaveras. Esta es la versión decorada.",
    howItWorks:
      "Las letras son Unicode Fraktur. El corte grueso va decorado; el corte normal queda pelado debajo. Calaveras, dagas y lunas son símbolos aparte, solo en la fila gruesa.",
    coverageNote:
      "Los dos estilos fraktur convierten solo A–Z y a–z. Los dígitos se quedan como los escribiste. La calavera es un símbolo y puede verse distinta en cada teléfono. Las tildes y otros alfabetos pasan sin cambios.",
    bestFor: [
      "Bios oscuras y nombres de Discord",
      "Nombres emo o de una sola palabra",
      "Líneas de Halloween que igual hay que copiar como texto",
    ],
    sampleInputs: ["Noche", "Emo", "Cuervo"],
    platformTip:
      "El fraktur funciona en muchas bios y falla en juegos que exigen ASCII plano. Si la calavera sale como un cuadro vacío, copia la fila de la daga o de la luna.",
    faq: [
      {
        q: "¿El texto emo es distinto del gótico?",
        a: "Gótico, en este sitio, es el alfabeto blackletter pelado. Emo es ese alfabeto más una calavera, una daga o una luna — o sea, esta página.",
      },
      {
        q: "¿Puedo descargar una fuente oscura?",
        a: "No. Copias caracteres. Un archivo de fuente habría que instalarlo, y aquí no se instala nada.",
      },
      {
        q: "¿Por qué algunas letras se ven distintas?",
        a: "El fraktur conserva formas históricas para C, H, I, R y Z. Esa forma es el alfabeto, no un fallo.",
      },
    ],
  },
  "elegant-font-generator": {
    navName: "Elegante",
    h1: "Generador de letras elegantes",
    description:
      "Cursiva elegante para copiar y pegar, con una corona, una flor de lis o un corazón floral. Para nombres, captions y bios.",
    intro:
      "Cursiva gruesa, y después una corona, una flor de lis o un corazón floral. Los nombres royal y de princesa son este mismo look: letras que fluyen y un símbolo formal, no burbujas redondas.",
    howItWorks:
      "Las letras son Unicode Bold Script, con la cursiva fina como segunda fila pelada. Coronas, flores de lis y corazones florales envuelven solo la cursiva gruesa, así el adorno queda en un par por resultado.",
    coverageNote:
      "Los dos estilos de cursiva convierten solo letras. Dígitos, tildes y emoji se quedan como los escribiste. Cada corona o flor de lis es un carácter extra a ese lado del nombre.",
    bestFor: [
      "Nombres de boda, belleza y perfiles formales",
      "Un nombre royal o de princesa en la bio",
      "Captions cortos que deban verse arreglados",
    ],
    sampleInputs: ["Rosa", "Reina", "Ada"],
    platformTip:
      "La cursiva funciona en la mayoría de nombres visibles y bios de Instagram, TikTok y Discord, no en usuarios limitados a letras planas. Si la cursiva gruesa sale en cuadros, copia la fila fina.",
    faq: [
      {
        q: "¿Elegante es lo mismo que cursiva?",
        a: "La cursiva es el alfabeto script pelado. Elegante lleva la cursiva más gruesa y añade un símbolo formal: corona, flor de lis o corazón floral.",
      },
      {
        q: "¿Dónde están las fuentes royal y de princesa?",
        a: "En esta página. Un nombre de princesa o royal aquí es cursiva más una corona o una flor de lis, no una descarga aparte.",
      },
      {
        q: "¿Esto es un archivo de caligrafía?",
        a: "No. Copias caracteres. Los archivos de caligrafía se instalan, y este sitio no los ofrece.",
      },
      {
        q: "¿Esto es lo que llaman una fuente de lujo?",
        a: "Casi siempre sí. Quien busca fuente de lujo quiere ese mismo look formal: script con coronas, adornos y espaciado fino. Como todo en esta página, es texto Unicode y no un archivo de fuente, así que puedes pegarlo en bios y perfiles.",
      },
    ],
  },
  "aesthetic-text-generator": {
    navName: "Aesthetic",
    h1: "Generador de letras aesthetic",
    description:
      "Letras anchas vaporwave con un destello o una niebla de puntos a cada lado, y versalitas si la quieres más quieta. Copiar y pegar, sin archivo de fuente.",
    intro:
      "Letras anchas full-width — el look vaporwave — con una niebla de puntos o un destello a cada lado. Las versalitas son la segunda fila cuando las letras anchas se sienten demasiado fuertes.",
    howItWorks:
      "Los caracteres full-width vienen de codificaciones antiguas donde el texto CJK y el latino compartían cuadrículas de ancho fijo, así que las letras latinas tenían su propia caja ancha. Los espacios también se ensanchan, y de ahí sale el ritmo lento. La niebla de puntos y el destello son símbolos que envuelven solo esa línea ancha. No forman parte del alfabeto full-width.",
    coverageNote:
      "El full-width cubre letras, dígitos y espacios. Las versalitas cubren la mayoría de las letras y dejan unas pocas iguales. La puntuación queda normal. Los adornos añaden caracteres y hacen la línea todavía más ancha.",
    bestFor: [
      "Perfiles vaporwave, lo-fi y retro",
      "Una bio de una palabra ancha con un poco de destello",
      "Posts retro-tech y de los años 80/90",
    ],
    sampleInputs: ["aesthetic", "v a p o r", "sueño 1997"],
    platformTip:
      "El texto full-width se dibuja donde se dibuja el texto CJK, o sea en casi todo. Es ancho, y el destello lo hace más ancho — revisa que la línea quepa en tu bio. Si un destello falla, la fila ancha pelada igual se copia.",
    faq: [
      {
        q: "¿Por qué se llama texto vaporwave?",
        a: "Las letras anchas y el espaciado lento se volvieron la firma visual del vaporwave. El nombre técnico de las letras es texto full-width. El destello es un símbolo aparte a cada lado.",
      },
      {
        q: "¿El espaciado ancho también se copia?",
        a: "Sí. El espacio ancho es un carácter real, el espacio ideográfico, así que el ritmo aireado sobrevive al pegar. También usa más del límite de caracteres.",
      },
      {
        q: "¿Los adornos cuentan en mi bio?",
        a: "Sí. Cada letra full-width cuenta como una, y cada destello o punto también. Una palabra corta es el largo cómodo.",
      },
    ],
  },
  "coquette-font-generator": {
    navName: "Coquette",
    h1: "Letras coquette para copiar y pegar",
    title: "Letras coquette para copiar y pegar — lazo en bios",
    description:
      "Letras coquette gratis con lazo. Copia y pega script para el nombre de Instagram o el apodo de Discord. Vista previa en el móvil. No es un archivo de fuente.",
    intro:
      "Letras coquette para copiar y pegar: script y un solo lazo. Las filas son un lazo pequeño, un par de cintas y el emoji de cinta. Lo tierno de este sitio son las letras burbuja, y la página elegante lleva corona. Esta página se queda en el lazo.",
    examplesHeading: "Letras coquette para copiar",
    examplesHint: "Ya llevan el lazo. Toca una y se copia entera.",
    copyExamples: coquetteCopyExamples,
    howItWorks:
      "El lazo envuelve el script grueso, Unicode Bold Script, porque esa letra tiene e, g y o de verdad. El script fino queda debajo, sin lazo, y en esa fila e, g y o son sustitutos, así que un nombre como Belle va en la fila gruesa. Los lazos y la cinta son símbolos aparte, solo en la fila gruesa.",
    coverageNote:
      "El script convierte A–Z y a–z. Los dígitos se quedan como los escribiste. El lazo pequeño es un carácter raro y puede salir como un cuadro vacío. Si pasa, copia la fila del emoji de cinta. Los adornos cuentan en el límite del nombre.",
    bestFor: [
      "Nombres visibles y bios de Instagram",
      "Apodos y estados cortos de Discord",
      "Un nombre de una palabra con un solo lazo",
    ],
    sampleInputs: ["Mia", "Lila", "Belle"],
    platformTip:
      "Pégalo en el nombre visible de Instagram o en el apodo de Discord. Esos usuarios solo aceptan letras planas, dígitos y unas pocas marcas, así que el lazo no va en el usuario. El nombre visible ronda los 30 caracteres en Instagram y el apodo los 32 en Discord. Si el lazo pequeño falla, el emoji de cinta igual se copia.",
    faq: [
      {
        q: "¿Dónde encuentro letras coquette para copiar y pegar?",
        a: "En la fila de arriba, cada ejemplo ya trae el lazo. Tócalo y se copia. Si quieres tu propio nombre, escríbelo en el generador y copia la fila del emoji 🎀 cuando el lazo pequeño salga como un cuadro.",
      },
      {
        q: "¿Qué es una letra coquette?",
        a: "Es script con un lazo de cinta. No es la página tierna, que usa letras burbuja, ni la elegante, que usa corona. Aquí copias caracteres, no un archivo de fuente.",
      },
      {
        q: "¿El generador de letras coquette descarga una fuente?",
        a: "No. No hay archivo para instalar. El resultado se pega en apps que aceptan texto plano, como el nombre visible de Instagram o el apodo de Discord.",
      },
      {
        q: "¿Puedo pegar fuentes coquette en mi usuario de Instagram?",
        a: "No. El usuario se queda en letras planas, dígitos, puntos y guiones bajos. El nombre visible y la bio sí se pueden probar. El conjunto de caracteres lo decide la app; esta página no publica una lista completa.",
      },
    ],
  },
  "preppy-font-generator": {
    navName: "Preppy",
    h1: "Generador de letras preppy",
    title: "Letras preppy — Generador para copiar y pegar | FancyFont",
    description:
      "Las letras preppy son versalitas Unicode limpias con un corazón ordenado. Genera, copia y pega en tu bio, nombre de TikTok o Adopt Me — gratis, sin registro.",
    intro:
      "Las letras preppy son versalitas limpias con un corazón ordenado: blanco, de palo o girado. Sin lazos y sin letras burbuja — ese look más ruidoso está en la otra página. Este se mantiene ordenado, que es lo que suelen buscar los nombres preppy de Adopt Me.",
    howItWorks:
      "Las versalitas son letras modificadoras de Unicode que parecen mayúsculas más bajas. El script es la segunda fila, sin adorno. Cada corazón es un símbolo solo en la fila de versalitas, un par o un lado, para que el nombre siga corto.",
    coverageNote:
      "Las versalitas cubren la mayoría de las letras y dejan unas pocas iguales cuando Unicode no tiene forma. El script solo convierte letras, así que los dígitos de esa fila quedan normales. Los corazones son caracteres extra. El corazón blanco es un emoji y suele ser el primero que rechaza el filtro de un juego.",
    bestFor: [
      "Nombres visibles cortos de Adopt Me",
      "Un nombre limpio con un solo corazón",
      "Bios que deban verse ordenadas, no redondas",
    ],
    sampleInputs: ["Mila", "Blair", "Tess"],
    platformTip:
      "Adopt Me muestra tu nombre visible de Roblox, normalmente unos 20 caracteres, y el usuario no admite fuentes. Un nombre corto en versalitas con un corazón cabe en ese cuadro más a menudo que un lazo a cada lado. Pégalo en la pantalla de nombre de Roblox antes de confirmar el cambio.",
    faq: [
      {
        q: "¿Preppy es lo mismo que coquette?",
        a: "No. Coquette es script con un lazo de cinta. Preppy son versalitas con un corazón limpio.",
      },
      {
        q: "¿Esto sirve como usuario de Adopt Me?",
        a: "El usuario de Roblox se queda en letras, dígitos y un guion bajo. Prueba el nombre con estilo como nombre visible, y solo después de que la vista previa del juego lo acepte.",
      },
      {
        q: "¿Por qué los corazones son tan simples?",
        a: "Una pila de lazos se come los 20 caracteres del nombre visible y el filtro la corta más a menudo. Un corazón es la marca preppy y todavía deja sitio para el nombre.",
      },
      {
        q: "¿Cómo se llaman las letras preppy?",
        a: "No hay una sola letra preppy. Lo que las redes llaman preppy suelen ser versalitas —mayúsculas más bajas— con un corazón o lazo limpio al lado. Todo es texto Unicode, no una fuente instalada; por eso sobrevive al copiar y pegar.",
      },
      {
        q: "¿Cómo consigo letras preppy?",
        a: "Escribe tu nombre arriba, elige una fila de estilo y un corazón, y copia. Pégalo en tu bio de Instagram, nombre de TikTok o perfil de Adopt Me, y revisa la vista previa de la plataforma antes de guardar.",
      },
    ],
  },
  "heart-font-generator": {
    navName: "Corazón",
    h1: "Generador de letras con corazón",
    description:
      "Texto con corazón para copiar y pegar: letras script y un corazón distinto en cada una de doce filas. Gratis en el navegador, sin instalar nada.",
    intro:
      "Letras script y un par de corazones por fila: doce corazones, y ninguna fila repite el símbolo. Un corazón sobre letras burbuja se queda en la página tierna. Un corazón limpio sobre versalitas se queda en la página preppy. Copias caracteres. No es un archivo de fuente ni un dibujo de letras.",
    howItWorks:
      "Las filas con corazón envuelven el script grueso de Unicode, el alfabeto que tiene e, g y o de verdad. El script fino queda debajo, sin corazón, y en esa fila e, g y o son sustitutos, así que un nombre como Love o Belle se queda en una fila con corazón. La burbuja es la tercera fila y va sin adorno, para no repetir la página tierna. Cada corazón es un símbolo aparte, solo en la fila gruesa.",
    coverageNote:
      "El script y el script grueso convierten A–Z y a–z. Los dígitos se quedan como los escribiste. La burbuja convierte letras y dígitos. Las tildes, los emoji y otros alfabetos pasan sin cambios. Los corazones son caracteres extra y cuentan en el límite del nombre. Los corazones más pequeños son raros y pueden salir como un cuadro vacío: si uno falla, copia la fila del corazón rojo o la del destello.",
    bestFor: [
      "Nombres visibles y bios de Instagram y TikTok",
      "Un nombre de una palabra o un texto corto",
      "Apodos de Discord en los que basta un corazón a cada lado",
    ],
    sampleInputs: ["Love", "Mia", "Honey"],
    platformTip:
      "Pega el nombre con corazón en el nombre visible o la bio de Instagram, en la bio de TikTok o en el apodo de Discord. Los usuarios que solo aceptan letras planas rechazan los corazones. El nombre visible ronda los 30 caracteres en Instagram y el apodo los 32 en Discord, así que un corazón a cada lado de una palabra corta cabe más a menudo que una pila de símbolos.",
    faq: [
      {
        q: "¿La fuente de corazón es un archivo que descargo?",
        a: "No. El resultado son caracteres Unicode, por eso se pega en apps que solo aceptan texto plano. Este sitio no ofrece archivos de fuente y no dibuja las letras en una imagen.",
      },
      {
        q: "¿En qué se diferencia de las páginas tierna y preppy?",
        a: "Lo tierno son letras burbuja con un corazón, un lazo o una flor. Preppy son versalitas con un corazón limpio. Esta página es script con doce pares de corazón distintos, y esos corazones no se usan en las otras páginas.",
      },
      {
        q: "¿Puedo usar un nombre con corazón como usuario de Instagram?",
        a: "No. El usuario de Instagram solo admite letras, dígitos, puntos y guiones bajos. Pega el nombre con corazón en el nombre visible o en la bio.",
      },
    ],
  },
  "chicano-font-generator": {
    navName: "Chicana",
    h1: "Generador de letra chicana",
    description:
      "Texto de estilo chicano para copiar y pegar: gótica con un adorno por fila, más una línea script. Gratis en el navegador. No es un archivo de fuente ni un esténcil de tatuaje.",
    intro:
      "Gótica clásica y un adorno por fila: doce marcas, y ninguna es la calavera o la luna de la página oscura. La gótica sin adorno está en la página gothic. Copias caracteres. Esto no es lettering chicano dibujado a mano, ni un esténcil.",
    howItWorks:
      "Las filas con adorno envuelven el Fraktur de Unicode, la letra gótica que mucha gente llama Old English. La gótica gruesa queda debajo, sin adorno, para que el trazo pesado se lea en tamaños chicos. El script grueso es la tercera fila y va sin adorno: ocupa el lugar de la mitad cursiva del estilo, y las letras no van unidas. Cada adorno es un símbolo aparte, solo en la fila gótica clásica.",
    coverageNote:
      "Las dos góticas convierten solo A–Z y a–z. Los dígitos, las letras con tilde como á, é y ñ, y los emoji se quedan como los escribiste, porque Unicode no tiene forma gótica para ellos. El script grueso solo convierte letras. Los adornos son caracteres extra y cuentan en el límite del nombre. Un adorno raro puede salir como un cuadro vacío: si pasa, copia la fila de la cruz o la gótica pelada.",
    bestFor: [
      "Un nombre corto o un lema de una palabra en la bio",
      "Comparar gótica y script antes de encargárselo a un letrista",
      "Un nombre visible que quiera gótica sin las calaveras de la página oscura",
    ],
    sampleInputs: ["Rosa", "Luz", "Vida"],
    platformTip:
      "Pégalo en un nombre visible o en la bio y revísalo en esa app. Los juegos que solo aceptan letras planas rechazan la gótica. Estos caracteres no son un esténcil de tatuaje: los trazos son glifos de texto, no un dibujo a medida de la piel.",
    faq: [
      {
        q: "¿Esto es una fuente chicana que descargo?",
        a: "No. Copias caracteres Unicode. Este sitio no ofrece un archivo de fuente y no carga las góticas o scripts de pago que usan los generadores de imagen.",
      },
      {
        q: "¿Es lettering chicano tradicional?",
        a: "No. El lettering chicano es gótica y script dibujados a mano, del trabajo gráfico mexicoamericano: murales, autos y tatuajes. Estas filas solo se acercan al look gótico, más un alfabeto script. No son un esténcil ni sustituyen a un artista.",
      },
      {
        q: "¿Por qué la ñ y las tildes se quedan planas?",
        a: "El fraktur de Unicode no tiene forma para ellas, así que pasan igual y el resto de las letras sí se convierte.",
      },
    ],
  },

  "crazy-font-generator": {
    navName: "Loca",
    h1: "Generador de letras locas",
    description:
      "Mezcla estilos Unicode letra a letra y vuelve a mezclar hasta lograr el efecto más dispar. Copia letras locas para bios, nombres de juego y chats — gratis y sin registro.",
    intro:
      "Un solo estilo nunca es suficiente locura. Este generador mezcla varios alfabetos Unicode dentro de una misma palabra, envuelve el resultado en decoraciones y lo vuelve a mezclar hasta que quede dispar. Mismo texto, locura distinta.",
    howItWorks:
      "En vez de convertir el texto entero con un alfabeto, el mezclador recorre tu texto letra por letra y sortea un estilo distinto para cada posición: script junto a fraktur junto a burbuja. El sorteo es determinista: el mismo texto, nivel y mezcla reconstruyen exactamente el mismo resultado, y cada nueva mezcla te da un set distinto.",
    coverageNote:
      "Los estilos del mezclador convierten A–Z y a–z (algunos también dígitos). Los caracteres sin equivalente con estilo — tildes, emoji, chino — pasan igual, así que un resultado puede mezclar a propósito letras con estilo y letras normales. La decoración suma al límite de caracteres del campo de destino.",
    bestFor: [
      "Nombres de juego y clanes que deben verse caóticos a propósito",
      "Perfiles que ya probaron los estilos cool y glitch y quieren algo más ruidoso",
      "Bromas, títulos de stream y apodos de chat con energía dispar",
    ],
    sampleInputs: ["Tu Nombre", "Cha0s", "Reina Glitch"],
    platformTip:
      "Las letras mezcladas son tan portables como los estilos que las forman: cada carácter es Unicode normal. Los juegos con campos solo ASCII rechazan la mayoría; las bios y los nombres visibles de las apps sociales son terreno más amable. Pega y previsualiza antes de guardar.",
    faq: [
      {
        q: "¿Qué son las letras locas?",
        a: "No son fuentes: cada resultado es texto normal donde cada letra se cambió por un carácter Unicode parecido de otro estilo. Por eso puedes copiarlas y pegarlas donde vaya texto plano.",
      },
      {
        q: "¿En qué se diferencia del generador glitch?",
        a: "El glitch (zalgo) apila marcas combinantes sobre letras normales. Las letras locas cambian las propias letras por caracteres de otros alfabetos, así que el resultado parece varios estilos peleándose por una palabra.",
      },
      {
        q: "¿Por qué el mismo texto sale igual?",
        a: "El sorteo lleva una semilla, no es aleatorio. El mismo texto, nivel y número de mezcla reconstruyen el mismo resultado; dale otra vez a mezclar y tendrás un set nuevo.",
      },
      {
        q: "¿Funcionan en el nombre de mi juego?",
        a: "Depende del juego. Muchos juegos móviles aceptan Unicode decorativo; los campos solo ASCII no. Copia una variante, pégala en el campo real y comprueba antes de guardar.",
      },
    ],
  },
};
