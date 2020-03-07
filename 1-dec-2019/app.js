const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const users = [];

app.use(bodyParser.json())

function log(req, res, next) {
    console.log(req.method, "=>", req.body);
    next();
}

app.get('/users', log, function (req, res) {
    res.send(users);
})
app.get('/users/:id', log, function (req, res) {
    res.send("get users");
})

app.post('/users', log, function (req, res) {
    users.push(req.body);
    res.send(users);
})
app.put('/users/:oldName', log, function (req, res) {
    console.log(req.params)
    const index = users.findIndex((item) => item.name === req.params.oldName)
    if (index > -1) {
        users.splice(index, 1, req.body)
        res.send(users);
    } else {
        res.status(404).send("not found");
    }
})
app.delete('/users/:oldName', log, function (req, res) {
    const index = users.findIndex((item) => item.name === req.params.oldName)
    if (index > -1) {
        users.splice(index, 1)
        res.send(users);
    } else {
        res.status(404).send("not found");
    }
})



app.listen(port, function () {
    console.log("server is running!");
})

