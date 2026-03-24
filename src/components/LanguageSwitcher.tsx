import { useLanguage } from "@/i18n/LanguageContext";
import { languages } from "@/i18n/translations";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-[72px] right-4 lg:right-12 z-50 flex items-center gap-1.5 bg-dark/90 backdrop-blur-sm border border-dark-foreground/10 px-2 py-1.5 shadow-lg">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`text-lg leading-none px-1.5 py-1 transition-all duration-200 ${
            language === lang.code
              ? "scale-110 opacity-100"
              : "opacity-40 hover:opacity-80 hover:scale-105"
          }`}
          aria-label={`Switch to ${lang.label}`}
          title={lang.label}
        >
          {lang.flag}
        </button>
      ))}
    </div>
  );
}
