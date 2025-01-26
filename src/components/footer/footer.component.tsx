"use client";

const Footer = () => {
  return (
    <footer
      className="
    flex justify-center items-center bg-gray-800 text-white p-4 print:hidden"
    >
      <p className="text-sm">
        © {new Date().getFullYear()} Eugene Perminov. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
