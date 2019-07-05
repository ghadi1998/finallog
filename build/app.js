'use strict';

var express = require('express');
var path = require('path');
var cors = require('cors');
var bodyParser = require("body-parser");
var helmet = require('helmet');
var cookieParser = require('cookie-parser');
var user = require('./model/user');
var CONFIG = require('../config/CONFIG');
var userRoutes = require('./routes/user.routes');
var server = require('./server');

var app = express();
app.use(cors());

//headers
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Methods', ['PATCH', 'POST', 'GET', 'DELETE', 'PUT']);
  res.setHeader('Access-Control-Allow-Headers', ['Content-Type']);
  res.setHeader('Access-Control-Expose-Headers', ['Content-Type']);
  next();
});

//body parser for form data
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// secure apps by setting various HTTP headers
app.use(helmet());
// enable CORS - Cross Origin Resource Sharing

app.options('*', cors());

//fetching index from react
app.use(express.static('./build/'));
app.use(express.static(path.join(__dirname, '../client/build')));
app.get('*', function (req, res) {
  res.send(express.static(path.join(__dirname, '../client/build/index.html')));
});

console.log("Environment:", CONFIG.app);

app.post('/', userRoutes);

module.exports = app;

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({ "error": err.name + ": " + err.message });
  }
});
//# sourceMappingURL=app.js.map