import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    addMemo(content: String!): mutationResponse!
  }
`;
