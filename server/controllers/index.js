var models = require('../models');

//handles an http request sent to router
//converts the extracted string to an array that the models function can pass to the database

module.exports = {
  messages: {
    get: function (req, res) {}, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('this is from messages post!');
      console.log('here is the request!', req);
      res.end();
      //grab info out of req header (req.property)
      //send 200 back in res (message received)
      //format request data to send to models.messages.post
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      console.log('controller post', req.body.username);
      var userObj = req.body.username;
      models.users.post(userObj, (error, results, field) => { console.log('callback from users post query: ', error, results, field); });
      res.end('username received');
    }
  }
};

