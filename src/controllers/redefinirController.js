var redefinirModel = require("../models/redefinirModel");

function redefinir(req, res) {
    console.log('meow2');  // Confirmação para debug
    var idUsuario = req.body.idUsuarioServer;
    var persoFav = req.body.persoFavServer;
    var arcoFav = req.body.arcoFavServer;

    redefinirModel.redefinir(idUsuario, persoFav, arcoFav)
        .then(function (resultado) {
            res.json(resultado);  // Retorna o resultado ao frontend
        })
        .catch(function (erro) {
            console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);  // Retorna erro para o frontend
        });
}

module.exports = {
    redefinir
};
