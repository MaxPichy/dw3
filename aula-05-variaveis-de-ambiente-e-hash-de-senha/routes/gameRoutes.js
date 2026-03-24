import express from 'express';
import gameController from '../controllers/gameController.js';
import Auth from '../middleware/Auth.js';
const gameRoutes = express.Router();

// Na camada de routes são armazenados os ENDPOINTS (URLs) da API

// Endpoint para listar todos os games
gameRoutes.get('/games', Auth.Authorization, gameController.getAllGames);

// Endpoint para cadastrar um game
gameRoutes.post('/games', Auth.Authorization, gameController.createGame);

// Endpoint para deletar um game
gameRoutes.delete('/games/:id', Auth.Authorization, gameController.deleteGame);

// Endpoint para atualizar um game
gameRoutes.put('/games/:id', Auth.Authorization, gameController.updateGame);

// Endpoint para listar um jogo
gameRoutes.get('/games/:id', Auth.Authorization, gameController.getOneGame);

export default gameRoutes;