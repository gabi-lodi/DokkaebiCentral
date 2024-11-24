var database = require("../database/config");
45

function obterFavs(usuario, email) {
    var instrucaoSql = `
    SELECT PL.capitulo FROM ProgressoLeitura as PL JOIN Usuario as U ON PL.fkUsuario = U.idUsuario  WHERE nome = '${usuario}' AND email = '${email}';
`;
    return database.executar(instrucaoSql);
}

function obterPopularidadePersonagens() {
    var instrucaoSql = `
    SELECT p.nome, COUNT(u.idUsuario) AS quantidade FROM Usuario AS u RIGHT JOIN Personagem AS p ON u.fkPersoFav = p.idPerso GROUP BY p.nome ORDER BY quantidade DESC;
    `;
    console.log("Executando SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterPopularidadeArcos() {
    var instrucaoSql = `
    SELECT p.nome, COUNT(u.idUsuario) AS quantidade FROM Usuario AS u RIGHT JOIN Arco AS p ON u.fkArcoFav = p.idArco GROUP BY p.nome ORDER BY quantidade DESC;
    `;
    console.log("Executando SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    obterFavs,
    obterPopularidadePersonagens,
    obterPopularidadeArcos
}