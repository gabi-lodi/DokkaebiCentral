function progresso(capitulo) {

    var instrucaoSql = `
        INSERT INTO ProgressoLeitura (capitulo) VALUES ('${capitulo}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    progresso
};