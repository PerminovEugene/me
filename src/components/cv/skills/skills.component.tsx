import { skills } from "./skills.data";
import { Skill } from "./skills.types";

const SkillDirrection = ({ skill }: { skill: Skill }) => {
  return (
    <div className="mb-4 text-black">
      <h4 className="text-md font-semibold">{skill.title}</h4>
      <div className="mt-2">
        {/* <h5 className="font-semibold">Key Skills:</h5> */}
        <div className="flex flex-wrap gap-2 mt-1">
          {skill.technologies.map((tech, index) => (
            <span key={index} className="bg-gray-300 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const SkillsBlock = ({ page }: { page: number }) => {
  return (
    <div className="">
      {skills[page].map((skill: Skill) => (
        <SkillDirrection key={skill.title} skill={skill} />
      ))}
    </div>
  );
};

export default SkillsBlock;
