"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeaderConfig, HeaderConfigItem } from "./config";
import classNames from "classnames";
import { Line, HeaderEntity } from "./design";
import { ReactNode } from "react";

const LowerLevel = ({
  subHeaderComponent,
}: // isVisible,
{
  // isVisible: boolean;
  subHeaderComponent: ReactNode;
}) => {
  // const [shouldRender, setShouldRender] = useState(true); // Controls when React removes the component

  // useEffect(() => {
  //   if (isVisible) {
  //     setShouldRender(true); // Ensure component is in the DOM before fading in
  //   }
  // }, [isVisible]);

  return (
    <div
      className={classNames({
        "animate-fadeIn": true,
        // "animate- fadeOut": isVisible,
      })}
    >
      <Line />
      {subHeaderComponent}
    </div>
  );
};

export const HeaderLevel = ({
  headerConfig,
  text,
  level,
  onSelected,
}: {
  headerConfig: HeaderConfig;
  level: number;
  text: string;
  onSelected: (item: HeaderConfigItem) => void;
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
                <li
                  key={item.link}
                  onClick={() => {
                    onSelected(item);
                  }}
                >
                  <Link
                    className={classNames(
                      "block transition duration-300 ease-in-out",
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
        <LowerLevel
          subHeaderComponent={subHeaderConfig.subHeaderComponent({
            onSelected,
          })}
        />
      ) : (
        <div className="w-full h-[30px] transition-all duration-1000 ease-in-out"></div>
      )}
    </div>
  );
};
