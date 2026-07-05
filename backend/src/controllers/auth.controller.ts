import type { Request, Response, NextFunction } from 'express';

/* Handles POST /api/auth/login and POST /api/auth/register */
export const login = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    res.status(200).json({ token: '' });
  } catch (error) {
    next(error);
  }
};

export const register = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    res.status(201).json({ token: '' });
  } catch (error) {
    next(error);
  }
};
