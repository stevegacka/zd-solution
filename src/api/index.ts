/**
 * Graph definitions and corresponding resolvers
 */

import { gql } from "graphql-tag";
import Db from "../db";

export const typeDefs = gql`
  type Author {
    id: ID!
    givenName: String!
    familyName: String!
    displayName: String!
  }

  type Query {
    authors: [Author!]!
  }
`;

export const resolvers = {
  Query: {
    authors: () => {
      // 🐞 Bug fix needed!
      // We're not returning what's in DB 😱
      // ✅ Solution 1
      return Db.listAuthors();
    },
  },
  Author: {
    displayName: (author) => {
      return [author.givenName, author.familyName].filter(Boolean).join(' ')
    },
  }
};
