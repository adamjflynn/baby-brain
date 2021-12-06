const router = require('express').Router();
const parentRoutes = require('./parent-routes');
const babyRoutes = require('./baby-routes');
const eventRoutes = require('./event-routes');



router.use('/parents', parentRoutes);
router.use('/babies', babyRoutes);
router.use('/events', eventRoutes);




module.exports = router;