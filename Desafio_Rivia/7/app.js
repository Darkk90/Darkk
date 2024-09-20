const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json()); // Middleware para lidar com JSON

// Conectar ao MongoDB
mongoose.connect('mongodb://mongo:27017/docker_node_api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Definir um modelo (schema) para o banco de dados
const Item = mongoose.model('Item', { name: String });

// Rota de teste
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Rota para adicionar um item
app.post('/items', async (req, res) => {
    const item = new Item({ name: req.body.name });
    await item.save();
    res.send(item);
});

// Rota para listar todos os itens
app.get('/items', async (req, res) => {
    const items = await Item.find();
    res.send(items);
});

const port = 3000;
app.listen(port, () => {
    console.log(`App rodando em http://localhost:${port}`);
});
