import { useState, useEffect } from "react";
import logo from "@/assets/LogoNeia.png";
import { useLanguage } from "@/i18n/LanguageContext";
import { useLocation } from "react-router-dom";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const navKeys = [
  { key: "nav.services", href: "#services" },
  { key: "nav.portfolio", href: "#portfolio" },
  { key: "nav.about", href: "#about" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();
  const prefix = location.pathname === "/" ? "" : "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dark = !scrolled;
  const textBase = dark ? "text-dark-foreground/85" : "text-foreground/80";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-[0_1px_30px_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <nav
        className="container mx-auto flex items-center justify-between px-6 py-4 lg:px-12"
        aria-label="Main navigation"
      >
        <a href={`${prefix}#hero`} className="block shrink-0" aria-label="Neia Paz – Home">
          <img
            src={logo}
            alt="Neia Paz"
            className={`h-[85px] w-[190px] object-contain transition-[filter] duration-500 ${
              scrolled ? "" : "brightness-0 invert"
            }`}
          />
        </a>

        <ul className="hidden md:flex items-center gap-10 lg:gap-12">
          {navKeys.map((link) => (
            <li key={link.href}>
              <a
                href={`${prefix}${link.href}`}
                className={`link-underline text-[11px] font-medium tracking-[0.22em] uppercase transition-colors duration-300 ${textBase} hover:text-primary`}
              >
                {t(link.key)}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-8">
          <LanguageSwitcher variant={dark ? "dark" : "light"} />
          <a
            href={`${prefix}#contact`}
            className={`group inline-flex items-center justify-center rounded-full border px-5 py-2 text-[11px] font-medium tracking-[0.22em] uppercase transition-all duration-300 ${
              dark
                ? "border-primary/70 text-dark-foreground hover:bg-primary hover:text-primary-foreground"
                : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            }`}
          >
            {t("nav.contact")}
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative z-50 w-8 h-8 flex flex-col items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span
            className={`block h-px w-6 transition-all duration-300 ${
              open ? "bg-dark-foreground rotate-45 translate-y-[3.5px]" : scrolled ? "bg-foreground" : "bg-dark-foreground"
            }`}
          />
          <span
            className={`block h-px w-6 transition-all duration-300 ${
              open ? "bg-dark-foreground -rotate-45 -translate-y-[3.5px]" : scrolled ? "bg-foreground" : "bg-dark-foreground"
            }`}
          />
        </button>

        <div
          className={`fixed inset-0 bg-dark z-40 flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
            open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col items-center gap-8">
            {[...navKeys, { key: "nav.contact", href: "#contact" }].map((link) => (
              <li key={link.href}>
                <a
                  href={`${prefix}${link.href}`}
                  onClick={() => setOpen(false)}
                  className="text-dark-foreground text-3xl font-serif italic tracking-tight hover:text-primary transition-colors duration-300"
                >
                  {t(link.key)}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-12">
            <LanguageSwitcher variant="dark" />
          </div>
        </div>
      </nav>
    </header>
  );
}
