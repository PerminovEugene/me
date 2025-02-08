import { allLanguages } from "./languages.data";
import { Language } from "./languages.types";

const LanguageBlock = ({ language }: { language: Language }) => {
  const totalCircles = 5;
  const filledCircles = language.level;
  const emptyCircles = totalCircles - filledCircles;

  return (
    <div className=" text-black flex justify-between flex-col lg:flex-row mb-2 lg:mb-0 print:flex-row print:mb-0">
      <div className="flex">
        <h4 className="text-md font-semibold">{language.name}:</h4>
        <span className="text-md text-gray-600 ml-2">
          {language.description}
        </span>
      </div>
      <div className="flex items-center space-x-1">
        {[...Array(filledCircles)].map((_, index) => (
          <div key={index} className="w-4 h-4 bg-blue-500 rounded-full"></div>
        ))}
        {[...Array(emptyCircles)].map((_, index) => (
          <div
            key={index + filledCircles}
            className="w-4 h-4 bg-white border border-gray-300 rounded-full"
          ></div>
        ))}
      </div>
    </div>
  );
};

const LanguagesBlock = () => {
  return (
    <div className="">
      {allLanguages.map((language) => (
        <LanguageBlock key={language.name} language={language} />
      ))}
    </div>
  );
};

export default LanguagesBlock;
