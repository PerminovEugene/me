import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

export const ContactPhone = ({ phone }: { phone: string }) => {
  return (
    <a
      href={`tel:${phone}`}
      className="text-blue-500 font-semibold flex items-center space-x-1"
    >
      <FaPhone className="text-md" />
      <span>{phone}</span>
    </a>
  );
};

export const ContactEmail = ({ address }: { address: string }) => {
  return (
    <a
      href={`mailto:${address}`}
      className="text-blue-500 font-semibold flex items-center space-x-1"
    >
      <MdOutlineEmail className="text-md" />
      <span>{address}</span>
    </a>
  );
};

export const ContactGit = ({ address }: { address: string }) => {
  return (
    <a
      href={address}
      target="_blank"
      className="text-blue-500 font-semibold flex items-center space-x-1"
    >
      <FaGithub className="text-md" />
      <span>{address}</span>
    </a>
  );
};

export const ContactLinkedin = ({ address }: { address: string }) => {
  return (
    <a
      href={address}
      target="_blank"
      className="text-blue-500 font-semibold flex items-center space-x-1"
    >
      <FaLinkedin className="text-md" />
      <span>{address}</span>
    </a>
  );
};
