import { metadataBase } from "../../metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...metadataBase,
  title: "Evgenii Perminov: Painting",
};

const PaintingPage = () => {
  return <div className="min-h-screen ">Painting page</div>;
};

export default PaintingPage;
