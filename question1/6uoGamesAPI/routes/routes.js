
var express = require("express");

var controller = require("./controller");

var router = express.Router();

/* GET home page. */
router.get('/', controller.welcome);

module.exports = router;

