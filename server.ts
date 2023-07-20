require("dotenv").config();
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./schema";
import express from "express";
import { dynamicImport } from "tsimportlib";

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  const PORT = process.env.PORT;

  const app = express();

  const graphqlUploadExpressModule = await dynamicImport(
    "graphql-upload/graphqlUploadExpress.mjs",
    module
  );
  app.use(graphqlUploadExpressModule.default());

  server.start().then(() => {
    server.applyMiddleware({ app });
  });

  app.listen({ port: PORT }, () => {
    console.log(
      `서버가 http://localhost:${PORT}${server.graphqlPath} 여기서 작동되고 있습니다 `
    );
  });
}

startApolloServer();
