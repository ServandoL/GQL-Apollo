const sessions = require("../data/sessions.json");

const resolvers = {
    Query: {
        sessions: (parent, args, {dataSources}, info) => {
            return dataSources.SessionApi.getSessions();
        }
    }
}

module.exports = resolvers;