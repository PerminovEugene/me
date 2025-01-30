"use client";

import { useState } from "react";
import { Technologies } from "@/components/career/cv/experience/technologies";
import allExperience from "@/components/career/cv/experience/experience.data";
import Skillbox from "@/components/lib/skillbox/skillbox.component";
import {
  Experience,
  ExperienceType,
  UsedTechnology,
} from "../cv/experience/experience.types";

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
      if (experience.type === type) {
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
      <div className="mt-8 grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-md font-semibold mb-4">
            Commercial experience with {technology}:
          </h2>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            {formatExperience(commercialExperienceMonths)}
          </div>
          <div className="mt-8">
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
            Pet projects experience with {technology}:
          </h2>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            {formatExperience(petProjectExperienceMonths)}
          </div>
          <div className="mt-8">
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

const AllStackComponent = () => {
  const [selectedTechnology, setSelectedTechnology] =
    useState<Technologies | null>(null);

  const handleTechnologyClick = (technology: Technologies) => {
    setSelectedTechnology(technology);
  };

  return (
    <div>
      <div className="w-full max-w-4xl space-y-6">
        <ul className="flex flex-wrap gap-2">
          {Object.values(Technologies).map((technology, index) => (
            <li key={index}>
              <button
                onClick={() => handleTechnologyClick(technology)}
                className={`focus:outline-none text-black ${
                  selectedTechnology === technology ? "font-bold" : ""
                }`}
              >
                <Skillbox text={technology} />
              </button>
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
