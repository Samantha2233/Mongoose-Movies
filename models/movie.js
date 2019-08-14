var mongoose = require('mongoose');


// optional shortcut to Schema class/constructor
var Schema = mongoose.Schema;

var movieSchema = new Schema({
    title: String,
    releaseYear: Number,
    mpaaRating: String,
    cast: [String],
    nowShowing: Boolean
});

// complie schema into a model and export it
module.exports = mongoose.model('Movie', movieSchema);