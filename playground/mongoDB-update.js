// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err){
    return console.log(err);
  }

  // db.collection('Users').findOneAndUpdate(
  //   {_id: new ObjectID("5bb9e4c5267ed10c25fcdf82")},
  //    { $set:{name: "sagar"}}, 
  //    {returnOriginal: false }
  //    ).then((result) => console.log(result))

  // Challange--
  db.collection('Users').findOneAndUpdate({_id: new ObjectID("5bb9e4c5267ed10c25fcdf82")},
   {$inc: {age: -6}, $set:{name:"chinchorkar"}},{returnOriginal: false}).then((result) => console.log(result));

  // db.close();

})