import React, { ReactNode } from "react";

const MainComponent = ({ children }: { children: ReactNode }) => {
  return (
    <main className="px-4 md:px-2 md:ml-46 grow bg-gray-900 text-white flex flex-col items-center pt-20 pb-8 md:py-8 print:py-0">
      {children}
    </main>
  );
};

export default MainComponent;
