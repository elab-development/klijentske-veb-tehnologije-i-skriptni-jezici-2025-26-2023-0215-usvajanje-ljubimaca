import { Router } from 'express';
import { getProfile, getSavedPets, toggleSavedPet } from '../controllers/users.controller';
import { authMiddleware } from '../middleware/auth.middleware';

export const usersRouter = Router();

usersRouter.get('/me', authMiddleware, getProfile);
usersRouter.get('/me/saved', authMiddleware, getSavedPets);
usersRouter.post('/me/saved/:petId', authMiddleware, toggleSavedPet);
