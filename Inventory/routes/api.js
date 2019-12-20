const express = require('express');
const Api = require('./../controllers/inventory');

const api = express.Router();

api.post('/inventory', Api.AddInventory)
api.get('/inventory/:limit', Api.getInventory)
api.put('/inventory', Api.updateInventory)
api.delete('/inventory', Api.removeInventory)


module.exports = api;