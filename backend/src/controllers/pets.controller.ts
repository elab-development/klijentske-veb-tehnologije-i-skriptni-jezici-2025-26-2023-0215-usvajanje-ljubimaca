import type { Request, Response, NextFunction } from 'express';

/* Handles GET /api/pets and GET /api/pets/:id */
export const getPets = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    res.status(200).json([]);
  } catch (error) {
    next(error);
  }
};

export const getPetById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    res.status(200).json({ id: req.params.id });
  } catch (error) {
    next(error);
  }
};

export const createPet = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    res.status(201).json({});
  } catch (error) {
    next(error);
  }
};

export const deletePet = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    res.status(200).json({ deleted: req.params.id });
  } catch (error) {
    next(error);
  }
};
