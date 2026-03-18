import express from 'express';
const userRoutes = express.Router();
import userController from '../controllers/userController.js';

userRoutes.post('/users', userController.createUser);

export default userRoutes;