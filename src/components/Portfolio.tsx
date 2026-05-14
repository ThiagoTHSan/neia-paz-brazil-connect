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

  // Layout magazine: pares alternados (1 grande + 2 empilhadas, invertendo)
  const rows: (typeof portfolioProjects)[] = [];
  for (let i = 0; i < portfolioProjects.length; i += 3) {
    rows.push(portfolioProjects.slice(i, i + 3));
  }

  return (
    <section
      id="portfolio"
      className="scroll-mt-24 py-24 md:py-32 lg:py-40 bg-background paper-grain"
      aria-label="Selected Projects"
    >
      <div ref={ref} className="reveal container mx-auto px-6 lg:px-12 relative">
        <div className="mb-14 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-primary text-[10px] tracking-[0.4em] uppercase mb-5">
              — {String(portfolioProjects.length).padStart(2, "0")} Projects
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
              {t("portfolio.title")}
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="link-underline self-start md:self-end text-[11px] font-semibold tracking-[0.25em] uppercase text-foreground hover:text-primary transition-colors"
          >
            {t("portfolio.viewAll")} →
          </Link>
        </div>

        <div className="space-y-6 md:space-y-8">
          {rows.map((row, idx) => {
            const reverse = idx % 2 === 1;
            const [big, ...rest] = row;
            return (
              <div
                key={idx}
                className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 ${reverse ? "md:[direction:rtl]" : ""}`}
              >
                {big && (
                  <ProjectCard
                    project={big}
                    onClick={() => setSelected(big)}
                    aspect="aspect-[4/5] md:aspect-auto md:h-[640px]"
                    className="md:col-span-2 md:[direction:ltr]"
                    big
                    t={t}
                  />
                )}
                <div className="md:col-span-1 md:[direction:ltr] grid grid-cols-1 gap-6 md:gap-8">
                  {rest.map((p) => (
                    <ProjectCard
                      key={p.slug}
                      project={p}
                      onClick={() => setSelected(p)}
                      aspect="aspect-[4/3] md:aspect-auto md:h-[308px]"
                      t={t}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[60] bg-dark/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-[fadeIn_0.3s_ease-out]"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={t(selected.nameKey)}
        >
          <style>{`@keyframes fadeIn { from { opacity:0 } to { opacity:1 } }`}</style>
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 text-dark-foreground/60 hover:text-primary transition-colors z-10"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selected.coverImage} alt={t(selected.nameKey)} className="w-full object-cover max-h-[70vh]" />
            <div>
              <span className="inline-block text-[10px] tracking-[0.3em] uppercase mb-6 text-primary">
                {t(selected.tagKey)}
              </span>
              <h3 className="font-serif text-dark-foreground text-3xl md:text-4xl mb-5 leading-tight">
                {t(selected.nameKey)}
              </h3>
              <p className="text-dark-foreground/65 leading-relaxed mb-5">{t(selected.descKey)}</p>
              <p className="text-dark-foreground/40 text-xs tracking-wider uppercase">
                {t("portfolio.client")}: {selected.client}
              </p>
              <Link
                to={`/portfolio/${selected.slug}`}
                className="link-underline mt-8 inline-block text-[11px] font-semibold tracking-[0.25em] uppercase text-primary"
              >
                {t("portfolio.viewCase")} →
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function ProjectCard({
  project,
  onClick,
  className = "",
  aspect,
  big = false,
  t,
}: {
  project: (typeof portfolioProjects)[0];
  onClick: () => void;
  className?: string;
  aspect: string;
  big?: boolean;
  t: (k: string) => string;
}) {
  return (
    <article
      className={`reveal group relative cursor-pointer overflow-hidden bg-foreground ${aspect} ${className}`}
      onClick={onClick}
    >
      <img
        src={project.coverImage}
        alt={`${t(project.nameKey)} – ${t(project.tagKey)}`}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        <span className="block text-primary text-[10px] tracking-[0.3em] uppercase mb-2">
          {t(project.tagKey)}
        </span>
        <h3
          className={`font-serif text-dark-foreground leading-tight ${
            big ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
          }`}
        >
          {t(project.nameKey)}
        </h3>
      </div>
    </article>
  );
}
