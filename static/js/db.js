var Datastore = require('nedb');

var db = new Datastore({filename : 'users', autoload:true});

db.remove({},{multi: true});

db.find({}, (err, data) => {
    if(err) console.log(err.message);

    console.log(data);
});


