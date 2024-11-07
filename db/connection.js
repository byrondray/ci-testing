const mongoose = require('mongoose');

////The environment variable for your connection string goes here////
// let mongoDB = environmentvariablegoeshere;
// Make sure to create .env file and use an environment variable

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose.connection;
