const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");
const bookDisplayController = require("../controllers/bookDisplayController");
router.post("/addBook", bookController.insert_book_db);
router.get("/displayBook", bookDisplayController.display_book_db);

module.exports = router;
