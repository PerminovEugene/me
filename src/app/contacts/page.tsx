import ContactsForm from "@/components/contacts/contacts.form";
import { metadataBase } from "../metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...metadataBase,
  title: "Eugene Perminov: Contacts me",
};

const ContactsPage = () => {
  return (
    <div className="p-8 rounded-lg shadow-lg w-full max-w-md">
      <h1 className="text-2xl font-bold mb-6">Contact me</h1>
      <ContactsForm />
    </div>
  );
};

export default ContactsPage;
