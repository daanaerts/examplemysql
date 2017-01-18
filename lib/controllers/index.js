'use strict';

module.exports = function(app) {

  app.get('', (request, response) => {
    response.status(200).json({ message: 'API is up and running!' });
  });

  app.use('/todos', require('./todos'));
  app.use('/users', require('./users'));

};
