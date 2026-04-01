import { useState } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/i18n/LanguageContext";
import { portfolioProjects } from "@/data/portfolioProjects";

export default function Portfolio() {
  const ref = useReveal();
  const { t } = useLanguage();
  const [selected, setSelected] = useState<(typeof portfolioProjects)[0] | null>(null);

  return (
    <section id="portfolio" className="scroll-mt-24 py-24 md:py-32 lg:py-40 bg-secondary" aria-label="Selected Projects">
      <div ref={ref} className="reveal container mx-auto px-6 lg:px-12">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.15]">
            {t("portfolio.title")}
          </h2>
        </div>

        <div className="reveal-stagger columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {portfolioProjects.map((p) => (
            <article
              key={p.nameKey}
              className="reveal break-inside-avoid group relative cursor-pointer overflow-hidden"
              onClick={() => setSelected(p)}
            >
              <img
                src={p.coverImage}
                alt={`${t(p.nameKey)} – ${t(p.tagKey)} project by Neia Paz`}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/80 transition-colors duration-400 flex items-end p-6">
                <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                  <span className="text-xs font-medium uppercase tracking-wider text-primary-foreground/70">{t(p.tagKey)}</span>
                  <h3 className="font-serif text-primary-foreground text-lg mt-1">{t(p.nameKey)}</h3>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center border border-primary text-primary px-8 py-3.5 text-sm font-medium tracking-wider uppercase transition-all duration-200 hover:bg-primary hover:text-primary-foreground active:scale-[0.97]"
          >
            {t("portfolio.viewAll")}
          </Link>
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 bg-dark/95 flex items-center justify-center p-4 md:p-8 animate-[fadeIn_0.3s_ease-out]"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={t(selected.nameKey)}
        >
          <style>{`@keyframes fadeIn { from { opacity:0 } to { opacity:1 } }`}</style>
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 text-dark-foreground/60 hover:text-dark-foreground transition-colors z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selected.coverImage} alt={t(selected.nameKey)} className="w-full object-cover max-h-[70vh]" />
            <div>
              <span className="inline-block text-xs font-medium uppercase tracking-wider px-3 py-1 mb-4 bg-primary/10 text-primary">
                {t(selected.tagKey)}
              </span>
              <h3 className="font-serif text-dark-foreground text-2xl md:text-3xl mb-4">{t(selected.nameKey)}</h3>
              <p className="text-dark-foreground/60 leading-relaxed mb-4">{t(selected.descKey)}</p>
              <p className="text-dark-foreground/40 text-sm">{t("portfolio.client")}: {selected.client}</p>
              <div className="mt-6">
                <Link
                  to={`/portfolio/${selected.slug}`}
                  className="inline-flex items-center justify-center border border-primary text-primary px-5 py-2.5 text-xs font-medium tracking-wider uppercase transition-all duration-200 hover:bg-primary hover:text-primary-foreground active:scale-[0.97]"
                >
                  {t("portfolio.viewCase")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
