const resolvers = {
  Query: {
    sessions: (parent, args, { dataSources }, info) => {
      return dataSources.SessionApi.getSessions(args);
    },
    sessionById: (parent, { id }, { dataSources }, info) => {
      return dataSources.SessionApi.getSessionById(id);
    },
    speakers: (parent, args, { dataSources }, info) => {
        return dataSources.speakersApi.getSpeakers();
    },
    speakerByID: (parent, {id}, {dataSources}, info) => {
        return dataSources.speakersApi.getSpeakerById(id);
    }
  },
};

module.exports = resolvers;
