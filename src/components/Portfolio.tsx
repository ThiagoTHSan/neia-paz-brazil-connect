import { useState } from "react";
import { X } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/i18n/LanguageContext";

import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

const projects = [
  { img: p1, nameKey: "portfolio.1.name", tagKey: "portfolio.tag.event", descKey: "portfolio.1.desc", client: "European Luxury House" },
  { img: p2, nameKey: "portfolio.2.name", tagKey: "portfolio.tag.corporate", descKey: "portfolio.2.desc", client: "Global Technology Firm" },
  { img: p3, nameKey: "portfolio.3.name", tagKey: "portfolio.tag.design", descKey: "portfolio.3.desc", client: "Italian Design Studio" },
  { img: p4, nameKey: "portfolio.4.name", tagKey: "portfolio.tag.event", descKey: "portfolio.4.desc", client: "International Trade Association" },
  { img: p5, nameKey: "portfolio.5.name", tagKey: "portfolio.tag.design", descKey: "portfolio.5.desc", client: "Scandinavian Brand" },
  { img: p6, nameKey: "portfolio.6.name", tagKey: "portfolio.tag.corporate", descKey: "portfolio.6.desc", client: "US-based Consulting Firm" },
];

export default function Portfolio() {
  const ref = useReveal();
  const { t } = useLanguage();
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);

  return (
    <section id="portfolio" className="py-24 md:py-32 lg:py-40 bg-secondary" aria-label="Selected Projects">
      <div ref={ref} className="reveal container mx-auto px-6 lg:px-12">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.15] mb-16 text-center">
          {t("portfolio.title")}
        </h2>

        <div className="reveal-stagger columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {projects.map((p) => (
            <article
              key={p.nameKey}
              className="reveal break-inside-avoid group relative cursor-pointer overflow-hidden"
              onClick={() => setSelected(p)}
            >
              <img
                src={p.img}
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
            <img src={selected.img} alt={t(selected.nameKey)} className="w-full object-cover max-h-[70vh]" />
            <div>
              <span className="inline-block text-xs font-medium uppercase tracking-wider px-3 py-1 mb-4 bg-primary/10 text-primary">
                {t(selected.tagKey)}
              </span>
              <h3 className="font-serif text-dark-foreground text-2xl md:text-3xl mb-4">{t(selected.nameKey)}</h3>
              <p className="text-dark-foreground/60 leading-relaxed mb-4">{t(selected.descKey)}</p>
              <p className="text-dark-foreground/40 text-sm">{t("portfolio.client")}: {selected.client}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
