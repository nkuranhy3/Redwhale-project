var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose")
    PORT        = process.env.PORT || 4000;
    Company     = require("./models/Company");
    
mongoose.connect("mongodb://localhost:27017/Internship",
    { useNewUrlParser: true });
  mongoose.connection.once("open", () => {
    console.log("Connected to database");
  });
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


app.get("/company", function(req, res){
    Company.find({}, function(err, allCompanies){
       if(err){
           console.log(err);
       } else {
          res.render("index",{companies:allCompanies});
       }
    });
});


app.get("/", function(req, res){
    res.redirect("/company");
});


app.listen(PORT, ()=> console.log(`Server is running on http://localhost:${PORT}`));