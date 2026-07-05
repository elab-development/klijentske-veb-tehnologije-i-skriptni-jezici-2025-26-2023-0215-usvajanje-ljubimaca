import { Router } from 'express';
import { getPets, getPetById, createPet, deletePet } from '../controllers/pets.controller';
import { authMiddleware } from '../middleware/auth.middleware';

export const petsRouter = Router();

petsRouter.get('/', getPets);
petsRouter.get('/:id', getPetById);
petsRouter.post('/', authMiddleware, createPet);
petsRouter.delete('/:id', authMiddleware, deletePet);
