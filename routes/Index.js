var express  = require('express'),
    router   = express.Router(),
    Company  = require("../models/Company");

router.get("/company", function(req, res){
    Company.find({}, function(err, allCompanies){
       if(err){
           console.log(err);
       } else {
          res.render("index",{companies:allCompanies});
       }
    });
});

router.get("/", function(req, res){
    res.redirect("/company");
});

// Create company route
router.post("/company", function(req, res){
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
    var googleplus= req.body.googleplus;
    var location= req.body.location;
    var teamMemberName=req.body.teamMemberName;
    var teamMemberPic = req.body.teamMemberPic;
    var facebook =req.body.facebook;
    var instagram = req.body.instagram;
    var pinterest= req.body.pinterest;
    var twitter = req.body.twitter;
    var anotherTeam = req.body.anotherTeam;
    var anotherTeamMemberName= req.body.anotherTeamMemberName;
    var anotherTeamMemberPic= req.body.anotherTeamMemberPic;



    var newCompany = {
        name: name,
        image: image,
        logo:logo, 
        coverImage:coverImage, 
        shortDescription: shortDescription, 
        highlights:highlights, 
        video:video, 
        longDescription:longDescription, 
        team: team, 
        milestones:milestones, 
        productDescription:productDescription, 
        jobVacancies:jobVacancies, 
        contactDetails:contactDetails, 
        website:website, 
        googleplus:googleplus,
        location:location,
        teamMemberName:teamMemberName,
        teamMemberPic:teamMemberPic,
        facebook:facebook,
        instagram:instagram,
        pinterest:pinterest,
        twitter:twitter,
        anotherTeam:anotherTeam,
        anotherTeamMemberName:anotherTeamMemberName,
        anotherTeamMemberPic:anotherTeamMemberPic



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


//NEW - show form to create new Company
router.get("/new", function(req, res){
    res.render("new"); 
 });

// SHOW - shows more info about one company
router.get("/:id", function(req, res){
    Company.findById(req.params.id, function(err, foundCompany){
        if(err){
            console.log(err);
        } else {
            res.render("show", {company: foundCompany});
        }
    });
})

module.exports = router;