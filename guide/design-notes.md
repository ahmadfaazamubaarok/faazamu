# Design Notes — Portfolio Faazamu

Referensi design tokens untuk development. Baca file ini sebelum generate kode apapun, supaya warna/font/spacing konsisten dan tidak ditebak dari screenshot saja.

---

## 1. Color Palette


| Nama | Hex | Penggunaan |
|---|---|---|
| Navy (primary) | `#1B2A4A` | Background section gelap (hero, footer), heading besar, teks di atas krem |
| Blue (secondary) | `#3D5A80` | Link, hover state, elemen interaktif, aksen ilustrasi |
| Orange (accent) | `#EF8354` | CTA button, badge achievement, highlight kecil — pakai secukupnya, jangan dominan |
| Cream (background alt) | `#FAF3E8` | Background section terang, selang-seling dengan putih |
| White | `#FFFFFF` | Background section utama |
| Text dark | `#222222` | Body text — pakai ini, bukan navy, untuk kontras baca maksimal |
| Text muted | `#6B7280` | Caption, label kecil, teks sekunder |

**Catatan pemakaian:**
- Section berselang-seling antara putih dan cream, jangan monoton satu warna saja
- Orange hanya untuk elemen yang butuh perhatian (CTA, badge) — bukan untuk block besar
- Comic Artwork section pakai background ungu sesuai desain Figma (`#6C5CE7` atau sesuaikan dengan hasil export Figma) sebagai pengecualian, untuk menandai section spesial

---

## 2. Typography

*(Belum ada font eksplisit dipilih — default rekomendasi di bawah, sesuaikan jika sudah ada preferensi lain)*

- **Heading:** Poppins (Bold/ExtraBold) — sudah pernah dipakai di design system sebelumnya, konsisten dengan identitas visual yang ada
- **Body:** Poppins (Regular/Medium)
- **Ukuran heading hero (PORTO/FOLIO):** desktop ~120-140px, scale down signifikan di mobile (~48-56px) agar tidak overflow

```bash
npm install @next/font
```
```js
import { poppins } from 'next/font/google';
```

---

## 3. Spacing & Layout

- Grid: 8pt system (semua spacing kelipatan 8px: 8, 16, 24, 32, 48, 64, 96)
- Max content width: `1280px`, dengan padding horizontal `24px` (mobile) / `64px` (desktop)
- Section vertical padding: minimal `80px` desktop, `48px` mobile

## 4. Breakpoints

| Nama | Width |
|---|---|
| Mobile | < 640px |
| Tablet | 640px – 1024px |
| Desktop | > 1024px |

---

## 5. Asset Naming Convention

Folder struktur:
```
assets/
  illustrations/
    barok/
      heroLayerBarok.png
      heroLayerPaper.png
      aboutMe.png
      illustrationArtwork.png
      achievement.png
    portfolio/
      illustration1.png
      illustration2.png
      illustration3.png
    comic/
      comic1.png ... comic10.png
    diega/
      mascotDesign.png
      mascotDesignDetail.png ...
  certificates/
    gunakan dummy foto
```

Semua PNG sudah dikompresi via TinyPNG/Squoosh sebelum masuk folder ini (target di bawah 300KB per file untuk ilustrasi utama, di bawah 250KB untuk panel komik).

---

## 6. Component Library

- **Framer Motion** — parallax & entrance animation (hero, about, illustration artwork)
- **GSAP + ScrollTrigger** — sticky-stack panel komik
- **ReactBits** — komponen tambahan (sebutkan nama komponen spesifik saat pakai, jangan generik)

Detail behavior tiap animasi ada di `interactions.md`.
