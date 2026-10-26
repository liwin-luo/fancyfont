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
      "Kedua gaya cursive hanya mengonversi A–Z dan a–z. Unicode tidak punya angka cursive, jadi angka tetap seperti aslinya; huruf beraksen, emoji, dan aksara lain juga tidak berubah.",
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
      "Ubah kata apa pun menjadi huruf gothic blackletter. Dua ketebalan, pratinjau langsung, salin sekali ketuk untuk nama, bio, dan clan.",
    intro:
      "Ketik apa saja dan ubah menjadi huruf gothic — gaya klasik dari logo band metal, tag clan, dan bio gelap. Salin dalam satu klik.",
    howItWorks:
      "Huruf gothic memakai rentang Unicode Mathematical Fraktur. Fraktur adalah gaya tulisan tangan Jerman bersejarah, dan Unicode menyediakan alfabet lengkapnya — termasuk bentuk khusus untuk C, H, I, R, dan Z.",
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
  "aesthetic-text-generator": {
    navName: "Aesthetic",
    h1: "Generator Huruf Aesthetic",
    description:
      "Ubah teks menjadi huruf lebar gaya vaporwave — spasi ａｅｓｔｈｅｔｉｃ untuk bio, caption, dan profil lo-fi. Salin sekali ketuk.",
    intro:
      "ａｅｓｔｈｅｔｉｃ. Generator ini melebarkan setiap huruf ke bentuk full-width — ritme lambat dan berjarak khas vaporwave yang mendefinisikan satu estetika.",
    howItWorks:
      "Karakter full-width berasal dari enkode lama ketika teks CJK dan Latin berbagi kisi lebar tetap, sehingga huruf Latin mendapat kotak lebarnya sendiri. Spasi ikut melebar — setiap spasi menjadi spasi ideografik penuh — dan dari situlah ritme melayangnya berasal.",
    coverageNote:
      "Full-width mencakup huruf, angka, dan spasi, jadi frasa utuh terkonversi bersih. Tanda baca tetap dalam bentuk normal, dan emoji serta aksara lain tidak terpengaruh.",
    bestFor: [
      "Profil vaporwave, lo-fi, dan retro",
      "Bio satu kata yang lambat dan berjarak",
      "Postingan bertema retro-tech dan era 80/90-an",
    ],
    sampleInputs: ["aesthetic", "v a p o r", "mimpi 1997"],
    platformTip:
      "Teks full-width tampil di mana pun teks CJK tampil — artinya hampir di mana saja. Tapi lebar: pastikan frasa panjang muat di biomu tanpa patah yang aneh.",
    faq: [
      {
        q: "Kenapa disebut teks vaporwave?",
        a: "Gaya ini menjadi tanda visual budaya musik vaporwave — huruf lebar, spasi lambat, vibe retro-futuristik. Nama teknisnya adalah teks full-width.",
      },
      {
        q: "Apakah spasi lebarnya ikut tersalin?",
        a: "Ya — spasi lebar adalah karakter nyata (spasi ideografik), jadi ritme lapangnya bertahan saat ditempel. Itu juga berarti teksnya memakan lebih banyak kuota karakter.",
      },
      {
        q: "Apakah dihitung lebih banyak karakter di bio?",
        a: "Setiap karakter full-width dihitung satu, sama seperti huruf normal — tapi spasi lebarnya juga dihitung, jadi satu frasa memakai lebih banyak jatahmu.",
      },
    ],
  },
};
