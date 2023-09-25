import { gql } from "apollo-server-express";

export default gql`
  type Inquiry {
    id: Int!
    user: User!
    userID: Int!
    title: String!
    contents: String!
    answer: String
    isClosed: Boolean!
  }
`;
