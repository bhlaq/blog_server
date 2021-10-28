const mongoose = require("mongoose");
const { Schema } = mongoose;

const movieSchema = new Schema({
  name: {
    type: String,
    trim: true
  },
  url: {
    type: String,
    trim: true
  }
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = { Movie };
