const express = require('express');
const Auth = require('./../controllers/auth');

const api = express.Router();

api.post('/signup', Auth.Signup)


module.exports = api;