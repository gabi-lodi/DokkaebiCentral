var progressoModel = require("../models/progressoModel");


function progresso(req, res) {
    var capitulo = req.params.capitulo;
    var idUsuario = req.params.idUsuario;
    console.log('entrou no controller')

    if (capitulo == undefined) {
        res.status(400).send("O título está indefinido!");
        console.log('meoowow3')
    } else if (idUsuario == undefined) {
        res.status(403).send("O id do usuário está indefinido!");
        console.log('meow2')
    } else {
        progressoModel.progresso(capitulo, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                    console.log('meoowow')
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

function obterProgresso (req, res){
    console.log('meow2')
    var usuario = req.body.usuarioServer;
    var email = req.body.emailServer;
    if(usuario == undefined || email == undefined){
        res.status(403).send("O id do usuário está indefinido!");
        console.log('meow2')
    } else {
        progressoModel.obterProgresso(usuario, email)
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

function mediaCapitulos(req, res) {
    progressoModel.mediaCapitulos()
        .then((resultado) => {
            if (resultado.length > 0) {
                res.status(200).json({ mediaCapitulo: resultado[0].media });
            } else {
                res.status(204).send("Nenhum progresso encontrado.");
            }
        })
        .catch((erro) => {
            console.error("Erro ao buscar média dos capítulos: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    // listar,
    // listarPorUsuario,
    // pesquisarDescricao,
    progresso,
    obterProgresso,
    mediaCapitulos
    // editar,
    // deletar
}