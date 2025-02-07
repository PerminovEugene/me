import { ReactNode } from "react";

export const Line = () => {
  return (
    <div className="w-40 flex align-center justify-center">
      <svg
        className="hidden md:block"
        width="30"
        height="60"
        viewBox="0 0 30 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="15" y1="5" x2="15" y2="50" stroke="white" strokeWidth="2" />
        <polygon points="15,50 10,40 20,40" fill="white" />
      </svg>
    </div>
  );
};

export const HeaderEntity = ({ children }: { children: ReactNode }) => (
  <div className="shadow-md w-40 text-lg border-2 border-dotted border-white rounded-lg p-2">
    {children}
  </div>
);
