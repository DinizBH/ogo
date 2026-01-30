import About from "./components/About";
import Contact from "./components/Contact";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MapSection from "./components/MapSection";
import Podcasts from "./components/Podcasts";
import Services from "./components/Services";
import VideoSection from "./components/VideoSection";
import ClientScripts from "./scripts/ClientScripts";

export default function Home() {
  return (
    <div className="bg-white text-zinc-800">
      <Header />
      <main>
        <Hero />
        <About />
        <VideoSection />
        <Services />
        <Podcasts />
        <Contact />
        <MapSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ClientScripts />
    </div>
  );
}
