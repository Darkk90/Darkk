# Imagem base
FROM node:14-slim

# Definir diretório de trabalho
WORKDIR /app

# Copiar package.json e instalar dependências
COPY package*.json ./
RUN npm install

# Copiar o restante dos arquivos da aplicação
COPY . .

# Expor a porta da API
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["node", "app.js"]
