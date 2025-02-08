import { ReactNode } from "react";

import { useEffect, useState } from "react";

// Hook to determine if the screen height is small (<768px)
const useSmallLine = () => {
  const [isSmall, setIsSmall] = useState(window.innerHeight < 768);

  useEffect(() => {
    const handleResize = () => setIsSmall(window.innerHeight < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isSmall;
};

// Vertical Line Component
export const Line = () => {
  const isSmall = useSmallLine();

  return (
    <div className="w-40 flex align-center justify-center">
      <svg
        width="30"
        height={isSmall ? "30" : "52"} // Make it shorter if screen is small
        viewBox={`0 0 30 ${isSmall ? "30" : "52"}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Vertical Line */}
        <line
          x1="15"
          y1="5"
          x2="15"
          y2={isSmall ? "28" : "50"}
          stroke="white"
          strokeWidth="2"
        />

        {/* Arrow */}
        <polygon
          points={isSmall ? "15,28 10,20 20,20" : "15,50 10,40 20,40"}
          fill="white"
        />
      </svg>
    </div>
  );
};

// Diagonal Line Component
export const DiagonalLine = () => {
  const isSmall = useSmallLine();

  return (
    <div className="w-16 flex items-center">
      <svg
        width="60"
        height={isSmall ? "40" : "60"}
        viewBox={`0 0 60 ${isSmall ? "70" : "100"}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Horizontal Line from Left */}
        <line
          x1="5"
          y1="5"
          x2={isSmall ? "35" : "50"}
          y2="5"
          stroke="white"
          strokeWidth="2.5"
        />

        {/* Vertical Line Going Down */}
        <line
          x1={isSmall ? "35" : "50"}
          y1="5"
          x2={isSmall ? "35" : "50"}
          y2={isSmall ? "55" : "95"}
          stroke="white"
          strokeWidth="2.5"
        />

        {/* Arrow */}
        <polygon
          points={isSmall ? "35,55 25,45 45,45" : "50,95 40,80 60,80"}
          fill="white"
        />
      </svg>
    </div>
  );
};

export const HeaderEntity = ({ children }: { children: ReactNode }) => (
  <div className="shadow-md w-40 text-lg border-2 border-dotted border-white rounded-lg p-2">
    {children}
  </div>
);
