const sessions = require("../data/sessions.json");

const resolvers = {
    Query: {
        sessions: () => {
            return sessions;
        }
    }
}

module.exports = resolvers;