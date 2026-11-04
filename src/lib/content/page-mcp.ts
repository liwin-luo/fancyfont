// MCP install page. The config block is shared; the surrounding copy is written per locale.

import type { Locale, PageMeta } from "../i18n";

export interface McpContent {
  meta: PageMeta;
  h1: string;
  intro: string;
  installHeading: string;
  downloadLabel: string;
  steps: string[];
  configNote: string;
  toolsHeading: string;
  tools: { name: string; description: string }[];
  privacyHeading: string;
  privacy: string;
  webHeading: string;
  faqHeading: string;
  faq: { q: string; a: string }[];
}

export const mcpContent: Record<Locale, McpContent> = {
  en: {
    meta: {
      title: "FancyFont MCP for Local AI Agents",
      description:
        "Run FancyFont on your computer so an AI agent can style Unicode text, build nicknames, and search symbols. The text stays on your machine.",
    },
    h1: "FancyFont for local AI agents",
    intro:
      "An agent on your computer can call the same FancyFont engines as this website: Unicode text styles, gaming nicknames, and the symbol list. The server is a local process. It reads and writes on your machine, and FancyFont does not receive the text.",
    installHeading: "Download the local server",
    downloadLabel: "Download fancyfont-mcp.mjs",
    steps: [
      "Download fancyfont-mcp.mjs and remember the folder where you saved it.",
      "In Cursor or Claude Desktop, add an MCP server with the config below. Replace the path with that file.",
      "Restart the agent. Ask it to style a name, for example “make Alex bold”.",
    ],
    configNote:
      "Node 20 or newer runs this file with the node command. Conversion stays on your machine. Replace the path in args with the file you downloaded.",
    toolsHeading: "Tools the agent can call",
    tools: [
      {
        name: "fancyfont_list_styles",
        description: "Lists every style id, its name, what it covers, and a short note.",
      },
      {
        name: "fancyfont_convert_text",
        description: "Converts text of up to 120 characters. Pass a style id, or leave it out to get every style.",
      },
      {
        name: "fancyfont_generate_nicknames",
        description: "Builds decorated nicknames. style is cool, dark, cute, pro, minimal, or all.",
      },
      {
        name: "fancyfont_search_symbols",
        description: "Searches symbols by word or category and includes the Unicode code point.",
      },
    ],
    privacyHeading: "Where the text goes",
    privacy:
      "The process is started by your agent over stdio. A name you ask it to convert is handled in that process. It is not sent to fancyfont.tools. The website tools keep doing the same work in the browser.",
    webHeading: "The same tools on the web",
    faqHeading: "Questions",
    faq: [
      {
        q: "Does this upload the text I convert?",
        a: "No. The server runs on the computer where the agent is installed. FancyFont does not receive that text.",
      },
      {
        q: "Where do I get the server?",
        a: "Download fancyfont-mcp.mjs on this page. The config starts it with node. Keep the file on your computer; the agent reads it from that path.",
      },
      {
        q: "Will every character change?",
        a: "Most styles change only A–Z and a–z. Some also change digits. Accented letters and Chinese characters stay as typed. The app you paste into decides whether the character displays.",
      },
    ],
  },
  es: {
    meta: {
      title: "MCP de FancyFont para agentes de IA locales",
      description:
        "Ejecuta FancyFont en tu ordenador para que un agente de IA cree texto Unicode, nombres y símbolos. El texto se queda en tu equipo.",
    },
    h1: "FancyFont para agentes de IA locales",
    intro:
      "Un agente en tu ordenador puede usar los mismos motores que esta web: estilos de texto Unicode, nombres para juegos y la lista de símbolos. El servidor es un proceso local. Lee y escribe en tu equipo, y FancyFont no recibe el texto.",
    installHeading: "Descargar el servidor local",
    downloadLabel: "Descargar fancyfont-mcp.mjs",
    steps: [
      "Descarga fancyfont-mcp.mjs y anota la carpeta donde lo guardaste.",
      "En Cursor o Claude Desktop, añade un servidor MCP con la configuración de abajo. Sustituye la ruta por ese archivo.",
      "Reinicia el agente. Pídele que dé estilo a un nombre, por ejemplo “pon Alex en negrita”.",
    ],
    configNote:
      "Node 20 o posterior ejecuta este archivo con el comando node. La conversión sigue en tu equipo. Sustituye la ruta de args por el archivo que descargaste.",
    toolsHeading: "Herramientas que puede llamar el agente",
    tools: [
      {
        name: "fancyfont_list_styles",
        description: "Lista cada id de estilo, su nombre, qué cubre y una nota breve.",
      },
      {
        name: "fancyfont_convert_text",
        description: "Convierte un texto de hasta 120 caracteres. Indica un estilo, o omítelo para recibir todos.",
      },
      {
        name: "fancyfont_generate_nicknames",
        description: "Crea nombres decorados. style puede ser cool, dark, cute, pro, minimal o all.",
      },
      {
        name: "fancyfont_search_symbols",
        description: "Busca símbolos por palabra o categoría e incluye el punto de código Unicode.",
      },
    ],
    privacyHeading: "Adónde va el texto",
    privacy:
      "El proceso lo arranca tu agente por stdio. Un nombre que le pidas convertir se procesa ahí. No se envía a fancyfont.tools. Las herramientas de la web siguen haciendo el mismo trabajo en el navegador.",
    webHeading: "Las mismas herramientas en la web",
    faqHeading: "Preguntas",
    faq: [
      {
        q: "¿Esto sube el texto que convierto?",
        a: "No. El servidor corre en el ordenador donde está el agente. FancyFont no recibe ese texto.",
      },
      {
        q: "¿Dónde consigo el servidor?",
        a: "Descarga fancyfont-mcp.mjs en esta página. La configuración lo arranca con node. Deja el archivo en tu ordenador; el agente lo lee desde esa ruta.",
      },
      {
        q: "¿Cambia cada carácter?",
        a: "La mayoría de estilos solo cambian A–Z y a–z. Algunos también cambian los dígitos. Las letras con acento y los caracteres chinos se quedan igual. La app donde pegues el resultado decide si el carácter se ve.",
      },
    ],
  },
  "pt-br": {
    meta: {
      title: "MCP do FancyFont para agentes de IA locais",
      description:
        "Rode o FancyFont no seu computador para um agente de IA criar texto Unicode, nomes e símbolos. O texto fica na sua máquina.",
    },
    h1: "FancyFont para agentes de IA locais",
    intro:
      "Um agente no seu computador pode usar os mesmos motores deste site: estilos de texto Unicode, nomes de jogo e a lista de símbolos. O servidor é um processo local. Ele lê e escreve na sua máquina, e o FancyFont não recebe o texto.",
    installHeading: "Baixar o servidor local",
    downloadLabel: "Baixar fancyfont-mcp.mjs",
    steps: [
      "Baixe fancyfont-mcp.mjs e anote a pasta onde você salvou.",
      "No Cursor ou no Claude Desktop, adicione um servidor MCP com a configuração abaixo. Troque o caminho por esse arquivo.",
      "Reinicie o agente. Peça para estilizar um nome, por exemplo “deixe Alex em negrito”.",
    ],
    configNote:
      "O Node 20 ou mais novo executa este arquivo com o comando node. A conversão continua na sua máquina. Troque o caminho em args pelo arquivo que você baixou.",
    toolsHeading: "Ferramentas que o agente pode chamar",
    tools: [
      {
        name: "fancyfont_list_styles",
        description: "Lista cada id de estilo, o nome, a cobertura e uma nota curta.",
      },
      {
        name: "fancyfont_convert_text",
        description: "Converte um texto de até 120 caracteres. Informe um estilo ou omita para receber todos.",
      },
      {
        name: "fancyfont_generate_nicknames",
        description: "Monta nomes decorados. style pode ser cool, dark, cute, pro, minimal ou all.",
      },
      {
        name: "fancyfont_search_symbols",
        description: "Busca símbolos por palavra ou categoria e inclui o ponto de código Unicode.",
      },
    ],
    privacyHeading: "Para onde o texto vai",
    privacy:
      "O processo é iniciado pelo seu agente via stdio. Um nome que você pedir para converter é tratado ali. Ele não é enviado ao fancyfont.tools. As ferramentas do site continuam fazendo o mesmo trabalho no navegador.",
    webHeading: "As mesmas ferramentas na web",
    faqHeading: "Perguntas",
    faq: [
      {
        q: "Isso envia o texto que eu converto?",
        a: "Não. O servidor roda no computador onde o agente está instalado. O FancyFont não recebe esse texto.",
      },
      {
        q: "Onde eu pego o servidor?",
        a: "Baixe fancyfont-mcp.mjs nesta página. A configuração inicia o arquivo com node. Deixe o arquivo no seu computador; o agente lê esse caminho.",
      },
      {
        q: "Todo caractere muda?",
        a: "A maioria dos estilos muda só A–Z e a–z. Alguns também mudam os dígitos. Letras acentuadas e caracteres chineses permanecem como foram digitados. O app em que você colar decide se o caractere aparece.",
      },
    ],
  },
  "zh-cn": {
    meta: {
      title: "FancyFont MCP：给本地 AI 代理用",
      description:
        "在你的电脑上运行 FancyFont，让 AI 代理生成 Unicode 花体、昵称和符号。文字留在你的机器上。",
    },
    h1: "给本地 AI 代理用的 FancyFont",
    intro:
      "装在你电脑上的代理可以调用和这个网站相同的引擎：Unicode 文字样式、游戏昵称和符号表。服务器是一个本地进程，在你的机器上读写，FancyFont 不会收到这段文字。",
    installHeading: "下载本地服务器",
    downloadLabel: "下载 fancyfont-mcp.mjs",
    steps: [
      "下载 fancyfont-mcp.mjs，记下你保存它的文件夹。",
      "在 Cursor 或 Claude Desktop 里按下面的配置添加 MCP 服务器，把路径换成这个文件。",
      "重启代理，让它给一个名字加样式，例如“把 Alex 转成粗体”。",
    ],
    configNote:
      "Node 20 或更新版本用 node 命令运行这个文件。转换仍在你的电脑上完成。把 args 里的路径换成你下载的文件。",
    toolsHeading: "代理可以调用的工具",
    tools: [
      {
        name: "fancyfont_list_styles",
        description: "列出每个样式 id、名称、覆盖范围和一句说明。",
      },
      {
        name: "fancyfont_convert_text",
        description: "转换最多 120 个字符。传入样式 id，或不传以返回全部样式。",
      },
      {
        name: "fancyfont_generate_nicknames",
        description: "生成装饰过的昵称。style 可以是 cool、dark、cute、pro、minimal 或 all。",
      },
      {
        name: "fancyfont_search_symbols",
        description: "按词语或分类搜索符号，并带上 Unicode 码位。",
      },
    ],
    privacyHeading: "文字去了哪里",
    privacy:
      "这个进程由你的代理通过 stdio 启动。你让它转换的名字在这个进程里处理，不会发到 fancyfont.tools。网站上的工具仍然在浏览器里完成同样的工作。",
    webHeading: "网页上的同一套工具",
    faqHeading: "问题",
    faq: [
      {
        q: "转换的文字会被上传吗？",
        a: "不会。服务器跑在安装了代理的那台电脑上，FancyFont 收不到这段文字。",
      },
      {
        q: "服务器文件在哪里？",
        a: "在本页下载 fancyfont-mcp.mjs。配置会用 node 启动它。文件留在你的电脑上，代理从这条路径读取。",
      },
      {
        q: "每个字符都会变吗？",
        a: "大多数样式只改 A–Z 和 a–z，有的也会改数字。带声调的字母和汉字保持原样。能不能显示，取决于你粘贴进去的那个应用的字体。",
      },
    ],
  },
  id: {
    meta: {
      title: "MCP FancyFont untuk agen AI lokal",
      description:
        "Jalankan FancyFont di komputer kamu supaya agen AI bisa membuat teks Unicode, nama, dan simbol. Teksnya tetap di mesin kamu.",
    },
    h1: "FancyFont untuk agen AI lokal",
    intro:
      "Agen di komputer kamu bisa memakai mesin yang sama dengan situs ini: gaya teks Unicode, nama game, dan daftar simbol. Server-nya berjalan sebagai proses lokal. Ia membaca dan menulis di mesin kamu, dan FancyFont tidak menerima teks itu.",
    installHeading: "Unduh server lokal",
    downloadLabel: "Unduh fancyfont-mcp.mjs",
    steps: [
      "Unduh fancyfont-mcp.mjs dan catat folder tempat kamu menyimpannya.",
      "Di Cursor atau Claude Desktop, tambahkan server MCP dengan konfigurasi di bawah. Ganti jalurnya dengan file itu.",
      "Mulai ulang agen. Minta ia menghias sebuah nama, misalnya “buat Alex jadi tebal”.",
    ],
    configNote:
      "Node 20 atau yang lebih baru menjalankan file ini dengan perintah node. Konversi tetap di mesin kamu. Ganti jalur di args dengan file yang kamu unduh.",
    toolsHeading: "Alat yang bisa dipanggil agen",
    tools: [
      {
        name: "fancyfont_list_styles",
        description: "Menampilkan setiap id gaya, namanya, cakupannya, dan catatan singkat.",
      },
      {
        name: "fancyfont_convert_text",
        description: "Mengubah teks sampai 120 karakter. Beri id gaya, atau kosongkan untuk mendapat semua gaya.",
      },
      {
        name: "fancyfont_generate_nicknames",
        description: "Menyusun nama berhias. style bisa cool, dark, cute, pro, minimal, atau all.",
      },
      {
        name: "fancyfont_search_symbols",
        description: "Mencari simbol menurut kata atau kategori, lengkap dengan titik kode Unicode.",
      },
    ],
    privacyHeading: "Ke mana teks itu pergi",
    privacy:
      "Proses ini dimulai oleh agenmu lewat stdio. Nama yang kamu minta diubah diproses di situ. Teks itu tidak dikirim ke fancyfont.tools. Alat di situs tetap mengerjakan hal yang sama di browser.",
    webHeading: "Alat yang sama di web",
    faqHeading: "Pertanyaan",
    faq: [
      {
        q: "Apakah teks yang saya ubah ikut terunggah?",
        a: "Tidak. Server berjalan di komputer tempat agen terpasang. FancyFont tidak menerima teks itu.",
      },
      {
        q: "Di mana file servernya?",
        a: "Unduh fancyfont-mcp.mjs di halaman ini. Konfigurasi menjalankannya dengan node. Simpan file di komputer kamu; agen membaca jalur itu.",
      },
      {
        q: "Apakah setiap karakter berubah?",
        a: "Sebagian besar gaya hanya mengubah A–Z dan a–z. Beberapa juga mengubah angka. Huruf beraksen dan karakter Tionghoa tetap seperti yang diketik. Aplikasi tempat kamu menempel menentukan apakah karakternya tampil.",
      },
    ],
  },
};
