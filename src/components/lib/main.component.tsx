import React, { ReactNode } from "react";

const MainComponent = ({ children }: { children: ReactNode }) => {
  return (
    <main className="ml-46 grow bg-gray-900 text-white flex flex-col items-center py-8 print:py-0">
      {children}
    </main>
  );
};

export default MainComponent;
