import allExperience from "../experience/experience.data";
import { Experience, ExperienceType } from "../experience/experience.types";

const PetProjectBlock = ({ experience }: { experience: Experience }) => {
  return (
    <div className="mb-4 text-black last:mb-0">
      <h4 className="text-md font-semibold">
        <a
          href={experience.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {experience.company}
        </a>
      </h4>
      <div className="mt-0 text-sm flex">
        <h5 className="font-semibold">Status:</h5>
        <span className="text-gray-600 ml-2">{experience.status}</span>
      </div>
      <ul className="mt-0 list-disc pl-5 mt-1">
        <li className="text-sm text-gray-600 ">{experience.title}</li>
        {/* <div className="mt-1">
          <a
            href={petProject.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {petProject.link}
          </a>
        </div> */}
      </ul>
    </div>
  );
};

const PetProjectsBlock = () => {
  return (
    <div>
      {allExperience
        .filter((e) => e.type === ExperienceType.PetProject)
        .map((experience: Experience) => (
          <PetProjectBlock key={experience.company} experience={experience} />
        ))}
    </div>
  );
};

export default PetProjectsBlock;
