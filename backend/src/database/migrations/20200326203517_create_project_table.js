exports.up = function(knex) {
  return knex.schema.createTable('projects', table => {
    table.increments('id');
    table.string('title');
    table.string('description');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('projects');
};
