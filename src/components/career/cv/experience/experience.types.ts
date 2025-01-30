export type Experience = {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  stack: string[];
  responsibilities: string[];
  link: string;
  months: number;
  type: ExperienceType;
  status: ProductStatus;
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
