import type { Request, Response, NextFunction } from 'express';

/* Catches all errors thrown in async route handlers */
export const errorMiddleware = (
  error: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  const message = error instanceof Error ? error.message : 'Internal server error';
  const status = (error as { status?: number }).status ?? 500;
  res.status(status).json({ message });
};
