import requests
import json

def consumir_api_e_escrever_json(api_url, json_arquivo):
    response = requests.get(api_url)
    dados = response.json()

    with open(json_arquivo, mode='w') as arquivo_json:
        json.dump(dados, arquivo_json, indent=4)

# Exemplo de uso (URL fictícia)
api_url = 'https://api.correios.com.br/rastreio/codigo'
consumir_api_e_escrever_json(api_url, 'dados_api.json')
