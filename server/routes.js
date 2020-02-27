var controller = require('./controllers');
var router = require('express').Router();

//localhost:port/classes/messages
//localhost:port/classes/users

//Connect controller methods to their corresponding routes
router.get('/messages', controller.messages.get);

router.post('/messages', controller.messages.post);

router.get('/users', controller.users.get);

router.post('/users', controller.users.post);

//router.get('/colors', controller.colors.get);


module.exports = router;

