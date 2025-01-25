export type Experience = {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  stack: string[];
  responsibilities: string[];
};

export type ExperiencePage = Experience[];

export type AllExperience = ExperiencePage[];
