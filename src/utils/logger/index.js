const winston = require('winston')
const moment = require('moment')

const { config } = winston

const messageTemplate = options => {
  const d = moment().format('DD/MM/YYYY h:mm')
  const level = config.addColors(options.level)
  const { message = '' } = options

  return `${d} - ${level}: ${message}`
}

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.printf(options => {
      return messageTemplate(options)
    })
  ),
  transports: [new winston.transports.Console()],
})

logger.stream = {
  write(message, encoding) {
    logger.info(message);
  }
}
module.exports = logger
