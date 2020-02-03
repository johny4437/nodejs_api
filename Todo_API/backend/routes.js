const {Router} = require('express');
const auth = require('./src/Controllers/authController');
const todo = require('./src/Controllers/todoController')
const routes = Router();
const passport = require('passport');

routes.get('/addtask', todo.index);
routes.post('/addtask', todo.store);
//authentication
routes.get('/users/:id', auth.getUsersById);
routes.get('/users/', auth.getUsers);
routes.post('/registration', auth.index);
routes.post('/pass', auth.store);

module.exports = routes;