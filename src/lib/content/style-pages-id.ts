// Indonesian copy for the dedicated style generator pages.

import type { StylePageCopy } from "./style-pages-en";

export const stylePagesId: Record<string, StylePageCopy> = {
  "cursive-text-generator": {
    navName: "Cursive",
    h1: "Generator Huruf Cursive",
    description:
      "Ubah teks biasa menjadi huruf cursive Unicode yang mengalir. Dua ketebalan, pratinjau langsung, salin untuk bio, nama, dan chat.",
    intro:
      "Ubah teksmu menjadi huruf cursive dengan karakter Unicode — tanpa install font, tanpa daftar. Ketik di bawah, pilih ketebalan, lalu salin.",
    howItWorks:
      "Huruf cursive dibuat dari rentang Unicode Mathematical Script dan Bold Script. Setiap huruf ditukar dengan karakter serupa yang memang digambar dengan goresan tulisan tangan yang tersambung — itulah alasan gaya ini bertahan saat dicopy-paste, sesuatu yang tak bisa dilakukan font sungguhan.",
    coverageNote:
      "Kedua gaya cursive hanya mengonversi A–Z dan a–z. Unicode tidak punya angka cursive, jadi angka tetap seperti aslinya; huruf beraksen, emoji, dan aksara lain juga tidak berubah. Cursive tebal adalah satu alfabet utuh. Cursive tipis tidak punya bentuk matematis untuk e, g, dan o, jadi ketiga huruf itu memakai potongan lain (ℯ ℊ ℴ).",
    bestFor: [
      "Bio Instagram dan nama tampilan dengan kesan tulisan tangan yang lembut",
      "Branding kecantikan, pernikahan, dan lifestyle",
      "Kutipan pendek dan caption bergaya tulisan tangan",
    ],
    sampleInputs: ["Nama Kamu", "Sweet Tea", "Lily"],
    platformTip:
      "Huruf cursive berfungsi di hampir semua bio dan nama tampilan Instagram, TikTok, dan Discord. Beberapa game menolaknya karena font bawaan mereka hanya mendukung huruf dasar — pratinjau dulu sebelum dipakai.",
    faq: [
      {
        q: "Apakah huruf cursive ini font sungguhan?",
        a: "Bukan. Ini karakter Unicode yang tampak seperti tulisan tangan. Justru itu sebabnya bisa ditempel di aplikasi yang hanya menerima teks biasa.",
      },
      {
        q: "Kenapa muncul kotak-kotak di beberapa perangkat?",
        a: "Perangkat itu tidak punya font untuk karakter tersebut. Paling sering di Android lama. Pakai versi cursive tebal atau coba gaya lain.",
      },
      {
        q: "Bisakah huruf cursive dipakai di username Instagram?",
        a: "Tidak — username Instagram hanya menerima huruf, angka, titik, dan underscore. Cursive dipakai di nama tampilan dan bio.",
      },
    ],
  },
  "gothic-text-generator": {
    navName: "Gothic",
    h1: "Generator Huruf Gothic",
    description:
      "Generator huruf Fraktur dan Old English, blackletter gothic. Dua ketebalan, pratinjau langsung, salin sekali ketuk untuk nama, bio, dan clan.",
    intro:
      "Ketik apa saja dan ubah menjadi Fraktur, blackletter Old English pada logo band metal, tag clan, dan bio gelap. Dua ketebalan, salin dalam satu klik.",
    howItWorks:
      "Huruf gothic memakai rentang Unicode Mathematical Fraktur. Fraktur, yang sering disebut Old English, adalah gaya tulisan tangan Jerman bersejarah, dan Unicode menyediakan alfabet lengkapnya — termasuk bentuk khusus untuk C, H, I, R, dan Z.",
    coverageNote:
      "Kedua gaya gothic hanya mengonversi A–Z dan a–z. Angka, huruf beraksen, dan emoji tetap seperti aslinya karena Unicode tidak punya angka fraktur.",
    bestFor: [
      "Nama game dan tag clan dengan estetika metal atau gelap",
      "Bio Halloween dan promosi acara",
      "Wordmark bergaya band di profil sosial",
    ],
    sampleInputs: ["Bayangan", "Malam", "Gagak"],
    platformTip:
      "Karakter blackletter didukung baik di ponsel modern, tapi beberapa perangkat lama menampilkan kotak. Uji di aplikasi yang kamu tuju — terutama di dalam game.",
    faq: [
      {
        q: "Apakah Fraktur atau Old English generator yang berbeda dari gothic?",
        a: "Bukan. Halaman ini mencakup ketiga nama itu. Fraktur dan Old English adalah alfabet blackletter yang sama, dan gothic adalah nama pencarian untuk karakter yang sama. Tidak ada berkas font terpisah.",
      },
      {
        q: "Apa bedanya dua gaya gothic ini?",
        a: "Yang pertama fraktur klasik dengan goresan tipis; yang kedua versi tebal yang tetap terbaca di ukuran kecil.",
      },
      {
        q: "Kenapa beberapa huruf terlihat berbeda?",
        a: "Huruf seperti C, H, I, R, dan Z berasal dari tipografi blackletter bersejarah, bukan rentang matematis, jadi bentuknya sedikit berbeda. Itu bagian otentik dari gaya ini.",
      },
      {
        q: "Apakah bisa dipakai di nama Roblox atau Fortnite?",
        a: "Kedua game itu membatasi kumpulan karakter nama, dan banyak pemain melaporkan huruf gothic ditolak. Coba dulu di pratinjau ganti nama, atau pakai kombinasi dari Generator Nama Game yang membiarkan nama dasarmu polos.",
      },
    ],
  },
  "bold-text-generator": {
    navName: "Tebal",
    h1: "Generator Huruf Tebal",
    description:
      "Buat teksmu tebal di mana pun hanya teks biasa yang diterima. Ketebalan serif, sans, dan miring — pratinjau dan salin dalam hitungan detik.",
    intro:
      "Tebal sungguhan yang bertahan saat dicopy-paste — ke status WhatsApp, postingan X, nama Discord, dan tempat tanpa tombol format.",
    howItWorks:
      "Gaya tebal memakai tiga rentang Unicode: Mathematical Bold untuk serif klasik, Mathematical Sans-Serif Bold untuk tampilan lebih bersih, dan Mathematical Bold Italic untuk penekanan ekstra. Setiap huruf adalah karakter tersendiri, jadi ketebalan ikut pindah bersama teksnya.",
    coverageNote:
      "Tebal serif dan sans mengonversi huruf dan angka. Gaya tebal miring hanya huruf — Unicode tidak punya angka tebal miring — dan apa pun di luar A–Z, a–z, 0–9 tetap seperti aslinya.",
    bestFor: [
      "Menekankan satu dua kata di bio dan caption",
      "Pengumuman di tempat tanpa opsi format",
      "Tag game yang kuat dan mudah dibaca",
    ],
    sampleInputs: ["Breaking News", "Diskon 50%", "GOAT"],
    platformTip:
      "Tebal Unicode bekerja hampir di mana pun teks biasa bekerja. Di aplikasi dengan format asli seperti pesan Discord, gunakan tebal bawaan aplikasi — rendernya lebih konsisten.",
    faq: [
      {
        q: "Kenapa tidak pakai tombol bold saja?",
        a: "Banyak tempat — caption Instagram, bio TikTok, sebagian besar nama game — tidak punya opsi format. Karakter Unicode tebal adalah satu-satunya cara mendapatkannya di sana.",
      },
      {
        q: "Apakah huruf tebal mengganggu pembaca layar?",
        a: "Beberapa pembaca layar membacanya huruf per huruf atau mengejanya aneh. Untuk paragraf panjang, format asli lebih baik; untuk nama atau satu kata, tidak masalah.",
      },
      {
        q: "Adakah angka tebal?",
        a: "Ada — di gaya serif dan sans. Gaya tebal miring tidak punya angka, jadi angka tetap normal di sana.",
      },
    ],
  },
  "italic-text-generator": {
    navName: "Miring",
    h1: "Generator Huruf Miring",
    description:
      "Tulis teks miring yang bisa ditempel di mana saja. Italic serif klasik dan sans yang bersih, dengan pratinjau instan.",
    intro:
      "Teks miring yang elegan untuk ditempel di bio, caption, dan chat — di tempat yang lupa memberimu tombol italic.",
    howItWorks:
      "Gaya klasik memakai rentang Unicode Mathematical Italic, termasuk ℎ bersejarah untuk huruf h. Varian sans miring berasal dari rentang Mathematical Sans-Serif Italic dengan kemiringan yang lebih bersih dan modern.",
    coverageNote:
      "Kedua gaya miring hanya mengonversi huruf — Unicode tidak mendefinisikan angka miring. Angka, tanda baca, emoji, dan aksara lain tetap seperti yang kamu ketik.",
    bestFor: [
      "Caption puitis dan bio pembaca buku",
      "Menyoroti judul dan frasa dalam bahasa lain",
      "Aksen lembut di dalam bio yang sederhana",
    ],
    sampleInputs: ["once upon a time", "mood: cozy", "part 2"],
    platformTip:
      "Italic Unicode aman di bio, nama tampilan, dan pesan di semua platform besar. Hindari paragraf panjang — beberapa pembaca layar tersendak pada huruf matematis, dan teks miring lebih berat dibaca.",
    faq: [
      {
        q: "Kenapa angkaku tidak berubah?",
        a: "Unicode tidak punya angka miring — hanya huruf. Angkamu tetap gaya normal, yang biasanya cocok dicampur dengan huruf miring.",
      },
      {
        q: "Pilih italic yang mana?",
        a: "Italic serif terasa klasik dan literer; sans italic lebih bersih di ukuran kecil. Keduanya disalin dengan cara yang sama — coba keduanya pada teksmu.",
      },
      {
        q: "Bolehkah seluruh bio Instagram dibuat miring?",
        a: "Bisa, tapi kami tidak menyarankannya: blok panjang karakter matematis terbaca aneh oleh teknologi bantu dan melelahkan mata. Miringkan satu kata atau satu baris saja.",
      },
    ],
  },
  "bubble-letters-generator": {
    navName: "Balon",
    h1: "Generator Huruf Balon",
    description:
      "Bungkus hurufmu dalam lingkaran penuh, cincin tipis, atau kotak. Huruf Unicode yang playful dengan pratinjau langsung dan salin sekali ketuk.",
    intro:
      "Beri setiap huruf gelembungnya sendiri. Tiga rasa — balon penuh, cincin tipis, dan kotak tebal — semuanya bisa disalin sebagai teks biasa.",
    howItWorks:
      "Huruf balon memakai blok Unicode Enclosed Alphanumerics dan suplemennya: lingkaran penuh untuk kesan balon, bentuk melingkar tipis untuk kesan ringan, dan kotak negatif untuk alternatif yang kokoh. Setiap karakter adalah satu titik kode Unicode.",
    coverageNote:
      "Gaya balon dan lingkaran mengonversi huruf dan angka, termasuk karakter khusus untuk nol. Gaya kotak hanya huruf dan sering tampil sebagai emoji berwarna di ponsel — seru, tapi uji dulu.",
    bestFor: [
      "Nama lucu dan guyonan dalam grup teman",
      "Undangan pesta anak dan postingan santai",
      "Menyoroti satu huruf atau angka di bio",
    ],
    sampleInputs: ["Balon", "Pesta 2026", "ABC"],
    platformTip:
      "Karakter berlingkar didukung baik di ponsel — tempat mereka paling sering dipakai. Pengecualiananya adalah gaya kotak: banyak perangkat merendernya sebagai emoji, jadi cek dulu tampilannya di tempat tujuan.",
    faq: [
      {
        q: "Apa bedanya balon dan lingkaran?",
        a: "Huruf balon berada di lingkaran hitam penuh; huruf lingkaran di cincin tipis. Balon lebih mencolok, lingkaran lebih rapi.",
      },
      {
        q: "Kenapa angka nol terlihat berbeda?",
        a: "Unicode mengodekan nol secara berbeda dari angka lain dan memberinya karakter sendiri. Gaya balon dan lingkaran mengikutinya — hanya gaya kurung yang melewatkan nol.",
      },
      {
        q: "Bolehkah huruf balon dipakai di nama game?",
        a: "Beberapa game mengizinkan karakter berlingkar, yang ketat tidak. Copy kombinasi dari Generator Nama Game yang membiarkan nama dasarmu polos, jadi selalu ada cadangan.",
      },
    ],
  },
  "small-caps-generator": {
    navName: "Kapital Kecil",
    h1: "Generator Kapital Kecil (Small Caps)",
    description:
      "Tulis dengan huruf kapital kecil — tampilan tenang dan premium untuk bio, nama tampilan, dan caption. Konversi dan salin seketika.",
    intro:
      "Kapital kecil mengubah teksmu menjadi huruf kapital mini — tampilan tenang dan premium yang sering terlihat di bio bersih dan profil aesthetic. Ketik, konversi, salin.",
    howItWorks:
      "Kapital kecil memakai Phonetic Extensions dan Small Form Variants dari Unicode: sekumpulan huruf kapital mini yang dipakai typografer untuk notasi akademik. Huruf tanpa bentuk kapital kecil — seperti x kecil — tetap apa adanya, sehingga gaya ini tetap terbaca alami.",
    coverageNote:
      "Kapital kecil mengonversi A–Z dan a–z. Angka dan tanda baca tidak terpengaruh. Satu fakta unik: tidak ada bentuk kapital kecil untuk x di seluruh Unicode, jadi x tetap kecil.",
    bestFor: [
      "Bio minimalis dan nama tampilan aesthetic",
      "Judul bab dan label bagian di postingan",
      "Tampilan premium dan tenang untuk frasa pendek",
    ],
    sampleInputs: ["aesthetic", "Bab Satu", "mood"],
    platformTip:
      "Kapital kecil termasuk karakter bergaya paling aman — tampil di hampir semua perangkat dan diterima hampir di mana pun, termasuk sebagian besar game.",
    faq: [
      {
        q: "Kenapa x tetap kecil?",
        a: "Unicode tidak pernah mendefinisikan kapital kecil X, jadi tidak ada yang bisa menggantikannya. Generator yang mengonversi x sesungguhnya memakai karakter lain yang mungkin tidak tampil di semua perangkat.",
      },
      {
        q: "Apakah kapital kecil sama dengan huruf kecil?",
        a: "Bukan — ini bentuk kapital berukuran lebih kecil dengan desain berbeda dari huruf kecil. Salin satu dari masing-masing dan bandingkan.",
      },
      {
        q: "Apakah kapital kecil bisa dipakai di nama game?",
        a: "Biasanya bisa — ini salah satu gaya yang paling banyak diterima. Game yang ketat tetap bisa menolak, jadi pratinjau dulu di layar ganti nama.",
      },
    ],
  },
  "strikethrough-text-generator": {
    navName: "Coret",
    h1: "Generator Teks Coret",
    description:
      "Coret teks dengan garis, garis miring, atau tebal tercoret. Salin hasilnya ke mana pun teks biasa diterima.",
    intro:
      "Coret teks apa pun — untuk guyonan, turun harga, sarkasme, dan koreksi. Tiga varian coret, semuanya bisa ditempel ke aplikasi tanpa tombol format.",
    howItWorks:
        "Coret tidak menukar huruf sama sekali — ia menambahkan tanda kombinasi setelah setiap karakter. Teks aslimu tetap utuh di baliknya, itulah sebabnya gaya ini bekerja sama baiknya pada huruf, angka, emoji, bahkan karakter Mandarin.",
    coverageNote:
      "Karena gaya ini menambah tanda alih-alih mengganti karakter, ia bekerja pada masukan apa pun. Konsekuensinya: pembaca layar mungkin tetap membaca teks dasarnya, dan beberapa aplikasi merender jarak tanda secara tidak merata.",
    bestFor: [
      "Koreksi lucu dan guyonan sadar-diri di bio dan chat",
      "Harga lama yang dicoret di postingan promo",
      "Editan dan koreksi di grup chat",
    ],
    sampleInputs: ["ide buruk", "dulu Rp99.000", "sudah, lupakan"],
    platformTip:
      "Coret tampil di sebagian besar aplikasi modern. Di Discord, pesan mendukung markdown asli (~~seperti ini~~) — coret Unicode untuk bio, nama, dan semua tempat tanpa markdown.",
    faq: [
      {
        q: "Kenapa teks coretku terlihat tidak rata?",
        a: "Setiap app menggambar tanda kombinasi dengan fontnya sendiri, dan beberapa menyelaraskannya kurang sempurna. Kalau garisnya tampak patah, gaya tebal coret biasanya lebih rata karena hurufnya lebih lebar.",
      },
      {
        q: "Bisakah emoji dicoret?",
        a: "Bisa — tanda ditambahkan setelah emoji, jadi garisnya melintasinya. Hasilnya sedikit berbeda per platform karena tiap platform menggambar emoji dengan caranya sendiri.",
      },
      {
        q: "Apakah teks aslinya masih ada di baliknya?",
        a: "Ya. Coret murni visual — karakternya tidak berubah, jadi salin-tempel, pencarian, dan pembaca layar tetap melihat teks dasarnya.",
      },
    ],
  },
  "glitch-text-generator": {
    navName: "Glitch",
    h1: "Generator Huruf Glitch (Zalgo)",
    description:
      "Rusak teksmu dengan tanda kombinsi berbahaya — tiga tingkat glitch, dari halus sampai zalgo total. Salin sekali ketuk.",
    intro:
      "Ramasukkan tanda merayap ke teksmu. Pilih tingkat kerusakan — dari sedikit janggal sampai zalgo penuh — lalu tempel kekacauannya ke mana saja.",
    howItWorks:
      "Teks zalgo menumpuk tanda kombinasi Unicode di atas dan bawah setiap karakter. Generator ini memilih tanda dengan proses deterministik berbasis seed — masukan yang sama selalu menghasilkan glitch yang sama, jadi pratinjau persis seperti yang kamu salin.",
    coverageNote:
      "Glitch bekerja pada karakter apa pun — huruf, angka, emoji — karena tidak ada yang diganti. Tingkat berat menumpuk banyak tanda per huruf, dan dari situ lahir tampilan film horor.",
    bestFor: [
      "Nama terkutuk dan profil bertema horor",
      "Meme dan energi kacau di grup chat",
      "Bio musim seram dan acara Halloween",
    ],
    sampleInputs: ["tolong", "jangan lihat", "halo"],
    platformTip:
      "Glitch adalah gaya paling berat yang bisa kamu tempel. Beberapa aplikasi membatasi jumlah tanda, memangkasnya, atau merendernya dalam satu garis — selalu uji sebelum mengganti nama penting.",
    faq: [
      {
        q: "Apa itu zalgo?",
        a: "Legenda internet yang lahir dari komik tahun 2004: teks yang dirusak tanda diakritik bertumpuk hingga tampak kerasukan. Namanya akhirnya melekat sebagai nama gaya ini.",
      },
      {
        q: "Kenapa glitchku terlihat lemah di beberapa aplikasi?",
        a: "Aplikasi membatasi atau menormalkan tanda kombinasi agar teks tetap bisa dirender. Tidak ada yang rusak — aplikasinya melindungi tata letaknya sendiri.",
      },
      {
        q: "Apakah teks glitch buruk untuk pembaca layar?",
        a: "Ya — tanda bertumpuk dibaca sebagai puluhan diakritik atau dilewati sepenuhnya. Gunakan untuk nama dan lelucon, bukan informasi penting.",
      },
    ],
  },
  "upside-down-text-generator": {
    navName: "Terbalik",
    h1: "Generator Huruf Terbalik",
    description:
      "Balik teksmu dengan huruf dan tanda baca Unicode yang terbalik. Ketik, lihat berputar, salin dan buat semua orang bingung.",
    intro:
      "Balik saja. Generator ini menulis ulang teksmu dengan bentuk huruf terbalik dan membalik urutannya, sehingga seluruh baris terbaca diputar 180°.",
    howItWorks:
      "Setiap karakter ditukar dengan kembaran yang diputar — a menjadi ɐ, b menjadi q — lalu hasilnya dibalik agar huruf terakhir masuk paling depan. Tanda baca ikut berbalik: tanda seru menjadi ¡, tanda tanya menjadi ¿.",
    coverageNote:
      "Huruf dan angka terkonversi dengan baik; beberapa huruf kapital langka seperti K dan Q tidak punya bentuk putar yang baik dan tetap apa adanya. Apa pun yang tak bisa dibalik petanya — termasuk emoji — lewat tanpa perubahan.",
    bestFor: [
      "Teka-teki bio dan caption 'baca kalau bisa'",
      "Guyonan di balasan grup",
      "Nama profil yang membuat orang memiringkan kepala",
    ],
    sampleInputs: ["halo", "putar aku", "wow"],
    platformTip:
      "Teks terbalik didukung baik di bio dan pesan. Catatan: pembaca layar akan membaca teks terbalik ini apa adanya — jaga agar tetap pendek dan menghibur.",
    faq: [
      {
        q: "Apakah benar-benar diputar, atau hurufnya diganti?",
        a: "Diganti: Unicode punya bentuk huruf terbalik khusus seperti ɐ dan ǝ. Penggantian itulah yang membuat teksnya bertahan saat dicopy-paste.",
      },
      {
        q: "Kenapa teksku jadi terbalik urutannya?",
        a: "Teks yang diputar terbaca dari kanan ke kiri secara visual, jadi urutannya dibalik agar terbaca benar saat halaman dibalik.",
      },
      {
        q: "Bisakah emoji dibalik?",
        a: "Tidak — emoji tidak punya bentuk terbalik, jadi lewat tanpa perubahan dan tetap menghadap ke atas.",
      },
    ],
  },
  "tiny-text-generator": {
    navName: "Kecil",
    h1: "Generator Huruf Kecil",
    description:
      "Perkecil teksmu dengan huruf superskrip dan subskrip Unicode. Dua gaya kecil, pratinjau instan, salin ke mana saja.",
    intro:
      "Perkecil katamu sampai seukuran bisikan. Superskrip mengapungkan teks di atas garis; subskrip menenggelamkannya di bawah. Keduanya disalin sebagai teks biasa.",
    howItWorks:
      "Huruf kecil memakai huruf modifikasi superskrip dan subskrip Unicode — karakter yang sama dengan penanda catatan kaki dan rumus kimia. Masing-masing adalah kembaran ringkas sebagian kecil dari ukuran normal.",
    coverageNote:
      "Ini gaya dengan cakupan paling terbatas di situs ini: superskrip kecil mencakup hampir semua huruf kecuali q, dan subskrip melewatkan b, c, d, f, g, q, w, y, z. Yang tidak punya bentuk kecil — termasuk hampir semua kapital — tetap normal, jadi hasil campuran adalah hal yang wajar.",
    bestFor: [
      "Catatan kaki kecil di bio ('dia/dia', kredit mungil)",
      "Kimia dan matematika terbalik di akun belajar",
      "Komentar pelan di samping teks yang lebih ramai",
    ],
    sampleInputs: ["bisikan", "H2O", "catatan:"],
    platformTip:
      "Huruf kecil render dengan baik di bio dan pesan, tapi celah di huruf yang hilang bisa terlihat. Kalau itu mengganggu, kapital kecil memberi kesan serupa dengan cakupan penuh.",
    faq: [
      {
        q: "Kenapa ada huruf besar dan kecil campur?",
        a: "Unicode tidak punya bentuk superskrip atau subskrip untuk setiap huruf. Yang tidak tersedia tetap berukuran normal — itu keterbatasan yang diketahui dari gaya ini.",
      },
      {
        q: "Bisakah menulis angka kecil?",
        a: "Bisa — angka superskrip dan subskrip lengkap, dari ⁰ sampai ⁹ dan ₀ sampai ₉. Makanya H₂O tampil sempurna.",
      },
      {
        q: "Apakah huruf kecil masih terbaca?",
        a: "Di ukuran bio, lumayan. Paling cocok untuk satu dua kata, bukan kalimat — dan jangan untuk informasi yang harus mudah diakses.",
      },
    ],
  },
  "cute-font-generator": {
    navName: "Imut",
    h1: "Generator Huruf Imut",
    description:
      "Huruf imut untuk disalin: huruf balon bundar dengan satu hati, pita, atau bunga. Gratis di browser, tanpa menginstal apa pun.",
    intro:
      "Ketik sebuah nama dan dapatkan huruf balon dengan satu hati, pita ୨୧, atau bunga. Orang juga menyebutnya kawaii atau soft. Baris cursive ada di bawah kalau kamu mau yang lebih tenang. Script dengan pita ada di halaman coquette. Ini karakter untuk ditempel, bukan berkas font.",
    howItWorks:
      "Huruf balon dan lingkaran adalah alfanumerik tertutup. Baris yang mengalir adalah Mathematical Script. Hati, pita (୨୧), bunga, dan kurung lembut adalah simbol terpisah, dan hanya baris balon yang memakainya — satu pasang setiap kali, supaya namanya tetap terbaca.",
    coverageNote:
      "Balon dan lingkaran mengubah A–Z, a–z, dan angka. Cursive hanya mengubah huruf, jadi angka di baris itu tetap biasa. Huruf beraksen, emoji, dan aksara lain lewat begitu saja. Hiasan adalah karakter tambahan di sekeliling kata.",
    bestFor: [
      "Nama tampilan dan bio yang harus terasa lembut",
      "Nama pendek dengan satu hati atau satu pita",
      "Caption, bukan kalimat panjang",
    ],
    sampleInputs: ["Momo", "Lembut", "Persik"],
    platformTip:
      "Huruf imut berfungsi di sebagian besar nama tampilan dan bio Instagram, TikTok, dan Discord. Username yang hanya menerima huruf biasa akan menolaknya. Kalau pita atau kurung lembut jadi kotak kosong, salin baris hati.",
    faq: [
      {
        q: "Apakah huruf imut itu berkas yang diunduh?",
        a: "Bukan. Hasilnya karakter Unicode, makanya bisa ditempel ke app yang hanya menerima teks polos. Situs ini tidak menawarkan berkas font.",
      },
      {
        q: "Apakah coquette atau kawaii generator lain?",
        a: "Kawaii tetap di halaman ini: huruf balon dengan hati, pita ୨୧, atau bunga. Coquette adalah halaman lain, huruf script dengan pita.",
      },
      {
        q: "Bisa dipakai sebagai username Instagram?",
        a: "Tidak. Username Instagram hanya menerima huruf, angka, titik, dan garis bawah. Tempel nama imut ke nama tampilan atau bio.",
      },
    ],
  },
  "cool-font-generator": {
    navName: "Cool",
    h1: "Generator Huruf Cool",
    description:
      "Nama cool untuk disalin: huruf tebal dengan petir, bintang, atau sayap klan. Gratis, dan tetap di browser kamu.",
    intro:
      "Huruf tebal, lalu petir, tanda bintang, atau sayap klan ꧁༒. Orang juga mencarinya sebagai teks stylish atau tag klan. Halaman ini merakit satu nama berhias. Daftar setiap alfabet, tanpa simbol, ada di Huruf Keren.",
    howItWorks:
      "Huruf yang berat adalah Unicode Mathematical Bold. Small caps adalah baris kedua yang lebih tenang dan tanpa hiasan, supaya bisa dibandingkan dengan baris tebal yang berhias. Bintang, petir, dan sayap hanya membungkus baris tebal.",
    coverageNote:
      "Tebal mengubah huruf dan angka. Small caps mengubah sebagian besar huruf dan membiarkan beberapa tetap kalau Unicode tidak punya bentuk small-cap. Hiasan dihitung dalam batas panjang nama.",
    bestFor: [
      "Nama tampilan Discord dan tag game",
      "Nama klan dengan satu pasang sayap",
      "Satu kata yang harus lebih berat daripada cursive",
    ],
    sampleInputs: ["Nova", "Ace", "Klan"],
    platformTip:
      "Unicode tebal biasanya bertahan di Discord dan bio. Game yang hanya menerima ASCII polos akan membuangnya. Sayap gagal lebih dulu di ponsel lama — kalau hilang, salin baris petir.",
    faq: [
      {
        q: "Apakah ini sama dengan halaman huruf keren?",
        a: "Tidak. Huruf Keren memuat setiap alfabet dan tidak menambah hiasan. Halaman ini hanya merakit tampilan cool: tebal plus petir, bintang, atau sayap klan.",
      },
      {
        q: "Apa arti teks stylish di sini?",
        a: "Nama tebal berhias yang sama. Stylish, di halaman ini, adalah baris petir, bintang, dan sayap — bukan alfabet lain.",
      },
      {
        q: "Apakah tag klan muat di username game?",
        a: "Sering kali simbolnya yang ditolak. Kalau sayap hilang di pratinjau game, pakai baris tebal tanpa hiasan.",
      },
    ],
  },
  "dark-font-generator": {
    navName: "Gelap",
    h1: "Generator Huruf Gelap",
    description:
      "Nama gelap untuk disalin: huruf blackletter dengan tengkorak, belati, atau bulan. Untuk bio dan nama tampilan, bukan unduhan font.",
    intro:
      "Blackletter dengan satu simbol gelap — tengkorak, belati, atau bulan. Huruf emo adalah campuran ini. Halaman gothic adalah alfabet polos, tanpa tengkorak. Halaman ini versi berhiasnya.",
    howItWorks:
      "Hurufnya Unicode Fraktur. Potongan tebal dibungkus; potongan biasa tetap polos di bawah. Tengkorak, belati, dan bulan adalah simbol terpisah, hanya di baris tebal.",
    coverageNote:
      "Kedua gaya fraktur hanya mengubah A–Z dan a–z. Angka tetap seperti yang kamu ketik. Tengkorak adalah simbol dan bisa tampil beda di tiap ponsel. Huruf beraksen dan aksara lain lewat begitu saja.",
    bestFor: [
      "Bio gelap dan nama Discord",
      "Nama emo satu kata",
      "Baris Halloween yang tetap perlu disalin sebagai teks",
    ],
    sampleInputs: ["Malam", "Emo", "Raven"],
    platformTip:
      "Fraktur berfungsi di banyak bio dan gagal di game yang menuntut ASCII polos. Kalau tengkorak jadi kotak kosong, salin baris belati atau bulan.",
    faq: [
      {
        q: "Apakah teks emo berbeda dari gothic?",
        a: "Gothic, di situs ini, adalah alfabet blackletter polos. Emo adalah alfabet itu plus tengkorak, belati, atau bulan — yaitu halaman ini.",
      },
      {
        q: "Bisa mengunduh font gelap?",
        a: "Tidak. Kamu menyalin karakter. Berkas font harus dipasang, dan di sini tidak ada yang dipasang.",
      },
      {
        q: "Kenapa beberapa huruf tampak berbeda?",
        a: "Fraktur menyimpan bentuk historis untuk C, H, I, R, dan Z. Bentuk itu adalah alfabetnya, bukan kerusakan.",
      },
    ],
  },
  "elegant-font-generator": {
    navName: "Elegan",
    h1: "Generator Huruf Elegan",
    description:
      "Cursive elegan untuk disalin, dengan mahkota, fleur-de-lis, atau hati bunga. Untuk nama, caption, dan bio.",
    intro:
      "Cursive tebal, lalu mahkota, fleur-de-lis, atau hati bunga. Nama royal dan putri adalah tampilan yang sama: huruf mengalir dan satu simbol formal, bukan balon bundar.",
    howItWorks:
      "Hurufnya Unicode Bold Script, dengan cursive tipis sebagai baris kedua yang polos. Mahkota, fleur, dan hati bunga hanya membungkus cursive tebal, jadi hiasannya satu pasang per hasil.",
    coverageNote:
      "Kedua gaya cursive hanya mengubah huruf. Angka, aksen, dan emoji tetap seperti yang diketik. Setiap mahkota atau fleur adalah karakter tambahan di sisi nama itu.",
    bestFor: [
      "Nama pernikahan, kecantikan, dan profil formal",
      "Nama royal atau putri di bio",
      "Caption pendek yang harus terasa rapi",
    ],
    sampleInputs: ["Mawar", "Ratu", "Ada"],
    platformTip:
      "Cursive berfungsi di sebagian besar nama tampilan dan bio Instagram, TikTok, dan Discord, bukan di username yang dibatasi huruf biasa. Kalau cursive tebal jadi kotak, salin baris yang tipis.",
    faq: [
      {
        q: "Apakah elegan sama dengan cursive?",
        a: "Cursive adalah alfabet script polos. Elegan memakai cursive yang lebih tebal dan menambah satu simbol formal: mahkota, fleur, atau hati bunga.",
      },
      {
        q: "Di mana font royal dan putri?",
        a: "Di halaman ini. Nama putri atau royal di sini adalah cursive plus mahkota atau fleur-de-lis, bukan unduhan terpisah.",
      },
      {
        q: "Apakah ini berkas font kaligrafi?",
        a: "Bukan. Kamu menyalin karakter. Berkas kaligrafi dipasang, dan situs ini tidak menawarkannya.",
      },
    ],
  },
  "aesthetic-text-generator": {
    navName: "Aesthetic",
    h1: "Generator Huruf Aesthetic",
    description:
      "Huruf lebar vaporwave dengan kilau atau kabut titik di kedua sisi, plus small caps kalau mau lebih tenang. Salin dan tempel, tanpa berkas font.",
    intro:
      "Huruf full-width yang lebar — tampilan vaporwave — dengan kabut titik atau kilau di kedua sisi. Small caps adalah baris kedua saat huruf lebar terasa terlalu keras.",
    howItWorks:
      "Karakter full-width berasal dari enkode lama ketika teks CJK dan Latin berbagi kisi lebar tetap, sehingga huruf Latin mendapat kotak lebarnya sendiri. Spasi ikut melebar, dan dari situlah ritme lambatnya. Kabut titik dan kilau adalah simbol yang membungkus baris lebar itu saja. Keduanya bukan bagian dari alfabet full-width.",
    coverageNote:
      "Full-width mencakup huruf, angka, dan spasi. Small caps mencakup sebagian besar huruf dan membiarkan beberapa tetap. Tanda baca tetap biasa. Hiasan menambah karakter dan membuat baris makin lebar.",
    bestFor: [
      "Profil vaporwave, lo-fi, dan retro",
      "Bio satu kata yang lebar dengan sedikit kilau",
      "Postingan retro-tech dan era 80/90-an",
    ],
    sampleInputs: ["aesthetic", "v a p o r", "mimpi 1997"],
    platformTip:
      "Teks full-width muncul di mana pun teks CJK muncul, artinya hampir di mana saja. Lebar, dan kilau membuatnya lebih lebar — pastikan barisnya masih muat di bio. Kalau kilau gagal, baris lebar yang polos tetap bisa disalin.",
    faq: [
      {
        q: "Kenapa disebut teks vaporwave?",
        a: "Huruf lebar dan spasi lambat menjadi tanda visual vaporwave. Nama teknis hurufnya adalah teks full-width. Kilaunya simbol terpisah di kedua sisi.",
      },
      {
        q: "Apakah spasi lebarnya ikut tersalin?",
        a: "Ya. Spasi lebar adalah karakter nyata, spasi ideografik, jadi ritme lapangnya bertahan saat ditempel. Itu juga memakai lebih banyak batas karakter.",
      },
      {
        q: "Apakah hiasan dihitung di bio?",
        a: "Ya. Setiap huruf full-width dihitung satu, dan setiap kilau atau titik juga. Satu kata pendek adalah panjang yang nyaman.",
      },
    ],
  },
  "coquette-font-generator": {
    navName: "Coquette",
    h1: "Generator huruf coquette",
    description:
      "Teks coquette untuk disalin: huruf script dengan satu pita. Untuk nama tampilan Instagram dan nama panggilan Discord, bukan unduhan font.",
    intro:
      "Huruf script, lalu satu pita. Barisnya pita kecil, sepasang ribbon, dan emoji pita. Huruf imut di situs ini adalah huruf balon. Halaman ini tetap di pita.",
    howItWorks:
      "Pita membungkus script yang lebih tebal, Unicode Bold Script, karena alfabet itu punya e, g, dan o yang utuh. Script tipis ada di bawah, tanpa pita, dan di baris itu e, g, dan o adalah pengganti, jadi nama seperti Belle memakai baris tebal. Pita adalah simbol terpisah, hanya di baris tebal.",
    coverageNote:
      "Script mengubah A–Z dan a–z. Angka tetap seperti yang diketik. Pita kecil adalah karakter langka dan bisa tampil sebagai kotak kosong. Kalau begitu, salin baris emoji pita. Hiasan dihitung dalam batas nama.",
    bestFor: [
      "Nama tampilan dan bio Instagram",
      "Nama panggilan dan status pendek Discord",
      "Nama satu kata dengan satu pita",
    ],
    sampleInputs: ["Mia", "Lila", "Belle"],
    platformTip:
      "Tempel ke nama tampilan Instagram atau nama panggilan Discord. Username di sana hanya menerima huruf biasa, angka, dan sedikit tanda, jadi pita tidak masuk ke username. Nama tampilan Instagram sekitar 30 karakter dan nama panggilan Discord sekitar 32. Kalau pita kecil gagal, emoji pita tetap bisa disalin.",
    faq: [
      {
        q: "Apakah coquette font yang diunduh?",
        a: "Bukan. Kamu menyalin karakter. Berkas font harus dipasang, dan situs ini tidak menawarkannya.",
      },
      {
        q: "Apa bedanya dengan huruf imut?",
        a: "Huruf imut adalah huruf balon dengan hati, pita ୨୧, atau bunga. Coquette adalah script dengan pita. Dua halaman ini tidak memakai hiasan yang sama.",
      },
      {
        q: "Bisakah nama coquette jadi username Instagram?",
        a: "Tidak. Username tetap huruf biasa, angka, dan sedikit tanda. Nama tampilan dan bio boleh dicoba. Karakter yang diterima ditentukan aplikasi; halaman ini tidak memuat daftar karakter lengkap.",
      },
    ],
  },
  "preppy-font-generator": {
    navName: "Preppy",
    h1: "Generator huruf preppy",
    description:
      "Nama preppy untuk disalin: small caps dengan satu hati yang bersih. Cukup pendek untuk dicoba sebagai nama tampilan Adopt Me.",
    intro:
      "Small caps, lalu satu hati: putih, hati kartu, atau hati miring. Tanpa pita dan tanpa huruf balon. Tampilan yang lebih ramai ada di halaman lain. Yang ini tetap bersih, seperti nama preppy di Adopt Me.",
    howItWorks:
      "Small caps adalah huruf pengubah Unicode yang terlihat seperti huruf besar yang lebih pendek. Script adalah baris kedua yang polos. Setiap hati hanya ada di baris small caps, sepasang atau satu sisi, supaya namanya tetap pendek.",
    coverageNote:
      "Small caps mencakup sebagian besar huruf dan membiarkan beberapa tetap bila Unicode tidak punya bentuknya. Script hanya mengubah huruf, jadi angka di baris itu tetap biasa. Hati adalah karakter tambahan. Hati putih adalah emoji dan biasanya yang pertama ditolak filter game.",
    bestFor: [
      "Nama tampilan Adopt Me yang pendek",
      "Nama bersih dengan satu hati",
      "Bio yang harus rapi, bukan bulat",
    ],
    sampleInputs: ["Mila", "Blair", "Tess"],
    platformTip:
      "Adopt Me menampilkan nama tampilan Roblox-mu, biasanya sekitar 20 karakter, dan username tidak bisa memakai font. Nama small caps yang pendek dengan satu hati lebih sering muat daripada pita di kedua sisi. Tempel di layar nama Roblox sebelum kamu mengonfirmasi perubahan.",
    faq: [
      {
        q: "Apakah preppy sama dengan coquette?",
        a: "Tidak. Coquette adalah script dengan pita. Preppy adalah small caps dengan satu hati yang bersih.",
      },
      {
        q: "Apakah ini bisa jadi username Adopt Me?",
        a: "Username Roblox tetap huruf, angka, dan satu garis bawah. Coba nama bergaya sebagai nama tampilan, dan hanya setelah pratinjau game menerimanya.",
      },
      {
        q: "Kenapa hatinya sesederhana ini?",
        a: "Tumpukan pita menghabiskan 20 karakter nama tampilan dan lebih sering difilter. Satu hati adalah tanda preppy, dan nama masih muat.",
      },
    ],
  },
  "heart-font-generator": {
    navName: "Hati",
    h1: "Generator huruf hati",
    description:
      "Teks hati untuk disalin: huruf script dengan hati yang berbeda di masing-masing dari dua belas baris. Gratis di browser, tanpa menginstal apa pun.",
    intro:
      "Huruf script, lalu satu pasang hati per baris — dua belas hati, dan tidak ada dua baris yang memakai simbol yang sama. Satu hati di huruf balon tetap di halaman imut. Satu hati bersih di small caps tetap di halaman preppy. Kamu menyalin karakter. Ini bukan berkas font dan bukan gambar huruf.",
    howItWorks:
      "Baris berhati membungkus Bold Script Unicode, alfabet yang lebih tebal dengan e, g, dan o yang utuh. Script tipis ada di bawah, tanpa hati — di baris itu e, g, dan o adalah pengganti, jadi nama seperti Love atau Belle tetap di baris berhati. Balon adalah baris ketiga dan tetap polos, supaya tidak mengulang halaman imut. Setiap hati adalah simbol terpisah, hanya di baris tebal.",
    coverageNote:
      "Script dan script tebal mengubah A–Z dan a–z. Angka tetap seperti yang diketik. Balon mengubah huruf dan angka. Huruf beraksen, emoji, dan aksara lain lewat begitu saja. Hati adalah karakter tambahan dan dihitung dalam batas nama. Hati yang lebih kecil langka dan bisa tampil sebagai kotak kosong — kalau satu gagal, salin baris hati merah atau baris berkilau.",
    bestFor: [
      "Nama tampilan dan bio Instagram serta TikTok",
      "Nama satu kata atau caption pendek",
      "Nama panggilan Discord yang cukup dengan satu hati di tiap sisi",
    ],
    sampleInputs: ["Love", "Mia", "Honey"],
    platformTip:
      "Tempel nama berhati ke nama tampilan atau bio Instagram, bio TikTok, atau nama panggilan Discord. Username yang hanya menerima huruf biasa akan menolak hati. Nama tampilan Instagram sekitar 30 karakter dan nama panggilan Discord sekitar 32, jadi satu hati di tiap sisi kata pendek lebih sering muat daripada tumpukan simbol.",
    faq: [
      {
        q: "Apakah font hati berkas yang diunduh?",
        a: "Bukan. Hasilnya karakter Unicode, karena itu bisa ditempel ke app yang hanya menerima teks biasa. Situs ini tidak menawarkan berkas font, dan tidak menggambar huruf menjadi gambar.",
      },
      {
        q: "Apa bedanya dengan halaman imut dan preppy?",
        a: "Halaman imut adalah huruf balon dengan satu hati, pita, atau bunga. Preppy adalah small caps dengan satu hati yang bersih. Halaman ini adalah script dengan dua belas pasang hati yang berbeda, dan hati-hati itu tidak dipakai di halaman lain.",
      },
      {
        q: "Bisakah nama berhati jadi username Instagram?",
        a: "Tidak. Username Instagram hanya menerima huruf, angka, titik, dan garis bawah. Tempel nama berhati ke nama tampilan atau bio.",
      },
    ],
  },
  "chicano-font-generator": {
    navName: "Chicano",
    h1: "Generator huruf chicano",
    description:
      "Teks bergaya chicano untuk disalin: blackletter dengan satu hiasan per baris, plus satu baris script. Gratis di browser. Bukan berkas font dan bukan stensil tato.",
    intro:
      "Blackletter klasik, lalu satu hiasan per baris — dua belas tanda, dan tidak ada tengkorak atau bulan dari halaman gelap. Blackletter polos, tanpa hiasan, ada di halaman gothic. Kamu menyalin karakter. Ini bukan huruf Chicano yang digambar tangan, dan bukan stensil.",
    howItWorks:
      "Baris berhiasan membungkus Fraktur Unicode, alfabet blackletter yang sering disebut Old English. Fraktur tebal ada di bawah, tanpa hiasan, supaya goresan yang lebih berat tetap terbaca di ukuran kecil. Script tebal adalah baris ketiga dan tetap polos: itu pengganti bagian tulisan mengalir, dan hurufnya tidak tersambung. Setiap hiasan adalah simbol terpisah, hanya di baris fraktur klasik.",
    coverageNote:
      "Kedua gaya fraktur hanya mengubah A–Z dan a–z. Angka, huruf beraksen seperti á, é, dan ñ, serta emoji tetap seperti yang diketik, karena Unicode tidak punya bentuk fraktur untuk mereka. Script tebal hanya mengubah huruf. Hiasan adalah karakter tambahan dan dihitung dalam batas nama. Hiasan yang langka bisa tampil sebagai kotak kosong — kalau begitu, salin baris salib atau baris fraktur yang polos.",
    bestFor: [
      "Nama pendek atau semboyan satu kata di bio",
      "Membandingkan blackletter dan script sebelum kamu minta seorang seniman huruf",
      "Nama tampilan yang ingin blackletter tanpa tengkorak halaman gelap",
    ],
    sampleInputs: ["Rosa", "Luz", "Vida"],
    platformTip:
      "Tempel ke nama tampilan atau bio, lalu cek di app itu. Game yang hanya menerima huruf biasa akan menolak blackletter. Karakter ini bukan stensil tato: goresannya glif teks, bukan gambar yang diukur untuk kulit.",
    faq: [
      {
        q: "Apakah ini font chicano yang diunduh?",
        a: "Bukan. Kamu menyalin karakter Unicode. Situs ini tidak menawarkan berkas font, dan tidak memuat huruf blackletter atau script berbayar yang dipakai generator gambar.",
      },
      {
        q: "Apakah ini huruf Chicano tradisional?",
        a: "Bukan. Huruf Chicano adalah blackletter dan script yang digambar tangan, dari karya grafis Meksiko-Amerika — mural, mobil, dan tato. Baris di sini hanya mendekati tampilan blackletter, plus satu alfabet script. Ini bukan stensil dan tidak menggantikan seniman.",
      },
      {
        q: "Kenapa ñ dan huruf beraksen tetap biasa?",
        a: "Fraktur Unicode tidak punya bentuk untuk huruf itu, jadi mereka lewat begitu saja dan huruf lainnya tetap berubah.",
      },
    ],
  },
};
