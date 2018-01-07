var db = require('../db');
var express = require('express');
var router = express.Router();

router.get("/", function(req, res, next) {
  db.listUsers(function(err, rows) {
    if (err) {
      return next(err);
    }
    res.render("users", {
      users: rows
    });
  });
});

module.exports = router;