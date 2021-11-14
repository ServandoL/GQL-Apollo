const _ = require("lodash");

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
    speakerById: (parent, { id }, { dataSources }, info) => {
      return dataSources.speakerApi.getSpeakerById(id);
    },
  },
  Session: {
    async speakers(session, args, { dataSources }) {
      const speakers = await dataSources.speakerApi.getSpeakers();
      const returns = speakers.filter((speaker) => {
        return _.filter(session.speakers, { id: speaker.id }).length > 0;
      });
      return returns;

    },
  },
};

module.exports = resolvers;
