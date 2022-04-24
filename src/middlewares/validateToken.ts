import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export default async function validateToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers.authorization?.replace('Bearer ', '');

  if (!token) res.sendStatus(401);

  const key = process.env.JWT_SECRET;

  jwt.verify(token, key, (error) => {
    if (error) res.sendStatus(401);
  });
  return next();
}
