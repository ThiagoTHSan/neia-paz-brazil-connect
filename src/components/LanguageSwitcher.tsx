import { useLanguage } from "@/i18n/LanguageContext";
import { languages } from "@/i18n/translations";

type Props = { variant?: "light" | "dark"; className?: string };

export default function LanguageSwitcher({ variant = "dark", className = "" }: Props) {
  const { language, setLanguage } = useLanguage();
  const base = variant === "light" ? "text-foreground/55" : "text-dark-foreground/55";
  const activeCls = variant === "light" ? "text-foreground" : "text-dark-foreground";

  return (
    <div className={`flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase ${className}`}>
      {languages.map((lang, i) => {
        const active = language === lang.code;
        return (
          <span key={lang.code} className="flex items-center gap-3">
            {i > 0 && <span className={`${base} opacity-30`}>·</span>}
            <button
              type="button"
              onClick={() => setLanguage(lang.code)}
              className={`transition-colors duration-300 hover:text-primary ${active ? `${activeCls} font-medium` : base}`}
              aria-pressed={active}
              aria-label={lang.label}
            >
              {lang.code === "en" ? "EN" : lang.code.toUpperCase()}
            </button>
          </span>
        );
      })}
    </div>
  );
}
