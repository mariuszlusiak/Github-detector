var Authorization = function(model) {
  this.model = model;  
}

Authorization.prototype.authorize = function(login, password, success, error) {
  if (login === password) {
    this.model.findOne({ githubLogin : login }, function(err, geek) {
      if (geek === null) {
        geek = new Geek({ githubLogin : login });
      }
      success(geek.generateToken());  
    });
  } else {
    error();
  }
};

module.exports = Authorization;