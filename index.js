const { ApolloServer, gql } = require('apollo-server');

// Sample GraphQL schema
const typeDefs = gql`
  type Query {
    hello: String
  },
  type Query {
    hi: String
  },
  type Query {
    welcome: String
  }
`;

// Resolvers for the schema
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
  Query: {
    hi: () => 'hi world!',
  },
  Query: {
    welcome: () => 'Welcome world!',
  },
};

// Create Apollo Server instance
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});