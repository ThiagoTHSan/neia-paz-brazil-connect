import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

export type PortfolioProject = {
  slug: string;
  coverImage: string;
  images: string[];
  nameKey: string;
  tagKey: string;
  descKey: string;
  client: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "grand-gala-dinner",
    coverImage: p1,
    images: [p1, p4, p6],
    nameKey: "portfolio.1.name",
    tagKey: "portfolio.tag.event",
    descKey: "portfolio.1.desc",
    client: "European Luxury House",
  },
  {
    slug: "corporate-summit-stage",
    coverImage: p2,
    images: [p2, p3, p5],
    nameKey: "portfolio.2.name",
    tagKey: "portfolio.tag.corporate",
    descKey: "portfolio.2.desc",
    client: "Global Technology Firm",
  },
  {
    slug: "design-fair-showcase",
    coverImage: p3,
    images: [p3, p5, p1],
    nameKey: "portfolio.3.name",
    tagKey: "portfolio.tag.design",
    descKey: "portfolio.3.desc",
    client: "Italian Design Studio",
  },
  {
    slug: "rooftop-reception",
    coverImage: p4,
    images: [p4, p1, p2],
    nameKey: "portfolio.4.name",
    tagKey: "portfolio.tag.event",
    descKey: "portfolio.4.desc",
    client: "International Trade Association",
  },
  {
    slug: "exhibition-stand",
    coverImage: p5,
    images: [p5, p3, p4],
    nameKey: "portfolio.5.name",
    tagKey: "portfolio.tag.design",
    descKey: "portfolio.5.desc",
    client: "Scandinavian Brand",
  },
  {
    slug: "leadership-retreat",
    coverImage: p6,
    images: [p6, p2, p1],
    nameKey: "portfolio.6.name",
    tagKey: "portfolio.tag.corporate",
    descKey: "portfolio.6.desc",
    client: "US-based Consulting Firm",
  },
];

export function getPortfolioProjectBySlug(slug: string) {
  return portfolioProjects.find((project) => project.slug === slug) ?? null;
}

