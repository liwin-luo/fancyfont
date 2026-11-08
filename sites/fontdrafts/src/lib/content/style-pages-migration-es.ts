// Spanish copy for the ten migration style pages, adapted from the old
// site's style-pages-es.ts and restructured into the shared StylePageCopy
// shape (mirrors style-pages-migration-en.ts key-for-key).

import type { StylePageCopy } from "../style-pages";

export const stylePagesMigrationEs: Record<string, { es: StylePageCopy }> = {
  "cool-font-generator": {
    es: {
      navName: "Cool",
      h1: "Generador de letras cool",
      title: "Generador de letras cool — rayos, estrellas y negrita",
      description:
        "Letras cool para copiar y pegar: negrita gruesa con un rayo ⚡, alas de estrellas ★彡 o corchetes 『』. Gratis en tu navegador: escribe, compara y copia.",
      intro: [
        "Escribe un nombre y las versiones cool se arman mientras tecleas: letras gruesas en negrita, una línea de versalitas más quieta y filas decoradas con un rayo ⚡, alas de estrellas ★彡 o corchetes 『』. Toca una tarjeta para copiar: sin archivos de fuente, sin registro y todo corre en tu navegador.",
        "La línea gruesa es la negrita matemática de Unicode: el peso va dentro de los propios caracteres y sobrevive a cualquier pegado. Aquí llega quien busca texto stylish o un tag de clan — y es el mismo look: letras en negrita vestidas con un par de símbolos, no otro alfabeto.",
      ],
      steps: [
        "Escribe tu nombre o tag — una sola palabra pesa más que una larga.",
        "Compara la línea de negrita pelada con las filas del rayo, las estrellas y los corchetes; las versalitas son la opción más discreta.",
        "Copia la que gane y pégala en tu apodo de Discord, tu bio o tu tag de juego.",
        "Revisa la vista previa de la app: los campos de juego que solo aceptan ASCII quitan la negrita Unicode, y los símbolos son lo primero que sueltan los teléfonos viejos.",
      ],
      about: {
        heading: "Qué hace que un nombre se lea cool",
        paragraphs: [
          "La negrita convierte letras y dígitos; las versalitas cubren la mayoría de las letras y dejan unas pocas iguales donde Unicode no tiene forma de versalita. El rayo, las estrellas y los corchetes son caracteres extra que envuelven la fila gruesa, y cuentan en el límite de caracteres del campo de destino.",
          "Esta página arma un nombre decorado — el look más llamativo del generador. Si un símbolo desaparece en la vista previa de una app, la línea de negrita pelada siempre se copia limpia; por eso todo nombre cool debería tener a mano una versión sin adornos.",
        ],
      },
      faq: [
        {
          q: "¿Las letras cool y las cool fonts son lo mismo?",
          a: "Sí: letras cool, cool fonts y texto cool describen lo mismo — letras Unicode en negrita o versalitas con estrellas, alas o corchetes. Escribe arriba, elige un look y cópialo.",
        },
        {
          q: "¿Qué significa texto stylish aquí?",
          a: "Los mismos nombres gruesos decorados. Stylish, en esta página, son las filas del rayo, la estrella y los corchetes — no otro alfabeto.",
        },
        {
          q: "¿Un tag de clan cabe en un usuario de juego?",
          a: "Muchas veces el símbolo es lo que rechazan. Si las alas o el rayo desaparecen en la vista previa del juego, usa la fila de negrita sin adorno: pasa donde el juego acepta letras normales.",
        },
        {
          q: "¿Cuánto puede medir un nombre cool?",
          a: "Mira el campo: los apodos de Discord rondan los 32 caracteres y los nombres visibles de Instagram los 30, y cada adorno cuenta como uno. Una palabra corta más un solo par de símbolos cabe de sobra.",
        },
        {
          q: "¿La negrita Unicode es segura para lectores de pantalla?",
          a: "Algunos la leen letra por letra o la deletrean raro. Para un nombre o una palabra no hay problema; deja las frases en texto plano.",
        },
        {
          q: "¿El texto cool funciona en Instagram y TikTok?",
          a: "Sí: bios, captions y nombres visibles aceptan las letras en negrita en teléfonos modernos. El usuario queda plano: el de Instagram solo admite letras, números, puntos y guiones bajos.",
        },
      ],
    },
  },

  "elegant-font-generator": {
    es: {
      navName: "Elegante",
      h1: "Generador de letras elegantes",
      title: "Generador de letras elegantes — script y flor de lis",
      description:
        "Cursiva elegante para copiar y pegar: script grueso con una flor de lis ⚜ o un corazón floral ❦. Para bios, captions y nombres formales — gratis.",
      intro: [
        "Escribe un nombre y las versiones elegantes se arman mientras avanzas: script grueso en negrita, una cursiva más fina al lado y filas decoradas con una flor de lis ⚜ o un corazón floral ❦. Los nombres royal y de princesa son este mismo look: letras que fluyen y un símbolo formal.",
        "Las letras son el script en negrita de Unicode, y cada flor o corazón es un símbolo aparte que envuelve solo esa fila, un par por resultado. Es texto que pegas — no un archivo de caligrafía ni letras burbuja — y justo por eso funciona en bios y nombres visibles.",
      ],
      steps: [
        "Escribe el nombre o el caption corto que quieras arreglar — una o dos palabras es el punto justo.",
        "Compara el script grueso con la cursiva más fina, y prueba los pares de flor de lis y corazón floral.",
        "Copia la fila que encaje y pégala en un nombre visible, una bio o un caption.",
        "Si el script grueso sale en cuadros en un teléfono viejo, copia la fila de cursiva fina: mismo estilo, más dispositivos lo muestran.",
      ],
      about: {
        heading: "Cursiva arreglada, explicada sin rodeos",
        paragraphs: [
          "Los dos estilos de cursiva convierten solo letras: dígitos, tildes y emoji se quedan como los escribiste, porque Unicode no tiene formas script para ellos. Cada flor de lis o corazón floral es un carácter extra a ese lado del nombre, y los adornos cuentan en el límite del campo.",
          "El look va con nombres visibles de boda y belleza, un nombre royal o de princesa en la bio, y captions cortos que deban verse arreglados. Para frases enteras, la fila de cursiva fina se lee más limpia — reserva los símbolos para los nombres.",
        ],
      },
      faq: [
        {
          q: "¿Elegante es lo mismo que cursiva?",
          a: "La cursiva es el alfabeto script pelado. Elegante lleva la cursiva más gruesa y añade un símbolo formal: una flor de lis o un corazón floral.",
        },
        {
          q: "¿Dónde están las fuentes royal y de princesa?",
          a: "En esta página. Un nombre de princesa o royal aquí es cursiva más una flor de lis o un corazón floral, no una descarga aparte.",
        },
        {
          q: "¿Esto es un archivo de caligrafía?",
          a: "No. Copias caracteres. Los archivos de caligrafía se instalan, y este sitio no los ofrece.",
        },
        {
          q: "¿Esto es lo que llaman una fuente de lujo?",
          a: "Casi siempre sí. Quien busca fuente de lujo quiere ese mismo look formal: script con adornos finos y espaciado cuidado. Como todo en esta página, es texto Unicode, así que lo pegas en bios y perfiles.",
        },
        {
          q: "¿Puedo ponerlo en mi usuario de Instagram?",
          a: "No. El usuario solo acepta letras, números, puntos y guiones bajos. Pega el nombre con estilo en tu nombre visible o en tu bio: ahí sí aceptan caracteres con estilo.",
        },
        {
          q: "¿Cuánto puede medir un nombre elegante?",
          a: "El nombre visible de Instagram ronda los 30 caracteres y el apodo de Discord los 32, y cada flor o corazón suma uno por lado. Un nombre corto más un solo par de símbolos es el tamaño cómodo.",
        },
      ],
    },
  },

  "dark-font-generator": {
    es: {
      navName: "Oscura",
      h1: "Generador de letras oscuras",
      title: "Generador de letras oscuras — gótica, calaveras y espadas",
      description:
        "Nombres oscuros para copiar y pegar: letra gótica con una calavera ☠ o espadas cruzadas ⚔. Para bios y nombres emo — no es una fuente para descargar.",
      intro: [
        "Escribe una palabra y las filas oscuras la arman en letra gótica con un símbolo oscuro cada una: una calavera ☠ o un par de espadas cruzadas ⚔. El estilo emo es exactamente esta mezcla: letras fraktur más una marca. El alfabeto pelado, sin calaveras, vive en la página gótica.",
        "Las letras son Unicode Fraktur; el corte grueso en negrita lleva los adornos y se sigue leyendo en tamaños chicos. Los dígitos se quedan como los escribiste — Unicode no tiene números fraktur — y la calavera es un símbolo que puede dibujarse un poco distinto en cada teléfono.",
      ],
      steps: [
        "Escribe tu nombre de una palabra o tu lema — Noche, Cuervo, lo que deba verse sombrío.",
        "Compara las filas de calavera y espadas con la gótica gruesa pelada de abajo; también hay variantes tachadas, con barra y subrayadas.",
        "Copia una fila y pégala en un nombre de Discord, una bio o un post de Halloween.",
        "Si la calavera sale como un cuadro vacío en un teléfono, copia la fila de las espadas o la de fraktur pelada.",
      ],
      about: {
        heading: "El look oscuro decorado",
        paragraphs: [
          "Los dos estilos fraktur convierten solo la A–Z y la a–z: dígitos, tildes y otros alfabetos pasan sin cambios. La calavera y las espadas son símbolos aparte en las filas decoradas y, como las letras, cuentan en los límites de nombre.",
          "Dónde encaja: bios oscuras y nombres de Discord, nombres emo o de una sola palabra, y líneas de Halloween que igual hay que copiar como texto. Los juegos que exigen ASCII plano rechazan el fraktur sin apelación, así que revisa la vista previa del juego antes de renombrar nada importante.",
        ],
      },
      faq: [
        {
          q: "¿El texto emo es distinto del gótico?",
          a: "Gótico, en este sitio, es el alfabeto blackletter pelado. Emo es ese alfabeto más una calavera o una espada — o sea, esta página.",
        },
        {
          q: "¿Puedo descargar una fuente oscura?",
          a: "No. Copias caracteres. Un archivo de fuente habría que instalarlo, y aquí no se instala nada — por eso el estilo sobrevive al pegado.",
        },
        {
          q: "¿Por qué algunas letras se ven distintas?",
          a: "El fraktur conserva formas históricas para C, H, I, R y Z, y Unicode no tiene dígitos fraktur, así que los números quedan planos. Esa forma es el alfabeto, no un fallo.",
        },
        {
          q: "¿El texto oscuro funciona en bios de Instagram?",
          a: "Sí: las letras fraktur se pegan en bios y nombres visibles de Instagram en teléfonos modernos. El usuario queda plano, y algunos Android viejos pueden echar de menos algún glifo.",
        },
        {
          q: "¿Aceptan los juegos los nombres en blackletter?",
          a: "Muchos los rechazan. Los juegos con campos de nombre solo ASCII quitan el fraktur entero: prueba en la vista previa de cambio de nombre antes de quedarte con un tag oscuro.",
        },
        {
          q: "¿El texto oscuro está bien para lectores de pantalla?",
          a: "Como los demás alfabetos matemáticos, el fraktur puede leerse letra por letra o saltarse. Resérvalo para nombres y líneas cortas — nunca para información que alguien necesite leer.",
        },
      ],
    },
  },

  "heart-font-generator": {
    es: {
      navName: "Corazón",
      h1: "Generador de letras con corazón",
      title: "Letras con corazón para copiar y pegar — script y flores",
      description:
        "Texto con corazón para copiar y pegar: letras script con un corazón ♡ a cada lado, o una fila de flores ✿. Gratis en el navegador, sin instalar nada.",
      intro: [
        "Letras script y, después, un corazón ♡ a cada lado — la forma más suave de arreglar un nombre. Escribe Love, Mia o Honey y todas las filas se reconstruyen mientras tecleas; toca para copiar la que encaje.",
        "Las filas con corazón envuelven el script grueso de Unicode, el alfabeto con e, g y o de verdad, así que los nombres cortos conservan sus formas. La fila de flores ✿ está para cuando el corazón se siente muy dulce, y las filas de burbuja y versalitas van peladas para que el nombre se siga leyendo.",
      ],
      steps: [
        "Escribe el nombre o el caption corto — una sola palabra mantiene el protagonismo en el par de corazones.",
        "Compara las filas del corazón ♡ y de la flor ✿ con el script pelado y la burbuja de abajo.",
        "Copia una fila y pégala en un nombre visible de Instagram, una bio de TikTok o un apodo de Discord.",
        "Si un adorno sale como un cuadro vacío en tu teléfono, copia la fila de script pelada: mismas letras, nada que se rompa.",
      ],
      about: {
        heading: "Un corazón por lado, y hasta ahí",
        paragraphs: [
          "El script y el script grueso convierten la A–Z y la a–z; la burbuja convierte también los dígitos, y las versalitas dejan unas pocas letras iguales. Dígitos, tildes y emoji pasan sin cambios. Los corazones y las flores son caracteres extra y cuentan en el límite del nombre.",
          "Un corazón sobre letras burbuja se queda en la página tierna, y un corazón limpio sobre versalitas se queda en la página preppy — esta página guarda la versión con script que fluye. Mejor encaje: nombres visibles y bios de Instagram y TikTok, y apodos de Discord donde basta un corazón a cada lado.",
        ],
      },
      faq: [
        {
          q: "¿La fuente de corazón es un archivo que descargo?",
          a: "No. El resultado son caracteres Unicode, por eso se pega en apps que solo aceptan texto plano. Este sitio no ofrece archivos de fuente y no dibuja las letras en una imagen.",
        },
        {
          q: "¿En qué se diferencia de las páginas tierna y preppy?",
          a: "Lo tierno son letras burbuja con un adorno; preppy son versalitas con un corazón limpio. Esta página es script que fluye con un corazón ♡ o una flor ✿ a cada lado.",
        },
        {
          q: "¿Puedo usar un nombre con corazón como usuario de Instagram?",
          a: "No. El usuario de Instagram solo admite letras, números, puntos y guiones bajos. Pega el nombre con corazón en el nombre visible o en la bio.",
        },
        {
          q: "¿Cuántos caracteres usa un nombre con corazón?",
          a: "Cada corazón suma uno por lado, encima de las letras. El nombre visible de Instagram ronda los 30 caracteres y el apodo de Discord los 32, así que una palabra corta más un par cabe de sobra.",
        },
        {
          q: "¿Funcionan los nombres con corazón en TikTok?",
          a: "Sí: las bios y los nombres visibles de TikTok aceptan las letras script y los corazones. El usuario queda plano, y lo que la app acepta al final lo decide la app — pega una prueba antes de guardar.",
        },
        {
          q: "¿Pueden leer el texto con corazón los lectores de pantalla?",
          a: "A menudo no como la palabra que escribiste: el Unicode con estilo puede deletrearse letra por letra o saltarse. Guarda una copia del nombre en texto plano y nunca pongas información importante en caracteres con estilo.",
        },
      ],
    },
  },

  "coquette-font-generator": {
    es: {
      navName: "Coquette",
      h1: "Letras coquette para copiar y pegar",
      title: "Letras coquette para copiar y pegar — lazo en bios",
      description:
        "Letras coquette gratis con lazo ୨୧. Copia y pega script para el nombre de Instagram o el apodo de Discord. No es un archivo de fuente para instalar.",
      intro: [
        "Letras script y un solo lazo. Escribe un nombre — Mia, Lila, Belle — y las filas se reconstruyen en tu navegador: el par de lazos de cinta ୨୧ sobre el script grueso, con corazones ♡, flores ✿ y corchetes suaves ꒰꒱ como alternativa. Lo tierno de este sitio son las letras burbuja; esta página se queda en el look de lazo.",
        "El lazo envuelve el script grueso de Unicode — el alfabeto con e, g y o de verdad — así que nombres como Belle conservan sus formas. El script fino queda debajo, sin lazo, y en esa fila e, g y o son sustitutos. Los lazos son símbolos aparte, añadidos solo alrededor de la fila gruesa.",
      ],
      steps: [
        "Escribe el nombre que quieras — una sola palabra mantiene el protagonismo en el lazo.",
        "Quédate con las filas de script grueso para que e, g y o conserven sus formas de verdad.",
        "Copia una fila y pégala en un nombre visible de Instagram, un nombre de TikTok, un caption o un apodo de Discord — nunca en el usuario.",
        "Si un lazo sale como un cuadro vacío en tu teléfono, copia la fila del corazón o de la flor, y guarda siempre el respaldo en texto plano.",
      ],
      about: {
        heading: "Letras con lazo y dónde van",
        paragraphs: [
          "El script convierte la A–Z y la a–z; los dígitos se quedan como los escribiste. Cada lazo, corazón y flor es un carácter extra que cuenta en el límite del nombre: el nombre visible de Instagram ronda los 30 caracteres y el apodo de Discord los 32, así que un nombre de una palabra con un solo par cabe de sobra.",
          "Los lectores de pantalla a menudo no pueden decir el Unicode con estilo como la palabra escrita, así que guarda un respaldo del nombre en texto plano. Todo se convierte en tu navegador y nada se sube; lo que una app acepta al final lo decide la app — revisa su propia vista previa antes de guardar.",
        ],
      },
      faq: [
        {
          q: "¿Dónde encuentro letras coquette para copiar y pegar?",
          a: "Aquí mismo: escribe tu nombre en el generador y toca una fila para copiarla entera, lazo incluido. Si el lazo pequeño ୨୧ sale como un cuadro, copia la fila del corazón o de la flor.",
        },
        {
          q: "¿Qué es una letra coquette?",
          a: "Es script con un lazo de cinta. No es la página tierna, que usa letras burbuja, ni la elegante, que lleva flor de lis. Aquí copias caracteres, no un archivo de fuente.",
        },
        {
          q: "¿El generador de letras coquette descarga una fuente?",
          a: "No. No hay archivo para instalar. El resultado se pega en apps que aceptan texto plano, como el nombre visible de Instagram o el apodo de Discord.",
        },
        {
          q: "¿Puedo pegar letras coquette en mi usuario de Instagram?",
          a: "No. El usuario se queda en letras planas, dígitos, puntos y guiones bajos. El nombre visible y la bio sí se pueden probar; el conjunto de caracteres que acepta lo decide la app.",
        },
        {
          q: "¿Puedo usar un nombre coquette en TikTok?",
          a: "Sí: los nombres visibles y las bios de TikTok aceptan las letras script y los lazos. El usuario queda plano, y lo que TikTok muestra al final lo decide TikTok — revísalo en la app.",
        },
        {
          q: "¿Cómo conservo el nombre si fallan los caracteres?",
          a: "Guarda un respaldo en texto plano. Los lectores de pantalla también pueden saltarse o deletrear las letras con estilo, así que la versión plana es más amable — y se pega en cualquier lado, siempre.",
        },
      ],
    },
  },

  "chicano-font-generator": {
    es: {
      navName: "Chicana",
      h1: "Generador de letra chicana",
      title: "Generador de letra chicana — gótica y script para copiar",
      description:
        "Texto de estilo chicano para copiar y pegar: gótica con un adorno por fila, más una línea script. Gratis en el navegador. No es una fuente ni un esténcil.",
      intro: [
        "Gótica clásica y un adorno por fila: la calavera ☠ y las espadas cruzadas ⚔. Escribe un nombre corto o un lema y todas las filas se reconstruyen mientras tecleas; la gótica pelada, sin adornos, vive en la página gótica.",
        "Las filas con adorno envuelven el Fraktur de Unicode, la letra gótica que mucha gente llama Old English, con la gótica gruesa debajo. El script grueso es la tercera fila y va pelado: ocupa el lugar de la mitad cursiva del estilo chicano, y sus letras no van unidas.",
      ],
      steps: [
        "Escribe un nombre corto o un lema — Rosa, Luz, Vida.",
        "Compara las filas con adorno con la gótica gruesa pelada, y mira la fila script para la mitad que fluye del look.",
        "Copia una fila, pégala en una bio o en un nombre visible, y revísala en esa app antes de guardar.",
        "¿Vas a encargar un lettering? Usa las filas para decidir qué mitad del estilo quieres tatuada de verdad.",
      ],
      about: {
        heading: "Una aproximación, etiquetada con honestidad",
        paragraphs: [
          "Las dos góticas convierten solo la A–Z y la a–z. Dígitos, letras con tilde como á, é y ñ, y emoji se quedan como los escribiste, porque Unicode no tiene formas góticas para ellos. El script grueso solo convierte letras, y cada adorno es un carácter extra que cuenta en el límite del nombre.",
          "El lettering chicano tradicional es gótica y script dibujados a mano, del trabajo gráfico mexicoamericano: murales, autos y tatuajes. Estas filas solo se acercan al look gótico y no sustituyen a un artista; lo que sí sirven es para probar un nombre corto en una bio y decidir qué mitad del estilo quieres antes de encargar nada.",
        ],
      },
      faq: [
        {
          q: "¿Esto es una fuente chicana que descargo?",
          a: "No. Copias caracteres Unicode. Este sitio no ofrece un archivo de fuente y no carga las góticas o scripts de pago que usan los generadores de imagen.",
        },
        {
          q: "¿Es lettering chicano tradicional?",
          a: "No. El lettering chicano es gótica y script dibujados a mano, del trabajo gráfico mexicoamericano: murales, autos y tatuajes. Estas filas se acercan al look gótico más un alfabeto script; no son un esténcil.",
        },
        {
          q: "¿Por qué la ñ y las tildes se quedan planas?",
          a: "El fraktur de Unicode no tiene forma para ellas, así que pasan igual mientras el resto de las letras sí se convierte — la á y la ñ de un nombre conservan su tilde de verdad.",
        },
        {
          q: "¿Admiten Instagram o TikTok estos caracteres?",
          a: "Los nombres visibles y las bios suelen aceptar el fraktur en teléfonos modernos; los usuarios, no. Los juegos que solo aceptan letras planas rechazan la gótica sin apelación: pega una prueba en el campo real primero.",
        },
        {
          q: "¿Cuánto puede medir el nombre?",
          a: "El nombre visible de Instagram ronda los 30 caracteres y el apodo de Discord los 32, y cada adorno suma uno por lado. Una palabra corta más una sola marca cabe; un símbolo raro puede salir como un cuadro en algunos teléfonos.",
        },
        {
          q: "¿Sirve como esténcil de tatuaje?",
          a: "Mejor no. Son glifos de texto, no un dibujo pensado para la piel. Explora el look aquí y llévate la idea — y las fotos de referencia — a un letrista.",
        },
      ],
    },
  },

  "preppy-font-generator": {
    es: {
      navName: "Preppy",
      h1: "Generador de letras preppy",
      title: "Letras preppy — Generador para copiar y pegar | FancyFont",
      description:
        "Las letras preppy son versalitas Unicode limpias con un corazón ordenado. Genera, copia y pega en tu bio, nombre de TikTok o Adopt Me — gratis, sin registro.",
      intro: [
        "Las letras preppy son versalitas limpias con un corazón ♡ ordenado: el estilo detrás de la mayoría de los nombres preppy de Adopt Me y de las bios de TikTok. Escribe Mila, Blair o Tess y las filas se arman mientras tecleas, un adorno por lado para que el nombre siga siendo lo importante.",
        "Las versalitas son letras modificadoras de Unicode que parecen mayúsculas de menor altura; el script y la burbuja son las segundas opciones, más suaves. El destello ✧ funciona cuando el corazón se siente demasiado dulce, y cada adorno es un símbolo aparte añadido alrededor de la fila que elijas.",
      ],
      steps: [
        "Escribe el nombre corto — una palabra de cinco letras o menos es el tamaño cómodo.",
        "Elige el adorno: un corazón ♡, un destello ✧, o nada en las filas peladas.",
        "Copia y pega en una bio de Instagram, un nombre de TikTok o un nombre visible de Adopt Me.",
        "Pégalo en la pantalla de nombre de Roblox y revisa la vista previa antes de confirmar el cambio.",
      ],
      about: {
        heading: "Por qué preppy se mantiene ordenado",
        paragraphs: [
          "Las versalitas cubren la mayoría de las letras y dejan unas pocas iguales donde Unicode no tiene forma; el script solo convierte letras, así que los dígitos de esa fila quedan normales. Los corazones y destellos son caracteres extra — y algunos corazones son emoji, justo lo primero que puede rechazar el filtro de un juego. Si uno desaparece, la fila del corazón o destello en texto plano igual se copia.",
          "Adopt Me muestra tu nombre visible de Roblox — normalmente unos 20 caracteres — y el usuario no admite fuentes ni de broma. Un nombre corto en versalitas con un corazón cabe en ese cuadro más a menudo que una pila de lazos, y por eso esta página mantiene los adornos simples.",
        ],
      },
      faq: [
        {
          q: "¿Preppy es lo mismo que coquette?",
          a: "No. Coquette es script que fluye con un par de lazos de cinta. Preppy son versalitas con un corazón limpio — más ordenado, más corto, más a ras de suelo.",
        },
        {
          q: "¿Esto sirve como usuario de Adopt Me?",
          a: "No: el usuario de Roblox se queda en letras, dígitos y un guion bajo. Prueba el nombre con estilo como nombre visible, y solo después de que la vista previa del juego lo acepte.",
        },
        {
          q: "¿Por qué los adornos son tan simples?",
          a: "Una pila de lazos se come los 20 caracteres del nombre visible y el filtro la corta más a menudo. Un corazón es la marca preppy y todavía deja sitio para el nombre.",
        },
        {
          q: "¿Cómo se llaman las letras preppy?",
          a: "No hay una sola letra preppy. Lo que las redes llaman preppy suelen ser versalitas — mayúsculas de menor altura — a menudo con un corazón o destello limpio al lado. Todo es texto Unicode, no una fuente instalada; por eso sobrevive al copiar y pegar.",
        },
        {
          q: "¿Cómo consigo letras preppy?",
          a: "Escribe tu nombre arriba, elige una fila de estilo y un adorno, y copia. Pégalo en tu bio de Instagram, nombre de TikTok o perfil de Adopt Me, y revisa la vista previa de la plataforma antes de guardar.",
        },
        {
          q: "¿Por qué algunas letras se quedan en minúscula?",
          a: "Unicode nunca definió versalitas para todas las letras, así que esas pocas se quedan como están. Todos los generadores tienen los mismos huecos — los que sí las convierten usan caracteres que pueden no verse en todos los dispositivos.",
        },
      ],
    },
  },

  "crazy-font-generator": {
    es: {
      navName: "Loca",
      h1: "Generador de letras locas",
      title: "Generador de letras locas — estilos Unicode dispar",
      description:
        "Letras locas para bios, nombres de juego y chats: zalgo, texto al revés, barras y letras espaciadas en un solo lugar. Copia con un toque — gratis, sin registro.",
      intro: [
        "Un solo estilo nunca es suficiente locura. Esta página junta los más ruidosos en una sola fila de tarjetas: corrupción zalgo en tres intensidades, texto al revés, fraktur, barras, tachado, letras espaciadas y cuadros negativos — con pares de destello ✧ y calavera ☠ encima.",
        "Debajo, todos los resultados usan el mismo truco: letras normales cambiadas por caracteres Unicode parecidos, y por eso todo lo de aquí se copia y pega como texto plano. El caos está en los caracteres, no en un archivo de fuente — lo que ves es lo que viaja.",
      ],
      steps: [
        "Escribe tu nombre o apodo — Cr@zy, Reina Glitch, lo que deba verse dispar.",
        "Recorre las tarjetas: zalgo para corrupción, al revés para confundir, fraktur y barras para el filo.",
        "Añade un par de destello o calavera si a la fila le falta un empujón.",
        "Copia y pega en una bio, un nombre visible, un título de stream o un tag de clan — y revisa la vista previa de la app antes de guardar.",
      ],
      about: {
        heading: "Caos con método",
        paragraphs: [
          "Los estilos locos convierten la A–Z y la a–z, y algunos también los dígitos. Los caracteres sin equivalente con estilo — tildes, emoji, chino — pasan sin cambios, así que un resultado puede mezclar a propósito letras con estilo y letras normales. Los adornos suman al límite de caracteres del campo de destino.",
          "Mejor encaje: nombres de juego y tags de clan que deban verse caóticos a propósito, perfiles que ya probaron los estilos cool y gótico y quieren algo más ruidoso, y bromas, títulos de stream y apodos de chat con energía dispar. Quédate en una o dos palabras — este estilo es un disfraz, no una fuente para el cuerpo del texto.",
        ],
      },
      faq: [
        {
          q: "¿Qué son las letras locas?",
          a: "No son fuentes: cada resultado loco es texto normal donde las letras se cambiaron por caracteres Unicode parecidos. Por eso puedes copiarlas y pegarlas donde vaya texto plano.",
        },
        {
          q: "¿En qué se diferencia de la página glitch (zalgo)?",
          a: "Las filas zalgo de aquí apilan marcas combinantes sobre letras normales; el resto de estilos cambia las propias letras — formas al revés, fraktur, barras. Esta página es la caja de herramientas ruidosa completa, en un solo lugar.",
        },
        {
          q: "¿Funcionan en el nombre de mi juego?",
          a: "Depende del juego. Muchos juegos móviles aceptan Unicode decorativo; los campos solo ASCII, no. Copia una variante, pégala en el campo real y comprueba antes de guardar.",
        },
        {
          q: "¿Se lee el texto loco, o es amable con los lectores de pantalla?",
          a: "Apenas, a propósito. Los lectores de pantalla pueden deletrear las letras con estilo una por una, que es ruido para quien escucha. Resérvalo para nombres, tags y bromas — nunca para algo que alguien deba leer de verdad.",
        },
        {
          q: "¿Cuánto puede medir un nombre loco?",
          a: "Vigila el límite del campo: cada letra con estilo cuenta como un carácter y los adornos suman más. Los apodos de Discord rondan los 32 caracteres, así que una palabra corta más un par ligero de símbolos cabe; los nombres largos se cortan.",
        },
        {
          q: "¿Por qué mi texto sale en cuadritos en algunos teléfonos?",
          a: "Al dispositivo le faltan fuentes para esos caracteres — los cuadros negativos y el zalgo pesado son los sospechosos de siempre. Si tu audiencia usa Androids viejos, prefiere las filas de fraktur y letras espaciadas, que se ven en casi todo.",
        },
      ],
    },
  },

  "italic-text-generator": {
    es: {
      navName: "Itálica",
      h1: "Generador de letras itálicas",
      title: "Generador de letras itálicas — serif y sans para copiar",
      description:
        "Texto itálico para copiar y pegar en cualquier parte: itálica serif clásica y sans limpia, con vista previa al instante para bios, captions y chats.",
      intro: [
        "Texto elegante e inclinado para pegar en bios, captions y chats — donde las apps olvidaron ponerte un botón de itálica. Escribe una frase y las dos itálicas se dibujan en vivo; toca para copiar.",
        "El estilo clásico viene del rango Mathematical Italic de Unicode — incluida la histórica ℎ para la letra h — y la variante sans del rango Sans-Serif Italic, con una inclinación más moderna y limpia. Los dos convierten solo letras: Unicode no define dígitos itálicos, así que los números conservan su forma normal.",
      ],
      steps: [
        "Escribe la palabra o la línea que quieras inclinar — un título, una frase de mood, un extranjerismo.",
        "Compara la itálica serif, que suena clásica y literaria, con la sans, que se ve más limpia en tamaños pequeños.",
        "Copia la ganadora y pégala en una bio, un caption o un chat.",
        "Usa itálica en una palabra o una línea, no en toda la bio — los bloques largos de texto inclinado cansan la vista y cuestan más de escuchar.",
      ],
      about: {
        heading: "Inclinación sin botón de formato",
        paragraphs: [
          "Los dos estilos itálicos convierten solo letras: dígitos, puntuación, emoji y otros alfabetos se quedan exactamente como los escribiste. La negrita itálica añade peso a la inclinación, y las combinaciones con subrayado trazan una línea debajo. Mejor encaje: captions literarios y bios de lectores, títulos destacados y frases en otros idiomas, y un acento suave dentro de bios por lo demás planas.",
          "La itálica Unicode es segura en bios, nombres visibles y mensajes de las grandes plataformas. En apps que sí tienen formato — los mensajes de Discord, por ejemplo — prefiere la itálica nativa: se dibuja de forma más consistente y sigue siendo amable con los lectores de pantalla.",
        ],
      },
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
          a: "Puedes, pero no lo recomendamos: los bloques largos de caracteres matemáticos se leen raro con tecnologías de asistencia y cansan la vista. Mejor itálica en una palabra o una línea.",
        },
        {
          q: "¿El texto itálico funciona en Instagram y TikTok?",
          a: "Sí: bios, captions y nombres visibles de ambas aceptan las letras itálicas. Usuarios y hashtags quedan planos — un hashtag con estilo no se indexa ni se puede tocar.",
        },
        {
          q: "¿El texto itálico está bien para lectores de pantalla?",
          a: "Algunos anuncian las letras matemáticas una por una o las deletrean raro. Una o dos palabras no molestan; un párrafo entero de itálica Unicode es genuinamente difícil de escuchar.",
        },
        {
          q: "¿Por qué la letra h se ve distinta?",
          a: "El estilo clásico usa la histórica ℎ — el símbolo de la constante de Planck — para la h, y se aparta un poco del resto del alfabeto. Es fiel al rango de Unicode, no un fallo.",
        },
      ],
    },
  },

  "tiny-text-generator": {
    es: {
      navName: "Pequeñas",
      h1: "Generador de letras pequeñas",
      title: "Generador de letras pequeñas — superíndice y subíndice",
      description:
        "Encoge tu texto con superíndices y subíndices Unicode. Dos estilos tiny para bios y comentarios, vista previa al instante y copia con un toque.",
      intro: [
        "Encoge tus palabras a tamaño susurro. El superíndice flota tu texto sobre la línea; el subíndice lo hunde debajo. Ambos se copian como texto plano, directo a bios, notas al pie y comentarios discretos.",
        "El texto tiny usa letras modificadoras en superíndice y subíndice de Unicode — los mismos caracteres con los que se arman las notas al pie y las fórmulas químicas. Es el estilo más parcial del sitio: la mayoría de las minúsculas se convierte, pero algunas no tienen forma tiny, y las honestas se quedan en tamaño normal.",
      ],
      steps: [
        "Escribe la palabra o el apunte que quieras hacer tiny — susurro, H2O, nota:.",
        "Elige superíndice para un look levantado o subíndice para uno hundido; los dígitos tiny están cubiertos por completo.",
        "Copia y pega en una bio, un apunte estilo nota al pie o un comentario discreto.",
        "Si los huecos donde la letra queda normal te molestan, las versalitas dan una sensación parecida con cobertura completa.",
      ],
      about: {
        heading: "Tamaño susurro, huecos honestos",
        paragraphs: [
          "Todo lo que no tenga forma tiny se queda en tamaño normal: la mayoría de las mayúsculas, la q en superíndice, y b, c, d, f, g, q, w, y y z en subíndice — por eso los resultados mixtos son lo normal aquí. El generador no finge las letras que faltan con sustitutos que pueden no verse. Los dígitos son la excepción: los superíndices y subíndices están completos, del ⁰ al ⁹ y del ₀ al ₉.",
          "Mejor encaje: apuntes estilo nota al pie en bios — ella/ella, créditos mini —, química y mates al revés en cuentas de estudio, y comentarios discretos al lado de texto más llamativo. Va mejor con una o dos palabras, no con frases, y nunca para información que alguien deba poder leer.",
        ],
      },
      faq: [
        {
          q: "¿Por qué unas letras son grandes y otras pequeñas?",
          a: "Unicode no tiene forma de superíndice o subíndice para todas las letras. Las que faltan quedan en tamaño normal — es el precio conocido del estilo, no un fallo del generador.",
        },
        {
          q: "¿Puedo escribir números tiny?",
          a: "Sí — los dígitos en superíndice y subíndice están completos, del ⁰ al ⁹ y del ₀ al ₉. Por eso el H₂O sale perfecto.",
        },
        {
          q: "¿Se lee bien el texto tiny?",
          a: "En tamaño de bio, casi. Va mejor con una o dos palabras, no con frases — y nunca para información que deba ser accesible.",
        },
        {
          q: "¿Puedo usar texto tiny en mi bio de Instagram?",
          a: "Sí: las letras en superíndice y subíndice se pegan en bios y nombres visibles de Instagram. Cuentan como caracteres normales en el límite, así que deja la parte tiny en una o dos palabras.",
        },
        {
          q: "¿Es accesible el texto tiny?",
          a: "La verdad, no mucho. Los lectores de pantalla pueden saltarse las letras modificadoras o leerlas en desorden, y el tamaño cansa a escala de bio. Úsalo para el sabor, nunca para lo sustancioso.",
        },
        {
          q: "¿Por qué el texto tiny se ve desparejo en algunos teléfonos?",
          a: "Cada fuente dibuja las letras modificadoras a un tamaño un poco distinto, y donde falta una letra, la original en tamaño normal crea huecos. Las versalitas son la opción más estable si la mezcla te molesta.",
        },
      ],
    },
  },
};
