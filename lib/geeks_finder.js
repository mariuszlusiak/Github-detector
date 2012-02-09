
var Geek = require('./models/geek');

var GeeksFinder = function() {

}

GeeksFinder.prototype.find = function(success) {
  Geek.find({}, function(err, docs) {
    success(docs);
  });
}

module.exports = GeeksFinder;
