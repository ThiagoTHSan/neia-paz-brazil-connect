import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/i18n/LanguageContext";
import { portfolioProjects } from "@/data/portfolioProjects";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function PortfolioPage() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<(typeof portfolioProjects)[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const openProjectModal = (project: (typeof portfolioProjects)[0]) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    setTouchStartX(null);
  };

  const goToNextImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
  };

  const goToPrevImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.changedTouches[0]?.clientX ?? null);
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return;
    const endX = event.changedTouches[0]?.clientX ?? touchStartX;
    const deltaX = endX - touchStartX;
    const SWIPE_THRESHOLD = 45;

    if (deltaX <= -SWIPE_THRESHOLD) goToNextImage();
    if (deltaX >= SWIPE_THRESHOLD) goToPrevImage();
    setTouchStartX(null);
  };

  return (
    <>
      <Navigation />
      <LanguageSwitcher />
      <main className="pt-24">
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <h1 className="font-serif text-3xl md:text-5xl leading-[1.1]">
                {t("portfolio.page.title")}
              </h1>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                {t("portfolio.page.intro")}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/#portfolio"
                  className="inline-flex items-center justify-center border border-primary text-primary px-6 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-200 hover:bg-primary hover:text-primary-foreground active:scale-[0.97]"
                >
                  {t("portfolio.page.backToHome")}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-secondary" aria-label={t("portfolio.page.gridAria")}>
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {portfolioProjects.map((p) => (
                <article
                  key={p.nameKey}
                  className="overflow-hidden bg-background shadow-sm shadow-black/5 ring-1 ring-foreground/5 cursor-pointer transition-transform duration-200 hover:-translate-y-1"
                  onClick={() => openProjectModal(p)}
                >
                  <img
                    src={p.coverImage}
                    alt={t(p.nameKey)}
                    className="w-full aspect-[4/3] object-cover"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex text-xs font-medium uppercase tracking-wider px-3 py-1 bg-primary/10 text-primary">
                        {t(p.tagKey)}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {t("portfolio.client")}: {p.client}
                      </span>
                    </div>
                    <h2 className="mt-4 font-serif text-xl leading-snug">{t(p.nameKey)}</h2>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{t(p.descKey)}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-dark/95 flex items-center justify-center p-4 md:p-8 animate-[fadeIn_0.25s_ease-out]"
          onClick={closeProjectModal}
          role="dialog"
          aria-modal="true"
          aria-label={t(selectedProject.nameKey)}
        >
          <button
            onClick={closeProjectModal}
            className="absolute top-6 right-6 text-dark-foreground/60 hover:text-dark-foreground transition-colors z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-background p-4 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="relative"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <img
                src={selectedProject.images[currentImageIndex]}
                alt={`${t(selectedProject.nameKey)} ${currentImageIndex + 1}`}
                className="w-full object-cover max-h-[70vh]"
              />
              <button
                type="button"
                onClick={goToPrevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-dark/70 text-dark-foreground p-2 hover:bg-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label={t("portfolio.modal.prevImage")}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={goToNextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-dark/70 text-dark-foreground p-2 hover:bg-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label={t("portfolio.modal.nextImage")}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <div className="absolute bottom-3 right-3 rounded bg-dark/70 px-2.5 py-1 text-xs text-dark-foreground">
                {currentImageIndex + 1}/{selectedProject.images.length}
              </div>
            </div>
            <div>
              <span className="inline-flex text-xs font-medium uppercase tracking-wider px-3 py-1 bg-primary/10 text-primary">
                {t(selectedProject.tagKey)}
              </span>
              <h2 className="mt-4 font-serif text-2xl md:text-3xl leading-tight">
                {t(selectedProject.nameKey)}
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {t(selectedProject.descKey)}
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                {t("portfolio.client")}: {selectedProject.client}
              </p>
              <div className="mt-6">
                <Link
                  to={`/portfolio/${selectedProject.slug}`}
                  className="inline-flex items-center justify-center border border-primary text-primary px-5 py-2.5 text-xs font-medium tracking-wider uppercase transition-all duration-200 hover:bg-primary hover:text-primary-foreground active:scale-[0.97]"
                >
                  {t("portfolio.viewCase")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}

