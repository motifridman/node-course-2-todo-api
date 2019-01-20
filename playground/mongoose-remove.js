const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user')

// Todo.remove({}).then((result) => {
//     console.log(result);
// });



Todo.findByIdAndRemove('5c44302a7ec2ec958f0b8709').then((todo) => {
    console.log(todo);
});