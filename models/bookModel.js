var mongoose = require("../database");

var bookSchema = mongoose.Schema({
  name: String,
  author: String,
  publicationdate: String,
  img: String,
});

module.exports = mongoose.model("Book", bookSchema);
