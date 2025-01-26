import { ReactNode } from "react";

interface BlockProps {
  title: string;
  children: ReactNode;
}

const Block = ({ title, children }: BlockProps) => (
  <div className="bg-gray-200 p-4 rounded">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    {children}
  </div>
);

const ExperienceBlock = () => {
  return (
    <div className="mb-4">
      <h4 className="text-lg font-semibold">Senior Software Engineer</h4>
      <div className="text-sm text-gray-600">
        <span>Company Name</span>
        <span>Jan 2020 - Present</span>
      </div>
      <p className="text-sm text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec
        scelerisque metus.{" "}
      </p>
    </div>
  );
};

const SkillsBlock = () => {
  return (
    <div className="mb-4">
      <h4 className="text-lg font-semibold">Senior Software Engineer</h4>
      <div className="text-sm text-gray-600">
        <span>Company Name</span>
        <span>Jan 2020 - Present</span>
      </div>
      <p className="text-sm text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec
        scelerisque metus.{" "}
      </p>
    </div>
  );
};

const CVPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-black">Eugene Perminov</h1>
          <h2 className="text-2xl text-blue-500">Senior Software Engineer</h2>
          <div className="flex space-x-4 text-sm mt-2 text-black">
            <span>+37253685244</span>
            <span>perminov.eugene@gmail.com</span>
            <span>http://github.com/PerminovEugene</span>
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="w-3/5">
            <Block title="Experience">
              <ExperienceBlock />
              <ExperienceBlock />
            </Block>
          </div>
          <div className="w-2/5">
            <Block title="Skills">
              <SkillsBlock />
              <SkillsBlock />
            </Block>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVPage;
