const express = require ('express');
const mockCity = require('../mockCities')
const client = require('../client');
const cityController = require ('../controllers/citiesController')

const cityRouter = express.Router();

cityRouter.get('/', cityController.getAll)

cityRouter.get('/:id', cityController.getById )

module.exports = cityRouter;