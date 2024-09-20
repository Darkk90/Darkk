const { Client } = require('pg');

// Função para inserir dados no PostgreSQL
async function inserirNoBancoPgSQL() {
    const client = new Client({
        user: 'usuario',
        host: 'localhost',
        database: 'meu_banco',
        password: 'senha',
        port: 5432,
    });

    try {
        // Conectar ao banco de dados
        await client.connect();

        // Criar tabela se ela não existir
        const criarTabela = `
        CREATE TABLE IF NOT EXISTS tabela_exemplo (
            id SERIAL PRIMARY KEY,
            nome TEXT NOT NULL
        );`;

        await client.query(criarTabela);

        // Inserir dados na tabela
        const inserirDados = `INSERT INTO tabela_exemplo (nome) VALUES ($1) RETURNING id;`;
        const valores = ['Exemplo'];

        const resultado = await client.query(inserirDados, valores);
        console.log(`Inserção realizada com sucesso. ID gerado: ${resultado.rows[0].id}`);
    } catch (err) {
        console.error('Erro ao executar operação no banco de dados:', err);
    } finally {
        // Fechar a conexão
        await client.end();
    }
}

// Exemplo de uso
inserirNoBancoPgSQL();
