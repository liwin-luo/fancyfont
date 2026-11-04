// COD rename FAQ, a short screen-reader note, and three preview sets.
// Counts of 16 and clan length stay estimates. Official facts are the two Activision articles.

import type { FaqItem, TextLink } from "@/components/sections";
import type { Locale } from "../i18n";
import { COD_KIT_TEMPLATES, COD_SOURCES, type CodKitId, type CodPieceKey, type CodTemplate } from "../cod-scenarios";

const MOBILE = COD_SOURCES.mobile;
const ACTIVISION = COD_SOURCES.activisionId;

export interface CodKitCopy {
  id: CodKitId;
  title: string;
  blurb: string;
  template: CodTemplate;
}

export interface CodExtra {
  faq: FaqItem[];
  links: TextLink[];
  safety: { heading: string; body: string };
  kits: {
    heading: string;
    intro: string;
    nameLabel: string;
    pieces: Record<CodPieceKey, string>;
    count: string;
    clanHint: string;
    items: CodKitCopy[];
  };
}

function kit(id: CodKitId, title: string, blurb: string): CodKitCopy {
  return { id, title, blurb, template: COD_KIT_TEMPLATES[id] };
}

export const codExtra: Record<Locale, CodExtra> = {
  en: {
    faq: [
      {
        q: "Why should I preview a COD name before I confirm a rename?",
        a: "Styled letters are Unicode characters, and the game box can show them as □. A Call of Duty: Mobile rename costs 500 COD Points and can be done once every three days, so read the name back in the game's own preview before you confirm. Activision's Mobile account article lists that cost and wait.",
      },
      {
        q: "How much does a Call of Duty: Mobile name change cost, and how often?",
        a: "Activision's Mobile account article says a rename costs 500 COD Points and you can change the name once every three days. The flow uses a Name Changing Card (Rename Card); if you do not have one, the game prompts a purchase. The steps there are: tap the name, open Player Profile, choose Edit, type the new name, then Change.",
      },
      {
        q: "How do Activision ID / Warzone display name changes work?",
        a: "Activision's name-change article says games that use an Activision ID, including Warzone, spend rename tokens. You receive one new token every six months and can hold at most two. A name that fails the filter can be replaced with anon followed by digits, such as anon123456789012. If the name was changed for invalid characters and you held fewer than two tokens, Activision says a token is returned. A Code of Conduct change does not return one.",
      },
    ],
    links: [
      { label: "Mobile account article", href: MOBILE },
      { label: "name-change article", href: ACTIVISION },
    ],
    safety: {
      heading: "Read it back before you pay",
      body: "Screen readers often cannot speak styled Unicode as the word you typed. Keep a plain-text backup. FancyFont converts the name in your browser and does not upload it.",
    },
    kits: {
      heading: "Name sets to preview",
      intro:
        "These rows rebuild as you type. They stay in your browser. The clan line stays plain on purpose. Paste the player name into the game and read it back before you pay for a rename.",
      nameLabel: "Player name",
      pieces: { player: "Player name", clan: "Plain clan tag", plain: "Plain backup" },
      count: "{count} characters",
      clanHint: "Plain characters only. This short slice is a preview hint, not an official character cap.",
      items: [
        kit("ranked", "Ranked short", "Little decoration, so the name stays readable in a match."),
        kit(
          "clan",
          "Clan frame",
          "A light frame sits on the player name. The clan line is a few plain characters from what you typed. Do not paste the framed name into the clan tag.",
        ),
        kit(
          "modes",
          "Mobile and Warzone",
          "One short name, two rename systems. Call of Duty: Mobile spends 500 COD Points and allows one change every three days. An Activision ID display name, including Warzone, spends a rename token: one every six months, and you can hold two at most. Check which account the game is editing before you confirm.",
        ),
      ],
    },
  },
  es: {
    faq: [
      {
        q: "¿Por qué conviene previsualizar un nombre de COD antes de confirmar el cambio?",
        a: "Las letras con estilo son caracteres Unicode, y el recuadro del juego puede mostrarlas como □. En Call of Duty: Mobile el cambio cuesta 500 COD Points y solo se puede hacer una vez cada tres días, así que lee el nombre en la vista previa del propio juego antes de confirmar. El artículo de cuenta de Mobile describe ese coste y esa espera.",
      },
      {
        q: "¿Cuánto cuesta cambiar el nombre en Call of Duty: Mobile y cada cuánto se puede?",
        a: "El artículo de cuenta de Mobile dice que el cambio cuesta 500 COD Points y que el nombre se puede cambiar una vez cada tres días. El flujo usa una Name Changing Card (Rename Card); si no la tienes, el juego propone comprarla. Los pasos que describe: toca el nombre, abre Player Profile, elige Edit, escribe el nombre nuevo y pulsa Change.",
      },
      {
        q: "¿Cómo funcionan los cambios de nombre visible del ID de Activision y de Warzone?",
        a: "El artículo de cambio de nombre de Activision dice que los juegos con un ID de Activision, Warzone incluido, gastan rename tokens. Recibes un token nuevo cada seis meses y puedes guardar dos como máximo. Un nombre que no pasa el filtro puede quedar como anon seguido de dígitos, por ejemplo anon123456789012. Si el cambio fue por caracteres no válidos y tenías menos de dos tokens, Activision dice que devuelve un token. Un cambio por el Code of Conduct no lo devuelve.",
      },
    ],
    links: [
      { label: "artículo de cuenta de Mobile", href: MOBILE },
      { label: "artículo de cambio de nombre", href: ACTIVISION },
    ],
    safety: {
      heading: "Léelo antes de pagar",
      body: "Los lectores de pantalla a menudo no pronuncian el Unicode con estilo como la palabra que escribiste. Guarda una copia en texto plano. FancyFont convierte el nombre en tu navegador y no se sube.",
    },
    kits: {
      heading: "Conjuntos para previsualizar",
      intro:
        "Estas filas se rehacen mientras escribes y se quedan en el navegador. La línea del clan va en texto plano a propósito. Pega el nombre en el juego y léelo antes de pagar el cambio.",
      nameLabel: "Nombre del jugador",
      pieces: { player: "Nombre del jugador", clan: "Etiqueta plana", plain: "Copia plana" },
      count: "{count} caracteres",
      clanHint: "Solo caracteres planos. Este recorte es una pista del producto, no un tope oficial.",
      items: [
        kit("ranked", "Corto para ranked", "Poca decoración, para que el nombre se lea en la partida."),
        kit(
          "clan",
          "Marco de clan",
          "Un marco ligero va en el nombre. La línea del clan son unos pocos caracteres planos de lo que escribiste. No pegues el nombre enmarcado en la etiqueta.",
        ),
        kit(
          "modes",
          "Mobile y Warzone",
          "Un nombre corto y dos sistemas de cambio. Call of Duty: Mobile gasta 500 COD Points y permite un cambio cada tres días. El nombre visible de un ID de Activision, Warzone incluido, gasta un rename token: uno cada seis meses, y puedes guardar dos como máximo. Mira qué cuenta está editando el juego antes de confirmar.",
        ),
      ],
    },
  },
  "pt-br": {
    faq: [
      {
        q: "Por que ver o nome de COD antes de confirmar a troca?",
        a: "Letras estilizadas são caracteres Unicode, e a caixa do jogo pode mostrá-las como □. No Call of Duty: Mobile a troca custa 500 COD Points e só pode ser feita uma vez a cada três dias, então leia o nome na prévia do próprio jogo antes de confirmar. O artigo de conta do Mobile descreve esse custo e essa espera.",
      },
      {
        q: "Quanto custa trocar o nome no Call of Duty: Mobile e qual é o intervalo?",
        a: "O artigo de conta do Mobile diz que a troca custa 500 COD Points e que o nome só muda uma vez a cada três dias. O fluxo usa um Name Changing Card (Rename Card); se você não tiver, o jogo pede para comprar. Os passos descritos: toque no nome, abra Player Profile, escolha Edit, digite o nome novo e toque em Change.",
      },
      {
        q: "Como funciona a troca do nome de exibição do ID Activision e do Warzone?",
        a: "O artigo de troca de nome da Activision diz que jogos com um ID Activision, inclusive o Warzone, gastam rename tokens. Você recebe um token novo a cada seis meses e pode guardar no máximo dois. Um nome que não passa no filtro pode virar anon seguido de dígitos, por exemplo anon123456789012. Se a troca foi por caracteres inválidos e você tinha menos de dois tokens, a Activision diz que devolve um token. Uma troca por Code of Conduct não devolve.",
      },
    ],
    links: [
      { label: "artigo de conta do Mobile", href: MOBILE },
      { label: "artigo de troca de nome", href: ACTIVISION },
    ],
    safety: {
      heading: "Leia de novo antes de pagar",
      body: "Leitores de tela em geral não falam o Unicode estilizado como a palavra que você digitou. Guarde o texto puro. O FancyFont converte o nome no seu navegador e o texto não é enviado.",
    },
    kits: {
      heading: "Conjuntos para pré-visualizar",
      intro:
        "Estas linhas se reconstroem enquanto você digita e ficam no navegador. A linha do clã fica em texto simples de propósito. Cole o nome no jogo e leia de volta antes de pagar a troca.",
      nameLabel: "Nome do jogador",
      pieces: { player: "Nome do jogador", clan: "Tag simples", plain: "Texto puro" },
      count: "{count} caracteres",
      clanHint: "Só texto simples. Este recorte é uma dica do produto, não um teto oficial.",
      items: [
        kit("ranked", "Curto para ranked", "Pouca decoração, para o nome continuar legível na partida."),
        kit(
          "clan",
          "Moldura do clã",
          "Uma moldura leve fica no nome. A linha do clã são alguns caracteres simples do que você digitou. Não cole o nome com moldura na tag.",
        ),
        kit(
          "modes",
          "Mobile e Warzone",
          "Um nome curto e dois sistemas de troca. Call of Duty: Mobile gasta 500 COD Points e permite uma troca a cada três dias. O nome de exibição de um ID Activision, Warzone incluso, gasta um rename token: um a cada seis meses, e você pode guardar no máximo dois. Confira qual conta o jogo está editando antes de confirmar.",
        ),
      ],
    },
  },
  "zh-cn": {
    faq: [
      {
        q: "为什么要在确认 COD 改名之前先预览？",
        a: "花体是 Unicode 字符，游戏输入框里可能变成 □。使命召唤手游改名花费 500 COD Points，而且每三天只能改一次，所以确认前先在游戏自己的预览框里读一遍。这笔费用和间隔写在 Activision 的手游账号文章里。",
      },
      {
        q: "使命召唤手游改名要多少钱，多久能改一次？",
        a: "Activision 的手游账号文章写明，改名花费 500 COD Points，每三天只能改一次。流程需要 Name Changing Card（Rename Card）；没有的话游戏会提示购买。文章里的步骤是：点名字，打开 Player Profile，选 Edit，输入新名字，再点 Change。",
      },
      {
        q: "Activision ID 和 Warzone 的显示名怎么改？",
        a: "Activision 的改名文章写明，使用 Activision ID 的游戏（包括 Warzone）改显示名要消耗 rename token。每六个月获得 1 个新 token，同时最多持有两个。过滤后不合格的名字会变成 anon 加数字，例如 anon123456789012。如果是因为无效字符被改、而且当时持有的 token 少于两个，Activision 会补发一个 token。因 Code of Conduct 违规被改则不发。",
      },
    ],
    links: [
      { label: "手游账号文章", href: MOBILE },
      { label: "改名文章", href: ACTIVISION },
    ],
    safety: {
      heading: "付款前先读一遍",
      body: "读屏软件通常没法把花体 Unicode 读成你输入的那个词。留一份纯文本备份。FancyFont 在你的浏览器里转换名字，不会上传。",
    },
    kits: {
      heading: "用来预览的名字套装",
      intro: "输入时这些行会重做，而且留在浏览器里。战队那一行故意只用普通字符。把玩家名贴进游戏，付款前在游戏里读回来。",
      nameLabel: "玩家名",
      pieces: { player: "玩家名", clan: "普通战队标签", plain: "纯文本备份" },
      count: "{count} 个字符",
      clanHint: "只保留普通字符。这几字是产品提示，不是官方字数上限。",
      items: [
        kit("ranked", "排位短名", "装饰很少，对局里更容易读。"),
        kit("clan", "战队框", "玩家名加一圈轻框。战队行是你所输入内容里的几个普通字符。不要把带框的名字贴进战队标签。"),
        kit(
          "modes",
          "Mobile 和 Warzone",
          "同一个短名，两套改名规则。使命召唤手游花费 500 COD Points，每三天改一次。Activision ID 的显示名（包括 Warzone）消耗 rename token：每六个月 1 个，最多同时持有两个。确认前看清游戏改的是哪个账号。",
        ),
      ],
    },
  },
  id: {
    faq: [
      {
        q: "Mengapa nama COD perlu dilihat dulu sebelum mengganti nama dikonfirmasi?",
        a: "Huruf bergaya adalah karakter Unicode, dan kotak game bisa menampilkannya sebagai □. Ganti nama Call of Duty: Mobile dikenai biaya 500 COD Points dan hanya bisa dilakukan sekali setiap tiga hari, jadi baca namanya di pratinjau milik game sebelum kamu mengonfirmasi. Artikel akun Mobile menjelaskan biaya dan jeda itu.",
      },
      {
        q: "Berapa biaya ganti nama Call of Duty: Mobile, dan seberapa sering?",
        a: "Artikel akun Mobile dari Activision mengatakan biaya ganti nama 500 COD Points dan nama hanya bisa diganti sekali setiap tiga hari. Alurnya memakai Name Changing Card (Rename Card); kalau belum punya, game meminta pembelian. Langkah di artikel itu: ketuk nama, buka Player Profile, pilih Edit, ketik nama baru, lalu Change.",
      },
      {
        q: "Bagaimana ganti nama tampilan Activision ID dan Warzone bekerja?",
        a: "Artikel ganti nama Activision mengatakan game yang memakai Activision ID, termasuk Warzone, menghabiskan rename token. Kamu menerima satu token baru setiap enam bulan dan bisa menyimpan paling banyak dua. Nama yang gagal di filter bisa menjadi anon diikuti angka, misalnya anon123456789012. Jika nama diubah karena karakter tidak valid dan kamu memegang kurang dari dua token, Activision mengatakan satu token dikembalikan. Perubahan karena Code of Conduct tidak mengembalikan token.",
      },
    ],
    links: [
      { label: "Artikel akun Mobile", href: MOBILE },
      { label: "Artikel ganti nama", href: ACTIVISION },
    ],
    safety: {
      heading: "Baca ulang sebelum membayar",
      body: "Pembaca layar sering tidak mengucapkan Unicode bergaya sebagai kata yang kamu ketik. Simpan cadangan teks biasa. FancyFont mengubah nama di browser kamu dan nama itu tidak diunggah.",
    },
    kits: {
      heading: "Set nama untuk pratinjau",
      intro:
        "Baris ini disusun ulang saat kamu mengetik, dan tetap di browser. Baris klan sengaja berupa teks biasa. Tempel nama pemain ke game dan baca kembali sebelum membayar ganti nama.",
      nameLabel: "Nama pemain",
      pieces: { player: "Nama pemain", clan: "Tag klan biasa", plain: "Cadangan teks biasa" },
      count: "{count} karakter",
      clanHint: "Hanya karakter biasa. Potongan ini petunjuk produk, bukan batas resmi.",
      items: [
        kit("ranked", "Pendek untuk ranked", "Sedikit hiasan, supaya nama tetap terbaca di pertandingan."),
        kit(
          "clan",
          "Bingkai klan",
          "Bingkai ringan ada di nama pemain. Baris klan adalah beberapa karakter biasa dari yang kamu ketik. Jangan tempel nama berbingkai ke tag klan.",
        ),
        kit(
          "modes",
          "Mobile dan Warzone",
          "Satu nama pendek, dua sistem ganti nama. Call of Duty: Mobile menghabiskan 500 COD Points dan mengizinkan satu perubahan setiap tiga hari. Nama tampilan Activision ID, termasuk Warzone, menghabiskan rename token: satu setiap enam bulan, dan kamu bisa menyimpan paling banyak dua. Periksa akun mana yang sedang diedit game sebelum mengonfirmasi.",
        ),
      ],
    },
  },
};

export function codPageFaq(locale: Locale, base: readonly FaqItem[]): FaqItem[] {
  const seen = new Set(base.map((item) => item.q));
  return [...base, ...codExtra[locale].faq.filter((item) => !seen.has(item.q))];
}
