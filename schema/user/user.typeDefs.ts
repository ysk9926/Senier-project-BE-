import { gql } from "apollo-server-express";

export default gql`
  type User {
    id: Int!
    username: String!
    password: String!
    userId: String!
    todos: [Todo]
  }
`;
