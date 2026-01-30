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
import { getHomeContent, getMediaUrl } from "@/lib/home-content";

export default async function Home() {
  const content = await getHomeContent();

  const heroImage = getMediaUrl(content.hero.imageId) ?? "/site-images/hero.jpg";
  const aboutImage = getMediaUrl(content.about.imageId) ?? "/site-images/about.jpg";
  const videoImage = getMediaUrl(content.video.imageId) ?? "/site-images/video.jpg";

  const podcasts = content.podcasts.items.map((item, index) => {
    const fallback = `/site-images/podcast-${index + 1}.png`;
    return {
      ...item,
      imageUrl: getMediaUrl(item.imageId) ?? fallback,
    };
  });

  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <Hero
          title={content.hero.title}
          subtitle={content.hero.subtitle}
          whatsappText={content.hero.whatsappText}
          phoneText={content.hero.phoneText}
          imageUrl={heroImage}
        />
        <About
          eyebrow={content.about.eyebrow}
          title={content.about.title}
          intro={content.about.intro}
          paragraph1={content.about.paragraph1}
          paragraph2={content.about.paragraph2}
          steps={content.about.steps}
          imageUrl={aboutImage}
        />
        <VideoSection
          eyebrow={content.video.eyebrow}
          title={content.video.title}
          subtitle={content.video.subtitle}
          bullets={content.video.bullets}
          videoUrl={content.video.videoUrl}
          imageUrl={videoImage}
        />
        <Services subtitle={content.services.subtitle} items={content.services.items} />
        <Podcasts
          eyebrow={content.podcasts.eyebrow}
          title={content.podcasts.title}
          subtitle={content.podcasts.subtitle}
          items={podcasts}
        />
        <Contact
          title={content.contact.title}
          subtitle={content.contact.subtitle}
          whatsappText={content.contact.whatsappText}
          phoneText={content.contact.phoneText}
          address={content.contact.address}
          hours={content.contact.hours}
        />
        <MapSection
          address={content.map.address}
          cep={content.map.cep}
          query={content.map.query}
        />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ClientScripts />
    </div>
  );
}
