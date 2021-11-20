const winston = require('winston');
require('winston-mongodb');
require('express-async-errors');

module.exports = function() {
  winston.exceptions.handle(
    new winston.transports.Console({ colorize: true, prettyPrint: true }),
    new winston.transports.File({ filename: 'exceptions.log' })
    );
  
  process.on('unhandledRejection', (ex) => {
    throw ex;

  });

  winston.add(new winston.transports.File, { filename: 'errors.log', level: 'error'  });
  // winston.add(winston.transports.MongoDB, { 
  //   db: 'mongodb://localhost/vidly',
  //   level: 'info'
  // });  
}