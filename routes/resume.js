var express = require('express');
var router = express.Router();

/* Data context */
var summary_copy = [
    "As a web developer, I very much enjoy synthesizing technologies to bring a creative vision to life that delights, educates, or &ndash; most satisfying of all &ndash; helps to bring about a better world.",
    "I delight in the small details, the process of thinking through and solving problems, the beauty of logic, and the excitement of optimization.",
    "I thrive on mastering new technologies that are important to my craft while deepening my understanding of my current stack. And I excel in environments where I feel I am a part of a team working toward a greater goal."
];

var experiences = [
    {
        title: "Front-End Web Developer",
        company: "Whiteboard",
        link: "http://whiteboard.is",
        dates: "July 2015 &mdash; June 2017",
        description: "Worked in an agile environment with a team of project leaders, content strategists, designers, and developers to build custom websites and web applications for clients."
    },
    {
        title: "Code Reviewer",
        company: "Udacity",
        link: "https://www.udacity.com/",
        dates: "January 2015 &mdash; 2017",
        description: "Was one of the first asked to join the Udacity Code Reviewers, reviewing code submitted for nanodegree projects and giving actionable and helpful feedback to students."
    }
];

var skills = ["JavaScript", "Vue.js", "PHP + Wordpress", "Node + Express", "Python + Django", "SCSS / LESS", "Git + GitHub", "MySQL", "Gulp / Webpack", "Heroku / Digital Ocean / Amazon AWS", "Sketch / InVision", "SEO + Page Speed Optimization"];

var education = [
    {
        degree: "Artificial Intelligence Nanodegree",
        institution: "Udacity",
        link: "https://www.udacity.com/",
        dates: "May 2017 &mdash; present"
    },
    {
        degree: "Front-End Web Developer Nanodegree",
        institution: "Udacity",
        link: "https://www.udacity.com/",
        dates: "Summer 2015"
    },
    {
        degree: "Master of Music in Performance",
        institution: "Cleveland State University",
        link: "",
        dates: "2012 &mdash; 2014"
    },
    {
        degree: "Bachelor of Music in Music Arts",
        institution: "Vanderbilt University",
        link: "",
        dates: "2006 &mdash; 2011"
    }
];

/* GET resume page. */
router.get('/', function(req, res, next) {
  res.render('resume', {
      title: 'Resume',
      isCSSCached: req.cookies.csscached,
      summary_copy: summary_copy,
      experiences: experiences,
      skills: skills,
      education: education
  });
});

module.exports = router;
