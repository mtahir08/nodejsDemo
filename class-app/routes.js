
const express = require("express");
const Todo = require('./models/todo');
const Users = require('./controllers/index');
const api = express.Router();

api.get("/todo", (req, res) => {
    const query = Todo.find();
    query.exec(callback);
    function callback(error, data) {
        if (error) {
            console.log("error", error);
            res.status(500).send({ error: error });
            return;
        }
        res.status(200).send({ todo: data });
    }
});

api.get("/todo/:id", (req, res) => {
    // const findById = { _id: req.params.id }
    // const query = User.findOne(findById);
    const query = Todo.findById(req.params.id);
    query.exec(callback);
    function callback(error, data) {
        if (error) {
            console.log("error", error);
            res.status(500).send({ error: error });
            return;
        }
        res.status(200).send({ todo: data });
    }
});


http://github.com/mtahir08/nodejsDemo

api.post("/todo", function (req, res) {
    const todo = new Todo(req.body);
    todo.save(callback);
    function callback(error, data) {
        console.log("error", error, data);
        if (error) {
            console.log("error", error);
            res.send({ error: error });
            // return;
        }
        else {
            res.send({ todo: data });
        }
    }
});

api.put("/todo", function (req, res) {
    const findById = { _id: req.body._id }
    const update = { checked: req.body.checked }
    const query = Todo.update(findById, update);
    query.exec(callback);
    function callback(error, data) {
        if (error) {
            console.log("error", error);
            res.status(500).send({ error: error });
            return;
        }
        res.status(200).send({ data });
    }
});

api.delete("/todo/:id", function (req, res) {
    const findById = { _id: req.params.id }
    const query = Todo.remove(findById);
    query.exec(callback);
    function callback(error, data) {
        if (error) {
            console.log("error", error);
            res.status(500).send({ error: error });
            return;
        }
        res.status(200).send({ todo: data });
    }
});



api.post("/signup", async function (req, res) {

    try {
        const user = await Users.getByEmail(req.body.email)
        if (user) {
            return res.send({ message: "email already exists" });
        }
        const newUser = await Users.createUser(req.body)
        if (newUser) {
            res.send({ todo: newUser });
        }
    } catch (error) {
        console.log("error", error);
        res.send({ error });
    }
});


module.exports = api;