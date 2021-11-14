const resolvers = {
  Query: {
    sessions: (parent, args, { dataSources }, info) => {
      return dataSources.sessionApi.getSessions(args);
    },
    sessionById: (parent, { id }, { dataSources }, info) => {
      return dataSources.sessionApi.getSessionById(id);
    },
    speakers: (parent, args, { dataSources }, info) => {
        return dataSources.speakerApi.getSpeakers();
    },
    speakerById: (parent, {id}, {dataSources}, info) => {
        return dataSources.speakerApi.getSpeakerById(id);
    }
  },
};

module.exports = resolvers;
