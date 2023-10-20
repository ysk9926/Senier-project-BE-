import { gql } from "apollo-server-express";

export default gql`
  scalar Upload
  type Mutation {
    editProfile(
      userId: String
      username: String
      password: String
      avatar: Upload
    ): mutationResponse!
  }
`;
