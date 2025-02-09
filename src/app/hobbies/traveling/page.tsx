import { metadataBase } from "../../metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...metadataBase,
  title: "Evgenii Perminov: Painting",
};

const TravelingPage = () => {
  return <div className="min-h-screen ">Traveling page</div>;
};

export default TravelingPage;
