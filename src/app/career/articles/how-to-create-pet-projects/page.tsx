import Article from "@/components/lib/article/article.component";
import howToCreatePetProjectsArticleData from "./data";

const HowToCreatePetProjectPage = () => {
  return (
    <Article data={howToCreatePetProjectsArticleData}>
      <p className="text-gray-300 leading-relaxed">
        Starting pet projects can be exciting, but staying consistent requires a
        plan. Break your project into small, achievable tasks, set realistic
        goals, and remind yourself why you started. Celebrate small wins and
        embrace the journey.
      </p>
    </Article>
  );
};

export default HowToCreatePetProjectPage;
