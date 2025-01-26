import { metadataBase } from "../../metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...metadataBase,
  title: "Eugene Perminov: Articles",
};

const ArticlesPage = () => {
  return <main className="min-h-screen ">Articles</main>;
};

export default ArticlesPage;
