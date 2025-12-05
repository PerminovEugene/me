import { MetadataRoute } from 'next';
import solidityGasOptimizationArticleData from './articles/solidity-gas-optimization-1/data';

// Get all articles data to include in the sitemap
const articles = [
  solidityGasOptimizationArticleData,
  // Add other articles as they are created
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.evgeniiperminov.dev';
  
  // Base pages
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/career`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contacts`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/hobbies`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ];

  // Add all articles with their lastModified dates if available
  const articleRoutes = articles.map(article => {
    return {
      url: `${baseUrl}${article.link}`,
      lastModified: article.lastModified 
        ? new Date(article.lastModified) 
        : new Date(article.date),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    };
  });

  return [...routes, ...articleRoutes];
} 