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
    <header className="flex justify-center items-center bg-gray-800 text-white p-4 print:hidden">
      <div className="shadow-md w-full max-w-4xl">
        <nav className="mb-4">
          <ul className="flex space-x-4">
            {headerConfig.map((item) => {
              const isSelected =
                item.path === firstLevelPath ||
                item.link === `/${firstLevelPath}`;
              console.log(item, firstLevelPath);
              return (
                <li key={item.link}>
                  <Link
                    className={classNames({
                      "text-yellow-300": isSelected,
                      "text-white": !isSelected,
                      "hover:text-yellow-500": isSelected,
                      "hover:text-blue-200": !isSelected,
                    })}
                    href={item.link}
                  >
                    {item.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        {subHeaderConfig?.subHeaderComponent && (
          <div className="bg-gray-800 text-white items-center">
            {subHeaderConfig.subHeaderComponent()}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
