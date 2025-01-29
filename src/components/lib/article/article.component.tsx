import { ReactNode } from "react";
import { ArticleData } from "./article.types";

interface ArticleProps {
  data: ArticleData;
  children: ReactNode;
}

const Article = ({ data, children }: ArticleProps) => {
  return (
    <article className="w-full max-w-4xl">
      <h1 className="text-2xl font-bold text-white mb-4">{data.title}</h1>
      {children}
    </article>
  );
};

export default Article;
