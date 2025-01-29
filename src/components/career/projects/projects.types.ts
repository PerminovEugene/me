export type Project = {
  name: string;
  description: string;
  githubLink: string;
  projectLink: string;
  images: string[];
  articles: { title: string; link: string }[];
};

export type Projects = Project[];
