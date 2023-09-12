import { gql } from "apollo-server-express";

export default gql`
  type loginResult {
    ok: Boolean!
    error: String
    token: String
  }
  type Mutation {
    login(userId: String!, password: String!): loginResult!
  }
`;
