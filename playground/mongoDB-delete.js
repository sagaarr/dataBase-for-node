// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err){
    return console.log(err);
  }

    // db.close();

    // deletMany
    // db.collection('TodoApp').deleteMany({text: "sagar.c"}).then((deleted) => {
    //     console.log(deleted.result)
    // })


    // delete One
    // db.collection('TodoApp').deleteOne({text: "Randum"}).then((res) => {
    //   console.log(res);
    // })

    // findOneAndDelete
    // db.collection('Users').findOneAndDelete({name: "sonal"}).then((result) => {
    //   console.log(result);
    // })


    // Challange
    // db.collection('Users').deleteMany({name: "sagar chinchorkar"}).then((result) => console.log(result.result));
        db.collection('Users').findOneAndDelete({_id:new ObjectID("5bb9e492267ed10c25fcdf6f")})
                                                                .then((res) => console.log(res));


})