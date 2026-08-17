import { useLanguage } from "@/i18n/LanguageContext";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";

const items = [
  { num: "01", titleKey: "value.local.title", descKey: "value.local.desc" },
  { num: "02", titleKey: "value.tailor.title", descKey: "value.tailor.desc" },
  { num: "03", titleKey: "value.intl.title", descKey: "value.intl.desc" },
];

export default function ValueProps() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-24 md:py-32 lg:py-40 paper-grain" aria-label="Value Proposition">
      <div className="container mx-auto px-6 lg:px-12 relative">
        <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-px md:bg-border md:border md:border-border">
          {items.map((p) => (
            <StaggerItem
              key={p.titleKey}
              className="bg-white p-8 md:p-10 lg:p-14 transition-colors duration-500 hover:bg-secondary"
            >
              <span className="block font-serif text-primary text-5xl md:text-6xl font-light leading-none mb-8 tracking-tight">
                {p.num}
              </span>
              <h3 className="font-serif text-2xl md:text-[1.75rem] mb-5 text-balance">
                {t(p.titleKey)}
              </h3>
              <p className="text-muted-foreground text-[14px] leading-[1.75] tracking-[0.005em] max-w-sm">
                {t(p.descKey)}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
