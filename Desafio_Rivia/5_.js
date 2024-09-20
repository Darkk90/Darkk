const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
app.use(express.json()); // Para interpretar JSON no corpo da requisição

// Conectar ao MongoDB
const uri = 'mongodb://localhost:27017/';
const client = new MongoClient(uri);

async function conectarMongo() {
    await client.connect();
    console.log('Conectado ao MongoDB');
}

const db = client.db('meu_banco');
const colecao = db.collection('minha_colecao');

// Rota para inserir dados
app.post('/inserir', async (req, res) => {
    const dados = req.body;
    try {
        const resultado = await colecao.insertOne(dados);
        res.json({
            status: 'Dados inseridos com sucesso',
            id: resultado.insertedId
        });
    } catch (error) {
        console.error('Erro ao inserir dados:', error);
        res.status(500).json({ status: 'Erro ao inserir dados' });
    }
});

// Iniciar o servidor e conectar ao MongoDB
app.listen(5000, () => {
    console.log('Servidor rodando na porta 5000');
    conectarMongo().catch(console.error);
});
