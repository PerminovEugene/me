import { ReactNode } from "react";
import { ArticleData } from "./article.types";
import { H1 } from "@/components/main/h1.component";
import Script from "next/script";

interface ArticleProps {
  data: ArticleData;
  children: ReactNode;
}

const Article = ({ data, children }: ArticleProps) => {
  // Default values for SEO
  const author = data.author || "Evgenii Perminov";
  const description = data.description || data.preview;
  const lastModified = data.lastModified || data.date;
  
  return (
    <article className="w-full max-w-4xl px-4">
      {/* <h1 className="text-2xl font-bold text-white mb-4 text-center">
        {data.title}
      </h1> */}
      <H1 text={data.title} />
      {/* Schema.org ArticleStructured Data */}
      <Script id="article-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TechArticle",
          headline: data.title,
          description: description,
          keywords: data.tags.join(", "),
          author: {
            "@type": "Person",
            name: author,
            url: "https://www.evgeniiperminov.dev"
          },
          publisher: {
            "@type": "Person",
            name: "Evgenii Perminov",
            url: "https://www.evgeniiperminov.dev"
          },
          datePublished: data.date,
          dateModified: lastModified,
          image: data.image?.url || "/files/design/me.jpg",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://www.evgeniiperminov.dev${data.link}`
          }
        })}
      </Script>
      {/* Article tags for better SEO */}
      <div className="flex flex-wrap gap-2 mb-4">
        {data.tags.map((tag, index) => (
          <span key={index} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
      {/* Published date */}
      <p className="text-sm text-gray-400 mb-6">
        Published: {data.date}
        {data.lastModified && data.lastModified !== data.date && (
          <> · Updated: {data.lastModified}</>
        )}
      </p>
      {children}
    </article>
  );
};

export const Code = ({ children }: { children: ReactNode }) => (
  <pre>
    <code className="block w-full bg-gray-800 text-green-400 p-2 rounded text-sm font-mono my-1 my-4 whitespace-break-spaces">
      {children}
    </code>
  </pre>
);

export const Italic = ({ children }: { children: ReactNode }) => (
  <i className="italic">{children}</i>
);

export const Link = ({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-200 hover:underline"
  >
    {children}
  </a>
);

export const Hr = () => (
  <div className="flex justify-center items-center my-6">
    <span className="text-xl font-bold tracking-widest">⋯⋯⋯</span>
  </div>
);

export default Article;
