import { FaArrowUp } from "react-icons/fa";
import {
  ContactEmail,
  ContactGit,
  ContactLinkedin,
  ContactPhone,
  ContactWebsite,
} from "./contacts";

const BaseInfo = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-black mb-2 p-4">
        Evgenii Perminov
      </h1>
      {/* <h2 className="text-2xl text-blue-500">Senior Software Engineer</h2> */}
      <div className="border-t border-b border-gray-300 border-t-4 border-b-4 py-2 p-4 mb-1 flex justify-center flex-col md:flex-row text-sm">
        <div className="mr-8">
          <ContactGit
            address="https://github.com/PerminovEugene"
            text="github.com/PerminovEugene"
          />
          <ContactLinkedin
            address="https://linkedin.com/in/Eugene-Perminov"
            text="linkedin.com/in/Eugene-Perminov"
          />
        </div>
        <div className="align-right mr-8">
          <ContactPhone phone="+372-5368-5244" />
          <ContactEmail address="perminov.eugene@gmail.com" />
        </div>
        <div className="align-right">
          <ContactWebsite
            address="https://www.evgeniiperminov.dev"
            text="evgeniiperminov.dev"
          />
          <span className="text-green-600 font-semibold flex items-center space-x-1 alligh-right">
            My website
            <FaArrowUp className="ml-0 pb-0.5" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default BaseInfo;
