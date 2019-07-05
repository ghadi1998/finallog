'use strict';

Object.defineProperty(exports, "__esModule", {
        value: true
});
var Sequelize = require('sequelize');
var app = require('./app');
var CONFIG = require('../config/CONFIG');
var db = {};

var sequelize = new Sequelize("users", "root", "", {

        host: 'localhost',
        dialect: 'mysql',
        operatorAliases: false,

        pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
        }

});

console.log(CONFIG.db_host);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

console.log('alright');

exports.default = db;
//# sourceMappingURL=server.js.map