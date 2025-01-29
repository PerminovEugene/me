import { metadataBase } from "../../metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...metadataBase,
  title: "Eugene Perminov: Resources",
};

const ResourcesPage = () => {
  return <div className="min-h-screen ">Resources</div>;
};

export default ResourcesPage;
