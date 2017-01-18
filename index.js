'use strict';

console.log('working server');

const app = require('express')();
require('./lib/controllers')(app);

const server = require('http').createServer(app);
server.listen(3001);

console.log(`server listening on port ${server.address().port}`)