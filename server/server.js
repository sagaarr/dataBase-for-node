const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/User');

let User = mongoose.model('User', {
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    minlength:1,
    trim: true
  }

});

const abc = new User({
  name:"xyz",
  email:"asssdgfg.com"
})

abc.save().then((result) => console.log(result)).catch((err) => console.log(err));


// let Todo = mongoose.model('Todo', {
//   text: {
//     type: String,
//     required: true,
//     minlength: 1,
//     trim: true
//   },
//   completed: {
//     type: Boolean,
//     default: false
//   },
//   completedAt: {
//     type: Number,
//     default: null
//   }
// });

// let ExmpTodo = new Todo({
//   text: "S",
//   completed: true,
//   completedAt: 1995
// });

// let abc = new Todo({
//   text:"                                       abc",
// })

// abc.save().then((doc) => {
//   console.log(doc)
// }, (e) => {
//   console.log(`ERROR: ERROR: ERROR: ${e}`);
// })


// ExmpTodo.save().then((doc) => {
//   console.log(doc)
// }, (e) => {
//   console.log(e)
// });