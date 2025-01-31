import { metadataBase } from "../../metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...metadataBase,
  title: "Eugene Perminov: Thanks for contacting me!",
};

const ThankYouPage = () => {
  return (
    <div className="p-8 rounded-lg shadow-lg w-full max-w-md">
      <h1 className="text-2xl font-bold mb-6">
        Thank you for reaching me out!
      </h1>
      <div className="text-md">
        I will contact you back as soon as possible.
      </div>
    </div>
  );
};

export default ThankYouPage;
