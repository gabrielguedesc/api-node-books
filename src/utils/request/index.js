const HttpStatus = require('http-status');

const defaultResponse = (data, statusCode = HttpStatus.OK) => ({
  data,
  statusCode,
});

/* istanbul ignore next */
const errorResponse = (message, statusCode = HttpStatus.BAD_REQUEST) => defaultResponse({
  error: message,
}, statusCode);

module.exports = { defaultResponse, errorResponse, HttpStatus };
