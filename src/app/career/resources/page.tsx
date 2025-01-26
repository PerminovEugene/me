import { metadataBase } from "../../metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...metadataBase,
  title: "Eugene Perminov: Resources",
};

const ResourcesPage = () => {
  return <main className="min-h-screen ">Resources</main>;
};

export default ResourcesPage;
