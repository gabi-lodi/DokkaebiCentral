var express = require("express");
var router = express.Router();

var feedController = require("../controllers/feedController");

router.post("/publicar/:idUsuario", function (req, res) {
    console.log("Rota /publicar foi chamada");
    feedController.publicar(req, res);
});

router.get("/mostrar", function (req, res) {
    console.log("Rota /mostrar foi chamada");
    feedController.mostrar(req, res);
});

router.get("/contarPostagens/:idUsuario", function(req, res) {
    feedController.contarPostagens(req, res);
});

router.get("/personagemFavorito/:idUsuario", function(req, res) {
    feedController.obterPersonagemFavorito(req, res);
});

router.get("/arcoFavorito/:idUsuario", function(req, res) {
    feedController.obterArcoFavorito(req, res);
});

module.exports = router;