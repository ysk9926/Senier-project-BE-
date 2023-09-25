import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    answerInquiry(
      id: Int!
      answer: String!
      isClosed: Boolean
    ): mutationResponse!
  }
`;
