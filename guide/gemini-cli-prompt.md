# Prompt untuk Gemini CLI — Development Portfolio Faazamu

Gunakan prompt ini sebagai starting point. Disarankan dijalankan section per section (bukan sekaligus semua) agar hasilnya lebih presisi.

---

## Prompt Awal (Setup Project)

```
Saya ingin membangun website portfolio personal menggunakan React Next.js dan Tailwind CSS,
yang akan di-deploy ke Vercel dengan domain faazamu.xyz.

Sebelum mulai coding, baca dan pahami dua file berikut di direktori ini:
- design-notes.md (design tokens: warna, font, breakpoint)
- interactions.md (spesifikasi animasi/interaksi tiap section)

Referensi visual layout ada di folder assets/layoutGuide/layoutGuideAll.png (screenshot seluruh section)
dan aset ilustrasi karakter ada di folder /assets/illustrations/barok/ dan
/assets/illustrations/portfolio/.

Install dependency berikut di awal:
- framer-motion (untuk parallax hero, about, illustration artwork)
- gsap (untuk sticky-stack panel komik)

Struktur section dari atas ke bawah:
1. Hero
2. About Me
3. Illustration Artwork
4. Comic Artwork (10 panel)
5. Mascot Design
6. Achievement
7. Contact/Footer

Mulai dari section Hero dulu, jangan generate semua section sekaligus.
```

---

## Prompt per Section

### 1. Hero Section
```
Buatkan komponen Hero section berdasarkan layoutGuide/hero.png.

Elemen:
- Teks "Welcome to my" (kecil) + "PORTO" / "FOLIO" (besar, terpisah kiri-kanan)
- Nama "Ahmad Faaza Mubaarok" + tagline "Illustrator & Web Developer"
- Ilustrasi Barok: assets/illustrations/barok/hero-barok-base.png
- Kertas-kertas sketsa terpisah: assets/illustrations/barok/heroLayerPaper.png,
  heroLayerBarok.png

Terapkan efek parallax sesuai interactions.md bagian "Hero Section":
- Barok bergerak lebih lambat dari kertas-kertas saat scroll
- Gunakan Framer Motion useScroll + useTransform

Gunakan warna dan font dari design-notes.md. Pastikan responsive
(cek tampilan mobile, teks PORTO/FOLIO jangan overflow di layar kecil).
```

### 2. About Me Section
```
Buatkan komponen About Me section berdasarkan layoutGuide/aboutMe.png.

Elemen:
- Ilustrasi Barok duduk menggambar: assets/illustrations/barok/aboutMe.png
- Judul "Hi, I'm Faazamu" + paragraf deskripsi (teks ada di copy-content.md)

Terapkan parallax ringan antara ilustrasi dan teks sesuai interactions.md
bagian "About Me Section" — pergeseran subtle, jangan sampai mengganggu
keterbacaan teks.
```

### 3. Illustration Artwork Section
```
Buatkan komponen Illustration Artwork section berdasarkan
layoutGuide/illustrationArtwork.png.

Elemen:
- Ilustrasi Barok naik roket pensil: assets/illustrations/barok/IllustrationArtwork.png
- 3 thumbnail karya: assets/illustrations/portfolio/illustration1.png, illustration2.png, illustration3.png
- Label vertikal "Illustration Artworks"

Terapkan efek sesuai interactions.md bagian "Illustration Artwork Section":
3 thumbnail muncul dari bawah viewport saat scroll dan sedikit overlap
ilustrasi Barok (z-index thumbnail di atas Barok).
```

### 4. Comic Artwork Section
```
Buatkan komponen Comic Artwork section berdasarkan
layoutGuide/comic.png.

10 panel komik ada di assets/illustrations/comic/comic1.png sampai comic10.png.

Terapkan efek sticky-stack sesuai interactions.md bagian "Comic Artwork Section"
menggunakan GSAP ScrollTrigger dengan pin per panel. Tambahkan indikator progress
(contoh: "3/10") di pojok layar.

Pastikan lazy-loading untuk panel yang belum terlihat, dan kompresi gambar
sudah diterapkan sebelum digunakan.
```

### 5. Mascot Design Section
```
Buatkan komponen Mascot Design section berdasarkan layoutGuide/mascotDesign.png.
Section ini statis (tanpa parallax), tampilkan ilustrasi Diega dan variasi
desainnya dalam grid rapi. Aset ada di assets/illustrations/diega/.
```

### 6. Achievement Section
```
Buatkan komponen Achievement section berdasarkan layoutGuide/achievement.png.
Gunakan grid atau carousel biasa (bukan sticky-stack) untuk menampilkan
sertifikat. Aset sertifikat ada di assets/certificates/.
Tambahkan efek fade-in sederhana saat tiap sertifikat masuk viewport.
```

---

## Tips Tambahan

- Jika hasil generate melenceng dari desain, koreksi dengan menyebutkan
  bagian spesifik yang salah (contoh: "posisi thumbnail terlalu besar,
  perkecil ke 120px dan pindahkan ke kanan atas") — jangan minta generate ulang
  dari nol.
- Setelah tiap section jadi, cek dan minta Gemini CLI menjalankan build lokal
  untuk memastikan tidak ada error sebelum lanjut ke section berikutnya.
