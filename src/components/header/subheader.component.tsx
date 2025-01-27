"use client";

import { Route } from "@/components/header/config";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import classNames from "classnames";

export const SubHeader = ({ config }: { config: Route }) => {
  const routes = Object.values(config);
  const pathParts = usePathname().split("/");
  return (
    <ul className="flex space-x-4">
      {routes.map((route) => {
        const isSelected = pathParts[2] == route.link.split("/")[2];
        return (
          <li key={route.link}>
            <Link
              className={classNames({
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
