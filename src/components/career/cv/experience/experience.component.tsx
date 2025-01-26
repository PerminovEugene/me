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
      {/* <div className="mt-2">
        <h5 className="font-semibold">Tech Stack:</h5>
        <div className="flex flex-wrap gap-2 mt-1">
          {experience.stack.map((tech, index) => (
            <span key={index} className="bg-gray-300 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
      </div> */}
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
  return (
    <div className="pb-1">
      {allExperience[page].map((experience) => (
        <ExperienceEpisode key={experience.company} experience={experience} />
      ))}
    </div>
  );
};

export default ExperienceBlock;
