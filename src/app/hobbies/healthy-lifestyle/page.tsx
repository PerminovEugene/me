import { metadataBase } from "../../metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...metadataBase,
  title: "Evgenii Perminov: Healthy Lifestyle",
};

const HealthyLifestylePage = () => {
  return <div className="min-h-screen ">Healthy Lifestyle page</div>;
};

export default HealthyLifestylePage;
