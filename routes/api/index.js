const router = require('express').Router();
const parentRoutes = require('./parentRoutes');
const babyRoutes = require('./babyRoutes');
const eventRoutes = require('./eventRoutes');


router.use('/parents', parentRoutes);
router.use('/baby', babyRoutes);
router.use('/event', eventRoutes);

module.exports = router;