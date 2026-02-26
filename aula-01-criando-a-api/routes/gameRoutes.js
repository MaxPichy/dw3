import express from 'express';
import gameController from '../controllers/gameController.js';
const gameRoutes = express.Router();

// Na camada de routes são armazenados os ENDPOINTS (URLs) da API

// Endpoint para listar todos os games
gameRoutes.get('/games', gameController.getAllGames);

export default gameRoutes;