import { metadataBase } from "../../metadata";
import { Metadata } from "next";
import Experience from "@/components/career/cv/experience/experience.component";
import BaseInfo from "@/components/career/cv/base-info/base-info";
import Skills from "@/components/career/cv/skills/skills.component";
import Education from "@/components/career/cv/education/education.component";
import Languages from "@/components/career/cv/languages/languages.component";
import Summary from "@/components/career/cv/summary/summary.component";
import PetProjects from "@/components/career/cv/pet-projects/pet-projects.component";
import Content from "@/components/career/cv/content-block/content-block.component";
import { Fragment } from "react";

export const metadata: Metadata = {
  ...metadataBase,
  title: "Eugene Perminov: CV",
};

const CVPage = () => {
  return (
    <Fragment>
      <div className="bg-white p-4 rounded shadow-md w-full max-w-4xl print:mb-0 mb-8 print:min-h-screen">
        <BaseInfo />
        <Content title="Summary">
          <Summary />
        </Content>
        <div className="flex space-x-4">
          <div className="w-3/5">
            <Content title="Experience">
              <Experience page={0} />
            </Content>
          </div>
          <div className="w-2/5">
            <Content title="Skills">
              <Skills page={0} />
            </Content>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded shadow-md w-full max-w-4xl print:min-h-screen">
        <div className="flex space-x-4">
          <div className="w-3/5">
            <Content title="Experience">
              <Experience page={1} />
            </Content>
            <Content title="Education">
              <Education />
            </Content>
          </div>
          <div className="w-2/5">
            <Content title="Skills">
              <Skills page={1} />
            </Content>
            <Content title="Languages">
              <Languages />
            </Content>
            <Content title="Pet Projects">
              <PetProjects />
            </Content>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CVPage;
