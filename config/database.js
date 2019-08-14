var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/movies', 
    {
        useNewUrlParser: true, 
        useCreateIndex: true
    }
);


// verify that you're connected to database on node terminal
var db = mongoose.connection;
db.on('connected', function() {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});