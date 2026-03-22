import { useState, FormEvent } from "react";
import { Linkedin, Instagram, MessageCircle } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

export default function Contact() {
  const ref = useReveal();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 lg:py-40 bg-secondary" aria-label="Contact">
      <div ref={ref} className="reveal container mx-auto px-6 lg:px-12">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.15] mb-16 text-center">
          Let's Work Together
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 max-w-5xl mx-auto">
          {/* Left — info */}
          <div className="flex flex-col justify-center">
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether you're planning a corporate event, seeking local production support, or exploring the Brazilian market — I'd love to hear from you.
            </p>

            <div className="space-y-4 mb-10">
              <p className="text-sm">
                <span className="text-muted-foreground">Email: </span>
                <a href="mailto:hello@neiapaz.com" className="hover:text-primary transition-colors">hello@neiapaz.com</a>
              </p>
              <p className="text-sm">
                <span className="text-muted-foreground">Based in: </span>
                São Paulo, Brazil
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/neiapaz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-foreground/15 px-5 py-2.5 text-sm font-medium transition-all duration-200 hover:border-primary hover:text-primary active:scale-[0.97]"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-foreground/15 px-5 py-2.5 text-sm font-medium transition-all duration-200 hover:border-primary hover:text-primary active:scale-[0.97]"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <a
                href="https://instagram.com/neiapaz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-foreground/15 px-5 py-2.5 text-sm font-medium transition-all duration-200 hover:border-primary hover:text-primary active:scale-[0.97]"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <p className="text-sm italic text-muted-foreground mb-6">Currently accepting international projects</p>

            {submitted ? (
              <div className="py-16 text-center">
                <p className="font-serif text-2xl mb-2">Thank you</p>
                <p className="text-muted-foreground text-sm">Your message has been received. I'll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium uppercase tracking-wider mb-2">Name</label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full border border-foreground/10 bg-background px-4 py-3 text-sm transition-colors focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-xs font-medium uppercase tracking-wider mb-2">Company</label>
                  <input
                    id="company"
                    name="company"
                    className="w-full border border-foreground/10 bg-background px-4 py-3 text-sm transition-colors focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="country" className="block text-xs font-medium uppercase tracking-wider mb-2">Country</label>
                  <input
                    id="country"
                    name="country"
                    className="w-full border border-foreground/10 bg-background px-4 py-3 text-sm transition-colors focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-medium uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full border border-foreground/10 bg-background px-4 py-3 text-sm transition-colors focus:outline-none focus:border-primary resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground px-8 py-3.5 text-sm font-medium tracking-wider uppercase transition-all duration-200 hover:brightness-110 active:scale-[0.97]"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
