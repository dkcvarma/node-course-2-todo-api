const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove({_id: '5c0527336fc177aed6d7acfa'}).then((todo) => {

// });

// Todo.findByIdAndRemove

Todo.findByIdAndRemove('5c0527336fc177aed6d7acfa').then((todo) => {
    console.log(todo);
});