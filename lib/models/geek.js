var mongoose = require('mongoose'), Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/github-detector');

var GeekSchema = new Schema({ githubLogin : String });
var Geek = mongoose.model('Geek', GeekSchema);

module.exports = Geek;