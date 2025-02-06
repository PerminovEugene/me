import { routes } from "@/routing/routing";
import { SubHeader } from "@/components/header/subheader.component";
import React from "react";

const CareerSubHeader = () => {
  return (
    <div className="shadow-md w-full max-w-4xl text-md">
      <div className="flex justify-between">
        <div className="flex-1 flex justify-center items-center">
          <SubHeader config={routes.career.next} />
          <div className="bg-blue-500 hover:bg-blue-700 text-center p-2 text-white font-bold w-40 rounded">
            <a
              href="/files/Eugene_Perminov_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CareerSubHeader;
