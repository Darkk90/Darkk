const axios = require('axios');
const fs = require('fs');

// Função para consumir API e escrever o resultado em um arquivo JSON
async function consumirApiEscreverJson(apiUrl, jsonArquivo) {
    try {
        const response = await axios.get(apiUrl); // Faz a requisição GET na API
        const dados = response.data;              // Extrai os dados da resposta

        // Escreve os dados no arquivo JSON
        fs.writeFileSync(jsonArquivo, JSON.stringify(dados, null, 4), 'utf8');
        console.log(`Dados salvos no arquivo: ${jsonArquivo}`);
    } catch (error) {
        console.error(`Erro ao consumir a API: ${error}`);
    }
}

// Exemplo de uso (URL fictícia)
const apiUrl = 'https://api.correios.com.br/rastreio/codigo';
consumirApiEscreverJson(apiUrl, 'dados_api.json');
