const createServer = require("./createServer");

const server = createServer();

server.start(
  {
    cors: {
      credentials: false,
      origin: "http://localhost:3000"
    }
  },
  deets => {
    console.log(`Server is now running on port http://localhost:4000`);
  }
);
