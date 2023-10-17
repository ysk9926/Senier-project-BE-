import { gql } from "apollo-server-express";

export default gql`
  scalar Upload
  type Mutation {
    createWhitenoise(
      whitenoiseName: String!
      whitenoiseURL: Upload
      requirePoints: Int
    ): mutationResponse!
  }
`;
