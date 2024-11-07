const mongoose = require('mongoose');
require('dotenv').config();

// The environment variable for your connection string goes here
let mongoDB = process.env.MONGO_DB_CONNECTION_STRING;

// Logging the connection string for debugging (optional, remove if it contains sensitive info)
console.log(
  'Attempting to connect to MongoDB with connection string:',
  mongoDB
);

mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connection successful!'))
  .catch((err) => console.error('MongoDB connection error:', err));

module.exports = mongoose.connection;
