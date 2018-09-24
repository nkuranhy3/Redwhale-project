var mongoose = require("mongoose");

var companySchema = new mongoose.Schema({
    name: {
        type: String,
        default: "Alfred Boateng Company"
    },
    location: {
        type: String,
        default: "United States of America"
    },
    coverImage: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2018/01/04/11/38/spider-web-3060448__340.jpg"
    },
    logo: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2018/01/04/18/01/pepper-3061240__340.jpg"
    },
    shortDescription: {
        type: String,
        default: "Alex sighs as he lifts another box onto the truck of the moving company he works for."
    },
    highlights: {
        type: String,
        default: "When we face complex problems, we may feel that happiness and inner peace are elusive. Yet, the Bible has helped countless people to cope with daily pressures, to ease their physical and emotional distress, and to find meaning and purpose in life. The Bible can help you to be happy too."
    },
    image: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2016/02/19/11/23/women-1209678__340.jpg"
    },
    image1: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/01/08/18/24/children-593313__340.jpg"
    },

    image2: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776__340.jpg"
    },
    video: {
        type: String,
        default: "https://www.youtube.com/watch?v=NEdqrgp3XFc"
    },
    longDescription: {
        type: String,
        default: "When we face complex problems, we may feel that happiness and inner peace are elusive. Yet, the Bible has helped countless people to cope with daily pressures, to ease their physical and emotional distress, and to find meaning and purpose in life. The Bible can help you to be happy too."
    },
    team: {
        type: String,
        default: "We all know that hard work pays off in the form of success. As the famous Thomas Edison quote goes “Genius is one percent inspiration and ninety-nine percent perspiration”. The end result of hard work is often incentive enough for us to put "
    },
    teamMemberName: {
        type: String,
        default: "Priscilla Batchlar"
    },
    teamMemberPic: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2018/01/13/19/39/fashion-3080644__340.jpg"
    },
    anotherTeam: {
        type: String,
        default: "Hard work gives you an advantage.If you’re looking for a competitive edge and a way to stand out and get noticed, hard work is the answer. Those who have achieved success often attribute their success to hard work, determination, and per"
    },
    anotherTeamMemberName: {
        type: String,
        default: "Sara Mansion"
    },
    anotherTeamMemberPic: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/11/26/00/14/fashion-1063100__340.jpg"
    },
    milestones: {
        type: String,
        default: "Participating in the full agile project lifecycle by designing, storyboarding, prototyping, developing, testing, deploying, and implementing custom business applications using the latest tools and technologies"
    },
    productDescription: {
        type: String,
        default: "We focus on developing the people, systems and expertise that allow us to be the consulting firm of choice. Our footprint spans the nation and countless sectors, making us flexible and giving you options. Our passion is to provide high quality services and innovative approaches to our clients. We are looking for problem solvers. Do you have your boots ready?"
    },
    jobVacancies: {
        type: String,
        default: "Junior Software Developer"
    },
    contactDetails: {
        type: String,
        default: "002787287272722"
    },
    website: {
        type: String,
        default: "alfredboateng.me"
    },
    googleplus: {
        type: String,
        default: "https://plus.google.com/up/..."
    },
    facebook: {
        type: String,
        default: "https://web.facebook.com/nkuranhy3"
    },
    instagram: {
        type: String,
        default: "https://www.instagram.com/accounts/"
    },
    pinterest: {
        type: String,
        default: "https://pinterest.com/..."
    },
    twitter: {
        type: String,
        default: "https://twitter.com/nkuranhy3"
    }
});

module.exports = mongoose.model("Company", companySchema);