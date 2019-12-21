
const User = require('./../services/User');

module.exports = {
    GetUsers: async (req, res) => {
        try {
            let user = await User.getUsers(req.body)
            console.log({ user });
            if (user) {
                return res.status(200).send({ data: { user }, message: "" });
            }
            return res.status(404).send({ data: { user }, message: "" });
        } catch (error) {
            console.log("error", error);
            res.status(500).send({ error });
        }
    },
}
