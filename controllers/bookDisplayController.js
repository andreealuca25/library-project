const Book = require("../models/bookModel");

const display_book_db = async (req, res) => {
  db_entries = await Book.find({});
  // console.log(db_entries)
  res.send(db_entries);
};
module.exports = {
  display_book_db,
};
