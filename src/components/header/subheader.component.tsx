import { Route } from "@/components/header/config";
import Link from "next/link";
import React from "react";

export const SubHeader = ({ config }: { config: Route }) => {
  const routes = Object.values(config);
  return (
    <ul className="flex space-x-4">
      {routes.map((route) => (
        <li key={route.link}>
          <Link href={route.link}>{route.text}</Link>
        </li>
      ))}
    </ul>
  );
};
