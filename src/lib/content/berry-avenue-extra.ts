// Extra Berry Avenue copy: troubleshooting FAQ, safety note, and scenario kits.
// Official URLs are the ones checked against Roblox Help, Creator docs, and
// the staff display-name announcement. The Help article states the seven-day
// rule and does not restate 3–20; that count is cited from the announcement.

import type { Locale } from "../i18n";
import type { ScenarioTemplate } from "../berry-scenarios";
import { ROBLOX_SOURCES } from "../berry-scenarios";
import type { FaqItem, TextLink } from "@/components/sections";

const HELP = ROBLOX_SOURCES.displayNameHelp;
const ANNOUNCE = ROBLOX_SOURCES.displayNameAnnouncement;
const CHAT = ROBLOX_SOURCES.experienceChat;
const SAFETY = ROBLOX_SOURCES.safety;
const FILTER = ROBLOX_SOURCES.textFiltering;
const STANDARDS = ROBLOX_SOURCES.communityStandards;

export interface BerryKitCopy {
  id: ScenarioTemplate["id"];
  title: string;
  blurb: string;
  template: ScenarioTemplate;
}

export interface BerryExtra {
  faq: FaqItem[];
  links: TextLink[];
  safety: { heading: string; body: string };
  kits: {
    heading: string;
    intro: string;
    nameLabel: string;
    pieces: Record<"display" | "bio" | "sign" | "plain", string>;
    boundedCount: string;
    openCount: string;
    outside: string;
    trimmed: string;
    items: BerryKitCopy[];
  };
}

const cuteDisplay = { left: "♡ ", right: "", transform: "boldScript" } as const;
const coolDisplay = { left: "★ ", right: "", transform: "smallCaps" } as const;
const horrorDisplay = { left: "", right: "", transform: "fraktur" } as const;

function kit(
  id: BerryKitCopy["id"],
  title: string,
  blurb: string,
  display: ScenarioTemplate["display"],
  bio: ScenarioTemplate["bio"],
  sign: ScenarioTemplate["sign"],
): BerryKitCopy {
  return { id, title, blurb, template: { id, display, bio, sign } };
}

