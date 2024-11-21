var feedModel = require("../models/feedModel");

function publicar(req, res) {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    var idUsuario = req.params.idUsuario;

    if (titulo == undefined) {
        res.status(400).send("O título está indefinido!");
    } else if (descricao == undefined) {
        res.status(400).send("A descrição está indefinido!");
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

function mostrar(req, res) {
    console.log("Função mostrar foi chamada");
    feedModel.mostrar()
        .then((resultado) => {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum post encontrado.");
            }
        })
        .catch((erro) => {
            console.error("Erro ao buscar posts: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function contarPostagens(req, res) {
    var idUsuario = req.params.idUsuario;

    if (idUsuario == undefined) {
        res.status(400).send("O ID do usuário está indefinido!");
    } else {
        feedModel.contarPostagens(idUsuario)
            .then(function(resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado[0]);
                } else {
                    res.status(404).send("Nenhuma postagem encontrada para este usuário.");
                }
            })
            .catch(function(erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function obterPersonagemFavorito(req, res) {
    var idUsuario = req.params.idUsuario;

    if (idUsuario == undefined) {
        res.status(400).send("O ID do usuário está indefinido!");
    } else {
        feedModel.obterPersonagemFavorito(idUsuario)
            .then(function(resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado[0]);
                } else {
                    res.status(404).send("Nenhum personagem favorito encontrado para este usuário.");
                }
            })
            .catch(function(erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function obterArcoFavorito(req, res) {
    var idUsuario = req.params.idUsuario;

    if (idUsuario == undefined) {
        res.status(400).send("O ID do usuário está indefinido!");
    } else {
        feedModel.obterArcoFavorito(idUsuario)
            .then(function(resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado[0]);
                } else {
                    res.status(404).send("Nenhum arco favorito encontrado para este usuário.");
                }
            })
            .catch(function(erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}




module.exports = {
    publicar,
    mostrar,
    contarPostagens,
    obterPersonagemFavorito,
    obterArcoFavorito
}