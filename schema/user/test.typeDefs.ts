import { gql } from "apollo-server-express";

export default gql`
  type Query {
    test(username: String): User
  }
`;