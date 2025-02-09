/* eslint-disable @typescript-eslint/no-explicit-any */
export type Route = {
  link: string;
  text: string;
};

export type SubRoute = {
  next?: Routes;
};

export type Routes = {
  [key: string]: Route | SubRoute;
};

export const isRoute = (obj: any): obj is Route => {
  return obj && typeof obj.link === "string" && typeof obj.text === "string";
};

export const isSubRoute = (obj: any): obj is SubRoute => {
  return obj && typeof obj.next === "object";
};

export const routes = {
  main: {
    link: "/",
    text: "Main",
  },
  career: {
    next: {
      cv: {
        link: "/career/CV",
        text: "CV",
      },
      allStack: {
        link: "/career/all-stack",
        text: "All Stack",
      },
      // resources: {
      //   link: "/career/resources",
      //   text: "Resources",
      // },
    },
  },
  articles: {
    link: "/articles",
    text: "Articles",
    next: {
      solidityGasOptimizationArticleData: {
        link: "/articles/solidity-gas-optimization-1",
        text: "Solidity Gas Optimization: Part 1",
      },
      howToCreatePetProjects: {
        link: "/articles/how-to-create-pet-projects",
        text: "How to create pet projects and not give up",
      },
      // projects: {
      //   link: "/career/projects",
      //   text: "Projects",
      // },
    },
  },
  // hobbies
  hobbies: {
    next: {
      music: {
        link: "/hobbies/music",
        text: "Music",
      },
      traveling: {
        link: "/hobbies/traveling",
        text: "Traveling",
      },
      healthyLifestyle: {
        link: "/hobbies/healthy-lifestyle",
        text: "Healthy Lifestyle",
      },
    },
  },
  // contacts
  contacts: {
    link: "/contacts",
    text: "Contacts",
    next: {
      thankYou: {
        link: "/contacts/thank-you",
        text: "Thank you",
      },
    },
  },
};
