import { metadataBase } from "../../metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...metadataBase,
  title: "Eugene Perminov: Painting",
};

const TravelingPage = () => {
  return <main className="min-h-screen ">Traveling page</main>;
};

export default TravelingPage;
