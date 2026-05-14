import { useState } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { portfolioProjects } from "@/data/portfolioProjects";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";

export default function Portfolio() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<(typeof portfolioProjects)[0] | null>(null);
  const reduced = useReducedMotion();

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
      <div className="container mx-auto px-6 lg:px-12 relative">
        <Reveal className="mb-14 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-primary text-[10px] tracking-[0.42em] uppercase mb-5 font-medium">
              — {String(portfolioProjects.length).padStart(2, "0")} Projects
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-balance">
              {t("portfolio.title")}
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="link-underline self-start md:self-end text-[11px] font-semibold tracking-[0.28em] uppercase text-foreground hover:text-primary transition-colors"
          >
            {t("portfolio.viewAll")} →
          </Link>
        </Reveal>

        <div className="space-y-6 md:space-y-8">
          {rows.map((row, idx) => {
            const reverse = idx % 2 === 1;
            const [big, ...rest] = row;
            return (
              <StaggerGroup
                key={idx}
                amount={0.1}
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
              </StaggerGroup>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[60] bg-dark/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelected(null)}
            role="dialog"
            aria-modal="true"
            aria-label={t(selected.nameKey)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-dark-foreground/60 hover:text-primary transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
              onClick={(e) => e.stopPropagation()}
              initial={reduced ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <img src={selected.coverImage} alt={t(selected.nameKey)} className="w-full object-cover max-h-[70vh]" />
              <div>
                <span className="inline-block text-[10px] tracking-[0.32em] uppercase mb-6 text-primary font-medium">
                  {t(selected.tagKey)}
                </span>
                <h3 className="font-serif text-dark-foreground text-3xl md:text-4xl mb-5">
                  {t(selected.nameKey)}
                </h3>
                <p className="text-dark-foreground/65 leading-[1.8] tracking-[0.005em] mb-5 text-[15px]">
                  {t(selected.descKey)}
                </p>
                <p className="text-dark-foreground/40 text-xs tracking-[0.2em] uppercase">
                  {t("portfolio.client")}: {selected.client}
                </p>
                <Link
                  to={`/portfolio/${selected.slug}`}
                  className="link-underline mt-8 inline-block text-[11px] font-semibold tracking-[0.28em] uppercase text-primary"
                >
                  {t("portfolio.viewCase")} →
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
    <StaggerItem
      as="article"
      className={`group relative cursor-pointer overflow-hidden bg-foreground ${aspect} ${className}`}
    >
      <div onClick={onClick} className="absolute inset-0">
        <img
          src={project.coverImage}
          alt={`${t(project.nameKey)} – ${t(project.tagKey)}`}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <span className="block text-primary text-[10px] tracking-[0.32em] uppercase mb-2 font-medium">
            {t(project.tagKey)}
          </span>
          <h3
            className={`font-serif text-dark-foreground ${
              big ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
            }`}
          >
            {t(project.nameKey)}
          </h3>
        </div>
      </div>
    </StaggerItem>
  );
}
