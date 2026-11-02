// Roblox account page: display-name Help, not Berry Avenue in-experience kits.
// The Help article states the seven-day rule. It does not restate a 3–20 length.

import type { FaqItem, TextLink } from "@/components/sections";
import type { Locale } from "../i18n";

export const ROBLOX_ACCOUNT_SOURCES = {
  displayNameHelp:
    "https://en.help.roblox.com/hc/en-us/articles/4401938870292-Changing-Your-Display-Name",
  communityStandards: "https://about.roblox.com/community-standards",
  safety: "https://en.help.roblox.com/hc/en-us/articles/203313120-Safety-Features-Chat-Privacy-Filtering",
} as const;

const HELP = ROBLOX_ACCOUNT_SOURCES.displayNameHelp;
const STANDARDS = ROBLOX_ACCOUNT_SOURCES.communityStandards;
const SAFETY = ROBLOX_ACCOUNT_SOURCES.safety;

export interface RobloxExtra {
  faq: FaqItem[];
  links: TextLink[];
  safety: { heading: string; body: string };
  berryBefore: string;
  berryLabel: string;
  berryAfter: string;
}

export const robloxExtra: Record<Locale, RobloxExtra> = {
  en: {
    faq: [
      {
        q: "How often can I change my Roblox display name?",
        a: "Roblox's Help article says you can change a display name once every 7 days.",
      },
      {
        q: "What happens if Roblox rejects my display name?",
        a: "Roblox's Help article says a display name that breaks the rules can be reset to your username. Use fewer rare symbols, and read the name on Roblox's own screen before you save.",
      },
    ],
    links: [
      { label: "Help article", href: HELP },
      { label: "Community Standards", href: STANDARDS },
      { label: "safety article", href: SAFETY },
    ],
    safety: {
      heading: "Children, safety, and screen readers",
      body: "Do not put a phone number, home address, or full legal name in a display name. Roblox's Community Standards limit sharing that personal information. Parents can limit a child's chat from the controls in Roblox's safety article. Screen readers often cannot speak styled Unicode as the word you typed. The name is converted in your browser and is not uploaded.",
    },
    berryBefore: "In-experience character names and signs are on the ",
    berryLabel: "Berry Avenue fonts",
    berryAfter: " page.",
  },
  es: {
    faq: [
      {
        q: "¿Cada cuánto puedo cambiar mi nombre visible de Roblox?",
        a: "El artículo de ayuda de Roblox dice que el nombre visible se puede cambiar una vez cada 7 días.",
      },
      {
        q: "¿Qué pasa si Roblox rechaza mi nombre visible?",
        a: "El artículo de ayuda de Roblox dice que un nombre visible que incumple las reglas puede volver a ser tu usuario. Usa menos símbolos raros y lee el nombre en la pantalla de Roblox antes de guardar.",
      },
    ],
    links: [
      { label: "artículo de ayuda", href: HELP },
      { label: "Community Standards", href: STANDARDS },
      { label: "artículo de seguridad", href: SAFETY },
    ],
    safety: {
      heading: "Niños, seguridad y lectores de pantalla",
      body: "No pongas un teléfono, una dirección ni tu nombre legal completo en el nombre visible. Las Community Standards de Roblox limitan compartir esos datos. Un padre puede limitar el chat de un niño desde los controles del artículo de seguridad de Roblox. Los lectores de pantalla a menudo no pronuncian el Unicode con estilo como la palabra que escribiste. El nombre se convierte en tu navegador y no se sube.",
    },
    berryBefore: "Los nombres de personaje y los letreros dentro de la experiencia están en la página de ",
    berryLabel: "fuentes de Berry Avenue",
    berryAfter: ".",
  },
  "pt-br": {
    faq: [
      {
        q: "Com que frequência posso trocar meu nome de exibição no Roblox?",
        a: "O artigo de ajuda do Roblox diz que o nome de exibição só pode ser trocado uma vez a cada 7 dias.",
      },
      {
        q: "O que acontece se o Roblox recusar meu nome de exibição?",
        a: "O artigo de ajuda do Roblox diz que um nome de exibição que fere as regras pode ser redefinido para o seu usuário. Use menos símbolos raros e leia o nome na tela do Roblox antes de salvar.",
      },
    ],
    links: [
      { label: "artigo de ajuda", href: HELP },
      { label: "Community Standards", href: STANDARDS },
      { label: "artigo de segurança", href: SAFETY },
    ],
    safety: {
      heading: "Crianças, segurança e leitores de tela",
      body: "Não coloque telefone, endereço nem o nome legal completo no nome de exibição. As Community Standards do Roblox limitam compartilhar esses dados. Um responsável pode limitar o chat de uma criança nos controles do artigo de segurança do Roblox. Leitores de tela em geral não falam o Unicode estilizado como a palavra que você digitou. O nome é convertido no seu navegador e não é enviado.",
    },
    berryBefore: "Nomes de personagem e placas dentro da experiência ficam na página de ",
    berryLabel: "fontes de Berry Avenue",
    berryAfter: ".",
  },
  "zh-cn": {
    faq: [
      {
        q: "Roblox 显示名多久能改一次？",
        a: "Roblox 帮助文章写明，显示名每 7 天只能改一次。",
      },
      {
        q: "如果 Roblox 拒绝我的显示名会怎样？",
        a: "Roblox 帮助文章写明，违反规则的显示名可能被重置为用户名。少堆稀有符号，保存前在 Roblox 自己的界面里读一遍。",
      },
    ],
    links: [
      { label: "帮助文章", href: HELP },
      { label: "Community Standards", href: STANDARDS },
      { label: "安全文章", href: SAFETY },
    ],
    safety: {
      heading: "儿童、安全与读屏",
      body: "不要在显示名里写电话、住址或完整法定姓名。Roblox 的 Community Standards 限制分享这些个人信息。家长可以根据 Roblox 安全文章里的控制项限制孩子的聊天。读屏软件通常没法把花体 Unicode 读成你输入的那个词。名字在你的浏览器里转换，不会上传。",
    },
    berryBefore: "体验内的角色名和牌子在",
    berryLabel: "Berry Avenue 字体",
    berryAfter: "这一页。",
  },
  id: {
    faq: [
      {
        q: "Seberapa sering saya bisa mengganti nama tampilan Roblox?",
        a: "Artikel bantuan Roblox mengatakan nama tampilan hanya bisa diganti sekali setiap 7 hari.",
      },
      {
        q: "Apa yang terjadi jika Roblox menolak nama tampilan saya?",
        a: "Artikel bantuan Roblox mengatakan nama tampilan yang melanggar aturan dapat dikembalikan menjadi username. Kurangi simbol langka, dan baca namanya di layar Roblox sebelum menyimpan.",
      },
    ],
    links: [
      { label: "Artikel bantuan", href: HELP },
      { label: "Community Standards", href: STANDARDS },
      { label: "artikel keamanan", href: SAFETY },
    ],
    safety: {
      heading: "Anak, keamanan, dan pembaca layar",
      body: "Jangan tulis nomor telepon, alamat rumah, atau nama legal lengkap di nama tampilan. Community Standards Roblox membatasi pembagian informasi pribadi itu. Orang tua dapat membatasi chat anak dari kontrol di artikel keamanan Roblox. Pembaca layar sering tidak mengucapkan Unicode bergaya sebagai kata yang kamu ketik. Nama diubah di browser kamu dan nama itu tidak diunggah.",
    },
    berryBefore: "Nama karakter dan papan di dalam experience ada di halaman ",
    berryLabel: "font Berry Avenue",
    berryAfter: ".",
  },
};

