const Inventory = require('../models/inventory');

const Inventories = {
    addInventory: async (obj) => {
        try {
            const newInventory = new Inventory(obj);
            await newInventory.populate("createdBy", '_id name email picture').execPopulate()
            const data = await newInventory.save()
            // await Inventory.populate(data, { path: "createdBy", select: '_id name email picture dob' })
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
            const query = Inventory.findOne(obj).populate('createdBy', '_id name email picture');
            return await query.exec();
        } catch (error) {
            console.log("error", error);
            throw error
        }
    },
    getAllInventories: async (obj) => {
        try {
            const query = Inventory.find(obj).populate('createdBy', '_id name email picture');
            // const query = Inventory.find(obj).populate({ path: "createdBy", select: '_id name email picture dob', match: { _id: { $eq: '5df4c7253dd8730ebabc8e9b' } }, });
            return await query.exec();
        } catch (error) {
            console.log("error", error);
            throw error
        }
    },
}

module.exports = Inventories