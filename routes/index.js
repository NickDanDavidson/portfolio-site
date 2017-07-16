var express = require('express');
var router = express.Router();

/* Data context */
var projects = [
    {
        'title': 'Food for the Hungry',
        'link': 'https://www.fh.org/',
        'image': '/dist/img/fh.jpg',
        'description': 'Food for the Hungry is working to end poverty and supports children worldwide with the help of donor gifts and child sponsorships.'
    },
    {
        'title': 'Last Mile Health',
        'link': 'http://lastmilehealth.org/chacademy/',
        'image': '/dist/img/lmh.jpg',
        'description': 'Last Mile Health provides both access to healthcare and training to community health workers in remote parts of the world where people are most vulnerable to diseases like Ebola. In recognition and support of their efforts, founder Raj Panjabi won the 2017 TED Prize.'
    },
    {
        'title': 'Airbus Aerial',
        'link': 'https://airbusaerial.com/',
        'image': '/dist/img/airbusaerial.jpg',
        'description': 'Airbus Aerial is a new venture by Airbus that is leveraging aerospace technology from across the globe to offer actionable data and analysis to its partners.'
    },
    {
        'title': 'Whiteboard',
        'link': 'http://whiteboard.is/insights/black-dot-focus-overcoming-three-causes-error/',
        'image': '/dist/img/whiteboard.jpg',
        'description': 'Whiteboard is a design and development firm who is &ldquo;helping organizations thrive in our digital age.&rdquo;'
    },
    {
        'title': 'StuRents',
        'link': 'https://sturents.com/',
        'image': '/dist/img/sturents.jpg',
        'description': 'StuRents helps students in the UK customize their search for the perfect housing accommodations during their studies.'
    },
    {
        'title': 'WinShape Camps',
        'link': 'http://camps.winshape.org/',
        'image': '/dist/img/wsc.jpg',
        'description': 'A division of the WinShape Foundation, a charitable organization established by Chick-fil-A&rsquo;s founders, WinShape Camps brings kids together for the &ldquo;summer of a lifetime.&rdquo;'
    },
    {
        'title': 'Veritas Forum',
        'link': 'http://www.veritas.org/',
        'image': '/dist/img/veritas.jpg',
        'description': 'The Veritas Forum gathers many of the world&rsquo;s leading religious thinkers to foster conversations about life&rsquo;s hardest questions.'
    },
    {
        'title': 'The Camp House',
        'link': 'https://thecamphouse.com/',
        'image': '/dist/img/camphouse.jpg',
        'description': 'The Camp House is not only one of Chattanooga&rsquo;s finest coffee shops, but also an important community meeting place, event venue, and home to The Mission Chattanooga Anglican church.'
    }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      title: 'Home',
      projects: projects
  });
});

module.exports = router;
