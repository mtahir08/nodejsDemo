const express = require('express');
const Inventory = require('./../controllers/inventory');
const Users = require('./../controllers/users');
const Authorization = require('./../services/Authorization');

const api = express.Router();

/**    INVENTORY    **/
api.post('/inventory', Authorization, Inventory.AddInventory)
api.get('/inventory/:type?', Authorization, Inventory.getInventory)
// api.get('/inventories', Inventory.getInventories)
api.put('/inventory', Authorization, Inventory.updateInventory)
api.delete('/inventory', Authorization, Inventory.removeInventory)


/**    USERS    **/
api.get('/users/:type?', Authorization, Users.GetUsers)


module.exports = api;