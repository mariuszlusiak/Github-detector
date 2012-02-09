
/*
 * GET home page.
 */
var GeeksFinder = require('../lib/geeks_finder');
var Geek = require('../lib/models/geek');
var Authorization = require('../lib/authorization');

exports.index = function(req, res){
  res.render('index', { title: 'Github Detector' })
};

exports.geeks = function(req, res){
  var geeksFinder = new GeeksFinder();
  geeksFinder.find(function(geeks) {
    var geekLogins = geeks.map(function(geek) {
      return geek.githubLogin;
    });
    res.json(geekLogins);
  });
};

exports.login = function(req, res) {
  var login = req.query.login;
  var password = req.query.password;
  var auth = new Authorization(Geek);
  auth.authorize(login, password, function(token) {
    res.json({ token : token });
  }, function () {
    res.send(403);
  })
};

exports.login

