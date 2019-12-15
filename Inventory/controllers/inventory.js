
const Inventories = require('./../services/Inventory');
module.exports = {
    AddInventory: async (req, res) => {
        const obj = req.body;
        try {
            const item = await Inventories.getInventory(obj.code)
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
            const obj = req.body;
            let item = await Inventories.getInventory(obj)
            if (item) {
                return res.status(200).send({ data: item, message: "Item Found" });
            }
            return res.status(404).send({ data: {}, message: "Item not found." });
        } catch (error) {
            console.log("error", error);
            res.status(500).send({ error: "Please try again" });
        }
    },
}