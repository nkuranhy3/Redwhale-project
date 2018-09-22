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
// Create company route
app.post("/company", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var coverImage= req.body.coverImage;
    var logo= req.body.logo;
    var shortDescription = req.body.shortDescription;
    var highlights = req.body.highlights;
    var video = req.body.video;
    var longDescription= req.body.longDescription;
    var team= req.body.team;
    var milestones= req.body.milestones;
    var productDescription= req.body.productDescription;
    var jobVacancies= req.body.jobVacancies;
    var contactDetails= req.body.contactDetails;
    var website= req.body.website;
    var socialMediaLink= req.body.socialMediaLink;

    var newCompany = {
        name: name,
        image: image,
        logo:logo, 
        coverImage:coverImage, 
        shortDescription: shortDescription, 
        highlights:highlights, 
        video:video, 
        longDescription:longDescription, 
        team: team, milestones:milestones, 
        productDescription:productDescription, 
        jobVacancies:jobVacancies, 
        contactDetails:contactDetails, 
        website:website, 
        socialMediaLink:socialMediaLink
    }
    // Create a new Company and save to DB
    Company.create(newCompany, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            console.log(newlyCreated);
            res.redirect("/company");
        }
    });
});


//NEW - show form to create new campground
app.get("/company/new", function(req, res){
    res.render("new"); 
 });

app.listen(PORT, ()=> console.log(`Server is running on http://localhost:${PORT}`));