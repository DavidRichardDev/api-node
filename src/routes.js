const express = require('express');
const routes = express.Router();

const BotController = require('./controllers/BotController');


routes.get('/bots', BotController.index);
routes.get('/bots/:id', BotController.show);
routes.post('/bots', BotController.store);
routes.put('/bots/:id', BotController.update);
routes.delete('/bots/:id', BotController.destroy);

module.exports = routes;