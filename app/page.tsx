import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      {/* Navbar outside <main>: sticky needs the page (not an overflow box) as its scroller, and no padding above it */}
      <Navbar />
      <main className="min-h-screen pt-10 pb-32 overflow-x-clip">
        <Hero />
        <Projects />
        <Timeline />
      </main>
    </>
  );
}
