import React, { Fragment } from "react";
import { projects } from "./projects.data";
import ProjectsComponent from "@/components/career/projects/projects.component";
import { H1 } from "@/components/main/h1.component";

const ProjectsPage = () => {
  return (
    <Fragment>
      <H1 text="Explore my pet projects" />

      <ProjectsComponent projects={projects} />
    </Fragment>
  );
};

export default ProjectsPage;
