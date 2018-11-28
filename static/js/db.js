var Datastore = require('nedb');

var db = new Datastore({filename : 'users'});

db.loadDatabase();

db.insert({word:"hello", translation: ['привет']});
db.insert({word:'go', translation:['идти', 'прогуливаться']});

db.find({word: 'go'}, function (err, docs) {
    console.log(docs);
});