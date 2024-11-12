var feedModel = require("../models/progressoModel");


function progresso(req, res) {
    var capitulo = req.body.capitulo;
    var idUsuario = req.params.idUsuario;

    if (capitulo == undefined) {
        res.status(400).send("O título está indefinido!");
    } else if (idUsuario == undefined) {
        res.status(403).send("O id do usuário está indefinido!");
    } else {
        feedModel.publicar(titulo, descricao, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    // listar,
    // listarPorUsuario,
    // pesquisarDescricao,
    progresso,
    // editar,
    // deletar
}