import { Request, Response } from 'express';
import * as userService from '../services/userService.js';

export async function signUp(req: Request, res: Response) {
  await userService.create(req.body);
  res.sendStatus(201);
}
