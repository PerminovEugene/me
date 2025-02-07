import ContactsForm from "@/components/contacts/contacts.form";
import { metadataBase } from "../metadata";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  ...metadataBase,
  title: "Eugene Perminov: Contact me",
};

const ContactsPage = () => {
  return (
    <div className="p-8 w-full flex flex-col items-center gap-12">
      <h1 className="text-3xl font-bold text-white">Contact me</h1>

      {/* UML*/}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-md">
        {/* UI Block */}
        <div className="relative flex flex-col items-center text-center border-2 border-white border-dashed rounded-lg  w-[400px] shadow-lg">
          <div className="absolute -top-5 bg-[#101a2d] px-4 text-white font-bold">
            Fill the contact form
          </div>
          <div className="w-full">
            <ContactsForm />
          </div>
        </div>

        {/* Responsive Arrow */}
        <div className="flex flex-col lg:flex-row items-center">
          <div className="text-white font-bold mb-2 md:mb-0 md:mr-2">POST</div>

          {/* Horizontal Arrow for Desktop */}
          <svg
            className="hidden md:block"
            width="100"
            height="30"
            viewBox="0 0 100 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="5"
              y1="15"
              x2="95"
              y2="15"
              stroke="white"
              strokeWidth="2"
            />
            <polygon points="95,15 85,10 85,20" fill="white" />
          </svg>

          {/* Vertical Arrow for Mobile */}
          <svg
            className="block md:hidden"
            width="30"
            height="80"
            viewBox="0 0 30 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="15"
              y1="5"
              x2="15"
              y2="75"
              stroke="white"
              strokeWidth="2"
            />
            <polygon points="15,75 10,65 20,65" fill="white" />
          </svg>
        </div>

        {/* Server Block */}
        <div className="relative flex flex-col items-center text-center border-2 border-white border-dashed rounded-lg p-8 w-[400px] shadow-lg">
          <div className="absolute -top-5 bg-[#101a2d] px-4 text-white font-bold">
            Message Processing Unit
          </div>
          <Image
            src="/files/design/cat-with-mails.webp"
            alt="Server Cat"
            width={400}
            height={400}
            className="max-w-full"
          />
          <p className="text-white italic mt-2">
            &quot;Me hurrying to read your message!&quot; 🏃🐱
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
