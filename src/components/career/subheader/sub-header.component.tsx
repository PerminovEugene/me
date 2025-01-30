import { routes } from "@/routing/routing";
import { SubHeader } from "@/components/header/subheader.component";
import React from "react";

const CareerSubHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <SubHeader config={routes.career.next} />
      <a
        href="/files/Eugene_Perminov_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
      >
        Download CV
      </a>
    </div>
  );
};
export default CareerSubHeader;
