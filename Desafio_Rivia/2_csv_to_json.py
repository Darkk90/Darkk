import csv
import json

def csv_para_json(csv_arquivo, json_arquivo):
    dados = []
    with open(csv_arquivo, mode='r') as arquivo_csv:
        csv_reader = csv.DictReader(arquivo_csv)
        for linha in csv_reader:
            dados.append(linha)

    with open(json_arquivo, mode='w') as arquivo_json:
        json.dump(dados, arquivo_json, indent=4)

# Exemplo de uso
csv_para_json('dados.csv', 'dados.json')
