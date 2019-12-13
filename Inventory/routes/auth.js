const express = require('express');
const Auth = require('./../controllers/auth');

const router = express.Router();

router.post('signup', Auth.Signup)


module.exports = router;