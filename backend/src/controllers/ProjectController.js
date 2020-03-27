const connection = require('../database/connection');
const { esclient } = require('../elastic');

module.exports = {
  async create(request, response) {
    const { title, description } = request.body;

    let id;
    try {
      [id] = await connection('projects').insert({ title, description });

      const result = await esclient.index({
        index: 'inovaunb',
        id: id.toString(),
        type: 'projects',
        body: {
          title: title,
          description: description
        }
      });

      console.log(result);
    } catch (err) {
      await connection('projects')
        .where('id', id)
        .delete();

      return response
        .status(500)
        .json({ error: 'Error trying to index project of ES.' });
    }

    return response.json({ id });
  },

  async list(request, response) {
    const projects = await connection('projects').select();
    return response.json(projects);
  }
};
