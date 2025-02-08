import ContactsForm from "@/components/contacts/contacts.form";
import { metadataBase } from "../metadata";
import { Metadata } from "next";
import Image from "next/image";
import { H1 } from "@/components/main/h1.component";

export const metadata: Metadata = {
  ...metadataBase,
  title: "Eugene Perminov: Contact me",
};

const ContactsPage = () => {
  return (
    <div className="p-4 print:p-0">
      <H1 text="Contact me" />

      {/* UML*/}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-1 mt-10 lg:mt-20">
        {/* UI Block */}
        <div className="relative flex flex-col items-center text-center border-2 border-white border-dashed rounded-lg w-[400px] h-[400px] shadow-lg">
          <div className="absolute -top-5 bg-[#101a2d] px-4 text-white font-bold">
            Fill the contact form
          </div>
          <div className="w-full p-2 h-full">
            <ContactsForm />
          </div>
        </div>

        {/* Responsive Arrow */}
        <div className="flex flex-col lg:flex-row items-center flex md-col">
          {/* Horizontal Arrow for Desktop */}
          <svg
            className="hidden lg:block"
            width="50"
            height="30"
            viewBox="0 0 50 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="5"
              y1="15"
              x2="45"
              y2="15"
              stroke="white"
              strokeWidth="2"
            />
            <polygon points="45,15 35,10 35,20" fill="white" />
          </svg>

          {/* Vertical Arrow for Mobile */}
          <svg
            className="block lg:hidden"
            width="30"
            height="60"
            viewBox="0 0 30 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="15"
              y1="5"
              x2="15"
              y2="55"
              stroke="white"
              strokeWidth="2"
            />
            <polygon points="15,55 10,45 20,45" fill="white" />
          </svg>
        </div>

        {/* Server Block */}
        <div className="relative flex flex-col items-center text-center border-2 border-white border-dashed rounded-lg p-2 w-[400px] h-[400px] shadow-lg mt-4 lg:mt-0">
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
