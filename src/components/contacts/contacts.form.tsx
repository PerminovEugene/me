"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const ContactsForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch("https://formspree.io/f/mkgoboyz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      });

      if (response.ok) {
        setSuccess("Your message has been sent successfully!");
        setEmail("");
        setMessage("");
        router.push("/contacts/thank-you");
      } else {
        setError("Failed to send your message. Please try again.");
      }
    } catch (error) {
      setError(
        "An error occurred. Please try again. " + (error as Error).message
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#1A2332] p-6 rounded-lg w-full border border-gray-700"
    >
      {/* Email Input */}
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-300"
        >
          Your Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full px-4 py-2 bg-[#2A3548] text-white border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      {/* Message Input */}
      <div className="mb-5">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-300"
        >
          Your Message
        </label>
        <textarea
          id="message"
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 block w-full px-4 py-2 bg-[#2A3548] text-white border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        ></textarea>
      </div>

      {/* Status Messages */}
      {error && (
        <p className="text-red-400 text-sm text-center mb-3">{error}</p>
      )}
      {success && (
        <p className="text-green-400 text-sm text-center mb-3">{success}</p>
      )}

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300"
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactsForm;
