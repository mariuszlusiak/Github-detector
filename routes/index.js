
/*
 * GET home page.
 */
var GeeksFinder = require('../lib/geeks_finder');

exports.index = function(req, res){
  res.render('index', { title: 'Github Detector' })
};

exports.geeks = function(req, res){
  var geeksFinder = new GeeksFinder();
  res.send(geeksFinder.find());
};

