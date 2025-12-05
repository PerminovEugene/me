import { Skills } from "./skills.types";
import { Technologies } from "../experience/technologies";

// Will appear in skill box in CV
export const skills: Skills = [
  [
    {
      technologies: [
        Technologies.TypeScript,
        Technologies.JavaScript,
        Technologies.Rust,
        // Technologies.Ruby,
        Technologies.Go,
        // Technologies.HTML5,
        Technologies.SQL,
        // Technologies.Solidity,
      ],
      title: "Programming Languages",
    },
    {
      technologies: [
        Technologies.NodeJs,
        Technologies.Express,
        Technologies.NestJs,
        Technologies.Microservices,
        // Technologies.RubyOnRails,
        // Technologies.Gin,
        // Technologies.Typeorm,
        Technologies.GRPC,
        Technologies.REST,
        // Technologies.Mongoose,
      ],
      title: "Back-end",
    },
    {
      technologies: [
        Technologies.React,
        Technologies.Redux,
        // Technologies.Webpack,
        Technologies.CSS3,
        Technologies.NextJs,
        Technologies.HTML5,
        Technologies.Zustand,
        // Technologies.MetaMaskSDK,
        // Technologies.EthersJs,
        // Technologies.GraphQL,
        // Technologies.ApolloClient,
      ],
      title: "Front-end",
    },
    {
      technologies: [
        Technologies.PostgreSQL,
        Technologies.MongoDB,
        Technologies.Redis,
        Technologies.Kafka,
        // Technologies.RabbitMQ,
        // Technologies.Elasticsearch,
      ],
      title: "Databases",
    },
    {
      technologies: [
        Technologies.SOLID,
        Technologies.TDD,
        // Technologies.YAGNI,
        Technologies.KISS,
        Technologies.DRY,
        Technologies.DesignPatterns,
      ],
      title: "Principles",
    },
  ],
  [
    {
      technologies: [
        Technologies.Scrum,
        Technologies.Adaptability,
        Technologies.Agile,
        Technologies.Leadership,
        Technologies.CriticalThinking,
        // Technologies.TimeManagement,
      ],
      title: "Soft",
    },
    {
      technologies: [
        Technologies.Jest,
        Technologies.Mocha,
        Technologies.Chai,
        // Technologies.Cypress,
      ],
      title: "Testing",
    },
    {
      technologies: [
        Technologies.Kafka,
        Technologies.Docker,
        Technologies.AWS,
        Technologies.Debezium,
        Technologies.Kubernetes,
        Technologies.GithubActions,
        Technologies.Aptible,
        Technologies.Heroku,
        Technologies.Okteto,
        Technologies.Datadog,
        Technologies.Prometheus,
        Technologies.Grafana,
      ],
      title: "DevOps",
    },
    // {
    //   technologies: [
    //     Technologies.Ethereum,
    //     Technologies.EVM,
    //     Technologies.Hardhat,
    //   ],
    //   title: "Blockchain",
    // },
  ],
];
