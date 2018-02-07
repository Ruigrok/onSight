// Include Server Dependencies
const express = require("express");
const path = require('path');
const bodyParser = require("body-parser");
const logger = require("morgan");
var mongoose = require("mongoose");

// Create Instance of Express
const app = express();
// Set a port
const PORT = process.env.PORT || 5000;

// Run Morgan for Logging
app.use(logger("dev"));

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Set up Mongoose
//const db = mongoose.connect('mongodb://localhost/onSight');
const db = mongoose.connect('mongodb://heroku_jltkj8xw:efk711uu597a92smuha9uk055s@ds125618.mlab.com:25618/heroku_jltkj8xw');

db
  .then(db => {
    console.log('mongodb has been connected');
  })
  .catch(err => {
    console.log('error while trying to connect with mongodb');
  });

// Static directory
//app.use(express.static('client/public'));
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