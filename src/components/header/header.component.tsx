"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { config } from "./config";

const Header = () => {
  const currentPath = usePathname();
  const currentConfig = config.find((item) => item.link === currentPath);

  return (
    <header className="flex justify-center items-center bg-gray-800 text-white p-4 print:hidden">
      <div className="shadow-md w-full max-w-4xl">
        <nav className="mb-4">
          <ul className="flex space-x-4">
            {config.map((item) => (
              <li key={item.link}>
                <Link href={item.link}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
        {currentConfig?.subHeaderComponent && (
          <div className="mt-4 bg-gray-800 text-white p-4 flex justify-between items-center">
            {currentConfig.subHeaderComponent()}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
