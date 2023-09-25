import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    createAccount(
      username: String!
      password: String!
      userId: String!
    ): mutationResponse!
  }
`;
