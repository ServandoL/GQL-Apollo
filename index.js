const { ApolloServer } = require("apollo-server");
const typeDefs = require("./data-access/schema");
const resolvers = require("./data-access/resolvers");
const SessionApi = require("./datasource/sessions");
const SpeakerApi = require("./datasource/speakers");

const dataSources = () => ({
  sessionApi: new SessionApi(),
  speakerApi: new SpeakerApi()
});

const server = new ApolloServer({ typeDefs, resolvers, dataSources });

server.listen({ port: process.env.port || 4000 }).then(({ url }) => {
  console.log(`gql running at ${url}`);
});
