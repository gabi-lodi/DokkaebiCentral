var database = require("../database/config");

function redefinir(idUsuario, persoFav, arcoFav) {
    var instrucaoSql = `
        UPDATE Usuario SET fkPersoFav = ${persoFav}, fkArcoFav = ${arcoFav} WHERE idUsuario = ${idUsuario}
    `;
    return database.executar(instrucaoSql);  // Executa a query no banco de dados
}

module.exports = {
    redefinir
};
