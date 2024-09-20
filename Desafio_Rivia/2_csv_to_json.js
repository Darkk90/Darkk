const fs = require('fs');
const csv = require('csv-parser');

// Função para converter CSV em JSON
function csvParaJson(csvArquivo, jsonArquivo) {
    const resultados = [];

    // Lê o arquivo CSV e converte para um array de objetos
    fs.createReadStream(csvArquivo)
        .pipe(csv())
        .on('data', (dados) => resultados.push(dados))  // Armazena cada linha do CSV como objeto
        .on('end', () => {
            // Escreve o array de objetos no arquivo JSON
            fs.writeFileSync(jsonArquivo, JSON.stringify(resultados, null, 4), 'utf8');
            console.log(`Arquivo JSON gerado: ${jsonArquivo}`);
        });
}

// Exemplo de uso
csvParaJson('dados.csv', 'dados.json');
