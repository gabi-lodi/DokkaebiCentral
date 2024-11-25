var express = require("express");
var router = express.Router();

var redefinirController = require("../controllers/redefinirController");

// Certifique-se de que a URL da rota esteja correta
router.post("/redefinir/redefinir", function (req, res) {
    redefinirController.redefinir(req, res);
});

module.exports = router;