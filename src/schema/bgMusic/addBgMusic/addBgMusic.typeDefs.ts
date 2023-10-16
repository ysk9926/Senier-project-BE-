import { gql } from "apollo-server-express";

export default gql`
  scalar Upload
  type Mutation {
    addBgMusic(bgMusicName: String!, bgMusicURL: Upload): mutationResponse!
  }
`;
