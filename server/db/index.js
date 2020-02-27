var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

//we'll need to fix this later

//added below according to mysql docs
var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'chat'
});

db.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
});

module.exports = db; //Client does not support authentication protocol requested