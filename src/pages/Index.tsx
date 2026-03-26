import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

export default function Index() {
  return (
    <>
      <Navigation />
      <LanguageSwitcher />
      <main>
        <Hero />
        <ValueProps />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}
