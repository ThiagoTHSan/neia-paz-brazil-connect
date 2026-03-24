import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/i18n/LanguageContext";

const serviceKeys = [
  { titleKey: "services.1.title", descKey: "services.1.desc" },
  { titleKey: "services.2.title", descKey: "services.2.desc" },
  { titleKey: "services.3.title", descKey: "services.3.desc" },
  { titleKey: "services.4.title", descKey: "services.4.desc" },
];

export default function Services() {
  const ref = useReveal();
  const { t } = useLanguage();

  return (
    <section id="services" className="bg-dark py-24 md:py-32 lg:py-40" aria-label="Services">
      <div ref={ref} className="reveal container mx-auto px-6 lg:px-12">
        <h2 className="font-serif text-dark-foreground text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.15] mb-16 text-center" style={{ textWrap: "balance" as any }}>
          {t("services.title")}
        </h2>

        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {serviceKeys.map((s) => (
            <article
              key={s.titleKey}
              className="reveal group border-t-2 border-primary bg-dark-foreground/[0.03] p-8 lg:p-10 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-primary/5"
            >
              <h3 className="font-serif text-dark-foreground text-xl mb-4">{t(s.titleKey)}</h3>
              <p className="text-dark-foreground/50 text-sm leading-relaxed">{t(s.descKey)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
