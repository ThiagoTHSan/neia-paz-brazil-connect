import portrait from "@/assets/portrait-neia.jpg";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/i18n/LanguageContext";

export default function About() {
  const ref = useReveal();
  const { t } = useLanguage();

  return (
    <section id="about" className="scroll-mt-24 py-24 md:py-32 lg:py-40 bg-background" aria-label="About Neia Paz">
      <div ref={ref} className="reveal container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <img
              src={portrait}
              alt={t("about.image.alt")}
              className="w-full max-w-md mx-auto lg:mx-0 aspect-[4/5] object-cover shadow-xl shadow-black/10"
              loading="lazy"
            />
            <div className="absolute inset-0 max-w-md mx-auto lg:mx-0 ring-1 ring-inset ring-foreground/8" />
          </div>

          <div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.15] mb-8">
              {t("about.title")}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">{t("about.p1")}</p>
            <p className="text-muted-foreground leading-relaxed mb-10">{t("about.p2")}</p>

            <div className="mb-10">
              <h3 className="text-sm font-semibold tracking-wide uppercase mb-4">{t("about.skills.title")}</h3>
              <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <li>
                  <span className="font-medium text-foreground">{t("about.skills.network.title")}</span>{" "}
                  <span>{t("about.skills.network.desc")}</span>
                </li>
                <li>
                  <span className="font-medium text-foreground">{t("about.skills.pm.title")}</span>{" "}
                  <span>{t("about.skills.pm.desc")}</span>
                </li>
                <li>
                  <span className="font-medium text-foreground">{t("about.skills.resources.title")}</span>{" "}
                  <span>{t("about.skills.resources.desc")}</span>
                </li>
              </ul>
            </div>

            <blockquote className="border-l-2 border-primary pl-6">
              <p className="font-serif italic text-primary text-xl md:text-2xl leading-snug">
                {t("about.quote")}
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
