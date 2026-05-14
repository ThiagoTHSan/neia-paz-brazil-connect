import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/i18n/LanguageContext";

const items = [
  { num: "01", titleKey: "value.local.title", descKey: "value.local.desc" },
  { num: "02", titleKey: "value.tailor.title", descKey: "value.tailor.desc" },
  { num: "03", titleKey: "value.intl.title", descKey: "value.intl.desc" },
];

export default function ValueProps() {
  const ref = useReveal();
  const { t } = useLanguage();

  return (
    <section className="bg-background py-24 md:py-32 lg:py-40 paper-grain" aria-label="Value Proposition">
      <div ref={ref} className="reveal container mx-auto px-6 lg:px-12 relative">
        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-px md:bg-border md:border md:border-border">
          {items.map((p) => (
            <div
              key={p.titleKey}
              className="reveal bg-background p-8 md:p-10 lg:p-14 group transition-colors duration-500 hover:bg-secondary"
            >
              <span className="block font-serif text-primary text-5xl md:text-6xl font-light leading-none mb-8">
                {p.num}
              </span>
              <h3 className="font-serif text-2xl md:text-[1.75rem] leading-tight mb-4 text-balance">
                {t(p.titleKey)}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                {t(p.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
