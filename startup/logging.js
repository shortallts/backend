const winston = require('winston');

// => logger.js
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [   
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ],
  exceptionHandlers: [
      new winston.transports.Console({ colorize: true, prettyPrint: true }),
      new winston.transports.File({ filename: 'exceptions.log' })
    
  ],
  handleExceptions: true
  });
  
  if (process.env.NODE_ENV !== 'production') {
     logger.add(new winston.transports.Console({
     format: winston.format.simple()
     }));
  }
  
  // just add the below to write into a file
  winston.add(logger);