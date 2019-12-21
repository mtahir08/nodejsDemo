
const Inventory = require('../models/inventory');
const Inventories = require('./../services/Inventory');
module.exports = {
    AddInventory: async (req, res) => {
        const obj = req.body;
        try {
            const item = await Inventories.getInventory({ code: obj.code })
            if (item) {
                return res.status(409).send({ message: "Inventory already exists" });
            }
            const newItem = await Inventories.addInventory(obj)
            if (newItem) {
                return res.status(200).send({ data: newItem, message: "Successfully Created!" });
            }
        } catch (error) {
            console.log("error", error);
            res.status(500).send({ error: "Please try again" });
        }
    },
    getInventory: async (req, res) => {
        try {
            const { type } = req.params
            if (Number(type) === 1) {
                // let item = await Inventories.getInventory({ _id: req.query.id })
                let item = await Inventories.getInventory(req.query)
                if (item) {
                    return res.status(200).send({ data: item, message: "Item Found" });
                }
            } else if (Number(type) === 0 || Number(type) === 2) {
                let item = await Inventories.getAllInventories(req.query)
                if (item) {
                    return res.status(200).send({ data: item, message: "Item Found" });
                }
            }
            return res.status(404).send({ data: {}, message: "Item not found." });
        } catch (error) {
            console.log("error", error);
            res.status(500).send({ error: "Please try again" });
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
            console.log(req.body);
            const query = { _id: req.body._id }
            var options = { new: true };
            let item = await Inventory.findOneAndUpdate(query, req.body, options).populate('createdBy', '_id name email picture dob');
            if (item) {
                return res.status(200).send({ data: item, message: "Item updated Successfully" });
            }
            return res.status(404).send({ data: {}, message: "Item not found." });
        } catch (error) {
            console.log("error", error);
            res.status(500).send({ error: "Please try again" });
        }
    },
    removeInventory: async (req, res) => {
        try {
            let item = await Inventory.remove(req.query);
            if (item && item.deletedCount > 0) {
                return res.status(200).send({ data: {}, message: "Item deleted Successfully" });
            }
            return res.status(404).send({ data: {}, message: "Item not found." });
        } catch (error) {
            console.log("error", error);
            res.status(500).send({ error: "Please try again" });
        }
    },
}