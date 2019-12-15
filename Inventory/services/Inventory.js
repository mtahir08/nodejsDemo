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
            const query = Inventory.fineOne(obj);
            return await query.exec();
        } catch (error) {
            console.log("error", error);
            throw error
        }
    },
}

module.exports = Inventories