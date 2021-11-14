const resolvers = {
  Query: {
    sessions: (parent, args, { dataSources }, info) => {
      return dataSources.SessionApi.getSessions(args);
    },
    sessionById: (parent, { id }, { dataSources }, info) => {
      return dataSources.SessionApi.getSessionById(id);
    },
  },
};

module.exports = resolvers;
