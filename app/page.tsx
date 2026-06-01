import Hero from "@/components/Hero";
import CardsCarousel from "@/components/CardsCarousel";
import Timeline from "@/components/Timeline";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen pt-24 pb-32 overflow-x-hidden">
      <Navbar />
      <Hero />
      <CardsCarousel />
      <Timeline />
    </main>
  );
}
