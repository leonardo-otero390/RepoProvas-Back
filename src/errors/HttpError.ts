export default class HttpError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super();
    this.message = message;
    this.status = status;

    Object.setPrototypeOf(this, HttpError.prototype);
  }
}

export const httpErrors = {
  badRequest: (message: string) => new HttpError(400, message),
  unauthorized: (message: string) => new HttpError(401, message),
  forbidden: (message: string) => new HttpError(403, message),
  notFound: (message: string) => new HttpError(404, message),
  conflict: (message: string) => new HttpError(409, message),
};
