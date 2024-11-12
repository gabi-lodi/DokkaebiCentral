var database = require("../database/config");

function progresso(idcapitulo, capitulo) {

    var instrucaoSql = ``;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}