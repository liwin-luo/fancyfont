// Coquette paste sets and a short screen-reader note.
// Username vs display name is already in the page FAQ. No Meta charset table.

import type { FaqItem } from "@/components/sections";
import type { Locale } from "../i18n";
import {
  COQUETTE_KIT_TEMPLATES,
  type CoquetteKitId,
  type CoquettePieceKey,
  type CoquetteTemplate,
} from "../coquette-scenarios";

export interface CoquetteKitCopy {
  id: CoquetteKitId;
  title: string;
  blurb: string;
  template: CoquetteTemplate;
}

export interface CoquetteExtra {
  faq: FaqItem[];
  safety: { heading: string; body: string };
  kits: {
    heading: string;
    intro: string;
    nameLabel: string;
    pieces: Record<CoquettePieceKey, string>;
    count: string;
    items: CoquetteKitCopy[];
  };
}

function kit(id: CoquetteKitId, title: string, blurb: string): CoquetteKitCopy {
  return { id, title, blurb, template: COQUETTE_KIT_TEMPLATES[id] };
}

const piecesEn: Record<CoquettePieceKey, string> = {
  display: "Display name",
  bio: "Bio line",
  tiktok: "TikTok name",
  caption: "Caption",
  plain: "Plain backup",
};

export const coquetteExtra: Record<Locale, CoquetteExtra> = {
  en: {
    faq: [],
    safety: {
      heading: "Screen readers",
      body: "Screen readers often cannot speak styled Unicode as the word you typed. Keep a plain-text backup. FancyFont converts the name in your browser and does not upload it.",
    },
    kits: {
      heading: "Sets to paste",
      intro:
        "Type a name and these lines rebuild in your browser. The small bow 𐙚 can show up as an empty box; if it does, copy a row that uses 🎀. Each set keeps a plain-text backup. Usernames stay plain. What the app accepts is up to the app.",
      nameLabel: "Your name",
      pieces: piecesEn,
      count: "{count} characters",
      items: [
        kit("bio", "Instagram bio", "A display name with a ribbon, plus a short bio line. Do not put this in the username."),
        kit("tiktok", "TikTok name", "A short display-style name. Check it in the app."),
        kit("caption", "Caption", "A caption with the small bow. If that bow becomes a box, use the ribbon set."),
        kit("discord", "Discord nickname", "A short nickname with a ribbon loop. This is not the username."),
      ],
    },
  },
  es: {
    faq: [],
    safety: {
      heading: "Lectores de pantalla",
      body: "Los lectores de pantalla a menudo no pronuncian el Unicode con estilo como la palabra que escribiste. Guarda el texto plano. FancyFont convierte el nombre en tu navegador y no se sube.",
    },
    kits: {
      heading: "Conjuntos para pegar",
      intro:
        "Escribe un nombre y estas líneas se rehacen en el navegador. El lazo pequeño 𐙚 puede salir como un cuadro vacío; si pasa, copia una fila que use 🎀. Cada conjunto guarda el texto plano. El usuario se queda plano. Lo que la app acepta lo decide la app.",
      nameLabel: "Tu nombre",
      pieces: {
        display: "Nombre visible",
        bio: "Línea de bio",
        tiktok: "Nombre en TikTok",
        caption: "Descripción",
        plain: "Texto plano",
      },
      count: "{count} caracteres",
      items: [
        kit("bio", "Bio de Instagram", "Un nombre visible con cinta y una línea corta de bio. No lo pongas en el usuario."),
        kit("tiktok", "Nombre de TikTok", "Un nombre corto, al estilo del nombre visible. Compruébalo en la app."),
        kit("caption", "Descripción", "Una descripción con el lazo pequeño. Si ese lazo sale como un cuadro, usa el conjunto de la cinta."),
        kit("discord", "Apodo de Discord", "Un apodo corto con un lazo. No es el usuario."),
      ],
    },
  },
  "pt-br": {
    faq: [],
    safety: {
      heading: "Leitores de tela",
      body: "Leitores de tela em geral não falam o Unicode estilizado como a palavra que você digitou. Guarde o texto puro. A conversão acontece no seu navegador e o texto não é enviado.",
    },
    kits: {
      heading: "Combinações para colar",
      intro:
        "Digite o nome e as linhas se reconstroem aqui, no seu navegador. O laço pequeno 𐙚 pode aparecer como um quadrado; se isso acontecer, copie a linha com 🎀. Cada conjunto guarda o texto puro. O usuário continua simples. O que o app aceita, o app decide.",
      nameLabel: "Seu nome",
      pieces: {
        display: "Nome de exibição",
        bio: "Linha da bio",
        tiktok: "Nome no TikTok",
        caption: "Legenda",
        plain: "Texto puro",
      },
      count: "{count} caracteres",
      items: [
        kit(
          "bio",
          "Bio do Instagram",
          "Nome de exibição com fita e uma linha curta de bio. Não coloque isso no usuário.",
        ),
        kit("tiktok", "Nome no TikTok", "Um nome curto, no estilo de nome de exibição. Confira no app."),
        kit(
          "caption",
          "Legenda",
          "Uma legenda com o laço pequeno. Se ele virar um quadrado, use o conjunto da fita 🎀.",
        ),
        kit("discord", "Apelido no Discord", "Um apelido curto com fita. Não é o nome de usuário."),
      ],
    },
  },
  "zh-cn": {
    faq: [],
    safety: {
      heading: "读屏",
      body: "读屏软件通常没法把花体 Unicode 读成你输入的那个词。留一份纯文本。转换发生在你的浏览器里，文字不会上传。",
    },
    kits: {
      heading: "用来粘贴的套装",
      intro:
        "输入名字后，这些行在浏览器里重做。小蝴蝶结 𐙚 可能变成空方框；如果这样，就复制带 🎀 的那一行。每套都留纯文本。用户名保持普通字符。App 收哪些字符，以 App 为准。",
      nameLabel: "你的名字",
      pieces: {
        display: "展示名",
        bio: "简介一行",
        tiktok: "TikTok 名字",
        caption: "配文",
        plain: "纯文本",
      },
      count: "{count} 个字符",
      items: [
        kit("bio", "Instagram 简介", "带丝带的展示名，再加一行短简介。不要放进用户名。"),
        kit("tiktok", "TikTok 名字", "一个短的展示名风格。到 App 里再看一眼。"),
        kit("caption", "配文", "配文用小蝴蝶结。如果它变成方框，改用丝带那一套。"),
        kit("discord", "Discord 昵称", "一个带丝带的短昵称。这不是用户名。"),
      ],
    },
  },
  id: {
    faq: [],
    safety: {
      heading: "Pembaca layar",
      body: "Pembaca layar sering tidak mengucapkan Unicode bergaya sebagai kata yang kamu ketik. Simpan teks biasa. FancyFont mengubah nama di browser kamu dan tidak diunggah.",
    },
    kits: {
      heading: "Set untuk ditempel",
      intro:
        "Ketik nama dan baris ini disusun ulang di browser. Pita kecil 𐙚 bisa tampil sebagai kotak kosong; kalau begitu, salin baris yang memakai 🎀. Setiap set menyimpan teks biasa. Username tetap biasa. Karakter yang diterima aplikasi, aplikasi yang menentukan.",
      nameLabel: "Namamu",
      pieces: {
        display: "Nama tampilan",
        bio: "Baris bio",
        tiktok: "Nama TikTok",
        caption: "Keterangan",
        plain: "Teks biasa",
      },
      count: "{count} karakter",
      items: [
        kit("bio", "Bio Instagram", "Nama tampilan dengan pita, plus satu baris bio pendek. Jangan taruh ini di username."),
        kit("tiktok", "Nama TikTok", "Nama pendek dengan gaya nama tampilan. Cek di aplikasinya."),
        kit("caption", "Keterangan", "Keterangan dengan pita kecil. Kalau pita itu jadi kotak, pakai set pita 🎀."),
        kit("discord", "Nama panggilan Discord", "Nama panggilan pendek dengan pita. Ini bukan username."),
      ],
    },
  },
};

export function coquettePageFaq(locale: Locale, base: readonly FaqItem[]): FaqItem[] {
  const seen = new Set(base.map((item) => item.q));
  return [...base, ...coquetteExtra[locale].faq.filter((item) => !seen.has(item.q))];
}
