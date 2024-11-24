var favsModel = require("../models/favsModel");

function obterFavs(req, res) {
    console.log('meow2')
    var usuario = req.body.usuarioServer;
    var email = req.body.emailServer;
    if (usuario == undefined || email == undefined) {
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

function popularPersonagens(req, res) {
    favsModel.obterPopularidadePersonagens()
        .then((resultado) => {
            if (resultado.length > 0) {
                res.status(200).json(resultado);  // Retorna os dados em JSON
            } else {
                res.status(204).send("Nenhum dado encontrado.");
            }
        })
        .catch((erro) => {
            console.error("Erro ao buscar popularidade de personagens: ", erro.sqlMessage);
            res.status(500).json({ message: "Erro interno ao buscar dados de popularidade.", error: erro.sqlMessage });
        });
}

function popularArcos(req, res) {
    favsModel.obterPopularidadeArcos()
        .then((resultado) => {
            if (resultado.length > 0) {
                res.status(200).json(resultado); // Retorna os dados em JSON
            } else {
                res.status(204).send("Nenhum dado encontrado.");
            }
        })
        .catch((erro) => {
            console.error("Erro ao buscar popularidade de arcos: ", erro.sqlMessage);
            res.status(500).json({ message: "Erro interno ao buscar dados de popularidade.", error: erro.sqlMessage });
        });
}

module.exports = {
    // listar,
    // listarPorUsuario,
    // pesquisarDescricao,
    obterFavs,
    popularPersonagens,
    popularArcos
}