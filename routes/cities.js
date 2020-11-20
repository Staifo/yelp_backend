const express = require ('express');
const mockCity = require('../mockCities')
// const client = require('./client');

const cityRouter = express.Router();

cityRouter.get('/', (req, res)=>{
    res.send(JSON.stringify(mockCity));
})

cityRouter.get('/:id', (req, res)=>{
    res.send('cityId')
})

module.exports = cityRouter;