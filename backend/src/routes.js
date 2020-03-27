const express = require('express');

const routes = express.Router();

const ProjectController = require('./controllers/ProjectController');

routes.post('/projects', ProjectController.create);
routes.get('/projects', ProjectController.list);

module.exports = routes;
