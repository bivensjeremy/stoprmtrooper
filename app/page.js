import FAQ from "./components/FAQ";
import Featured from "./components/Featured";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Options from "./components/Options";
import Reviews from "./components/Reviews";
import ScrollButton from "./components/ScrollButton";
import SocialMedia from "./components/SocialMedia";
import StyleSection from "./components/StyleSection";
import Video from "./components/Video";

export default function Home() {
  return (
    <main className="">
      <Video/> 
      <Hero />
      <Featured />
      <Options />
      <Hero2 />
      <Reviews />
      <StyleSection />
      <SocialMedia />
      <FAQ />
      <ScrollButton />
    </main>
  );
}
