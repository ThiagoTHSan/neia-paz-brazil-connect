import { useReveal } from "@/hooks/useReveal";

const services = [
  {
    title: "Corporate Event Management",
    desc: "End-to-end planning, production, and execution of corporate events that reflect your brand's prestige and ambition.",
  },
  {
    title: "International Project Consulting",
    desc: "Strategic guidance for foreign companies entering the Brazilian market — navigating logistics, culture, and local regulations.",
  },
  {
    title: "Local Vendor & Venue Coordination",
    desc: "Access to a curated network of venues, suppliers, and professionals across Brazil's major cities.",
  },
  {
    title: "Branded Experience Design",
    desc: "Conceptualizing and producing immersive brand activations that create lasting impressions on your audience.",
  },
];

export default function Services() {
  const ref = useReveal();

  return (
    <section id="services" className="bg-dark py-24 md:py-32 lg:py-40" aria-label="Services">
      <div ref={ref} className="reveal container mx-auto px-6 lg:px-12">
        <h2 className="font-serif text-dark-foreground text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.15] mb-16 text-center" style={{ textWrap: "balance" as any }}>
          What I Do
        </h2>

        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {services.map((s) => (
            <article
              key={s.title}
              className="reveal group border-t-2 border-primary bg-dark-foreground/[0.03] p-8 lg:p-10 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-primary/5"
            >
              <h3 className="font-serif text-dark-foreground text-xl mb-4">{s.title}</h3>
              <p className="text-dark-foreground/50 text-sm leading-relaxed">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
