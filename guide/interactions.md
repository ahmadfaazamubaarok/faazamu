# Interactions & Animation Spec — Portfolio Faazamu

Dokumen ini menjelaskan behavior animasi/interaksi tiap section, berdasarkan desain Figma. Gunakan sebagai acuan teknis saat develop, bukan hanya menebak dari screenshot.

---

## 1. Hero Section

**Elemen:** layer Barok (base pose) + layer kertas-kertas sketsa (terpisah, beberapa kertas individual)

**Behavior:**
- Efek parallax multi-layer saat scroll vertikal
- Barok bergerak dengan speed factor lebih lambat (mis. `0.5`)
- Tiap kertas bergerak dengan speed factor lebih cepat (mis. `0.8`–`1.0`), sehingga terkesan "melayang" lebih dinamis dibanding Barok
- Arah gerak: vertikal (translateY), boleh ditambah sedikit rotasi halus per kertas untuk kesan organik

**Rekomendasi implementasi:**
- Library: **Framer Motion** — `useScroll` + `useTransform`
- Tiap elemen (Barok, kertas 1, kertas 2, dst) adalah komponen terpisah dengan `transform: translateY()` berbeda berdasarkan scroll progress
- Gunakan `will-change: transform` untuk performa

```jsx
const { scrollYProgress } = useScroll();
const barokY = useTransform(scrollYProgress, [0, 1], [0, 100]);   // lambat
const paperY = useTransform(scrollYProgress, [0, 1], [0, 220]);  // cepat
```

---

## 2. About Me Section

**Elemen:** ilustrasi Barok sedang menggambar + blok teks "Hi, I'm Faazamu" & deskripsi

**Behavior:**
- Parallax antara ilustrasi dan teks
- Teks bergerak lebih lambat dari ilustrasi (atau sebaliknya — pastikan ada perbedaan speed factor yang terasa, arah sesuai preferensi visual saat testing)
- Efek ini sebaiknya subtle (jarak pergeseran tidak terlalu jauh, agar teks tetap nyaman dibaca)

**Rekomendasi implementasi:**
- Sama seperti hero, Framer Motion `useScroll` + `useTransform` dengan range pergeseran lebih kecil (misal 0–40px) supaya tidak mengganggu keterbacaan teks

---

## 3. Illustration Artwork Section

**Elemen:** ilustrasi Barok naik roket pensil (base layer) + 3 thumbnail karya ilustrasi (foreground layer)

**Behavior:**
- Saat scroll masuk ke section ini, 3 thumbnail muncul dari bawah viewport dan bergerak naik
- Thumbnail sedikit menimpa (overlap) bagian bawah ilustrasi Barok saat posisi akhir tercapai
- `z-index` thumbnail > z-index Barok

**Rekomendasi implementasi:**
- Framer Motion `useScroll` (scoped ke section ini via `target: sectionRef`)
- Thumbnail: `initial={{ y: 150, opacity: 0 }}` → `animate` berdasarkan scroll progress ke `{ y: 0, opacity: 1 }}`
- Barok tetap statis atau parallax ringan (opsional, speed factor rendah)

---

## 4. Comic Artwork Section (10 panel)

**Elemen:** 10 panel komik "Katanya... MBG Disetop?", full-viewport per panel

**Behavior:**
- Efek sticky-stack: panel 1 berhenti (pinned) di posisi atas viewport saat discroll
- Panel 2 datang dari bawah dan menimpa panel 1 saat scroll berlanjut
- Berulang hingga panel ke-10
- Tambahkan indikator progress (misal angka "3/10" atau dot indicator) di pojok layar, karena section ini panjang secara vertikal

**Rekomendasi implementasi:**
- Library: **GSAP ScrollTrigger** dengan `pin: true` per panel — ini lebih presisi untuk efek stacking dibanding CSS `position: sticky` murni, terutama untuk transisi antar panel yang perlu di-trigger tepat
- Alternatif lebih ringan: CSS `position: sticky` + `z-index` bertingkat (panel belakang z-index lebih rendah) — cukup untuk efek dasar tanpa animasi transisi kompleks
- Tiap panel container: height minimal 100vh agar durasi pin cukup terasa saat scroll

```css
.comic-panel {
  position: sticky;
  top: 0;
  height: 100vh;
}
.comic-panel:nth-child(1) { z-index: 1; }
.comic-panel:nth-child(2) { z-index: 2; }
/* dst hingga panel 10 */
```

**Catatan performa:** kompres semua 10 gambar panel via TinyPNG/Squoosh sebelum dipakai. Lazy-load panel yang belum masuk viewport (`loading="lazy"` atau dynamic import per panel).

---

## 5. Mascot Design Section

**Elemen:** ilustrasi Diega + detail desain (varian warna/ekspresi) di bawahnya

**Behavior:**
- Section ini statis (tanpa parallax/sticky), grid/layout biasa
- Fokus ke kejelasan detail desain, bukan efek gerak

---

## 6. Achievement Section

**Elemen:** sertifikat-sertifikat kompetisi

**Behavior:**
- Rekomendasi: gunakan **carousel/grid biasa**, bukan sticky-stack seperti komik
- Alasan: sertifikat adalah dokumen statis (teks + logo), efek stacking seperti komik kurang menambah nilai naratif dan berisiko membuat teks/info penting sulit dibaca saat transisi
- Jika tetap ingin efek scroll, gunakan fade-in sederhana per sertifikat saat masuk viewport (bukan pin/stack)

---

## General Performance Notes

- Semua animasi scroll gunakan properti `transform` dan `opacity` saja — hindari `top`, `left`, `margin` (memicu reflow, tidak smooth)
- Test di device low-end / throttle CPU di DevTools sebelum dianggap selesai
- Pastikan semua gambar sudah dikompresi (target: PNG hero/about di bawah 300KB, panel komik di bawah 250KB masing-masing)
- Section yang tidak langsung terlihat (illustration artwork ke bawah) di-lazy-load

---

## Library Dependencies

```bash
npm install framer-motion gsap
```

- **Framer Motion** → hero, about, illustration artwork (parallax & entrance animation)
- **GSAP + ScrollTrigger** → comic artwork (sticky-stack panel)
