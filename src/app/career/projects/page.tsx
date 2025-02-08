import React, { Fragment } from "react";
import { projects } from "./projects.data";
import ProjectsComponent from "@/components/career/projects/projects.component";
import { H1 } from "@/components/main/h1.component";

const ProjectsPage = () => {
  return (
    <div className="p-4 print:p-0">
      <H1 text="Explore my pet projects" />

      <ProjectsComponent projects={projects} />
    </div>
  );
};

export default ProjectsPage;
