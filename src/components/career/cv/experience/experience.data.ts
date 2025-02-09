import {
  AllExperience,
  ExperienceType,
  ProductStatus,
} from "./experience.types";
import { Technologies } from "./technologies";

const calculateMonths = (startDate: string, endDate: string): number => {
  const parseDate = (dateStr: string) => {
    // Convert "August 2021" to "2021-08-01" for safary, it's more strict
    const parsedDate = new Date(dateStr);
    if (isNaN(parsedDate.getTime())) {
      const [monthStr, yearStr] = dateStr.split(" ");
      const month = new Date(`${monthStr} 1, ${yearStr}`).getMonth();
      return new Date(parseInt(yearStr, 10), month, 1);
    }
    return parsedDate;
  };

  const start = parseDate(startDate);
  const end = parseDate(endDate);

  return (
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth()) +
    1
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
      { technology: Technologies.NodeJs },
      { technology: Technologies.TypeScript },
      { technology: Technologies.JavaScript },
      { technology: Technologies.Webpack },
      { technology: Technologies.Kafka },
      { technology: Technologies.PostgreSQL },
      { technology: Technologies.LoopBack3 },
      { technology: Technologies.LoopBack4 },
      { technology: Technologies.Docker },
      { technology: Technologies.Microservices },
      { technology: Technologies.Debezium },
      { technology: Technologies.Datadog },
      { technology: Technologies.AWS },
      { technology: Technologies.Aptible },
      { technology: Technologies.GithubActions },
      { technology: Technologies.Kubernetes },
      { technology: Technologies.Agile },
      { technology: Technologies.Scrum },
      { technology: Technologies.Redux },
      { technology: Technologies.ReduxSaga },
      { technology: Technologies.Jest },
      { technology: Technologies.Cypress },
      { technology: Technologies.Supertest },
      { technology: Technologies.StyledComponents },
      { technology: Technologies.HTML5 },
      { technology: Technologies.SQL },
      { technology: Technologies.React },
      { technology: Technologies.Redux },
      { technology: Technologies.ReduxSaga },
      { technology: Technologies.CSS3 },
      { technology: Technologies.StyledComponents },
      { technology: Technologies.MaterialUI },
      { technology: Technologies.Elasticsearch },
      { technology: Technologies.REST },
      { technology: Technologies.Redis },
      { technology: Technologies.Okteto },
      { technology: Technologies.Adaptability },
      { technology: Technologies.Leadership },
      { technology: Technologies.CriticalThinking },
      { technology: Technologies.TimeManagement },
      { technology: Technologies.Websockets },
      { technology: Technologies.GithubActions },
      { technology: Technologies.ShopifyAPI },
      { technology: Technologies.Heroku },
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
      { technology: Technologies.NodeJs },
      { technology: Technologies.TypeScript },
      { technology: Technologies.VSCodeAPI },
      { technology: Technologies.GRPC },
      { technology: Technologies.Svelte },
      { technology: Technologies.CriticalThinking },
      { technology: Technologies.TimeManagement },
      { technology: Technologies.Webpack },
      { technology: Technologies.JavaScript },
      { technology: Technologies.HTML5 },
      { technology: Technologies.CSS3 },
      { technology: Technologies.RabbitMQ },
      { technology: Technologies.Mocha },
      { technology: Technologies.Chai },
      { technology: Technologies.Supertest },
      { technology: Technologies.Cypress },
      { technology: Technologies.Scrum },
      { technology: Technologies.Adaptability },
      { technology: Technologies.Agile },
      { technology: Technologies.CriticalThinking },
      { technology: Technologies.TimeManagement },
      { technology: Technologies.VSCodeAPI },
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
      { technology: Technologies.NestJs },
      { technology: Technologies.React },
      { technology: Technologies.Redux },
      { technology: Technologies.ReduxSaga },
      { technology: Technologies.TypeScript },
      { technology: Technologies.NodeJs },
      { technology: Technologies.Express },
      { technology: Technologies.NestJs },
      { technology: Technologies.PostgreSQL },
      { technology: Technologies.AWS },
      { technology: Technologies.Heroku },
      { technology: Technologies.Enzyme },
      { technology: Technologies.Jest },
      { technology: Technologies.GraphQL },
      { technology: Technologies.RubyOnRails },
      { technology: Technologies.Docker },
      { technology: Technologies.ApolloClient },
      { technology: Technologies.StripeAPI },
      { technology: Technologies.Ruby },
      { technology: Technologies.SQL },
      { technology: Technologies.HTML5 },
      { technology: Technologies.JavaScript },
      { technology: Technologies.CSS3 },
      { technology: Technologies.Webpack },
      { technology: Technologies.StyledComponents },
      { technology: Technologies.MaterialUI },
      { technology: Technologies.Tailwind },
      { technology: Technologies.REST },
      { technology: Technologies.Redis },
      { technology: Technologies.Mocha },
      { technology: Technologies.Chai },
      { technology: Technologies.Supertest },
      { technology: Technologies.Scrum },
      { technology: Technologies.Adaptability },
      { technology: Technologies.Agile },
      { technology: Technologies.Leadership },
      { technology: Technologies.CriticalThinking },
      { technology: Technologies.TimeManagement },
      { technology: Technologies.Websockets },
      { technology: Technologies.SocketIO },
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
      { technology: Technologies.Angular2 },
      { technology: Technologies.TypeScript },
      { technology: Technologies.NodeJs },
      { technology: Technologies.Mocha },
      { technology: Technologies.MongoDB },
      { technology: Technologies.Protractor },
      { technology: Technologies.Mongoose },
      { technology: Technologies.RabbitMQ },
      { technology: Technologies.EtsyAPI },
      { technology: Technologies.ShopifyAPI },
      { technology: Technologies.MagentoAPI },
      { technology: Technologies.React },
      { technology: Technologies.Redux },
      { technology: Technologies.JavaScript },
      { technology: Technologies.HTML5 },
      { technology: Technologies.CSS3 },
      { technology: Technologies.Webpack },
      { technology: Technologies.MaterialUI },
      { technology: Technologies.REST },
      { technology: Technologies.Microservices },
      { technology: Technologies.Redis },
      { technology: Technologies.Chai },
      { technology: Technologies.Supertest },
      { technology: Technologies.Docker },
      { technology: Technologies.Scrum },
      { technology: Technologies.Adaptability },
      { technology: Technologies.Agile },
      { technology: Technologies.TimeManagement },
      { technology: Technologies.Websockets },
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
      { technology: Technologies.NodeJs },
      { technology: Technologies.Express },
      { technology: Technologies.PostgreSQL },
      { technology: Technologies.StripeAPI },
      { technology: Technologies.Docker },
      { technology: Technologies.TypeScript },
      { technology: Technologies.JavaScript },
      { technology: Technologies.REST },
      { technology: Technologies.MongoDB },
      { technology: Technologies.Mocha },
      { technology: Technologies.Chai },
      { technology: Technologies.Scrum },
      { technology: Technologies.Agile },
      { technology: Technologies.CriticalThinking },
      { technology: Technologies.TimeManagement },
      { technology: Technologies.FHIR },
      { technology: Technologies.MongoDB },
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
      { technology: Technologies.React },
      { technology: Technologies.Redux },
      { technology: Technologies.CSS3 },
      { technology: Technologies.JavaScript },
      { technology: Technologies.HTML5 },
      { technology: Technologies.Webpack },
      { technology: Technologies.Scrum },
      { technology: Technologies.REST },
      { technology: Technologies.TwitterFlight },
      { technology: Technologies.Adaptability },
      { technology: Technologies.Agile },
      { technology: Technologies.CriticalThinking },
      { technology: Technologies.TimeManagement },
      { technology: Technologies.Jquery },
      { technology: Technologies.FHIR },
    ],
    type: ExperienceType.Commercial,
    status: ProductStatus.InProduction,
  },
  // PETS
  {
    company:
      "Chess platform focusing on custom rules and unique game modes. Using Websockets, Nest.js, MongoDB and Docker.",
    link: "https://github.com/Real-One-Chess-King/monorepo",
    status: ProductStatus.InProgress,
    title: "Real One Chess King",
    location: "Remote",
    startDate: "December 2024",
    endDate: "November 2025",
    responsibilities: [],
    months: 3,
    stack: [
      { technology: Technologies.Websockets },
      { technology: Technologies.React },
      { technology: Technologies.SocketIO },
      { technology: Technologies.Docker },
      { technology: Technologies.NodeJs },
      { technology: Technologies.TypeScript },
      { technology: Technologies.JavaScript },
      { technology: Technologies.HTML5 },
      { technology: Technologies.CSS3 },
      { technology: Technologies.Tailwind },
      { technology: Technologies.MongoDB },
      { technology: Technologies.Mongoose },
      { technology: Technologies.Mocha },
      { technology: Technologies.Chai },
      { technology: Technologies.Supertest },
      { technology: Technologies.CriticalThinking },
      { technology: Technologies.TimeManagement },
      { technology: Technologies.Websockets },
      { technology: Technologies.SocketIO },
      { technology: Technologies.NextJs },
      { technology: Technologies.GraphQL },
      { technology: Technologies.ApolloClient },
      { technology: Technologies.NestJs },
      { technology: Technologies.NextJs },
    ],
    type: ExperienceType.PetProject,
  },
  {
    company:
      "NFT marketplace based on Ethereum, Solidity, ERC721, Hardhat, Pinata and ethers.js. Custom server for Ethereum node indexing.",
    link: "https://github.com/PerminovEvgenii/nft-open-marketplace",
    status: ProductStatus.InProgress,
    title: "NFT Open Marketplace",
    location: "Remote",
    startDate: "August 2024",
    endDate: "November 2024",
    responsibilities: [],
    months: 3,
    stack: [
      { technology: Technologies.NextJs },
      { technology: Technologies.Websockets },
      { technology: Technologies.React },
      { technology: Technologies.SocketIO },
      { technology: Technologies.Docker },
      { technology: Technologies.NodeJs },
      { technology: Technologies.TypeScript },
      { technology: Technologies.JavaScript },
      { technology: Technologies.HTML5 },
      { technology: Technologies.CSS3 },
      { technology: Technologies.Tailwind },
      { technology: Technologies.Gin },
      { technology: Technologies.Go },
      { technology: Technologies.REST },
      { technology: Technologies.PostgreSQL },
      { technology: Technologies.Mocha },
      { technology: Technologies.Chai },
      { technology: Technologies.Supertest },
      { technology: Technologies.Ethereum },
      { technology: Technologies.EVM },
      { technology: Technologies.Hardhat },
      { technology: Technologies.CriticalThinking },
      { technology: Technologies.TimeManagement },
      { technology: Technologies.Solidity },
      { technology: Technologies.MetaMaskSDK },
      { technology: Technologies.EthersJs },
      { technology: Technologies.PostgreSQL },
      { technology: Technologies.SQL },
    ],
    type: ExperienceType.PetProject,
  },
];

export default allExperience;
