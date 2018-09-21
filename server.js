const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');

const serverConfig = require('./src/config/server');
const logger = require('./src/utils/logger');
const routes = require('./src/routes/api');

const app = express();

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev', { 'stream': logger.stream }));

app.config = serverConfig[app.get('env')];

routes(app);

app.listen(app.config.port, () => {
  logger.info(`Servidor online na porta ${app.config.port}, acesse http://localhost:${app.config.port}/`);
});

module.exports = app;
