const express = require ('express');
const mockTags = require('../mockTags');
const tagsController = require ('../controllers/tagsController')
const client = require('../client');

const tagRouter = express.Router();

tagRouter.get('/', tagsController.getAll)

tagRouter.get('/:id', tagsController.getById)

module.exports = tagRouter;