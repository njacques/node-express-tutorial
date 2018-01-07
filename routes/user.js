var db = require('../db');
var express = require('express');
var router = express.Router();

router.get("/:user", function(req, res, next) {
  db.getUser(req.params.user, function(err, rows) {
    if (err) {
      return next(err);
    }
    if (rows.length === 0) {
      return next(new Error("User not found."));
    }
    var user = rows[0];
    res.render("user", {
      username: user.username,
      email: user.email
    });
  });
});

module.exports = router;