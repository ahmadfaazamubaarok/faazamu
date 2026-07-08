import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Faazamu | Ahmad Faaza Mubaarok — Illustrator & Web Developer",
  description: "Personal portfolio of Ahmad Faaza Mubaarok (Faazamu), an Illustrator and Web Developer based in Yogyakarta.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-text-dark">
        {children}
      </body>
    </html>
  );
}
