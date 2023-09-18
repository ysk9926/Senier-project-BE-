import { gql } from "apollo-server-express";

export default gql`
  type editLockResult {
    ok: Boolean!
    error: String
    whitenoise: UserWhiteNoise
  }

  type Mutation {
    editLock(whiteNoiseId: Int!): editLockResult!
  }
`;
