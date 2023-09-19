import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    editWhitenoise(
      id: Int!
      whitenoiseName: String
      whitenoiseURL: String
    ): mutationResponse!
  }
`;
