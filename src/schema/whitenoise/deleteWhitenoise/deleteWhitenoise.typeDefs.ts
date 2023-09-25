import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    deleteWhitenoise(id: Int!): mutationResponse!
  }
`;
