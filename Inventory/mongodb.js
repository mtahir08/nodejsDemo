const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/inventory";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'CONNECTION ERROR :'));
db.once('open', function () {
    // Wait for the database connection to establish, then start the app.
    console.log('CONNECTION OPENED!!')
    return db;
});
