import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    createInquiry(title: String!, contents: String!): mutationResponse!
  }
`;
