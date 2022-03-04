var mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://andreea:andreea@cluster0.zanta.mongodb.net/books?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
var conn = mongoose.connection;
conn.on("connected", function () {
  console.log("database is connected successfully");
});
conn.on("disconnected", function () {
  console.log("database is disconnected successfully");
});
conn.on("error", console.error.bind(console, "connection error:"));
module.exports = exports = mongoose;
