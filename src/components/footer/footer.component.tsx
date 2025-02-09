"use client";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="md:ml-46 flex justify-center items-center bg-gray-900 text-white p-6 print:hidden border-t-2 border-white border-dotted">
      <p className="text-sm text-center mr-4">
        © {new Date().getFullYear()} Evgenii Perminov. All rights reserved.
      </p>
      <a
        href="https://www.linkedin.com/in/Eugene-Perminov/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700 transition duration-300 mx-2"
      >
        <FaLinkedinIn size={24} />
      </a>
      <a
        href="https://github.com/PerminovEugene"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-gray-700 transition duration-300 mx-2"
      >
        <FaGithub size={24} />
      </a>
    </footer>
  );
};

export default Footer;
