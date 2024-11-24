var express = require("express");
var router = express.Router();

var favsController = require("../controllers/favsController");

router.post("/favs/obterFavs/:idUsuario", function (req, res) {
    feedController.publicar(req, res);
});

router.get("/favs/popularPersonagens", function (req, res) {
    favsController.popularPersonagens(req, res);
});

router.get("/favs/popularArcos", function (req, res) {
    favsController.popularArcos(req, res);
});


module.exports = router;