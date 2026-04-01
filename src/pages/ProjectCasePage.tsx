import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/i18n/LanguageContext";
import { getPortfolioProjectBySlug } from "@/data/portfolioProjects";
import { Link, useParams } from "react-router-dom";

export default function ProjectCasePage() {
  const { t } = useLanguage();
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getPortfolioProjectBySlug(slug) : null;

  if (!project) {
    return (
      <>
        <Navigation />
        <LanguageSwitcher />
        <main className="pt-24 min-h-[70vh] bg-background">
          <section className="py-16 md:py-20">
            <div className="container mx-auto px-6 lg:px-12">
              <h1 className="font-serif text-3xl md:text-4xl">{t("portfolio.case.notFoundTitle")}</h1>
              <p className="mt-4 text-muted-foreground">{t("portfolio.case.notFoundDesc")}</p>
              <div className="mt-8">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center border border-primary text-primary px-6 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-200 hover:bg-primary hover:text-primary-foreground active:scale-[0.97]"
                >
                  {t("portfolio.page.backToPortfolio")}
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <FloatingWhatsAppButton />
      </>
    );
  }

  return (
    <>
      <Navigation />
      <LanguageSwitcher />
      <main className="pt-24 bg-background">
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <span className="inline-flex text-xs font-medium uppercase tracking-wider px-3 py-1 bg-primary/10 text-primary">
                {t(project.tagKey)}
              </span>
              <h1 className="mt-4 font-serif text-3xl md:text-5xl leading-tight">{t(project.nameKey)}</h1>
              <p className="mt-5 text-muted-foreground leading-relaxed">{t(project.descKey)}</p>
              <p className="mt-4 text-sm text-muted-foreground">
                {t("portfolio.client")}: {project.client}
              </p>
              <div className="mt-8">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center border border-primary text-primary px-6 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-200 hover:bg-primary hover:text-primary-foreground active:scale-[0.97]"
                >
                  {t("portfolio.page.backToPortfolio")}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-secondary" aria-label={t("portfolio.case.galleryAria")}>
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {project.images.map((image, index) => (
                <img
                  key={`${project.slug}-${index}`}
                  src={image}
                  alt={`${t(project.nameKey)} ${index + 1}`}
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}

