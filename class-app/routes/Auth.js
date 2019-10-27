
const express = require("express");
const Users = require('./../controllers/index');
const Utils = require('./../utils');
const api = express.Router();

api.post("/signup", async function (req, res) {

    try {
        const user = await Users.getByEmail(req.body.email)
        if (user) {
            return res.status(409).send({ message: "email already exists" });
        }
        const newUser = await Users.createUser(req.body)
        if (newUser) {
            return res.status(200).send({ data: newUser });
        }
    } catch (error) {
        console.log("error", error);
        res.status(500).send({ error });
    }
});

api.post("/signin", async function (req, res) {

    try {
        let user = await Users.getByEmail(req.body.email)
        if (user) {
            const comparePass = Users.compare(user.password, req.body.password)
            if (comparePass) {
                // to convert from mongoose instance to js object
                const token = Utils.JWT.generateToken(user)
                user = user.toObject()
                delete user.password
                return res.status(200).send({ user, token });
            } else {
                return res.status(409).send({ message: "Email or pass not matched" });
            }
        }
        return res.status(404).send({ user });
    } catch (error) {
        console.log("error", error);
        res.status(500).send({ error });
    }

});


module.exports = api;