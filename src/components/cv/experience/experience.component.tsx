import allExperience from "./experience.data";
import { Experience } from "./experience.types";

const ExperienceEpisode = ({ experience }: { experience: Experience }) => {
  return (
    <div className="mb-4 text-black">
      <div className="flex items-center text-md">
        <h4 className="font-semibold">{experience.title}</h4>,
        <span className="ml-1">
          {experience.startDate} - {experience.endDate}
        </span>
      </div>
      <div className="flex items-center text-md">
        <h4 className="font-semibold">{experience.company}</h4>,
        <span className="ml-1">{experience.location}</span>
      </div>
      {/* <div className="text-sm">
        <span>{experience.company}</span>
        <span className="ml-2">{experience.location}</span>
        <span className="ml-2">
          {experience.startDate} - {experience.endDate}
        </span>
      </div> */}
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
      <div className="">
        {/* <h5 className="font-semibold">Key Responsibilities & Achievements:</h5> */}
        <ul className="list-disc list-inside mt-1">
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

const ExperienceBlock = () => {
  return (
    <div className="mb-4">
      {allExperience.map((experience) => (
        <ExperienceEpisode key={experience.company} experience={experience} />
      ))}
    </div>
  );
};

export default ExperienceBlock;
