import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/i18n/LanguageContext";

const testimonials = [
  { quoteKey: "testimonial.1.quote", name: "Charlotte Möller", company: "Design Studio Zürich, Switzerland" },
  { quoteKey: "testimonial.2.quote", name: "Marco De Luca", company: "Luca Events Group, Italy" },
  { quoteKey: "testimonial.3.quote", name: "Sarah Whitfield", company: "Whitfield & Co., United Kingdom" },
];

export default function Testimonials() {
  const ref = useReveal();
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % testimonials.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="bg-background py-24 md:py-32 lg:py-40" aria-label="Testimonials">
      <div ref={ref} className="reveal container mx-auto px-6 lg:px-12 max-w-3xl text-center">
        <span className="font-serif text-primary text-7xl md:text-8xl leading-none select-none" aria-hidden="true">"</span>

        <div className="relative min-h-[180px] flex items-center justify-center">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${
                i === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              <blockquote className="font-serif text-xl md:text-2xl leading-relaxed mb-8" style={{ textWrap: "balance" as any }}>
                {t(item.quoteKey)}
              </blockquote>
              <cite className="not-italic">
                <span className="block text-sm font-semibold">{item.name}</span>
                <span className="block text-xs text-muted-foreground mt-1">{item.company}</span>
              </cite>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            onClick={prev}
            className="text-muted-foreground hover:text-primary transition-colors active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  i === current ? "bg-primary" : "bg-border"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="text-muted-foreground hover:text-primary transition-colors active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
