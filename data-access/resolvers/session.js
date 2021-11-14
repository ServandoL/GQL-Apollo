const _ = "lodash";

const Session = {
  async speakers(session, args, { dataSources }) {
    const speakers = await dataSources.speakerApi.getSpeakers();
    const returns = speakers.filter((speaker) => {
      return _.filter(session.speakers, { id: speaker.id }).length > 0;
    });
    return returns;
  }
};

module.exports = Session;
