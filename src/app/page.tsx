import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import IllustrationArtwork from "@/components/IllustrationArtwork";
import ComicArtwork from "@/components/ComicArtwork";
import MascotDesign from "@/components/MascotDesign";
import Achievement from "@/components/Achievement";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <AboutMe />
      <IllustrationArtwork />
      <ComicArtwork />
      <MascotDesign />
      <Achievement />
      <ContactFooter />
    </main>
  );
}
