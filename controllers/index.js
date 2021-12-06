const router = require('express').Router();

const apiRoutes = require('./api');
 //const loginRoutes = require('./loginpageRoutes');
const homepageRoutes = require('./homepage-routes');



/*router.use('/login', loginRoutes);*/
router.use('/api', apiRoutes);
router.use('/', homepageRoutes)


module.exports = router;
