import Article from "@/components/lib/article/article.component";
import SolidityGasOptimizationArticleData from "./data";
import Section from "@/components/lib/section/section.component";

const HowToCreatePetProjectPage = () => {
  return (
    <Article data={SolidityGasOptimizationArticleData}>
      <Section>
        <p>
          After completing MVP, I tried to launch program on Downloads folder,
          which contains 150 files. The program crashed, because LLM answer
          stream stopped and programm wasn&apos;t able to find JSON format
          answer. Short research showed that I need to increase context window.
          So I passed 16k to num_ctx it processed a bit more files, but still
          crashed. Then I increased to 60k. My laptop become quite hot,
          <strong>unchecked</strong> keyword. This keyword tells the Solidity
          compiler to turn off arithmetic operations safety checks, which were
          added as default in version 0.8.0.
        </p>
        <p>The following code example demonstrates the difference in usage:</p>
      </Section>
    </Article>
  );
};

export default HowToCreatePetProjectPage;
