// Spanish copy for the 11 multilingual style pages.
// Hand-written, neutral Latin American Spanish; see style-pages-en.ts for the reference.
// decorated-nicknames is Chinese-only and does not appear here.

import type { Locale } from "../i18n";
import type { StylePageCopy } from "../style-pages";

export const stylePagesEs: Record<string, { [L in Locale]?: StylePageCopy }> = {
  "cursive-fonts": {
    es: {
      navName: "Cursiva",
      h1: "Generador de letras cursivas",
      title: "Generador de letras cursivas — script, negrita y adornos",
      description:
        "Letras cursivas bonitas: script claro, script en negrita y adornos con ♡ y ✧. Se dibujan en vivo al escribir y se copian con un toque, para bios y apodos.",
      intro: [
        "Escribe una palabra, un nombre o una frase corta aquí abajo y las versiones cursivas aparecen en todas las tarjetas en tiempo real. Toca para copiar: sin archivos de fuente, sin registro, sin límites.",
        "Estas «letras cursivas» no son fuentes: son caracteres Unicode del bloque de Símbolos Alfanuméricos Matemáticos que por casualidad parecen escritos a mano. Como son texto común, el estilo sobrevive a cualquier copiar y pegar en apodos, bios y firmas.",
      ],
      steps: [
        "Escribe tu nombre o tu frase favorita en el cuadro.",
        "Compara la cursiva ligera con la cursiva en negrita; las combinaciones con ♡ y ✧ agregan los adornos automáticamente.",
        "Toca copiar en la ganadora, o guarda algunas candidatas con la estrella y decide después.",
        "Pega en la app de destino y publica una prueba antes de quedarte con ella.",
      ],
      about: {
        heading: "Cómo funciona el texto cursivo",
        paragraphs: [
          "Las letras estilizadas vienen del bloque de Símbolos Alfanuméricos Matemáticos de Unicode, agregado en 2001 para componer fórmulas. Un generador solo hace eso: cambiar cada letra común por el carácter estilizado de la misma posición; el orden, el largo y las mayúsculas quedan idénticos.",
          "Como cada letra necesita su glifo correspondiente, la cursiva solo cubre de la A a la Z. El chino, el japonés y el árabe no tienen formas estilizadas en Unicode; por eso esos apodos se adornan con marcos de símbolos en su lugar.",
        ],
      },
      faq: [
        {
          q: "¿Dónde puedo pegar texto cursivo?",
          a: "En cualquier campo que acepte texto plano: nombres visibles, bios, firmas, apodos de chat, IDs de juegos. Los campos con validación estricta — @usuarios, cuentas de acceso — suelen rechazar los caracteres estilizados.",
        },
        {
          q: "¿Por qué algunas letras se ven como cuadros en otros dispositivos?",
          a: "A ese dispositivo le faltan los glifos en sus fuentes; pasa sobre todo en sistemas antiguos. Cambiar a la cursiva en negrita normalmente lo arregla. Guarda dos candidatas con estrella para tener un respaldo.",
        },
        {
          q: "¿El texto cursivo dificulta que me encuentren?",
          a: "Sí. Los caracteres estilizados no son letras comunes, así que buscar tu apodo tal cual puede fallar. Deja tu nombre real en caracteres normales en algún lado: la decoración es para lucir, no para buscar.",
        },
        {
          q: "¿El texto cursivo ocupa más caracteres en mi bio?",
          a: "No: cada letra común se cambia por exactamente una letra cursiva, así que el largo queda idéntico. Lo que cabía antes en el campo, sigue cabiendo.",
        },
        {
          q: "¿Los lectores de pantalla leen bien el texto cursivo?",
          a: "No del todo: muchos lo anuncian letra por letra como «script matemática». Deja la cursiva para nombres y acentos cortos, y escribe en texto plano lo que deba leerse en voz alta.",
        },
        {
          q: "¿El generador es gratis? ¿Necesito una cuenta o instalar una fuente?",
          a: "Gratis, sin registro y sin nada que instalar: las letras cursivas son caracteres Unicode, no archivos de fuente. El estilo viaja dentro del propio texto copiado.",
        },
      ],
    },
  },
  "bold-fonts": {
    es: {
      navName: "Negrita",
      h1: "Generador de texto en negrita",
      title: "Generador de texto en negrita — sans, cursiva e itálica",
      description:
        "Letras bonitas en negrita de verdad: clásica, sans, cursiva e itálica. Se ven en vivo al escribir y se copian con un toque, para bios y chats.",
      intro: [
        "La mayoría de las apps de chat no permiten poner en negrita una sola palabra; aquí los caracteres ya nacen en negrita, así que el énfasis sobrevive a cualquier pegado.",
        "Tienes cuatro grosores para elegir: negrita clásica, negrita sans limpia, negrita cursiva e itálica. Los dígitos también tienen su versión en negrita, así que fechas y números funcionan.",
      ],
      steps: [
        "Escribe la palabra, la frase o el número que quieres destacar.",
        "Compara los cuatro grosores: negrita para títulos, itálica para acentos.",
        "Copia y pega en un chat, una firma o un título.",
        "Si la app de destino lo dibuja raro, cambia a la negrita sans.",
      ],
      about: {
        heading: "Negrita a nivel de carácter",
        paragraphs: [
          "Esta negrita no es la del procesador de textos: no es una marca de formato, es un cambio al bloque Matemático en Negrita de Unicode. El grosor vive dentro del propio carácter, sin depender de ningún motor de diseño.",
          "El precio es la accesibilidad: los lectores de pantalla pueden anunciar 𝗕𝗼𝗹𝗱 como «B matemática sans bold…», un ruido molesto para usuarios con discapacidad visual. Úsala en frases cortas, nunca en párrafos.",
        ],
      },
      faq: [
        {
          q: "¿La negrita funciona en apps de chat como WhatsApp o Discord?",
          a: "Sí: la negrita es parte de los caracteres, así que las burbujas de chat la conservan sin necesidad de sintaxis de formato.",
        },
        {
          q: "¿Puedo mezclar negrita con chino o emojis?",
          a: "Sí. El chino y los emojis no tienen forma en negrita y pasan sin cambios mientras las partes latinas se ponen en negrita; el texto mixto funciona bien.",
        },
        {
          q: "¿Puedo usar caracteres en negrita en hashtags?",
          a: "Mejor no. Los hashtags coinciden con letras normales; un #Negrita estilizado no se indexa ni es clicable. Deja los hashtags en caracteres ordinarios.",
        },
        {
          q: "¿Los lectores de pantalla manejan bien los caracteres en negrita?",
          a: "Regular: pueden anunciar 𝗕 como «B matemática sans bold» en vez de solo B. Pon en negrita una o dos palabras como máximo, y deja en texto plano lo que deba leerse en voz alta.",
        },
        {
          q: "¿Por qué las letras en negrita se ven como cuadros en algunos celulares?",
          a: "A las fuentes del dispositivo que recibe le faltan los glifos del bloque matemático; es raro, pero pasa sobre todo en sistemas muy antiguos. Quien envía no puede arreglarlo: si ocurre, reenvía en texto plano.",
        },
        {
          q: "¿La negrita sobrevive al pegar en Word o Google Docs?",
          a: "Sí: la negrita vive en los propios caracteres, así que sobrevive a documentos, hojas de cálculo y correos. Incluso se mantiene en negrita donde el formato propio de la app se perdería.",
        },
      ],
    },
  },
  "gothic-fonts": {
    es: {
      navName: "Gótica",
      h1: "Generador de letras góticas",
      title: "Generador de letras góticas — blackletter Old English",
      description:
        "Letras góticas bonitas estilo Old English: dos grosores de fraktur, en vivo al escribir y copia con un toque, para nombres gamer y firmas oscuras.",
      intro: [
        "La gótica (fraktur o blackletter) es la letra de las cabeceras de periódicos antiguos y de los logos de bandas de metal. Escribe una palabra y los dos grosores se dibujan en vivo; toca una tarjeta para copiar.",
        "Combínala con adornos de ☠ o ⚔ y tienes un apodo oscuro listo para usar. Solo letras latinas: los demás alfabetos pasan sin cambios.",
      ],
      steps: [
        "Escribe tu apodo, el nombre de tu banda o una frase corta.",
        "Compara los dos grosores: el de negrita se lee mejor en tamaños chicos.",
        "Copia, pega en el campo de nombre y publica una prueba para revisar cómo se ve.",
        "Si aparecen cuadros en dispositivos viejos, cambia al grosor en negrita o a la cursiva.",
      ],
      about: {
        heading: "Letra de periódico hecha Unicode",
        paragraphs: [
          "El bloque de Símbolos Alfanuméricos Matemáticos de Unicode incluye un fraktur de la A a la Z. Su legibilidad es baja de por sí, así que limítalo a dos o tres palabras: apodos y títulos, nunca frases completas.",
          "Algunas letras (C, H, I, R, Z) no tienen punto de código fraktur estándar, así que las ocupan los sustitutos decorativos de siempre: la misma convención que sigue cualquier generador.",
        ],
      },
      faq: [
        {
          q: "¿Puedo usar letras góticas en juegos?",
          a: "La mayoría de los juegos acepta apodos Unicode y el blackletter suele pasar. Los juegos con validación de lista blanca pueden rechazarlo: si ves un error de «caracteres no válidos», ahí solo quedan las letras normales.",
        },
        {
          q: "¿La gótica es lo mismo que Old English?",
          a: "Coloquialmente sí: «letra Old English» casi siempre se refiere al blackletter fraktur, no al idioma inglés antiguo de verdad.",
        },
        {
          q: "¿Por qué algunas letras se ven distintas?",
          a: "Unicode solo trae glifos fraktur para parte del alfabeto; C, H, I, R y Z usan sustitutos decorativos. Todos los generadores producen el mismo resultado.",
        },
        {
          q: "¿El texto gótico ocupa más caracteres?",
          a: "No: es un cambio de letra por letra, así que 𝔊𝔬𝔱𝔥𝔦𝔠 cuenta igual que «gothic». Los adornos como ☠ suman sus propios caracteres, uno cada uno.",
        },
        {
          q: "¿El blackletter es legible para los lectores de pantalla?",
          a: "No de forma natural: suelen anunciarlo como letras «fraktur» o «matemáticas». Deja la gótica para apodos y títulos; nunca la uses en una frase que alguien necesite escuchar.",
        },
        {
          q: "¿Puedo agregar ☠ o ⚔ a un nombre gótico?",
          a: "Sí: son símbolos Unicode ordinarios y combinan de forma natural con el blackletter. Ambos tienen muy buen soporte, aunque algunos dispositivos muy viejos pueden seguir mostrando cuadros.",
        },
      ],
    },
  },
  "small-fonts": {
    es: {
      navName: "Versalitas",
      h1: "Generador de texto pequeño",
      title: "Generador de letras pequeñas — versalitas, super y sub",
      description:
        "Texto pequeño bonito: versalitas, superíndice y subíndice se dibujan en vivo al escribir y se copian con un toque, discretos para bios y firmas.",
      intro: [
        "¿Necesitas una segunda línea discreta en tu bio? Las versalitas convierten las letras en mayúsculas en miniatura, el superíndice sube el texto y el subíndice lo baja. Vista previa en vivo, toca para copiar.",
        "Los tres estilos comparten una cualidad: no gritan. Una línea en versalitas dentro de una fila de estilos ruidosos crea jerarquía al instante.",
      ],
      steps: [
        "Escribe la frase que quieres encoger.",
        "Las versalitas van bien para líneas completas; superíndice y subíndice mejor para una o dos palabras.",
        "Copia y pega en tu bio, tu firma o una nota.",
        "Algunas mayúsculas no tienen glifo en versalitas y quedan tal cual: es normal.",
      ],
      about: {
        heading: "Los límites de hacer el texto pequeño",
        paragraphs: [
          "El juego de versalitas de Unicode no tiene X (y la Q usa una muy parecida), y a la tabla de superíndices le faltan varias mayúsculas. El motor es honesto: los caracteres sin forma estilizada quedan como se escribieron, sin fingir.",
          "«Pequeño» aquí significa caracteres distintos, no un cambio de tamaño de fuente: el interlineado y el espaciado siguen bajo control de la plataforma, y el texto se mantiene legible en pantallas chicas.",
        ],
      },
      faq: [
        {
          q: "¿Por qué algunas letras no cambiaron?",
          a: "Unicode no trae glifos en versalitas para todas las letras: la X no tiene ninguno. Todos los generadores tienen los mismos huecos.",
        },
        {
          q: "¿Para qué sirven los dígitos en superíndice?",
          a: "Insignias de año como ²⁰²⁶, notas al pie y bromas de fórmulas; también combinan bien con texto normal a modo de anotaciones.",
        },
        {
          q: "¿El texto pequeño es más difícil de leer?",
          a: "Las formas de letra son ordinarias; solo cambia el tamaño visual. Pero los lectores de pantalla pueden anunciar «superíndice» por cada carácter, así que evítalo para lo que deba leerse en voz alta.",
        },
        {
          q: "¿Las versalitas cuentan igual en mi bio?",
          a: "Sí: un carácter estilizado por cada letra ordinaria, así que el conteo no cambia. Las versalitas cambian el aspecto, no el largo.",
        },
        {
          q: "¿Por qué las letras en superíndice se ven como cuadros en dispositivos viejos?",
          a: "La tabla de superíndices es uno de los conjuntos más incompletos de Unicode, y a las fuentes viejas les falta buena parte. Si aparecen cuadros, pasa a versalitas: de los tres estilos es el de mejor cobertura.",
        },
        {
          q: "¿Puedo escribir toda mi bio en versalitas?",
          a: "Puedes: las versalitas van mejor para líneas completas que el superíndice o el subíndice. Pero una bio en un solo estilo uniforme pierde jerarquía; deja la línea principal normal y estiliza la segunda.",
        },
      ],
    },
  },
  "aesthetic-fonts": {
    es: {
      navName: "Estética",
      h1: "Generador de letras estéticas",
      title: "Generador de letras estéticas — texto fullwidth ＶＡＰＯＲＷＡＶＥ",
      description:
        "Letras estéticas bonitas: fullwidth ＶＡＰＯＲＷＡＶＥ con adornos ✧ y ｡ﾟ. Se ven en vivo al escribir y se copian con un toque, para bios y descripciones.",
      intro: [
        "ｖａｐｏｒｗａｖｅ — cambiar las letras comunes por formas fullwidth ensancha todo en un ritmo parejo y soñador. Agrega un marco de ✧ o ｡ﾟ y tienes el paquete vaporwave completo. Toca para copiar.",
        "Los caracteres fullwidth se diseñaron para la composición tipográfica CJK, y justo por eso el texto latino puesto en ellos tiene ese aire inconfundible de manual japonés.",
      ],
      steps: [
        "Escribe una palabra o frase corta: mientras más corta, mejor se lee.",
        "Quédate con el cuerpo fullwidth o súmale una combinación de adornos ✧・｡ﾟ.",
        "Copia y pega en tu bio, una descripción o el texto de un video.",
        "Las letras fullwidth son anchas: revisa el contador de caracteres de la plataforma.",
      ],
      about: {
        heading: "Por qué se llama estética",
        paragraphs: [
          "Las Formas Fullwidth son el alfabeto latino ensanchado de Unicode, creado por compatibilidad con terminales CJK antiguas. Cada carácter ocupa una celda ideográfica completa y le da al texto latino un espaciado aireado intencional: el ingrediente central del look vaporwave.",
          "Las combinaciones de adornos usan caracteres de la misma familia de ancho, así que el ritmo se mantiene parejo en vez de volverse ruidoso, como pasa con los emojis puestos al azar.",
        ],
      },
      faq: [
        {
          q: "¿Cuántos caracteres cuenta cada letra fullwidth?",
          a: "La mayoría de las plataformas cuenta uno por carácter; unas cuantas cuentan el ancho visible como 2. Mira el contador propio de la plataforma después de pegar.",
        },
        {
          q: "¿El fullwidth se mezcla bien con chino?",
          a: "Perfectamente: las letras fullwidth comparten el ancho exacto de los caracteres han, así que las bios mixtas mantienen un ritmo parejo. Es el mejor estilo latino para texto mixto con CJK.",
        },
        {
          q: "¿Por qué parece japonés?",
          a: "Las formas fullwidth pertenecen a la tradición tipográfica CJK, que el japonés usa mucho. Siguen siendo caracteres Unicode estándar, atados a ningún idioma.",
        },
        {
          q: "¿Los lectores de pantalla leen el texto fullwidth?",
          a: "Normalmente sí, pero despacio: muchos anuncian cada letra como carácter «fullwidth». Va bien como acento de una palabra en la bio; no para lo que deba leerse en voz alta.",
        },
        {
          q: "¿El texto fullwidth sigue funcionando en las búsquedas?",
          a: "No: buscar «vaporwave» no encuentra ｖａｐｏｒｗａｖｅ, porque los caracteres son puntos de código distintos. Usa el fullwidth para líneas decorativas y deja en letras ordinarias lo que deba poder encontrarse.",
        },
        {
          q: "¿Necesito descargar una fuente vaporwave?",
          a: "No: las letras fullwidth son caracteres Unicode estándar, no archivos de fuente. No hay nada que instalar ni cuenta que crear; el aspecto viaja con el texto copiado.",
        },
      ],
    },
  },
  "cute-fonts": {
    es: {
      navName: "Tierno",
      h1: "Generador de letras tiernas",
      title: "Generador de letras tiernas — corazones, moños y ♡",
      description:
        "Letras tiernas y bonitas: burbuja, cursiva y circulares con adornos ♡ ୨୧ ✿. Se ven en vivo al escribir y se copian con un toque, para nombres suaves.",
      intro: [
        "Letras burbuja, corazones, moños y corchetes suaves: todo el kit dulce en una sola página. Escribe un nombre y cada estilo y combinación se dibuja en vivo; toca para copiar.",
        "Las combinaciones decoradas envuelven el estilo ganador en un par de símbolos: ♡Dulce♡. Guarda varias variantes y cambia según tu estado de ánimo.",
      ],
      steps: [
        "Escribe un nombre o una frase corta y tierna.",
        "Elige la base: burbuja es la más redonda, cursiva la más suave.",
        "Súmale una combinación decorada: corazones y moños son los favoritos del público.",
        "Guarda algunas candidatas con estrella y prueba cómo se ven en la plataforma.",
      ],
      about: {
        heading: "La receta de lo tierno",
        paragraphs: [
          "Lo tierno sale de glifos redondos más adornos simétricos. Las letras burbuja y circulares aportan la redondez; corazones y flores a los dos lados agregan un ritmo suave.",
          "Los símbolos decorativos no compatan igual: ♡ y ✿ funcionan casi en todas partes, mientras que ୨୧ puede volverse cuadros en dispositivos viejos. Publica una prueba antes de decidir: cada tarjeta trae su nota de riesgo.",
        ],
      },
      faq: [
        {
          q: "¿Cómo hago nombres a juego para parejas o mejores amigas?",
          a: "Envuelve el mismo nombre en dos combinaciones distintas: una con ♡ y otra con ୨୧. Guarda ambas con estrella para pegarlas cuando quieras.",
        },
        {
          q: "¿Los adornos gastan caracteres extra?",
          a: "Las letras se cambian una por una; cada adorno agrega 1 o 2 símbolos por lado. Vigila el contador de longitud de la plataforma.",
        },
        {
          q: "El símbolo del moño se ve como un cuadro, ¿qué hago?",
          a: "Ese dispositivo no tiene el glifo. Cambia a ♡ o ✿; las letras burbuja en sí son muy compatibles.",
        },
        {
          q: "¿Los lectores de pantalla manejan bien un nombre tierno decorado?",
          a: "Casi: ♡ y ✿ se anuncian como nombres cortos de símbolos, pero los marcos alrededor de cada palabra se vuelven ruido rápido. Decora el nombre, no las frases.",
        },
        {
          q: "¿Por qué el ♡ a veces se dibuja a color, como un emoji?",
          a: "Algunas plataformas le dan presentación de emoji a las formas de corazón y las pintan rojo. Depende del dispositivo, no de tu texto: si te molesta, ✿ o ✧ se mantienen en blanco y negro con más fiabilidad.",
        },
        {
          q: "¿El generador tierno es gratis? ¿Hay que instalar algo?",
          a: "Gratis, sin cuenta y sin nada que instalar. Las letras burbuja y circulares son caracteres Unicode, así que el estilo viaja copiado junto con el propio texto.",
        },
      ],
    },
  },
  "bubble-fonts": {
    es: {
      navName: "Burbuja",
      h1: "Generador de letras burbuja",
      title: "Generador de letras burbuja — ⓐ, cuadradas y (paréntesis)",
      description:
        "Letras burbuja bonitas: ⓐ circuladas, cuadradas, paréntesis y rellenas. Se ven en vivo al escribir y se copian con un toque, para nombres y numeración.",
      intro: [
        "Letras dentro de círculos y cajas: 🅑🅤🅑🅑🅛🅔 burbujas rellenas, ⓑⓤⓑⓑⓛⓔ círculos finos, más variantes entre paréntesis y cuadradas. Escribe, mira la vista previa y toca para copiar.",
        "Los cuatro envoltorios cambian de peso: las burbujas son las más gruesas, los círculos finos los más ligeros, los paréntesis los más aireados y los cuadrados los más tipo placa (ojo con el renderizado como emoji).",
      ],
      steps: [
        "Escribe una palabra: de 2 a 6 letras funciona mejor.",
        "Compara los cuatro envoltorios y elige la densidad que pegue con el contexto.",
        "Copia y pega en un nombre, una tarjeta de grupo o una lista numerada.",
        "Si los cuadrados se vuelven emojis de colores, cambia a burbujas o círculos.",
      ],
      about: {
        heading: "Dos familias de letras encerradas",
        paragraphs: [
          "Las letras de círculo fino vienen del clásico bloque Enclosed Alphanumerics de Unicode (los vecinos de ①②③), que también cubre dígitos circulares del 1 al 20; las burbujas rellenas y los cuadrados vienen del bloque Enclosed más nuevo, donde algunos caracteres tienen presentación emoji.",
          "Esa identidad emoji es la razón por la que 🅱 a veces se dibuja a color: es una doble identidad, no un error. Cambia de estilo cuando una plataforma fuerza la versión a color.",
        ],
      },
      faq: [
        {
          q: "¿Los dígitos también se envuelven?",
          a: "Sí: burbujas y círculos cubren del 0 al 9, y los paréntesis cubren del 1 al 20. Listas numeradas como ⓶⓪⓶ funcionan de una.",
        },
        {
          q: "¿Por qué mi letra cuadrada se puso de colores?",
          a: "Caracteres como 🅱🅰 tienen identidad emoji y algunas plataformas prefieren ese dibujo. Usa los círculos finos cuando quieras la forma normal en blanco y negro.",
        },
        {
          q: "¿Las letras burbuja sirven para frases largas?",
          a: "No: los caracteres encerrados son visualmente densos y se vuelven ruido rápido. Palabras sueltas, números y palabras clave es la dosis correcta.",
        },
        {
          q: "¿Las letras circulares cuentan como dos caracteres?",
          a: "Una cada una en la mayoría de los contadores, pero las letras encerradas son anchas: algunas plataformas cuentan el ancho visible como 2. Pega primero y mira el contador propio de la plataforma.",
        },
        {
          q: "¿Los lectores de pantalla leen bien las letras burbuja?",
          a: "No con fluidez: muchos anuncian ⓑ como «letra latina minúscula b en círculo». Va bien para un nombre visible; las frases y lo que deba leerse en voz alta, en letras planas.",
        },
        {
          q: "¿Necesito instalar una fuente burbuja?",
          a: "No: son caracteres Unicode, no archivos de fuente. Nada que instalar y sin cuenta necesaria; las burbujas viajan dentro del propio texto copiado.",
        },
      ],
    },
  },
  "strikethrough-text": {
    es: {
      navName: "Tachado",
      h1: "Generador de texto tachado",
      title: "Generador de texto tachado — subrayado y barras",
      description:
        "Tacha o subraya cualquier texto bonito, incluso en chino y emojis; se dibuja en vivo al escribir y se copia con un toque. Ojo: el contador casi se duplica.",
      intro: [
        "Las apps de chat no dejan tachar una palabra; aquí la línea va integrada en los propios caracteres, así que sobrevive a cualquier pegado y funciona con cualquier alfabeto.",
        "Tachado para chistes y correcciones, subrayado para énfasis; seis variantes desde la línea simple hasta el doble subrayado.",
      ],
      steps: [
        "Escribe la palabra o la frase que quieras rayar.",
        "El tachado se lee como «eliminado»; el subrayado se lee como énfasis.",
        "Copia y pega en un chat, una bio o un comentario.",
        "La alineación de la línea depende de la fuente de quien lee: pequeños desniveles son normales.",
      ],
      about: {
        heading: "Cómo los signos combinantes dibujan líneas",
        paragraphs: [
          "Las líneas no son gráficos: son signos combinantes de Unicode (U+0336 y compañeros) apilados sobre cada carácter. Al renderizar, la línea se dibuja a través del glifo anterior, y por eso el truco también funciona con el chino y los emojis.",
          "El costo: el texto copiado cuenta casi el doble, porque cada carácter visible carga una marca invisible. Vigila el contador en los campos con validación estricta.",
        ],
      },
      faq: [
        {
          q: "¿El tachado funciona en chino?",
          a: "Sí: cada carácter han recibe su línea también. Algunas fuentes la dibujan más fina sobre glifos CJK; el efecto varía según la plataforma.",
        },
        {
          q: "¿Por qué se duplicó mi conteo de caracteres?",
          a: "Cada carácter visible carga una marca combinante invisible que los contadores sí incluyen. El texto tachado mide casi el doble de lo que parece.",
        },
        {
          q: "¿Puedo usar texto subrayado como nombre de juego?",
          a: "Depende del juego. La mayoría acepta signos combinantes; las validaciones antitrampas estrictas pueden rechazarlos. Prueba en el diálogo de cambio de nombre antes de gastar una tarjeta.",
        },
        {
          q: "¿Los lectores de pantalla siguen leyendo el texto tachado?",
          a: "Sí: las marcas combinantes no cambian los caracteres base, así que las palabras llegan completas. Eso sí, la broma del «tachado» se pierde para quien escucha; no confíes en la línea para transmitir significado.",
        },
        {
          q: "¿Cómo quito un tachado más adelante?",
          a: "Borra el texto y escríbelo de nuevo: las marcas son parte de los caracteres y nada puede desactivarlas. Una herramienta que elimine signos combinantes (como el limpiador de zalgo) también lo deshace.",
        },
        {
          q: "¿Puedo tachar emojis también?",
          a: "Sí: las marcas combinantes se apilan sobre cualquier carácter, emojis incluidos. El dibujo varía: algunas apps trazan la línea limpia, otras la desplazan o la omiten sobre el glifo del emoji.",
        },
      ],
    },
  },
  "fancy-numbers": {
    es: {
      navName: "Números",
      h1: "Generador de números especiales",
      title: "Generador de números especiales — ①𝟙➊ dígitos con estilo",
      description:
        "Números bonitos: negrita, contorno, monoespaciada, circulares ① y burbuja ➊. Se ven en vivo al escribir y se copian con un toque, para años y listas.",
      intro: [
        "①②③ 𝟙𝟚𝟛 ➊➋➌: todos los estilos de dígitos que puedes escribir, en una sola página. Mete un número, una fecha o un número de sala y los estilos se dibujan en vivo.",
        "Los estilos de dígitos se mezclan bien con palabras: la clase de 𝟐𝟎𝟐𝟕, ⓿ errores. La página también entrega letras, para que copies etiquetas junto con los números.",
      ],
      steps: [
        "Escribe el número; unidades y letras también valen (como N.º1).",
        "Los dígitos circulares van bien para numerar listas; la negrita, para años.",
        "Copia y pega en posts, títulos o apodos.",
        "Si aparecen cuadros en dispositivos viejos, cambia a negrita o monoespaciada.",
      ],
      about: {
        heading: "Seis formas para diez dígitos",
        paragraphs: [
          "Unicode le da al 0–9 varias familias estilizadas: negrita, contorno y monoespaciada matemáticas en el bloque de mates; dígitos circulares en el bloque clásico de símbolos, junto a ①; burbujas rellenas en el bloque enclosed. La cobertura de fuentes varía por familia: los sistemas viejos pierden los más raros.",
          "Un orden aproximado de confiabilidad: negrita simple > monoespaciada > contorno > circular > burbuja. Cuando envíes a dispositivos desconocidos, prefiere la punta de esa lista.",
        ],
      },
      faq: [
        {
          q: "¿Puedo mandar números de teléfono en dígitos con estilo?",
          a: "Por favor no. Los códigos de verificación, los números de orden y los teléfonos deben poder leerse como dígitos normales: los dígitos estilizados rompen el reconocimiento.",
        },
        {
          q: "¿Cuál es la diferencia entre ① y ➊?",
          a: "① es un círculo fino del bloque clásico de símbolos; ➊ es una burbuja rellena del bloque enclosed. Orígenes, aspectos y coberturas de fuente distintos. Cámbialos cuando uno se dibuje mal.",
        },
        {
          q: "¿Un ID de usuario en dígitos con estilo es buscable?",
          a: "No. La gente no puede escribir dígitos estilizados para encontrarte. Muestra tus datos de contacto en dígitos normales junto a cualquier versión decorada.",
        },
        {
          q: "¿Por qué los dígitos circulares se ven como cuadros en teléfonos viejos?",
          a: "Las fuentes antiguas cubren bien la negrita simple y la monoespaciada, pero pierden las familias más raras, como burbujas y contornos rellenos. Cuando envíes a dispositivos desconocidos, empieza por arriba de la lista de confiabilidad: primero negrita, la burbuja al final.",
        },
        {
          q: "¿Cómo manejan los lectores de pantalla los dígitos estilizados?",
          a: "Pueden anunciar ① como «dígito uno en círculo» o saltarse el estilo por completo. Nunca los uses para algo que deba leerse en voz alta o marcarse: un año en un post va bien, una dirección no.",
        },
        {
          q: "¿Este generador es gratis?",
          a: "Sí: gratis, sin cuenta y sin nada que instalar. Los dígitos estilizados son caracteres Unicode ordinarios que copias como cualquier otro texto.",
        },
      ],
    },
  },
  "zalgo-text": {
    es: {
      navName: "Zalgo",
      h1: "Generador de texto zalgo",
      title: "Generador de texto zalgo — 3 niveles glitch y limpiador",
      description:
        "Texto zalgo llamativo en 3 intensidades y limpiador incluido. Se ve en vivo al escribir y se copia con un toque; lectores de pantalla y contadores sufren.",
      intro: [
        "Zalgo apila signos combinantes sobre los caracteres hasta que el texto sangra. Tres intensidades, desde apenas raro hasta completamente maldito: escribe, mira, copia.",
        "El limpiador al final de la página cierra el círculo: pega texto corrupto venga de donde venga y quítale todas las marcas hasta volver al original limpio.",
      ],
      steps: [
        "Escribe una frase: el zalgo funciona con cualquier carácter, chino y emojis incluidos.",
        "Elige la intensidad: la ligera va bien en firmas, la fuerte es para textos de terror cortos.",
        "Toca copiar y pega en un nombre, una bio o un post escalofriante.",
        "¿Te arrepentiste? Tira el texto en el limpiador de abajo y recupéralo.",
      ],
      about: {
        heading: "Signos combinantes llevados al extremo",
        paragraphs: [
          "Las letras, los caracteres han y los emojis son todos caracteres ordinarios, y Unicode trae cientos de signos combinantes sin ancho propio, que se dibujan apilados sobre el glifo anterior. Zalgo mete de 2 a 8 después de cada carácter.",
          "Cuanto más densa la pila, más les cuesta a los motores de diseño: las filas se recortan, los contadores explotan y los lectores de pantalla recitan cada marca. El zalgo fuerte es solo para textos cortos, nunca para algo importante.",
        ],
      },
      faq: [
        {
          q: "¿El texto zalgo puede dañar mi cuenta?",
          a: "No: es texto plano sin código adjunto. Los riesgos son de visualización: diseño roto y guardados rechazados en algunos juegos. Prueba primero con poco; el limpiador siempre restaura.",
        },
        {
          q: "¿Por qué se ve como marcas diminutas o cuadros en otros lados?",
          a: "Las fuentes del dispositivo no traen esos glifos combinantes. Una intensidad ligera suele sobrevivir; por eso la fuerte es para textos cortos.",
        },
        {
          q: "¿Cómo limpio un zalgo que alguien me mandó?",
          a: "Pega todo en el limpiador de esta página: quita cada signo combinante y selector de variación, deja solo los caracteres base, y todo se procesa localmente en tu navegador.",
        },
        {
          q: "¿Cuánto más largo se vuelve el texto zalgo?",
          a: "Mucho: cada carácter carga de 2 a 8 marcas invisibles, así que una maldición fuerte puede triplicar el largo y reventar los contadores estrictos. El zalgo ligero cabe en un nombre de 30 caracteres; el fuerte rara vez lo hace.",
        },
        {
          q: "¿El zalgo es legible para los lectores de pantalla?",
          a: "Prácticamente no: recitan cada signo combinante y convierten un nombre en minutos de ruido. Es el estilo menos accesible del sitio; déjalo para textos cortos hechos para los ojos, no para los oídos.",
        },
        {
          q: "¿Dónde puedo publicar texto zalgo sin problemas?",
          a: "Bios, nombres visibles y comentarios: espacios cortos y decorativos. Los campos estrictos (accesos, @usuarios, formularios) rechazan las marcas o recortan la pila, y los juegos con filtros de nombres suelen rechazarlo de plano.",
        },
      ],
    },
  },
  "upside-down-text": {
    es: {
      navName: "Al revés",
      h1: "Generador de texto al revés",
      title: "Generador de texto al revés — escribe hola, lee ɐloɥ",
      description:
        "Letras al revés bonitas: glifos en espejo y orden invertido, en vivo al escribir y copia con un toque. La firma clásica para bromas y comentarios.",
      intro: [
        "ɐloɥ — cada letra en espejo y luego la cadena del revés, y la línea entera se lee patas arriba. Escribe, mira, copia.",
        "Las letras, los dígitos del 1 al 9 y la puntuación común tienen todas forma al revés. El chino no tiene y pasa tal cual, así que el texto mixto se voltea a medias, lo cual es divertido a su manera.",
      ],
      steps: [
        "Escribe la frase que quieras voltear.",
        "Revisa la vista previa: la puntuación también se voltea.",
        "Copia y pega en una firma o un comentario.",
        "¿Quieres que la parte en chino también se vea rara? Agrégale un marco o espaciado con símbolos simples, tipo 『 』.",
      ],
      about: {
        heading: "No es rotación: es sustitución",
        paragraphs: [
          "El texto al revés no es un efecto gráfico: el motor cambia cada letra por su parecido Unicode (a→ɐ, e→ǝ) y luego invierte la cadena, así que el orden de lectura corre de derecha a izquierda y la línea se ve invertida.",
          "El mapa cubre ambos casos, dígitos y puntuación común; los caracteres sin forma al revés (como la W o el chino) se quedan como están. Sigue siendo texto ordinario: copiar, pegar y contar se comportan normal.",
        ],
      },
      faq: [
        {
          q: "¿El texto volteado se ve bien en celulares?",
          a: "Sí: los caracteres en espejo son letras ordinarias cubiertas por las fuentes de los sistemas principales. Algunas formas se ven un poco raras por naturaleza.",
        },
        {
          q: "¿Por qué el chino no se volteó?",
          a: "Unicode no tiene glifos han en espejo, así que el chino pasa tal cual. Encuéntralo con un marco o espácialo para lograr el efecto de «algo anda raro».",
        },
        {
          q: "¿Cómo lo leo de vuelta?",
          a: "Pégalo otra vez en el cuadro y voltéalo de nuevo: la transformación es su propia inversa.",
        },
        {
          q: "¿Los lectores de pantalla entienden el texto al revés?",
          a: "No: leen las letras en espejo tal como están escritas, lo que suena a galimatías, y la inversión desordena más el orden. Voltea solo líneas cortas y decorativas.",
        },
        {
          q: "¿Por qué algunas letras quedaron derechas?",
          a: "Algunos caracteres no tienen parecido al revés; la W es la famosa, así que se quedan como se escribieron. Es un hueco en la tabla de espejo de Unicode, no un error del generador.",
        },
        {
          q: "¿Puedo usar texto al revés como nombre de usuario?",
          a: "Los nombres visibles suelen aceptarlo; los @usuarios estrictos y los campos de acceso suelen rechazar los caracteres en espejo. Prueba primero en el campo real, y recuerda que nadie podrá escribirlo para buscarte.",
        },
      ],
    },
  },
};
