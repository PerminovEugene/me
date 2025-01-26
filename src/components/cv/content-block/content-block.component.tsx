import { ContentBlockProps } from "./content-block.types";

const ContentBlock = ({ title, children }: ContentBlockProps) => (
  <div className="p-1">
    <h3 className="text-xl font-semibold mb-2 text-green-600 pl-4">{title}</h3>
    <div className="bg-gray-200 p-4 rounded">{children}</div>
  </div>
);

export default ContentBlock;
