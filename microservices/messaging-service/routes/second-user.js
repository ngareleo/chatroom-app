const express = require('express');
const router = express.Router();
const Schema = require('../models/message');
const profChecker = require('../controller/user-controller');

/* GET home page. */
router.get('/user2', function(req, res, next) {
  res.render("action", {user: "User2"});
});

router.post('/user2', (req, res, next) => {

  const data = Object.assign({}, req.body);
  let cleanContent = profChecker(data.content);
  
  let message = new Schema(
    {
      content: cleanContent,
      user: "user2",
      dateSent: new Date(),
    }
  );

  message.save().catch((err) => {
    console.log(err);
  });

  // done
  return res.json({
    "message": "Message recieved"
  });
});

module.exports = router;
