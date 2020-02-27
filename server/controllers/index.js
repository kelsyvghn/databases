var models = require('../models');

//handles an http request sent to router
//converts the extracted string to an array that the models function can pass to the database

module.exports = {
  messages: {
    get: function (req, res) {}, // a function which handles a get request for all messages
    post: function (req, res) {
      //grab info out of req header (req.property)
      //send 200 back in res (message received)
      //format request data to send to models.messages.post
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      var userObj = req.json;
      res.end('username received');
      models.users.post(userObj);
    }
  }
};

