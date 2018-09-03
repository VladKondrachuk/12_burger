// Set up MySQL connection.
let mysql = require("mysql");

let connection = mysql.createConnection({
  host: "ec2-50-16-196-57.compute-1.amazonaws.com",
  port: 5432,
  user: "vupzjyurobubws",
  password: "ac89c5ecd826cdf7c475dee7024cbdad6d05c082140f8191244badb8842dd9d8",
  database: "d6v0si915kc80c",
  url: "postgres://vupzjyurobubws:ac89c5ecd826cdf7c475dee7024cbdad6d05c082140f8191244badb8842dd9d8@ec2-50-16-196-57.compute-1.amazonaws.com:5432/d6v0si915kc80c"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
