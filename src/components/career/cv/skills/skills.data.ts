import { Skills } from "./skills.types";
import { Technologies } from "../experience/technologies";

export const skills: Skills = [
  [
    {
      technologies: [
        Technologies.TypeScript,
        Technologies.JavaScript,
        Technologies.Ruby,
        Technologies.Go,
        Technologies.HTML5,
        Technologies.SQL,
        Technologies.Solidity,
      ],
      title: "Programming Languages",
    },

    {
      technologies: [
        Technologies.NodeJs,
        Technologies.Express,
        Technologies.NestJs,
        Technologies.Microservices,
        Technologies.RubyOnRails,
        Technologies.Go,
        Technologies.Gin,
        Technologies.GRPC,
        Technologies.REST,
      ],
      title: "Back-end",
    },
    {
      technologies: [
        Technologies.React,
        Technologies.Redux,
        Technologies.Webpack,
        Technologies.CSS3,
        Technologies.NextJs,
        Technologies.MetaMaskSDK,
        Technologies.EthersJs,
        Technologies.GraphQL,
        Technologies.ApolloClient,
      ],
      title: "Front-end",
    },
    {
      technologies: [
        Technologies.Scrum,
        Technologies.Adaptability,
        Technologies.Agile,
        Technologies.Leadership,
        Technologies.CriticalThinking,
        Technologies.TimeManagement,
      ],
      title: "Soft",
    },
  ],
  [
    {
      technologies: [
        Technologies.PostgreSQL,
        Technologies.MongoDB,
        Technologies.Redis,
        Technologies.Kafka,
        Technologies.Elasticsearch,
      ],
      title: "Databases",
    },
    {
      technologies: [
        Technologies.Jest,
        Technologies.Mocha,
        Technologies.Chai,
        Technologies.Cypress,
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
        Technologies.RabbitMQ,
        Technologies.Aptible,
        Technologies.Heroku,
        Technologies.Okteto,
        Technologies.Datadog,
      ],
      title: "DevOps",
    },
    {
      technologies: [
        Technologies.Ethereum,
        Technologies.EVM,
        Technologies.Hardhat,
      ],
      title: "Blockchain",
    },
  ],
];
