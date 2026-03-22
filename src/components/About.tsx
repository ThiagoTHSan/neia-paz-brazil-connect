import portrait from "@/assets/portrait-neia.jpg";
import { useReveal } from "@/hooks/useReveal";

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="py-24 md:py-32 lg:py-40 bg-background" aria-label="About Neia Paz">
      <div ref={ref} className="reveal container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <img
              src={portrait}
              alt="Neia Paz, International Project Manager, professional portrait"
              className="w-full max-w-md mx-auto lg:mx-0 aspect-[4/5] object-cover shadow-xl shadow-black/10"
              loading="lazy"
            />
            <div className="absolute inset-0 max-w-md mx-auto lg:mx-0 ring-1 ring-inset ring-foreground/5" />
          </div>

          <div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.15] mb-8">
              About Neia
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With over a decade of experience in the luxury sector, Neia Paz has built a reputation for delivering world-class corporate events and design productions across Brazil. From international design fairs to high-profile corporate gatherings, she bridges the gap between global vision and local execution.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Working alongside international designers, architects, and Fortune 500 companies, Neia ensures every detail — from venue selection and vendor coordination to brand experience design — meets the highest international standards while honoring the nuances of operating in Brazil.
            </p>

            <blockquote className="border-l-2 border-primary pl-6">
              <p className="font-serif italic text-primary text-xl md:text-2xl leading-snug">
                "Every detail tells your brand's story."
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
