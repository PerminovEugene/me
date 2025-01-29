import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
}

const Section = ({ children }: SectionProps) => {
  return <section className="mb-8 [&>p]:mb-2">{children}</section>;
};

export default Section;
