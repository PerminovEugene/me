import { metadataBase } from "../../metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...metadataBase,
  title: "Evgenii Perminov: Music",
};

const MusicPage = () => {
  return <div className="min-h-screen ">Music page</div>;
};

export default MusicPage;
