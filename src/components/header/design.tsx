"use client";

import { ReactNode } from "react";

import { useEffect, useState } from "react";

// Hook to determine if the screen height is small (<768px)
export const useSmallLine = () => {
  const [isSmall, setIsSmall] = useState(false); // ✅ Default false to avoid SSR mismatch

  useEffect(() => {
    const checkSize = () => setIsSmall(window.innerWidth < 768);

    checkSize(); // Set initial value after mount
    window.addEventListener("resize", checkSize);

    return () => window.removeEventListener("resize", checkSize);
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
  return (
    <div className="w-16 flex items-center">
      <svg
        width="60"
        height={"60"}
        viewBox={`0 0 60 100`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Horizontal Line from Left */}
        <line x1="5" y1="5" x2={"50"} y2="5" stroke="white" strokeWidth="2.5" />

        {/* Vertical Line Going Down */}
        <line
          x1={"50"}
          y1="5"
          x2={"50"}
          y2={"95"}
          stroke="white"
          strokeWidth="2.5"
        />

        {/* Arrow */}
        <polygon points={"50,95 40,80 60,80"} fill="white" />
      </svg>
    </div>
  );
};

export const HeaderEntity = ({ children }: { children: ReactNode }) => (
  <div className="shadow-md w-40 text-lg border-2 border-dotted border-white rounded-lg p-2">
    {children}
  </div>
);
