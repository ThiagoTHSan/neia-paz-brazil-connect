import { Linkedin, Instagram, MessageCircle } from "lucide-react";
import logo from "@/assets/LogoNeia.png";

export default function Footer() {
  return (
    <footer className="bg-dark py-16 md:py-20" role="contentinfo">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center">
        <img src={logo} alt="Neia Paz" className="h-10 mb-8" />

        <nav className="flex flex-wrap justify-center gap-8 mb-8" aria-label="Footer navigation">
          {["About", "Services", "Portfolio", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-dark-foreground/50 text-sm hover:text-primary transition-colors"
            >
              {l}
            </a>
          ))}
        </nav>

        <div className="flex gap-5 mb-10">
          <a href="https://www.linkedin.com/in/neiapaz" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-dark-foreground/40 hover:text-primary transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://instagram.com/neiapaz" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-dark-foreground/40 hover:text-primary transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-dark-foreground/40 hover:text-primary transition-colors">
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>

        <p className="text-dark-foreground/30 text-xs">
          © 2025 Neia Paz. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
