import { petProjects } from "./pet-projects.data";
import { PetProject } from "./pet-projects.types";

const PetProjectBlock = ({ petProject }: { petProject: PetProject }) => {
  return (
    <div className="mb-4 text-black last:mb-0">
      <h4 className="text-md font-semibold">
        <a
          href={petProject.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {petProject.name}
        </a>
      </h4>
      <div className="mt-2 text-sm flex">
        <h5 className="font-semibold">Status:</h5>
        <span className="text-gray-600 ml-2">{petProject.status}</span>
      </div>
      <div className="mt-1">
        <p className="text-sm text-gray-600">{petProject.description}</p>
        {/* <div className="mt-1">
          <a
            href={petProject.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {petProject.link}
          </a>
        </div> */}
      </div>
    </div>
  );
};

const PetProjectsBlock = () => {
  return (
    <div>
      {petProjects.map((petProject: PetProject) => (
        <PetProjectBlock key={petProject.name} petProject={petProject} />
      ))}
    </div>
  );
};

export default PetProjectsBlock;
