import { metadataBase } from "../metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...metadataBase,
  title: "Eugene Perminov: Contacts page",
};

const ContactsPage = () => {
  return <div className="min-h-screen ">Contacts in progress</div>;
};

export default ContactsPage;
