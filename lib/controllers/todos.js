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

todosRouter.post('', (request, response) => {
        connection.query('insert into todos set ?', request.body, (err, result) => {
                if(err){
                  response.status(400).json({status: 400});
                  return;
                }
                response.status(201).json({message: 'todo created!!'});
    })
});

module.exports = todosRouter;
