var database = require("../database/config")

function autenticar(usuario, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", usuario, email, senha)
    var instrucaoSql = `
        SELECT idUsuario, nome, email, senha FROM Usuario WHERE 
        
        nome = '${usuario}' AND
        email = '${email}' AND 
        senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(usuario, email, senha, dtNasc, persoFav, arcoFav) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", usuario, email, senha, dtNasc, persoFav, arcoFav);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO Usuario (nome, email, senha, dtNasc, fkPersoFav, fkArcoFav) VALUES ('${usuario}', '${email}', '${senha}', '${dtNasc}', '${persoFav}', '${arcoFav}');
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// pega o id do usuário que acabou de se cadastrar
function obterId(usuario, email, senha) {

    var instrucaoSql = `
    SELECT idUsuario FROM Usuario WHERE nome = '${usuario}' AND email = '${email}' AND senha = '${senha}';
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// a partir do id adquirido, insere no banco um valor inicial para os capítulos
function registrarLeitura(idUsuario) {

    var instrucaoSql = `
    INSERT INTO ProgressoLeitura (capitulo, fkUsuario) VALUES (1, '${idUsuario}');
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar,
    obterId,
    registrarLeitura
};