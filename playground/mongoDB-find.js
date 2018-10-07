// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err){
    return console.log(err);
  }

  // db.collection('TodoApp').find({
  //   _id: new ObjectID('5bb894deec3ef6078cea2a84')
  // }).toArray().then((data) => {
  //   console.log(JSON.stringify(data, undefined, 2));
  // }, (err) => {
  //   console.log(`Error: ${err}`);
  // })

  // db.collection('TodoApp').find().count().then((data) => {
  //   console.log(`TODO: ${data}`)
  // }, (err) => {
  //   console.log(`Error: ${err}`);
  // })
  
  db.collection('Users').find({name: 'sagar chinchorkar'}).toArray().then((data) => {
    console.log(JSON.stringify(data, undefined , 2))
  }, (err) => {
    console.log(err)
  });

  // db.collection('Users').find({name: 'sagar chinchorkar'}, (err, data) => {
  //   if(err){
  //     return console.log(err)
  //   }
  //   console.log(data);
  //   });

    // db.close();
})