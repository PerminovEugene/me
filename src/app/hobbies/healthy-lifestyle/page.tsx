import { metadataBase } from "../../metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...metadataBase,
  title: "Eugene Perminov: Healthy Lifestyle",
};

const HealthyLifestylePage = () => {
  return <main className="min-h-screen ">Healthy Lifestyle page</main>;
};

export default HealthyLifestylePage;
