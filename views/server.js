// import modules
const express = require("express");
const path = require("path");
/**
 * Our app will need to post new guestbook entries in HTTP POST requests, 
 * so we'll need to parse the body of the POST; that's where body will come in
 */

const bodyParser = require("body-parser");

// initialize express app
let app = express();
const port = 3001

let entries = []
// Middleware
var publicPath = path.resolve(__dirname, "public");
// defining views
app.set('public', publicPath);
app.engine('html', require('ejs').renderFile);
app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({ extended: false })) 
// Routing
app.get('/', (req, res) => {
    res.render("index.html");
})

app.post('/add', (req, res) => {
    console.log(req.body);
    res.send("return!!;");
})

// Starting server
app.listen(port, () => {
    console.log("server is running!!")
});
// 