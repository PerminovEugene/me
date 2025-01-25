import { allEducation } from "./education.data";
import { Education } from "./education.types";

const EducationEpisode = ({ education }: { education: Education }) => {
  return (
    <div className="mb-4 text-black">
      <h4 className="text-lg font-semibold">{education.degree}</h4>
      <div className="text-sm">
        <span className="ml-2">{education.place}</span>
        <span className="ml-2">
          {education.startDate} - {education.endDate}
        </span>
      </div>
      <div className="mt-2">
        <h5 className="font-semibold">Field of Study:</h5>
        <p className="text-sm">{education.description}</p>
      </div>
    </div>
  );
};

const EducationBlock = () => {
  return (
    <div className="mb-4">
      {allEducation.map((education: Education) => (
        <EducationEpisode key={education.place} education={education} />
      ))}
    </div>
  );
};

export default EducationBlock;