export function robloxPageFaq(locale: Locale, base: readonly FaqItem[]): FaqItem[] {
  const seen = new Set(base.map((item) => item.q));
  return [...base, ...robloxExtra[locale].faq.filter((item) => !seen.has(item.q))];
}

export function robloxWhyAnswer(locale: Locale): string {
  if (locale === "en") {
    return "Roblox's Help article says display names are filtered, and a name that breaks the rules can be reset to your username. Community Standards cover what the filter is for. Confirm the saved name on Roblox's own screen.";
  }
  if (locale === "es") {
    return "El artículo de ayuda de Roblox dice que los nombres visibles pasan por filtros y que uno que incumple las reglas puede volver a ser tu usuario. Las Community Standards explican esas reglas. Confirma el nombre guardado en la pantalla de Roblox.";
  }
  if (locale === "pt-br") {
    return "O artigo de ajuda do Roblox diz que os nomes de exibição passam por filtros e que um nome que fere as regras pode ser redefinido para o seu usuário. As Community Standards explicam essas regras. Confira o nome salvo na tela do Roblox.";
  }
  if (locale === "zh-cn") {
    return "Roblox 帮助文章写明，显示名会经过过滤，违反规则的名字可能被重置为用户名。Community Standards 说明这些规则。在 Roblox 自己的界面里确认已经保存的名字。";
  }
  return "Artikel bantuan Roblox mengatakan nama tampilan melewati filter, dan nama yang melanggar aturan dapat dikembalikan menjadi username. Community Standards menjelaskan aturan itu. Konfirmasi nama yang tersimpan di layar Roblox.";
}
