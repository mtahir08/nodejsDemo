const Inventory = require('../models/inventory');

const Inventories = {
    addInventory: async (obj) => {
        try {
            const newInventory = new Inventory(obj);
            const data = await newInventory.save()
            if (data) {
                return data;
            }
            throw data
        } catch (error) {
            throw error
        }

    },
    getInventory: async (obj) => {
        try {
            const query = Inventory.findOne(obj).populate('createdBy', '_id name email picture dob');
            return await query.exec();
        } catch (error) {
            console.log("error", error);
            throw error
        }
    },
    getAllInventories: async (obj) => {
        try {
            const query = Inventory.find(obj).populate('createdBy', '_id name email picture dob');
            return await query.exec();
        } catch (error) {
            console.log("error", error);
            throw error
        }
    },
}

module.exports = Inventories