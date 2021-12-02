const router = require('express').Router();
const path = require('path');
const withAuth = require('../utils/auth');

router.get('/',withAuth, (req, res) => {
    res.sendFile(path.join(__dirname, '../public/assets/html/user.html')) 
    
});

module.exports = router;