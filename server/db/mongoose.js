var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });
//mongoose.connect(process.env.MONGODB_URI);
//mongoose.connect('mongodb://motifridman:5678moti@ds026898.mlab.com:26898/node-course-db');

module.exports = { mongoose };