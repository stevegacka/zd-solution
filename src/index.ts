/**
 * Basic Apollo Server configuration
 * Check out https://www.apollographql.com/docs/apollo-server/getting-started/ for more info
 */

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
/**
 * Our GraphQL API definitions and resolvers
 */
import { typeDefs, resolvers } from "./api";

/**
 * Initialize database
 */
import "./db";

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server);

  console.log(`🚀  Server ready at ${url}`);
}

startApolloServer();