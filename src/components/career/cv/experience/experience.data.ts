import {
  AllExperience,
  ExperienceType,
  ProductStatus,
} from "./experience.types";
import { Technologies } from "./technologies";

const calculateMonths = (startDate: string, endDate: string): number => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  return (
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth())
  );
};

const allExperience: AllExperience = [
  {
    title: "Senior Software Engineer",
    company: "Katana cloud inventory",
    location: "Tallinn, Estonia | Remote",
    link: "https://katanamrp.com/",
    startDate: "August 2021",
    endDate: "September 2024",
    responsibilities: [
      "Microservices Development & Maintenance: Designed and optimized microservices in a system of around 100 services, ensuring scalability and efficient communication via Kafka with thousands of messages per minute.",
      "Cross-Team Collaboration: Delivered product features like the Katana public API gateway, which scaled by 400% (from hundreds to thousands of requests per minute), webhooks, sales orders, and inventory planner.",
      "Manufacturing Resource Planning: Improved calculation logic, which reduced errors by 80% and decreased calculation time by 60% (from 3–5 seconds to 1–1.5 seconds).",
      "System Investigations & Planning: Participated in technical investigations and estimations, and led several epic planning sessions, including backlog grooming.",
      "Database Optimization: Enhanced the structure and query performance across multiple PostgreSQL databases, significantly reducing service response times.",
      "DevOps Maintenance: Boosted CI/CD pipelines, parallelized integration tests, and reduced test execution time by 60% (from 5 minutes to 2 minutes).",
    ],
    months: calculateMonths("August 2021", "September 2024"),
    stack: [
      Technologies.NodeJs,
      Technologies.TypeScript,
      Technologies.Kafka,
      Technologies.PostgreSQL,
      Technologies.LoopBack3,
      Technologies.LoopBack4,
      Technologies.Docker,
      Technologies.Microservices,
      Technologies.Debezium,
      Technologies.Datadog,
      Technologies.AWS,
      Technologies.Aptible,
      Technologies.GithubActions,
      Technologies.Kubernetes,
    ],
    type: ExperienceType.Commercial,
    status: ProductStatus.InProduction,
  },
  {
    title: "Senior Software Engineer",
    company: "Huawei R&D Lab",
    location: "Saint-Petersburg, Russia | Remote",
    startDate: "August 2020",
    endDate: "June 2021",
    responsibilities: [
      "Front-End Development: Built the front-end of an IDE for C/C++ developers using Visual Studio Code API, Node.js, Svelte, and TypeScript.",
      "Remote Debugging & CI/CD: Implemented a remote debugging server, set up CI/CD pipelines for packaging and delivering new versions of the extension, and integrated gRPC protocol for communication.",
    ],
    stack: [
      Technologies.NodeJs,
      Technologies.TypeScript,
      Technologies.VSCodeAPI,
      Technologies.GRPC,
      Technologies.Svelte,
    ],
    months: calculateMonths("August 2020", "June 2021"),
    link: "https://career.huawei.ru/rri/en/",
    type: ExperienceType.Commercial,
    status: ProductStatus.InProduction,
  },
  {
    title: "Full-stack Developer",
    company: "Diversido",
    location: "Remote",
    link: "https://www.diversido.io/",
    startDate: "May 2018",
    endDate: "August 2020",
    responsibilities: [
      "Front-End Development: Improved interfaces with user-friendly UI using modern front-end technologies, including React, Redux, Redux Saga, and TypeScript.",
      "Back-End Development: Built stable, fast, and scalable back-end applications leveraging Node.js, Express, Nest.js, and PostgreSQL.",
      "Client Collaboration: Maintained close communication with clients and product owners across multiple projects, ensuring their requirements were accurately implemented.",
      "CI/CD Implementation: Set up and maintained CI/CD pipelines with Docker, AWS, and Heroku for seamless deployment.",
      "Project Management: Frequently worked on multiple projects simultaneously, efficiently adapting to shifting contexts and priorities.",
      "Architecture & Planning: Contributed to architectural decisions and provided time estimates for project tasks, incorporating tools like GraphQL, Apollo Client, and Ruby on Rails.",
      "Testing & Quality Assurance: Ensured high-quality deliverables by writing unit and integration tests with Enzyme, Jest, and Docker.",
    ],
    months: calculateMonths("May 2018", "August 2020"),
    stack: [
      Technologies.React,
      Technologies.Redux,
      Technologies.ReduxSaga,
      Technologies.TypeScript,
      Technologies.NodeJs,
      Technologies.Express,
      Technologies.NestJs,
      Technologies.PostgreSQL,
      Technologies.AWS,
      Technologies.Heroku,
      Technologies.Enzyme,
      Technologies.Jest,
      Technologies.GraphQL,
      Technologies.RubyOnRails,
      Technologies.Docker,
      Technologies.ApolloClient,
      Technologies.StripeAPI,
    ],
    type: ExperienceType.Commercial,
    status: ProductStatus.InProduction,
  },
  {
    link: "https://sellbery.com/",
    title: "Full-stack Developer",
    company: "Ecombix",
    location: "Saint-Petersburg, Russia",
    startDate: "July 2017",
    endDate: "April 2018",
    responsibilities: [
      "Enhanced an application that connected to e-commerce platforms such as Shopify, Magento, and WooCommerce, leveraging a service-oriented architecture with RabbitMQ.",
    ],
    months: calculateMonths("July 2017", "April 2018"),
    stack: [
      Technologies.Angular2,
      Technologies.TypeScript,
      Technologies.NodeJs,
      Technologies.EcommercePlatformsAPIs,
      Technologies.Mocha,
      Technologies.MongoDB,
      Technologies.Protractor,
      Technologies.Mongoose,
      Technologies.RabbitMQ,
      Technologies.EtsyAPI,
      Technologies.ShopifyAPI,
      Technologies.MagentoAPI,
    ],
    type: ExperienceType.Commercial,
    status: ProductStatus.InProduction,
  },
  {
    title: "Junior Back-end Developer",
    company: "BurningButtons",
    location: "Omsk, Russia",
    link: "https://burningbuttons.com/",
    startDate: "September 2016",
    endDate: "March 2017",
    responsibilities: [
      "Developed a Facebook chatbot using Node.js, Express, and PostgreSQL, and integrated Stripe API for payment processing.",
    ],
    months: calculateMonths("September 2016", "March 2017"),
    stack: [
      Technologies.NodeJs,
      Technologies.Express,
      Technologies.PostgreSQL,
      Technologies.StripeAPI,
      Technologies.Docker,
    ],
    type: ExperienceType.Commercial,
    status: ProductStatus.InProduction,
  },
  {
    title: "Junior Front-End Developer",
    link: "https://7bits.it/",
    company: "7Bits and Avelix",
    location: "Omsk, Russia",
    startDate: "September 2014",
    endDate: "September 2016",
    responsibilities: [
      "Contributed to front-end development for banking and medical applications using React and Redux.",
    ],
    months: calculateMonths("September 2014", "September 2016"),
    stack: [
      Technologies.React,
      Technologies.Redux,
      Technologies.HTML,
      Technologies.CSS3,
    ],
    type: ExperienceType.Commercial,
    status: ProductStatus.InProduction,
  },
  // PETS
  {
    title:
      "Chess platform focusing on custom rules and unique game modes. Using Websockets, Nest.js, MongoDB and Docker.",
    link: "https://github.com/Real-One-Chess-King/monorepo",
    status: ProductStatus.InProgress,
    company: "Real One Chess King",
    location: "Remote",
    startDate: "December 2024",
    endDate: "November 2025",
    responsibilities: [],
    months: 3,
    stack: [
      Technologies.Websockets,
      Technologies.React,
      Technologies.SocketIO,
      Technologies.Docker,
    ],
    type: ExperienceType.PetProject,
  },
  {
    title:
      "NFT marketplace based on Ethereum, Solidity, ERC721, Hardhat, Pinata and ethers.js. Custom server for Ethereum node indexing.",
    link: "https://github.com/PerminovEugene/nft-open-marketplace",
    status: ProductStatus.InProgress,
    company: "NFT Open Marketplace",
    location: "Remote",
    startDate: "August 2024",
    endDate: "November 2024",
    responsibilities: [],
    months: 3,
    stack: [
      Technologies.Websockets,
      Technologies.React,
      Technologies.SocketIO,
      Technologies.Docker,
    ],
    type: ExperienceType.PetProject,
  },
];

export default allExperience;
