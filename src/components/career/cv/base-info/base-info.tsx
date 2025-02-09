import {
  ContactEmail,
  ContactGit,
  ContactLinkedin,
  ContactPhone,
} from "./contacts";

const BaseInfo = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-black mb-2 p-4">
        Evgenii Perminov
      </h1>
      {/* <h2 className="text-2xl text-blue-500">Senior Software Engineer</h2> */}
      <div className="border-t border-b border-gray-300 border-t-4 border-b-4 py-2 p-4 mb-1 flex justify-center flex-col md:flex-row ">
        <div className="text-sm mr-8">
          <ContactGit address="https://github.com/PerminovEvgenii" />
          <ContactLinkedin address="https://linkedin.com/in/Evgenii-perminov" />
        </div>
        <div className="text-sm align-right">
          <ContactPhone phone="+372-5368-5244" />
          <ContactEmail address="perminov.Evgenii@gmail.com" />
        </div>
      </div>
    </div>
  );
};

export default BaseInfo;
