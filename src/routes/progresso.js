var express = require("express");
var router = express.Router();

var progressoController = require("../controllers/progressoController");

router.post("/progresso/:idUsuario", function (req, res) {
    progressoController.publicar(req, res);
});

module.exports = router;