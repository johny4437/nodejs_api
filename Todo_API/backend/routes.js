const {Router} = require('express');
const auth = require('./src/Controllers/authController');
const todo = require('./src/Controllers/todoController')
const project =  require('./src/Controllers/projectController');
const routes = Router();
const passport = require('passport');

routes.get('/addtask', todo.index);
routes.post('/addtask', todo.store);
//authentication
routes.get('/users/:id', auth.getUsersById);
routes.get('/users/', auth.getUsers);
routes.post('/registration', auth.index);
routes.post('/pass', auth.store);

// middleware

routes.get('/midd', project.index);

module.exports = routes;