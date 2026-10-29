// About and Contact page copy per locale. Facts stay limited to what the
// product actually does: independent site, browser-side conversion, email
// contact. No invented team histories or response-time promises.

import type { Locale, PageMeta } from "../i18n";

export interface AboutContent {
  meta: PageMeta;
  h1: string;
  intro: string;
  sections: { h2: string; body: string }[];
  contactHeading: string;
  contactBody: string;
}

export interface ContactContent {
  meta: PageMeta;
  h1: string;
  intro: string;
  emailLabel: string;
  topicsHeading: string;
  topics: { title: string; body: string }[];
  responseNote: string;
}

export const aboutContent: Record<Locale, AboutContent> = {
  en: {
    meta: {
      title: "About FancyFont – Who Builds the Fancy Text Tools",
      description:
        "FancyFont is an independent, free tool site that turns letters into stylish Unicode text in your browser. Learn who runs it, how the pages are made, and how to reach us.",
    },
    h1: "About FancyFont",
    intro:
      "FancyFont turns plain A–Z text into stylish Unicode characters you can paste anywhere — 30 letter styles, decorated gaming nicknames, hundreds of copy-paste symbols, and blank space for invisible names. Everything is free, with no sign-up.",
    sections: [
      {
        h2: "What the tools do",
        body: "Every generator works on the same principle: it replaces the letters you type with look-alike characters from Unicode blocks — cursive, gothic, bubble, tiny, glitch, and more. The result is plain text, not a font file, so you paste it into profile names, bios, chats, and game nicknames. The site also lists 376 symbols and a blank-space copy tool for names that look empty.",
      },
      {
        h2: "Who runs it",
        body: "FancyFont is an independent site, built and maintained by a small team publishing under the FancyFont name. We are not affiliated with any of the apps, games, or platforms named in the tools — those names only describe where people paste the results. The site has no accounts and collects nothing you type.",
      },
      {
        h2: "How these pages are made",
        body: "Each style maps letters to characters from a documented Unicode block, and each page says which characters that block covers and where it may not display — some apps draw certain characters as boxes or fall back to plain letters. We revise the pages as platforms change what they accept, and the last-updated date in the footer tells you when the content was last revised.",
      },
      {
        h2: "Privacy by default",
        body: "Conversion runs entirely in your browser. The text you type is never uploaded to a server — there is no account system and no history beyond what your own browser stores on your device. The privacy policy has the details.",
      },
    ],
    contactHeading: "Talk to us",
    contactBody:
      "Found a style that breaks in your favorite app, or want one we don't have? Write to {email} or use the contact page.",
  },
  es: {
    meta: {
      title: "Quiénes somos – El equipo detrás de FancyFont",
      description:
        "FancyFont es un sitio independiente y gratuito que convierte letras en texto Unicode con estilo, directamente en tu navegador. Conoce quién lo mantiene y cómo contactarnos.",
    },
    h1: "Quiénes somos",
    intro:
      "FancyFont convierte texto normal de la A a la Z en caracteres Unicode con estilo que puedes pegar en cualquier parte: 30 estilos de letra, apodos de juego decorados, cientos de símbolos para copiar y espacio en blanco para nombres invisibles. Todo gratis y sin registro.",
    sections: [
      {
        h2: "Qué hacen las herramientas",
        body: "Todos los generadores funcionan con el mismo principio: sustituyen las letras que escribes por caracteres parecidos de bloques Unicode — cursiva, gótica, burbuja, mini, glitch y más. El resultado es texto normal, no un archivo de fuente, así que lo pegas en nombres de perfil, bios, chats y apodos de juegos. El sitio también reúne 376 símbolos y una herramienta de espacio en blanco para nombres que parecen vacíos.",
      },
      {
        h2: "Quién lo mantiene",
        body: "FancyFont es un sitio independiente, creado y mantenido por un equipo pequeño que publica bajo el nombre FancyFont. No tenemos ninguna relación con las apps, juegos o plataformas mencionados en las herramientas — esos nombres solo indican dónde pega la gente los resultados. El sitio no tiene cuentas y no recoge nada de lo que escribes.",
      },
      {
        h2: "Cómo se hacen estas páginas",
        body: "Cada estilo asigna letras a caracteres de un bloque Unicode documentado, y cada página indica qué caracteres cubre y dónde puede no mostrarse — algunas apps dibujan ciertos caracteres como cuadros o vuelven a letras normales. Revisamos las páginas cuando las plataformas cambian lo que aceptan, y la fecha de actualización del pie te dice cuándo se revisó el contenido por última vez.",
      },
      {
        h2: "Privacidad por defecto",
        body: "La conversión ocurre por completo en tu navegador. El texto que escribes nunca se sube a un servidor — no hay sistema de cuentas ni historial más allá de lo que tu propio navegador guarda en tu dispositivo. La política de privacidad tiene los detalles.",
      },
    ],
    contactHeading: "Escríbenos",
    contactBody:
      "¿Un estilo se ve mal en tu app favorita, o buscas uno que no tenemos? Escribe a {email} o usa la página de contacto.",
  },
  "pt-br": {
    meta: {
      title: "Sobre o FancyFont – Quem cria as ferramentas de letras",
      description:
        "O FancyFont é um site independente e gratuito que transforma letras em texto Unicode estilizado no seu navegador. Saiba quem mantém o site e como falar com a gente.",
    },
    h1: "Sobre o FancyFont",
    intro:
      "O FancyFont transforma texto comum de A a Z em caracteres Unicode estilizados que você cola em qualquer lugar — 30 estilos de letra, apelidos de jogo decorados, centenas de símbolos para copiar e espaço em branco para nomes invisíveis. Tudo grátis e sem cadastro.",
    sections: [
      {
        h2: "O que as ferramentas fazem",
        body: "Todos os geradores seguem o mesmo princípio: trocam as letras digitadas por caracteres parecidos de blocos Unicode — cursiva, gótica, bolha, mini, glitch e mais. O resultado é texto comum, não um arquivo de fonte, então você cola em nomes de perfil, bios, chats e apelidos de jogos. O site também reúne 376 símbolos e uma ferramenta de espaço em branco para nomes que parecem vazios.",
      },
      {
        h2: "Quem mantém o site",
        body: "O FancyFont é um site independente, criado e mantido por uma equipe pequena que publica sob o nome FancyFont. Não temos vínculo com os apps, jogos ou plataformas citados nas ferramentas — esses nomes só indicam onde as pessoas colam os resultados. O site não tem contas e não coleta nada do que você digita.",
      },
      {
        h2: "Como estas páginas são feitas",
        body: "Cada estilo mapeia letras para caracteres de um bloco Unicode documentado, e cada página diz quais caracteres esse bloco cobre e onde pode não aparecer — alguns apps desenham certos caracteres como quadrados ou voltam às letras simples. Revisamos as páginas conforme as plataformas mudam o que aceitam, e a data de atualização no rodapé mostra quando o conteúdo foi revisado pela última vez.",
      },
      {
        h2: "Privacidade por padrão",
        body: "A conversão acontece inteiramente no seu navegador. O texto que você digita nunca é enviado a um servidor — não há sistema de contas nem histórico além do que o seu próprio navegador guarda no seu aparelho. A política de privacidade tem os detalhes.",
      },
    ],
    contactHeading: "Fale com a gente",
    contactBody:
      "Um estilo aparece errado no seu app favorito, ou quer um que não temos? Escreva para {email} ou use a página de contato.",
  },
  "zh-cn": {
    meta: {
      title: "关于 FancyFont——做个性文字工具的团队",
      description:
        "FancyFont 是一个独立、免费的工具站，在你的浏览器里把字母转换成个性 Unicode 文字。了解我们是谁、页面怎么做的，以及如何联系我们。",
    },
    h1: "关于 FancyFont",
    intro:
      "FancyFont 把普通的 A–Z 文字转换成可以随处粘贴的个性 Unicode 字符——30 种字母样式、带装饰的游戏昵称、数百个可复制的符号，还有用于隐形名字的空白字符。全部免费，无需注册。",
    sections: [
      {
        h2: "这些工具做什么",
        body: "所有生成器基于同一个原理：把你输入的字母替换成 Unicode 区块里形状相近的字符——花体、哥特、气泡、小字、乱码等等。结果是纯文本，而不是字体文件，所以能粘贴到资料名、简介、聊天和游戏昵称里。站内还收录了 376 个符号，以及一个空白复制工具，用来做看起来空空的名字。",
      },
      {
        h2: "谁在运营",
        body: "FancyFont 是一个独立网站，由一个以 FancyFont 名义发布的小团队构建和维护。我们与工具中提到的任何应用、游戏或平台都没有隶属关系——那些名字只是说明大家把结果粘贴到哪里。网站没有账号系统，也不会收集你输入的内容。",
      },
      {
        h2: "这些页面怎么做的",
        body: "每种样式都把字母映射到某个有据可查的 Unicode 区块，每个页面都会说明该区块覆盖哪些字符、在哪里可能显示不出来——有些应用会把某些字符画成方框或回退成普通字母。平台调整规则时我们会随之修订页面，页脚的更新日期就是内容最后一次修订的时间。",
      },
      {
        h2: "默认保护隐私",
        body: "转换完全在你的浏览器里完成。你输入的文字不会被上传到任何服务器——没有账号系统，除了你自己的浏览器存在设备上的记录，也没有任何历史。细节见隐私政策。",
      },
    ],
    contactHeading: "联系我们",
    contactBody:
      "某个样式在你常用的应用里显示不对？或者想要我们没有的样式？写信到 {email}，或使用联系页。",
  },
  id: {
    meta: {
      title: "Tentang FancyFont – Tim di Balik Alat Huruf Keren",
      description:
        "FancyFont adalah situs mandiri dan gratis yang mengubah huruf menjadi teks Unicode keren langsung di browser kamu. Kenali siapa yang menjalankannya dan cara menghubungi kami.",
    },
    h1: "Tentang FancyFont",
    intro:
      "FancyFont mengubah teks biasa A–Z menjadi karakter Unicode keren yang bisa ditempel di mana saja — 30 gaya huruf, nama game berdekorasi, ratusan simbol siap salin, dan spasi kosong untuk nama yang terlihat tanpa nama. Semuanya gratis, tanpa daftar.",
    sections: [
      {
        h2: "Apa yang dilakukan alat-alat ini",
        body: "Semua generator bekerja dengan prinsip yang sama: mengganti huruf yang kamu ketik dengan karakter serupa dari blok Unicode — cursive, gothic, balon, kecil, glitch, dan lainnya. Hasilnya teks biasa, bukan file font, jadi kamu menempelnya di nama profil, bio, chat, dan nama game. Situs ini juga memuat 376 simbol dan alat spasi kosong untuk nama yang terlihat kosong.",
      },
      {
        h2: "Siapa yang menjalankannya",
        body: "FancyFont adalah situs mandiri, dibangun dan dirawat oleh tim kecil yang menerbitkan di bawah nama FancyFont. Kami tidak berafiliasi dengan aplikasi, game, atau platform mana pun yang disebut di alat-alat ini — nama-nama itu hanya menjelaskan tempat orang menempel hasilnya. Situs ini tidak punya akun dan tidak mengumpulkan apa pun yang kamu ketik.",
      },
      {
        h2: "Cara halaman-halaman ini dibuat",
        body: "Setiap gaya memetakan huruf ke karakter dari blok Unicode yang terdokumentasi, dan setiap halaman menjelaskan karakter apa saja yang dicakupnya serta di mana tampilannya bisa gagal — beberapa aplikasi menggambar karakter tertentu sebagai kotak atau kembali ke huruf biasa. Kami merevisi halaman saat platform mengubah aturannya, dan tanggal pembaruan di footer menunjukkan kapan konten terakhir direvisi.",
      },
      {
        h2: "Privasi sejak awal",
        body: "Konversi berjalan sepenuhnya di browser kamu. Teks yang kamu ketik tidak pernah diunggah ke server — tidak ada sistem akun dan tidak ada riwayat selain yang disimpan browsermu sendiri di perangkatmu. Kebijakan privasi memuat detailnya.",
      },
    ],
    contactHeading: "Hubungi kami",
    contactBody:
      "Ada gaya yang tampil salah di aplikasi favoritmu, atau ingin gaya yang belum ada? Tulis ke {email} atau gunakan halaman kontak.",
  },
};

