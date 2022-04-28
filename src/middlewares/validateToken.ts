import dotenv from 'dotenv';
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { httpErrors } from '../errors/HttpError.js';
import * as userService from '../services/userService.js';

dotenv.config();

export default async function validateToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;
  if (!authorization) {
    throw httpErrors.unauthorized('Missing authorization header');
  }

  const token = authorization.replace('Bearer ', '');
  if (!token) {
    throw httpErrors.unauthorized('Missing token');
  }

  try {
    const { userId } = jwt.verify(token, process.env.JWT_SECRET) as {
      userId: number;
    };
    const user = await userService.findById(userId);
    res.locals.user = user;

    next();
  } catch {
    throw httpErrors.unauthorized('Invalid token');
  }
}
