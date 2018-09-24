var mongoose = require("mongoose");

var companySchema = new mongoose.Schema({
   name: String,
   location: String,
   coverImage: String,
   logo: String,
   shortDescription: String,
   highlights: String,
   image: String,
   video: String,
   longDescription: String,
   team: String,
   teamMemberName: String,
   teamMemberPic: String,
   milestones: String,
   productDescription: String,
   jobVacancies: String,
   contactDetails: String,
   website: String,
   socialMediaLink: String
});

module.exports = mongoose.model("Company", companySchema);