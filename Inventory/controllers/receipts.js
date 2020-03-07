const fs = require('fs');
const path = require('path');
const Receipt = require('./../services/Receipt');
const ReceiptModel = require('../models/receipt');

module.exports = {
	CreateReceipt: async (req, res) => {
		try {
			if (!req.isAuthenticated)
				return res
					.status(401)
					.send({ data: {}, message: 'Authorization failed' });

			let receipt = await Receipt.createReceipt(req.body);
			if (receipt) {
				return res
					.status(200)
					.send({ data: '', message: 'Successfully Created' });
			}
		} catch (error) {
			console.log('error', error);
			res.status(500).send({ error });
		}
	},
	GetReceipt: async (req, res) => {
		try {
			if (!req.isAuthenticated)
				return res
					.status(401)
					.send({ data: {}, message: 'Authorization failed' });

			let receipt = await Receipt.getReceipts();
			if (receipt) {
				return res.status(200).send({ data: { receipt }, message: '' });
			}
			return res.status(404).send({ data: { receipt }, message: '' });
		} catch (error) {
			console.log('error', error);
			res.status(500).send({ error });
		}
	},
	UpdateReceipt: async (req, res) => {
		try {
			if (!req.isAuthenticated)
				return res
					.status(401)
					.send({ data: {}, message: 'Authorization failed' });

			let receipt = await Receipt.getUsers(req.body);
			if (!receipt) {
				if (req.file)
					fs.unlinkSync(
						path.join(__dirname, '..', 'uploads', req.file.filename)
					);
				return res.status(404).send({ data: {}, message: 'Receipt Not found' });
			}
			const query = { _id: req.body._id };
			var options = { new: true };
			if (req.file && req.file.filename)
				req.body.picture = `images/${req.file.filename}`;
			let item = await Receipt.findOneAndUpdate(query, req.body, options);
			if (item) {
				return res
					.status(200)
					.send({ data: item, message: 'Profile updated Successfully' });
			}
			return res
				.status(409)
				.send({ data: {}, message: 'Profile not updated.' });
		} catch (error) {
			console.log('error', error);
			res.status(500).send({ error });
		}
	},
	removeReceipt: async (req, res) => {
		console.log(req);
		try {
			if (!req.isAuthenticated)
				return res
					.status(401)
					.send({ data: {}, message: 'Authorization failed' });

			let item = await ReceiptModel.remove(req.query);
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
