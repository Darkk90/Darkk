const fs = require('fs');

// Função para escrever no arquivo CSV
function escreverCSV(nomeArquivo, dados) {
    // Adicionar cabeçalhos
    const cabecalhos = ['Coluna1', 'Coluna2'];
    
    // Converter o array de dados em formato CSV (incluindo cabeçalhos)
    const linhas = [cabecalhos, ...dados].map(linha => linha.join(',')).join('\n');
    
    // Escrever no arquivo
    fs.writeFileSync(nomeArquivo, linhas, 'utf8');
}

// Exemplo de uso
const dados = [
    [1, 'Dado1'],
    [2, 'Dado2']
];

escreverCSV('dados.csv', dados);
