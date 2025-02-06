"use client";

import { isRoute, Routes } from "@/routing/routing";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import classNames from "classnames";

export const SubHeader = ({ config }: { config: Routes }) => {
  const routes = Object.values(config);
  const pathParts = usePathname().split("/");
  return (
    <div className="w-full max-w-4xl text-md">
      <ul className="flex  p-2 flex-row items-center text-center border-2 border-white border-dashed rounded-lg w-[310px] shadow-lg">
        {routes.map((route) => {
          if (!isRoute(route)) {
            return null;
          }
          const isSelected = pathParts[2] == route.link.split("/")[2];
          return (
            <li key={route.link} className="">
              <Link
                className={classNames(
                  "mx-6 transition duration-300 ease-in-out",
                  {
                    "text-yellow-200": isSelected,
                    "text-white": !isSelected,
                    "hover:text-yellow-400": isSelected,
                    "hover:text-blue-100": !isSelected,
                  }
                )}
                href={route.link}
              >
                {route.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
