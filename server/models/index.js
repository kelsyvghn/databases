var db = require('../db');

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
    post: function (JSONObj) {
      //receive JSON object with username property - handled in params
      //send JSON.username to database
      var post = JSONObj;
    }
  }
};

