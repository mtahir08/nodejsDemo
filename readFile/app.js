// import modules
const Express = require("express");
const fs = require('fs');
const path = require("path");
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

/**
 * It is better to use path instead file string, so we can write file as
 * __dirname is telling the current foler 
 * Take a look at README.md 
 */

const file = path.resolve(__dirname, 'file.txt');
console.log(__dirname);
fs.readFile(file, options, (error, fileData) => {
    if (error) {
        console.error("Error reading file!!!");
        console.log(error);
        return;
    }
    console.log(fileData);
})

// Starting server
app.listen(port, () => {
    console.log("server is running!!")
});
