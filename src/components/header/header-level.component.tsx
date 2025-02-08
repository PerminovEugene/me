"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeaderConfig } from "./config";
import classNames from "classnames";
import { Line, HeaderEntity } from "./design";

export const HeaderLevel = ({
  headerConfig,
  text,
  level,
}: {
  headerConfig: HeaderConfig;
  level: number;
  text: string;
}) => {
  const path = usePathname();
  const pathParts = path.split("/");
  const levelPath = pathParts[level];
  const subHeaderConfig = headerConfig.find((item) => item.path === levelPath);

  return (
    <div>
      <HeaderEntity>
        <div className="border-b-2 border-dotted border-white text-center">
          {text}
        </div>
        <nav className="mt-2">
          <ul className="flex flex-col space-y-2">
            {headerConfig.map((item) => {
              const isSelected =
                item.path === levelPath || item.link === `/${levelPath}`;
              return (
                <li key={item.link}>
                  <Link
                    className={classNames(
                      "transition duration-300 ease-in-out",
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
      </HeaderEntity>

      {subHeaderConfig?.subHeaderComponent ? (
        <>
          <Line />
          {subHeaderConfig.subHeaderComponent()}
        </>
      ) : (
        <div className="w-full h-[30px] transition-all duration-1000 ease-in-out"></div>
      )}
    </div>
  );
};
