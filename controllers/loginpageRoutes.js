const router = require('express').Router();
const path = require('path');
const withoutAuth = require('../utils/woAuth');

router.get('/', withoutAuth, (req, res) => {
    res.sendFile(path.join(__dirname, '../public/assets/html/index.html')) 
});

module.exports = router;