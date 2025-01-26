import { metadataBase } from "../metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...metadataBase,
  title: "Eugene Perminov: Contacts page",
};

const ContactsPage = () => {
  return <main className="min-h-screen ">Contacts in progress</main>;
};

export default ContactsPage;
