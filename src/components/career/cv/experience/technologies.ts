export enum Technologies {
  // Programming Languages
  TypeScript = "TypeScript",
  JavaScript = "JavaScript",
  Ruby = "Ruby",
  Go = "Go",
  Solidity = "Solidity",
  HTML5 = "HTML5",
  SQL = "SQL",
  GraphQL = "GraphQL",
  Rust = "Rust",

  // Front-end
  React = "React",
  Redux = "Redux",
  ReduxSaga = "Redux Saga",
  Svelte = "Svelte",
  Angular2 = "Angular 2",
  Webpack = "Webpack",
  NextJs = "Next.js",
  MetaMaskSDK = "MetaMask SDK",
  EthersJs = "Ethers.js",
  CSS3 = "CSS3",
  StyledComponents = "Styled Components",
  Tailwind = "Tailwind",
  MaterialUI = "Material UI",
  ApolloClient = "Apollo Client",
  TwitterFlight = "Twitter Flight",
  Jquery = "Jquery",
  VSCodeAPI = "VSCode API",
  Zustand = "Zustand",

  // Back-end
  NodeJs = "Node.js",
  Express = "Express",
  NestJs = "Nest.js",
  LoopBack3 = "LoopBack 3",
  LoopBack4 = "LoopBack 4",
  RubyOnRails = "Ruby on Rails",
  Gin = "Gin",
  SocketIO = "Socket.io",
  Microservices = "Microservices",
  DesignPatterns = "Design Patterns",

  // ORM
  Mongoose = "Mongoose",
  Prizma = "Prizma",
  Typeorm = "Typeorm",
  Sequelize = "Sequelize",

  // Databases
  PostgreSQL = "PostgreSQL",
  MongoDB = "MongoDB",
  Redis = "Redis",
  // Elasticsearch = "Elasticsearch",
  Kafka = "Kafka",
  RabbitMQ = "RabbitMQ",

  // Testing
  Jest = "Jest",
  Mocha = "Mocha",
  Chai = "Chai",
  Supertest = "Supertest",
  Enzyme = "Enzyme",
  Cypress = "Cypress",
  Protractor = "Protractor",

  // DevOps
  Docker = "Docker",
  DockerCompose = "Docker Compose",
  Kubernetes = "Kubernetes",
  AWS = "AWS",
  GithubActions = "Github actions",
  Aptible = "Aptible",
  Okteto = "Okteto",
  Datadog = "Datadog",
  Debezium = "Debezium",
  Heroku = "Heroku",

  // Infra
  Promtail = "Promtail",
  Loki = "Loki",
  Tempo = "Tempo",
  Prometheus = "Prometheus",
  Grafana = "Grafana",
  PostgresExporter = "Postgres Exporter",
  NodeExporter = "Node Exporter",
  Caddy = "Caddy",

  // Blockchain
  Ethereum = "Ethereum",
  EVM = "EVM",
  Hardhat = "Hardhat",

  // 3rd-Party Integrations
  StripeAPI = "Stripe Api",
  EtsyAPI = "Etsy API",
  ShopifyAPI = "Shopify API",
  MagentoAPI = "Magento API",

  // Soft Skills
  Scrum = "Scrum",
  Adaptability = "Adaptability",
  Agile = "Agile",
  Leadership = "Leadership",
  CriticalThinking = "Critical Thinking",
  TimeManagement = "Time Management",

  // Principles
  SOLID = "SOLID",
  DRY = "DRY",
  KISS = "KISS",
  TDD = "TDD",
  YAGNI = "YAGNI",

  // Protocols
  Websockets = "Websockets",
  FHIR = "FHIR",
  GRPC = "gRPC",
  REST = "REST",

  // AI
  Ollama = "Ollama",
}

export enum TechType {
  ProgrammingLanguages = "Programming Languages",
  FrontEnd = "Front-end",
  BackEnd = "Back-end",
  Databases = "Databases",
  Testing = "Testing",
  DevOps = "DevOps",
  Infra = "Infra",
  Blockchain = "Blockchain",
  ThirdPartyIntegrations = "3rd-Party Integrations",
  SoftSkills = "Soft Skills",
  Protocols = "Protocols",
  Principles = "Principle",
  AI = "AI",
}

