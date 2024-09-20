from flask import Flask
import psycopg2

app = Flask(__name__)

def conectar_db():
    # Conecta ao banco de dados PostgreSQL que está rodando em um container separado.
    conn = psycopg2.connect(
        dbname="meu_banco",        # Nome do banco de dados
        user="usuario",            # Usuário do banco de dados
        password="senha",          # Senha do usuário
        host="db",                 # Host 'db' refere-se ao nome do serviço no docker-compose
        port="5432"                # Porta do PostgreSQL
    )
    return conn

@app.route('/')
def home():
    # Executa uma query simples para pegar a hora atual do banco
    conn = conectar_db()
    cursor = conn.cursor()
    cursor.execute('SELECT NOW()')  # Consulta para pegar a hora atual
    resultado = cursor.fetchone()
    cursor.close()
    conn.close()
    return f"Hora atual no banco: {resultado[0]}"

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
