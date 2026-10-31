// Spanish copy for the platform preset pages.

import type { PlatformPageCopy } from "./platform-pages-en";

export const platformPagesEs: Record<string, PlatformPageCopy> = {
  "instagram-fonts": {
    navName: "Instagram",
    h1: "Fuentes para Instagram",
    title: "Fuentes para Instagram – letras bonitas para tu bio y nombre",
    description:
      "Letras Unicode con estilo para tu bio y nombre visible de Instagram — mira cómo queda cada estilo y cópialo en un toque.",
    intro:
      "Instagram no tiene selector de fuentes. El borrador de abajo es para la bio, y los saltos de línea ya están puestos. El nombre visible es el campo corto, unos 30 caracteres, y el usuario se queda simple.",
    defaultText: "Instagram",
    bios: [
      { id: "name", label: "Nombre y símbolos", text: "Alex\n\n♡ ✦ ♡" },
      { id: "line", label: "Una línea sobre ti", text: "café y paseos\n\n✦" },
      { id: "note", label: "Nombre y una nota", text: "Alex\n\nrecién llegado" },
    ],
    presets: [
      { label: "Marco suave", left: "✦ ", right: " ✦", transform: "script" },
      { label: "Espaciado aesthetic", left: "", right: "", transform: "fullwidth" },
      { label: "Lazos tiernos", left: "୨୧ ", right: " ୨୧", transform: "smallCaps" },
      { label: "Intro en negrita", left: "「 ", right: " 」", transform: "sansBold" },
    ],
    guidance: [
      {
        label: "Nombre visible",
        body: "Unos 30 caracteres. El texto con estilo funciona aquí y es donde las letras más lucen — aparece en comentarios y en el feed de tus seguidores.",
      },
      {
        label: "Bio",
        body: "Unos 150 caracteres. Letras, símbolos y combinaciones decorativas funcionan, y los saltos de línea se mantienen — el sitio ideal para tu nombre con estilo o una línea de acento.",
      },
      {
        label: "Usuario",
        body: "Solo letras, números, puntos y guiones bajos. Aquí no hay fuentes Unicode — deja tu usuario simple y pon el estilo en el nombre visible.",
      },
    ],
    compatNote:
      "Son caracteres Unicode, no una función de Instagram — Instagram puede cambiar cómo los muestra en cualquier momento. Hoy aguantan bien en bios y nombres visibles, pero siempre pega y revisa en tu propia cuenta primero.",
    faq: [
      {
        q: "¿Cómo pongo estas fuentes en mi bio de Instagram?",
        a: "Convierte tu texto arriba y cópialo. En Instagram, ve a Editar perfil, pega en Bio o Nombre y guarda. Revisa el resultado en la app y en la versión web.",
      },
      {
        q: "¿Me pueden bloquear por usar fuentes en la bio?",
        a: "El texto con estilo en tu nombre o bio es contenido normal de perfil, no una infracción conocida. No lo uses en tu usuario, cumple las reglas de Instagram y estarás igual que millones de perfiles.",
      },
      {
        q: "¿Por qué algunos seguidores ven cuadritos?",
        a: "Su dispositivo o versión de Instagram no tiene el glifo. Quedarte con estilos populares como cursiva, versalitas y negrita reduce ese riesgo.",
      },
    ],
  },
  "tiktok-fonts": {
    navName: "TikTok",
    h1: "Fuentes para TikTok",
    title: "Fuentes para TikTok – apodos y bio con estilo",
    description:
      "Letras Unicode con estilo para tu apodo y bio de TikTok — previsualiza, copia y pega en tu perfil en segundos.",
    intro:
      "Las opciones de texto de TikTok se acaban en su editor de video. Tu apodo y tu bio aceptan Unicode — elige un estilo abajo y pégalo en tu perfil.",
    defaultText: "TikTok",
    bios: [
      { id: "name", label: "Nombre y una marca", text: "Alex\n\n♪" },
      { id: "line", label: "De qué trata", text: "clips diarios\n\n★" },
      { id: "note", label: "Nombre y una nota", text: "Alex\npor los edits" },
    ],
    presets: [
      { label: "Marco de clan", left: "꧁༒ ", right: " ༒꧂", transform: "boldScript" },
      { label: "Acento brillante", left: "⋆｡˚ ", right: " ˚｡⋆", transform: "smallCaps" },
      { label: "Onda ancha", left: "", right: "", transform: "fullwidth" },
      { label: "Marco de corazón", left: "♡ ", right: " ♡", transform: "script" },
    ],
    guidance: [
      {
        label: "Apodo",
        body: "Unos 24 caracteres, y el texto con estilo más visible de tu perfil — aparece en cada video. Los caracteres con estilo funcionan aquí.",
      },
      {
        label: "Bio",
        body: "Unos 80 caracteres — corta. Una línea con tu nombre con estilo más una combinación compacta suele caber; el texto ancho consume el límite rápido.",
      },
      {
        label: "Usuario",
        body: "Solo letras, números, puntos y guiones bajos. El usuario nunca acepta fuentes con estilo — decora tu apodo en su lugar.",
      },
    ],
    compatNote:
      "Son caracteres Unicode, no una función de TikTok, y TikTok controla cómo se muestran. Hoy los apodos y bios aguantan texto con estilo — prueba en tu propia cuenta y recuerda que las reglas pueden cambiar.",
    faq: [
      {
        q: "¿Cómo cambio mi apodo de TikTok a una fuente con estilo?",
        a: "Copia tu nombre con estilo arriba, abre TikTok → Perfil → Editar perfil → Nombre, pega y guarda. Tu apodo se actualiza en todos lados donde aparecen tus videos.",
      },
      {
        q: "¿Las fuentes funcionan en comentarios y descripciones?",
        a: "Sí — comentarios y descripciones aceptan caracteres Unicode. El texto con estilo luce más en el apodo, que aparece en cada video.",
      },
      {
        q: "¿Por qué se borró parte de mi bio con estilo?",
        a: "El límite de la bio es corto y algunas plataformas recortan caracteres inusuales. Prueba un estilo más simple o acorta el texto de alrededor.",
      },
    ],
  },
  "discord-fonts": {
    navName: "Discord",
    h1: "Fuentes para Discord",
    title: "Fuentes para Discord – estilos para apodos y estado",
    description:
      "Letras Unicode con estilo para apodos y estados de Discord — con notas honestas sobre dónde aplica el formato markdown real de Discord.",
    intro:
      "Los apodos y estados personalizados de Discord no tienen botones de formato — el Unicode llena ese hueco. Elige un estilo, cópialo y pégalo en tu perfil.",
    defaultText: "Discord",
    bios: [
      { id: "name", label: "Nombre y estado", text: "Alex\n\nescuchando" },
      { id: "line", label: "Qué estás haciendo", text: "en una llamada\n\n✦" },
      { id: "note", label: "Nota breve", text: "Alex\nausente" },
    ],
    presets: [
      { label: "Tag de servidor", left: "『", right: "』", transform: "monospace" },
      { label: "Modo mod", left: "† ", right: " †", transform: "fraktur" },
      { label: "Flex discreto", left: "", right: "", transform: "smallCaps" },
      { label: "Acento de estado", left: "✦ ", right: "", transform: "bold" },
    ],
    guidance: [
      {
        label: "Apodo / nombre visible",
        body: "Unos 32 caracteres, por servidor. El Unicode con estilo funciona — aquí lucen las letras, sobre todo con tags de servidor tipo 『tag』.",
      },
      {
        label: "Estado personalizado",
        body: "Unos 128 caracteres. Funcionan el texto con estilo y los símbolos; mantenlo corto para que se lea en la lista de miembros.",
      },
      {
        label: "Usuario",
        body: "Letras, números, puntos y guiones bajos, en minúsculas. Sin fuentes con estilo — Discord es estricto aquí.",
      },
      {
        label: "Mensajes",
        body: "Los mensajes de Discord tienen markdown real: **negrita**, *itálica*, __subrayado__ y ~~tachado~~. Usa markdown en el chat — los estilos Unicode son para lo que el markdown no alcanza.",
      },
    ],
    compatNote:
      "Son caracteres Unicode, no una función de Discord. Los dueños de servidores también pueden cambiar los permisos de apodo en cualquier momento. Hoy los estilos funcionan en apodos y estados — pega y revisa en tu servidor primero.",
    faq: [
      {
        q: "¿Cómo cambio mi apodo de Discord a una fuente con estilo?",
        a: "Copia el texto con estilo arriba, haz clic derecho en el icono del servidor → Editar perfil del servidor (o tu perfil de usuario), pega en el campo de apodo y guarda. Cambiar apodos en todo el servidor necesita el permiso correspondiente.",
      },
      {
        q: "¿Para qué usar fuentes Unicode si Discord tiene markdown?",
        a: "El markdown solo formatea mensajes. Tu apodo, estado y Acerca de mí no tienen opciones de formato — los estilos Unicode son la única negrita o cursiva que esos campos pueden tener.",
      },
      {
        q: "¿Por qué mi apodo con estilo se restablece en algunos servidores?",
        a: "Los dueños y los bots pueden restablecer o moderar apodos. Si solo cambia en un servidor, la culpa son las reglas de ese servidor — no los caracteres.",
      },
    ],
  },
  "roblox-name-generator": {
    navName: "Roblox",
    h1: "Generador de nombres para Roblox",
    title: "Generador de nombres para Roblox – nombres y límites reales",
    description:
      "Genera ideas de nombres visibles para Roblox con símbolos y estilos — y entiende la diferencia entre usuario y nombre visible.",
    intro:
      "Decora tu nombre de Roblox con símbolos y estilos — y sabe exactamente dónde se puede usar cada tipo de nombre, porque Roblox separa con línea dura el usuario del nombre visible.",
    defaultText: "ShadowHero",
    presets: [
      { label: "Marco de arena", left: "꧁ ", right: " ꧂", transform: "bold" },
      { label: "Tag pro", left: "✪ ", right: "", transform: "smallCaps" },
      { label: "Envuelto en estrellas", left: "★ ", right: " ★", transform: "identity" },
      { label: "Corchetes", left: "『", right: "』", transform: "bold" },
    ],
    guidance: [
      {
        label: "Usuario",
        body: "Tu identificador de acceso: 3–20 caracteres, letras, números y un solo guion bajo. Se aplica estricto — sin símbolos, espacios ni caracteres con estilo, nunca.",
      },
      {
        label: "Nombre visible",
        body: "El nombre que ven otros jugadores, cambiable en ajustes. Más flexible que el usuario, pero pasa por filtros — los estilos decorados pueden rechazarse o cambiarse. Prueba antes de gastar un cambio.",
      },
      {
        label: "Dónde encajan los estilos",
        body: "Deja tu nombre base simple y añade decoración que puedas quitar: si un juego o actualización rechaza símbolos, sigues teniendo un nombre limpio debajo.",
      },
    ],
    compatNote:
      "Roblox aplica sus propios filtros de caracteres a los nombres y los actualiza con el tiempo. Nada aquí garantiza que un nombre decorado se acepte — genera, copia y pruébalo en la pantalla de cambio de nombre de Roblox antes de decidirte.",
    faq: [
      {
        q: "¿Mi usuario de Roblox puede tener símbolos o fuentes?",
        a: "No. Los usuarios están limitados a letras, números y un guion bajo. Los estilos decorados solo aplican al nombre visible — y aun ahí, deciden los filtros de Roblox.",
      },
      {
        q: "¿Por qué me cambiaron el nombre visible?",
        a: "Roblox pasa los nombres visibles por filtros automáticos, y los nombres con muchos símbolos son blanco frecuente. Una combinación más simple, o tu base con un solo símbolo, sobrevive más seguido.",
      },
      {
        q: "¿Este generador tiene relación con Roblox?",
        a: "No — FancyFont es una herramienta independiente. Roblox y sus marcas pertenecen a Roblox Corporation; esta página solo te ayuda a elegir un nombre dentro de sus reglas.",
      },
    ],
  },
};
