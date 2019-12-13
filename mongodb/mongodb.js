const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/Todo";
// const url = "mongodb://uit:uit1234@ds137368.mlab.com:37368/uit-tables";

mongoose.connect(url, { useMongoClient: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'CONNECTION ERROR :'));
db.once('open', function () {
  // Wait for the database connection to establish, then start the app.
  console.log('CONNECTION OPENED!!')
  return db;
});
