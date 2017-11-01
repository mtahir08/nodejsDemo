const express = require("express");
const mongoose = require("mongoose");
const User = require('./models/user');
const api = express.Router();
module.exports = function(db){
    
    api.get("/users", (req, res) => {
        const query = User.find({});
        query.exec(callback);
        function callback(error, data) {
            if (error) {
                console.log("error", error);
                res.status(500).send({ error: error });
            }
            res.status(200).send({ user: data });
        }
    });
    
    api.post("/user", function (req, res) {
        const user = new User({
            username: 'Chris',
            password: 'sevilayha',
            createdAt: 'password',
            displayName: 'displayName'
        });
        user.save(callback);
        function callback(error, data) {
            if (error) {
                console.log("error", error);
                res.status(500).send({ error: error });
            }
            res.status(200).send({ user: data });
        }
    });
    
    api.put("/user", function (req, res) {
        const find = { _id: req.body._id }
        const update = { displayName: "tahir" }
        const query = User.update(find, update);
        query.exec(callback);
        function callback(error, data) {
            if (error) {
                console.log("error", error);
                res.status(500).send({ error: error });
            }
            res.status(200).send({ user: data });
        }
    });
    
}


// module.exports = api;