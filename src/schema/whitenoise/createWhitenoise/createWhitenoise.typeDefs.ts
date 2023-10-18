import { gql } from "apollo-server-express";

export default gql`
  type createWhitenoiseResponse {
    ok: Boolean!
    error: String
    id: Int
  }
  scalar Upload
  type Mutation {
    createWhitenoise(
      whitenoiseName: String!
      whitenoiseURL: Upload
      requirePoints: Int
    ): createWhitenoiseResponse!
  }
`;
