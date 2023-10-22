import { gql } from "apollo-server-express";

export default gql`
  scalar Upload
  type Mutation {
    editWhitenoise(
      id: Int!
      whitenoiseName: String
      whitenoiseURL: Upload
      backgroundImgURL: Upload
      requirePoints: Int
    ): mutationResponse!
  }
`;
