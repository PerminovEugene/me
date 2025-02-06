"use client";

import React, { useState } from "react";
import "./accordion.component.css"; // Import CSS for transition

interface AccordionProps {
  text: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ text, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div
        className="text-lg text-orange-200 accordion-header cursor-pointer bg-gray-800 p-2"
        onClick={toggleAccordion}
      >
        {text}
      </div>
      <div className={`accordion-content ${isOpen ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default Accordion;
