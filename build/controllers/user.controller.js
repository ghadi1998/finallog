'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var jwt = require('jsonwebtoken');
var atob = require('atob');
var Cryptr = require('cryptr');
var cryptr = new Cryptr('q1w2e3r4t5y6u7i8o9p0p0o9i8u6y5t4r3e2w1q');
var User = require('../model/user');

var list = function list(req, res, next) {
  var sql = "SELECT * from users";
  var query = db.query(sql, function (err, result) {
    message = "got users";
    console.log(req);
    res.end(JSON.stringify(result));
  });
};

var create = function create(req, res, next) {
  var user = new User(req.body);
  var fname = user.first_name;
  var lname = user.last_name;
  var username = user.username;
  var pass = user.password;
  var email = user.email;
  var dec_pass = atob(toString(req.body.password));
  var encrypted_pass = cryptr.encrypt(dec_pass);

  var sql = "INSERT INTO `user`(`user_id`,`first_name`,`last_name`,`user_name` , `email`,`password`) VALUES ('','" + fname + "','" + lname + "','" + username + "','" + email + "','" + encrypted_pass + "')";
  var query = db.query(sql, function (err, result) {
    message = "Succesfully! Your account has been created.";
    console.log(req);

    res.end(JSON.stringify(result));
  });
};

exports.create = create;
exports.list = list;
//# sourceMappingURL=user.controller.js.map