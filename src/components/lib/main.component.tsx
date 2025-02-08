import React, { ReactNode } from "react";

const MainComponent = ({ children }: { children: ReactNode }) => {
  return (
    <main className="md:ml-46 print:ml-0 grow bg-gray-900 text-white flex flex-col items-center px-0 pt-20 md:pt-8 pb-0 print:p-0">
      {children}
    </main>
  );
};

export default MainComponent;
