const express = require ('express')
const client = require('../client');

const cityController = {
    getAll: (req, res, next) => {
      client
          .query(`SELECT *
          FROM "cities"`)
          .then((data) => {
              return res.json(data.rows);
          })
          .catch((e) => console.log(e));
    },
    getById: (req, res, next) => {
        const { id } = req.params;
        client
          .query(`SELECT *
          FROM "cities" WHERE id=${id}`)
          .then((data) => {
              return res.json(data.rows);
          })
          .catch((e) => console.log(e));
    },
};

module.exports = cityController;
