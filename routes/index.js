var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'UrbanServices' });
});
  router.get('/adminPage', function(req, res, next) {
    res.render('adminPage', { title: 'Admin' });
});

module.exports = router;
