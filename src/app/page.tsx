import { HeroSection } from "@/components/home/HeroSection";
import AboutGame from "@/components/home/AboutGame";
import CTA from "@/components/home/CTA";
import { Details } from "@/components/home/Details";
import { QuickInfo } from "@/components/home/QuickInfo";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <HeroSection />
      <AboutGame />
      <Details />
      <CTA />
      <QuickInfo />
    </main>
  );
}
