import { gql } from "apollo-server-express";

export default gql`
  type WhiteNoise {
    id: Int!
    whitenoiseName: String!
    whitenoiseURL: String!
    user: [User]
    isLocked: Boolean!
    userId: Int
  }
`;