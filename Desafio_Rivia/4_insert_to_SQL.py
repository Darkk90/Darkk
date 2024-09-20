import psycopg2

def inserir_no_banco_pgsql():
    conn = psycopg2.connect(
        dbname="meu_banco",
        user="usuario",
        password="senha",
        host="localhost",
        port="5432"
    )
    cursor = conn.cursor()
    
    # Criar tabela se não existir
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS tabela_exemplo (
        id SERIAL PRIMARY KEY,
        nome TEXT NOT NULL
    );
    ''')
    
    # Inserir dados
    cursor.execute('''
    INSERT INTO tabela_exemplo (nome) VALUES (%s);
    ''', ("Exemplo",))

    conn.commit()
    cursor.close()
    conn.close()

# Exemplo de uso
inserir_no_banco_pgsql()
