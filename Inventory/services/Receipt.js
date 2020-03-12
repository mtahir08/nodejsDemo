const Receipt = require('../models/receipt');

const Receipts = {
	createReceipt: async (obj) => {
		try {
			const newReceipt = new Receipt(obj);
			const data = await newReceipt.save();
			if (data) {
				return data;
			}
			throw data;
		} catch (error) {
			throw error;
		}
	},
	getById: async (id) => {
		const query = Receipt.findById(id);
		try {
			return await query.exec();
		} catch (error) {
			console.log('error', error);
			throw error;
		}
	},
	getReceipts: async (obj) => {
		try {
			// const query = Receipt.find(obj, { _id: 1, email: 1, name: 1 });
			// const query = Receipt.find(obj).select('_id gender email profile dob role createdAt updatedAt');
			const query = Receipt.find(obj);
			return await query
				.populate('sentBy', '_id name email picture dob')
				.populate('approvedBy', '_id name email picture dob')
				.exec();
		} catch (error) {
			throw error;
		}
	}
};

module.exports = Receipts;
