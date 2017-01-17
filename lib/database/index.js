'use strict';

const mysql = require('mysql');
const config = require('./config');

const connection = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(error, results, fields) {
  if (error) throw error;
  console.log('MySQL connected');
});

module.exports = connection;