var medidaModel = require("../models/medidaModel");


function buscarHistoricoUsuario(req, res){

    var idUsuario = req.body.idUsuario;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarHistoricoUsuario(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            console.log(resultado)
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}




module.exports = {
    buscarHistoricoUsuario
}