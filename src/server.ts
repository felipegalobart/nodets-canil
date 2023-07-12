//importar dependencias
import express from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from "path";


// configuraçao do template engine
dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.set('mustache', mustache());

//configuraçao da pasta publica

server.use(express.static(path.join(__dirname, '../public')));  //configuracao da pasta de arquivos estaticos

//Rotas

// Rodar servidor

server.listen(process.env.PORT);

