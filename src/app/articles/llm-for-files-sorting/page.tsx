import Article, {
  Code,
  Hr,
  Italic,
  Link,
} from "@/components/lib/article/article.component";
import SolidityGasOptimizationArticleData from "./data";
import Section from "@/components/lib/section/section.component";
import Accordion from "@/components/lib/accordion/accordion.component";
import Image from "next/image";

const HowToCreatePetProjectPage = () => {
  return (
    <Article data={SolidityGasOptimizationArticleData}>
      <Section>
        <p>
          Solidity gas optimization is a crucial skill for Solidity developers,
          allowing them to save clients and users money. There are a few
          interesting <Italic>gas usage optimization techniques</Italic> which I
          noticed while exploring the{" "}
          <Link href="https://linea.build/">Linea</Link> Github{" "}
          <Link href="https://github.com/Consensys/linea-monorepo">
            repository
          </Link>
          .
        </p>
      </Section>
      <Hr />
      <Section>
        <p>
          After completing MVP, I tried to launch program on Downloads folder,
          which contains 150 files. The program crashed, because LLM answer
          stream stopped and programm wasn't able to find JSON format answer.
          Short research showed that I need to increase context window. So I
          passed 16k to num_ctx it processed a bit more files, but still
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
