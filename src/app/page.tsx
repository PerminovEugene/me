import React from "react";
import { routes } from "@/routing/routing";
import Link from "next/link";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="w-full text-white">
      {/* Section 1 - About Me */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 text-center md:text-left">
        <div className="md:w-1/2 p-5 md:pl-20">
          <h1 className="text-5xl font-bold mb-6">
            Hi, I&apos;m Eugene Perminov
          </h1>
          <p className="text-lg text-gray-300 max-w-lg mb-10">
            Software engineer and tech enthusiast with a passion for building
            scalable, high-quality solutions. Explore my work and professional
            journey.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/files/design/me.jpg"
            alt="Eugene Perminov"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Section 2 - Career Path */}
      <section className="min-h-screen flex flex-col md:flex-row-reverse items-center justify-center px-6 text-center md:text-left bg-[#1A2332]">
        <div className="md:w-1/2 p-5">
          <h2 className="text-4xl font-semibold mb-6">
            Explore My Career Path
          </h2>
          <p className="text-lg text-gray-300 max-w-lg mb-6">
            Learn more about my experience, skills, and ongoing projects.
          </p>
          <Link
            href={routes.career.next.cv.link}
            className="text-yellow-400 text-xl font-medium hover:underline"
          >
            View My Career →
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/files/design/cat-with-diagram.webp"
            alt="Career Cat"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Section 3 - Contact Me */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 text-center md:text-left">
        <div className="md:w-1/2 p-5 md:pl-20">
          <h2 className="text-4xl font-semibold mb-6">Let&apos;s Connect</h2>
          <p className="text-lg text-gray-300 max-w-lg mb-6">
            Reach out for collaborations, projects, or just to chat.
          </p>
          <Link
            href={routes.contacts.link}
            className="text-yellow-400 text-xl font-medium hover:underline"
          >
            Contact Me →
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/files/design/cat-postman.webp"
            alt="Contact Cat"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
