import { ContactEmail, ContactLink, ContactPhone } from "./contacts";

const BaseInfo = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-black mb-2 p-4">
        Eugene Perminov
      </h1>
      {/* <h2 className="text-2xl text-blue-500">Senior Software Engineer</h2> */}
      <div className="border-t border-b border-gray-300 border-t-4 border-b-4 py-2 p-4">
        <div className="flex space-x-4 text-sm">
          <ContactPhone phone="+372-5368-5244" />
          <ContactEmail address="perminov.eugene@gmail.com" />
        </div>
        <div className="flex space-x-4 text-sm">
          <ContactLink address="https://github.com/PerminovEugene" />
          <ContactLink address="https://www.linkedin.com/in/eugene-perminov" />
        </div>
      </div>
    </div>
  );
};

export default BaseInfo;
