import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    editBgMusic(
      id: Int!
      bgMusicName: String
      bgMusicURL: String
    ): mutationResponse!
  }
`;
