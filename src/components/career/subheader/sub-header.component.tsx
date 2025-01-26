import { routes } from "@/components/header/config";
import { SubHeader } from "@/components/header/subheader.component";
import React from "react";

const CareerSubHeader = () => {
  return (
    <SubHeader config={routes.career} />
    // {/* <button */}
    //   // onClick={() => downloadPDF}
    //   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    // >
    //   Download PDF
    // </button>
    // </React.Fragment>
  );
};
export default CareerSubHeader;
