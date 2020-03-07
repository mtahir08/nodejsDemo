const Receipt = require('../models/receipt');

const Receipts = {
    createReceipt: async (obj) => {
        try {
            const newReceipt = new Receipt(obj);
            const data = await newReceipt.save()
            if (data) {
                return data;
            }
            throw data
        } catch (error) {
            throw error

        }
    },
    getById: (id) => {
        const query = Receipt.findById(id);
        query.exec(callback);
        function callback(error, data) {
            if (error) {
                console.log("error", error);
                throw error
            }
            return data
        }
    },
    getReceipts: async (obj) => {
        try {
            // const query = Receipt.find(obj, { _id: 1, email: 1, name: 1 });
            // const query = Receipt.find(obj).select('_id gender email profile dob createdAt updatedAt');
            const query = Receipt.find(obj);
            return await query.exec();
        } catch (error) {
            throw error
        }
    },
}

module.exports = Receipts