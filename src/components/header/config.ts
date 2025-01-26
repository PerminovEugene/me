import CareerSubHeader from "../career/subheader/sub-header.component";
import HobbiesSubHeader from "../hobbies/subheader/sub-header.component";

export type Route = {
  [key: string]: {
    link: string;
    text: string;
  };
};
export type Routes = {
  [key: string]: Route;
};

export const routes = {
  main: {
    link: "/",
    text: "About Me",
  },
  career: {
    cv: {
      link: "/career/CV",
      text: "CV",
    },
    allStack: {
      link: "/career/all-stack",
      text: "All Stack",
    },
    resources: {
      link: "/career/resources",
      text: "Resources",
    },
    articles: {
      link: "/career/articles",
      text: "Articles",
    },
    projects: {
      link: "/career/projects",
      text: "Projects",
    },
  },
  // hobbies
  hobbies: {
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
  // contacts
  contacts: {
    link: "/contacts",
    text: "Contacts",
  },
};

type HeaderConfig = {
  path?: string;
  link: string;
  text: string;
  subHeaderComponent: (() => React.JSX.Element) | null;
}[];

export const headerConfig: HeaderConfig = [
  {
    link: routes.main.link,
    text: routes.main.text,
    subHeaderComponent: null,
  },
  {
    path: "career",
    link: routes.career.cv.link,
    text: "Career",
    subHeaderComponent: CareerSubHeader,
  },
  {
    path: "hobbies",
    link: routes.hobbies.music.link,
    text: "Hobbies",
    subHeaderComponent: HobbiesSubHeader,
  },
  {
    link: routes.contacts.link,
    text: "Contacts",
    subHeaderComponent: null,
  },
];
