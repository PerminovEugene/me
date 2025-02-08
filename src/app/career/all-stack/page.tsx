import AllStackComponent from "@/components/career/stack-list/all-stack.component";
import { metadataBase } from "../../metadata";
import { Metadata } from "next";
import { Fragment } from "react";
import { H1 } from "@/components/main/h1.component";

export const metadata: Metadata = {
  ...metadataBase,
  title: "Eugene Perminov: All stack page",
};

const AllStackPage = () => {
  return (
    <Fragment>
      <H1 text="All Stack" />
      <div className="w-full max-w-4xl space-y-6">
        <AllStackComponent />
      </div>
    </Fragment>
  );
};

export default AllStackPage;
