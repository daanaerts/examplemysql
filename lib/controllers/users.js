'use strict';

const usersRouter = require('express').Router();
const connection = require('../database');

usersRouter.get('', (request, response) => {
  connection.query('SELECT * FROM users', (error, data) => {
    if (error) {
      return response.status(500).json(error);
    }
    response.status(200).json({ status: 200, data: data });
  });
});



usersRouter.get('/:id', (request, response) => {
  connection.query('SELECT * FROM users WHERE user_id = ?', [request.params.id], (error, data) => {
    if (data[0] === undefined) {
      return response.status(404).json({ status: 404, error: "No such entry" });
    }
    response.status(200).json({ status: 200, data: data });
  });
});

usersRouter.delete('/:id', (request, response) => {
  connection.query('DELETE FROM users WHERE user_id = ?', [request.params.id], (error, data) => {
    if (data.affectedRows === 0) {
      return response.status(204).json({ status: 204, error: "No such ID, nothing changed!" });
    }
    response.status(200).json({message: 'The user with ID no ' + [request.params.id] + ' has been deleted.', status: 200, data: data});
  });
});

module.exports = usersRouter;