export const technologyToType: { [key in Technologies]: TechType } = {
  // Programming Languages
  [Technologies.TypeScript]: TechType.ProgrammingLanguages,
  [Technologies.JavaScript]: TechType.ProgrammingLanguages,
  [Technologies.Ruby]: TechType.ProgrammingLanguages,
  [Technologies.Go]: TechType.ProgrammingLanguages,
  [Technologies.Solidity]: TechType.ProgrammingLanguages,
  [Technologies.HTML5]: TechType.ProgrammingLanguages,
  [Technologies.SQL]: TechType.ProgrammingLanguages,
  [Technologies.GraphQL]: TechType.ProgrammingLanguages,
  [Technologies.Rust]: TechType.ProgrammingLanguages,

  // Front-end
  [Technologies.React]: TechType.FrontEnd,
  [Technologies.Redux]: TechType.FrontEnd,
  [Technologies.ReduxSaga]: TechType.FrontEnd,
  [Technologies.Svelte]: TechType.FrontEnd,
  [Technologies.Angular2]: TechType.FrontEnd,
  [Technologies.Webpack]: TechType.FrontEnd,
  [Technologies.NextJs]: TechType.FrontEnd,
  [Technologies.MetaMaskSDK]: TechType.FrontEnd,
  [Technologies.EthersJs]: TechType.FrontEnd,
  [Technologies.CSS3]: TechType.FrontEnd,
  [Technologies.StyledComponents]: TechType.FrontEnd,
  [Technologies.Tailwind]: TechType.FrontEnd,
  [Technologies.MaterialUI]: TechType.FrontEnd,
  [Technologies.ApolloClient]: TechType.FrontEnd,
  [Technologies.TwitterFlight]: TechType.FrontEnd,
  [Technologies.Jquery]: TechType.FrontEnd,
  [Technologies.VSCodeAPI]: TechType.FrontEnd,
  [Technologies.Zustand]: TechType.FrontEnd,

  // Back-end
  [Technologies.NodeJs]: TechType.BackEnd,
  [Technologies.Express]: TechType.BackEnd,
  [Technologies.NestJs]: TechType.BackEnd,
  [Technologies.LoopBack3]: TechType.BackEnd,
  [Technologies.LoopBack4]: TechType.BackEnd,
  [Technologies.RubyOnRails]: TechType.BackEnd,
  [Technologies.Gin]: TechType.BackEnd,
  [Technologies.SocketIO]: TechType.BackEnd,
  [Technologies.Microservices]: TechType.BackEnd,
  [Technologies.Sequelize]: TechType.BackEnd,
  [Technologies.Typeorm]: TechType.BackEnd,
  [Technologies.Prizma]: TechType.BackEnd,
  [Technologies.DesignPatterns]: TechType.BackEnd,
  [Technologies.Mongoose]: TechType.BackEnd,

  // Databases
  [Technologies.PostgreSQL]: TechType.Databases,
  [Technologies.MongoDB]: TechType.Databases,
  [Technologies.Redis]: TechType.Databases,
  // [Technologies.Elasticsearch]: TechType.Databases,
  [Technologies.Kafka]: TechType.Databases,
  [Technologies.RabbitMQ]: TechType.Databases,

  // Testing
  [Technologies.Jest]: TechType.Testing,
  [Technologies.Enzyme]: TechType.Testing,
  [Technologies.Mocha]: TechType.Testing,
  [Technologies.Chai]: TechType.Testing,
  [Technologies.Supertest]: TechType.Testing,
  [Technologies.Cypress]: TechType.Testing,
  [Technologies.Protractor]: TechType.Testing,

  // DevOps
  [Technologies.Docker]: TechType.DevOps,
  [Technologies.Kubernetes]: TechType.DevOps,
  [Technologies.AWS]: TechType.DevOps,
  [Technologies.GithubActions]: TechType.DevOps,
  [Technologies.Aptible]: TechType.DevOps,
  [Technologies.Okteto]: TechType.DevOps,
  [Technologies.Datadog]: TechType.DevOps,
  [Technologies.Debezium]: TechType.DevOps,
  [Technologies.Heroku]: TechType.DevOps,
  [Technologies.DockerCompose]: TechType.DevOps,

  // Blockchain
  [Technologies.Ethereum]: TechType.Blockchain,
  [Technologies.EVM]: TechType.Blockchain,
  [Technologies.Hardhat]: TechType.Blockchain,

  // 3rd-Party Integrations
  [Technologies.StripeAPI]: TechType.ThirdPartyIntegrations,
  [Technologies.EtsyAPI]: TechType.ThirdPartyIntegrations,
  [Technologies.ShopifyAPI]: TechType.ThirdPartyIntegrations,
  [Technologies.MagentoAPI]: TechType.ThirdPartyIntegrations,

  // Soft Skills
  [Technologies.Scrum]: TechType.SoftSkills,
  [Technologies.Adaptability]: TechType.SoftSkills,
  [Technologies.Agile]: TechType.SoftSkills,
  [Technologies.Leadership]: TechType.SoftSkills,
  [Technologies.CriticalThinking]: TechType.SoftSkills,
  [Technologies.TimeManagement]: TechType.SoftSkills,

  // Protocols
  [Technologies.Websockets]: TechType.Protocols,
  [Technologies.FHIR]: TechType.Protocols,
  [Technologies.GRPC]: TechType.Protocols,
  [Technologies.REST]: TechType.Protocols,

  // Principles
  [Technologies.SOLID]: TechType.Principles,
  [Technologies.DRY]: TechType.Principles,
  [Technologies.KISS]: TechType.Principles,
  [Technologies.TDD]: TechType.Principles,
  [Technologies.YAGNI]: TechType.Principles,

  // Infra
  [Technologies.Caddy]: TechType.Infra,
  [Technologies.Prometheus]: TechType.Infra,
  [Technologies.Promtail]: TechType.Infra,
  [Technologies.Loki]: TechType.Infra,
  [Technologies.Grafana]: TechType.Infra,
  [Technologies.PostgresExporter]: TechType.Infra,
  [Technologies.NodeExporter]: TechType.Infra,
  [Technologies.Tempo]: TechType.Infra,

  // AI
  [Technologies.Ollama]: TechType.AI,
};
