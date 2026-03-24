import { MapPin, Compass, Globe } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/i18n/LanguageContext";

const props = [
  { icon: MapPin, titleKey: "value.local.title", descKey: "value.local.desc" },
  { icon: Compass, titleKey: "value.tailor.title", descKey: "value.tailor.desc" },
  { icon: Globe, titleKey: "value.intl.title", descKey: "value.intl.desc" },
];

export default function ValueProps() {
  const ref = useReveal();
  const { t } = useLanguage();

  return (
    <section className="bg-secondary py-20 md:py-28 lg:py-32" aria-label="Value Proposition">
      <div ref={ref} className="reveal container mx-auto px-6 lg:px-12">
        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          {props.map((p) => (
            <div key={p.titleKey} className="reveal text-center md:text-left">
              <p.icon className="w-7 h-7 text-primary mx-auto md:mx-0 mb-5" strokeWidth={1.5} />
              <h3 className="font-serif text-xl mb-3">{t(p.titleKey)}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto md:mx-0">{t(p.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
