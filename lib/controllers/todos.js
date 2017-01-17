'use strict';

const todosRouter = require('express').Router();
const connection = require('../database');

todosRouter.get('', (request, response) => {
  connection.query('SELECT * FROM todos', (error, data) => {
    if (error) {
      return response.status(500).json(error);
    }
    if(data[0]){
    response.status(200).json({ status: 200, data: data });
    }else{
      response.status(204).json({message: 'No content..'})
    }
  });
});

todosRouter.patch('', (request, response) => {
  response.status(200).json({message:'patched'});
});

module.exports = todosRouter;
