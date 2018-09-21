module.exports = {
  "production": {
    "port": 3000,
    "database": {
      "mongodbUrl": "mongodb://localhost:27017/production"
    }
  },
  "development": {
    "port": 3000,
    "database": {
      "mongodbUrl": "mongodb://localhost:27017/development"
    }
  },
  "test": {
    "port": 3000,
    "database": {
      "mongodbUrl": "mongodb://localhost:27017/tests"
    }
  }
};