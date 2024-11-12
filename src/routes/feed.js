var express = require("express");
var router = express.Router();

var avisoController = require("../controllers/avisoController");

router.post("/publicar/:idUsuario", function (req, res) {
    avisoController.publicar(req, res);
});

module.exports = router;