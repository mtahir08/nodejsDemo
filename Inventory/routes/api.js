const express = require('express');
const Inventory = require('./../controllers/inventory');
const Users = require('./../controllers/users');
const Receipt = require('./../controllers/receipts');
const Authorization = require('./../middleware/Authorization');
const Storage = require('../middleware/Storage');

const api = express.Router();

/**    INVENTORY    **/
api.post(
	'/inventory',
	Authorization,
	Storage.single('picture'),
	Inventory.AddInventory
);
api.get('/inventory/:type?', Authorization, Inventory.getInventory);
// api.get('/inventories', Inventory.getInventories)
api.put(
	'/inventory',
	Authorization,
	Storage.single('picture'),
	Inventory.updateInventory
);

api.delete('/inventory', Authorization, Inventory.removeInventory);

/**    USERS    **/
api.get('/users/:type?', Authorization, Users.GetUsers);
api.post('/users', Authorization, Users.CreateUser);

api.put(
	'/users/:id',
	Authorization,
	Storage.single('picture'),
	Users.UpdateUser
);

api.delete('/Users', Authorization, Users.removeUser);

api.post(
	'/receipt',
	Authorization,
	Storage.single('picture'),
	Receipt.CreateReceipt
);

api.get('/receipt', Authorization, Receipt.GetReceipt);

api.put(
	'/receipt',
	Authorization,
	Storage.single('picture'),
	Receipt.UpdateReceipt
);

api.delete('/receipt', Authorization, Receipt.removeReceipt);

module.exports = api;
