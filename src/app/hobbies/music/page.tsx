import { metadataBase } from "../../metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...metadataBase,
  title: "Eugene Perminov: Music",
};

const MusicPage = () => {
  return <main className="min-h-screen ">Music page</main>;
};

export default MusicPage;
