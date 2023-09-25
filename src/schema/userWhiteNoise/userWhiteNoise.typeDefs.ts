import { gql } from "apollo-server-express";

export default gql`
  type UserWhiteNoise {
    id: Int!
    user: User!
    whiteNoise: WhiteNoise!
    isLocked: Boolean!
  }
`;
