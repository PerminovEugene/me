import { metadataBase } from "../../metadata";
import { Metadata } from "next";
import React from "react";
import Link from "next/link";
import solidityGasOptimizationArticleData from "./solidity-gas-optimization-1/data";
import howToCreatePetProjectsArticleData from "./how-to-create-pet-projects/data";

export const metadata: Metadata = {
  ...metadataBase,
  title: "Eugene Perminov: Articles",
};

const articles = [
  solidityGasOptimizationArticleData,
  howToCreatePetProjectsArticleData,
  // Add more articles here
];

const ArticlesPage = () => {
  return (
    <div className="">
      <h1 className="text-4xl font-bold mb-8">Articles</h1>
      <div className="w-full max-w-4xl space-y-6">
        {articles.map((article, index) => (
          <Link
            href={article.link}
            key={index}
            target="_self"
            className="hover:pointer"
          >
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-5">
              <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
              <p className="text-sm text-gray-400 mb-2">{article.date}</p>
              <p className="text-gray-300 mb-4">{article.preview}</p>
              Click to read more
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ArticlesPage;
