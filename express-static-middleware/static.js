// import modules
const express = require('express');
const path = require('path');

// initialize express app
let app = express();
const port = 3001;

// static
// var publicPath = path.resolve(__dirname, 'public'); // not required on root
// app.use(express.static(publicPath));
app.use(express.static('public'));

// Routing
app.get('/', (req, res) => {
    // res.sendFile(path.resolve(__dirname, "public","index.html"));
    /**
     * If you don't set static folder, and send file directly from sendFile
     * then you could't get all files in static foler
     */
    console.log("here", __dirname)
    // res.sendFile('form.html');
    res.sendFile(path.join(__dirname, 'public', 'form.html'));

});

app.get('/form', (req, res) => {
    // res.sendFile(path.join(__dirname, 'public', 'form.html'));
    res.sendFile('form.html');

});

// Starting server
app.listen(port, () => {
    console.log('server is running!!');
});
