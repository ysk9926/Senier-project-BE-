import { gql } from "apollo-server-express";

export default gql`
  type Todo {
    id: Int!
    status: String!
    content: String!
    user: User
    userid: String!
  }
`;
