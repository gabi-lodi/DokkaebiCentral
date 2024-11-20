var progressoModel = require("../models/progressoModel");

function obterFavs (req, res){
    console.log('meow2')
    var usuario = req.body.usuarioServer;
    var email = req.body.emailServer;
    if(usuario == undefined || email == undefined){
        res.status(403).send("O id do usuário está indefinido!");
        console.log('meow2')
    } else {
        favsModel.obterFavs(usuario, email)
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
        )
    }
}

module.exports = {
    // listar,
    // listarPorUsuario,
    // pesquisarDescricao,
    obterFavs
    // editar,
    // deletar
}