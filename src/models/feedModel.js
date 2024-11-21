var database = require("../database/config");
45
function publicar(titulo, descricao, idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", titulo, descricao, idUsuario);
    var instrucaoSql = `
        INSERT INTO Postagem (titulo, descricao, fkUsuario) VALUES ('${titulo}', '${descricao}', ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function mostrar(){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")
    var instrucaoSql = `SELECT p.idPostagem, p.titulo, p.descricao, u.nome FROM Postagem AS p JOIN Usuario AS u ON p.fkUsuario = u.idUsuario ORDER BY p.idPostagem DESC;`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function contarPostagens(idUsuario) {
    console.log("Contando as postagens do usuário com ID:", idUsuario);
    var instrucaoSql = `
        SELECT COUNT(idPostagem) AS totalPostagens FROM Postagem WHERE fkUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterPersonagemFavorito(idUsuario) {
    console.log("Consultando o personagem favorito do usuário com ID:", idUsuario);
    var instrucaoSql = `
        SELECT p.nome FROM Personagem AS p JOIN Usuario AS u ON u.fkPersoFav = p.idPerso WHERE u.idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterArcoFavorito(idUsuario) {
    console.log("Consultando o arco favorito do usuário com ID:", idUsuario);
    var instrucaoSql = `
        SELECT a.nome FROM Arco AS a JOIN Usuario AS u ON u.fkArcoFav = a.idArco WHERE u.idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    publicar,
    mostrar,
    contarPostagens,
    obterPersonagemFavorito,
    obterArcoFavorito
}
