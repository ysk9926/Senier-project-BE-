import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    editProfile(
      username: String
      password: String
      avatar: String
    ): mutationResponse!
  }
`;
