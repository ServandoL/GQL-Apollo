const sessions = require("../data/sessions.json");
const { DataSource } = require("apollo-datasource");

class SessionApi extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {}

  getSessions() {
    return sessions;
  }
}

module.exports = SessionApi;
