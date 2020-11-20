const express = require ('express');
const mockTags = require('../mockTags');
// const client = require('./client');

const tagRouter = express.Router();

tagRouter.get('/', (req, res)=>{
    res.send(JSON.stringify(mockTags));
})

tagRouter.get('/:id', (req, res)=>{
    res.send('tagId')
})

module.exports = tagRouter;