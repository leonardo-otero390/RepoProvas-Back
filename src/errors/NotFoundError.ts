import HttpError from './HttpError.js';

export default class NotFound extends HttpError {
  status: number;

  message: string;

  constructor(message?: string) {
    super();
    this.status = 404;
    this.message = message;
  }
}
