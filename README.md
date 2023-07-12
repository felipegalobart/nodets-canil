# nodets-canil

Projeto feito no módulo do curso Node + Typescript

### Pré-requisitos globais:
`npm install -g nodemon typescript ts-node`

### Instalação:
`npm install`

### Para rodar o projeto:
`npm run start-dev`



### Passos utilizados para a criaçao do projeto:

`npm init -y` 
`tsc --init`

### Alteração no arquivo de configuração tsconfig.json
    target: es6
    descomentar rootDir e outDir
    rootDir = ./src
    outDir = ./dist
    descomentar o moduleResolution

### instalar dependencias:
  `npm install express mustache-express dotenv` 
  `npm install --save-dev @types/express @types/mustache-express @types/node`  
  `npm install -g nodemon typescript ts-node` (globais)
### criaçao da pasta ./src
    criar arquivo server.ts
### inserir o comando abaixo nos scrips do package.json
    "start-dev": "nodemon -e ts,json,mustache src/server.ts"

