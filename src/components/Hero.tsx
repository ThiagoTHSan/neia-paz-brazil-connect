import { useEffect, useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useLocation } from "react-router-dom";

export default function Hero() {
  const { t } = useLanguage();
  const location = useLocation();
  const prefix = location.pathname === "/" ? "" : "/";
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const onScroll = () => {
      if (!bgRef.current) return;
      const y = window.scrollY;
      bgRef.current.style.transform = `translate3d(0, ${y * 0.25}px, 0) scale(1.05)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight em itálico dourado para a palavra-chave da headline
  const headline = t("hero.headline");
  const highlights = ["Brazil–Italy", "Brasil–Itália", "Brasile–Italia", "connections", "conexões", "Connessioni", "Conexiones"];
  let rendered: React.ReactNode = headline;
  for (const word of highlights) {
    if (headline.includes(word)) {
      const [a, b] = headline.split(word);
      rendered = (
        <>
          {a}
          <span className="italic text-primary font-normal">{word}</span>
          {b}
        </>
      );
      break;
    }
  }

  return (
    <section
      id="hero"
      className="scroll-mt-24 relative min-h-screen flex items-center justify-center bg-dark overflow-hidden"
      aria-label="Hero"
    >
      <div ref={bgRef} className="absolute inset-0 will-change-transform" aria-hidden>
        <img
          src="/hero-exhibition.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        {/* Overlay quente, não flat */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/55 to-[#1a1a14]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.55)_100%)]" />
      </div>

      <div className="hero-grain pointer-events-none absolute inset-0 z-[1] opacity-70" />
      <div className="hero-lines pointer-events-none z-[1]" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center max-w-5xl">
        <p className="text-primary text-[10px] md:text-[11px] tracking-[0.4em] uppercase mb-8 opacity-0 animate-[fadeIn_1s_ease-out_0.1s_forwards]">
          NeiaPaz · Milano — São Paulo
        </p>

        <h1
          className="font-serif text-dark-foreground text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-medium leading-[1.02] text-balance opacity-0 animate-[fadeIn_1.1s_ease-out_0.4s_forwards]"
        >
          {rendered}
        </h1>

        <div className="mx-auto mt-10 mb-8 h-px w-24 bg-primary opacity-0 animate-[fadeIn_1s_ease-out_0.7s_forwards]" />

        <p className="text-dark-foreground/65 text-base md:text-lg max-w-2xl mx-auto leading-relaxed tracking-wide opacity-0 animate-[fadeIn_1s_ease-out_0.85s_forwards]">
          {t("hero.subheadline")}
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-[fadeIn_1s_ease-out_1.05s_forwards]">
          <a
            href={`${prefix}#contact`}
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-9 py-4 text-[11px] font-semibold tracking-[0.25em] uppercase transition-all duration-300 hover:brightness-110 hover:translate-y-[-2px] active:scale-[0.98]"
          >
            {t("hero.cta.contact")}
          </a>
          <a
            href={`${prefix}#services`}
            className="inline-flex items-center justify-center border border-dark-foreground/40 text-dark-foreground px-9 py-4 text-[11px] font-semibold tracking-[0.25em] uppercase transition-all duration-300 hover:border-primary hover:text-primary"
          >
            {t("hero.cta.services")}
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 opacity-0 animate-[fadeIn_1s_ease-out_1.4s_forwards]">
        <span className="text-dark-foreground/40 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="scroll-indicator" />
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); filter: blur(6px); }
          to   { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
      `}</style>
    </section>
  );
}
