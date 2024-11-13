var express = require("express");
var router = express.Router();

var progressoController = require("../controllers/progressoController");

router.post("/progresso/:idUsuario/:capitulo", function (req, res) {
    progressoController.progresso(req, res);
    console.log('entrei no router')
});

module.exports = router;