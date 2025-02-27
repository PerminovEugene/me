import { Technologies } from "./technologies";

export type UsedTechnology = {
  technology: Technologies;
};

export type Experience = {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  stack: UsedTechnology[];
  responsibilities: string[];
  link: string;
  months: number;
  type: ExperienceType;
  status: ProductStatus;
  visibleOnCv?: boolean;
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
