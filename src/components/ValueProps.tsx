import { MapPin, Compass, Globe } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const props = [
  {
    icon: MapPin,
    title: "Local Expertise",
    desc: "Contacts, venues, and suppliers across Brazil — curated for the highest standards.",
  },
  {
    icon: Compass,
    title: "Tailor-Made Projects",
    desc: "Solutions crafted to each client's specific needs, timeline, and brand identity.",
  },
  {
    icon: Globe,
    title: "International Standards",
    desc: "Seamless communication and professional excellence for global teams.",
  },
];

export default function ValueProps() {
  const ref = useReveal();

  return (
    <section className="bg-secondary py-20 md:py-28 lg:py-32" aria-label="Value Proposition">
      <div ref={ref} className="reveal container mx-auto px-6 lg:px-12">
        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          {props.map((p) => (
            <div key={p.title} className="reveal text-center md:text-left">
              <p.icon className="w-7 h-7 text-primary mx-auto md:mx-0 mb-5" strokeWidth={1.5} />
              <h3 className="font-serif text-xl mb-3">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto md:mx-0">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