export const berryExtra: Record<Locale, BerryExtra> = {
  en: {
    faq: [
      {
        q: "Why do Berry Avenue fonts show as empty boxes?",
        a: "Cause: a styled letter is a Unicode character, and a device with no glyph for it draws a box (□). This page does not install a font, so the phone or computer decides what it can draw. Fix: copy the plain-text backup, or the quiet small-caps row, and look at the name on the device you actually play on.",
      },
      {
        q: "Why was my Berry Avenue display name cut off, and when can I change it?",
        a: "Cause: Roblox's display-name announcement says the length must be between 3 and 20 characters, and a heart counts. The current Help article does not repeat that count. It does say you can change a display name only once every seven days. Fix: keep the display name inside 3–20 before you save. Put a longer line in chat or on a sign. If you already saved, wait out the seven days and read the name on Roblox's own screen.",
      },
      {
        q: "Why did Roblox chat turn my text into ####?",
        a: "Cause: Roblox's Experience Chat help says hashtags such as ##### replace a word or phrase the filter blocked. Roblox's safety article says some profanity is rephrased instead of hashed. Styled letters can look like a disguised word. We have not logged a Berry Avenue chat test of this. Fix: send the plain-text backup. Do not stack symbols to hide a word. Read the message after it sends.",
      },
      {
        q: "Why did my Berry Avenue font turn plain after I pasted it?",
        a: "Cause: the style is Unicode characters, not a font file glued to the text. A field that only keeps plain letters drops the styled ones, so the line looks normal again. Roblox's Help article treats the display name and the @username as different fields. Fix: paste into the display name, not the username. If the styled letters vanish there too, use the plain backup and check the saved name in Roblox.",
      },
    ],
    links: [
      { label: "display-name announcement", href: ANNOUNCE },
      { label: "Help article", href: HELP },
      { label: "Experience Chat help", href: CHAT },
      { label: "safety article", href: SAFETY },
      { label: "Community Standards", href: STANDARDS },
      { label: "text filtering page", href: FILTER },
    ],
    safety: {
      heading: "Reading it aloud, and keeping it safe",
      body: "Screen readers usually cannot speak styled Unicode as the word you typed. Keep the plain-text backup in each set for anything someone has to hear. Do not put a phone number, home address, or full legal name in a display name, bio, or sign. Roblox's Community Standards limit sharing that personal information. Parents can limit a child's chat from the controls in Roblox's safety article. The name is converted in your browser and is not uploaded.",
    },
    kits: {
      heading: "Berry Avenue name examples",
      intro:
        "Three sets: a display name, a short bio, a house sign, and a plain backup. Type your name and the lines update. The display name stays inside the announced 3–20 characters when the mark fits. The bio and the sign have no published Berry Avenue length, so that count is only a count.",
      nameLabel: "Your name",
      pieces: { display: "Display name", bio: "Bio", sign: "House sign", plain: "Plain-text backup" },
      boundedCount: "{count} characters · announced 3–20",
      openCount: "{count} characters · no published limit for this field",
      outside: "Outside the announced 3–20. Shorten the display name before you save it.",
      trimmed: "The name was shortened to 20 characters.",
      items: [
        kit("cute", "Cute", "A soft name, a one-line bio, and a cottage sign.", cuteDisplay, {
          before: "hi, i'm ",
          after: "",
          transform: "boldScript",
        }, { before: "", after: " cottage", transform: "boldScript" }),
        kit("cool", "Cool", "A shorter boy-style name for the avenue.", coolDisplay, {
          before: "",
          after: " on the avenue",
          transform: "smallCaps",
        }, { before: "", after: " garage", transform: "smallCaps" }),
        kit("horror", "Horror-lite", "A dim name. No gore.", horrorDisplay, {
          before: "lights out, ",
          after: "",
          transform: "fraktur",
        }, { before: "", after: " manor", transform: "fraktur" }),
      ],
    },
  },
  es: {
    faq: [
      {
        q: "¿Por qué las fuentes de Berry Avenue salen como cuadros vacíos?",
        a: "Causa: una letra con estilo es un carácter Unicode, y un dispositivo sin ese glifo dibuja un cuadro (□). Esta página no instala una fuente; lo decide el teléfono o el ordenador. Arreglo: copia el respaldo en texto plano, o la fila de versalitas, y mira el nombre en el aparato con el que juegas.",
      },
      {
        q: "¿Por qué se cortó mi nombre visible de Berry Avenue y cuándo puedo cambiarlo?",
        a: "Causa: el anuncio de nombres visibles de Roblox dice que el largo debe estar entre 3 y 20 caracteres, y un corazón cuenta. El artículo de ayuda actual no repite esa cifra. Sí dice que el nombre visible solo se puede cambiar una vez cada siete días. Arreglo: deja el nombre visible dentro de 3–20 antes de guardar. La frase larga va al chat o al letrero. Si ya guardaste, espera los siete días y lee el nombre en la pantalla de Roblox.",
      },
      {
        q: "¿Por qué el chat de Roblox convirtió mi texto en ####?",
        a: "Causa: la ayuda de Experience Chat dice que los numerales como ##### sustituyen una palabra o frase que el filtro bloqueó. El artículo de seguridad dice que algunas groserías se reformulan en vez de taparse. Las letras con estilo pueden parecer una palabra disfrazada. No tenemos una prueba de chat dentro de Berry Avenue. Arreglo: envía el respaldo en texto plano. No apiles símbolos para esconder una palabra. Lee el mensaje después de enviarlo.",
      },
      {
        q: "¿Por qué mi fuente de Berry Avenue quedó plana al pegarla?",
        a: "Causa: el estilo son caracteres Unicode, no un archivo de fuente pegado al texto. Un campo que solo guarda letras planas tira las letras con estilo y la línea se ve normal. El artículo de ayuda de Roblox trata el nombre visible y el @usuario como campos distintos. Arreglo: pégalo en el nombre visible, no en el usuario. Si ahí también desaparece, usa el respaldo plano y revisa el nombre guardado en Roblox.",
      },
    ],
    links: [
      { label: "anuncio de nombres visibles", href: ANNOUNCE },
      { label: "artículo de ayuda", href: HELP },
      { label: "ayuda de Experience Chat", href: CHAT },
      { label: "artículo de seguridad", href: SAFETY },
      { label: "normas de la comunidad", href: STANDARDS },
      { label: "página de filtrado de texto", href: FILTER },
    ],
    safety: {
      heading: "Leerlo en voz alta, y no poner datos personales",
      body: "Un lector de pantalla casi nunca dice el Unicode con estilo como la palabra que escribiste. Guarda el respaldo en texto plano para lo que alguien tenga que oír. No pongas un teléfono, una dirección ni tu nombre legal completo en el nombre visible, la bio o el letrero. Las normas de la comunidad de Roblox limitan compartir esos datos. Un padre puede limitar el chat de un niño desde los controles del artículo de seguridad. El nombre se convierte en tu navegador y no se sube.",
    },
    kits: {
      heading: "Ejemplos de nombres para Berry Avenue",
      intro:
        "Tres juegos: nombre visible, bio corta, letrero de la casa y un respaldo plano. Escribe tu nombre y las líneas cambian. El nombre visible cabe en los 3–20 anunciados cuando el adorno entra. La bio y el letrero no tienen un largo publicado para Berry Avenue: el número es solo una cuenta.",
      nameLabel: "Tu nombre",
      pieces: { display: "Nombre visible", bio: "Bio", sign: "Letrero", plain: "Respaldo en texto plano" },
      boundedCount: "{count} caracteres · anunciado 3–20",
      openCount: "{count} caracteres · sin límite publicado para este campo",
      outside: "Fuera del 3–20 anunciado. Acorta el nombre visible antes de guardarlo.",
      trimmed: "El nombre se acortó a 20 caracteres.",
      items: [
        kit("cute", "Tierno", "Un nombre suave, una bio de una línea y el letrero de la casa.", cuteDisplay, {
          before: "hola, soy ",
          after: "",
          transform: "boldScript",
        }, { before: "casa de ", after: "", transform: "boldScript" }),
        kit("cool", "Chico", "Un nombre más seco, de chico, para la avenida.", coolDisplay, {
          before: "",
          after: " en la avenida",
          transform: "smallCaps",
        }, { before: "garaje de ", after: "", transform: "smallCaps" }),
        kit("horror", "Terror suave", "Un nombre oscuro, sin gore.", horrorDisplay, {
          before: "luces apagadas, ",
          after: "",
          transform: "fraktur",
        }, { before: "caserón de ", after: "", transform: "fraktur" }),
      ],
    },
  },
  "pt-br": {
    faq: [
      {
        q: "Por que as fontes de Berry Avenue aparecem como quadrados vazios?",
        a: "Causa: uma letra estilizada é um caractere Unicode, e um aparelho sem esse glifo desenha um quadrado (□). Esta página não instala uma fonte; quem decide é o telefone ou o computador. Correção: copie o reserva em texto puro, ou a linha de versaletes, e olhe o nome no aparelho em que você joga.",
      },
      {
        q: "Por que meu nome de exibição do Berry Avenue foi cortado, e quando posso trocar?",
        a: "Causa: o anúncio de display name da Roblox diz que o tamanho fica entre 3 e 20 caracteres, e um coração conta. O artigo de ajuda atual não repete esse número. Ele diz que o nome de exibição só pode ser trocado uma vez a cada sete dias. Correção: deixe o nome de exibição dentro de 3–20 antes de salvar. A frase longa vai no chat ou na placa. Se você já salvou, espere os sete dias e leia o nome na tela da Roblox.",
      },
      {
        q: "Por que o chat da Roblox virou meu texto em ####?",
        a: "Causa: a ajuda do Experience Chat diz que cerquilhas como ##### substituem uma palavra ou frase que o filtro bloqueou. O artigo de segurança diz que alguns palavrões são reescritos em vez de tapados. Letras estilizadas podem parecer uma palavra disfarçada. Não temos um teste de chat dentro do Berry Avenue. Correção: mande o reserva em texto puro. Não empilhe símbolos para esconder uma palavra. Leia a mensagem depois de enviar.",
      },
      {
        q: "Por que minha fonte de Berry Avenue ficou comum depois de colar?",
        a: "Causa: o estilo são caracteres Unicode, não um arquivo de fonte grudado no texto. Um campo que só guarda letras comuns descarta as estilizadas e a linha parece normal. O artigo de ajuda da Roblox trata o nome de exibição e o @usuário como campos diferentes. Correção: cole no nome de exibição, não no usuário. Se sumir ali também, use o reserva puro e confira o nome salvo na Roblox.",
      },
    ],
    links: [
      { label: "anúncio de display name", href: ANNOUNCE },
      { label: "artigo de ajuda", href: HELP },
      { label: "ajuda do Experience Chat", href: CHAT },
      { label: "artigo de segurança", href: SAFETY },
      { label: "padrões da comunidade", href: STANDARDS },
      { label: "página de filtragem de texto", href: FILTER },
    ],
    safety: {
      heading: "Ler em voz alta, e não colocar dados pessoais",
      body: "Leitores de tela em geral não falam o Unicode estilizado como a palavra que você digitou. Guarde o reserva em texto puro para o que alguém precisa ouvir. Não coloque telefone, endereço nem nome legal completo no nome de exibição, na bio ou na placa. Os padrões da comunidade da Roblox limitam compartilhar esses dados. Um responsável pode limitar o chat de uma criança pelos controles do artigo de segurança. O nome é convertido no seu navegador e não é enviado.",
    },
    kits: {
      heading: "Exemplos de nome para Berry Avenue",
      intro:
        "Três conjuntos: nome de exibição, bio curta, placa da casa e um reserva puro. Digite seu nome e as linhas mudam. O nome de exibição fica nos 3–20 anunciados quando a marca cabe. A bio e a placa não têm um tamanho publicado para o Berry Avenue: o número é só uma conta.",
      nameLabel: "Seu nome",
      pieces: { display: "Nome de exibição", bio: "Bio", sign: "Placa", plain: "Reserva em texto puro" },
      boundedCount: "{count} caracteres · anunciado 3–20",
      openCount: "{count} caracteres · sem limite publicado para este campo",
      outside: "Fora do 3–20 anunciado. Encurte o nome de exibição antes de salvar.",
      trimmed: "O nome foi encurtado para 20 caracteres.",
      items: [
        kit("cute", "Fofo", "Um nome macio, uma bio de uma linha e a placa da casa.", cuteDisplay, {
          before: "oi, eu sou ",
          after: "",
          transform: "boldScript",
        }, { before: "casa de ", after: "", transform: "boldScript" }),
        kit("cool", "Estilo boy", "Um nome mais seco, de menino, para a avenida.", coolDisplay, {
          before: "",
          after: " na avenida",
          transform: "smallCaps",
        }, { before: "garagem de ", after: "", transform: "smallCaps" }),
        kit("horror", "Terror leve", "Um nome escuro, sem gore.", horrorDisplay, {
          before: "luzes apagadas, ",
          after: "",
          transform: "fraktur",
        }, { before: "casarão de ", after: "", transform: "fraktur" }),
      ],
    },
  },
  "zh-cn": {
    faq: [
      {
        q: "为什么 Berry Avenue 的字体显示成空方框？",
        a: "原因：花体字母是 Unicode 字符，设备没有对应字形时会画成方框（□）。这一页不安装字体，能不能画出来由手机或电脑决定。处理：复制纯文本备份，或用安静的小型大写那一行，再到你真正玩游戏的设备上看一遍。",
      },
      {
        q: "为什么 Berry Avenue 的显示名被截断，多久才能再改？",
        a: "原因：Roblox 的显示名公告写明长度必须在 3 到 20 个字符之间，爱心也算。现在的帮助文章没有再写这个数字。它写的是显示名每七天只能改一次。处理：保存前把显示名留在 3–20 里。更长的句子放到聊天或牌子上。如果已经保存，等满七天，再在 Roblox 自己的页面上读这个名字。",
      },
      {
        q: "为什么 Roblox 聊天把我的字变成了 ####？",
        a: "原因：Roblox 的体验聊天帮助写明，##### 这类井号会换掉被过滤拦住的词或句子。安全文章写明，有些脏话会被改写成得体的话，而不是盖住。花体字母有时看起来像变体脏词。我们没有在 Berry Avenue 的聊天里做过这条测试。处理：发送纯文本备份。不要叠符号去藏一个词。发出去之后再读一遍。",
      },
      {
        q: "为什么 Berry Avenue 的花体粘贴之后变成了普通字？",
        a: "原因：样式是 Unicode 字符，不是粘在文字上的字体文件。只保留普通字母的输入框会丢掉花体，看起来就像没变过。Roblox 的帮助文章把显示名和 @用户名当成两个字段。处理：贴进显示名，不要贴进用户名。如果显示名里也消失了，就用纯文本备份，并在 Roblox 里看保存后的名字。",
      },
    ],
    links: [
      { label: "显示名公告", href: ANNOUNCE },
      { label: "帮助文章", href: HELP },
      { label: "体验聊天帮助", href: CHAT },
      { label: "安全文章", href: SAFETY },
      { label: "社区准则", href: STANDARDS },
      { label: "文字过滤页面", href: FILTER },
    ],
    safety: {
      heading: "读屏，以及别写个人信息",
      body: "读屏软件通常不会把花体 Unicode 读成你输入的那个词。需要让人听清的内容，留着每套里的纯文本备份。不要在显示名、简介或牌子里写电话、家庭住址或完整法定姓名。Roblox 社区准则限制分享这类个人信息。家长可以按安全文章里的控制项限制孩子的聊天。名字在你的浏览器里转换，不会上传。",
    },
    kits: {
      heading: "Berry Avenue 名字示例",
      intro:
        "三套：显示名、一句简介、房屋牌子，外加纯文本备份。输入你的名字，这几行会跟着变。装饰放得下时，显示名留在公告里的 3–20 个字符。简介和牌子没有 Berry Avenue 的公开字数上限，那个数字只是计数。",
      nameLabel: "你的名字",
      pieces: { display: "显示名", bio: "简介", sign: "房子牌子", plain: "纯文本备份" },
      boundedCount: "{count} 个字符 · 公告为 3–20",
      openCount: "{count} 个字符 · 这个字段没有公开上限",
      outside: "超出公告里的 3–20。保存显示名前先缩短。",
      trimmed: "名字已缩短到 20 个字符。",
      items: [
        kit("cute", "可爱", "软一点的名字、一句简介和小屋牌子。", cuteDisplay, {
          before: "你好，我是",
          after: "",
          transform: "boldScript",
        }, { before: "", after: "的小屋", transform: "boldScript" }),
        kit("cool", "酷一点", "更短的男孩风格，给这条街用。", coolDisplay, {
          before: "",
          after: "在街上",
          transform: "smallCaps",
        }, { before: "", after: "的车库", transform: "smallCaps" }),
        kit("horror", "轻度惊悚", "暗一点的名字，没有血腥。", horrorDisplay, {
          before: "灯关了，",
          after: "",
          transform: "fraktur",
        }, { before: "", after: "的宅子", transform: "fraktur" }),
      ],
    },
  },
  id: {
    faq: [
      {
        q: "Kenapa font Berry Avenue tampil sebagai kotak kosong?",
        a: "Penyebab: huruf bergaya adalah karakter Unicode, dan perangkat yang tidak punya glyph-nya menggambar kotak (□). Halaman ini tidak memasang font; ponsel atau komputer yang memutuskan. Perbaikan: salin cadangan teks biasa, atau baris small caps yang tenang, lalu lihat namanya di perangkat yang kamu pakai untuk bermain.",
      },
      {
        q: "Kenapa nama tampilan Berry Avenue saya terpotong, dan kapan saya bisa menggantinya?",
        a: "Penyebab: pengumuman nama tampilan Roblox menulis bahwa panjangnya harus antara 3 dan 20 karakter, dan hati ikut dihitung. Artikel bantuan yang sekarang tidak mengulang angka itu. Artikel itu menulis bahwa nama tampilan hanya bisa diganti sekali setiap tujuh hari. Perbaikan: jaga nama tampilan di dalam 3–20 sebelum menyimpan. Kalimat yang lebih panjang taruh di chat atau di papan. Kalau sudah tersimpan, tunggu tujuh hari dan baca namanya di layar Roblox.",
      },
      {
        q: "Kenapa chat Roblox mengubah teks saya menjadi ####?",
        a: "Penyebab: bantuan Experience Chat menulis bahwa tanda pagar seperti ##### menggantikan kata atau frasa yang diblokir filter. Sebagian kata kasar ditulis ulang, bukan ditutup, menurut artikel keamanan. Huruf bergaya bisa terlihat seperti kata yang disamarkan. Kami belum mencatat uji chat di dalam Berry Avenue. Perbaikan: kirim cadangan teks biasa. Jangan menumpuk simbol untuk menyembunyikan kata. Baca pesannya setelah terkirim.",
      },
      {
        q: "Kenapa font Berry Avenue saya jadi biasa setelah ditempel?",
        a: "Penyebab: gayanya adalah karakter Unicode, bukan berkas font yang menempel pada teks. Kolom yang hanya menyimpan huruf biasa membuang huruf bergaya, jadi barisnya terlihat normal. Artikel bantuan Roblox memperlakukan nama tampilan dan @username sebagai kolom yang berbeda. Perbaikan: tempel di nama tampilan, bukan di username. Kalau di sana juga hilang, pakai cadangan biasa dan cek nama yang tersimpan di Roblox.",
      },
    ],
    links: [
      { label: "pengumuman nama tampilan", href: ANNOUNCE },
      { label: "Artikel bantuan", href: HELP },
      { label: "artikel bantuan", href: HELP },
      { label: "bantuan Experience Chat", href: CHAT },
      { label: "artikel keamanan", href: SAFETY },
      { label: "Standar Komunitas", href: STANDARDS },
      { label: "Halaman pemfilteran teks", href: FILTER },
    ],
    safety: {
      heading: "Membacanya dengan suara, dan jangan taruh data pribadi",
      body: "Pembaca layar biasanya tidak mengucapkan Unicode bergaya sebagai kata yang kamu ketik. Simpan cadangan teks biasa di setiap set untuk apa pun yang harus didengar orang. Jangan taruh nomor telepon, alamat rumah, atau nama legal lengkap di nama tampilan, bio, atau papan. Standar Komunitas Roblox membatasi berbagi informasi pribadi itu. Orang tua bisa membatasi chat anak dari kontrol di artikel keamanan Roblox. Nama dikonversi di browser kamu dan nama itu tidak diunggah.",
    },
    kits: {
      heading: "Contoh nama Berry Avenue",
      intro:
        "Tiga set: nama tampilan, bio pendek, papan rumah, dan cadangan teks biasa. Ketik namamu dan barisnya berubah. Nama tampilan tetap di 3–20 yang diumumkan kalau tandanya muat. Bio dan papan tidak punya batas panjang Berry Avenue yang dipublikasikan; angkanya hanya hitungan.",
      nameLabel: "Namamu",
      pieces: { display: "Nama tampilan", bio: "Bio", sign: "Papan rumah", plain: "Cadangan teks biasa" },
      boundedCount: "{count} karakter · diumumkan 3–20",
      openCount: "{count} karakter · tidak ada batas yang dipublikasikan untuk kolom ini",
      outside: "Di luar 3–20 yang diumumkan. Pendekkan nama tampilan sebelum menyimpan.",
      trimmed: "Nama dipendekkan menjadi 20 karakter.",
      items: [
        kit("cute", "Imut", "Nama yang lembut, bio satu baris, dan papan rumah.", cuteDisplay, {
          before: "hai, aku ",
          after: "",
          transform: "boldScript",
        }, { before: "rumah ", after: "", transform: "boldScript" }),
        kit("cool", "Cowok", "Nama yang lebih pendek, gaya cowok, untuk avenue.", coolDisplay, {
          before: "",
          after: " di avenue",
          transform: "smallCaps",
        }, { before: "garasi ", after: "", transform: "smallCaps" }),
        kit("horror", "Horor ringan", "Nama yang redup, tanpa gore.", horrorDisplay, {
          before: "lampu mati, ",
          after: "",
          transform: "fraktur",
        }, { before: "rumah ", after: "", transform: "fraktur" }),
      ],
    },
  },
};

export function berryPageFaq(locale: Locale, base: readonly FaqItem[]): FaqItem[] {
  const seen = new Set(base.map((item) => item.q));
  return [...base, ...berryExtra[locale].faq.filter((item) => !seen.has(item.q))];
}
