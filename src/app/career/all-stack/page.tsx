import { metadataBase } from "../../metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...metadataBase,
  title: "Eugene Perminov: All stack page",
};

const AllStackPage = () => {
  return <main className="min-h-screen ">All stack page</main>;
};

export default AllStackPage;
