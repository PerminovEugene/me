import allExperience from "./experience.data";
import { Experience } from "./experience.types";

const onlyYear = (date: string) => date.split(" ")[1];

const ExperienceEpisode = ({ experience }: { experience: Experience }) => {
  return (
    <div className="mb-4 text-black last:mb-0">
      <div className="flex items-center text-md">
        <h4 className="font-semibold">{experience.title}</h4>,
        <span className="ml-1">
          {onlyYear(experience.startDate)} - {onlyYear(experience.endDate)}
        </span>
      </div>
      <div className="flex items-center text-md">
        <h4 className="font-semibold text-blue-500 hover:underline">
          <a target="_blank" href={experience.link}>
            {experience.company}
          </a>
        </h4>
        ,<span className="ml-1">{experience.location}</span>
      </div>
      <div>
        <ul className="list-disc pl-5 mt-1">
          {experience.responsibilities.map((item, index) => (
            <li className="text-sm" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ExperienceBlock = ({ page }: { page: number }) => {
  const exp =
    page === 0 ? allExperience.slice(0, 2) : allExperience.slice(2, 6); // CV is splited on pages. First page contains 2 items
  return (
    <div className="pb-1">
      {exp.map((experience) => (
        <ExperienceEpisode key={experience.company} experience={experience} />
      ))}
    </div>
  );
};

export default ExperienceBlock;
