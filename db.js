var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "homestead",
  password: "secret",
  database: "express-demo",
  port: 33060
});

connection.connect(function(err) {
  if (err) {
    console.error("Failed to connect to database", err);
  } else {
    console.log("Connected to database.");
  }
});

exports.createUser = function(username, email, callback) {
  connection.query(
    "INSERT INTO `users` (`username`,`email`) VALUES (?,?)",
    [username, email],
    callback
  );
};

exports.listUsers = function(callback) {
  connection.query("SELECT `username` FROM `users`", callback);
};

exports.getUser = function(username, callback) {
  connection.query(
    "SELECT * FROM `users` WHERE `username` = ?",
    [username],
    callback
  );
};