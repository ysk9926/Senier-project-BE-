import { gql } from "apollo-server-express";

export default gql`
  type Memo {
    id: Int!
    content: String!
    userId: Int!
    user: User!
  }
`;
