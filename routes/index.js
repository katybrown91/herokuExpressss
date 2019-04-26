var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/katy', (rq, res, next)=>{
  res.json({hello: 'from katy'})
})

module.exports = router;
