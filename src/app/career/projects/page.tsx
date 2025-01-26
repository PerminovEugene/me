import { metadataBase } from "../../metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...metadataBase,
  title: "Eugene Perminov: Projects",
};

const ProjectsPage = () => {
  return <main className="min-h-screen ">Projects</main>;
};

export default ProjectsPage;
