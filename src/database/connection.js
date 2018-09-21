const mongoose = require('mongoose');

const serverConfig = require('../config/server');

const environment = process.env.NODE_ENV || 'development';
const mongodbUrl = serverConfig[environment].database.mongodbUrl;
const connect = () => mongoose.connect(mongodbUrl, { useNewUrlParser: true });

module.exports = { connect };
