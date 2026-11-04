// One first-screen sentence per core page. Titles stay on the existing serp limits.

import type { Locale } from "../i18n";

export const corePages = [
  "fancy",
  "gaming",
  "symbols",
  "pubg-name-generator",
  "free-fire-name-generator",
  "roblox-name-generator",
] as const;
export type CorePage = (typeof corePages)[number];

export const coreFocus: Record<Locale, Record<CorePage, string>> = {
  en: {
    fancy: "The count above the box is graphemes. Search matches a style name and its aliases, such as cursive or glitch.",
    gaming: "Build your own sits under the name box. Check this nickname opens the character report, and that report does not say a game accepts the name.",
    symbols: "The tray stays in this browser after a refresh. Copy joins your prefix and the symbols in the order you added them.",
    "pubg-name-generator": "About 16 code points is this preview's fitting number. The check stays at needs verification. It is not an official cap.",
    "free-fire-name-generator": "About 12 code points is this page's own fitting number. A short word with one mark, such as a bolt, is the example here. The check stays at needs verification.",
    "roblox-name-generator": "Username and display name are different fields. The preview login name keeps letters, numbers, and one underscore. Decorations stay on the display name.",
  },
  es: {
    fancy: "El contador sobre la caja cuenta grafemas. La búsqueda encuentra el nombre del estilo y sus alias, como cursiva o glitch.",
    gaming: "Armar el tuyo está bajo la caja del nombre. Revisar este apodo abre el informe de caracteres, y ese informe no dice que un juego acepte el nombre.",
    symbols: "La bandeja se queda en este navegador después de recargar. Copiar une tu prefijo y los símbolos en el orden en que los añadiste.",
    "pubg-name-generator": "Unos 16 puntos de código es el número de ajuste de esta vista previa. La revisión se queda en necesita verificación. No es un tope oficial.",
    "free-fire-name-generator": "Unos 12 puntos de código es el número de ajuste propio de esta página. Una palabra corta con una marca, como un rayo, es el ejemplo. La revisión se queda en necesita verificación.",
    "roblox-name-generator": "El usuario y el nombre visible son campos distintos. El usuario de la vista previa conserva letras, números y un guion bajo. La decoración se queda en el nombre visible.",
  },
  "pt-br": {
    fancy: "A contagem acima da caixa é de grafemas. A busca encontra o nome do estilo e os apelidos, como cursiva ou glitch.",
    gaming: "Montar o seu fica abaixo da caixa do nome. Conferir este apelido abre o relatório de caracteres, e esse relatório não diz que um jogo aceita o nome.",
    symbols: "A bandeja fica neste navegador depois de atualizar. Copiar junta o prefixo e os símbolos na ordem em que você adicionou.",
    "pubg-name-generator": "Cerca de 16 pontos de código é o número de encaixe desta prévia. A conferência fica em precisa de verificação. Não é um teto oficial.",
    "free-fire-name-generator": "Cerca de 12 pontos de código é o número de encaixe desta página. Uma palavra curta com uma marca, como um raio, é o exemplo. A conferência fica em precisa de verificação.",
    "roblox-name-generator": "Usuário e nome de exibição são campos diferentes. O usuário da prévia guarda letras, números e um sublinhado. A decoração fica no nome de exibição.",
  },
  "zh-cn": {
    fancy: "输入框上方的计数是字素。搜索能对上样式名和别名，比如花体或乱码。",
    gaming: "名字框下面可以自己组合。检查这段昵称会打开字符报告，报告不会说游戏接受这个名字。",
    symbols: "刷新之后，托盘还留在这个浏览器里。复制时会把前缀和符号按加入顺序接在一起。",
    "pubg-name-generator": "大约 16 个码点是这份预览的适配数字。检查结果停在需要核实。这不是官方硬上限。",
    "free-fire-name-generator": "大约 12 个码点是这一页自己的适配数字。例子是一个短词加一个标记，比如闪电。检查结果停在需要核实。",
    "roblox-name-generator": "用户名和显示名是两个字段。预览里的登录名只留字母、数字和一个下划线。装饰留在显示名上。",
  },
  id: {
    fancy: "Angka di atas kotak menghitung grafem. Pencarian cocok dengan nama gaya dan aliasnya, seperti cursive atau glitch.",
    gaming: "Buat sendiri ada di bawah kotak nama. Memeriksa nama ini membuka laporan karakter, dan laporan itu tidak mengatakan game menerima namanya.",
    symbols: "Baki tetap di browser ini setelah dimuat ulang. Salin menggabungkan awalan dan simbol sesuai urutan saat kamu menambahkannya.",
    "pubg-name-generator": "Sekitar 16 titik kode adalah patokan muat pratinjau ini. Pemeriksaan tetap di perlu verifikasi. Ini bukan batas resmi.",
    "free-fire-name-generator": "Sekitar 12 titik kode adalah patokan muat halaman ini sendiri. Contohnya kata pendek dengan satu tanda, seperti petir. Pemeriksaan tetap di perlu verifikasi.",
    "roblox-name-generator": "Username dan nama tampilan adalah kolom yang berbeda. Username di pratinjau menyimpan huruf, angka, dan satu garis bawah. Hiasan tetap di nama tampilan.",
  },
};
