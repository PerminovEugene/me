import { routes } from "@/routing/routing";
import CareerSubHeader from "../career/subheader/career-sub-header.component";
// import HobbiesSubHeader from "../hobbies/subheader/sub-header.component";

export type HeaderConfigItem = {
  path?: string;
  link: string;
  text: string;
  subHeaderComponent:
    | (({
        onSelected,
      }: {
        onSelected: (item: HeaderConfigItem) => void;
      }) => React.JSX.Element)
    | null;
};

export type HeaderConfig = HeaderConfigItem[];

export const headerConfig: HeaderConfig = [
  {
    path: "/",
    link: routes.main.link,
    text: routes.main.text,
    subHeaderComponent: null,
  },
  {
    path: "career",
    link: routes.career.next.cv.link,
    text: "Career",
    subHeaderComponent: CareerSubHeader,
  },
  {
    path: "articles",
    link: routes.articles.link,
    text: "Articles",
    subHeaderComponent: null,
  },
  // {
  //   path: "hobbies",
  //   link: routes.hobbies.next.music.link,
  //   text: "Hobbies",
  //   subHeaderComponent: HobbiesSubHeader,
  // },
  {
    path: "contacts",
    link: routes.contacts.link,
    text: "Contacts",
    subHeaderComponent: null,
  },
];
