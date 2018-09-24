var mongoose = require("mongoose");

var companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: ""
    },
    location: {
        type: String,
        default: "United States of America"
    },
    coverImage: {
        type: String,
        default: ""
    },
    logo: {
        type: String,
        default: ""
    },
    shortDescription: {
        type: String,
        default: ""
    },
    highlights: {
        type: String,
        default: ""
    },
    image: {
        type: String,
        default: ""
    },
    video: {
        type: String,
        default: ""
    },
    longDescription: {
        type: String,
        default: ""
    },
    team: {
        type: String,
        default: ""
    },
    teamMemberName: {
        type: String,
        default: ""
    },
    teamMemberPic: {
        type: String,
        default: ""
    },
    anotherTeam: {
        type: String,
        default: ""
    },
    anotherTeamMemberName: {
        type: String,
        default: ""
    },
    anotherTeamMemberPic: {
        type: String,
        default: ""
    },
    milestones: {
        type: String,
        default: ""
    },
    productDescription: {
        type: String,
        default: ""
    },
    jobVacancies: {
        type: String,
        default: ""
    },
    contactDetails: {
        type: String,
        default: ""
    },
    website: {
        type: String,
        default: "alfredboateng.me"
    },
    googleplus: {
        type: String,
        default: ""
    },
    facebook: {
        type: String,
        default: ""
    },
    instagram: {
        type: String,
        default: ""
    },
    pinterest: {
        type: String,
        default: ""
    },
    twitter: {
        type: String,
        default: ""
    }
});

module.exports = mongoose.model("Company", companySchema);