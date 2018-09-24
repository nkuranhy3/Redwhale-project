var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose")
PORT = process.env.PORT || 4000;

mongoose.connect("mongodb://localhost:27017/Internship", {
  useNewUrlParser: true
});
mongoose.connection.once("open", () => {
  console.log("Connected to database");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static('public'));

app.use(require("./routes/Index"));

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));