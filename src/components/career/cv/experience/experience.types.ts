import { Technologies } from "./technologies";

export type UsedTechnology = {
  technology: Technologies;
};

export type Experience = {
  title: string;
  merged?: boolean;
  company: string | string[];
  location: string;
  startDate: string;
  endDate: string;
  stack?: UsedTechnology[];
  responsibilities: string[];
  link: string | string[];
  months: number;
  type: ExperienceType;
  status?: ProductStatus;
  visibleOnCv?: boolean;
  items?: Experience[];
};

export enum ExperienceType {
  Commercial = "Commercial",
  PetProject = "PetProject",
}

export enum ProductStatus {
  InProgress = "In Progress",
  InProduction = "In Production",
  Unknown = "Unknown",
}

export type ExperiencePage = Experience;

export type AllExperience = ExperiencePage[];
