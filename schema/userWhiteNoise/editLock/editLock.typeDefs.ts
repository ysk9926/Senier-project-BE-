import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    editLock(whiteNoiseId: Int!): mutationResponse!
  }
`;
