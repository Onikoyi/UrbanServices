var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'UrbanServices' });
});
  router.get('/adminPage', function(req, res, next) {
    res.render('adminPage', { title: 'Admin' });
});

router.get('/boardOfTrustee', function(req, res, next) {
  res.render('boardOfTrustee', { title: 'Board Of Trustees' });
});
router.get('/clientRegistration', function(req, res, next) {
  res.render('clientRegistration', { title: 'Welcome Dear Client' });
});
router.get('/contactUs', function(req, res, next) {
  res.render('ContactUs', { title: 'Contact Us' });
});
router.get('/userlogin', function(req, res, next) {
  res.render('userlogin', { title: 'User Login' });
});
router.get('/ceoProfile', function(req, res, next) {
  res.render('ceoProfile', { title: 'CEO Data Page' });
});
router.get('/ourServices', function(req, res, next) {
  res.render('ourServices', { title: 'Our Services' });
});
router.get('/urbanPilot', function(req, res, next) {
  res.render('urbanPilot', { title: 'Urban Pilot' });
});
router.get('/career', function(req, res, next) {
  res.render('career', { title: 'Career' });
});
module.exports = router;
