var database = require("../database/config");

function buscarHistoricoUsuario(idUsuario) {

    var instrucaoSql = `SELECT COUNT(idProgresso) FROM ProgressoLeitura WHERE fkUsuario = ${idUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarHistoricoUsuario
}
