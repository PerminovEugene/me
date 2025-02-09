import { routes } from "@/routing/routing";
import { ArticleData } from "../../../components/lib/article/article.types";

const howToCreatePetProjectsArticleData: ArticleData = {
  title: "How to create pet projects and not give up",
  date: "2025-01-28",
  tags: ["Pet Project", "Programming"],
  preview:
    "It might be excited at the begining, but staying consistent requires a plan.",
  link: routes.articles.next.howToCreatePetProjects.link,
};

export default howToCreatePetProjectsArticleData;
