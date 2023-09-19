import { gql } from "apollo-server-express";

export default gql`
  type Todo {
    id: Int!
    status: Boolean!
    content: String!
    userId: Int!
    user: User!
  }
`;
