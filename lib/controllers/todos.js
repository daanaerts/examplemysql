'use strict';

const todosRouter = require('express').Router();
const connection = require('../database');

todosRouter.route('')
  .get((request, response) => {
    connection.query('SELECT * FROM todos', (error, data) => {
      if (error) {
        return response.status(500).json(error);
      }
      response.status(200).json({ status: 200, data: data });
    });
  })

  .post((request, response) => {
    connection.query('INSERT INTO todos SET ?', request.body, (err, result) => {
      if (err) {
        response.status(400).json({ status: 400 , message: "Bad request!"});
        return;
      }
      response.status(200).json({ message: 'Todo created!' });
    })
  });


todosRouter.route('/:id')
  .patch((request, response) => {
    connection.query('UPDATE todos SET ?, updated_at = CURRENT_TIMESTAMP WHERE todo_id = ?', [request.body, request.params.id], (error, data) => {
      if (error) {
        return response.status(500).json(error);
      }
      response.status(200).json({ status: 200, message: 'Todo updated!' });
    });
  })

  .get((request, response) => {
    connection.query('SELECT * FROM todos WHERE todo_id = ?', [request.params.id], (error, data) => {
      if (data[0] === undefined) {
        return response.status(404).json({ status: 404, error: "No such entry" });
      }
      response.status(200).json({ status: 200, data: data });
    });
  })

  .delete((request, response) => {
    connection.query('DELETE FROM todos WHERE todo_id = ?', [request.params.id], (error, data) => {
      if (error) {
        return response.status(500).json(error);
      }
      response.status(200).json({ status: 200, message: 'Todo deleted!' });
    });
  })

module.exports = todosRouter;