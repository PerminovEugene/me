"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { headerConfig, HeaderConfig } from "./config";
import classNames from "classnames";
import { Line, HeaderEntity } from "./design";
import Image from "next/image";

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
  const subHeaderConfig = headerConfig.find((item) => {
    // if (level === 2) {
    //   console.log("---------");
    //   console.log("pathParts", pathParts);
    //   console.log("config link parts", item.link?.split("/"));
    //   console.log("level", level);
    //   console.log("item link level", item.path?.split("/")[level]);
    //   console.log("levelPath", levelPath);
    // }

    console.log(path, item.link);
    return item.path === levelPath;
  });

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

const Header = () => {
  return (
    <header className="flex flex-col items-start bg-gray-800 text-white print:hidden p-3 fixed left-0 top-0 h-full border-r-2 border-dotted border-white">
      <HeaderLevel headerConfig={headerConfig} text="Navigation" level={1} />

      <Image
        className="mt-auto self-center pb-3"
        src="/files/design/logo-removebg-preview.png"
        alt="gas-meme"
        width={150}
        height={150}
      />
    </header>
  );
};

export default Header;
