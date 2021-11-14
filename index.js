const { ApolloServer } = require("apollo-server");
const typeDefs = require("./data-access/typedefs");
const resolvers = require("./data-access/resolvers");


const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: process.env.port || 4000 }).then(({ url }) => {
  console.log(`gql running at ${url}`);
});
