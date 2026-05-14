import portrait from "@/assets/portrait-neia.jpg";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/i18n/LanguageContext";

export default function About() {
  const ref = useReveal();
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="scroll-mt-24 py-24 md:py-32 lg:py-40 bg-secondary paper-grain relative"
      aria-label="About Neia Paz"
    >
      <div ref={ref} className="reveal container mx-auto px-6 lg:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Foto retrato com moldura dourada lateral */}
          <div className="lg:col-span-5 relative">
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="absolute -left-3 -top-3 bottom-8 w-px bg-primary" aria-hidden />
              <div className="absolute -left-3 -top-3 w-16 h-px bg-primary" aria-hidden />
              <div className="absolute -right-3 -bottom-3 top-8 w-px bg-primary/50" aria-hidden />
              <div className="absolute -right-3 -bottom-3 w-16 h-px bg-primary/50" aria-hidden />
              <img
                src={portrait}
                alt={t("about.image.alt")}
                className="relative w-full aspect-[3/4] object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="text-primary text-[10px] tracking-[0.4em] uppercase mb-5">— About</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-3 text-balance">
              {t("about.title")}
            </h2>
            <p className="text-primary italic text-lg mb-10">International Project Manager · Milano</p>

            <p className="text-foreground/75 leading-relaxed mb-5 text-[15px]">{t("about.p1")}</p>
            <p className="text-foreground/75 leading-relaxed mb-12 text-[15px]">{t("about.p2")}</p>

            <div className="mb-12">
              <h3 className="text-[10px] font-semibold tracking-[0.3em] uppercase mb-6 text-foreground/60">
                {t("about.skills.title")}
              </h3>
              <ul className="space-y-5">
                {[
                  { tk: "about.skills.network.title", dk: "about.skills.network.desc" },
                  { tk: "about.skills.pm.title", dk: "about.skills.pm.desc" },
                  { tk: "about.skills.resources.title", dk: "about.skills.resources.desc" },
                ].map((sk) => (
                  <li key={sk.tk} className="flex gap-5 items-start">
                    <span className="mt-3 block h-px w-8 bg-primary shrink-0" aria-hidden />
                    <div className="text-sm">
                      <span className="font-medium text-foreground">{t(sk.tk)} </span>
                      <span className="text-muted-foreground">{t(sk.dk)}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <blockquote className="relative pl-10 pr-4">
              <span
                className="absolute -left-1 -top-3 font-serif text-primary text-7xl leading-none select-none opacity-90"
                aria-hidden
              >
                &ldquo;
              </span>
              <p className="font-serif italic text-2xl md:text-[1.65rem] leading-snug text-foreground/90 text-balance">
                {t("about.quote").replace(/^["']|["']$/g, "")}
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
