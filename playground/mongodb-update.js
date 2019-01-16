// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5c3f122182840368980a1495')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal : false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c3edbd3a8156340584ec6f6')
    }, {
        $inc: {
            age: 1
        },
        $set : {
            name: 'Andrew'
        }
    }, {
        returnOriginal : false
    }).then((result) => {
        console.log(result);
    });


    // client.close();
});