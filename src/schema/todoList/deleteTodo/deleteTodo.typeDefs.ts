import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    deleteTodo(id: Int!): mutationResponse!
  }
`;
