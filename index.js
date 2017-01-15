'use strict';

console.log('working server');

const mysql = require('mysql');
const app = require('express')();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '2017',
  database: 'hyf'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(error, results, fields) {
  if (error) throw error;
  console.log('MySQL connected');
});

app.get('', (request, response) => {
  response.status(200).json({ message: 'ok' });
});

app.get('/todos', (request, response) => {
  connection.query('SELECT * FROM todos', (error, data) => {
    if (error) {
      return response.status(500).json(error);
    }
    response.status(200).json({ status: 200, data: data });
  });
});

// Update the title where the id is 10
app.patch('/todos', (request, response) => {
  connection.query('UPDATE todos SET title="updated title", updatedAt = CURRENT_TIMESTAMP WHERE todoId=10', (error, data) => {
    if (error) {
      return response.status(500).json(error);
    }
    response.status(200).json({ status: 200, data: data });
    console.log('Title updated');
  });
});

const server = require('http').createServer(app);
server.listen(3000);

console.log(`server listening on port ${server.address().port}`)

console.log('I am a change');