var express = require('express');
var path = require('path');
var cors= require('cors')
var bodyParser=require("body-parser");
var helmet= require('helmet')
var cookieParser= require('cookie-parser')
const user = require('./model/user')
var CONFIG = require('../config/CONFIG')
var userRoutes = require('./routes/user.routes')
const server = require ('./server')


const app = express()
app.use(cors())



//headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Methods', ['PATCH', 'POST', 'GET', 'DELETE', 'PUT']);
  res.setHeader('Access-Control-Allow-Headers')
  res.setHeader('Access-Control-Expose-Headers')
  next();
});

//body parser for form data
app.use(bodyParser.json())
app.use(bodyParser.json({ type: 'application/json' }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

// secure apps by setting various HTTP headers
app.use(helmet())
// enable CORS - Cross Origin Resource Sharing

 app.options('*', cors()); 


//fetching index from react
app.use(express.static('./build/'));
app.use(express.static(path.join(__dirname, './client/build')));
app.get('*', (req, res) => {
  res.send(express.static(path.join(__dirname, './client/build/index.html')))  ;
});

console.log("Environment:", CONFIG.app)



app.use('/', userRoutes)
 
 


app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

  

 module.exports = app