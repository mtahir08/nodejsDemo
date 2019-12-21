const express = require('express');
const Inventory = require('./../controllers/inventory');
const Users = require('./../controllers/users');
const Authorization = require('./../middleware/Authorization');
const Storage = require('../middleware/Storage');

const api = express.Router();

/**    INVENTORY    **/
api.post('/inventory', Authorization, Storage.single('picture'), Inventory.AddInventory)
api.get('/inventory/:type?', Authorization, Inventory.getInventory)
// api.get('/inventories', Inventory.getInventories)
api.put('/inventory', Authorization, Storage.single('picture'), Inventory.updateInventory)
api.delete('/inventory', Authorization, Inventory.removeInventory)


/**    USERS    **/
api.get('/users/:type?', Authorization, Users.GetUsers)


module.exports = api;