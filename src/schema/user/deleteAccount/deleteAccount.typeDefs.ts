import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    deleteAccount(userId: String!): mutationResponse!
  }
`;
