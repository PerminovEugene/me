import React from "react";
import { Card, CardContent } from "@/components/main/card.component";
import { routes } from "@/routing/routing";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <div className="w-full max-w-4xl text-center py-8">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Eugene Perminov&apos;s Website
        </h1>
        <p className="text-lg">
          Software engineer and tech enthusiast. Explore my work, hobbies, and
          professional journey.
        </p>
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-gray-800 hover:bg-gray-700">
          <CardContent className="flex flex-col items-start p-4">
            <h2 className="text-2xl font-semibold mb-2">Career</h2>
            <p className="text-sm mb-4">
              Learn more about my professional experience, skills, and ongoing
              projects.
            </p>
            <Link className="text-yellow-400" href={routes.career.next.cv.link}>
              Explore Career
            </Link>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 hover:bg-gray-700">
          <CardContent className="flex flex-col items-start p-4">
            <h2 className="text-2xl font-semibold mb-2">Hobbies</h2>
            <p className="text-sm mb-4">
              Discover my passions for music, traveling, and a healthy
              lifestyle.
            </p>
            {/* <Button variant="secondary" className="text-yellow-400">
              Explore Hobbies
            </Button> */}
          </CardContent>
        </Card>

        <Card className="bg-gray-800 hover:bg-gray-700">
          <CardContent className="flex flex-col items-start p-4">
            <h2 className="text-2xl font-semibold mb-2">Pet Projects</h2>
            <p className="text-sm mb-4">
              Check out my side projects, ideas, and experiments in development.
            </p>
            {/* <Button variant="secondary" className="text-yellow-400">
              View Projects
            </Button> */}
          </CardContent>
        </Card>

        <Card className="bg-gray-800 hover:bg-gray-700">
          <CardContent className="flex flex-col items-start p-4">
            <h2 className="text-2xl font-semibold mb-2">Contacts</h2>
            <p className="text-sm mb-4">
              Get in touch with me for collaborations, opportunities, or a
              friendly chat.
            </p>
            <Link className="text-yellow-400" href={routes.contacts.link}>
              Contact Me
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
