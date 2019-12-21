const express = require('express');
const Inventory = require('./../controllers/inventory');
const Users = require('./../controllers/users');

const api = express.Router();

/**    INVENTORY    **/
api.post('/inventory', Inventory.AddInventory)
api.get('/inventory/:type?', Inventory.getInventory)
// api.get('/inventories', Inventory.getInventories)
api.put('/inventory', Inventory.updateInventory)
api.delete('/inventory', Inventory.removeInventory)


/**    USERS    **/
api.get('/users/:type?', Users.GetUsers)


module.exports = api;