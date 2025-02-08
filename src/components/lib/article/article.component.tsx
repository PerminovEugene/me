import { ReactNode } from "react";
import { ArticleData } from "./article.types";
import { H1 } from "@/components/main/h1.component";

interface ArticleProps {
  data: ArticleData;
  children: ReactNode;
}

const Article = ({ data, children }: ArticleProps) => {
  return (
    <article className="w-full max-w-4xl px-4">
      {/* <h1 className="text-2xl font-bold text-white mb-4 text-center">
        {data.title}
      </h1> */}
      <H1 text={data.title} />
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
