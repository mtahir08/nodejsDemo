// import modules
const Express = require("express");
const fs = require('fs');
const path = require('path');

// initialize express app
const app = Express();
const port = 3001
// const options = { encoding: "utf-8" }
/**
 * readFile takes three arguments, 
 * - file path
 * - options
 * - callback 
 * 
 * ******NOTE********
 * If no encoding is specified, then the raw buffer is returned.
 */

app.get("/txt", (req, res) => {
    fs.readFile("file.txt", (error, fileData) => {
        if (error) {
            console.error("Error reading file!!!");
            console.log(error);
            return;
        }
        console.log(fileData);
        res.send(fileData);
    })
})

app.post("/txt", (req, res) => {
    fs.writeFile('input.txt', 'Simply Easy Learning!', function (err) {
        if (err) {
            return console.error(err);
        }

        fs.readFile('input.txt', function (err, data) {
            if (err) {
                return console.error(err);
            }
            console.log("Asynchronous read: " + data.toString());
            res.send(data);
        });
    });
})


app.get("/image", (req, res) => {
    // res.sendFile(path.resolve(__dirname,'item.jpg'))
    fs.readFile('item.jpg', function (err, data) {
        if (err) {
            // Fail if the file can't be read.
            res.send(`<h2>Can't read file  ${err}</h2>`)
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('<html><body><img src="data:image/jpeg;base64,')
            res.write(Buffer.from(data).toString('base64'));
            res.end('"/></body></html>');
        }
    });
});


app.get("/pdf", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'html.pdf'))
});

// Starting server
app.listen(port, () => {
    console.log("server is running!!")
});
