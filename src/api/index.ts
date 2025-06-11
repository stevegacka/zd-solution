/**
 * Graph definitions and corresponding resolvers
 */

import { gql } from "graphql-tag";
import Db from "../db";
import Countries from "../lib/Countries";

export const typeDefs = gql`
  type Author {
    id: ID!
    givenName: String!
    familyName: String!
    displayName: String!
    countryCode: String
    countryName: String
    possessivePronoun: String
    objectivePronoun: String
    subjectivePronoun: String
  }

  type Query {
    authors: [Author!]!
    author(id: ID!): Author
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
    author: (_, { id }) => {
      return Db.findAuthorById(id)
    }
  },
  Author: {
    displayName: (author) => {
      let displayName = null;

      switch (author.countryCode) {
        case 'JP':
          displayName = [author.familyName, author.givenName].filter(Boolean).join(' ')
          break;
        default:
          displayName = [author.givenName, author.familyName].filter(Boolean).join(' ')
          break;
      }

      return displayName;
    },
    countryName: async (author) => {
      if (author.countryCode) {
        const countriesApi = new Countries()
        const country = await countriesApi.searchByCountryCode(author.countryCode);
        if (country) {
          return country.name?.common;
        }
      }

      return null
    }
  }
};
