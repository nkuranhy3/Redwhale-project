var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose")
PORT = process.env.PORT || 4000;



mongoose.connect("mongodb://redwhale:redwhale_project1@ds213183.mlab.com:13183/redwhale", {
  useNewUrlParser: true
});
mongoose.connection.once("open", () => {
  console.log("Connected to database");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static('public'));

app.use(require("./routes/Index"));

app.listen(PORT, () => console.log(`App has Started on http://localhost:${PORT}`));