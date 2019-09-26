import { Request, Response, NextFunction } from 'express';
import * as logger from './logger';

export function loggerMiddleware(req: Request, res: Response, next: NextFunction) {
  logger.trace(req.method, req.url, req.headers['user-agent']);
  next();
}
