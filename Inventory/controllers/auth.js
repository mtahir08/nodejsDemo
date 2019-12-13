
const Users = require('./../services/User');

module.exports = {
    Signup: async (req, res) => {
        const obj = req.body;
        try {
            const user = await Users.getByEmail(obj.email)
            if (user) {
                return res.status(409).send({ message: "email already exists" });
            }
            const newUser = await Users.createUser(obj)
            if (newUser) {
                return res.status(200).send({ data: newUser });
            }
        } catch (error) {
            console.log("error", error);
            res.status(500).send({ error });
        }
    },
    Login: async (req, res) => {

        res.status(200).send({ message: "" })
    },
}