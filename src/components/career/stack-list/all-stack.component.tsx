"use client";

import { useState } from "react";
import { Technologies } from "@/components/career/cv/experience/technologies";
import allExperience from "@/components/career/cv/experience/experience.data";
import Skillbox from "@/components/lib/skillbox/skillbox.component";

const AllStackComponent = () => {
  const [selectedTechnology, setSelectedTechnology] =
    useState<Technologies | null>(null);

  const handleTechnologyClick = (technology: Technologies) => {
    setSelectedTechnology(technology);
  };

  const filteredExperience = selectedTechnology
    ? allExperience
        .flat()
        .filter((experience) => experience.stack.includes(selectedTechnology))
    : [];

  const totalExperienceMonths = selectedTechnology
    ? allExperience.reduce((acc, experience) => {
        if (experience.stack.includes(selectedTechnology)) {
          acc += experience.months;
        }
        return acc;
      }, 0)
    : 0;
  const totalYears = Math.trunc(totalExperienceMonths / 12);
  const months = totalExperienceMonths % 12;

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
          <div>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">
                Total experience with {selectedTechnology}:
              </h2>
              {totalYears > 0 && (
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  {totalYears} years
                </div>
              )}
              {months > 0 && (
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  {months} months
                </div>
              )}
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">
                Positions where it was used:
              </h2>
              {filteredExperience.map((experience, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg mb-2"
                >
                  <h3 className="text-md font-semibold mb-2">
                    {experience.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-2">
                    {experience.company} - {experience.location}
                  </p>
                  <p className="text-sm text-gray-400 mb-2">
                    {experience.startDate} - {experience.endDate}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllStackComponent;
