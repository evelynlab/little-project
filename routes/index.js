var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index/index', { title: 'E', staticTag: 'index'});
});

router.get('/list', function(req, res, next){
  res.render('list/list', {title: 'LIST', staticTag: 'list'});
});

module.exports = router;

