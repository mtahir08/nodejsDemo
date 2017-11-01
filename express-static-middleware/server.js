// import modules
const express = require("express");
const path = require("path");

// initialize express app
let app = express();
const port = 3001


// Middleware
var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));


// Routing
app.get('/', (req, res) => {
    // res.sendFile(path.resolve(__dirname, "public","index.html"));
    /**
     * If you don't set static folder, and send file directly from sendDile 
     * then you could't get all files in static foler 
     */ 
    res.sendFile("index.html");
})

// Starting server
app.listen(port, () => {
    console.log("server is running!!")
});
// 