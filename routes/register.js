var db = require('../db');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('register', {});
});

router.post("/", function(req, res, next) {
  db.createUser(req.body.username, req.body.email, function(err) {
    if (err) {
      return next(err);
    }
    res.redirect("/user/" + req.body.username);
  });
});

module.exports = router;