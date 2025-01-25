import { ReactNode } from "react";
import Experience from "../../components/cv/experience/experience.component";
import BaseInfo from "@/components/cv/base-info/base-info";
import Skills from "@/components/cv/skills/skills.component";
import Education from "@/components/cv/education/education.component";
import Languages from "@/components/cv/languages/languages.component";
import Summary from "@/components/cv/summary/summary.component";

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
        className="flex justify-center items-center min-h-screen bg-gray-100"
        id="CV"
      >
        <div className="bg-white p-4 rounded shadow-md w-full max-w-4xl">
          <div className="p-4">
            <BaseInfo />
          </div>
          <div className="flex space-x-4">
            <div className="w-3/5">
              <Block title="Experience">
                <Experience />
              </Block>
            </div>
            <div className="w-2/5">
              <Block title="Summary">
                <Summary />
              </Block>
              <Block title="Skills">
                <Skills />
              </Block>
              <Block title="Languages">
                <Languages />
              </Block>
              <Block title="Education">
                <Education />
              </Block>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVPage;
