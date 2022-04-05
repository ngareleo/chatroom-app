var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/user1', function(req, res, next) {
  res.json({
    "message": "Welcome user One",
  });
});

module.exports = router;
