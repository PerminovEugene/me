import { metadataBase } from "../metadata";
import { Metadata } from "next";
import Experience from "@/components/cv/experience/experience.component";
import BaseInfo from "@/components/cv/base-info/base-info";
import Skills from "@/components/cv/skills/skills.component";
import Education from "@/components/cv/education/education.component";
import Languages from "@/components/cv/languages/languages.component";
import Summary from "@/components/cv/summary/summary.component";
import PetProjects from "@/components/cv/pet-projects/pet-projects.component";
import Content from "@/components/cv/content-block/content-block.component";

export const metadata: Metadata = {
  ...metadataBase,
  title: "Eugene Perminov: CV",
};

const CVPage = () => {
  return (
    <div>
      <div
        className="flex flex-col justify-center items-center min-h-screen bg-gray-100"
        id="CV"
      >
        <div className="bg-white p-4 rounded shadow-md w-full max-w-4xl print:mt-0 print:mb-0 mt-8 mb-8 print:min-h-screen">
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
        <div className="bg-white p-4 rounded shadow-md w-full max-w-4xl print:mb-0 print:min-h-screen mb-8">
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
      </div>
    </div>
  );
};

export default CVPage;
