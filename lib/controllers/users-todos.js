'use strict';

const userstodosRouter = require('express').Router();
const connection = require('../database');

userstodosRouter.route('')
  .get((request, response) => {
    connection.query('SELECT users.first_name, todos.title FROM users JOIN users_todos ON users.user_id = users_todos.user JOIN todos ON users_todos.todo = todos.todo_id;', (error, data) => {
      if (error) {
        return response.status(500).json(error);
      }
      response.status(200).json({ status: 200, data: data });
    });
  });

userstodosRouter.route('/:id')
  .get((request, response) => {
    connection.query('SELECT users.first_name, todos.title FROM users JOIN users_todos ON users.user_id = users_todos.user JOIN todos ON users_todos.todo = todos.todo_id WHERE users.user_id = ?;',[request.params.id] , (error, data) => {
      if (error) {
        return response.status(500).json(error);
      }
      response.status(200).json({ status: 200, data: data });
    });
  });
  module.exports = userstodosRouter;