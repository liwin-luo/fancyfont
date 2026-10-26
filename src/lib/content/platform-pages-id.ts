// Indonesian copy for the platform preset pages.

import type { PlatformPageCopy } from "./platform-pages-en";

export const platformPagesId: Record<string, PlatformPageCopy> = {
  "instagram-fonts": {
    navName: "Instagram",
    h1: "Generator Font Instagram",
    title: "Font Instagram – huruf keren untuk bio dan nama",
    description:
      "Huruf Unicode keren untuk bio dan nama tampilan Instagram kamu — lihat pratinjau tiap gaya dan salin sekali ketuk.",
    intro:
      "Instagram tidak punya pemilih font — tapi teks Unicode bisa dipakai di nama tampilan dan bio. Pilih gaya di bawah, salin, lalu tempel langsung ke profilmu.",
    defaultText: "Instagram",
    presets: [
      { label: "Bingkai nama lembut", left: "✦ ", right: " ✦", transform: "script" },
      { label: "Spasi aesthetic", left: "", right: "", transform: "fullwidth" },
      { label: "Pita imut", left: "୨୧ ", right: " ୨୧", transform: "smallCaps" },
      { label: "Pembuka tebal", left: "「 ", right: " 」", transform: "sansBold" },
    ],
    guidance: [
      {
        label: "Nama tampilan",
        body: "Sekitar 30 karakter. Teks bergaya berfungsi di sini dan inilah tempat font paling menonjol — muncul di komentar dan feed pengikut.",
      },
      {
        label: "Bio",
        body: "Sekitar 150 karakter. Font, simbol, dan kombinasi dekoratif semuanya berfungsi, dan baris baru tetap terjaga — tempat terbaik untuk nama bergaya atau baris aksen.",
      },
      {
        label: "Username",
        body: "Hanya huruf, angka, titik, dan underscore. Tidak ada font Unicode di sini — biarkan username polos dan taruh gaya di nama tampilan.",
      },
    ],
    compatNote:
      "Ini karakter Unicode, bukan fitur Instagram — Instagram bisa mengubah cara menampilkannya kapan saja. Saat ini gaya-gaya ini stabil di bio dan nama tampilan, tapi selalu tempel dan cek di akunmu sendiri lebih dulu.",
    faq: [
      {
        q: "Bagaimana cara memasukkan font ini ke bio Instagram?",
        a: "Konversi teksmu di atas lalu salin. Di Instagram, buka Edit Profil, tempel di kolom Bio atau Nama, dan simpan. Cek hasilnya di aplikasi dan versi web.",
      },
      {
        q: "Apakah bisa kena banned karena pakai font di bio?",
        a: "Teks bergaya di nama atau bio adalah konten profil normal, bukan pelanggaran yang diketahui. Jangan pakai di username, ikuti aturan Instagram, dan kamu sama seperti jutaan profil lain.",
      },
      {
        q: "Kenapa beberapa pengikut melihat kotak-kotak?",
        a: "Perangkat atau versi Instagram mereka tidak punya glif tersebut. Bertahan pada gaya populer seperti cursive, kapital kecil, dan tebal menjaga risiko itu rendah.",
      },
    ],
  },
  "tiktok-fonts": {
    navName: "TikTok",
    h1: "Generator Font TikTok",
    title: "Font TikTok – nama dan bio bergaya",
    description:
      "Huruf Unicode keren untuk nama dan bio TikTok — pratinjau, salin, dan tempel ke profilmu dalam hitungan detik.",
    intro:
      "Opsi teks bawaan TikTok berhenti di editor videonya. Nama dan biomu menerima Unicode — pilih gaya di bawah dan tempel ke profilmu.",
    defaultText: "TikTok",
    presets: [
      { label: "Bingkai clan", left: "꧁༒ ", right: " ༒꧂", transform: "boldScript" },
      { label: "Aksen berkilau", left: "⋆｡˚ ", right: " ˚｡⋆", transform: "smallCaps" },
      { label: "Vibe lebar", left: "", right: "", transform: "fullwidth" },
      { label: "Bingkai hati", left: "♡ ", right: " ♡", transform: "script" },
    ],
    guidance: [
      {
        label: "Nama",
        body: "Sekitar 24 karakter, dan teks bergaya paling terlihat di profilmu — muncul di setiap video. Karakter bergaya berfungsi di sini.",
      },
      {
        label: "Bio",
        body: "Sekitar 80 karakter — pendek. Satu baris nama bergaya plus satu kombinasi aksen ringkas biasanya muat; teks lebar memakan kuota dengan cepat.",
      },
      {
        label: "Username",
        body: "Hanya huruf, angka, titik, dan underscore. Username tidak pernah menerima font bergaya — hias namamu saja.",
      },
    ],
    compatNote:
      "Ini karakter Unicode, bukan fitur TikTok, dan TikTok yang mengontrol rendernya. Saat ini nama dan bio menampung teks bergaya — uji di akunmu sendiri, dan ingat aturan profil bisa berubah.",
    faq: [
      {
        q: "Bagaimana mengganti nama TikTok dengan font bergaya?",
        a: "Salin nama bergayamu di atas, buka TikTok → Profil → Edit profil → Nama, tempel, dan simpan. Namamu terbaru di semua tempat videomu muncul.",
      },
      {
        q: "Apakah font berfungsi di komentar dan caption TikTok?",
        a: "Ya — komentar dan caption menerima karakter Unicode. Teks bergaya paling efektif di nama, karena muncul di setiap video.",
      },
      {
        q: "Kenapa sebagian bio bergayaku hilang?",
        a: "Batas karakter bio pendek dan beberapa platform memangkas karakter tak biasa. Coba gaya yang lebih sederhana atau persingkat teks di sekitarnya.",
      },
    ],
  },
  "discord-fonts": {
    navName: "Discord",
    h1: "Generator Font Discord",
    title: "Font Discord – gaya untuk nama dan status",
    description:
      "Huruf Unicode keren untuk nama dan status Discord — plus catatan jujur tentang di mana format markdown asli Discord berlaku.",
    intro:
      "Nama dan status kustom Discord tidak punya tombol format — Unicode mengisi celahnya. Pilih gaya, salin, dan tempel ke profilmu.",
    defaultText: "Discord",
    presets: [
      { label: "Tag server", left: "『", right: "』", transform: "monospace" },
      { label: "Mode mod", left: "† ", right: " †", transform: "fraktur" },
      { label: "Flex tenang", left: "", right: "", transform: "smallCaps" },
      { label: "Aksen status", left: "✦ ", right: "", transform: "bold" },
    ],
    guidance: [
      {
        label: "Nama / nama tampilan",
        body: "Sekitar 32 karakter, per server. Unicode bergaya berfungsi — di sinilah font bersinar, apalagi digabung tag server seperti 『tag』.",
      },
      {
        label: "Status kustom",
        body: "Sekitar 128 karakter. Teks bergaya dan simbol sama-sama berfungsi; jaga tetap pendek agar terbaca di daftar anggota.",
      },
      {
        label: "Username",
        body: "Huruf, angka, titik, dan underscore, huruf kecil. Tidak ada font bergaya — Discord ketat di sini.",
      },
      {
        label: "Pesan",
        body: "Pesan Discord mendukung markdown asli: **tebal**, *miring*, __garis bawah__, dan ~~coret~~. Utamakan markdown di chat — gaya Unicode untuk bagian profil yang tak dijangkau markdown.",
      },
    ],
    compatNote:
      "Ini karakter Unicode, bukan fitur Discord. Pemilik server juga bisa mengubah izin nama kapan saja. Saat ini gaya berfungsi di nama dan status — tempel dan cek di servermu dulu.",
    faq: [
      {
        q: "Bagaimana mengganti nama Discord dengan font bergaya?",
        a: "Salin teks bergaya di atas, klik kanan ikon server → Edit Profil Server (atau profil penggunamu), tempel di kolom nama, dan simpan. Mengganti nama di seluruh server butuh izin yang sesuai.",
      },
      {
        q: "Kenapa pakai font Unicode kalau Discord punya markdown?",
        a: "Markdown hanya memformat pesan. Nama, status kustom, dan Tentang Saya tidak punya opsi format — gaya Unicode adalah satu-satunya tebal atau miring yang bisa dimiliki kolom-kolom itu.",
      },
      {
        q: "Kenapa namaku kembali normal di beberapa server?",
        a: "Pemilik server dan bot bisa mereset atau memoderasi nama. Kalau berubah hanya di satu server, penyebabnya aturan server itu — bukan karakternya.",
      },
    ],
  },
  "roblox-name-generator": {
    navName: "Roblox",
    h1: "Generator Nama Roblox",
    title: "Generator Nama Roblox – ide nama keren dan aturan aslinya",
    description:
      "Buat ide nama tampilan Roblox dengan simbol dan gaya — plus panduan jelas soal beda username dan nama tampilan.",
    intro:
      "Hias nama Roblox-mu dengan simbol dan gaya — dan pahami persis di mana tiap jenis nama bisa dipakai, karena Roblox memisahkan username dan nama tampilan secara ketat.",
    defaultText: "ShadowHero",
    presets: [
      { label: "Bingkai arena", left: "꧁ ", right: " ꧂", transform: "bold" },
      { label: "Tag pro", left: "✪ ", right: "", transform: "smallCaps" },
      { label: "Bungkus bintang", left: "★ ", right: " ★", transform: "identity" },
      { label: "Kurung", left: "『", right: "』", transform: "bold" },
    ],
    guidance: [
      {
        label: "Username",
        body: "Identitas loginmu: 3–20 karakter, huruf, angka, dan satu underscore. Ditegakkan ketat — tanpa simbol, spasi, atau karakter bergaya, selamanya.",
      },
      {
        label: "Nama tampilan",
        body: "Nama yang dilihat pemain lain, bisa diganti di pengaturan. Lebih fleksibel dari username, tapi tetap melewati filter — gaya berhias bisa ditolak atau diubah. Uji sebelum menghabiskan kesempatan ganti nama.",
      },
      {
        label: "Di mana gaya cocok",
        body: "Biarkan nama dasarmu polos dan tambahkan dekorasi yang bisa dilepas: kalau sebuah game atau pembaruan menolak simbol, kamu masih punya nama bersih di baliknya.",
      },
    ],
    compatNote:
      "Roblox menjalankan filter karakternya sendiri pada nama dan memperbaruinya dari waktu ke waktu. Tidak ada di sini yang menjamin nama berhias diterima — buat, salin, dan uji di layar ganti nama Roblox sendiri sebelum memutuskan.",
    faq: [
      {
        q: "Apakah username Roblox boleh ada simbol atau font?",
        a: "Tidak. Username dikunci ke huruf, angka, dan satu underscore. Gaya berhias hanya berlaku di nama tampilan — dan bahkan di situ, filter Roblox yang memutuskan.",
      },
      {
        q: "Kenapa nama tampilanku diubah?",
        a: "Roblox menjalankan filter otomatis pada nama tampilan, dan nama yang penuh simbol sering jadi sasaran. Kombinasi yang lebih polos, atau nama dasar dengan satu simbol, lebih sering selamat.",
      },
      {
        q: "Apakah generator ini berafiliasi dengan Roblox?",
        a: "Tidak — FancyFont adalah alat independen. Roblox dan merek terkait milik Roblox Corporation; halaman ini hanya membantumu memilih nama dalam aturan mereka.",
      },
    ],
  },
};
