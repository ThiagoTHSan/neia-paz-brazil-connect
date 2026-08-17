import { Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/LogoNeia.png";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { useLanguage } from "@/i18n/LanguageContext";

const navKeys = ["nav.services", "nav.portfolio", "nav.about", "nav.contact"];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-white border-t border-border py-20 md:py-24 relative" role="contentinfo">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center mb-12">
          <img src={logo} alt="Neia Paz" className="h-[100px] w-[220px] object-contain mb-6" />
          <p className="font-serif italic text-muted-foreground text-base md:text-lg max-w-md text-balance">
            Bridging Brazil &amp; Italy through design, events and people.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 max-w-3xl mx-auto mb-12">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-primary mb-4">Navigate</p>
            <ul className="space-y-2.5">
              {navKeys.map((k) => (
                <li key={k}>
                  <a
                    href={`#${k.split(".")[1]}`}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {t(k)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-primary mb-4">Contact</p>
            <ul className="space-y-2.5 text-muted-foreground text-sm">
              <li>
                <a href="mailto:info@neiapaz.com" className="hover:text-primary transition-colors">
                  info@neiapaz.com
                </a>
              </li>
              <li>{t("contact.based.value")}</li>
            </ul>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-primary mb-4">Studio</p>
            <ul className="space-y-2.5 text-muted-foreground text-sm">
              <li>Milano, IT</li>
              <li>São Paulo, BR</li>
            </ul>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-primary mb-4">Follow</p>
            <div className="flex gap-4 text-muted-foreground">
              <a href="https://www.linkedin.com/in/neiapaz" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://instagram.com/neiapaz" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-primary transition-colors">
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] tracking-wider text-muted-foreground">
          <p>{t("footer.rights")}</p>
          <p className="uppercase tracking-[0.3em]">Milano · São Paulo</p>
        </div>
      </div>
    </footer>
  );
}
