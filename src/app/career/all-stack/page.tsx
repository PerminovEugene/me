import AllStackComponent from "@/components/career/stack-list/all-stack.component";
import { metadataBase } from "../../metadata";
import { Metadata } from "next";
import { H1 } from "@/components/main/h1.component";

export const metadata: Metadata = {
  ...metadataBase,
  title: "Evgenii Perminov: All stack page",
};

const AllStackPage = () => {
  return (
    <div className="p-4 mb-16 print:p-0">
      <H1 text="All Stack" />
      <div className="w-full max-w-4xl space-y-6">
        <AllStackComponent />
      </div>
    </div>
  );
};

export default AllStackPage;
