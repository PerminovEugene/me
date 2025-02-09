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
          The first thing I noticed is a widespread use of the{" "}
          <strong>unchecked</strong> keyword. This keyword tells the Solidity
          compiler to turn off arithmetic operations safety checks, which were
          added as default in version 0.8.0.
        </p>
        <p>The following code example demonstrates the difference in usage:</p>
        <Code>
          {`function sumChecked(uint256[] memory numbers) public pure returns (uint256) {
  uint256 total = 0;
  for (uint256 i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

function sumUnchecked(uint256[] memory numbers) public pure returns (uint256) {
  unchecked {
    uint256 total = 0;
    for (uint256 i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    return total;        
  }
}`}
        </Code>
        <p>
          <Italic>sumUnchecked</Italic> function is more gas-efficient, but in
          this example it&apos;s possible that an overflow error may occur if{" "}
          <Italic>numbers[i] + numbers[j] {`>`} 2^256.</Italic>
        </p>
        <p>
          This means that when you are working with any arithmetic operations in
          Solidity, you need to determine whether it is possible to encounter
          overflow or underflow errors in a particular piece of code, and if the
          answer is no, then you need to add the keyword{" "}
          <strong>unchecked</strong>.
        </p>
        <p>
          Check out the{" "}
          <Link href="https://docs.Soliditylang.org/en/latest/control-structures.html#checked-or-unchecked-arithmetic">
            official Solidity documentation
          </Link>{" "}
          to learn more about <Italic>unchecked</Italic>.
        </p>
      </Section>
      <Hr />
      <Section>
        <p>
          The second thing that I noticed is the frequent use of assembly and
          manual memory management. Let&apos;s take a look at the example:
        </p>
        <Code>
          {`function defaultKeccak(bytes32 first, bytes32 second) public pure returns (bytes32 value) {
  return keccak256(abi.encodePacked(first, second));
}`}
        </Code>
        <p>
          <Link href="https://docs.Soliditylang.org/en/latest/units-and-global-variables.html">
            <Italic>Keccak256</Italic>
          </Link>{" "}
          is Solidity’s default hashing function. In our example, it expects
          concatenated bytes as input.
          <br />
          <Link href="https://docs.Soliditylang.org/en/v0.8.11/abi-spec.html#non-standard-packed-mode">
            <Italic>abi.encodePacked(first, second)</Italic>{" "}
          </Link>
          is a high-level utility that concatenates the two bytes32 values into
          a single memory block. Inside <Italic>encodePacked</Italic> Solidity
          creates a temporary memory buffer to store the concatenated values.
          The memory allocation, data copying, and concatenation introduce
          overhead. To avoid that overhead and save gas, we can manage memory
          manually.
        </p>
        <Code>
          {`function assembledKeccak(bytes32 first, bytes32 second) public pure returns (bytes32 value) {
  assembly {
    mstore(0x00, first)
    mstore(0x20, second)
    value := keccak256(0x00, 0x40)
  }
}`}
        </Code>
        <p>
          <Italic>
            First, I&apos;ll remind the reader that 32 is 0x20 in hexadecimal
            representation, so bytes32 variable takes exactly 0x20 bytes in
            memory.{" "}
          </Italic>
          What happens here: The mstore instructions directly store first and
          second into specific memory slots (0x00 and 0x20). There is no
          high-level memory management or copying. The memory layout is
          explicitly controlled with mstore, so the data is immediately ready
          for hashing.
        </p>
        <p>
          More information about assembly in Solidity can be found in the
          official doc{" "}
          <Link href="https://gydocument.readthedocs.io/en/latest/assembly.html">
            official documentation
          </Link>
          .
        </p>
      </Section>
      <Hr />
      <Section>
        <p>
          Thank you for reading. I hope you enjoyed this article and learned
          something new!
          <br />
          If you have any comments or questions, don&apos;t hesitate to reach
          out to me.
          <br />
          <Link href="https://github.com/PerminovEugene/soldity-gas-tricks">
            All code examples and tests can be found here.
          </Link>
        </p>
      </Section>
      <Section>
        <Accordion text="Here is your meme reward for finishing the article: (click me!)">
          <Image
            src="/files/memes/gas-optimization-part-1.png"
            alt="gas-meme"
            width={700}
            height={700}
          />
        </Accordion>
      </Section>

      {/* <Section></Section> */}
    </Article>
  );
};

export default HowToCreatePetProjectPage;
