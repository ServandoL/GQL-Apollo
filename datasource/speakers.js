// wire up the REST datasource into the application
// need speakers app to be running
const { RESTDataSource } = require("apollo-datasource-rest");

class SpeakerApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3000/speakers";
  }

  async getSpeakerbyId(id) {
    const data = await this.get(`/${id}`);
    return data;
  }

  async getSpeakers() {
    const data = await this.get("/");
    return data;
  }
}

module.exports = SpeakerApi;