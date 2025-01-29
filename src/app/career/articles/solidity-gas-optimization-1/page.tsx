import Article from "@/components/lib/article/article.component";
import solidityGasOptimizationArticleData from "./data";
import Section from "@/components/lib/section/section.component";
import { ReactNode } from "react";

const Code = ({ children }: { children: ReactNode }) => (
  <pre>
    <code className="block w-full bg-gray-800 text-green-400 px-3 py-1 rounded text-sm font-mono my-1">
      {children}
    </code>
  </pre>
);

const Italic = ({ children }: { children: ReactNode }) => (
  <i className="italic">{children}</i>
);

const Link = ({ children, href }: { children: ReactNode; href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-200 hover:underline"
  >
    {children}
  </a>
);

const HowToCreatePetProjectPage = () => {
  return (
    <Article data={solidityGasOptimizationArticleData}>
      <Section>
        <p>
          Solidity gas optimization is a crucial skill for solidity developers,
          which allows to save client and users money. There are few interesting{" "}
          <Italic>gas usage optimization techniques</Italic> which I noticed
          exploring the <Link href="https://linea.build/">Linea</Link> github{" "}
          <Link href="https://github.com/Consensys/linea-monorepo">
            repository
          </Link>
          .
        </p>
      </Section>
      <Section>
        <p>
          The first thing I noticed is a wide usage of{" "}
          <strong>unchecked</strong> keyword. This keyword tells solidity
          compiler turn off arithmetic operations safety check, that was added
          as default one in the version 0.8.0.
        </p>
        <p>In the next code example you usage difference:</p>
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
          <Italic>sumUnchecked</Italic> function is more gas efficient, but in
          this example it&apos;s possible to get overflow error in case when{" "}
          <Italic>numbers[i] + numbers[j] {`>`} 2^256.</Italic>
        </p>
        <p>
          This means that when you are working with any arithmetic operations in
          Solidity, you need to understand will it possible to get overflow or
          underflow errors in particular piece of code, and if the answer is no,
          then you need to add the keyword <strong>unchecked</strong>.
        </p>
        <p>
          Check out the{" "}
          <Link href="https://docs.soliditylang.org/en/latest/control-structures.html#checked-or-unchecked-arithmetic">
            official solidity documentation
          </Link>{" "}
          and read more about <Italic>unchecked</Italic>.
        </p>
      </Section>
      <Section>
        <p>
          The second thing that I noticed is constant usage of assembly and
          manual memory management. Let&apos;s take a look at the example:
        </p>
        <Code>
          {`function defaultKeccak(bytes32 first, bytes32 second) public pure returns (bytes32 value) {
  return keccak256(abi.encodePacked(first, second));
}`}
        </Code>
        <p>
          <Link href="https://docs.soliditylang.org/en/latest/units-and-global-variables.html">
            <Italic>Keccak256</Italic>
          </Link>{" "}
          is default hashing function in solidity. In our example it expects
          concatenated bytes as input.
          <br />
          <Link href="https://docs.soliditylang.org/en/v0.8.11/abi-spec.html#non-standard-packed-mode">
            <Italic>abi.encodePacked(first, second)</Italic>{" "}
          </Link>
          is a high-level utility that concatenates the two bytes32 values into
          a single memory block. Inside of <Italic>encodePacked</Italic>{" "}
          Solidity creates a temporary memory buffer to store the concatenated
          values. The memory allocation, data copying, and concatenation
          introduce overhead. To avoid that overhaead and save some gas we can
          manage memory manually.
          <p>
            <Code>
              {`function assembledKeccak(bytes32 first, bytes32 second) public pure returns (bytes32 value) {
  assembly {
    mstore(0x00, first)
    mstore(0x20, second)
    value := keccak256(0x00, 0x40)
  }
}`}
            </Code>
          </p>
          <Italic>
            Firstly I&apos;ll remind the reader that 32 is 0x20 in hex
            representation, so bytes32 variable takes exactly 0x29 bytes in the
            memory.
          </Italic>
          What Happens: The mstore instructions directly store first and second
          into specific memory slots (0x00 and 0x20). There is no high-level
          memory management or copying. The memory layout is explicitly
          controlled with mstore, so the data is immediately ready for hashing.
        </p>
        <p>
          More assemby in solidity information is{" "}
          <Link href="https://gydocument.readthedocs.io/en/latest/assembly.html">
            here
          </Link>
        </p>
      </Section>
      {/* <Section></Section> */}
    </Article>
  );
};

export default HowToCreatePetProjectPage;
