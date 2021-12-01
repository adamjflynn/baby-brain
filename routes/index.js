const router = require('express').Router();
const parentRoutes = require('./api/parentRoutes');


router.use('/parents', parentRoutes);


module.exports = router;