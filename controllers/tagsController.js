const express = require ('express')
const client = require('../client');

const tagsController = {
    getAll: (req, res, next) => {
      client
          .query(`SELECT *
          FROM "tag"`)
          .then((data) => {
              return res.json(data.rows);
          })
          .catch((e) => console.log(e));
    },
    getById: (req, res, next) => {
        const { id } = req.params;
        client
          .query(`SELECT *
          FROM "tag" WHERE id=${id}`)
          .then((data) => {
              return res.json(data.rows);
          })
          .catch((e) => console.log(e));
    },
};

module.exports = tagsController;
