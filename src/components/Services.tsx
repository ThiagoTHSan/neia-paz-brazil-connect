import { useLanguage } from "@/i18n/LanguageContext";
import portfolioBg from "@/assets/portfolio-2.jpg";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";

const services = [
  { num: "01", titleKey: "services.1.title", descKey: "services.1.desc", className: "md:col-span-2 md:row-span-2", featured: true },
  { num: "02", titleKey: "services.2.title", descKey: "services.2.desc", className: "md:col-span-1" },
  { num: "03", titleKey: "services.3.title", descKey: "services.3.desc", className: "md:col-span-1" },
  { num: "04", titleKey: "services.4.title", descKey: "services.4.desc", className: "md:col-span-2" },
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section
      id="services"
      className="scroll-mt-24 bg-white py-24 md:py-32 lg:py-40 paper-grain"
      aria-label="Services"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <Reveal className="mb-16 md:mb-20 max-w-3xl">
          <p className="text-primary text-[10px] tracking-[0.42em] uppercase mb-5 font-medium">— What I Do</p>
          <h2 className="font-serif text-foreground text-4xl md:text-5xl lg:text-6xl text-balance">
            {t("services.title")}
          </h2>
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 auto-rows-[minmax(220px,auto)]">
          {services.map((s) => (
            <StaggerItem
              key={s.titleKey}
              as="article"
              className={`group relative overflow-hidden bg-secondary border border-border p-8 lg:p-10 transition-all duration-500 hover:-translate-y-1 hover:border-primary ${s.className}`}
            >
              {s.featured && (
                <div className="absolute inset-0 opacity-15 group-hover:opacity-20 transition-opacity duration-700">
                  <img src={portfolioBg} alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/75 to-white/45" />
                </div>
              )}
              <div className="relative z-10 h-full flex flex-col">
                <span className="font-serif text-primary text-xl tracking-[0.15em] mb-6">{s.num}</span>
                <h3 className="font-serif text-foreground text-2xl md:text-[1.75rem] mb-5 text-balance">
                  {t(s.titleKey)}
                </h3>
                <p className="text-muted-foreground text-[14px] leading-[1.75] tracking-[0.005em] mt-auto max-w-md">
                  {t(s.descKey)}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
