import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import Trust from "@/components/Trust";
import Locations from "@/components/Locations";
import Blog from "@/components/Blog";
import ClientPortal from "@/components/ClientPortal";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Pricing />
      <Services />
      <Trust />
      <ClientPortal />
      <Locations />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
