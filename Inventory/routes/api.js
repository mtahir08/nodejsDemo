const express = require('express');
const Api = require('./../controllers/inventory');

const api = express.Router();

api.post('/inventory', Api.AddInventory)
api.get('/inventory/:id', Api.getInventory)


module.exports = api;