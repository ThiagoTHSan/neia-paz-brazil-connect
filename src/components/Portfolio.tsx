import { useState } from "react";
import { X } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

const projects = [
  { img: p1, name: "Grand Gala Dinner", tag: "Event", desc: "A 400-guest corporate gala at a heritage venue in São Paulo, featuring custom décor, live entertainment, and full catering coordination for an international luxury brand.", client: "European Luxury House" },
  { img: p2, name: "Corporate Summit Stage", tag: "Corporate", desc: "Stage design and AV production for a global tech company's annual leadership summit in Rio de Janeiro.", client: "Global Technology Firm" },
  { img: p3, name: "Design Fair Showcase", tag: "Design", desc: "Complete booth and spatial design for an Italian furniture brand's debut at Brazil's largest design exhibition.", client: "Italian Design Studio" },
  { img: p4, name: "Rooftop Reception", tag: "Event", desc: "Sunset cocktail reception for 150 international delegates, including venue sourcing, catering, and entertainment.", client: "International Trade Association" },
  { img: p5, name: "Exhibition Stand", tag: "Design", desc: "Modular exhibition stand concept and build for a recurring presence at South American trade fairs.", client: "Scandinavian Brand" },
  { img: p6, name: "Leadership Retreat", tag: "Corporate", desc: "A three-day corporate retreat in a tropical venue, blending workshop facilitation with team-building experiences.", client: "US-based Consulting Firm" },
];

const tagColors: Record<string, string> = {
  Event: "bg-primary/10 text-primary",
  Design: "bg-primary/10 text-primary",
  Corporate: "bg-primary/10 text-primary",
};

export default function Portfolio() {
  const ref = useReveal();
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);

  return (
    <section id="portfolio" className="py-24 md:py-32 lg:py-40 bg-secondary" aria-label="Selected Projects">
      <div ref={ref} className="reveal container mx-auto px-6 lg:px-12">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.15] mb-16 text-center">
          Selected Projects
        </h2>

        <div className="reveal-stagger columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {projects.map((p) => (
            <article
              key={p.name}
              className="reveal break-inside-avoid group relative cursor-pointer overflow-hidden"
              onClick={() => setSelected(p)}
            >
              <img
                src={p.img}
                alt={`${p.name} – ${p.tag} project by Neia Paz`}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/80 transition-colors duration-400 flex items-end p-6">
                <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                  <span className="text-xs font-medium uppercase tracking-wider text-primary-foreground/70">{p.tag}</span>
                  <h3 className="font-serif text-primary-foreground text-lg mt-1">{p.name}</h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-dark/95 flex items-center justify-center p-4 md:p-8 animate-[fadeIn_0.3s_ease-out]"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selected.name}
        >
          <style>{`@keyframes fadeIn { from { opacity:0 } to { opacity:1 } }`}</style>
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 text-dark-foreground/60 hover:text-dark-foreground transition-colors z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selected.img} alt={selected.name} className="w-full object-cover max-h-[70vh]" />
            <div>
              <span className={`inline-block text-xs font-medium uppercase tracking-wider px-3 py-1 mb-4 ${tagColors[selected.tag]}`}>
                {selected.tag}
              </span>
              <h3 className="font-serif text-dark-foreground text-2xl md:text-3xl mb-4">{selected.name}</h3>
              <p className="text-dark-foreground/60 leading-relaxed mb-4">{selected.desc}</p>
              <p className="text-dark-foreground/40 text-sm">Client: {selected.client}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
