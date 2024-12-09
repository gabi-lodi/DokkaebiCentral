var database = require("../database/config");


// da um update no valor inserido ao usuário se cadastrar
function progresso(capitulo, idUsuario) {
    console.log('meow')
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", capitulo, idUsuario);
    var instrucaoSql = `
        UPDATE ProgressoLeitura SET capitulo = '${capitulo}' WHERE fkUsuario = '${idUsuario}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterProgresso(usuario, email){
    var instrucaoSql = `
    SELECT PL.capitulo FROM ProgressoLeitura as PL JOIN Usuario as U ON PL.fkUsuario = U.idUsuario  WHERE nome = '${usuario}' AND email = '${email}';
`;
    return database.executar(instrucaoSql);
}

function mediaCapitulos() {
    console.log("Executando query para calcular a média dos capítulos...");
    const instrucaoSql = `
        SELECT ROUND(AVG(capitulo)) AS media 
        FROM ProgressoLeitura;
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    progresso,
    obterProgresso,
    mediaCapitulos
}
