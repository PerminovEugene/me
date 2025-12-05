export type ArticleData = {
  title: string;
  date: string;
  tags: string[];
  preview: string;
  link: string;
  description?: string; // SEO description
  author?: string; // Author name
  lastModified?: string; // Last modified date for SEO
  image?: {
    url: string;
    alt: string;
    width?: number;
    height?: number;
  }; // For Open Graph
};
