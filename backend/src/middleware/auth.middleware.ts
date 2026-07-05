import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET ?? 'dev-secret';

/* Attaches decoded user payload to req for downstream handlers */
export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) {
    res.status(401).json({ message: 'Missing or invalid authorization header' });
    return;
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    (req as Request & { user: unknown }).user = decoded;
    next();
  } catch {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
};
