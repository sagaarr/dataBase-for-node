const express = require("express");
const bodyParser = require("body-parser");

let {mongoose} = require("./db/mongoose");
let {Todo} = require("./models/todo");
let {User} = require("./models/user");

let app = express();
app.use(bodyParser.json());

app.post("/todo" , (req,res)=> {
  let todo = new Todo({
    text : req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc)
  }, (e) => {
    console.log(e);
  });

  
})



app.listen(3000, ()=> {
  console.log("Server Started");
})