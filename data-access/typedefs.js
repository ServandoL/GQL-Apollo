const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    sessions: [Session],
    sessionById(id: ID): Session
  }

  type Session {
    id: ID!
    title: String!
    description: String
    startsAt: String
    endsAt: String
    room: String
    day: String
    format: String
    track: String @deprecated(reason: "Too many sessions do not fit in a single track, we will be migrating to a tags-based system in the future.")
    level: String
  }
`;

module.exports = typeDefs;