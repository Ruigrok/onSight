// Include Server Dependencies
const express = require("express");
const path = require('path');
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

// Models for MongoDB
const User = require('./models/User');

// Create Instance of Express
const app = express();
// Set a port
const PORT = process.env.PORT || 8080;

// Run Morgan for Logging
app.use(logger("dev"));

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Set up Mongoose
mongoose.Promise = global.Promise;

const db = mongoose.connect('mongodb://localhost/onSight', {
  useMongoClient: true
});

db
  .then(function (db) {
    console.log('mongodb has been connected');
  })
  .catch(function (err) {
    console.log('error while trying to connect with mongodb');
  });

// Static directory
app.use(express.static('client/public'));
app.use(express.static(path.join(__dirname, 'client/build')));

// API Routes
require('./api-routes/user-routes.js')(app);

// All non-API get routes

/* app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/public/index.html'));
}); */

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  }); 

// Listener
app.listen(PORT, error => {
  error
    ? console.error(error)
    : console.info(`Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`)
});