import logo from "@/assets/LogoNeia.png";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-dark overflow-hidden"
      aria-label="Hero"
    >
      <div className="hero-grain absolute inset-0" />
      <div className="hero-lines" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        <img
          src={logo}
          alt="Neia Paz signature logo"
          className="mx-auto mb-10 w-64 md:w-80 lg:w-96 opacity-0 animate-[fadeIn_1s_ease-out_0.2s_forwards]"
        />
        <h1 className="font-serif text-dark-foreground text-3xl md:text-5xl lg:text-6xl leading-tight md:leading-[1.1] max-w-3xl mx-auto opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards]" style={{ textWrap: "balance" as any }}>
          {t("hero.headline")}
        </h1>
        <p className="mt-6 text-dark-foreground/60 text-base md:text-lg max-w-xl mx-auto opacity-0 animate-[fadeIn_1s_ease-out_0.8s_forwards]" style={{ textWrap: "pretty" as any }}>
          {t("hero.subheadline")}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-[fadeIn_1s_ease-out_1.1s_forwards]">
          <a
            href="#services"
            className="inline-block border border-primary text-primary px-8 py-3.5 text-sm font-medium tracking-wider uppercase transition-all duration-200 hover:bg-primary hover:text-primary-foreground active:scale-[0.97]"
          >
            {t("hero.cta.services")}
          </a>
          <a
            href="#contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-3.5 text-sm font-medium tracking-wider uppercase transition-all duration-200 hover:brightness-110 active:scale-[0.97]"
          >
            {t("hero.cta.contact")}
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(16px); filter: blur(4px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
      `}</style>
    </section>
  );
}
