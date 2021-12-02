const withoutAuth = (req, res, next) => {
    if (req.session.parent_id) {
      res.redirect('/home');
    } else {
      next();
    }
  };
  
  module.exports = withoutAuth;