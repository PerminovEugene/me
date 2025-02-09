import { H1 } from "@/components/main/h1.component";
import { metadataBase } from "../../metadata";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  ...metadataBase,
  title: "Evgenii Perminov: Thanks for contacting me!",
};

const ThankYouPage = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-[#101827] text-white">
      {/* Card Container */}
      <div className="bg-[#1A2332] p-8 rounded-lg shadow-lg w-full max-w-md border border-gray-700 text-center">
        <H1 text="Thank you for reaching out! 🎉" />

        <p className="text-gray-300 mb-4">
          I&apos;ll get back to you as soon as possible.
        </p>
        <Image
          src="/files/design/cat-with-mail.webp"
          alt="Thank you for contacting me"
          className="rounded-lg shadow-md mx-auto max-w-full mt-4"
          width={400}
          height={400}
        />

        {/* Back to Home Button */}
        <Link
          href="/"
          className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
