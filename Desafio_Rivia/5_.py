from flask import Flask, request, jsonify
from pymongo import MongoClient

app = Flask(__name__)
client = MongoClient('mongodb://localhost:27017/')
db = client['meu_banco']
colecao = db['minha_colecao']

@app.route('/inserir', methods=['POST'])
def inserir_dados():
    dados = request.json
    resultado = colecao.insert_one(dados)
    return jsonify({"status": "Dados inseridos com sucesso", "id": str(resultado.inserted_id)})

if __name__ == '__main__':
    app.run(debug=True)

# Executar o código e acessar http://localhost:5000/inserir
