const createServer = require("./createServer");

const server = createServer();

server.start(
  {
    cors: {
      credentials: true,
      origin: "https://us1.prisma.sh/joao-paulo/graphql-app/dev"
    }
  },
  deets => {
    console.log(`Server is now running on port http://localhost:4000`);
  }
);
