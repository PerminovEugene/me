import allExperience from "./experience.data";
import { Experience } from "./experience.types";

const onlyYear = (date: string) => date.split(" ")[1];

const CompanyLink = ({ experience }: { experience: Experience }) => {
  return (
    <h4 className="font-semibold text-blue-500 hover:underline">
      <a target="_blank" href={experience.link as string}>
        {experience.company}
      </a>
    </h4>
  );
};

const isSameYear = (e: Experience) => {
  return onlyYear(e.startDate) === onlyYear(e.endDate);
};

const ExperienceEpisode = ({ experience }: { experience: Experience }) => {
  return (
    <div className="mb-4 text-black last:mb-0">
      <div className="flex items-center text-md">
        <h4 className="font-semibold">{experience.title}</h4>,
        <span className="ml-1">
          {!isSameYear(experience)
            ? `${onlyYear(experience.startDate)} - ${onlyYear(
                experience.endDate
              )}`
            : `${experience.startDate} - ${experience.endDate}`}
        </span>
      </div>
      <div className="flex items-center text-md">
        {experience.merged && experience.items ? (
          <div className="flex flex-row">
            {experience.items.flatMap((e, i) => [
              <CompanyLink key={`company-link-${e.link}`} experience={e} />,
              i < (experience.items as Experience[]).length - 1
                ? ",\u00A0"
                : "",
            ])}
          </div>
        ) : (
          <CompanyLink experience={experience} />
        )}

        <span className="ml-1">{experience.location}</span>
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
      {exp.map((experience) => {
        if (typeof experience.company === "object") {
          return (
            <ExperienceEpisode
              key={`key-${experience.company.join()}`}
              experience={experience}
            />
          );
        }
        return (
          <ExperienceEpisode
            key={`key-${experience.company}`}
            experience={experience}
          />
        );
      })}
    </div>
  );
};

export default ExperienceBlock;
