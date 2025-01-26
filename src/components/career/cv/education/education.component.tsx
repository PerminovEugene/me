import { allEducation } from "./education.data";
import { Education } from "./education.types";

const EducationEpisode = ({ education }: { education: Education }) => {
  return (
    <div className="text-black">
      <h4 className="text-md font-semibold text-blue-500 hover:underline">
        <a href={education.link} target="_blank">
          {education.place}
        </a>
      </h4>
      <h4 className="text-md font-semibold">Degree: {education.degree}</h4>
      <div className="text-sm">
        {education.startDate} - {education.endDate}
      </div>
      <div className="flex">
        <h5 className="font-semibold text-sm">Field of Study:</h5>
        <p className="text-sm ml-2">{education.description}</p>
      </div>
    </div>
  );
};

const EducationBlock = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {allEducation.map((education) => (
        <EducationEpisode key={education.place} education={education} />
      ))}
    </div>
  );
};

export default EducationBlock;
