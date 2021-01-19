const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    maxlength: [50, 'Only max 50 chars are allowed for the name']
  },
  director: {
    type: String,
    required: [true, 'Please add a director'],
    maxlength: [50, 'Only max 50 chars are allowed for the surname']
  },
    description: {
        type: String,
        required: [true, 'Please add a description'],
    },
    stars: {
        type: String,
        required: [true, 'Please add the main stars of the movie'],
        maxlength: [500, 'Only max 500 chars are allowed for the surname']
      },
    director: {
        type: String,
        required: [true, 'Please add the rating from imdb'],
        maxlength: [5, 'Only max 50 chars are allowed for the surname']
    },  
    year: {
        type: Number,
        max: 4
  }
});

// collection called movies
module.exports = mongoose.model('Movie', MovieSchema);
