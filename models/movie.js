var mongoose = require('mongoose');


// optional shortcut to Schema class/constructor
var Schema = mongoose.Schema;

var movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    releaseYear: {
        type: Number, 
        default: function() {
            return new Date().getFullYear();
        },
        min: 1927
    },
    mpaaRating: {
        type: String,
        enum: ['G', 'PG', 'PG-13', 'R']
    },
    // you cannot specify a default for an array without mongoose middleware
    cast: [String],
    nowShowing: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

// compile schema into a model and export it
module.exports = mongoose.model('Movie', movieSchema);