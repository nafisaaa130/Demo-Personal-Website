"use strict";

var path = require('path');

var express = require('express');

var getProfile = require('../controllers/profile');

var router = express.Router();
router.get('/', getProfile.ProfileInformation);
module.exports = router;