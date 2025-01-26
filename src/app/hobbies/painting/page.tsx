import { metadataBase } from "../../metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...metadataBase,
  title: "Eugene Perminov: Painting",
};

const PaintingPage = () => {
  return <main className="min-h-screen ">Painting page</main>;
};

export default PaintingPage;
