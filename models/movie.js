var mongoose = require('mongoose');


// optional shortcut to Schema class/constructor
var Schema = mongoose.Schema;

var movieSchema = new Schema({
    title: String,
    releaseYear: {
        type: Number, 
        default: 2000
    },
    mpaaRating: String,
    // you cannot specify a default for an array without mongoose middleware
    cast: [String],
    nowShowing: {
        type: Boolean,
        default: false
    }
});

// compile schema into a model and export it
module.exports = mongoose.model('Movie', movieSchema);