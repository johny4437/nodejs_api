const {Router} = require('express');
const auth = require('./src/Controllers/authController');
const todo = require('./src/Controllers/todoController')
const project =  require('./src/Controllers/projectController');
const authMiddleware  = require('./src/Middlewares/auth');
const routes = Router();


routes.get('/addtask', todo.index);
routes.post('/addtask', todo.store);
//authentication
routes.get('/users/:id', auth.getUsersById);
routes.get('/users/', auth.getUsers);
routes.post('/registration', auth.index);
routes.post('/login', auth.store);
routes.post('/forgot_password',auth.forgotPassword);

// middleware
routes.use(authMiddleware);
routes.get('/', project.index);
routes.post('/projects', project.store);


module.exports = routes;