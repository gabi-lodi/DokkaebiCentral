var express = require("express");
var router = express.Router();

var favsController = require("../controllers/favsController");

router.post("/favs/obterFavs/:idUsuario", function (req, res) {
    feedController.publicar(req, res);
});

module.exports = router;