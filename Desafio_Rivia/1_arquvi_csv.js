const fs = require('fs');
const Papa = require('papaparse');

// Função para escrever no arquivo CSV
function escreverCSV(nomeArquivo, dados) {
    // Converter os dados para formato CSV usando o PapaParse
    const csv = Papa.unparse(dados, {
        header: true, // Inclui cabeçalhos automaticamente
        columns: ['Coluna1', 'Coluna2']
    });

    // Escrever no arquivo
    fs.writeFileSync(nomeArquivo, csv, 'utf8');
}

// Exemplo de uso
const dados = [
    { Coluna1: 1, Coluna2: 'Dado1' },
    { Coluna1: 2, Coluna2: 'Dado2' }
];

escreverCSV('dados.csv', dados);

