var MongoClient = require('mongodb').MongoClient;
const mongoUrl = "mongodb+srv://Global_NewsUpACM:no5N7YorirOnZWE5@cluster0.fvbqxpw.mongodb.net"

MongoClient.connect(mongoUrl, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Stories");
  var myobj = 
  dbo.collection("Sports").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});