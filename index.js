'use strict';

console.log('working server');

const mysql = require('mysql');
const app = require('express')();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'my-secret-pw',
  database: 'exampleeeee'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(error, results, fields) {
  if (error) throw error;
  console.log('MySQL connected');
});

app.get('/todos', (request, response) => {
  connection.query('SELECT * FROM todos', (error, data) => {
    if (error) {
      return response.status(500).json(error);
    }
    response.status(200).json({ status: 200, data: data });
  });
});

app.get('/todos/:id',(request, response)=> {
  connection.query('SELECT * FROM todos WHERE todoId = ?', [request.params.id], (error, data) => {
    if (data[0] === undefined) {
      return response.status(404).json({status: 404, data: error});
    }
    response.status(200).json({status: 200, data: data});
  });
});

const server = require('http').createServer(app);
server.listen(3000);

console.log(`server listening on port ${server.address().port}`)

console.log('I am a change');
