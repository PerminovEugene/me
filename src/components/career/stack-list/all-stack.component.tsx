"use client";

import { useState } from "react";
import {
  Technologies,
  technologyToType,
  TechType,
} from "@/components/career/cv/experience/technologies";
import allExperience from "@/components/career/cv/experience/experience.data";
import {
  Experience,
  ExperienceType,
  UsedTechnology,
} from "../cv/experience/experience.types";
import classNames from "classnames";

const PlaceWhereItWasUsed = ({ experience }: { experience: Experience }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-2">
      <h3 className="text-md font-semibold mb-2">{experience.title}</h3>
      <p className="text-sm text-gray-400 mb-2">{experience.company}</p>
      <p className="text-sm text-gray-400 mb-2">
        {experience.startDate} - {experience.endDate}
      </p>
    </div>
  );
};

const TechnologyExperience = ({ technology }: { technology: Technologies }) => {
  const filteredExperience = technology
    ? allExperience.filter((experience) =>
        experience.stack.some(
          (t: UsedTechnology) => t.technology === technology
        )
      )
    : [];

  const calculateExperience = (type: string) => {
    return filteredExperience.reduce((acc, experience) => {
      console.log(acc, experience);
      if (experience.type === type) {
        console.log(acc, experience.months);
        acc += experience.months;
      }
      return acc;
    }, 0);
  };

  const commercialExperienceMonths = calculateExperience(
    ExperienceType.Commercial
  );
  const petProjectExperienceMonths = calculateExperience(
    ExperienceType.PetProject
  );

  const formatExperience = (months: number) => {
    const years = Math.trunc(months / 12);
    const remainingMonths = months % 12;
    return (
      <>
        {years > 0 && <span>{years} years </span>}
        {remainingMonths > 0 && <span>{remainingMonths} months</span>}
        {!years && !remainingMonths && "-"}
      </>
    );
  };

  return (
    <div>
      <div>
        <h2 className="text-md font-semibold mb-4">
          Total experience with {technology}:
        </h2>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          {formatExperience(
            commercialExperienceMonths + petProjectExperienceMonths
          )}
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-md font-semibold mb-4">
            Commercial experience with {technology}:{" "}
            <span>{formatExperience(commercialExperienceMonths)}</span>
          </h2>
          <div className="mt-2">
            {filteredExperience
              .filter((e) => e.type === ExperienceType.Commercial)
              .map((experience) => (
                <PlaceWhereItWasUsed
                  key={experience.company}
                  experience={experience}
                />
              ))}
          </div>
        </div>
        <div>
          <h2 className="text-md font-semibold mb-4">
            Pet projects experience with {technology}:{" "}
            {formatExperience(petProjectExperienceMonths)}
          </h2>
          <div className="mt-2">
            {filteredExperience
              .filter((e) => e.type === ExperienceType.PetProject)
              .map((experience) => (
                <PlaceWhereItWasUsed
                  key={experience.company}
                  experience={experience}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const techTypeColors = {
  [TechType.ProgrammingLanguages]: {
    unchecked: "bg-blue-200 hover:bg-blue-400 ring-blue-500",
    checked: "bg-blue-400 hover:bg-blue-300 ring-blue-500",
  },
  [TechType.Databases]: {
    unchecked: "bg-red-200 hover:bg-red-400 ring-red-500",
    checked: "bg-red-400 hover:bg-red-300 ring-red-500",
  },
  [TechType.Blockchain]: {
    unchecked: "bg-teal-200 hover:bg-teal-400 ring-teal-500",
    checked: "bg-teal-400 hover:bg-teal-300 ring-teal-500",
  },
  [TechType.DevOps]: {
    unchecked: "bg-purple-200 hover:bg-purple-400 ring-purple-500",
    checked: "bg-purple-400 hover:bg-purple-300 ring-purple-500",
  },
  [TechType.FrontEnd]: {
    unchecked: "bg-amber-200 hover:bg-amber-400 ring-amber-500",
    checked: "bg-amber-400 hover:bg-amber-300 ring-amber-500",
  },
  [TechType.BackEnd]: {
    unchecked: "bg-orange-200 hover:bg-orange-400 ring-orange-500",
    checked: "bg-orange-400 hover:bg-orange-300 ring-orange-500",
  },
  [TechType.SoftSkills]: {
    unchecked: "bg-lime-200 hover:bg-lime-400 ring-lime-500",
    checked: "bg-lime-400 hover:bg-lime-300 ring-lime-500",
  },
  [TechType.Testing]: {
    unchecked: "bg-fuchsia-200 hover:bg-fuchsia-400 ring-fuchsia-500",
    checked: "bg-fuchsia-400 hover:bg-fuchsia-300 ring-fuchsia-500",
  },
  [TechType.Protocols]: {
    unchecked: "bg-sky-200 hover:bg-sky-400 ring-sky-500",
    checked: "bg-sky-400 hover:bg-sky-300 ring-sky-500",
  },
  [TechType.ThirdPartyIntegrations]: {
    unchecked: "bg-cyan-200 hover:bg-cyan-400 ring-cyan-500",
    checked: "bg-cyan-400 hover:bg-cyan-300 ring-cyan-500",
  },
};

const AllStackComponent = () => {
  const [selectedTechnology, setSelectedTechnology] =
    useState<Technologies | null>(null);

  const handleTechnologyClick = (technology: Technologies) => {
    setSelectedTechnology(
      selectedTechnology === technology ? null : technology
    );
  };

  return (
    <div>
      <div className="w-full max-w-4xl space-y-6">
        <ul className="flex flex-wrap gap-2">
          {Object.values(Technologies).map((technology, index) => (
            <li key={index} className="">
              <input
                type="checkbox"
                id={`tech-${index}`}
                className={classNames(
                  "hidden",
                  selectedTechnology === technology && "checked"
                )}
                checked={selectedTechnology === technology}
                onChange={() => handleTechnologyClick(technology)}
              />
              <label
                htmlFor={`tech-${index}`}
                className={classNames(
                  "focus:outline-none text-black px-2 py-1 cursor-pointer rounded border ring-0 focus:ring-2",
                  techTypeColors[technologyToType[technology]][
                    selectedTechnology === technology ? "checked" : "unchecked"
                  ],
                  {
                    "font-bold": selectedTechnology === technology,
                  }
                )}
              >
                {technology}
              </label>
            </li>
          ))}
        </ul>

        {selectedTechnology && (
          <TechnologyExperience technology={selectedTechnology} />
        )}
      </div>
    </div>
  );
};

export default AllStackComponent;
