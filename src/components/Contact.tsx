import { useState, FormEvent } from "react";
import { Linkedin, Instagram } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Contact() {
  const ref = useReveal();
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 py-24 md:py-32 lg:py-40 bg-background relative overflow-hidden paper-grain"
      aria-label="Contact"
    >
      {/* Ilustração minimalista decorativa de fundo */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <circle cx="200" cy="180" r="140" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="600" cy="420" r="180" fill="none" stroke="currentColor" strokeWidth="1" />
        <line x1="200" y1="180" x2="600" y2="420" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />
        <text x="160" y="184" fontFamily="Inter" fontSize="11" letterSpacing="3" fill="currentColor">
          MILANO
        </text>
        <text x="556" y="424" fontFamily="Inter" fontSize="11" letterSpacing="3" fill="currentColor">
          SÃO PAULO
        </text>
      </svg>

      <div ref={ref} className="reveal container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 max-w-6xl mx-auto">
          {/* Coluna esquerda */}
          <div className="lg:col-span-5">
            <p className="text-primary text-[10px] tracking-[0.4em] uppercase mb-5">— Get in Touch</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-8 text-balance">
              {t("contact.title")}
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-12 text-[15px] max-w-md">
              {t("contact.intro")}
            </p>

            <div className="space-y-5 mb-12">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-1.5">
                  {t("contact.email")}
                </p>
                <a href="mailto:info@neiapaz.com" className="link-underline text-foreground text-base">
                  info@neiapaz.com
                </a>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-1.5">
                  {t("contact.based")}
                </p>
                <p className="text-foreground/85 text-base">{t("contact.based.value")}</p>
              </div>
            </div>

            <div className="flex gap-3">
              {[
                { href: "https://www.linkedin.com/in/neiapaz", Icon: Linkedin, label: "LinkedIn" },
                { href: "https://wa.me/5511999999999", Icon: WhatsAppIcon, label: "WhatsApp" },
                { href: "https://instagram.com/neiapaz", Icon: Instagram, label: "Instagram" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-foreground/15 text-foreground/70 transition-all duration-300 hover:border-primary hover:text-primary hover:-translate-y-0.5"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Coluna direita - formulário */}
          <div className="lg:col-span-7">
            <p className="text-xs italic text-muted-foreground mb-8 tracking-wide">
              {t("contact.accepting")}
            </p>

            {submitted ? (
              <div className="py-20 text-center border-t border-b border-border">
                <p className="font-serif text-3xl mb-3">{t("contact.thankyou")}</p>
                <p className="text-muted-foreground">{t("contact.thankyou.desc")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {[
                  { id: "name", k: "contact.form.name", req: true, type: "input" as const },
                  { id: "company", k: "contact.form.company", req: false, type: "input" as const },
                  { id: "country", k: "contact.form.country", req: false, type: "input" as const },
                  { id: "message", k: "contact.form.message", req: true, type: "textarea" as const },
                ].map((f) => (
                  <div key={f.id} className="group">
                    <label
                      htmlFor={f.id}
                      className="block text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-3"
                    >
                      {t(f.k)}
                    </label>
                    {f.type === "input" ? (
                      <input
                        id={f.id}
                        name={f.id}
                        required={f.req}
                        className="w-full bg-transparent border-0 border-b border-foreground/15 px-0 py-2.5 text-base focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/40"
                      />
                    ) : (
                      <textarea
                        id={f.id}
                        name={f.id}
                        rows={3}
                        required={f.req}
                        className="w-full bg-transparent border-0 border-b border-foreground/15 px-0 py-2.5 text-base focus:outline-none focus:border-primary transition-colors resize-none"
                      />
                    )}
                  </div>
                ))}

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground px-8 py-4 text-[11px] font-semibold tracking-[0.3em] uppercase transition-all duration-300 hover:brightness-110 active:scale-[0.99] mt-4"
                >
                  {t("contact.form.send")} →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
