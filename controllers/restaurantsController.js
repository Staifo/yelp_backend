const express = require ('express')
const client = require('../client');

const restaurantsController = {
    getAll: (req, res, next) => {
      client
          .query(`SELECT *
          FROM "restaurants"`)
          .then((data) => {
              return res.json(data.rows);
          })
          .catch((e) => console.log(e));
    },
    getById: (req, res, next) => {
        const { id } = req.params;
        client
          .query(`SELECT *
          FROM "restaurants" WHERE id=${id}`)
          .then((data) => {
              return res.json(data.rows);
          })
          .catch((e) => console.log(e));
    },
};

module.exports = restaurantsController;
