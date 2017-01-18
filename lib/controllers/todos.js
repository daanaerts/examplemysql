'use strict';

const todosRouter = require('express').Router();
const connection = require('../database');

todosRouter.get('', (request, response) => {
  connection.query('SELECT * FROM todos', (error, data) => {
    if (error) {
      return response.status(500).json(error);
    }
    response.status(200).json({ status: 200, data: data });
  });
});

todosRouter.patch('/:id/:title', (request, response) => {
  connection.query('UPDATE todos SET title= ?, updatedAt = CURRENT_TIMESTAMP WHERE todo_id = ?', [request.params.title, request.params.id], (error, data) => {
    if (error) {
      return response.status(500).json(error);
    }
    response.status(200).json({ status: 200, data: data });
  });
});

todosRouter.get('/:id', (request, response) => {
  connection.query('SELECT * FROM todos WHERE todo_id = ?', [request.params.id], (error, data) => {
    if (data[0] === undefined) {
      return response.status(404).json({ status: 404, error: "No such entry" });
    }
    response.status(200).json({ status: 200, data: data });
  });
});

module.exports = todosRouter;
