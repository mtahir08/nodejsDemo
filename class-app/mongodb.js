// var MongoClient = require('mongodb').MongoClient;
const mongoose = require("mongoose");
// var url = "mongodb://localhost:27017/Todo";
var url = "mongodb://admin:admin123@ds137368.mlab.com:37368/uit-tables";

// MongoClient.connect(url, function (err, db) {
//   if (err) {
//     console.log("Connection error!!");
//     console.log(err);
//     return;
//   }
//   console.log("Database created!");
//   return db;
// });

mongoose.connect(url, { useMongoClient: true });
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'CONNECTION ERROR :'));
db.once('open', function () {
  // Wait for the database connection to establish, then start the app.
  console.log('CONNECTION OPENED!!')
  return db;
});