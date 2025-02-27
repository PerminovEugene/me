import Skillbox from "@/components/lib/skillbox/skillbox.component";
import { skills } from "./skills.data";
import { Skill } from "./skills.types";

const SkillDirrection = ({ skill }: { skill: Skill }) => {
  return (
    <div className="mb-3 text-black last:mb-0">
      <h4 className="text-md font-semibold">{skill.title}:</h4>
      <div className="mt-2">
        <div className="flex flex-wrap gap-2">
          {skill.technologies.map((tech, index) => (
            <Skillbox key={index} text={tech} />
          ))}
        </div>
      </div>
    </div>
  );
};

const SkillsBlock = ({ page }: { page: number }) => {
  return (
    <div>
      {skills[page].map((skill: Skill) => (
        <SkillDirrection key={skill.title} skill={skill} />
      ))}
    </div>
  );
};

export default SkillsBlock;
