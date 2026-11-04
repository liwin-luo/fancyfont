// Terms of use. `{email}` is replaced with the public inbox at render time.

import type { Locale, PageMeta } from "../i18n";

export interface TermsContent {
  meta: PageMeta;
  h1: string;
  updated: string;
  sections: { h2: string; body: string }[];
}

export const termsContent: Record<Locale, TermsContent> = {
  en: {
    meta: {
      title: "Terms of Use – FancyFont",
      description:
        "FancyFont is a free, independent browser tool. No account, no upload, and no affiliation with the games or apps named on the site.",
    },
    h1: "Terms of Use",
    updated: "Last updated: October 2026",
    sections: [
      {
        h2: "An independent site",
        body: "FancyFont at fancyfont.tools is an independent website. It is not made by, and is not affiliated with, Instagram, TikTok, Discord, Facebook, YouTube, Roblox, PUBG, Free Fire, or Call of Duty. Those names belong to their owners. They appear here only so you know where a result is meant to be pasted.",
      },
      {
        h2: "No account and no upload",
        body: "The tools run in your browser. There is no account. Text you type is not sent to FancyFont. Favorites and saved names stay in local storage on that device, and clearing site data removes them.",
      },
      {
        h2: "You decide where to paste",
        body: "You may copy the results into your own names, bios, and messages. Each app and game sets its own rules. A result that previews here can still be rejected, cut short, or shown as an empty box. Check it in the destination app before you rely on it.",
      },
      {
        h2: "Offered as-is",
        body: "The tools are free. There is no promise that a character will display, that a game will accept a name, or that the site will be available at every moment.",
      },
      {
        h2: "Changes",
        body: "If these terms change, the date at the top of this page changes with them. Using the site after that date means you accept the updated terms.",
      },
      {
        h2: "Contact",
        body: "Questions about these terms? Email {email}.",
      },
    ],
  },
  es: {
    meta: {
      title: "Términos de uso – FancyFont",
      description:
        "FancyFont es una herramienta gratuita e independiente en el navegador. Sin cuenta, sin subir texto y sin relación con los juegos o apps que nombra.",
    },
    h1: "Términos de uso",
    updated: "Última actualización: octubre de 2026",
    sections: [
      {
        h2: "Un sitio independiente",
        body: "FancyFont en fancyfont.tools es un sitio independiente. No está hecho por Instagram, TikTok, Discord, Facebook, YouTube, Roblox, PUBG, Free Fire ni Call of Duty, y no está vinculado a ellos. Esos nombres son de sus dueños. Aparecen aquí solo para indicar dónde se suele pegar un resultado.",
      },
      {
        h2: "Sin cuenta y sin envío",
        body: "Las herramientas corren en tu navegador. No hay cuenta. El texto que escribes no se envía a FancyFont. Los favoritos y los nombres guardados se quedan en el almacenamiento local de ese dispositivo, y se borran si limpias los datos del sitio.",
      },
      {
        h2: "Tú eliges dónde pegarlo",
        body: "Puedes copiar los resultados en tus nombres, biografías y mensajes. Cada app y cada juego pone sus propias reglas. Un resultado que se ve bien aquí puede ser rechazado, recortado o mostrarse como un cuadro vacío. Compruébalo en la app de destino antes de depender de él.",
      },
      {
        h2: "Se ofrece tal cual",
        body: "Las herramientas son gratis. No hay promesa de que un carácter se vea, de que un juego acepte un nombre, ni de que el sitio esté disponible en todo momento.",
      },
      {
        h2: "Cambios",
        body: "Si estos términos cambian, cambia la fecha al inicio de esta página. Usar el sitio después de esa fecha significa que aceptas los términos actualizados.",
      },
      {
        h2: "Contacto",
        body: "¿Dudas sobre estos términos? Escribe a {email}.",
      },
    ],
  },
  "pt-br": {
    meta: {
      title: "Termos de uso – FancyFont",
      description:
        "O FancyFont é uma ferramenta grátis e independente no navegador. Sem conta, sem envio de texto e sem ligação com os jogos ou apps citados.",
    },
    h1: "Termos de uso",
    updated: "Última atualização: outubro de 2026",
    sections: [
      {
        h2: "Um site independente",
        body: "O FancyFont em fancyfont.tools é um site independente. Não é feito por, nem tem ligação com, Instagram, TikTok, Discord, Facebook, YouTube, Roblox, PUBG, Free Fire ou Call of Duty. Esses nomes pertencem aos seus donos. Aparecem aqui só para indicar onde um resultado costuma ser colado.",
      },
      {
        h2: "Sem conta e sem envio",
        body: "As ferramentas rodam no seu navegador. Não há conta. O texto que você digita não é enviado ao FancyFont. Favoritos e nomes salvos ficam no armazenamento local daquele aparelho e somem se você limpar os dados do site.",
      },
      {
        h2: "Você escolhe onde colar",
        body: "Você pode copiar os resultados para seus nomes, bios e mensagens. Cada app e cada jogo define as próprias regras. Um resultado que aparece bem aqui ainda pode ser recusado, cortado ou virar um quadrado vazio. Confira no app de destino antes de depender dele.",
      },
      {
        h2: "Oferecido como está",
        body: "As ferramentas são grátis. Não há promessa de que um caractere vai aparecer, de que um jogo vai aceitar um nome, nem de que o site estará no ar o tempo todo.",
      },
      {
        h2: "Mudanças",
        body: "Se estes termos mudarem, a data no topo desta página muda junto. Usar o site depois dessa data significa que você aceita os termos atualizados.",
      },
      {
        h2: "Contato",
        body: "Dúvidas sobre estes termos? Escreva para {email}.",
      },
    ],
  },
  "zh-cn": {
    meta: {
      title: "使用条款 – FancyFont",
      description: "FancyFont 是独立的免费浏览器工具。无需账号，文字不会上传，也与站内提到的游戏和应用没有隶属关系。",
    },
    h1: "使用条款",
    updated: "最后更新：2026 年 10 月",
    sections: [
      {
        h2: "独立网站",
        body: "fancyfont.tools 上的 FancyFont 是一个独立网站。它不是 Instagram、TikTok、Discord、Facebook、YouTube、Roblox、PUBG、Free Fire 或使命召唤制作或隶属的产品。这些名称属于各自的权利人，出现在这里只是为了说明结果通常粘贴到哪里。",
      },
      {
        h2: "无需账号，也不会上传",
        body: "工具在你的浏览器里运行。没有账号。你输入的文字不会发送给 FancyFont。收藏和保存的名字留在那台设备的本地存储里，清除网站数据后就会消失。",
      },
      {
        h2: "粘贴到哪里由你决定",
        body: "你可以把结果复制到自己的名字、简介和消息里。每个应用和游戏都有自己的规则。这里预览正常的结果，仍可能被拒绝、被截断，或显示成空方框。在依赖它之前，先到目标应用里确认。",
      },
      {
        h2: "按现状提供",
        body: "工具免费提供。我们不保证某个字符一定能显示，不保证游戏一定会接受某个名字，也不保证网站每一刻都可用。",
      },
      {
        h2: "条款变更",
        body: "如果这些条款有改动，页面顶部的日期会一起更新。在该日期之后继续使用网站，即表示你接受更新后的条款。",
      },
      {
        h2: "联系",
        body: "对这些条款有疑问？请发邮件至 {email}。",
      },
    ],
  },
  id: {
    meta: {
      title: "Ketentuan penggunaan – FancyFont",
      description:
        "FancyFont adalah alat gratis dan independen di browser. Tanpa akun, tanpa unggah teks, dan tanpa afiliasi dengan game atau aplikasi yang disebut.",
    },
    h1: "Ketentuan penggunaan",
    updated: "Terakhir diperbarui: Oktober 2026",
    sections: [
      {
        h2: "Situs independen",
        body: "FancyFont di fancyfont.tools adalah situs independen. Situs ini tidak dibuat oleh, dan tidak berafiliasi dengan, Instagram, TikTok, Discord, Facebook, YouTube, Roblox, PUBG, Free Fire, atau Call of Duty. Nama-nama itu milik pemiliknya. Nama itu muncul di sini hanya untuk menunjukkan ke mana hasil biasanya ditempel.",
      },
      {
        h2: "Tanpa akun dan tanpa unggahan",
        body: "Alat berjalan di browsermu. Tidak ada akun. Teks yang kamu ketik tidak dikirim ke FancyFont. Favorit dan nama tersimpan tetap di penyimpanan lokal perangkat itu, dan hilang jika data situs dibersihkan.",
      },
      {
        h2: "Kamu yang memilih tempat menempel",
        body: "Kamu boleh menyalin hasil ke nama, bio, dan pesanmu sendiri. Setiap aplikasi dan game punya aturannya sendiri. Hasil yang tampil baik di sini tetap bisa ditolak, terpotong, atau muncul sebagai kotak kosong. Cek di aplikasi tujuan sebelum kamu mengandalkannya.",
      },
      {
        h2: "Disediakan apa adanya",
        body: "Alat ini gratis. Tidak ada janji bahwa sebuah karakter akan tampil, bahwa sebuah game akan menerima nama, atau bahwa situs akan tersedia setiap saat.",
      },
      {
        h2: "Perubahan",
        body: "Jika ketentuan ini berubah, tanggal di bagian atas halaman ini berubah bersamanya. Memakai situs setelah tanggal itu berarti kamu menerima ketentuan yang diperbarui.",
      },
      {
        h2: "Kontak",
        body: "Ada pertanyaan tentang ketentuan ini? Email {email}.",
      },
    ],
  },
};
