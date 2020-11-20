const express = require ('express');
const restaurant = require('../mockRestaurant');
const restaurantsController = require ('../controllers/restaurantsController')
const client = require('../client');

const restaurantRouter = express.Router();

restaurantRouter.get('/', restaurantsController.getAll);

restaurantRouter.get('/:id', restaurantsController.getById);

module.exports = restaurantRouter;