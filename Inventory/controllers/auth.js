
const Users = require('./../services/User');
const JWT = require('./../services/JWT');
module.exports = {
    Signup: async (req, res) => {
        const obj = req.body;
        try {
            const user = await Users.getByEmail(obj.email)
            if (user) {
                return res.status(409).send({ message: "email already exists" });
            }
            obj.role = 'A'
            const newUser = await Users.createUser(obj)
            if (newUser) {
                return res.status(200).send({ data: "", message: "Successfully Signup. Please login!" });
            }
        } catch (error) {
            console.log("error", error);
            res.status(500).send({ error: "Please try again" });
        }
    },
    Login: async (req, res) => {
        try {
            const obj = req.body;
            let user = await Users.getByEmail(obj.email)
            if (user) {
                const comparePass = Users.compare(user.password, obj.password)
                if (comparePass) {
                    // to convert from mongoose instance to js object
                    const token = JWT.generateToken(user)
                    user = user.toObject()
                    delete user.password
                    return res.status(200).send({ data: { user, token }, message: "Successfully Login" });
                } else {
                    return res.status(409).send({ message: "Email/Password does not match!" });
                }
            }
            return res.status(404).send({ data: { user }, message: "Email/Password does not match!" });
        } catch (error) {
            console.log("error", error);
            res.status(500).send({ error });
        }
    },
}