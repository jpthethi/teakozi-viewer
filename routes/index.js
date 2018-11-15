var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Teakozi Log Viewer' });
});

function summary(test){
  var t = {}
  t.name = test.name;
  t.valid = test.valid;
  return t;
}

/* GET home page. */
router.post('/', function(req, res, next) {
  var log = JSON.parse(req.body.log)
  log.all_tags = {}
  log.tests.forEach(t=>{
    t.tags.split(",").forEach(tg=>{
      tg = tg.trim();
      if(log.all_tags[tg]==undefined) log.all_tags[tg]=[];
      log.all_tags[tg].push(summary(t));
    })
  })

  res.render('report', { log: log });
});

module.exports = router;
