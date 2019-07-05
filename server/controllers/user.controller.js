

var jwt = require('jsonwebtoken');
var atob =require('atob')
var Cryptr = require('cryptr')
var cryptr = new Cryptr('q1w2e3r4t5y6u7i8o9p0p0o9i8u6y5t4r3e2w1q')
var db  =require('../server')




const create = (req, res, next) => {

     first_name  = req.body.first_name,
     last_name = req.body.last_name,
     username =req.body.username,
     password= req.body.password,
     email=req.body.email,
     dec_pass =atob(toString(req.body.password)),
     encrypted_pass =cryptr.encrypt(dec_pass)
    
    var sql = "INSERT INTO `user`(`user_id`,`first_name`,`last_name`,`username` , `email`,`password`) VALUES ('','" + first_name + "','" + last_name + "','" + username + "','" +email+ "','" +encrypted_pass+ "')";
    var query = db.query(sql, function(err, result){
       console.log(query)
      console.log(req)
       return (JSON.stringify(result));
    });
};

 module.exports = create