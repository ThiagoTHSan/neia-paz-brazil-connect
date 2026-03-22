import { useState, useEffect } from "react";
import logo from "@/assets/LogoNeia.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        scrolled ? "bg-dark shadow-lg shadow-black/20" : "bg-dark"
      }`}
      role="banner"
    >
      <nav className="container mx-auto flex items-center justify-between px-6 py-4 lg:px-12" aria-label="Main navigation">
        <a href="#hero" className="block" aria-label="Neia Paz – Home">
          <img src={logo} alt="Neia Paz – International Project Manager" className="h-10 w-auto lg:h-12" />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-dark-foreground/70 text-sm font-medium tracking-wide uppercase hover:text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative z-50 w-8 h-8 flex flex-col items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className={`block h-px w-6 bg-dark-foreground transition-all duration-300 ${open ? "rotate-45 translate-y-[3.5px]" : ""}`} />
          <span className={`block h-px w-6 bg-dark-foreground transition-all duration-300 ${open ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
        </button>

        {/* Mobile drawer */}
        <div
          className={`fixed inset-0 bg-dark z-40 flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
            open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-dark-foreground text-2xl font-serif tracking-wide hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
