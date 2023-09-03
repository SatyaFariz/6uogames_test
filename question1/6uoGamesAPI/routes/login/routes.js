
var express = require("express");

var controller = require("./controller");

var router = express.Router();

/* GET home page. */
router.post('/', controller.login);

module.exports = router;

