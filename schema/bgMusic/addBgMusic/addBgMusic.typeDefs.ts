import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    addBgMusic(bgMusicName: String!, bgMusicURL: String!): mutationResponse!
  }
`;
