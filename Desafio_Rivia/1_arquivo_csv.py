import csv

def escrever_csv(nome_arquivo, dados):
    with open(nome_arquivo, mode='w', newline='') as arquivo_csv:
        writer = csv.writer(arquivo_csv)
        writer.writerow(['Coluna1', 'Coluna2'])  # Cabeçalhos
        for linha in dados:
            writer.writerow(linha)

# Exemplo de uso
dados = [(1, 'Dado1'), (2, 'Dado2')]
escrever_csv('dados.csv', dados)
