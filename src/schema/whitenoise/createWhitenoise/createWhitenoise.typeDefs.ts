import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    createWhitenoise(
      whitenoiseName: String!
      whitenoiseURL: String!
      requirePoints: Int
    ): mutationResponse!
  }
`;
