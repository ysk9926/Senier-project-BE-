import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";

const loadTypes = loadFilesSync(`${__dirname}/schema/**/*.typeDefs.{js,ts}`);
const loadResolvers = loadFilesSync(
  `${__dirname}/schema/**/*.resolvers.{js,ts}`
);

export const typeDefs = mergeTypeDefs(loadTypes);
export const resolvers = mergeResolvers(loadResolvers);
