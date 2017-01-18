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

todosRouter.patch('', (request, response) => {
  response.status(200).json({message:'patched'});
});

todosRouter.get('/:id',(request, response)=> {
  connection.query('SELECT * FROM todos WHERE todoId = ?', [request.params.id], (error,data) => {
    if (data[0] === undefined) {
      return response.status(404).json({status: 404, error: "No such entry"});
    }
    response.status(200).json({status: 200, data: data});
  });
});

module.exports = todosRouter;
