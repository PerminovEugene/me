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
    <ul className="flex flex-col items-start p-2">
      {routes.map((route) => {
        if (!isRoute(route)) {
          return null;
        }
        const isSelected = pathParts[2] == route.link.split("/")[2];
        return (
          <li key={route.link} className="my-1">
            <Link
              className={classNames("transition duration-300 ease-in-out", {
                "text-yellow-200": isSelected,
                "text-white": !isSelected,
                "hover:text-yellow-400": isSelected,
                "hover:text-blue-100": !isSelected,
              })}
              href={route.link}
            >
              {route.text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
