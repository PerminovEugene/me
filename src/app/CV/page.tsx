import { ReactNode } from "react";
import Experience from "../../components/cv/experience/experience";
import BaseInfo from "@/components/cv/base-info/base-info";
import Skills from "@/components/cv/skills/skills.component";

interface BlockProps {
  title: string;
  children: ReactNode;
}

const Block = ({ title, children }: BlockProps) => (
  <div className="p-4">
    <h3 className="text-xl font-semibold mb-2 text-green-600">{title}</h3>
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
        <div className="bg-white p-8 rounded shadow-md w-full max-w-4xl">
          <div className="mb-8">
            <BaseInfo />
          </div>
          <div className="flex space-x-4">
            <div className="w-3/5">
              <Block title="Experience">
                <Experience />
              </Block>
            </div>
            <div className="w-2/5">
              <Block title="Skills">
                <Skills />
              </Block>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVPage;
