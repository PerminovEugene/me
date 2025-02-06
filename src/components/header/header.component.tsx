"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { headerConfig } from "./config";
import classNames from "classnames";

const Header = () => {
  const pathParts = usePathname().split("/");
  const firstLevelPath = pathParts[1];
  const subHeaderConfig = headerConfig.find(
    (item) => item.path === firstLevelPath
  );
  return (
    <header className="flex flex-col items-center bg-gray-800 text-white print:hidden pt-3">
      <div className="shadow-md w-full max-w-4xl text-lg ">
        <nav className="">
          <ul className="flex space-x-6 p-2">
            {headerConfig.map((item) => {
              const isSelected =
                item.path === firstLevelPath ||
                item.link === `/${firstLevelPath}`;
              return (
                <li key={item.link}>
                  <Link
                    className={classNames(
                      "mr-6 transition duration-300 ease-in-out",
                      {
                        "text-yellow-300": isSelected,
                        "text-white": !isSelected,
                        "hover:text-yellow-500": isSelected,
                        "hover:text-blue-200": !isSelected,
                      }
                    )}
                    href={item.link}
                  >
                    {item.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      {subHeaderConfig?.subHeaderComponent ? (
        <div className="w-full bg-gradient-to-b from-[#1f2937] via-gray-800 to-gray-900 text-white p-2 transition-all duration-1000 ease-in-out flex justify-center">
          {subHeaderConfig.subHeaderComponent()}
        </div>
      ) : (
        <div className="w-full bg-gradient-to-b from-[#1f2937] via-gray-800 to-gray-900 p-2 transition-all duration-1000 ease-in-out"></div>
      )}
    </header>
  );
};

export default Header;
