import React, { Fragment } from "react";
import { projects } from "./projects.data";
import ProjectsComponent from "@/components/career/projects/projects.component";

const ProjectsPage = () => {
  return (
    <Fragment>
      <h1 className="text-4xl font-bold mb-4">Explore my pet projects</h1>
      <ProjectsComponent projects={projects} />
    </Fragment>
  );
};

export default ProjectsPage;
