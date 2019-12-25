const mongoose = require("mongoose");
// const url = "mongodb://localhost:27017/inventory";
const url = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds137368.mlab.com:${process.env.DB_PORT}/${process.env.DB}`;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'CONNECTION ERROR :'));
db.once('open', function () {
    // Wait for the database connection to establish, then start the app.
    console.log('CONNECTION OPENED!!')
    return db;
});
