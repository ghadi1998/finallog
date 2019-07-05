'use strict';

var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/user.controller');

router.post('/signup', userCtrl.create);

module.exports = router;
//# sourceMappingURL=user.routes.js.map