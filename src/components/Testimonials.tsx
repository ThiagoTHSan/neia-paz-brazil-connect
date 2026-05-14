import { useState, useEffect, useCallback } from "react";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/i18n/LanguageContext";

const testimonials = [
  { quoteKey: "testimonial.1.quote", name: "Charlotte Möller", company: "Design Studio Zürich, Switzerland", initials: "CM" },
  { quoteKey: "testimonial.2.quote", name: "Marco De Luca", company: "Luca Events Group, Italy", initials: "MD" },
  { quoteKey: "testimonial.3.quote", name: "Sarah Whitfield", company: "Whitfield & Co., United Kingdom", initials: "SW" },
];

export default function Testimonials() {
  const ref = useReveal();
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % testimonials.length), []);

  useEffect(() => {
    const i = setInterval(next, 7000);
    return () => clearInterval(i);
  }, [next]);

  return (
    <section className="bg-foreground py-24 md:py-32 lg:py-44 relative overflow-hidden" aria-label="Testimonials">
      {/* Aspas decorativas gigantes */}
      <span
        className="absolute font-serif text-primary/10 text-[20rem] md:text-[30rem] leading-none top-[-4rem] left-[-2rem] select-none pointer-events-none"
        aria-hidden
      >
        &ldquo;
      </span>
      <span
        className="absolute font-serif text-primary/10 text-[20rem] md:text-[30rem] leading-none bottom-[-12rem] right-[-2rem] select-none pointer-events-none"
        aria-hidden
      >
        &rdquo;
      </span>

      <div ref={ref} className="reveal container mx-auto px-6 lg:px-12 max-w-4xl text-center relative z-10">
        <p className="text-primary text-[10px] tracking-[0.4em] uppercase mb-10">— Testimonials</p>

        <div className="relative min-h-[260px] md:min-h-[220px] flex items-center justify-center">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
                i === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
              }`}
            >
              <blockquote className="font-serif italic text-dark-foreground text-2xl md:text-3xl lg:text-4xl leading-[1.35] mb-10 text-balance">
                {t(item.quoteKey)}
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-11 h-11 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center text-primary text-xs font-medium tracking-wider">
                  {item.initials}
                </div>
                <cite className="not-italic text-left">
                  <span className="block text-primary text-sm font-medium tracking-wide">{item.name}</span>
                  <span className="block text-dark-foreground/40 text-xs mt-0.5">{item.company}</span>
                </cite>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex items-center justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-px transition-all duration-500 ${
                i === current ? "w-12 bg-primary" : "w-6 bg-dark-foreground/25 hover:bg-dark-foreground/50"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
