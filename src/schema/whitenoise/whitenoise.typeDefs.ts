import { gql } from "apollo-server-express";

export default gql`
  type WhiteNoise {
    id: Int!
    whitenoiseName: String!
    whitenoiseURL: String!
    backgroundImgURL: String!
    requirePoints: Int
  }
`;
