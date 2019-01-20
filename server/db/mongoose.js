var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });
//mongoose.connect(process.env.MONGODB_URI);
mongoose.connect('mongodb://motifridman:5678moti@ds159624.mlab.com:59624/node-course');

module.exports = { mongoose };