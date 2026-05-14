import portrait from "@/assets/portrait-neia.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";

export default function About() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], reduced ? ["0%", "0%"] : ["-6%", "6%"]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="scroll-mt-24 py-24 md:py-32 lg:py-40 bg-secondary paper-grain relative"
      aria-label="About Neia Paz"
    >
      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <Reveal className="lg:col-span-5 relative" y={40}>
            <div className="relative max-w-md mx-auto lg:mx-0 overflow-hidden">
              <div className="absolute -left-3 -top-3 bottom-8 w-px bg-primary z-10" aria-hidden />
              <div className="absolute -left-3 -top-3 w-16 h-px bg-primary z-10" aria-hidden />
              <div className="absolute -right-3 -bottom-3 top-8 w-px bg-primary/50 z-10" aria-hidden />
              <div className="absolute -right-3 -bottom-3 w-16 h-px bg-primary/50 z-10" aria-hidden />
              <div className="relative aspect-[3/4] overflow-hidden">
                <motion.img
                  src={portrait}
                  alt={t("about.image.alt")}
                  style={{ y: imgY }}
                  className="absolute inset-0 w-full h-[112%] object-cover will-change-transform"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-primary text-[10px] tracking-[0.42em] uppercase mb-5 font-medium">— About</p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-3 text-balance">
                {t("about.title")}
              </h2>
              <p className="text-primary italic text-lg mb-10 tracking-wide">
                International Project Manager · Milano
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-foreground/75 leading-[1.8] tracking-[0.005em] mb-5 text-[15px]">
                {t("about.p1")}
              </p>
              <p className="text-foreground/75 leading-[1.8] tracking-[0.005em] mb-12 text-[15px]">
                {t("about.p2")}
              </p>
            </Reveal>

            <Reveal delay={0.15} className="mb-12">
              <h3 className="text-[10px] font-semibold tracking-[0.32em] uppercase mb-6 text-foreground/60">
                {t("about.skills.title")}
              </h3>
              <StaggerGroup as="ul" className="space-y-5">
                {[
                  { tk: "about.skills.network.title", dk: "about.skills.network.desc" },
                  { tk: "about.skills.pm.title", dk: "about.skills.pm.desc" },
                  { tk: "about.skills.resources.title", dk: "about.skills.resources.desc" },
                ].map((sk) => (
                  <StaggerItem key={sk.tk} as="li" className="flex gap-5 items-start">
                    <span className="mt-3 block h-px w-8 bg-primary shrink-0" aria-hidden />
                    <div className="text-[14px] leading-[1.75]">
                      <span className="font-medium text-foreground tracking-[0.005em]">{t(sk.tk)} </span>
                      <span className="text-muted-foreground tracking-[0.005em]">{t(sk.dk)}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </Reveal>

            <Reveal delay={0.2}>
              <blockquote className="relative pl-10 pr-4">
                <span
                  className="absolute -left-1 -top-3 font-serif text-primary text-7xl leading-none select-none opacity-90"
                  aria-hidden
                >
                  &ldquo;
                </span>
                <p className="font-serif italic text-2xl md:text-[1.65rem] leading-[1.4] tracking-[-0.01em] text-foreground/90 text-balance">
                  {t("about.quote").replace(/^["']|["']$/g, "")}
                </p>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
