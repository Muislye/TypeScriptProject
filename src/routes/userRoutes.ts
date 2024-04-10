import express from 'express';
import { getUsers } from '../controllers/userController';
import { authorize } from '../middleware/authMiddleware';

export const userRoutes = express.Router();

userRoutes.use(authorize);

userRoutes.get('/', getUsers);