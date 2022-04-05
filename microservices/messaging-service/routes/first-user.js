const express = require('express');
const router = express.Router();
const Schema = require('../models/message');
const profChecker = require('../controller/user-controller');

/* GET home page. */
router.get('/user1', function(req, res, next) {
  res.render("action", {user: "User1"});
});

router.post('/user1', (req, res, next) => {

  const data = Object.assign({}, req.body);
  let cleanContent = profChecker(data.content);
  
  const temp = {
    content: cleanContent,
    user: "user1",
    dateSent: new Date(),
  };
  console.log(temp);
  let message = new Schema(temp);

  message.save().catch((err) => {
    console.log(err);
  });

  // done
  return res.json({
    "message": "Message recieved"
  });
});

module.exports = router;
