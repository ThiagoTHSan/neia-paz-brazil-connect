import { useLanguage } from "@/i18n/LanguageContext";
import { languages } from "@/i18n/translations";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-[72px] right-4 lg:right-12 z-50 flex items-center gap-1.5 bg-dark/90 backdrop-blur-sm border border-dark-foreground/10 px-2 py-1.5 shadow-lg rounded-md">
      {languages.map((lang) => {
        const active = language === lang.code;
        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => setLanguage(lang.code)}
            className={`relative rounded-sm overflow-hidden transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/90 focus-visible:ring-offset-2 focus-visible:ring-offset-dark ${
              active
                ? "ring-2 ring-amber-400/90 ring-offset-2 ring-offset-dark scale-105 opacity-100"
                : "opacity-50 hover:opacity-90 hover:scale-105"
            }`}
            aria-label={`${lang.label}`}
            aria-pressed={active}
            title={lang.label}
          >
            <img
              src={`https://flagcdn.com/w40/${lang.countryCode}.png`}
              srcSet={`https://flagcdn.com/w80/${lang.countryCode}.png 2x`}
              alt=""
              width={40}
              height={30}
              className="block h-[22px] w-[29px] sm:h-[26px] sm:w-[35px] object-cover"
              loading="lazy"
              decoding="async"
            />
          </button>
        );
      })}
    </div>
  );
}
