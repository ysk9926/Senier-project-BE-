import { gql } from "apollo-server-express";

export default gql`
  scalar Upload
  type Mutation {
    editBgMusic(
      id: Int!
      bgMusicName: String
      bgMusicURL: Upload
    ): mutationResponse!
  }
`;
