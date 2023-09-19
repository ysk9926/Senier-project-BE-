import { gql } from "apollo-server-express";

export default gql`
  type BackgroundMusic {
    id: Int!
    bgMusicName: String!
    bgMusicURL: String
  }
`;
