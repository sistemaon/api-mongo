
const express = require('express');
const router = express.Router();

const User = require('../controller/user')

// router post route user register, validating user register, user create thruout register
router.post('/register', User.create);


module.exports = router
