const withAuth = (req, res, next) => {
    if (!req.session.parent_id) {
      res.redirect('/');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;