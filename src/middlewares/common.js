function checkUser(req, res, next) {
    if (req.session.login) {
      return next();
    } else {
      res.redirect('/login');
    }
  }
  
  function secureRoute(req, res, next) {
    if (!req.session.login) {
      return next();
    } else {
      res.redirect('/');
    }
  }
  
  module.exports = { checkUser, secureRoute }; 