export const contactContent: Record<Locale, ContactContent> = {
  en: {
    meta: {
      title: "Contact FancyFont – Questions, Bugs & Style Requests",
      description:
        "Reach the FancyFont team at hello@fancyfont.tools. Write us about display issues, style or symbol requests, privacy questions, or corrections.",
    },
    h1: "Contact us",
    intro:
      "The fastest way to reach the FancyFont team is email. One inbox, read by the people who build the site — no ticket system, no forms.",
    emailLabel: "Write to",
    topicsHeading: "What to write about",
    topics: [
      {
        title: "A style breaks where you pasted it",
        body: "Tell us which style, which app or game, and on what device. Character coverage differs per platform, and your report helps us say so on the right page.",
      },
      {
        title: "Style and symbol requests",
        body: "Missing a look or a symbol family? Suggest it — requests steer what gets added next.",
      },
      {
        title: "Privacy questions",
        body: "Ask anything about what the site stores (very little) and what it never sees (the text you type). See the privacy policy first — it may already answer you.",
      },
      {
        title: "Corrections, business and legal",
        body: "If a page states something wrong about your platform or game, or you have a business or legal matter, send the details and the page link.",
      },
    ],
    responseNote:
      "We read every message and fix what the messages show is broken. There is no phone line or live chat — email is the only channel.",
  },
  es: {
    meta: {
      title: "Contacto de FancyFont – Dudas, errores y peticiones",
      description:
        "Escribe al equipo de FancyFont en hello@fancyfont.tools. Cuéntanos problemas de visualización, peticiones de estilos o símbolos, dudas de privacidad o correcciones.",
    },
    h1: "Contacto",
    intro:
      "La forma más rápida de llegar al equipo de FancyFont es el correo. Un buzón, leído por quienes construyen el sitio — sin sistema de tickets ni formularios.",
    emailLabel: "Escribe a",
    topicsHeading: "Qué puedes contarnos",
    topics: [
      {
        title: "Un estilo se rompe donde lo pegaste",
        body: "Dinos qué estilo, en qué app o juego y en qué dispositivo. La cobertura de caracteres varía por plataforma, y tu reporte nos ayuda a indicarlo en la página correcta.",
      },
      {
        title: "Peticiones de estilos y símbolos",
        body: "¿Falta un look o una familia de símbolos? Propónlo — las peticiones guían lo que se añade después.",
      },
      {
        title: "Dudas de privacidad",
        body: "Pregunta lo que quieras sobre lo que el sitio guarda (muy poco) y lo que nunca ve (el texto que escribes). Antes, mira la política de privacidad — quizá ya responde tu duda.",
      },
      {
        title: "Correcciones, negocios y legal",
        body: "Si una página dice algo incorrecto sobre tu plataforma o juego, o tienes un asunto comercial o legal, envía los detalles y el enlace de la página.",
      },
    ],
    responseNote:
      "Leemos todos los mensajes y arreglamos lo que muestran que está roto. No hay teléfono ni chat en vivo — el correo es el único canal.",
  },
  "pt-br": {
    meta: {
      title: "Contato do FancyFont – Dúvidas, bugs e pedidos",
      description:
        "Fale com a equipe do FancyFont em hello@fancyfont.tools. Escreva sobre problemas de exibição, pedidos de estilos ou símbolos, dúvidas de privacidade ou correções.",
    },
    h1: "Contato",
    intro:
      "O jeito mais rápido de falar com a equipe do FancyFont é o e-mail. Uma caixa de entrada, lida por quem constrói o site — sem sistema de tickets nem formulários.",
    emailLabel: "Escreva para",
    topicsHeading: "Sobre o que escrever",
    topics: [
      {
        title: "Um estilo quebra onde você colou",
        body: "Diga qual estilo, em qual app ou jogo e em qual aparelho. A cobertura de caracteres varia por plataforma, e o seu relato nos ajuda a registrar isso na página certa.",
      },
      {
        title: "Pedidos de estilos e símbolos",
        body: "Faltou um visual ou uma família de símbolos? Sugira — os pedidos guiam o que vem a seguir.",
      },
      {
        title: "Dúvidas de privacidade",
        body: "Pergunte o que quiser sobre o que o site guarda (bem pouco) e o que ele nunca vê (o texto que você digita). Veja antes a política de privacidade — talvez ela já responda.",
      },
      {
        title: "Correções, negócios e jurídico",
        body: "Se uma página afirma algo errado sobre a sua plataforma ou jogo, ou você tem um assunto comercial ou jurídico, envie os detalhes e o link da página.",
      },
    ],
    responseNote:
      "Lemos todas as mensagens e corrigimos o que elas mostram que está quebrado. Não há telefone nem chat ao vivo — o e-mail é o único canal.",
  },
  "zh-cn": {
    meta: {
      title: "联系 FancyFont——问题、报错与样式建议",
      description:
        "通过 hello@fancyfont.tools 联系 FancyFont 团队。欢迎来信反馈显示问题、建议新样式或符号、咨询隐私问题或指出错误。",
    },
    h1: "联系我们",
    intro:
      "联系 FancyFont 团队最快的方式是邮件。一个收件箱，由搭建这个网站的人亲自阅读——没有工单系统，也没有表单。",
    emailLabel: "写信到",
    topicsHeading: "可以写些什么",
    topics: [
      {
        title: "样式粘贴后显示不对",
        body: "请告诉我们是哪个样式、在哪个应用或游戏、什么设备上。不同平台支持的字符不同，你的反馈能帮我们把说明写到对应的页面上。",
      },
      {
        title: "样式和符号建议",
        body: "缺某种外观或某类符号？提出来——大家的建议决定接下来加什么。",
      },
      {
        title: "隐私问题",
        body: "关于网站存了什么（非常少）、看不到什么（你输入的文字），都可以问。先看看隐私政策——也许已经有答案。",
      },
      {
        title: "纠错、商务与法务",
        body: "如果某个页面对你的平台或游戏描述有误，或有商务、法务事务，请发来详情和页面链接。",
      },
    ],
    responseNote:
      "每封邮件我们都会读，邮件反映出的问题我们会修。没有电话，也没有在线客服——邮件是唯一的渠道。",
  },
  id: {
    meta: {
      title: "Kontak FancyFont – Pertanyaan, Bug & Usulan Gaya",
      description:
        "Hubungi tim FancyFont di hello@fancyfont.tools. Tulis kepada kami soal masalah tampilan, usulan gaya atau simbol, pertanyaan privasi, atau koreksi.",
    },
    h1: "Kontak",
    intro:
      "Cara tercepat menghubungi tim FancyFont adalah email. Satu kotak masuk, dibaca oleh orang-orang yang membangun situs ini — tanpa sistem tiket, tanpa formulir.",
    emailLabel: "Tulis ke",
    topicsHeading: "Yang bisa kamu tuliskan",
    topics: [
      {
        title: "Gaya rusak di tempat kamu menempelnya",
        body: "Sebutkan gaya mana, di app atau game apa, dan di perangkat apa. Cakupan karakter berbeda di setiap platform, dan laporanmu membantu kami mencatatnya di halaman yang tepat.",
      },
      {
        title: "Usulan gaya dan simbol",
        body: "Kurang satu tampilan atau kelompok simbol? Usulkan — usulan menentukan apa yang ditambahkan berikutnya.",
      },
      {
        title: "Pertanyaan privasi",
        body: "Tanyakan apa saja tentang apa yang disimpan situs ini (sangat sedikit) dan apa yang tidak pernah dilihatnya (teks yang kamu ketik). Cek dulu kebijakan privasi — mungkin jawabannya sudah ada di sana.",
      },
      {
        title: "Koreksi, bisnis, dan hukum",
        body: "Jika ada halaman yang salah menyebutkan sesuatu tentang platform atau game kamu, atau kamu punya urusan bisnis atau hukum, kirimkan detailnya beserta tautan halamannya.",
      },
    ],
    responseNote:
      "Kami membaca setiap pesan dan memperbaiki yang terbukti rusak. Tidak ada telepon atau obrolan langsung — email adalah satu-satunya saluran.",
  },
};
