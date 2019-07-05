const express 			= require('express');
const router 			= express.Router();
var userCtrl = require ('../controllers/user.controller')


router.post('/signup', userCtrl )
    




module.exports = router