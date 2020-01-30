const {Router} = require('express');
const auth = require('./src/Controllers/authController');
const todo = require('./src/Controllers/todoController')
const routes = Router();

routes.get('/addtask', todo.index);
routes.post('/addtask', todo.store);
//authentication
routes.post('/registration', auth.index);

module.exports = routes;