var database = require("../database/config");
45

function obterFavs(usuario, email){
    var instrucaoSql = `
    SELECT PL.capitulo FROM ProgressoLeitura as PL JOIN Usuario as U ON PL.fkUsuario = U.idUsuario  WHERE nome = '${usuario}' AND email = '${email}';
`;
    return database.executar(instrucaoSql);
}


module.exports = {
    obterFavs
}