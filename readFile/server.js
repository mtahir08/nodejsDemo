// import modules
const Express = require("express");
const fs = require('fs');

// initialize express app
const app = Express();
const port = 3001
const options = { encoding: "utf-8" }
/**
 * readFile takes three arguments, 
 * - file path
 * - options
 * - callback 
 * 
 * ******NOTE********
 * If no encoding is specified, then the raw buffer is returned.
 */


fs.readFile("file.txt", options, (error, fileData) => {
    if (error) {
        console.error("Error reading file!!!");
        console.log(error);
        return;
    }
    console.log(fileData);
})

console.log("this will run before readFile finished!!!");

// Starting server
app.listen(port, () => {
    console.log("server is running!!")
});
