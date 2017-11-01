var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://tahir:tahir@ds053305.mlab.com:53305/scotch";

MongoClient.connect(url, function(err, db) {
  if (err){
      console.log("Connection error!!");
      console.log(err);
      return;
  }
  console.log("Database created!");
  return db;
});