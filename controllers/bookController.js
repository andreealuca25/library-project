const Book = require("../models/bookModel");

const insert_book_db = async (req, res) => {
  let new_book = req.body;

  Book.create(new_book, (err, data) => {
    if (err) console.log(err);
    else console.log("Book inserted.");
  });
  res.send("okay");
};
module.exports = {
  insert_book_db,
};
