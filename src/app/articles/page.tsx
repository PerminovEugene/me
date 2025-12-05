import { metadataBase } from "../metadata";
import { Metadata } from "next";
import React from "react";
import Link from "next/link";
import solidityGasOptimizationArticleData from "./solidity-gas-optimization-1/data";
import { H1 } from "@/components/main/h1.component";

export const metadata: Metadata = {
  ...metadataBase,
  title: "Articles by Evgenii Perminov | Tech, Blockchain & Web Development",
  description: "Read articles on Solidity gas optimization, web development best practices, and other tech topics by Evgenii Perminov, a senior software engineer.",
  keywords: [...(metadataBase.keywords as string[]), "tech articles", "blockchain articles", "solidity tutorials", "gas optimization", "web development tutorials"],
  openGraph: {
    ...(metadataBase.openGraph as any),
    title: "Articles by Evgenii Perminov | Tech, Blockchain & Web Development",
    description: "Read articles on Solidity gas optimization, web development best practices, and other tech topics by Evgenii Perminov.",
    url: "https://www.evgeniiperminov.dev/articles",
  },
  alternates: {
    canonical: 'https://www.evgeniiperminov.dev/articles',
  },
};

// Fine for now
const articles = [
  solidityGasOptimizationArticleData,
  // howToCreatePetProjectsArticleData,

  // Add more articles here
];

const ArticlesPage = () => {
  return (
    <div className="p-4 print:p-0">
      <H1 text="Articles" />

      <div className="w-full max-w-4xl space-y-6">
        {articles.map((article, index) => (
          <Link
            href={article.link}
            key={index}
            target="_self"
            className="hover:cursor-pointer "
          >
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-5 cursor-pointer border border-2 border-dotted border-white hover:border-dotted hover:border-yellow-500 p-4">
              <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
              <p className="text-sm text-gray-400 mb-2">{article.date}</p>
              <p className="text-gray-300 mb-4">{article.preview}</p>
              <p className="text-blue-300 underline">Click to read more</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ArticlesPage;
