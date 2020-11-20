const express = require ('express');
const restaurant = require('../mockRestaurant');
// const client = require('./client');

const restaurantRouter = express.Router();

restaurantRouter.get('/', (req, res)=>{
    res.send(JSON.stringify(restaurant));
})

restaurantRouter.get('/:id', (req, res)=>{
    res.send('restaurantId')
})

module.exports = restaurantRouter;