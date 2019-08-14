var express = require('express');
var router = express.Router();
var moviesCtrl = require('../controllers/movies');

/* GET users listing. */
router.get('/', moviesCtrl.index);
router.get('/new', moviesCtrl.new);
router.post('/', moviesCtrl.create);


module.exports = router;
