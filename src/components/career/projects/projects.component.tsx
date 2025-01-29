"use client";

import { useState } from "react";
import Link from "next/link";
import { Carousel } from "@/components/lib/carousel/carousel.component";
import { Projects } from "./projects.types";

const ProjectsComponent = ({ projects }: { projects: Projects }) => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const selectedProject = projects[selectedProjectIndex];

  return (
    <div className="w-full max-w-4xl">
      {/* Tabs for Projects */}
      <div className="w-full max-w-4xl flex space-x-4 overflow-x-auto border-b border-gray-700">
        {projects.map((project, index) => (
          <button
            key={index}
            onClick={() => setSelectedProjectIndex(index)}
            className={`px-4 py-2 rounded-t-lg font-medium text-sm focus:outline-none ${
              selectedProjectIndex === index
                ? "bg-gray-800 text-blue-400"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            {project.name}
          </button>
        ))}
      </div>

      {/* Project Content */}
      <div className="w-full max-w-4xl bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Carousel on the left */}
          <div className="md:w-2/3">
            <Carousel images={selectedProject.images} />
          </div>

          {/* Articles on the right */}
          <div className="md:w-1/3 bg-gray-700 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Related Articles</h2>
            <ul className="list-disc list-inside space-y-2">
              {selectedProject.articles.map((article, index) => (
                <li key={index}>
                  <Link
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    {article.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Project Description */}
        <p className="text-sm text-gray-300 mt-4">
          {selectedProject.description}
        </p>

        {/* Links */}
        <div className="flex space-x-4 mt-4">
          <Link
            href={selectedProject.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            GitHub
          </Link>
          <Link
            href={selectedProject.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Project Link
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsComponent;
