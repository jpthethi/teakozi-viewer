var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Teakozi Log Viewer' });
});

/* GET home page. */
router.post('/', function(req, res, next) {
  res.render('report', { log:JSON.parse(req.body.log) });
});

module.exports = router;
