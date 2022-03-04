const express = require("express");
var cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const bookRouter = require("./routes/book.js");

app.use("/book", bookRouter);

app.listen(3002);
