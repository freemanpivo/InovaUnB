const connection = require('../database/connection');

module.exports = {
  async create(request, response) {
    const { title, description } = request.body;

    const [id] = await connection('projects').insert({ title, description });
    return response.json({ id });
  },

  async list(request, response) {
    const projects = await connection('projects').select();
    return response.json(projects);
  }
};
