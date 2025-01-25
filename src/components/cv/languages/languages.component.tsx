import { allLanguages } from "./languages.data";
import { Language } from "./languages.types";

const LanguageBlock = ({ language }: { language: Language }) => {
  const totalCircles = 5;
  const filledCircles = language.level;
  const emptyCircles = totalCircles - filledCircles;

  return (
    <div className="mb-4 text-black">
      <h4 className="text-lg font-semibold">{language.name}</h4>
      <div className="flex items-center space-x-1 mt-2">
        {[...Array(filledCircles)].map((_, index) => (
          <div key={index} className="w-4 h-4 bg-blue-500 rounded-full"></div>
        ))}
        {[...Array(emptyCircles)].map((_, index) => (
          <div
            key={index + filledCircles}
            className="w-4 h-4 bg-white border border-gray-300 rounded-full"
          ></div>
        ))}
        <span className="text-sm text-gray-600 ml-2">
          {language.description}
        </span>
      </div>
    </div>
  );
};

const LanguagesBlock = () => {
  return (
    <div className="mb-4">
      {allLanguages.map((language) => (
        <LanguageBlock key={language.name} language={language} />
      ))}
    </div>
  );
};

export default LanguagesBlock;
