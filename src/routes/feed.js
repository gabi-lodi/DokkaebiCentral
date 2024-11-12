var express = require("express");
var router = express.Router();

var feedController = require("../controllers/feedController");

router.post("/publicar/:idUsuario", function (req, res) {
    feedController.publicar(req, res);
});

module.exports = router;