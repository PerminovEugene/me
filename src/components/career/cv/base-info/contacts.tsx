import { FaLinkedin, FaGithub, FaSitemap } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

type LinkProps = {
  address: string;
  text: string;
};

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

export const ContactGit = ({ address, text }: LinkProps) => {
  return (
    <a
      href={address}
      target="_blank"
      className="text-blue-500 font-semibold flex items-center space-x-1"
    >
      <FaGithub className="text-md" />
      <span>{text}</span>
    </a>
  );
};

export const ContactLinkedin = ({ address, text }: LinkProps) => {
  return (
    <a
      href={address}
      target="_blank"
      className="text-blue-500 font-semibold flex items-center space-x-1"
    >
      <FaLinkedin className="text-md" />
      <span>{text}</span>
    </a>
  );
};

export const ContactWebsite = ({ address, text }: LinkProps) => {
  return (
    <a
      href={address}
      target="_blank"
      className="text-blue-500 font-semibold flex items-center space-x-1"
    >
      <FaSitemap className="text-md" />
      <span>{text}</span>
    </a>
  );
};
