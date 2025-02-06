import AllStackComponent from "@/components/career/stack-list/all-stack.component";
import { metadataBase } from "../../metadata";
import { Metadata } from "next";
import { Fragment } from "react";

export const metadata: Metadata = {
  ...metadataBase,
  title: "Eugene Perminov: All stack page",
};

const AllStackPage = () => {
  return (
    <Fragment>
      <h1 className="text-4xl font-bold mb-8">All Stack</h1>
      <div className="w-full max-w-4xl space-y-6">
        <AllStackComponent />
      </div>
    </Fragment>
  );
};

export default AllStackPage;
