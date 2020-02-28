var db = require('../db');

var userhash = (string) => { //quick hash function for creating hashes of usernames.
  var hash = 0;
  if (string.length === 0) {
    return hash;
  }
  for (var i = 0; i < string.length; i++) {
    var char = string.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
};

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function () {
      //receives data in format from controller.messages.post
      //sends db an INSERT command in proper format (todo: what is the proper format)
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (username, callback) {
      //receive JSON object with username property - handled in params
      //send JSON.username to database
      var usernamehash = userhash(username);
      console.log('model post', username, usernamehash); //getting this far!
      var querystring = `INSERT INTO users (userid, username) VALUES ('${usernamehash}', '${username}')`;
      console.log(querystring);
      db.query(querystring, callback);
      // res.end('end of model user post');
    }
  }
};

