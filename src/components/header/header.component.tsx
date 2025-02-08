"use client";

import { headerConfig } from "./config";
import classNames from "classnames";
import { DiagonalLine, useSmallLine } from "./design";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HeaderLevel } from "./header-level.component";
import HiddenArea from "./hidden-area.component";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<null | boolean>(null);
  const [isMd, setIsMd] = useState<null | boolean>(null);

  const isSmall = useSmallLine();

  useEffect(() => {
    const handleResize = () => {
      if (isSmall && !isMd) {
        setIsMd(true);
        setIsMenuOpen(true);
      } else if (!isSmall && isMd) {
        setIsMd(false);
        setIsMenuOpen(false);
      }
    };

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
      <HiddenArea
        isVisible={!!isMenuOpen}
        onClick={() => setIsMenuOpen(false)}
      />
      <header
        className={classNames(
          "fixed flex flex-col items-start left-0 p-3 h-full z-50",
          "print:hidden border-r-2 border-dotted border-white bg-gray-800",
          "transition-transform duration-300 ease-in-out -translate-x-full md:translate-x-0",
          {
            "!translate-x-0": isMenuOpen === true, // ✅ Make visible when `isMenuOpen = true`
            "!-translate-x-full": isMenuOpen === false, // ✅ Hide when `isMenuOpen = false`
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
          width={!isMd ? 150 : 75}
          height={!isMd ? 150 : 75}
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
