"use client";

import { routes } from "@/routing/routing";
import React from "react";
import { HeaderLevel } from "@/components/header/header-level.component";
import { HeaderConfig, HeaderConfigItem } from "@/components/header/config";
import { HeaderEntity } from "@/components/header/design";

const CVSubHeader = () => {
  return (
    <HeaderEntity>
      <div className="border-b-2 border-dotted border-white text-center">
        Actions
      </div>
      <div className="bg-blue-500 hover:bg-blue-700 text-center p-2 text-white font-bold rounded mt-2">
        <a
          href="/files/Evgenii_Perminov_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
        </a>
      </div>
    </HeaderEntity>
  );
};

const { cv, allStack, articles } = routes.career.next;
export const careerSubHeaderConfig: HeaderConfig = [
  {
    link: cv.link,
    text: cv.text,
    path: "CV",
    subHeaderComponent: CVSubHeader,
  },
  {
    link: allStack.link,
    text: allStack.text,
    path: "all-stack",
    subHeaderComponent: null,
  },
  {
    link: articles.link,
    text: articles.text,
    path: "articles",
    subHeaderComponent: null,
  },
];

const CareerSubHeader = ({
  onSelected,
}: {
  onSelected: (item: HeaderConfigItem) => void;
}) => {
  return (
    <div className="flex justify-between">
      <div className="flex-1 flex flex-col items-start">
        <HeaderLevel
          headerConfig={careerSubHeaderConfig}
          text="Career"
          level={2}
          onSelected={onSelected}
        />
      </div>
    </div>
  );
};
export default CareerSubHeader;
