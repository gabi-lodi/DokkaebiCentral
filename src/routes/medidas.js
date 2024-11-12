var express = require("express");
var router = express.Router();

var contaController = require("../controllers/contaController");

router.get("/historico/:idUsuario", function (req, res) {
    contaController.buscarHistoricoUsuario(req, res);
});

module.exports = router;