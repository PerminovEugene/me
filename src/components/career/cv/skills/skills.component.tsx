import { skills } from "./skills.data";
import { Skill } from "./skills.types";

const SkillDirrection = ({ skill }: { skill: Skill }) => {
  return (
    <div className="mb-3 text-black last:mb-0">
      <h4 className="text-md font-semibold">{skill.title}:</h4>
      <div className="mt-2">
        {/* <h5 className="font-semibold">Key Skills:</h5> */}
        <div className="flex flex-wrap gap-2">
          {skill.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-200 px-2 py-0.5 rounded border border-gray-300"
            >
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
