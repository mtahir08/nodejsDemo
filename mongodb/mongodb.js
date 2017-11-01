var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://tahir:tahir@ds053305.mlab.com:53305/scotch";
const mongoose = require("mongoose");

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