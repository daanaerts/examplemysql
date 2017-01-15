'use strict';

console.log('working server');

const mysql = require('mysql');
const app = require('express')();
const bodyParser = require('body-parser');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'my-secret-pw',
  database: 'exampleeeee'
});

connection.connect();

// use bodyParser 
app.use(bodyParser.json());

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
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


app.post('/todo', (request, response) => {
  connection.query('insert into todos set ?', request.body, (err) => {
    if (err) {
      response.status(400);
      return;
    }
    response.status(201).json({ status: 201 });
  })
})

const server = require('http').createServer(app);
server.listen(3000);

console.log(`server listening on port ${server.address().port}`)

console.log('I am a change');