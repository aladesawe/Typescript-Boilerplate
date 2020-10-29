import { NextFunction, Request, Response } from 'express';

import { logger } from '../utils/logger';
import { HTTPStatus } from '../types/httpStatus';

export function serviceLogger(req: Request, res: Response, next: NextFunction): void {
  const requestLog = `${req.method} | ${req.originalUrl}`;
  const responseLog = { status: res.statusCode };
  if (res.statusCode === HTTPStatus.InternalServerError) {
    logger.error(requestLog, responseLog);
  } else if (res.statusCode >= HTTPStatus.BadRequest) {
    logger.warn(requestLog, responseLog);
  } else {
    logger.info(requestLog, responseLog);
  }
  next();
}
