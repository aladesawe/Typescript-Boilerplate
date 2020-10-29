import { HTTPStatus } from './httpStatus';

export class APIError extends Error {
    status: HTTPStatus;
    constructor(status: HTTPStatus, message: string) {
      super();
      Error.captureStackTrace(this, this.constructor);
      this.message = message;
      this.status = status;
    }
  }
  