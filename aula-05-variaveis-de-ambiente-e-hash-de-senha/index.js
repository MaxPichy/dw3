import express from 'express';
const app = express();

import mongoose from 'mongoose';
import cors from 'cors';

// Importando os models
import Games from './models/Games.js';
import User from './models/Users.js';
// Importando as rotas
import gameRoutes from './routes/gameRoutes.js';
import userRoutes from './routes/userRoutes.js';

// Configurações do Express
app.use(express.json()); // Permite o uso de .json para aplicação

// Configurando o CORS
app.use(cors());

// Ativando a utilização das rotas
app.use('/', gameRoutes);
app.use('/', userRoutes);

// Iniciando a conexão com o banco de dados MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/api-the-games-novo');

// app.get('/', (req, res) => {
//     const games = [
//         {
//             title: "Game 1",
//             year: "2020",
//             platform: "PC",
//             price: 20
//         },
//         {
//             title: "Game 2",
//             year: "2024",
//             platform: "Xbox",
//             price: 30
//         }
//     ]
//     res.status(200).json(games)
// });

// Rodando a API na porta 4000
const port = 4000;
app.listen(port, (error) => {
    if(error){
        console.log(error)
    } else{
        console.log(`API rodando em http://localhost:${port}.`)
    }
})

