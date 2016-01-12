var express = require('express');
var fs = require('fs');
var router = express.Router();

var results;
fs.readFile('./json/services.json', 'utf8', function (err, data) {
    if (err) {
        throw err;
    } else {
        results = JSON.parse(data);
    }
});

router.get('/', function(req, res, next) {
    res.render('services', { 
        title: 'Services',
        services: results
    });
});

module.exports = router;
