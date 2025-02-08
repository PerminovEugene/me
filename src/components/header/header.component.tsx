"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { headerConfig, HeaderConfig } from "./config";
import classNames from "classnames";
import { Line, HeaderEntity, DiagonalLine } from "./design";
import Image from "next/image";
import { useEffect, useState } from "react";

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

const isScreenSizeMd = () => window.innerWidth >= 768;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(isScreenSizeMd());
  const [isMd, setIsMd] = useState<null | boolean>(null);

  useEffect(() => {
    const handleResize = () => {
      if (isScreenSizeMd()) {
        if (!isMd) {
          setIsMd(true);
          setIsMenuOpen(true);
        }
      } else {
        if (isMd || isMd === null) {
          setIsMd(false);
          setIsMenuOpen(false);
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMd) {
      if (isMenuOpen) {
        document.body.classList.add("overflow-hidden"); // Lock scrolling
      } else {
        document.body.classList.remove("overflow-hidden"); // Enable scrolling
      }
    }

    return () => {
      if (!isMd) {
        document.body.classList.remove("overflow-hidden"); // Cleanup
      }
    };
  }, [isMenuOpen, isMd]);

  return (
    <>
      <div
        className={classNames(
          "fixed inset-0 w-screen h-screen max-h-screen bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300 z-40",
          "md:hidden",
          {
            "opacity-0 pointer-events-none": !isMenuOpen, // Hide when menu is closed
          }
        )}
        onClick={() => setIsMenuOpen(false)} // Clicking outside closes menu
      />
      <header
        className={classNames(
          "fixed flex flex-col items-start left-0 p-3 fixed h-full z-50",
          "print:hidden border-r-2 border-dotted border-white bg-gray-800",
          "transition-transform duration-300 ease-in-out",
          {
            "-translate-x-full": !isMenuOpen, // Fully hidden (off-screen)
            "translate-x-0": isMenuOpen, // Fully visible (normal position)
          }
        )}
      >
        <div className="w-[10] ml-20 mt-6 h-[10] md:hidden">
          <DiagonalLine />
        </div>
        <div className="">
          <HeaderLevel
            headerConfig={headerConfig}
            text="Navigation"
            level={1}
          />
        </div>
        <Image
          className="hidden md:block md:mt-auto self-center pb-3"
          src="/files/design/logo-removebg-preview.png"
          alt="gas-meme"
          width={isScreenSizeMd() ? 150 : 75}
          height={isScreenSizeMd() ? 150 : 75}
        />
      </header>

      <button
        className="md:hidden fixed top-4 left-3 flex items-center bg-gray-800 text-white p-3 rounded border-2 border-dotted border-white z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        Menu
        <span className="ml-2">{isMenuOpen ? "▲" : "▼"}</span>
      </button>
    </>
  );
};

export default Header;
