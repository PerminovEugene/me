import { routes } from "@/routing/routing";
import { SubHeader } from "@/components/header/subheader.component";
import React from "react";

const HobbiesSubHeader = () => {
  return <SubHeader config={routes.hobbies.next} />;
};
export default HobbiesSubHeader;
