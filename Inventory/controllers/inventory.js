const fs = require('fs');
const path = require('path');

const Inventory = require('../models/inventory');
const Inventories = require('./../services/Inventory');

module.exports = {
	AddInventory: async (req, res) => {
		const obj = req.body;
		try {
			if (!req.isAuthenticated)
				return res
					.status(401)
					.send({ data: {}, message: 'Authorization failed' });

			const item = await Inventories.getInventory({ code: obj.code });
			if (item) {
				if (req.file)
					fs.unlinkSync(
						path.join(__dirname, '..', 'uploads', req.file.filename)
					);
				return res.status(409).send({ message: 'Inventory already exists.' });
			}
			if (req.file && req.file.filename)
				obj.picture = `images/${req.file.filename}`;
			const newItem = await Inventories.addInventory(obj);
			if (newItem) {
				return res
					.status(200)
					.send({ data: newItem, message: 'Successfully Created!' });
			}
		} catch (error) {
			console.log('error', error);
			res.status(500).send({ error: 'Please try again' });
		}
	},
	getInventory: async (req, res) => {
		try {
			if (!req.isAuthenticated)
				return res
					.status(401)
					.send({ data: {}, message: 'Authorization failed' });

			const { type } = req.params;
			if (Number(type) === 1) {
				// let item = await Inventories.getInventory({ _id: req.query.id })
				let item = await Inventories.getInventory(req.query);
				if (item) {
					return res.status(200).send({ data: item, message: 'Item Found' });
				}
			} else if (Number(type) === 0 || Number(type) === 2) {
				let item = await Inventories.getAllInventories(req.query);
				if (item) {
					return res.status(200).send({ data: item, message: 'Item Found' });
				}
			}
			return res.status(404).send({ data: {}, message: 'Item not found.' });
		} catch (error) {
			console.log('error', error);
			res.status(500).send({ error: 'Please try again' });
		}
	},
	// getInventories: async (req, res) => {
	//     try {
	//         let item = await Inventories.getAllInventories(req.query)
	//         if (item) {
	//             return res.status(200).send({ data: item, message: "Item Found" });
	//         }
	//         return res.status(404).send({ data: {}, message: "Item not found." });
	//     } catch (error) {
	//         console.log("error", error);
	//         res.status(500).send({ error: "Please try again" });
	//     }
	// },
	updateInventory: async (req, res) => {
		try {
			if (!req.isAuthenticated)
				return res
					.status(401)
					.send({ data: {}, message: 'Authorization failed' });

			const query = { _id: req.body._id };
			var options = { new: true };
			if (req.file && req.file.filename)
				req.body.picture = `images/${req.file.filename}`;
			let item = await Inventory.findOneAndUpdate(
				query,
				req.body,
				options
			).populate('createdBy', '_id name email picture dob');
			if (item) {
				return res
					.status(200)
					.send({ data: item, message: 'Item updated Successfully' });
			}
			return res.status(404).send({ data: {}, message: 'Item not found.' });
		} catch (error) {
			console.log('error', error);
			res.status(500).send({ error: 'Please try again' });
		}
	},
	removeInventory: async (req, res) => {
		try {
			if (!req.isAuthenticated)
				return res
					.status(401)
					.send({ data: {}, message: 'Authorization failed' });

			let item = await Inventory.remove(req.query);
			if (item && item.deletedCount > 0) {
				return res
					.status(200)
					.send({ data: {}, message: 'Item deleted Successfully' });
			}
			return res.status(404).send({ data: {}, message: 'Item not found.' });
		} catch (error) {
			console.log('error', error);
			res.status(500).send({ error: 'Please try again' });
		}
	}
};
