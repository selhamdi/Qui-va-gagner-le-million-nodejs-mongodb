const {
  createLogger,
  transports,
  format
} = require('winston');
require('winston-mongodb');
const logger = createLogger({
  transports: [
      new transports.File({
          filename: 'info.log',
          level: 'info',
          format: format.combine(format.timestamp(), format.json())
      }),
      new transports.MongoDB({
        maxsize: 555555444,
           maxFiles: 5,
        db: 'mongodb://localhost/api-milion',
        options: { useUnifiedTopology: true }
       }),
       new transports.Console({
        level: 'debug'
    })
  ]
})
module.exports = logger;