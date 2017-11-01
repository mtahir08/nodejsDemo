const express = require("express");
const User = require('./models/user');
const api = express.Router();
    
    api.get("/users", (req, res) => {
        console.log("here")
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

    api.get("/user/:id", (req, res) => {
        // const findById = { _id: req.params.id }
        // const query = User.findOne(findById);
        const query = User.findById(req.params.id);
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
        var user = new User({
            username: 'Chris',
            password: 'sevilayha',
            email:'abc@gmail.com',
            displayName: 'displayName'
        });
        user.save(callback);
        function callback(error, data) {
            console.log("error", error, data);
            
            if (error) {
                console.log("error", error);
                res.status(500).send({ error: error });
            }
            res.status(200).send({ user: data });
        }
    });
    
    api.put("/user", function (req, res) {
        const findById = { _id: req.body._id }
        const update = { displayName: "tahir" }
        const query = User.update(findById, update);
        query.exec(callback);
        function callback(error, data) {
            if (error) {
                console.log("error", error);
                res.status(500).send({ error: error });
            }
            res.status(200).send({ user: data });
        }
    });

    api.delete("/user/:id", function (req, res) {
        const findById = { _id: req.params.id }
        const query = User.remove(findById);
        query.exec(callback);
        function callback(error, data) {
            if (error) {
                console.log("error", error);
                res.status(500).send({ error: error });
            }
            res.status(200).send({ user: data });
        }
    });
    


module.exports = api;