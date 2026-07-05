import type { Request, Response, NextFunction } from 'express';

/* Handles GET /api/users/me and GET /api/users/me/saved */
export const getProfile = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    res.status(200).json({});
  } catch (error) {
    next(error);
  }
};

export const getSavedPets = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    res.status(200).json([]);
  } catch (error) {
    next(error);
  }
};

export const toggleSavedPet = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    res.status(200).json({ petId: req.params.petId });
  } catch (error) {
    next(error);
  }
};
