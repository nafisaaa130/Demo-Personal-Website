const path = require('path');
const express = require('express')

const getProfile = require('../controllers/profile');

const router = express.Router();

router.get('/', getProfile.ProfileInformation);

module.exports = router;