import { ReactNode } from "react";
import Experience from "../../components/cv/experience/experience.component";
import BaseInfo from "@/components/cv/base-info/base-info";
import Skills from "@/components/cv/skills/skills.component";
import Education from "@/components/cv/education/education.component";
import Languages from "@/components/cv/languages/languages.component";
import Summary from "@/components/cv/summary/summary.component";
import PetProjects from "@/components/cv/pet-projects/pet-projects.component";

interface BlockProps {
  title: string;
  children: ReactNode;
}

const Block = ({ title, children }: BlockProps) => (
  <div className="p-1">
    <h3 className="text-xl font-semibold mb-2 text-green-600 pl-4">{title}</h3>
    <div className="bg-gray-200 p-4 rounded">{children}</div>
  </div>
);

const CVPage = () => {
  return (
    <div>
      <div
        className="flex flex-col justify-center items-center min-h-screen bg-gray-100"
        id="CV"
      >
        <div className="bg-white p-4 rounded shadow-md w-full max-w-4xl print:mt-0 print:mb-0 mt-8 mb-8 print:min-h-screen">
          <BaseInfo />
          <Block title="Summary">
            <Summary />
          </Block>
          <div className="flex space-x-4">
            <div className="w-3/5">
              <Block title="Experience">
                <Experience page={0} />
              </Block>
            </div>
            <div className="w-2/5">
              <Block title="Skills">
                <Skills page={0} />
              </Block>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow-md w-full max-w-4xl print:mb-0 print:min-h-screen mb-8">
          <div className="flex space-x-4">
            <div className="w-3/5">
              <Block title="Experience">
                <Experience page={1} />
              </Block>
              <Block title="Education">
                <Education />
              </Block>
            </div>
            <div className="w-2/5">
              <Block title="Skills">
                <Skills page={1} />
              </Block>
              <Block title="Languages">
                <Languages />
              </Block>
              <Block title="Pet Projects">
                <PetProjects />
              </Block>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVPage;
