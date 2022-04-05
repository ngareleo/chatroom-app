const express = require('express');
const router = express.Router();


router.get('/user2', function(req, res, next) {
  res.json({
    "message": "Welcome user Two",
  });
});

router.post('/user2', (req, res, next) => {
  console.log("Message is ", req.body);

  return res.json({
    "message": "Message recieved"
  });
});
module.exports = router;
