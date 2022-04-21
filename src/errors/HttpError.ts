export default class HttpError extends Error {
  status: number;

  constructor(message?: string) {
    super();
    this.message = message;

    Object.setPrototypeOf(this, HttpError.prototype);
  }

  conflict(message: string) {
    this.message = message;
    this.status = 409;
  }
}
