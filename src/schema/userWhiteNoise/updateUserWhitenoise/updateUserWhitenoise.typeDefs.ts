import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    updateUserWhitenoise(whiteNoiseId: Int!): mutationResponse!
  }
`;
