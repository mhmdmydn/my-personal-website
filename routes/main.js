__path = process.cwd();

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {

    res.render('index', {
        layout: 'layouts/main',
        title: "Home",
    });
    
});

module.exports = router;
