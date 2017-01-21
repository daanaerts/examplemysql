'use strict';

console.log('working server');
const bodyParser = require('body-parser');
const app = require('express')();

// use bodyParser 
app.use(bodyParser.json());
require('./lib/controllers')(app);

const server = require('http').createServer(app);
server.listen(3000);

console.log(`server listening on port ${server.address().port}`)