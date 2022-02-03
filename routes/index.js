var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Dashboard' });
});

router.get('/productos', function(req, res, next) {
  res.render('productos', { title: 'My Dashboard :: Productos' });
});

module.exports = router;
