const MongoClient = require('mongodb').MongoClient;


MongoClient.connect('mongodb://localhost:27017/Users', (err,db) => {
  if(err){
    console.log('Something Went Wrong');
    console.log(err);
  }else{
    
    console.log('Connected To MongoDB Server');
    // db.collection('TodoApp').insertOne({
    //   text:'Something todo',
    //   completed: false
    // }, (err, result) => {
    //   if(err){
    //     return console.log('Something Went Wrong', err);
    //   }

    //   console.log(JSON.stringify(result.ops), undefined, 2);
    // })

    db.collection('Users').insertOne({
      name:'sagar chinchorkar',
      age: 23
    }, (err, result) => {
      if(err){
        return console.log('Something Is wrong', err);
      }
      console.log(JSON.stringify(result.ops), undefined , 2);
    })

    db.close();
  }
})