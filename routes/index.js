const router = require('express').Router();

const apiRoutes = require('./api');
const loginRoutes = require('./loginpageRoutes');
const homepageRoutes = require('./homepage-routes');
const accountCreation = require('./make-account-route.js')


router.use('/', loginRoutes);
router.use('/api', apiRoutes);
router.use('/home', homepageRoutes)
router.use('/accountcreation', accountCreation)

module.exports = router;
