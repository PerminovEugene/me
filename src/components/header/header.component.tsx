"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { headerConfig } from "./config";

const Header = () => {
  const currentPath = usePathname().split("/")[1];
  const currentConfig = headerConfig.find((item) => item.path === currentPath);
  return (
    <header className="flex justify-center items-center bg-gray-800 text-white p-4 print:hidden">
      <div className="shadow-md w-full max-w-4xl">
        <nav className="mb-4">
          <ul className="flex space-x-4">
            {headerConfig.map((item) => (
              <li key={item.link}>
                <Link href={item.link}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
        {currentConfig?.subHeaderComponent && (
          <div className="bg-gray-800 text-white flex justify-between items-center">
            {currentConfig.subHeaderComponent()}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
